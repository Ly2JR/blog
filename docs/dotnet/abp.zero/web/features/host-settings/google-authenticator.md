# [谷歌身份验证](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Google-Authenticator-Usage)

为了使用谷歌身份验证，在主机设置安全选项卡上启用 **双因子验证登录**,接着启用 **谷歌身份验证** 。

## 用法

- 在你的手机上安装Google身份认证移动app(搜索"Google Authenticator"来安装)。
- 在Asp.Net Zero，进入 **我的设置** -> **双因子登录** 选项卡并启用Google身份验证。

![mysettings-two-factor-login](/images/aspnetzero/mysettings-two-factor-login.png)

启用谷歌身份验证之后，你将会看见一个像这样的QR码。打开你的App并扫码这个QR码。

![mysettings-two-factor-login-qr](/images/aspnetzero/mysettings-two-factor-login-qr.png)

之后你将能在双因子登录期间使用 **谷歌身份验证** 。

- 当你试着去登录，你将会看见谷歌身份验证选项:

![login-page-google-auth](/images/aspnetzero/login-page-google-auth.png)

- 选择 **谷歌sheng'f**
