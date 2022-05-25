# [双因子验证](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Two-Factor-Authentication)

ASP.NET Zero已准备好提供双因子登录，但是它默认是禁用的。你可以很容易的在主机设置页面(安全选项卡)启用它。

![lockout-two-factor-settings-1](/images/aspnetzero/lockout-two-factor-settings-1.png)

注意：在一个多租户应用中，除非在主机设置中启用了双因子验证，租户的双因子验证才可用。此外，只有在主机端上电子邮件验证和SMS验证设置是可用的。就是这么设计的。

当它启用后，用户在录入用户名和密码之后会被要求选择一种验证方式。

![send-security-code-1](/images/aspnetzero/send-security-code-1.png)

接着，选择的验证提供者发送一个 **确认码**，用户在下一页中录入这个确认码:

![verify-security-code-1](/images/aspnetzero/verify-security-code-1.png)

## 电子邮箱确认

如果用户有一个确认过的电子邮件地址，此功能是可用的，在Debug模式下，由于在调试模式下禁用了电子邮件发送，你可以在日志里看见发送的确认码。在释放模式下，电子邮件将会发送。你可以在 **{YourProjectName}CoreModule.cs**的PreInitialize方法里更改这种行为。

下面是配置ASP.NET Zero在调试模式下使用NullEamilSender的代码块：

```cs
if (DebugHelper.IsDebug)
{
    //Disabling email sending in debug mode
    Configuration.ReplaceService<IEmailSender, NullEmailSender>(DependencyLifeStyle.Transient);
}
```

## SMS确认

如果用户有一个确认过的电话号码，此功能可用的。为了验证电话号码，用户应该按照[这里](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-User-Menu#profile-settings)的说明打开我的设置模式。当用户录入电话号码后，一个按钮将会出现来验证这个号码。当验证按钮点击后，一个包含验证码的SMS消息会发送到这个号码并会打开另外一个模态窗体用来录入这个验证码。当用户录入这个验证码后，用户的这个号码将为被设置为已验证的。ASP.NET Zero使用Twilio实现SMS发送，但是默认使用一个空的SmsSender类，用来将SMS消息写入到日志文件。

如果你想在你的应用里使用TWilio发送SMS，请跳转到下一章节。你也可以实现`ISmsSender`接口，使用你定制实现的发送SMS接口。在这种情况下，你需要在 **{YourProjectName}CoreModule.cs**类PreInitialize方法里去配置ASP.NET Zero来使用你定制的实现，如下所示：

```cs
Configuration.ReplaceService<ISmsSender,CustomSmsSender>();
```

## 集成Twilio

为了启用集成Twilio,只需要在你 **{YourProjectName}CoreModule**(在你代码项目) 里取消以下注释行:

```cs
Configuration.ReplaceService<ISmsSender,TwilioSmsSender>();
```

如果你有需要也可以在`appsetting.json`文件里配置 **AccountSid** , **AuthToken** 和 **SenderNumber**。
