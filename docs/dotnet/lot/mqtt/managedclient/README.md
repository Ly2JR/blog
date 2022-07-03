# [托管客户端](https://github.com/dotnet/MQTTnet/wiki/ManagedClient)

这些示例只对版本3有效。请检查`Samples`目录了解版本4.0+的示例和文档。

## 准备

这个项目也包含一个托管MQTT客户端。与常规Mqtt客户端相对，客户端有一些附加功能。这些功能反应了最常用的案例,因此托管客户端提供的拆箱即用的MQTT客户端有以下功能:

1. 托管客户端启动一次将自动保持连接包括重连等。
2. 所有的MQTT应用消息被添加到一个内部队列并当服务器可用时处理。
3. 所有MQTT应用消息可用被存储。支持重启应用之后在发送它们。
4. 所有的应用都跨服务连接管理。在服务类连接丢失后不需要手动订阅。

托管客户端做为一个特殊的nuget包可用(<https://www.nuget.org/packages/MQTTnet.Extensions.ManagedClient/>)。

以下代码演示如何设置并启动托管MQTT客户端.

```cs
//Setup and start a managed MQTT Client.
var options=new ManagedMqttClientOptionsBilder()
    .WithAutoReconnectDelay(TimeSpan.FromSeconds(5))
    .WithClientOptions(new MqttClientOptionsBuilder()
        .WithClientId("Client1")
        .WithTcpServer("broker.hivemq.com")
        .WithTls().Build())
    .Build();

var mqttClient=new MqttFactory().CreateManagedMqttClient();
await mqttClient.SubscribeAsync(new MqttTopicFilterBuilder().WithTopic("my/topic").Build());
await mqttClient.StartAsync(options);

//StartAsync returns immediately,as it starts a new thread using Task.Run,
//and so the callding thread need to wait
Console.ReadLin();
```

托管客户端提供一个`UseConnectedHandler`方法为客户端连接时附加一个处理。这也有一个`ManagedMqttClient.ConnectionFailedHandler`属性用来设置跟着连接失败(版本3.1释放),并且一个`ManagedMattClient.ConnectingFailedAsync`事件(版本4.x释放)

## 消息处理

与常规客户端类似，托管客户端也有一个`Publish`方法。但是托管客户端这个方法不会在失败时抛出异常因为消息仅是被添加到内部队列中并稍后处理。

但是托管客户端有一些事件允许处理发送错误等等。
