# [通知](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Notifications)

通知徽标位于语言选择按钮旁边。

用户点击这个徽标能看见3个最近的通知。

![recent-notifications-1](/images/aspnetzero/recent-notifications-1.png)

用户通过点击 **设置全部已读** 链接来让所有通知已读或者通过点击每个通知旁边的 **设置已读** 链接来设置单个通知。通知使用SingalR实时通知。另外，当一条通知被接受一个 **桌面推送通知** 将会显示。

## 通知设置

**设置** 链接打开通知设置对话框。

![notification-settings-2](/images/aspnetzero/notification-settings-2.png)

在这个对话框有一个为用户启用/禁用接受通知的全局设置。如果这个设置被启用，那么用户能单独的启用/禁用每个通知。

你也可以在 **AppNotificationProvier** 类里自定义你的通知。例如，新用户注册通知被定义在 **AppNotificationProvider**，如下:

```cs
context.Manager.Add(
     new NotificationDefinition(
        AppNotificationNames.NewUserRegistered,
        displayName: L("NewUserRegisteredNotificationDefinition"),
        permissionDependency: new SimplePermissionDependency(AppPermissions.Pages_Administration_Users)
    )
);
```

跟多细节浏览[通知定义](https://aspnetboilerplate.com/Pages/Documents/Notification-System#notification-definitions)部分。

**AppNotifier**类被发布通知调用。

**NotificationAppService**类被管理应用通知的逻辑调用。

当一个通知发送，Angular应用经过SignalR接收它并且 **UserNotificationHelper.ts** (在`app\shared\layout\notifications\`目录下)用来格式化这个通知信息在它显示到用户之前。如果你想要重定向用户到一个新页面或者到一个外部网站，你可以修改 **getUrl** 方法。

更多细节浏览[通知文档](https://aspnetboilerplate.com/Pages/Documents/Notification-System)。

## 通知列表

所有用户的通知在这个页面上列出。我们可以在这个页面删除或让一条通知已读。

![notifications-list-core-4](/images/aspnetzero/notifications-list-core-4.png)
