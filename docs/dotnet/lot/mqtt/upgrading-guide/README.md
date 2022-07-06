# [升级向导](https://github.com/dotnet/MQTTnet/wiki/Upgrading-guide)

## 从3.X到4.0.0

- 服务器组件中的许多命名空间已更改。基本上所有类仍然存在，但必须使用新的命名空间导入。
- 整个库现在使用异步事件，而不是由接口实现的句柄。因此，客户端中每个接口实现（如应用程序消息接收处理程序）都必须移植到异步事件处理程序。前一个上下文信息仍可用作常规事件参数类。当事件未异步时，它应返回 Task.CompletedTask。
- 服务器和客户端类不再支持接口（IMqttClient 等）。应将其封装在自定义客户端中。
- 删除了许多重载和扩展方法，以保持公共 API 的整洁和小巧。因此，以前使用的扩展方法等必须在用户代码中再次创建。
- 出于安全原因，默认情况下不再启用默认（未加密）终结点。它仍然存在，可以通过现有的API激活（调用WithDefaultEndpoint（））。
- 服务器和客户端不再共享公共接口，如 IApplicationMessagePublisher。他们现在拥有独特的实现，为每个目的提供最佳的API。这是将服务器组件移动到专用 nuget 包中的准备工作。
- 从生成器中删除了几个 API，以保持 API 小而干净。如果一个使用的API消失了，应该有另一个合适的重载。

需要代码更改:

- TopicFilter:

```cs
MqttTopicFilterComparer.IsMatch(x, y)
```

到

```cs
MqttTopicFilterComparer.Compare(x, y) == MqttTopicFilterCompareResult.IsMatch)
```

- ClientUnsubscribedTopicHandler:

```cs
server.ClientUnsubscribedTopicHandler = new MqttServerClientUnsubscribedTopicHandlerDelegate(e => { ... });
```

到

```cs
server.ClientUnsubscribedTopicAsync += async e => { ... };
```

- ApplicationMessageReceivedHandler:

```cs
server.ApplicationMessageReceivedHandler = new MqttApplicationMessageReceivedHandlerDelegate(e => { ... });
```

到

```cs
server.InterceptingPublishAsync += async e => { ... };
```

- General server startup:

```cs
var options = new MqttServerOptionsBuilder();
var mqttFactory = new MqttFactory();
var server = mqttFactory.CreateMqttServer(_serverLogger);
await server.StartAsync(options.WithDefaultEndpointPort(port).Build());
```

到

```cs
var options = new MqttServerOptionsBuilder();
var mqttFactory = new MqttFactory();
var server = mqttFactory.CreateMqttServer(options.WithDefaultEndpointPort(port).Build(), _serverLogger);
await server.StartAsync();
```

## 从3.0.13到3.0。14

- `MQTTnet.Adapter.MqttChannelAdapter`构造函数附加一个参数在`IMqttPacketInspectorMQTTnet.Client.Options.IMqttClientOptions`做为属性可用。

## 从3.0.11到3.0.12或3.0.13

- 重命名命名空间`MQTTnet.AspNetCore`到`MQTTnet.AspNetCore.Extensions`

## 从3.0.9到3.0.10或3.0.11

- 从你的AapterFactory创建构造函数删除参数并将记录器传递那里。`logger``IMqttChannelAdapter``MQTTnet.Adapter.CreateClientAdapter(IMqttClientOptions options, IMqttNetLogger logger)`
- 传递根记录器，你之前创建的创建`MQTTnet.Adapter.MqttChannelAdapter``CreateChildLogger``CreateScopedLogger`

## 从3.0.8到3.0.9

- 替换`MQTTnet.Diagnostics.IMqttNetChildLogger`为`MQTTnet.Diagnostics.IMqttNetLogger`
- 替换`MQTTnet.AspNetCore.ApplicationBuilderExtensions.SelectSubProtocol(requestedSubProtocolValues)`为`MQTTnet.AspNetCore.MqttSubProtocolSelector.SelectSubProtocol(requestedSubProtocolValues)`
- 类过期并将在之后版本移除`MQTTnet.AspNetCore.ApplicationBuilderExtensions`

## 从3.0.6到3.0.7或3.0.8

- 目前没有什么特别

## 从3.0.5到3.0.6

- 有一个新的回调`Dictionary<object, object>SessionItems`，它允许在会话中存储自定义数据，并在所有拦截器中可用。更多示例,查阅<https://github.com/chkr1011/MQTTnet/wiki/Server#storing-data-in-the-session>。

## 从3.0.3到3.0.5

- `MqttConnectReturnCode`过期，使用`MqttConnectReasonCode`替代
- `ConnectAsync`现在有一个[取消令牌](https://docs.microsoft.com/de-de/dotnet/api/system.threading.cancellationtoken?view=netframework-4.8)可使用像这样:`await mqttClient.ConnectAsync(options, CancellationToken.None));`

## 从2.8.5到3.0.0

### 常用

- `MqttProtocolVersion`现在在命名空间`.MQTTnet.Formatter`中
- `MqttFixedHeader`, , , 现在在命名空间`MqttPacketBodyReader``MqttPacketReader``MqttPacketWrite``rMqttProtocolVersion``MQTTnet.Formatter`中
- `IMqttPacketSerializer`不在存在`MqttPacketSerializer`

### 托管客户端

- 更新异步处理：

```cs
private void Something()
{
    mqttClient.ApplicationMessageReceivedHandler = new MqttApplicationMessageReceivedHandlerDelegate(OnAppMessage);
    mqttClient.ConnectedHandler = new MqttClientConnectedHandlerDelegate(OnConnected);
    mqttClient.DisconnectedHandler = new MqttClientDisconnectedHandlerDelegate(OnDisconnected);
    mqttClient.ConnectingFailedHandler = new ConnectingFailedHandlerDelegate(OnConnectingFailed);
}

private async void OnAppMessage(MqttApplicationMessageReceivedEventArgs e)
{
}

private async void OnConnected(MqttClientConnectedEventArgs e)
{
}

private async void OnDisconnected(MqttClientDisconnectedEventArgs e)
{
}

private async void OnConnectingFailed(ManagedProcessFailedEventArgs e)
{
}
```

### 客户端

- 更新异步处理:

```cs
private void Something()
{
    mqttClient.ApplicationMessageReceivedHandler = new MqttApplicationMessageReceivedHandlerDelegate(OnAppMessage);
    mqttClient.ConnectedHandler = new MqttClientConnectedHandlerDelegate(OnConnected);
    mqttClient.DisconnectedHandler = new MqttClientDisconnectedHandlerDelegate(OnDisconnected);
}

private async void OnAppMessage(MqttApplicationMessageReceivedEventArgs e)
{
}

private async void OnConnected(MqttClientConnectedEventArgs e)
{
}

private async void OnDisconnected(MqttClientDisconnectedEventArgs e)
{
}
```

## From 2.7.5到3.x.x

常规：

- 在<https://github.com/chkr1011/MQTTnet/issues/781>下查看问题，如果你不确定，请打开新问题。
