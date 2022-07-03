# [MQTT主题](https://github.com/dotnet/MQTTnet/wiki/MQTT-topics)

## 解释

MQTT主题用来代理(服务器)上过滤连接客户端的消息。主题可由一到多个基本组成。主题中的级别由正斜杠分隔(`/`)。

客户端在发布到主题之前不许与创建主题。代理接收有效主题而不初始化。当然，代理可以限制主题，如果它们愿意的话。

每个主图必须至少有1个字符并且最多65535字节。主题区分大小写。正斜杠(`/`)本身是一个有效的主题。它允许包含任何UTF-8字符串(甚至不可打印的字符串和空字符串或者空格字符)。主题不得包含null字符(Unicode U+0000)。

## 通配符

客户端可以订阅确切的主题或者同时用通配符来订阅残缺主题。通配符只能用来订阅主题，不允许用来发布消息。这有两种不同的通配符：

### 单级通配符:`+`

一个单级通配符替换一个主题级别。`+`符号表示主题中的单级通配符。

例如:`something/+/somethingElse`将会匹配例如`something/abc/somethingElse`。但是不匹配`something/abc/defg/somethingElse`。

`+`通配符可以在主题字符串中多次使用，包括多个`+`用`/`分割:

- `a/+/+/+/nvbshe`有效的
- `a/+/+/`有效的
- `+/+/+`有效的

### 多级通配符:`#`

多级通配符覆盖许多主题级别。`#`符号表示多级通配符。`#`通配符不得使用超过一次并且只能在主题的末尾使用。

当客户端使用多级通配符订阅主题时，它接收以通配符之前的模式开头的主题的所有消息，无论这个主题有多长或者多深。如果你仅将多级通配符(`#`)做为主题，那么你将会接收到所有发送到MQTT代理的消息。

例如:`sensor/data/foo/#`可能匹配`sensor/data/foo/abc/a13re/adff`也能匹配`sensor/data/foo/abc`。

使用`#`通配符无效的主题过滤示例：

- `#/a`
- `a/a/#/a/#`

## 通配符组合

通配符可以组合。例如`sensor/+/bar/#`匹配`sensor/foo/bar/baz/wibble/json`和`sensor/bar/bar/black/sheep`,但是不匹配`sensor/bar/abc/d`。

## `$`开头的主题

通常，你可以根据需要命名你的MQTT主题。但是，有一个例外：当你订阅一个多级通配符主题(`#`)时，以`$`开头的主题不是订阅的一步发。`$`符号主题是MQTT代理的内部统计信息保留的。客户端无法将消息发布到这些主题。

目前，此类主题没有官方标准化。通常，`$SYS/`用于以下所有信息，但是代理实现会有所不同。这里有一些示例:

- `$SYS/broker/clients/connected`
- `$SYS/broker/clients/disconnected`
- `$SYS/broker/clients/total`
- `$SYS/broker/messages/sent`
- `$SYS/borker/uptime`

## 最佳实践

- 切勿使用一个前导正斜杠。例如`/a/b`：前导正斜杠引入一个不必要的主题借呗，前面的字符为零！
- 切勿在主题中使用空格或不可打印的字符。通常，使用仅ASCII字符。例如`/a/ a`:这使得程序员和用户几乎无法阅读主题。
- 保持主题简短明了。当涉及到小型设备时，每个字节都很重要，主题长度都会产生重大影响。
- 将唯一标识符或客户端ID嵌入到主题中。在主题中发布包含客户端的唯一表示会非常有帮助。主题中的唯一标识符可邦族您识别消息的发送者。

## 来源

- <https://stackoverflow.com/questions/56796583/are-multiple-allowed-in-mqtt-topics#>
- <https://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices/>
- <https://mosquitto.org/man/mqtt-7.html>
- <http://mqtt.org/>
- <http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html>
