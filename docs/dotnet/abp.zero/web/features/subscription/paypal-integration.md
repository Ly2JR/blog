# [PayPal集成](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Subscription-PayPal-Integration)

为了配置PayPal,在 **\*.Web.Host项目**里打开`appsettings.json`文件并且填写以下字段:

- **IsActive** :这个设置是用来启用/禁用PayPal。如果设置了false,用户在支付过程看不到PayPal选项。

- **Environment** :确定PayPal环境," **sandbox** "被用来测试环境," **live** "被用来生产环境。

- **BaseUrl** :对PayPal进行API调用的URL。你能在你的PayPaly开发者仪表板里找到争取的URLs。

- **ClientId** :PayPal app的客户端ID。
  
- **ClientSecret** :PayPal app的客户端密钥。

- **DemoUsername** :演示账号的用户名，在演示模式下显示用户来进行测试目的。

- **DemoPassword** :演示账号的密码，在演示模式下显示用户来进行测试目的。

注意：当前实现的PayPal不支持定期付款。因此，如果租户想要通过PayPal支付，ASP.NET Zero 不会在租户订阅到期时自动向租户账号收费。在那种情况下，租户需要在每个订阅周期内进入系统在订阅页面点击 **extend** 按钮支付订阅价格。
