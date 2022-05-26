# [租户登记](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Tenant-Sign-Up)

只有你在主机上时，租户登记链接才会显示在登录表单上。当你点击这个链接，如果应用版本未定义，一个注册表单如下所示:

![tenant-signup-v3](/images/aspnetzero/tenant-signup-v3.png)

如果有最新的版本定义，之后用户将会被重定向到版本选择页：

![new-tenant-select-edition-2](/images/aspnetzero/new-tenant-select-edition-2.png)

有两种类型版本，免费的和付费的。付费版有试用版本。如果没有试用版本，"免费试用"按钮将不会在出现在版本选择页中。页面上的所有选项都会将用户重定向到租户登记页面。如果用户选择了"立刻购买"选项，在租户登录页面后用户将会重定向到付款页面。在免费和试用选项中，如果在主机配置页面 "**租户管理**" 选项卡启用了下**新注册租户默认激活** 选项，用户将会登录到系统中。如果 **新注册租户默认激活** 选项没用选择，用户将会重定向到租户登记结果页面。

如果用户选择"立即购买"选项并支付版本订阅费用,用户将会直接登入尽管 **新注册租户默认激活** 选项没用启用。

更多关于订阅系统的信息，你可以查看[订阅](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Subscription)文档。
