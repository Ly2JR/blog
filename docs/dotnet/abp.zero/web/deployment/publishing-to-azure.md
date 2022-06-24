# [发布到Azure](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Deployment-Angular-Publish-Azure)

## 介绍

在阅读本文档之前，建议阅读[开始部分](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Getting-Started-Angular)来运行应用并探索我们的接口。这会帮助你有一个更好的理解这里定义的概念。

## 创建Azure网站

可以单独或一起发布Asp.Net Zero的Anuglar客户端应用和服务端Web.Host API应用。在本文档中，我们将会分别发布两个应用。

因此，转到你的Azure门户并创建两个网站。其中之一是 **Web.Host**项目，另外一个是 **Angular** 应用。

### 为Host创建一个Azure网站

在Azure门户菜单，转到应用服务并点击"创建应用服务"按钮。正确填写应用服务并创建一个管理员网站的应用服务。

![azure-publish-angular-create-admin-website](/images/aspnetzero/azure-publish-angular-create-admin-website.png)

### 为Angular创建一个Azure网站

像刚刚我们创建Host网站做的那样，用不同的名称为Angular网站创建一个新的服务。

## 创建数据库服务

在Azure门户上，转到SQL数据菜单并创建一个新的空数据库。如果你还没有在Azure创建一个新服务，在服务选择下拉框下面点击"新建"连接首先创建一个服务。

![azure-publish-mvc-create-database](/images/aspnetzero/azure-publish-mvc-create-database.png)

## 发布托管应用到Azure

这里有快速发布 **Host Application** 到Azure的步骤。

- 在Azure运行migrations。
- 配置 **.Web.Host/appsettings.production.json**
- 发布应用到Azure

### 在Azure上运行Migrations

最佳方式之一就是在Azure运行Migrations在Vsisual Studio运行`update-database`命令。为了做到这步，你外网IP地址应该能访问到Azure。

### 为客户端访问配置防火墙

**简单方式** :打开Management Studio并填写Azure数据库配置，然后点击连接。如果你已经登录到Azure,下面屏幕信息将会显示(如果你还没有登录，一个表单将会在下面屏幕显示出现之前出现)：

![azure-publish-angular-allow-ip-to-azure](/images/aspnetzero/azure-publish-angular-allow-ip-to-azure.png)

现在你的客户端IP地址有权限访问Azure。当然，这个操作也能通过Azure门户完成。浏览[这里](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-firewall-configure)来学习如何为通过Azure门户为客户端访问配置防火墙。

### 应用迁移

在 **.Web.Host** 项目里打开 **appsettings.json** 并根据Azure数据库来更改连接设置。

![azure-publish-angular-connection-string](/images/aspnetzero/azure-publish-angular-connection-string.png)

在Visual Studio打开包管理器控制台，设置 **.EntityFrameworkCore** 作为默认项目并运行 `update-database` 命令如下所示:

![azure-publish-angular-update-database](/images/aspnetzero/azure-publish-angular-update-database.png)

作为替代方案，你可以在你的解决方案在Migrator项目里改变连接对象字符串并执行它来代替运行`update-database`命令。建议使用Migration项目来做迁移操作。

### 配置appsettings.production.json

由于你的应用将运行在生产环境，Azure将会使用位于 **Web.Host** 下的 **appsettings.production.json** ，因此这个文件应该如下配置：

![azure-publish-angular-appsttings-production](/images/aspnetzero/azure-publish-angular-appsttings-production.png)

`ServerRootAddress`这里的值用你的Host应用的AzureURL来表示。`ClientRootAddress`用你的Angular UI的URL来表示。`CorsOrigins`表示允许网站能够远程请求到你的Host应用。因此，在这个场景下，在Azure上`ClientRootAddress`和`CorstOrigins`的值必须跟你的Angular App的URL相同。

### 发布

右击 **Web.Host** 项目并选择" **发布** "。选择" **Microsoft Azure App Service** "并勾选" **选择现有** "。点击" **创建档案** " 按钮。

![azure-publish-angular-new-publish-profile](/images/aspnetzero/azure-publish-angular-new-publish-profile.png)

将显示以下屏幕:

![azure-publish-angular-select-azure-website](/images/aspnetzero/azure-publish-angular-select-azure-website.png)

选择" **你的托管应用服务名称** " 并点击" **OK** ",然后点击" **发布** "按钮， **Host** 应用现在已上线：

![azure-publish-angular-swagger-ui](/images/aspnetzero/azure-publish-angular-swagger-ui.png)

## 发布Anuglar到Azure

这里有快速发布 **AngularUI** 到Azure的步骤

- 运行`yarn`命令来恢复包
- 运行`npm run publish`命令来发布Angular App。
- 复制位于 **angular** 目录下的`web.config`文件到 **dist** 目录下
- 用你生产的URLs配置 **angular/dist/assets/appconfig.json**
- 上传"angular/dist"目录下的所有文件到Azure上的为Angular UI创建网站。

### 准备发布文件夹

运行`yarn`命令来恢复包并运行`npm run publish`来发布Angular App。

### 复制web.config

配置 **angular/dist/assets/appconfig.production.json** 像这样：

![azure-publish-angular-appconfig](/images/aspnetzero/azure-publish-angular-appconfig.png)

### 上传文件到Azure

必须通过FTP上传文件到Azure。从 **dist** 传输文件到Azure上的 **www** 文件夹。文件夹结构看起来应该像这样:

![azure-publish-angular-filezilla](/images/aspnetzero/azure-publish-angular-filezilla.png)

Angular应用现在已上线。浏览<http://azure-publish-demo-client.azurewebsites.net/>并查看它的工作情况。

![azure-publish-angular-angular-ui](/images/aspnetzero/azure-publish-angular-angular-ui.png)
