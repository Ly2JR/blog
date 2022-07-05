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

可以设置自定义拦截器来控制MQTT客户端可以订阅哪些主题。这允许将私有API主题移动到客户端受保护的区域。以下代码演示了如何使用订阅拦截器。

```cs
//Protect serveral topics from being subscribed from every client.
var optionsBuilder=new MqttServerOptionsBuilder()
    .WithSubScriptionInterceptor(context=>
    {
        if(context.TopicFilter.Optic.StartWith("admin/foo/bar")&&context.ClientId!="theAdmin")
        {
            content.AcceptSubScription=false;
        }
        if(context.TopicFilter.Topic.StartWith("the/secret/stuff")&&context.ClientId!="Imperator")
        {
            context.AcceptSubScription=false;
            context.CloseConection=true;
        }
    })
    .Build();
```

以上示例也支持使用异步方法替代同步方法。

## 在session中存储数据

从版本3.0.6及以上，有一个叫`SessionItems`的`Dictionary<object,object>`对象。它允许在Session中存储自定义数据并且对所有拦截器有用。

```cs
var optionsBuilder=new MqttServerOptionsBuilder()
    .WithConnectionValidator(c=>{c.SessionItems.Add("SomData",true);})
    .WithSubscriptionInterceptor(c={c.SessionItems.Add("YourData",new List<string>{"a","b"});})
    .WithApplicationMessageInterceptor(c=>{c.SessionItems.Add("Test",123);})
```

## ASP.NET Core集成

### ASP.NET Core 2.0

这个库也支持基于WebSocket的服务器，已集成到ASP.NET Core 2.0中。这个功能需要额外的`MQTTnet.AspNetCore`库名。添加这个库之后MQTT服务可以添加到Kestrel HTTP服务。

```cs
// In class _Startup_of the ASP.NET Core 2.0 project
public void ConfigureServices(IServiceCollection services)
{
    //This adds a hosted mqtt server to the services
    services.AddHostedMqttServer(builder=>builder.WithDefaultEndpointPort(1883));

    //This adds TCP server support based on System.NET.Socket
    services.AddMqttTcpServerAdapter();

    //This adds websocket support
    services.AddMqttWebSocketServerAdapter();
}

public void Configure(IApplicationBuildder app,IHostingEnvironment env)
{
    //This maps the websocket to an MQTT endpoint
    app.UseMqttEndpoint();
    //Other stuff
}
```

### ASP.NET Core 2.1+

`MQTTnet.AspNetCore`与ASP.NET Core 2.0有抽象表达兼容但它也提供基于ASP.NET Core 2.1的Microsoft.AspNetCore.Connections.Abstractions的新TCP传输。这个传输与旧的TCP传输是互斥的，因此你只能添加和使用它们中的一个。我们的基准表明，新的传输速度提高了30倍。

```cs
//In class _Program_ of the ASP.NET Core 2.1 or 2.2 project
private static IWebHost BuildWebHost(string[] args)=>
{
    WebHost.CreateDefaultBuilder(args)
    .UseKestrel(o=>{
        o.ListenAnyIP(1883,l=>l.UseMqtt());//MQTT pipeline
        o.ListenAnyIP(5000);//Default HTPP pipeline
    })
    .UseStartup<Startup>()
    .Build();
}

//In class _Startup_ of the ASP.NET Core 2.1 or 2.2 project
public void ConfigureServices(IServiceCollection services)
{
    //this adds a hosted mqtt server to the services
    services.AddHostedMqttServer(builder=>builder.WithDefaultEndpointPort(1883));

    //this adds tcp server support based on Microsoft.AspNetCore.Connection.Abstractions
    services.AddMqttConnectionHandler();

    //this adds websocket support
    services.AddMqttWebSocketServerAdapter();
}
```

### ASP.NET Core 3.1+(自MQTT版本3.0.9起)

