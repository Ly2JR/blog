# [在VB.Net中使用MQTT客户端](https://github.com/dotnet/MQTTnet/wiki/Using-the-MQTT-client-in-VB.net)

以下代码示例演示如何在VB.NET中使用MQTTnet(感谢[@adamwSE](https://github.com/adamwSE)和[@pyramidak](https://github.com/pyramidak))

```cs
Dim mqClient As MqttClient
Dim mqFactory As New MqttFactory

Sub mmqt_start()
    Connect("client", "host", "user", "pass").Wait()
    Publish("topic/volume", "20").Wait()
    Subscribe("topic/volume").Wait()
End Sub

Async Function Connect(Client As String, Server As String, User As String, Password As String) As Task
    mqClient = CType(mqFactory.CreateMqttClient(), MqttClient)
    mqClient.UseApplicationMessageReceivedHandler(AddressOf MessageRecieved)
    mqClient.UseDisconnectedHandler(AddressOf ConnectionClosed)
    mqClient.UseConnectedHandler(AddressOf ConnectionOpened)

    Dim Options As New Options.MqttClientOptionsBuilder
    Options.WithClientId(Client).WithTcpServer(Server, 1883).WithCredentials(User, Password)
    Await mqClient.ConnectAsync(Options.Build).ConfigureAwait(False)
End Function

Async Function Publish(Topic As String, Payload As String) As Task
    Await mqClient.PublishAsync(Topic, Payload).ConfigureAwait(False)
End Function

Async Function Subscribe(Topic As String) As Task
    Await mqClient.SubscribeAsync(Topic).ConfigureAwait(False)
End Function

Private Sub MessageRecieved(e As MqttApplicationMessageReceivedEventArgs)
    MessageBox.Show("Topic: " & e.ApplicationMessage.Topic & Chr(10) & Chr(13) &
                    "Payload: " & Text.Encoding.UTF8.GetString(e.ApplicationMessage.Payload))
End Sub

Private Sub ConnectionClosed(e As Disconnecting.MqttClientDisconnectedEventArgs)
    MessageBox.Show("Connection closed.")
End Sub

Private Sub ConnectionOpened(e As Connecting.MqttClientConnectedEventArgs)
    MessageBox.Show("Connection opened.")
End Sub
```
