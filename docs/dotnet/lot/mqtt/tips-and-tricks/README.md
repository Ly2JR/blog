# [提示与技巧](https://github.com/dotnet/MQTTnet/wiki/Tips-and-Tricks)

## 日志

推荐在实时运行环境中禁用日志(管局记录器或自定义记录器),因为它为消息处理添加了巨大的开销。它应该避免附加全局MQTTnet记录器，因为已经附加的方法(可能不会进一步处理条目)会导致在内部生成日志消息。

## 首选构建器

MQTTnet附带一些构建器像`MqttClientOptionsBuilder`或`MqttApplicationMessageBuilder`它们支持流式API。此外这些构建器用来版本兼容。它也支持执行更改`MqttClientOptions`类，但此文件可能在MQTTnet的哥个版本中具有重大改变。相反，构建器通常会提供向后兼容(如何可能)。

## 阻止服务器发布的处理事件

服务器(代理)不区分客户端还是它本身。每条消息都以相同的方式处理。但是，支持通过加检查`ClientId`属性来跳过服务器本身的事件。如果将其设置为`null`，则消息由服务器直接发送并跳过处理。

## Winodws l0T Core和UWP本机环回地址

Windows和UWP一样，环回连接(127.0.0.1)不被允许。如果你尝试连接到本地运行服务器(代理),者将会失败。

## 安卓中使用服务器项目的特别通知

在安卓下，有默认绑定IP地址的问题。因此你不等不使用真实的设备地址。检查以下示例。

```cs
IPHostEntry ipHostInfo = Dns.GetHostEntry(Dns.GetHostName());
IPAddress ipAddress = ipHostInfo.AddressList[0];

var server = new MqttFactory().CreateMqttServer();
server.StartAsync(new MqttServerOptionsBuilder()
    .WithDefaultEndpointBoundIPAddress(ipAddress)
    .WithDefaultEndpointBoundIPV6Address(IPAddress.None)
    .Build()).GetAwaiter().GetResult();
```

## ASP.NET MVC控制器下访问MQTT server

如果我们有一个ASP.NET Core 应用需要在MVC控制器下发送MQTT消息，`MqttService`需要被依赖注册为单例。技巧是有两个方法可用正确的设置MQTT部分：

1. `MqttService`实现所有MqttServer需要钩住的接口(像`IMqttServerClientConnectedHandler`,`IMqttServerApplicationMessageInterceptor`等)。
2. 编写一个`ConfigureMqttServerOptions(AspNetMqttServerOptionsBuilder options)`方法来为当前对象设置需要方法的回调:

```cs
public void ConfigureMqttServerOptions(AspNetMqttServerOptionsBuilder options)
{
    options.WithConnectionValidator(this);
     options.WithApplicationMessageInterceptor(this);
}
```

3. 编写一个`ConfigureMqttServer(IMqttServer mqtt)`来存储引用的MQTT服务为之后使用和设置处理程序。

```cs
public void ConfigureMqttServer(IMqttServer mqtt)
{
    this.mqtt = mqtt;
    mqtt.ClientConnectedHandler = this;
    mqtt.ClientDisconnectedHandler = this;
}
```

然后，在你的`Sratup`类配置和使用服务.

在`ConfigureServices`中:

```cs
services.AddSingleton<MqttService>();
services.AddHostedMqttServerWithServices(options => {
    var s = options.ServiceProvider.GetRequiredService<MqttService>();
    s.ConfigureMqttServerOptions(options);
});
services.AddMqttConnectionHandler();
services.AddMqttWebSocketServerAdapter();
```

在`Configure`

```cs
app.UseMqttEndpoint();
app.UseMqttServer(server => app.ApplicationServices.GetRequiredService<MqttService().ConfigureMqttServer(server));
```

## 性能测试

如果你正在查看性能，确保在Realse模式下运行并没有附加debugger。否则Visual Studio将会痛苦的放慢速度。此外，如果你使用它，你可能系统禁用控制台日志记录，者也会极大地减慢速度。

## 每个调用的多个订阅限制

在AWS loT Core中，每个订阅限制为8个主题筛选器。
