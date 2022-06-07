# [审计日志](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Audit-Logs)

## 操作日志

在审计日志页面，我们可以在操作日志选项卡下看见所有用户与应用的互动:

![audit-logs-core-4](/images/aspnetzero/audit-logs-core-4.png)

所有应用服务方法和MVC控制器行为是自动记录并且能在这里预览。参考[审计日志文档](https://aspnetboilerplate.com/Pages/Documents/Audit-Logging)需要如何配置它。当我们点击放大镜图标时，我们可以看见审计日志是所有细节:

![audit-logs-detail-1](/images/aspnetzero/audit-logs-detail-1.png)

审计日志报告由 **AuditLogAppService** 类提供。

## 定期日志删除

ASP.NET Zero已经构建了定期日志删除系统。为了启用它，到`*.Application/Auditing/ExpiredAuditLogDeleterWorker.cs`并设置`IsEnabled`为true;

```cs
 public class ExpiredAuditLogDeleterWorker : PeriodicBackgroundWorkerBase, ISingletonDependency
{
    ...
    public const bool IsEnabled = false;//default is false
    ...
}`
```

它还有两个参数。

**CheckPeriodAsMilliseconds** :在两个控件直接的等待时间。

**MaxDeletionCount** :一次能删除的最大记录数。

> 注意: 要以更频繁的间隔内执行较小的操作你可以减少`MaxDeletionCount`和`CheckPeriodAsMilliseconds`。
