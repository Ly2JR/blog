# [角色管理](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Role-Management)

当我们点击管理员/角色 菜单时,我们进入到角色管理页面：

![role-management-core-3](/images/aspnetzero/role-management-core-3.png)

角色被用于对权限分组。当一个用户有一个角色时，那么用户将会拥有那个角色的所有权限。

一个角色通过**角色**类上体现。角色可以通过添加新属性来[扩展](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Extending-Existing-Entities)

角色可以是动态的或者是静态的:

- **静态角色**:一个静态角色有一个明确的**名称**(比如'admin')并且这个名称不能被改变。(但是**显示名称**可以被改变)。它是在系统启动时创建的并且不能在UI上删除。因此，我们可以基于静态角色名称编写代码。
- **动态角色**:我们可以在开发完成之后创建一个动态角色。那么我们可以对那个角色授予权限，我们可以分配这个角色到一些用户上并且我们能删除角色。在开发阶段我们不需要知道动态角色的名称。

能够将一个或多个角色设置为**默认**角色。默认角色默认是被分配到新添加/注册的用户。这不是开发阶段的属性但能在部署后设置或更改它。

在启动项目里，我们为主机(为多租户应用)准备了一个静态的**管理员角色**。还为租户准备了静态**管理员**和**用户角色**。**管理员角色**默认拥有授予所有的权限。**用户角色**是为新用户提供的**默认角色**默认没有权限。在*.Core项目" **/Authorization/Roles/** "文件夹下 **AppRoleConfig.cs** 类里很容易的更改它。

静态角色在*.EntityFrameworkCore项目里" **Migrations/Seed** "文件夹下 **HostRoleAndUserCreator.cs** 和 "TenantRoleAndUserBuilder.cs" 类设置种子数据。

## 角色权限

由于角色是用来对权限分组，我们能在角色创建或者修改时设置权限，如下所示：

![role-permissions-core-1](/images/aspnetzero/role-permissions-core-1.png)

*注意上面显示的不是所有的权限。*

每个租户有它们**自己的角色**并且租户任何角色的改变都不影响其他的租户。此外，主机也拥有它自己独立的角色。
