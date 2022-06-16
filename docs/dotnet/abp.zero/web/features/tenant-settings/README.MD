# [租户设置](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Tenant-Settings)

租户设置页面用来配置租户基础配置。

## 常用的

![tenant-settings-core-general](/images/aspnetzero/tenant-settings-core-general.png)

在常用选项卡下，每个租户能够为自身的用户配置默认的时区设置。每个租户下的用户也可更改他们自己账号的这个设置。

如果租户不想做任何改变，将会使用主机的时区设置。

## 外观

![tenant-settings-core-appearance](/images/aspnetzero/tenant-settings-core-appearance.png)

在外观选项卡下，每个租户可以上传logo文件并上传自定义的css文件。通过这种方式，每个租户能够为他们自己的账号改变应用程序的外观展示。通过清除按钮容易的移除上传的logo和css文件。

## 用户管理

![tenant-settings-core-user-management-3](/images/aspnetzero/tenant-settings-core-user-management-3.png)

在用户管理选项卡下，每个租户可以配置一些他们账号相关的用户管理设置。每个租户能够启用/禁用他们账户下的用户注册功能。租户也可以设置最近注册的用户默认是激活的还是未激活的。

每个租户也可以为他们账户下的用户在注册和登录页上启用/禁用验证。

>注意: **身份认证令牌** 有个`ReCaptchaIgnoreWhiteList`位于`WebConsts`。如果你想要一个客户端应用在登录期间忽略验证码控制，添加一个值到`ReCaptchaIgnoreWhiteList`并从客户端应用登录的`User-Agent`请求头上发送相同的值。你可以在AspNet Zero来查看Xamarin移动端应用`ReCaptchaIgnoreWhiteList`是如何工作的。

每个租户也可以启用/禁用Session超时控制。如果它是启用的并且用户在超时期间没有向站点提供任何输入，将会向用户显示一个倒计时模式。如果用户在倒计时模式期间依然没有向站点提供录入，用户将会被退出。

此外，每个租户可以启用/禁用cookie接受，以便ASP.NET Zero显示一个cookies同意栏，供用户接受你的应用程序cookie策略。

每个租户可以强制登录时进行电子邮件确认。

每个租户可以允许租户用户是否使用头像档案图片。

## 安全

![tenant-settings-core-security](/images/aspnetzero/tenant-settings-core-security.png)

安全选项卡包含密码复杂度设置。每个租户可以在这个选项卡下为他们自己账号的密码定义密码复杂度。每个租户也能配置用户的锁定设置。

## 发票

![tenant-settings-core-invoice](/images/aspnetzero/tenant-settings-core-invoice.png)

在这个选项卡下，每个租户可以配置他们的法定名称，税号和地址，这些将会显示在生成的发票上。注意，租户只有在支付订阅费用时才能生成发票。

如果我们禁用多租户，一些主机设置也会显示在这个页面上(由于没有主机设置页面)。