在ASP.NET Core 3.1+,服务可以像这样配置。请记住，TSL中间件连接还不可用，因此这将只用WebSocket连接方法工作(查阅<https://github.com/chkr1011/MQTTnet/issues/464>)。

```cs
//In class _Propram_ of the ASP.NET Core 3.1+ project.
private static IWebHost BuildWebHost(string[] args)=>
    WebHost.CreateDefaultBuilder(args)
        .UseKestrel(o=>{
            o.ListenAnyIP(1883,l=>l.UseMqtt());//MQTT pipeline
            o.ListenAnyIP(5000);//Default HTTP pipeline
        })
        .UseStartup<Startup>()
        .Build();

//in class _Startup_ of the ASP.NET Core 3.1+ project
public void ConfigureServices(IServiceCollection services)
{
    services
        .AddHostedMqttServer(mqttServer=>mqttServer.WithoutDefaultEndpoint())
        .AddMqttConnectionHandler()
        .AddConnections();
}

public void Configure(IApplicationBuilder app.IWebHostEnvironment env)
{
    app.UseEndpoints(endpoints=>
    {
        endpoints.MapMqtt("/mqtt");
    });

    app.UserMqttServer(server=>
    {
        //TODO:Do something with the server
    });
}
```

### ASP.NET 5.0

ASP.NET 5.0项目程序类:

```cs
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using MQTTnet.AspNetCore.Extension;

public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args)=>
        Host.CreateDefaultBuilder(args)
        .ConfigureWebHostDefaults(webBuilder=>
        {
            webBuilder.UseKestrel(
                o=>
                {
                    o.ListenAnyIP(1883,l=>l.UseMqtt());//MQTT pipeline
                    o.ListenAnyIP(5000);//Default HTTP pipeline
                };
            )

            webBulder.UserStartup<Startup>();
        })
}
```

ASP.NET 5.0项目的`Startup`类：

```cs
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using MQTTnet.AspNetCore;
using MQTTnet.AspNetCore.Extensions;

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services
            .AddHostedMqttServer(mqttServer=>mqttServer.WithoutDefaultEndpoint())
            .AddMqttConnectionHandler()
            .AddConnections();
    }

    public void Configure(IApplicationBuilder app,IWehBostEnvironment env)
    {
        app.UseRouting();

        app.UseEndpoints(endpoints=>
        {
            endpoints.MapConnectionHandler<MqttConnectionHandler>(
                "/mqtt",
                httpConnectionDispatcherOptions=>httpConnectionDispatcherOptions.WebSockets.SubProtocolSelector=protocolList=>protocolList.FirstOrDefault()??string.Empty
            );
        });

        app.UseMqttServer(server=>
        {
            //TODO：do something with the server
        });
    }
}
```

## Windows lOT Core 和UWP本地循环地址

在Windows loT以及UWP中，循环连接(127.0.0.1)是不允许的。如果你尝试连接到本地允许的服务器(代理),这将会失败。查考[与本地(环回)通讯](https://docs.microsoft.com/en-us/windows/iot-core/develop-your-app/loopback)在Windows 10 loT Core和UWP-app是启用环回。

## 在安卓总使用服务器项目的特别通知

在安卓下，有一绑定默认IP地址的问题。因此你不得不使用设备的真实地址。检查以下示例。

```cs
IPHostEntry ipHostInfo=Dns.GetHostEntry(Dns.GetHostName());
IPAddress ipAddress=ipHostInfo.AddressList[0];

var server=new MqttFactory.CreateMqttServer();
server.StartAsync(new MqttServerOptionsBuilder()
    .WithDefaultEndpointBoundIPAddress(ipAddress))
    .WithDefaultEndpointBoundIPV6Address(ipAddress.None)
    .Build().GetAwaiter().GetResult();
```

## 在ASP.NET MVC控制器访问MQTT服务

如果我们有一个ASP.NET Core引用需要从MVC控制器发送MQTT消息。`MqttService`单例需要被依赖注册。诀窍是有两种方法来正确设置MQTT部分：

1. 让`MqttService`实现与MqttServer需要挂钩的所有接口(像`IMqttServerClientConnectedHandler`,`IMqttServerApplicationMessageInterceptor`，等)
2. 写一个`ConfigureMqttServerOptions(AspNetMqttServerOptionsBuilder options)`方法，来为当前对象设置需要的方法的回调。

```cs
public void ConfigrureMqttServerOptions(AspNetMqttServerOptionBuilder options)
{
    option.WithConnectionValidator(this);
    options.WithApplicationMessageInterceptor(this);
}
```

3. 写一个`ConfigureMqttServer(IMqttServer mqtt)`用于存储对MQTT服务器的引用以供之后使用，并设置处理程序：

```cs
public void ConfigureMqttServer(IMqttServer mqtt)
{
    this.mqtt=mqtt;
    mqtt.ClientConectionHandler=this;
    mqtt.ClientDisconnectedHandler=this;
}
```

然后，在你的`Startup`类里配置并使用服务.

在`ConfigureServices`:

```cs
services.AddSingleton<MqttService>();
services.AddHostedMqttServerWithServices(options=>
{
    var s=options.ServiceProvider.GetRequiredService<MqttService>();
    s.ConfigureMqttServerOptions(options);
});
services.AddMqttConnectionHandler();
services.AddMqttWebSocketServerAdapter();
```

在`Configure`：

```cs
app.UserMqttEndpoint();
app.UseMqttServer(server=>app.ApplicationServices.GetRequiredService<MqttService>().ConfigureMqttServer(server));
```

## 使用ASP.NET Core 3.0+或者.NET 4.6+的特性路由

从<https://www.nuget.org/packages/MQTTnet.AspNetCore.AttributeRouting>添加特性路由包到你的项目。

修改你的`Startup.cs`类并用以下代码:

```cs
public void ConfigureServices(IServiceCollection services)
{
    //Identity and build routes for the current assembly
    services.AddMqttControllers();

    services
        .AddHostMqttServer(mqttServer=>mqttServer.WithoutDefaultEndpoint())
        .AddHostedMqttServerWithServices(mqttServer=>
        {
            //Optionally set server options here
            mqttServer.WithoutDefaultEndpoint();

            //Enable Attribute routing
            mqttServer.WithAttributeRouting();
        })
        .AddMqttConnectionHandler()
        .AddConnections();
}
```

通过继承`MqttBaseController`创建你的控制器。在你的程序集,控制器或者操作上使用`MqttRoute`特性来路主题与你操作匹配的消息。

这有一个控制器示例:

```cs
[MqttController]
[MqttRoute("[controller]")]
public class MqttWeatherForecastController:MqttBaseController
{
    private readonly ILogger<MqttWeatherForecastController> _logger;

    //Controllers have full suppor for dependency injecton
    public MqttWeatherForecaseController(ILogger<MqttWeatherForecaseController> loger)
    {
        _logger=logger;
    }

    //Support template routing with typed constranints
    [MqttRoute("{zipCode:int}/temperature")]
    public Task WeatherReport(int zipCore)
    {
        //We have access to the MqttContext
        if(zipCode!=90210)
        {
            MqttContext.CloseConnection=true;
        }

        //We have access to the raw message.Thre is no model binding(yet) 
        //so we get our message like the instead of using a [FromBody] attribute.
        var temperaure=BitConvert.ToDouble(Message.Payload);

        _logger.LogInformation($"It's {temperature} degrees in Hollywood");

        if(temperature<=0||temperature>=130)
        {
            //Prevernts the message from being published on the topic to any subscribers
            return BadMessage();
        }

        //Publish the message to all subscribers on this topic
        return Ok();
    }
}
```

## 在NET5.0中使用WebSockets

在`Programs.cs`类中，使用已知的启动(上面已经描述):

```cs
public static class Program
{
    public static Task Main(string[] args)
    {
        return BuildWebHost(args).RunAsync();
    }

    private static IWebHost BuildWebHost(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .UseKestrel(o =>
            {
                o.ListenAnyIP(1883, l => l.UseMqtt());
                o.ListenAnyIP(5000); // default http pipeline
            })
            .UseStartup<Startup>()
            .Build();
}
```

在`Starup.cs`类中，使用以下代码:

```cs
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services
        .AddHostedMqttServer(mqttServer => mqttServer.WithoutDefaultEndpoint())
        .AddMqttConnectionHandler()
        .AddConnections();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseRouting();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapMqtt("/mqtt");
        });

        app.UseMqttServer(server =>
        {
            server.StartedHandler = new MqttServerStartedHandlerDelegate(async args =>
            {
                var frameworkName = GetType().Assembly.GetCustomAttribute<TargetFrameworkAttribute>()?
                    .FrameworkName;

                var msg = new MqttApplicationMessageBuilder()
                    .WithPayload($"Mqtt hosted on {frameworkName} is awesome")
                    .WithTopic("message");

                while (true)
                {
                    try
                    {
                        await server.PublishAsync(msg.Build());
                        msg.WithPayload($"Mqtt hosted on {frameworkName} is still awesome at {DateTime.Now}");
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(e);
                    }
                    finally
                    {
                        await Task.Delay(TimeSpan.FromSeconds(2));
                    }
                }
            });
        });

        app.Use((context, next) =>
        {
            if (context.Request.Path == "/")
            {
                context.Request.Path = "/Index.html";
            }

            return next();
        });

        app.UseStaticFiles();

        app.UseStaticFiles(new StaticFileOptions
        {
            RequestPath = "/node_modules",
            FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "node_modules"))
        });
    }
}
```

在<https://github.com/chkr1011/MQTTnet/blob/master/Source/MQTTnet.Server/Web/Startup.cs>下查阅示例，了解Net5.0中正确的WebSocket实现。
