# [MQTT版本5功能](https://github.com/dotnet/MQTTnet/wiki/MQTT-Version-5-Features)

MQTTnet支持MQTTV5数据包。功能还没有100%支持并且无期限延迟。以下表格展示MQTTnet客户端和服务端已经可用的功能。没有列出的功能不受官方支持。

|功能|客户端|服务端|版本库|
|:-|:-|:-|:-|
|连接功能||||
|分配客户端ID|支持|支持|3.1.0 +|
|空用户名|连接时开源省略|支持|3.1.0 +|
|服务参考|开源从连接结果读取但不自动重定向|支持|3.1.0 +|
|发布功能||||
|主题别名|发布时不能设置|支持|3.1.0 +|
|订阅功能||||
|无本地|可以在`MqttTopicFilterBuilder`设置|支持|3.1.0 +|
|保留为已发布|可以在`MqttTopicFilterBuilder`设置|支持|3.1.0 +|
|保留处理|可以在`MqttTopicFilterBuilder`设置|支持|3.1.0 +|
|共享订阅|不支持|不支持|-|
|订阅标识符|订阅时可以设置|支持|3.1.0 +|
|提供通配符订阅|订阅时可以设置|支持|3.1.0 +|
