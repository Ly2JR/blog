# [组织单位](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Organization-Units)

组织单位(OU)用来对用户和实体分组分层的。之后它们可以根据组织单位获取到用户或实体。当我们点击Administration/Originzation units,我们进入相关页面:

![organization-units-page-core-4](/images/aspnetzero/organization-units-page-core-4.png)

这里，我们可以管理组织单位(创建、编辑、删除、迁移),组织单位的成员(添加/移除)和组织单位的角色。当一个角色被添加到一个组织单位时，这个组织单位的所有成员都被授予这个角色的权限。通过这种方式，你可以很容易的分配一个角色到组织单位的所有用户。

在左侧的组织单位树，我们可以在组织单位上**右击**打开上下文菜单来执行组织单位操作。

我们也可以用成员选项卡的右上方按钮添加新成员。

![select-user-lookup-core-3](/images/aspnetzero/select-user-lookup-core-3.png)

这实际上是一个**常用查找模式**并且被用来选择任意实体类型(参考app/shared/common/lookup/**common-lookup-modal.component**)。

我们也可以用角色选项卡的右上方按钮添加新角色。**common-lookup-modal**在这里也用来构建角色选择模式。

![add-roles-to-organization-unit](/images/aspnetzero/add-roles-to-organization-unit.png)

进一步信息请参考[ASP.NET Boilerplate Organization Unit Management Document](https://aspnetboilerplate.com/Pages/Documents/Zero/Organization-Units)。
