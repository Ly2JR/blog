# [用户菜单](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-User-Menu)

用户可以点击他的名字在右上角来打开用户菜单:

![user-menu-4](/images/aspnetzero/user-menu-4.png)

## 账户链接

账户链接用来多账户之间相互链接。通过这种方式，用户很容易的用这个特性导航到他的账户。

用户通过点击 **管理账户** 连接来链接新账户或者删除已经存在的链接账户。

![linked-accounts-3](/images/aspnetzero/linked-accounts-3.png)

为了链接新账户，用户必须录入相关账户的登录凭证。

![link-new-account-1](/images/aspnetzero/link-new-account-1.png)

## 更改密码

用户可以使用这个选项来更改密码。**ProfileAppService**被用来更改密码。

## 登录尝试

所有登录尝试(成功或失败)被应用记录。用户能看到他/她的账户最后登录尝试。

![login-attempts-1](/images/aspnetzero/login-attempts-1.png)

## 变更图片

用户可以更改他/她自己的个人资料图片。当前支持JPG,JPEG,GIF和PNG文件。

用户页可以使用变更个人资料图片模态窗体为个人资料图片使用Gravatar图像。

![change-profile-picture](/images/aspnetzero/change-profile-picture.png)

## 我的设置

我的设置模态用来改变用户个人资料设置：

![user-settings-3](/images/aspnetzero/user-settings-3.png)

如图显示，**Admin** 用户名不能被改变。由于它被用在数据库迁移种子里，被认为是一个特殊的用户名。其它用户可以更改他们的用户名。

用户也能够在这个页面验证电话号码。如果电话号码验证是启用的，当用户录入电话号码到这个电话号码文本框里，一个" **确认** "按钮将会显示。当确认按钮被点击，一个确认码将会发送到用户的电话号码上(如果sms发送被实现。你可以使用[Twilio](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Two-Factor-Authentication#twilio-integration)这个已经集成在了ASP.NET Zero)并输入那个确认码到打开的对话框中确认用户的手机号码。

## 下载数据集

用户能用这个菜单项下载他/她的数据集。

![gdpr_download_item](/images/aspnetzero/gdpr_download_item.png)

ASP.NET Zero包括一个名叫 **IUserCollectedDataProvider** 的接口和3个这个接口的不同的实现。

- **ChatUserCollectedDataProvider.cs** 创建一个关于这个用户聊天对话的excel文件。
- **ProfilePictureUserCollectedDataProvider.cs** 创建一个关于用户的个人资料图片的图片文件。
- **ProfileUserCollected** 创建一个文本文件包括用户个人资料信息。

ASP.NET Zero压缩这些文件到一个新的ZIP文件并做为一个通知将它发送给用户，因此用户可能下载他/她的数据。

如果你创建一个 **IUserCollectedDataProvider** 接口的新实现，ASP.NET Zero也会自动包含你的文件到生成的zip文件里。

## 注销

**TokenAuthController** 被用来用户注销。当用户点击 **注销** 按钮，用户的Token在服务端将会失效并从客户端移除，同时用户被重定向到登录页。
