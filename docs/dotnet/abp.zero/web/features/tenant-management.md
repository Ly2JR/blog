# [租户管理](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Tenant-Management)

如果你不是正在开发一个多租户应用，你可以跳过本章节。

如果这是一个多租户应用并且你作为主机用户登录。那么租户页面将会显示：

![tenant-management-core-3](/images/aspnetzero/tenant-management-core-3.png)

租户通过 **租户**类来表示。租户类能够通过添加新的属性来[扩展](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Extending-Existing-Entities)。只有一个租户时,会初始化一个名称是 **默认**的租户。 **租户名** (代号，可以当作子域名)是租户的 **唯一** 名称。一个租户可以是 **活跃的**的或者是 **消极的**。如果它是消极的，这个租户下的用户不能登录到应用。

当我们点击 **创建新租户** 按钮时，一个对话框显示:

![tenant-create-modal-1](/images/aspnetzero/tenant-create-modal-1.png)

**租户名**应该是唯一的并且不能包含空格或者其他特别字符由于它可能会用在子域名名称上(比如 tenancyname.mydomain.com)。 **名称** 可以是任何内容。 **管理员邮箱** 被用作新租户管理员的电子邮件地址。管理员用户是伴随租户自动创建的。我们可以为管理员设置一个随机密码并且发送激活邮箱。当用户第一次登录，他们应该更改密码。我们可以取消这个来输入一个已知的密码。

当我们创建一个新的租户，我们应该选择/创建一个数据库来存储新租户的数据。我们可以选择'**使用主机数据库**'主机数据库上来存储租户的数据(可以用来单一数据库方法)或者我们可以为新租户使用一个特别的连接字符串来创建/使用一个 **专用数据库**。ASP.NET Zero支持 **混合** 方法。这意味着你可以为一些租户使用主机数据库和为其他一些租户创建专用数据库。甚至你可以将一些租户分组到一个单独的数据库中。

一旦你为租户分配了一个版本，你可以选择一个失效日期(参考[版本管理]章节了解订阅失效将会发生什么)。

## 住户版本和特征

一个 **版本**可以 **被分配** 到一个租户(在创建或者编辑时)。租户将会集成分配版本的所有的特征，但是我们也能为一个租户重新这些特征和值。点击 **actions/change features**为租户来 **定制化** 它的特征：

![tenant-features-core-1](/images/aspnetzero/tenant-features-core-1.png)

## 租户用户模拟

做为一个主机用户，我们可能想代表租户来来执行操作。在这种情况下，我们可以在操作中点击**作为租户登录** 按钮。当我们点击了它，我们看见**一个模式来选择租户的用户**。我们可以选择任意用户并行执行那个用户授权的操作。更多信息请参考用户管理文档的[用户模拟](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-User-Management#user-impersonation)章节。

## 用租户名作为子域名

一个多租户应用通常使用子域名来当作当前租户的身份。**tenant1**.mydomain.com,**tentant2**.mydomain.com等等。ASP.NET Zero自动从子域名上识别并获取租户的名称。参考概述文档的[多租户](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Overview-Angular#multi-tenancy)和[配置](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Overview-Angular#configuration)章节。

