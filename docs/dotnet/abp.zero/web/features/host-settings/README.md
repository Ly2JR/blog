# [主机设置](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Host-Settings)

主机设置页面被用来配置一些系统配置。

## 常用的

![host-settings-general-7](/images/aspnetzero/host-settings-general-7.png)

**时区** 在这个页面上是一个重要的设置。ASP.NET Zero可以在多区域中工作。每个用户都能看到他们自己所在时区的日期和时间。这个页面的时区设置允许你为应用程序设置默认的时区包括所有的租户和用户。租户和用户能够在他们自己的设置里改变时区。时区设置只有你使用UTC时钟提供时才是可用的。[浏览文档](https://aspnetboilerplate.com/Pages/Documents/Timing)来切换UTC。ASP.NET默认使用UnspecifiedClockProvider，在这个情况下ASP.NET Zero不会修改从客户端发送到服务器的日期，反之亦然。如果你配置了你的APP使用其他的时钟提供者，那么ASP.NET Zero根据选择的时钟提供者来规划日期。

你能在你的Core module里，在PreInitialize方法里更改使用的日期提供者。

```cs
Clock.Provider = ClockProviders.Utc;
```

## 租户管理

![host-settings-tenant-management](/images/aspnetzero/host-settings-tenant-management.png)

你可用在"租户管理"选项卡下配置与租户管理相关的设置。你可以启用/禁用租户注册系统。你也可以让最新注册的租户活跃的或消极的。

启用/禁用租户注册页面的验证码。

你也可以选中一个默认的版本，因此一个新注册租户将会自动被分配到这个版本除非租户订阅了一个特别的版本。

## 用户管理

![host-settings-user-management-3](/images/aspnetzero/host-settings-user-management-3.png)

与用户相关的设置可以在这个选项卡下配置。你可以强制登录时进行邮件确认。你可以启用电话验证。此外，你可以启用cookie同意，以便ASP.NET Zero显示一个cookies同意栏，供用户接受你的应用程序cookie策略。

你可以在用户登录页面启用/禁用验证码。

>注意: **身份认证令牌** 有个`ReCaptchaIgnoreWhiteList`位于`WebConsts`。如果你想要一个客户端应用在登录期间忽略验证码控制，添加一个值到`ReCaptchaIgnoreWhiteList`并从客户端应用登录的`User-Agent`请求头上发送相同的值。你可以在AspNet Zero来查看Xamarin移动端应用`ReCaptchaIgnoreWhiteList`是如何工作的。

你也可以启用/禁用Session超时控制。如果它是启用的并且用户在超时期间没有向站点提供任何输入，将会向用户显示一个倒计时模式。如果用户在倒计时模式期间依然没有向站点提供录入，用户将会被退出。

每一个租户可以允许租户用户是否使用头像档案图片。

## 安全

![host-settings-security-5](/images/aspnetzero/host-settings-security-5.png)

在主机设置页面的 **安全** 选项卡包含密码复杂度设置。主机可以在这个选项卡下定义系统范围的密码复杂度的设置。每个租户能在租户设置页面覆盖这个设置。

这个选项卡也包含用户锁定设置和双因子登录设置。

>注意:
>
> - 为了使用 **SMS验证** 双因子登录，你必须在 **用户管理** 选项卡启用 **启用电话号码验证(通过SMS)** 设置
>
> - 如果用户没有经过验证的电话号码，用户将无需短信验证即可登录。

## 电子邮件

![host-settings-email](/images/aspnetzero/host-settings-email.png)

**Email(SMTP)** 选项卡允许你为你的应用程序来配置SMTP设置。ASP.NET Zero使用MailKit来发送电子邮件。默认，smtp证书验证在 **YourProjectNameMailKitSmtpBuilder.cs** 类里是禁用的。如果你能够验证电子邮件服务器的证书，你需要在 **YourProjectNameMailKitSmtpBulder.cs** 里修改 **ServerCertificateValidationCallback** 。

如果你想让每个租户去配置他们自己的SMTP设置，你可以在 **\*.Core.Shared** 项目里进入 **YourProjectNameConsts.cs** 并设置 **AllowTenantsToChangeEmialSettings** 为true。通过这种方式，每个租户能够配置并使用他们自己的SMTP设置。

## 发票

![host-settings-invoice-1](/images/aspnetzero/host-settings-invoice-1.png)

在这个选项卡下,你可以配置主机公司的合法名称和地址，它门做为服务提供者显示在生成的发票上

## 其它设置

![host-settings-others](/images/aspnetzero/host-settings-others.png)

在这个选项卡下，这里只有一个设置用来启用/禁用ASP.NET Zero布局上，在语言选择下拉框附近的快速主题选项图标。
