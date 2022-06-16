# [活动目录(LDAP)](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Active-Directory)

LDAP(活动目录)身份验证默认是禁用的。

为了在服务端启用LDAP，在 **\*.Core**项目下打开`*CoreModule.cs`文件，取消以下行注释：

```cs
Configuration.Modules.ZeroLdap().Enable(typeof(AppLdapAuthenticationSource));
```

预览[服务端](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Mvc-Core-Tenant-Active-Directory)来启用LDAP。一旦我们启用了，我们能够在这个配置页看到 **LDAP设置** 部分:

![tenant-settings-ldap-1](/images/aspnetzero/tenant-settings-ldap-1.png)

我们可以检测" **Enable LDAP Authentication** "来启用它。如果这个服务使用域用户或者本地系统在域里和应用里运行，那么通常甚至 **不需要** 设置域名，用户和密码。你可以注销,然后用你的 **域用户和密码** 登录。如果没有，你应该设置这些凭据。
