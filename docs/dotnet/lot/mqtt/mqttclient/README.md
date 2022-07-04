# [Mqtt客户端](https://github.com/dotnet/MQTTnet/wiki/MqttClient)

这些示例只对版本3有效。请检查`Samples`目录找到关于版本4.0+的示例和文档。

## 简单连接

以下代码演示如何连接到服务器:

```cs
var options=new MqttClientOptions
{
    Server="localhost"
};

var client=new MqttClientFactory().CreateMqttClient(options);
client.ApplicationMessageReceived+=(e,e)=>
{
    Console.Wrilte("### RECEIVED APPLICATION MESSAGE ###");
    Console.Wrilte($"+ Topic={e.ApplicationMessage.Topic}");
    Console.Wrilte($"+ Payload={Encoding.UTF8.GetString(e.ApplicationMessage.Payload)}");
    Console.Wrilte($"+ Qos={e.ApplicationMessage.QualityOfServiceLevel}");
    Console.Wrilte($"+ Retain={e.ApplicationMessage.Retain}");
    Console.Wrilte("");
};

client.Connected+=async (s,e)=>
{
    Console.WriteLine("### CONNECTED WITH SERVER,SUBSCRIBING ###");

    await client.SubscribeAsync(new List<TopicFilter>
    {
        new TopicFilter("#",MqttQualityOfServiceLevel.AtMostOnce)
    });
};

client.Disconnected+=async(s,e)=>
{
    Console.WriteLine("### DISCONNECTED FROM SERVER ###");
    await Task.Delay(TimeSpan.FromSeconds(5));

    try
    {
        await client.ConnectAsync();
    }
    catch
    {
        Console.WriteLine("### RECONNECTED FAILED ###")
    }
};

try
{
    await client.ConnectAsync();
}
catch
{
    Console.WriteLine("### CONNECTING FAILED ###")
}

Console.WriteLine("### WAITING FOR APPLICATION MESSAGE ###");

var messageFactory=new MqttApplicationMessageFactory();
while(true){
    Console.ReadLine();

    var applicationMessage=messageFactory.CreateApplicationMessage("myTopic","Hello World",MqttQualityOfServiceLevel.AtLeastOnce);

    await client.PublishAsync(applicationMessage);
}
```

## WebSocket连接

为了使用websocket通道必须更改选项。以下示例演示websocket与免费的测试代理`hive.mq.org`连接的`MqttClientOptions`:

```cs
var options=new MqttClientOptions
{
    Server="broker.hivemq.com:8000/mqtt",
    ConnectionType=MqttConnectionType.Ws
};
```

目前`Port`属性不能用于WebSocket连接。因此端口必须是存储在服务属性中完整URI的一部分。
