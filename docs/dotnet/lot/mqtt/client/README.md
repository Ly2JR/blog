# [客户端](https://github.com/dotnet/MQTTnet/wiki/Client)

这些代码示例只对版本3有效。请检测Sample目录关于版本4.0+的示例和文档。

这个视频教程展示如何为Windows(UWP和ioT Core)安装一个MQTTnet客户端：<https://www.youtube.com/watch?v=PSerr2fvnyc>

## 准备

以下代码展示使用MqttFactory用最简单的方式创建一个新的MQTT客户端。

```cs
//Create a new MQTT client
var factory=new MqttFactory();
var mqttClient=factory.CreateMqttClient();
```

## 客户端选项

所有MQTT客户端的选项被绑定在一个名叫`MqttClientOptions`的类中。它可以通过代码属性方法手动填充选项但是推荐使用`MqttClientOptionsBuilder`。这个类提供一个`fluent API`并且允许通过多个重载和帮助方法轻松设置选项。以下代码展示如何将builder与几个随机选项配合使用。

```cs
//create TCP based options using the builder.
var options=new MqttClientOptionsBuilder()
    .WithClientId("Client1)
    .WithTcpServer("broker.hivemq.com")
    .WithCredentials("bud","%spencer%")
    .WithTls()
    .WithCleanSession()
    .Build();
```

## 密码安全

默认实现使用来保存客户端密码。但是这是一个安全漏洞因为密码以明文存储在堆中。建议以此目的的使用。但是这个类不支持所有的平台(UWP,netstandard 1.3)。这个库没有实现它，因为需要自定义实现其他平台，如异步加密。推荐实现自己的`IMqttClientCredentials`类，返回解密的密码但不存储未加密的密码。`string SecureString`

## TCP连接

以下代码演示了如何使用基于TCP连接为Mqtt客户端设置选项。

```cs
//Use TCP connection
var options=new MqttClientOptionsBuilder()
    .WithTcpServer("broker.hivemq.com",1883)//Port is optional
    .Build();
```

## 基于证书的身份验证

以下代码展示了如何通过使用预计证书的身份验证连接到服务

```cs
//Certificate based authentication
List<X509Certificate> certs=new List<X509Certificate>
{
    new X509Certificate2("myCert.pfx)
};

var options=new MqttClientOptionBuilder()
    .WithTcpServer(broker,port)
    .WithTls(new MqttClientOptionsBuilderTlsParameters
    {
        UseTls=true,
        Certificates=certs
    })
    .Build();
```

## 自定义的CA与TLS结合使用

如果你的服务器在使用没有组织的CA身份验证（没有存储在系统中），如果身份验证是可用的你将会需要添加一个回调来验证它。注意这在.NET5之前不起作用。

```cs
//Load the ca.crt. On Some platforms you may also be able to use X509Certificate2.Import
X509Certificate2 caCrt=new X509Certificate2(File.ReadAllBytes("ca.crt"));

var options=new MqttClientOptionsBuilder()
    .WithTls(
        new MqttClientOptionsBuilderTlsParameters(){
            UseTls=true,
            SslProtocol=System.Security.Authentication.SslProtocols.Tls12,
            CerificateValidationHandler=(certContext)=>{
                X509Chain chain=new X509Charin();
                chain.ChainPolicy.RevocationMode=X509RevocationMode.NoCheck;
                chain.ChainPolicy.RevocationFlag=X509RevocationFlag.ExcludeRoot;
                chain.ChainPolicy.VerificationFlags=X509VerificationFlags.NoFlag;
                chain.ChainPolicy.VerificationTime=DateTime.Node;
                chain.ChainPolicy.UrlRetrievalTimeout=new TimeSpan(0,0,0);
                chain.ChainPolicy.CustomTrustStore.Add(caCrt);
                chain.ChainPolicy.TrustMode=X509ChainTrustMode.CustomRootTrust;

                //convert provided X509Certificate to X509Certificate2
                var x5092=new X509Certificate2(certContext.Certificate);
                return chain.Build(x5092);
            }
        }
    )
    .Build();
```

## 使用客户证书的TLS

以下代码展示了如何通过基于客户端证书的身份验证来连接到服务器

```cs
var caCert=X509Certificate.CreateFromCertFile(@"CA-cert.crt");
var clientCert=new X509Certificate2(@"client-certificate.pfx","ExportPasswordUsedWhenCeratingPfxFile");

var options=new ManagedMqttClientOptionsBuilder()
    .WithClientOptions(new MqttClientOptionBuilder()
    .WithClientId(Guid.NewGuid().ToString())
    .WithTcpServer(host,port)
    .WithTls(new MqttClientOptionsBuilderTlsParameters(){
        UseTls=true,
        SslProtocol=System.Security.Authentication.SslProtocols.Tls12,
        Certificates=new List<X509Certificate>()
        {
            clientCert,caCert
        }
    })
    .Build())
.Build();
```

CA证书采用*.crt格式，客户端证书应该是*.pfx并且有从私钥和证书原件导出文件的密码。*.pfx文件可以使用openssl创建，如下：

```bash
openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in clientCertificate.cer
```

## 处理特殊的证书

为了处理特殊的证书错误一个特殊验证回调是可用的(.NET Framework&netstandard)。对于UWP应用，一个属性可用。

```cs
//For .NET Framework & netstandard apps:
var options=new MqttClientOptionsBuilder()
    .WithTls(new MqttClientOptionsBuilderTlsParameters)
    {
        UseTls=true,
        CertificateValidationCallback=(X509Certificate x,X509Chain y,SslPolicyErrors z,IMqttClientOptions o)=>{
            //TODO:Check conditions of certificate by using above parameters.
            return true;
        }
    }
    .Build();

//For UWP apps
MqttTcpChannel.CustomIgnoreableServerCertificateErrorsResolver=o=>
{
    if(o.Server=="server_with_revoked_cert")
    {
        return new []{ChainValidationResult.Revoked};
    }
    return new ChainValidationResult[0];s
};
```

