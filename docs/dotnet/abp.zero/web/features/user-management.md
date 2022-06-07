# [用户管理](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-User-Management)

当我们点击管理员/用户菜单时，我们进入到用户管理页面:

![user-management-core-3](/images/aspnetzero/user-management-core-3.png)

**用户**是那些能够**登录**到应用上并在它们的**权限**下执行一些操作的人。

一个用户类体现在**用户类**上。用户类通过添加新的属性来[扩展](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Extending-Existing-Entities)。

**用户管理**被用来执行领域逻辑,**UserAppService**被用户用来执行应用逻辑。

一个用户可以有零个或多个**角色**。如果一个用户有超过一个角色，用户继承合并所有角色的权限。除此之外，我们能设置 **特定用户权限**。一个特定用户权限设置会覆盖角色的权限设置。例如，如果用户有会计角色并且会计角色有"编辑发票"权限,如果我想要的花，我们可以从这个特定用户中拿走"编辑发票"权限。反之亦然，所以我们能为一个特定的用户授予发票编辑权限，即使该用户的任何角色都没有"编辑发票"权限。

用户权限对话框截图:

![user-permissions-1](/images/aspnetzero/user-permissions-1.png)

*注意上面显示的不是所有的权限。*

用来创建/修改用户的对话框:

![edit-user-3](/images/aspnetzero/edit-user-3.png)

我们能更改用户的**密码**,让用户 **激活/未激活** 等等，一个用户可以有 **个人资料图片**。它能够被用户改变(参考用户菜单章节)。**管理员用户**作为商业规则不能被删除。如果你不想要用户管理员，只需要让它处于不活动状态。

## Excel操作

用户列表能够做为一个Excel文件下载。除此之外,新用户能够从Excel文件里导入进来。为了从Excel文件里导入用户，ASP.BET Zero需要一个特定的Excel文件格式。你可以通过点击"Excel 操作"下拉框按钮下的"点击这"连接下载一个导入示例模板。

![user-list-excel-operations-import-template-link](/images/aspnetzero/user-list-excel-operations-import-template-link.png)

当你从Excel里导入用户,如果在导入用户到ASP.NET Zero的数据库中出现错误时，无效的用户和原因(验证错误信息或异常信息)将会保留在Excel文件里并且用户导入操作将会被ASP.NET Zero的通知系统进行通知。所以，用户能够点击通知并且看见Excel文件结果，修复验证错误并再次导入失败的用户。

## 用户解锁

如果用户被锁住了(有一个特别的访问失败次数),用户可以在用户列表页里解锁。你可以在用户页面上点击"操作"按钮并在打开的下拉列表里点击" **解锁** " 项。

锁定选项可以在"Identity"文件夹下 **\*.Core** 项目中的 **IdentityRegistrar.cs** 类里配置。在下面示例,最大访问尝试失败被设置成10次,所以,如果用户尝试连续超过10次的登录失败，用户将会被锁定一段时间。

```cs
return services.AddAbpIdentity<Tenant, User, Role>(options =>
{
    // other configurations
    options.Lockout.MaxFailedAccessAttempts = 10;
})
```

## 模拟用户

做为一个管理员用户(或者任何允许的用户),在没有用户的密码下，我们可能想用一个用户来登录并执行代表那个用户的操作。当我们在用户页面上操作点击 " **以此用户身份登录** " 图标，我们自动的被重定向并做为这个用户登录。这叫做" **模拟用户** "。当我们模拟一个用户，一个 " **返回我的账户** " 选项被添加到用户档案菜单上：

![back-to-my-account-link-3](/images/aspnetzero/back-to-my-account-link-3.png)

在模拟账户下，我们只能允许那个用户允许的操作。这意味着，一切都跟这个用户登录时 **完全相同**。只有在审计日志里显示差异表明操作是某些人代表用户执行的。

注意，在用户名附近有一个 **红色'后退'图标**显示，表明你正处于模拟账户中。
