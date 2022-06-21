# [用户委派](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-User-Delegation)

Asp.Net Zero提供一个用户委派特性。用户委派特性提供在有限制的时间内将用户的账号委托到其他用户。通过这种方式，如果用户在一段时间内不能访问应用，这个用户可以委派他/她的账号给其他用户。

这个特性工作像有限时间内的[模拟](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-User-Management#user-impersonation)。审计日志将会保留模拟者信息，所以你能看见如果一个操作被执行是通过实际账号的拥有者还是委派的用户。

用户委派功能默认是启用的并能在`UserDelegationConfiguration.cs`构造里或者`{YourProjectName}CoreModule.cs`里的PostInitialize方法禁用它。

如果当前用户通过用户委派登录，Asp.Net Zero检查数据库记录来验证委派用户的 **结束时间** 。这对执行性能评估应用可能是很重要的但需要注意的是只有当用户委派特性是启用的并且当前用户是通过用户委派登录的才执行检查。对于其他操作，将没有此类控制。

## 管理用户委派

用户委派模态窗体能够通过在点击我们的个人资料菜单上的"Manage authority delegations" 来访问。

![user-delegations-profile-menu](/images/aspnetzero/user-delegations-profile-menu.png)

用户委派模态展示当前委派的用户。你可以在这个模态里删除一个用户委派。

![user-delegations-modal](/images/aspnetzero/user-delegations-modal.png)

"委派新用户"按钮打开一个模态用来传教一个新用户委派。

![create-new-user-delegation-modal](/images/aspnetzero/create-new-user-delegation-modal.png)
