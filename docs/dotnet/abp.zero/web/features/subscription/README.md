# [订阅](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Subscription)

使用这个页面租户能够管理(查阅,扩展或者升级)他们的版本/发布订阅:

![subscription-1](/images/aspnetzero/subscription-1.png)

所有关于购买/扩展/升级订阅的付费记录都会保留在系统中。这些记录能够在订阅页面的"付款历史"选项卡中看到。

![subscription-payment-history-core](/images/aspnetzero/subscription-payment-history-core.png)

租户也能够通过点击" **显示发票** "按钮为这些付款创建&打印发票。系统将会自动生成一个发票号和展示生成的发票。为了使用这个功能，主机和租户都必须在主机设置/租户设置页面上设置发票信息。

![host-settings-invoice](/images/aspnetzero/host-settings-invoice.png)

完成所有设置之后，与订阅相关的付款发票将会生成。你可以查看以下发票示例:

![sample-invoice-core](/images/aspnetzero/sample-invoice-core.png)

ASP.NET Zero的订阅系统允许使用两种支付网关。一个是[PayPal](https://www.paypal.com/c2/home),另一个是[Stripe](https://stripe.com/)。你可以在 **.Web.Host**项目里的 `appsettings.json`文件配置所有的支付网关。

当租户的订阅将要过期，一份提现到期的电子邮件会发送到租户的邮件地址上。这个作业是在 **SubscriptionExpireEmailNotifierWorker.cs** 后台工作处理的。这个工作者每天运行一次并向这些许可证将要在N天过期的租户发送邮件。这个天数的N是存储在 **App.TenantManagement.SubscriptionExpireNotifyDayCount** 名称下并且它默认值是7天。你可以在 **\*.Core** 项目 **AppSettings.cs** 类里更改它。

当租户的订阅已经过期，**SubscriptionExpirationCheckWorker.cs**(它位于SubscriptionExpireEmailNotifierWorker.cs附近)进入支付和执行以下逻辑：

- 如果对租户的版本设置了 **WaitingDayAfterExpire**，ASP.NET Zero等待 **WaitingDayAfterExpire** 天后结束租户的订阅。
- 如果对租户的版本选择了" **assign to another edition** ",租户将会移动到后背版本。
- 如果对租户的版本选择了" **deactive tenant** ",租户将会被禁用并且将不能够使用系统。
- 如果一个订阅试用租户的订阅到期，这个租户将会被禁用并且将不能够使用系统。

## 最小更新量

由于支付系统接收最低支付金额，你可能需要再你的支付系统里设置最小支付金额。设置位于`*.Core.Shared/AbpZeroTemplateConsts.cs`和`angular/src/shared/AppConsts.ts`

```cs
// Note:
// Minimum accepted payment amount. If a payment amount is less then that minimum value payment progress will continue without charging payment
// Even though we can use multiple payment methods, users always can go and use the highest accepted payment amount.
//For example, you use Stripe and PayPal. Let say that Stripe accepts min 5$ and PayPal accepts min 3$. If your payment amount is 4$.
// User will prefer to use a payment method with the highest accept value which is a Stripe in this case.
public const decimal MinimumUpgradePaymentAmount = 1M;
```

```ts
static readonly MinimumUpgradePaymentAmount = 1;
```

默认值是 **1** 。

如果支付金额小于给定的值，将会继续支付进度而没有支付任何费用。