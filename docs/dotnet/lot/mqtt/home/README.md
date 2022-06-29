# [MqttNet](https://mqtt.org/)

欢迎来到MQTTnet wiki!

此wiki只包含库的文档(从版本4.X开始,只有相关示例，不在包含任何wiki)。关于MQTT标准的更多信息，最佳练习和示例请预览<https://www.hivemq.com/blog/how-to-get-started-with-mqtt>。

MQTT协议调试和分析，MQTT客户端"MQTTnetApp"(<https://github.com/chkr1011/MQTTnetApp>)能有效的检测信息，有效负载等。

MQTT主题的简短参考在<https://github.com/chkr1011/MQTTnet/wiki/MQTT-topics>下找到。

## FAQ

### 如何使用这个库？

wiki只描述元主题。仓储库的Sample目录里包含代码示例的说明。它们可以在控制台里执行。

### 我的连接保留"Connected"（IsConnected=true）但是socket已经断开连接或者网络连接是断开/禁用的

这是设计使然。浏览帖子<https://github.com/xamarin/xamarin-android/issues/1347#issuecomment-369729481>。因此，至少切换到Qos 1。然后，客户端使用超时并当接收到响应时断开连接。

### 当使用TLS时，遇到连接问题

请检测以下连接

- <https://docs.microsoft.com/en-us/dotnet/core/compatibility/cryptography/5.0/default-cipher-suites-for-tls-on-linux>
