# [版本管理](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Edition-Management)

如果你不是正在开发一个多租户应用，你可以跳过本章节。

大多数 **Saas**(多租户)应用不同的有版本(包)它们有一些不同的 **特征**。因此，他们可以为他们的租户(客户)提供一些不同的 **价格和特征选项**。**版本包**(在主机登录中可用)是用来管理应用版本的：

![editions-page-core-4](/images/aspnetzero/editions-page-core-4.png)

版本用来对特征值进行分组并分配给租户。我们可以通过点击 **创建新版本** 按钮创建一个新的版本:

![edition-edit-1](/images/aspnetzero/edition-edit-1.png)

一个版本可以是免费的或者是试用的。如果它是试用版本那么你应该录入月和年价格。你可以允许租户在指定的日子试用这个版本。之后你可用确定一个过期策略：在订阅到期后允许租户使用应用的天数。最后，如果租户不在续订，你可以停用租户或者分配到一个免费的版本。

特征选项卡用来决定版本可用的功能。

![edition-feature-editing-core-1](/images/aspnetzero/edition-feature-editing-core-1.png)

创建一个新版本之后，只有版本的名称和特征可用变更，如果你在创建版本时有一个错误或者你想要用户停止订阅这个版本，只需删除这个版本并另外创建一个。由于版本是一个[软删除](https://aspnetboilerplate.com/Pages/Documents/Data-Filters#isoftdelete)实体,它不会从数据库真正的删除而是标记它当作删除。

为了删除和编辑，该版本的所有租户都必须迁移到其他版本中。你可以很容易的做到，在版本页点击"动作"按钮，然后选择"移动租户到其他版本"项，之后，你将会看到如下的一个模态页面：

![move-tenants-to-another-edition](/images/aspnetzero/move-tenants-to-another-edition.png)

你可以在这个页面上点击这个连接去了解哪些用户将会被迁移到新的选择的版本上。

更多信息请参考[特征管理](https://aspnetboilerplate.com/Pages/Documents/Feature-Management)和[版本管理](https://aspnetboilerplate.com/Pages/Documents/Zero/Edition-Management)。