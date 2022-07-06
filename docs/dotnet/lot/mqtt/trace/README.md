# [跟踪](https://github.com/dotnet/MQTTnet/wiki/Trace)

这些示例只对版本3有效。请检查`Samples`目录找到关于版本4.0+的示例和文档。

## 简单跟踪

`MQTTClient`和`MqttServer`可用使用一个静态事件消费Debug消息。以下代码演示如何手动编写所有的跟踪消息到window控制台.

```cs
// Write all trace messages to the console window.
MqttNetGlobalLogger.LogMessagePublished += (s, e) =>
{
    var trace = $">> [{e.TraceMessage.Timestamp:O}] [{e.TraceMessage.ThreadId}] [{e.TraceMessage.Source}] [{e.TraceMessage.Level}]: {e.TraceMessage.Message}";
    if (e.TraceMessage.Exception != null)
    {
        trace += Environment.NewLine + e.TraceMessage.Exception.ToString();
    }

    Console.WriteLine(trace);
};
```

## 扩展跟踪

对于多个客户端运行在同一个进程中，因此必须在客户端之前分离跟踪消息的用例，必须通过客户端和服务器的构造函数指定自定义记录器。

此项目的内置记录器运行指定必须在记录器的构造函数中设置日期ID。执行此操作需要使用不同的构造函数。对象生成的每条日志消息，都可用在`MqqttNetLogMessage`类中访问指定的LogId.

以下代码演示了如何使用自定义Log Id。
```cs
// Use a custom log ID for the logger.
var factory = new MqttFactory();
var mqttClient = factory.CreateMqttClient(new MqttNetLogger("MyCustomId"));
```

## 高级跟踪

在必须将跟踪转发到其他跟踪库(如SeriLog或Microsoft.Extensions.Logging等)的情况下，必须实现自定义记录器，并且还必须实现接口`IMqttNetLogger`。然后像"扩展跟踪"章节一样指定新的记录器。
