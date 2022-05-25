# [社交与外部登录](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Social-Logins)

ASP.NET Zero也支持社交多媒体登录和外部登录。为了启动它们之一，我们应该在**appsettings.json**文件里更改以下配置。

```json
  "Authentication": {
    "Facebook": {
        "IsEnabled": "false",
        "AppId": "",
        "AppSecret": ""
    },
    "Google": {
        "IsEnabled": "false",
        "ClientId": "",
        "ClientSecret": "",
        "UserInfoEndpoint": "https://www.googleapis.com/oauth2/v2/userinfo"
    },
    "Microsoft": {
        "IsEnabled": "false",
        "ConsumerKey": "",
        "ConsumerSecret": ""
    },
    "OpenId": {
        "IsEnabled": "false",
        "ClientId": "",
        "Authority": "",
        "LoginUrl": "",
        "ValidateIssuer": "true",
        "ClaimsMapping: []
    },
    "WsFederation": {
        "IsEnabled": "false",
        "Authority": "",
        "ClientId": "",
        "Tenant": "",
        "MetaDataAddress": ""
    },
    "JwtBearer": {
        "IsEnabled": "true",
        "SecurityKey": "PhoneBook_XXXXXXXXXXXXXXXX",
        "Issuer": "PhoneBook",
        "Audience": "PhoneBook"
    }
}
```

ASP.NET Zeroz在 **{YourProjectName}WebHostModule.cs**类中PostInitialize方法里，启用和配置社交和外部登录提供登录程序。社交和外部登录的一部分代码是闭源的，用在[Abp.AspNetZeroCore](https://www.nuget.org/packages/Abp.AspNetZeroCore)和[Abp.AspNetZeroCore.Web](https://www.nuget.org/packages/Abp.AspNetZeroCore.Web)nuget包里的许可目的。

你能在网上找到许多文档，学习如何获取社交平台的身份授权密钥。所以，我们不会详细的说明在社交媒体平台上创建一个apps的过程。一旦你获得了你自己的密钥。你可以把它们写入`appsettings.json`。当你启用它时，社交媒体logo将会自动的出现在登录页面上。如下所示:

![social-login-logos-3](/images/aspnetzero/social-login-logos-3.png)

注意。社交媒体登录和外部登录只在租户作用域内有效。所以，在登录页面上必须选择一个租户才能看到这些logo，否则他们在登录页面上将会没有logo显示。

## OpenId 连接登录

除了社交登录之外，ASP.NET Zero包括内部的OpenId连接登录。它是可配置的，可以在`appsettings.json`里更改它。

```json
"OpenId": {
  "IsEnabled": "false",
  "ClientId": "",
  "Authority": "",
  "LoginUrl": "",
  "ValidateIssuer": "true",
  "ClaimsMapping: []
}
```

在某些情况下，OpenId连接提供者不能返回我们想要使用的声明。例如，Azure AD不能返回"nameidentifier"声明但是ASP.NET Core Identity使用它来找到用户的id。所以，在这种情况下，我们可以使用 **ClaimsMapping** 将提供者的声明映射到自定义声明。ASP.NET Zero将会找到带有 **键** 的声明并且将会将它映射到带有 **声明值**的内部声明中。如下配置，外部 **对象标识符**将会被映射到内部 **nameidentifier** 声明。

```json
"ClaimsMapping": [
    {
        "claim": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",
        "key": "http://schemas.microsoft.com/identity/claims/objectidentifier"
    }
]
```

如果你正在Azure上为你的多租户应用程序使用Azure AD进行OpendID连接，那么你需要禁用颁发者验证，以便所有的Azure AD用户都能使用你的app。注意，这里的多租户应用是你已经创建的oSocial登录能在[服务端](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Mvc-Core-Social-Logins)启用和配置。一旦他们的属性配置完成，它们会自动的在用户接口上显示。

注意，当前"ValidateIssuer"配置无效，因为使用的客户端库不支持禁用颁发者验证。

## WsFederation(ADFS)

ASP.NET Zero也包括集成ADFS登录。它是配置的,可以在`appsettings.json`里更改它。

```json
"WsFederation": {
  "IsEnabled": "false",
  "Authority": "",
  "ClientId": "",
  "Tenant": "",
  "MetaDataAddress": ""
}
```

## JwtBearer

ASP.NET Zero默认使用JwtBearer验证。建议在你的生产环境中更改`appsettings.json`文件配置的密钥信息。

## 外部登录管理接口

当你登录外部登录渠道时，ASP.NET Zero允许从声明处获取自定义的用户名称，姓名和姓氏。有两个默认的继承IExternalLoginInfoManager的实现，它们是 **DefaultExternalLoginInfoManager** 和 **WsFederationExternalLoginInfoManager**。

你可以为任何外部登录管理器实现这个类，并在 **ExternalLoginInfoManagerFactory.cs**里返回你想要的外部登录提供应用。之后，在为外部登录用户创建一个本地的用户记录时,ASP.NET Zero将会使用你实现的类去获取用户名，姓名和姓氏。

## Angular部分

以上所有的部分都与ASP.NET Zero的服务端部分有关。在Angular端社交和登录部分是在login/ **login.service.ts**里处理的。注意，目前只有 **Facebook** , **Google** , **OpenID Connect** 和 **ADFS**验证是在Angular应用里是实现好的。Microsoft 和 Twitter登录在规划路线中。

当你在登录页面中点击社交登录或者外部登录图标时，有两个主要的流程。Facebook,Google和ADFS选项打开一个弹出窗体要求用户登录。在这种情况下，将立刻调用所选择的提供者的回调函数。

但是，针对OpenID Connect，点击图标将会重定你到外部网站并且你将会在外部网站登录。之后，你将会被重定向回ASP.NET Zero的网站上(在**login.component.ts** ).然后,OpenID Connection的回调函数将会被调用。

所有的回调函数会发送一个请求到服务端应用，来验证从外部或社交登录提供的信息。如果这个信息是有效的，一个本地用户记录将会被创建(只在第一次),并这个用户将会在ASP.NET Zero网站上登录。
