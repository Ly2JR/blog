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

第一行注释这里将定义在`EntityHistoryHelper.TrackedTypes`中实体类型添加到实体历史配置中,因此这些实体的变更将会被记录。第二行注释将自定义配置提供添加到`CustomConfigProviders`列表中。ASP.NET Zero执行`GetConfig`方法来遍历`CustomConfigProvider`并返回`GetConfig`的结果到Angular客户端APP。

因此，在这种特殊情况下，`EntityHistoryConfigProvider`返回是否启用了实体历史功能，如果启用，它返回实体历史启用的实体列表。Angular客户端APP使用这些信息在每个实体页上展示实体历史相关的按钮。

例如，当一个实体的实体历史是启用的，Angular客户端APP在相关页面上展示每个实体记录的历史下拉菜单项。这有一个角色列表的示例截图：

![change-logs-history-action-item](/images/aspnetzero/change-logs-history-action-item.png)

通过这样方式，在审计日志页面的日志变更选项卡上或实体本身的列表页面上检索实体的历史记录。

实体历史配置能够在AngularApp上访问，像这样:

```js
abp.custom.EntityHistory
```

abp.custom.EntityHistory对象包含以下属性：

**isEnabled**:Boolean字段表示是否启用实体记录。
**enabledEntities**：字符串数组包含启用实体历史的实体类型的全称。

这里有一个示例展示 **abp.custom.EntityHistory** 值的截图:

![change-logs-custom-config-result-core](/images/aspnetzero/change-logs-custom-config-result-core.png)
