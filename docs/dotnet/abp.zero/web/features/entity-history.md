# [实体历史](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Entity-History)

在审计日志菜单下的变更日志中，我面能看见应用程序的所有变更日志(实体历史):

![change-logs-core](/images/aspnetzero/change-logs-core.png)

当外面点击放大镜图标，我们能看见关于变更日志的所有细节:

![entity-history-log-detail](/images/aspnetzero/entity-history-log-detail.png)

你应该到 **.Core\EntityHistory\EntityHistoryHelper.TrackedTypes** 里添加你想要跟踪的实体类型。确保你没有在 **.EntityFrameworkCore\EntityFrameworkCore{YourProjectName}EntityFrameworkCoreModuls.cs** 里注释以下行并且设置 **Configuration.EntityHistory.IsEnabled** 为 **true** 。

```cs
// Set this setting to true for enabling entity history.
Configuration.EntityHistory.IsEnabled = false;

// Uncomment below line to write change logs for the entities below:
// Configuration.EntityHistory.Selectors.Add("AbpZeroTemplateEntities", EntityHistoryHelper.TrackedTypes);
// Configuration.CustomConfigProviders.Add(new EntityHistoryConfigProvider(Configuration));
```

第一行注释这里将定义在`EntityHistoryHelper.TrackedTypes`中实体类型添加到实体历史配置中,因此这些实体的变更将会被记录。第二行注释将自定义配置提供添加到`CustomConfigProviders`列表中。ASP.NET Zero执行`GetConfig`方法来遍历
