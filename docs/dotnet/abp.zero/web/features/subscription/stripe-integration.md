# [Stripe集成](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Subscription-Stripe-Integration)

为了配置Stripe,在 **\*.Web.Host项目**里打开`appsettings.json`文件并且填写以下字段:

- **IsActive** :这个设置是用来启用/禁用Stripe。如果设置了false,用户在支付过程看不到Stripe选项。

- **BaseUrl** :对Stripe进行API调用的URL。你能在你的Stripe开发者仪表板里找到争取的URLs。

- **SecretKey** :你的Stripe密钥。
  
- **PublishableKey** :你的Stripe公钥。

- **WebhookSecret** :你的Stripe WebhookSecret 用来验证WebHook 请求。

- **PaymentMethodTypes** :(字符串数组)，提供支付方法类型，查看[stripe payment method types](https://stripe.com/docs/payments/payment-methods)

Stripe支持定期支付。如果租户想要通过Stripe支付并且接收首付款账户的自动计费，之后Stripe将在每个订阅周期内从租户的账户中收费并且通知AspNet Zero。那么，AspNet Zero延长订阅到下个支付周期(每个月或者每年)。

![subscription-stripe-recurring-payments](/images/aspnetzero/subscription-stripe-recurring-payments.png)

如果在支付页面上" 我的账户自动计费 " 选项没有被选择，租户可以登陆到系统在订阅页面上手动延长他们的订阅通过点击" 延期 " 按钮来手动支付。

## 重要通知

AspNet Zero 使用webhooks来获取stripe的结果。那是为什么你必须进入[https://dashboard.stripe.com/webhooks](https://dashboard.stripe.com/webhooks)并用`https://[www.yoursite.com/Stripe/WehBooks]`端点添加一个新的webhook。同时订阅`invoice.pad`和`checkout.session.completed`事件。

## 在Localhost上测试Stripe WebHooks

### Stripe-Cli

为了获取Stripe的WebHooks请求你可以在你的本地环境使用stripe-cli。进去[https://dashboard.stripe.com/webhooks](https://dashboard.stripe.com/login?redirect=%2Fwebhooks)页面去下载它。并且安装stripe-cli

![stripe-test-stripe-cli-download](/images/aspnetzero/stripe-test-stripe-cli-download.png)

下载完成之后，登录到stripe-cli [https://github.com/stripe/stripe-cli/wiki/login-command](https://github.com/stripe/stripe-cli/wiki/login-command)

之后你可以正在运行的侦听器将webhooks转发到AspNet Zero。

```powershell
stripe listen --forward-to https://localhost:44301/Stripe/WebHooks
```

那个将会把所有的事件转到你本地项目。更多信息查看[https://github.com/stripe/stripe-cli/wiki/listen-command](https://github.com/stripe/stripe-cli/wiki/listen-command)

连接成功之后你的设备将会列出。

![stripe-test-stripe-cli-list](/images/aspnetzero/stripe-test-stripe-cli-list.png)

### Webhookrelay

为了在你本地环境获取到Stripe的webhook请求，你也可以使用扩展工具像[https:webhookrelay.com](https://webhookrelay.com/)。它是目前网络上最好的工具之一。[如何在localhost接收Stripe webhooks](https://webhookrelay.com/blog/2017/12/26/receiving-stripe-webhooks-localhost/)被用来在localhost测试Stripe的webhook。基本上，你需要在[https://webhookrelay.com](https://webhookrelay.com/)创建一个账户,然后需要下载relay.exe到你的开发机器上。

之后，你需要运行relay.exe像这样:

```powershell
./relay.exe forward --bucket stripe https://localhost:44301/Stripe/WebHooks
```

这将会给你一个url像"https://my.webhookrelay.com/v1/webhooks/aa180d45-87d5-4e9c-8bfa-e535a91df3fc"。你需要在Stripe的webhook仪表板([https://dashboard.stripe.com/account/webhooks](https://dashboard.stripe.com/login?redirect=%2Faccount%2Fwebhooks))上录入这个地址做为一个webhook端点。

不要忘了当你发布你的APP到生产环境时，录入生产APP的URL做为一个webhook端点。

**注意**:

- 租户可以在订阅页面上禁用或启用Stripe自动向它们的账户收费。
  
- 当升级到一个更高的版本时，AspNet Zero为升级计算费用并从租户账户收费(使用结账)。

- 当一个租户使用Stripe订阅一个版本时同时如果admin用户在租户页面上变更版本到一个更高的版本时，stripe自动的会向租户的账户收费。

([https://stripe.com/docs/billing/subscriptions/prorations](https://stripe.com/docs/billing/subscriptions/prorations))
