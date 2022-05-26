# [主要菜单和布局](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Main-Menu-Layout)

菜单和布局文件位于共享文件夹下。

![ng2-layout-files-2](/images/aspnetzero/ng2-layout-files-2.png)

ASP.NET Zero有12个主题以及相关的一些左菜单和顶部菜单可选。因为这个，ASP.NET Zero包含两种菜单组件类型， **侧边栏菜单组件** 和 **顶栏菜单组件**。但是，两个组件都是从 **app-navigation.service.ts** 类下获取菜单的定义。所以，如果你需要添加一个新的菜单项，你可以修改这个类并添加你自己的菜单项。

你可以在这里添加你的心菜单项。你通过将菜单项关联到Angular路由上。Angular路由被定义在服务模块上:

- app/admin/**admin-routing.module**为admin模块定义路由。
- app/main/**main-routing.module**为main模块定义路由。
- app/**app-routing.module**定义一般的路由和默认路由。

一个菜单项包含以下属性：

- **name**:菜单的名称。使用本地资源化的值来在UI上显示菜单项。所以，它也必须录入到你应用里的本地资源化文件里。否则你将会在UI上看见一个没有本地化的值。
- **permissionName**:如果菜单项需要权限，你可以用这个属性来设置它。
- **icon**:在UI上显示菜单项的图标。
- **route**:当点击菜单项后Angular路由重定向。一个示例值就是:`/app/admin/tenants`。
- **items**:菜单项的子项。
- **external**: 显示菜单项打开的是否是一个外部的URL，如果你设置这个属性为true，你可以用这个外部URL来当作 **route** 参数。
- **parameters**:当打开一个新路由时要传递的参数。这个参数只有当 **外部**参数是false时才有效。
- **requiresAuthentication**:如果你想对授权用户显示菜单项但是又不想为菜单项设置一个特殊的 **permissionName**,你可以设置这个属性为true。
- **featureDependency**：一个功能为了检测菜单项的特性依赖。一个示例：

```js
new AppMenuItem('Users', 'Pages.Administration.Users', 'flaticon-users', '/app/admin/users', undefined, undefined, undefined, () => {
    return this._featureCheckerService.isEnabled('App.ChatFeature');
})
```
