# [聊天](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Chat)

聊天徽标位于用户档案图片附件在页面的右上角。红色圆形内的数字显示是未读聊天消息的总数。

![chat-icon-1](/images/aspnetzero/chat-icon-1.png)

当用户点击这个图标，聊天控制板出现在页面的右边，这个控制板包含用户的好友和被屏蔽的用户列表。

![chat-friends-1](/images/aspnetzero/chat-friends-1.png)

用户可以通过在好友列表上方的文本框输入用户名来添加新好友。如果对租户的 " **和其他租户聊天** " 特性启用，租户的用户能够通过写入[租户名]\[用户名](例如:Default\admin)来添加一个好友。如果"和主机用户聊天" 特性启用，主机用户可以通过在相同的文本框里写 **.\\[user name]** 来添加一个好友。注意，一个用户能够搜索他们拥有的租户用户，但是不能搜索主机用户。因此，当添加一个主机用户作为好友时，
确切的用户名必须写上。

在线好友/用户有一个绿色的圆在他们档案图像上，离线好友/用户是一个灰色的圆。

用户可以通过点击聊天控制板右上角的图钉图标来固定或者顾晓聊天控制板。等用户登录到应用时，应用尝试记住上次聊天控制的状态并恢复它。

当一个好友/用户被选择,会话控制板将会打开。

![chat-conversation-1](/images/aspnetzero/chat-conversation-1.png)

聊天系统也允许发送图片、文件和当前页的链接给好友。

![chat-attachments-core](/images/aspnetzero/chat-attachments-core.png)

用户可以在这个区域阻止或取消阻止好友。选择用户的用户名右边有个向下的箭头图标。这个图标打开一个操作菜单并且这个菜单包含根据用户的阻止状态阻止用户或者取消阻止用户的操作。

## 聊天特性

![chat-features-1](/images/aspnetzero/chat-features-1.png)

系统里有个3个聊天特性。他们是"聊天","和主机聊天","和其他租户聊天"。这些特性能在每个版本/租户里启用/禁用。通过使用这些特性主机能够对其他租户的用户或者主机用户启用/禁用聊天。
