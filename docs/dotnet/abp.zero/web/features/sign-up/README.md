# [登记](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Sign-Up)

当我们在登录页面上点击 **创建用户** 链接时(这只在多租户应用里对租户可用),一个注册表单将会展示：

![registration-form-small-1](/images/aspnetzero/registration-form-small-1.png)

**验证码**(安全问题)是可选的。它使用谷歌的验证码服务。验证码服务对每个域有效。所以，为了让它正常工作，你应该在[https://www.google.com/recaptcha]上为你的域创建自己的私钥和钥，并替换 **.Web.Host**项目下的 **appsetting.json** 文件和客户端的 **appconfig.json** 种的密钥。

每个租户都能在配置页的"用户管理"选项卡下启用/禁用用户注册功能。如果租户的用户注册功能被禁用，"创建账户"链接将不会出现在那个租户的登录页面上。
