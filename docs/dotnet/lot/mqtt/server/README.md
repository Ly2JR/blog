# [服务端](https://github.com/dotnet/MQTTnet/wiki/Server)

这些示例只对版本3有效。请检查`Samples`目录找到关于版本4.0+的示例和文档。

## 准备

创建一个MQTT服务根创建一个MQTT客户端相似。以下代码演示使用TCP创建最简单的一个新MQTT服务来监听默认1883端口。

```cs
//Start a MQTT server.
var mqttServer=new MqttFactory().CreateMqttServer();
await mqttServer.StartAsync(new MqttServerOptions());
Console.WriteLine("Press any key to exit.");
Console.WriteLine();
await mqttServer.StopAsync();
```

MQTT服务的一些选项设置可直接使用`MqttServerOptions`来设置值或者通过使用`MqttServerOptionBuilder`（推荐这种方式）。以下代码演示如何使用`MqttServerOptionsBuilder`。

```cs
var optionsBuilder=new MqttServerOptionsBuilder()
    .WithConnectionBacklog(100)
    .WithDefaultEndpointPort(1884);

var mqttServer=new MqttFactory().CreateMqttServer();
await mqttServer.StartAsync(optionsBuilder.Build());
```

## 验证MQTT客户端

以下代码演示如何验证来自MQTT客户端的请求连接:

```cs
var optionsBuilder=new MqttServerOptionsBuilder()
    .WithConnectionValidator(c=>
    {
        if(c.ClientId.Length<10>)
        {
            c.ReasonCode=MqttConnectReasonCode.ClientIdentifierNotValid;
            return;
        }
        if(c.Username!="mySecretUser")
        {
            c.ReasonCode=MqttConnectReasonCode.BadUserNameOrPassword;
            return;
        }
        if(c.Password!="mySecretPassword")
        {
            c.ReasonCode=MqttConnectReasonCode.BadUserNameOrPassword;
            return;
        }
        c.ReasonCode=MqttConnectReasonCode.Success;
    });
```

## 使用证书

为了使用一个加密连接，需要包含私钥的证书。以下代码演示如何使用证书加密的启动服务。

```cs
using System.Reflection;
using System.Security.Authentication;
using System.Security.Cryptography.X509Certificates;
...

var currentPath=Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
var certificate=new X509Certificate2(Path.Combine(CurrentPath,"certificate.pfx"),"yourPassword",X509KeyStorageFlag.Exportable);

var optionsBuilder=new MqttServerOptionsBuilder()
    .WithoutDefaultEndpoint()//this call disables the default unencrypted endpoint on port 1883
    .WithEncryptedEndpoint()
    .WithEncryptedEndpointPort(config.Port)
    .WithEncryptionCertificate(certificate.Export(X509ContentType.Pfx))
    .WithEncryptionSslProtocol(SslProtocols.Tls12)
```

但是也有其他重载方法可用获取有效的证书对象(字节数组)。

为了创建用于测试的自签名证书，以下命令可用(Windows SDK必须安装):

```bash
makecert.exe -sky exchange -r -n "CN=selfsigned.crt" -pe -a sha1 -len 2048 -ss My "test.cer"
```

OpenSSL也可以用来创建一个自签名PFX证书,[这里有描述](https://github.com/Azure/azure-xplat-cli/wiki/Getting-Self-Signed-SSL-Certificates-(.pem-and-.pfx))。

### 示例

```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
openssl pkcs12 -export -out certificate.pfx -inkey key.pem -in cert.pem
```

## 验证没有安装在机器上的CA证书

```cs
var caFile=new FileInfo("root.crt");
var ca=new X509Certificate2(caFile.FullName);

options.TlsEndpointOptions.RemoteCertificateValidationCallback+=(sender,cer,chain,sslPolicyErrors)=>
{
    try
    {
        if(sslPolicyErrors==SslPolicyErrors.None)
        {
            return true;
        }
        if(sslPolicyErros==SslPolicyErrors.RemoteCertificateChainErrors)
        {
            chain.ChainPolicy.RevocationMode=X509RevocationMode.NoCheck;
            chain.ChainPolicy.VerificationFlags=X509VerificationFlags.NoFlag;
            chain.ChainPolicy.ExtraStore.Add(ca);
            chain.Build((X509Certificate2)cer);
            return chain.ChainElements.Cast<X509ChainElement>().Any(a=>a.Certificate.Thumbprint==ca.Thumbprint);
        }
    }
    catch{}
    return false;
};
```

## 发布消息

服务也能发布MQTT应用消息。对象与客户端实现相似。由于服务器事实上能够发布自己的消息不需要在同一个进程中循环连接。

这也允许在Windows loT Core UWP app上运行服务。该平台具有网络隔离功能，因此无法通过本地主机等进行通信。

发布消息的示例在客户端章节进行了描述。

## 消费消息

服务端也能处理任何客户端发布的应用消息。每条已处理的消息将会触发`ApplicationMessageReceived`事件。它具有与客户端相同的格式，但是具有额外的客户端ID。

消费应用消息的细节在客户端章节进行了描述。

## 保存保留的应用消息

服务端支持保留MQTT消息。这些消息被保留直到客户端连接并订阅它们时发送到客户端。它也支持保存所有保留的消息并在服务端启动之后加载它们。这需要实现一个接口。以下代码演示如何将保留的消息序列化为JSON：

```cs
// Setting the options
options.Storage = new RetainedMessageHandler();

// The implementation of the storage:
// This code uses the JSON library "Newtonsoft.Json".
public class RetainedMessageHandler : IMqttServerStorage
{
    private const string Filename = "C:\\MQTT\\RetainedMessages.json";

    public Task SaveRetainedMessagesAsync(IList<MqttApplicationMessage> messages)
    {
        File.WriteAllText(Filename, JsonConvert.SerializeObject(messages));
        return Task.FromResult(0);
    }

    public Task<IList<MqttApplicationMessage>> LoadRetainedMessagesAsync()
    {
        IList<MqttApplicationMessage> retainedMessages;
        if (File.Exists(Filename))
        {
            var json = File.ReadAllText(Filename);
            retainedMessages = JsonConvert.DeserializeObject<List<MqttApplicationMessage>>(json);
        }
        else
        {
            retainedMessages = new List<MqttApplicationMessage>();
        }
            
        return Task.FromResult(retainedMessages);
    }
}
```

## 拦截应用消息