## WebSocket连接

为了使用WebSocket通信通道以下代码是必须的。

```cs
//Use WebSocket connection.
var options=new MqttClientOptionsBuilder()
    .WithWebSocketServer("broker.hivemq.com:8000/mqtt)
    .Build();
```

websocket安全连接也可以通过调用`UseTls()`方法，它将会从`ws://`协议切换到`wss//`。通常子协议是必须的，可以直接添加到URI或者添加到专用属性。

## 连接

设置MQTT客户端选项后可以建立建立。以下代码展示如何连接到服务。当然，可以用有效的[CancellationToken](https://docs.microsoft.com/de-de/dotnet/api/system.threading.cancellationtoken?view=netframework-4.8)替换。`CancellationToken.None`。

```cs
//Use WebSocket connection.
var options=new MqttClientOptionsBuilder()
    .WithWebSocketServer("broker.hivemq.com:8000/mqtt)
    .Build();
await mqttClient.ConnectAsync(options,CancellationToken.None);//Since 3.0.5 with cancellationToken
```

## 重新连接

如果与服务的连接丢失，则会触发`Disconnected`事件。如果调用`ConnectAsync`失败也会触发，因为服务器无法访问等。这允许只调用一次`ConnectAsync`方法并处理通过使用`Disconnected`事件处理重试等。如果重新连接失败`Disconnected`事件再次触发。以下代码展示如何设置这个行为包含一个短暂延迟。当然，这可以通过有效的[CancellationToken]替换。`CancellationToken.None`。

```cs
mqttClient.UseDisconnectedHandler(async e=>{
    Console.WriteLine("### DISCONNECTED FROM SERVER ###");
    await Task.Delay(TimeSpan.FromSeconds(5));

    try{
        await mqttClient.ConnectAsync(options,CancellationToken.None);//Since 3.0.5 with CancellationToken
    }
    catch{
        Console.WriTELine("### RECONNECTING FAILED ###");
    }
})
```

## 使用消息

以下代码展示如何处理传入的消息:

```cs
mqttClient.UseApplicationMessageReceivedHandler(e=>
{
    Console.WriteLine("### RECEIVED APPLICATION MESSAGE ###");
    Console.WriteLine($"+ Topic={e.ApplicationMessage.Topic}");
    Console.WriteLine($"+ Payload={Encoding.UTF8.GetString(e.ApplicationMessage.Payload)}");
    Console.WriteLine($"+ Qos={e.ApplicationMessage.QualityOfServiceLevel}");
    Console.WriteLine($"+ Retain={e.ApplicationMessage.Retain}");
    Console.WriteLine();

    Task.Run(()=>mqttClient.PublishAsync("hello/world"));
});
```

上面的示例以支持使用异步方法替代同步方法。

:warning: 接收消息内部发布消息，需要使用`Task.Run`处理。当使用QoS>0时,原有是消息处理在下个消息接收到之前必须先完成。原因是保留应用消息顺序。

## 订阅主题

一旦与服务器建立连接就可以订阅主题。以下代码展示如何在MQTT客户端连接之后订阅主题。

```cs
mqttClient.UseConnectedHandler(async e=>
{
    Console.WriteLine("### CONNECTED WITH SERVER ###");

    //Subscribe to a topic
    await mqttClient.SubscribeAsync(new MqttTopicFilterBuilder().WithTopic("my/topic").Build());

    Console.WriteLine("### SUBSCRIBED ###");
});
```

## 发布消息

应用消息可以直接使用属性或者通过使用`MqttApplicationMessageBuilder`创建。这个类有一些有用的重载使得很容易处理不同的有效载荷格式。这个API是一个`fluent API`构建。以下代码展示如何组合一个应用消息并发送它们:

```cs
var message=new MqttApplicationMessageBuilder()
    .WithTopic("MyTopic")
    .WithPayload("Hello World")
    .WithExactlyOnceQos()
    .WithRetainFlag()
    .Build();

await mqttClient.PublishAsync(message,CancellationToken.None);//Since 3.0.5 with CancellationToken
```

如果一个应用消息不需要填充所有的属性。以下代码展示如何创建一个非常基础的应用消息：

```cs
var message=new MqttApplicationMessageBuilder()
    .WithTopic("/MQTTnet/is/awesome")
    .Build();
```

## 调用RPC

`MQTTnet.Extensions.Rpc`扩展(nuget可用)允许发送一个请求并等待匹配回复。通过定义一个模式来完成，这个模式使用主题来关联请求喝响应。根据客户端使用情况来定义超时。以下代码展示如何发送一个RPC调用。

```cs
var rpcClient=new MqttRpcClient(_mqttClient);

var timeout=TimeSpan.FromSeconds(5);
var qos=MqttQualityOfServiceLevel.AtMostOnce;

var response=await rpcClient.ExecuteAsync(timeout,"myMethod",payload,qos);
```

响应请求的设备(Arduino，ESP8266等)需要转换主题才能回复它。以下代码展示如何实现处理。

```cs
//If using the MQTT client PubSubClient it must be ensured
//that the request topic for each method is subscribed like the following
mqttClient.subscribe("MQTTnet.RPC/+/ping");
mqttClient.subscribe("MQTTnet.RPC/+/do_somthing");

//It is not allowd to change the structure of the topic.
//otherwise rpc will not work
//So method names can be separated using an _ or.but no +,# or /.
//If it is required to distinguish between devices
//
```
