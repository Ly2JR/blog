# [登录](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Login)

AccountModule的默认路由是login/login.compont:

![login-screen-3](/images/aspnetzero/login-screen-3.png)

只有是 **多租户** 应用程序时，**租户选择** 部分在登录部分的上面显示,如果 **从URL无法检查** 到"租户名称"(例如,如果你使用子域名作为租户名称,不需要显示租户选择)。当我们点击切换链接，租户切换对话框将会出现并且我们可以改变租户。在初始化数据库时有一个单一租户名叫 **默认**。将租户名输入留空作为 **主机** 登录。

第一次运行应用，我们可以使用用户名 **admin**,密码 **123qwe**登录。

如果当你在创建一个用户时，选择了 **在下次登录时变更密码**，这个用户将会在屏幕伤看见变更密码页面。最初创建的用户不选择此项。

![account-change-password-1](/images/aspnetzero/account-change-password-1.png)

登录成功之后，我们将会重定向到 **application** (app.module)。

## 用户锁定

你可以在配置页面配置用户锁定选项。如果用户录入错误密码到一定次数时，用户将会在指定的时间内被锁定。

所有的值都可以在应用程序配置页面的安全选项卡下面进行配置。
