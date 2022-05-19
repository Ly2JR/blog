# [入门](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Getting-Started-Angular)

本文档旨在5分钟就能创建并运行ASP.NET Zero的基础项目。前提是你已经创建了ASP.NET Zero账号和[购买](https://aspnetzero.com/Pricing)了开发许可。

## 创建你的项目

用你的账户和密码登录[ASPNETZERO.COM](https://aspnetzero.com/Account/Login)网站。转到[下载](https://aspnetzero.com/Download)页面。你将会看到以下表单：
![download-angular-3](/images/aspnetzero/download-angular-3.png)

选择**ASP.NET Core & Angular**项目类型并填写其他必须的内容。你的项目将在一分钟内准备完。当你打开`downloaded`压缩文件，你将会看见两个文件夹:

![angular-solution-folders](/images/aspnetzero/angular-solution-folders.png)

- **angular**文件夹包含Angular UI应用程序，它与angular-cli一起配置工作。
- **aspnet-core**文件夹包含服务端ASP.NET Core解决方案并且与Visual Studio一起配置工作。

### 合并客户端和服务端解决方案

客户端和服务端解决方案默认被设计成分开独立工作。如果你只想运行单个Visual Studio解决方案。你可以在下载你的项目时选择"Single Solution"复选框。

如果你已经选择了这个选择，请按照入门文档对ASP.NET Core & Angular合并解决方案。

## 准备环境

- [Visual Studio 2017(v15.9.0+)](https://visualstudio.microsoft.com/zh-hans/)(为ASP.NET Core应用程序后端)
- [Node.js 6.9+ with NPM 3.10+](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/)

## ASP.NET Core 应用

当你用**Visual Studio 2017+** 打开服务端解决方案 (**\*.Web.sln**),你将会看见如下的解决方案结构：

![aspnet-core-host-solution-4](/images/aspnetzero/aspnet-core-host-solution-4.png)

::::tip
如果你只想用Xamrain项目工作，打开 **\*.Mobile.sln** 解决方案。如果你想用Xamarin和Web项目一起工作，打开 **\*.All.sln** 解决方案。
::::

右击 **.Web.Host** 项目并选择 **"设为启动项目"**,然后 **生成** 解决方案。在第一次生成期间需要很长的时间，因为要将所有的 **nuget** 依赖包恢复进来。

### 数据库

#### 连接字符串

如果你想更改 **默认** 连接字符串，在 **.Web.Host** 项目中打开 **appsettings.json**:

``` json
"ConnectionStrings": {
    "Default": "Server=localhost; Database=PhoneBookDemoDb; Trusted_Connection=True;"
}
```

#### 迁移

我们有两个选项可以创建数据库并将其迁移到最新的版本。

#### ASPNET Zero 迁移应用

在服务端解决方案中ASP.NET Zero解决方案包括一个 **.Migrator**(像Aceme.PhoneBookDemo.Migrator)项目。你可以在开发和生产中为数据库迁移运行这个工具(更多信息参考[迁移文档](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Migrator-Console-Application))。

#### 实体框架迁移命令

你也可以使用Entity Framework Core的生成工具来迁移。在Visual Studio中打开 **程序包管理器控制台** 。设置 **.EntityFrameworkCore** 做为 **默认项目**,运行 **Update-Database**命令，如下所示：

![update-database-ef-core](/images/aspnetzero/update-database-ef-core.png)

这个命令将会创建你的数据库。当你运行 **.Web.Host**项目时初始化数据会被插入。如果数据库被创建后，你可以打开SQL Server Management Studio 去检查它。

![created-database-tables-4](/images/aspnetzero/created-database-tables-4.png)

你可以在开发中使用EF控制台命令和在生产中使用Migrator.exe。但是需要注意的是：Migrator.exe支持在多数据库中立刻运行迁移，这为多租户应用程序在开发或者生产中很有用。

### 配置多租户

ASP.NET Zero解决方案支持多租户和单租户应用。多租户是 **默认启用** 的。如果你对多租户一无所知，你可以在[wikipedia.org/wiki/Multitenancy](https://en.wikipedia.org/wiki/Multitenancy)阅览它。如果你不想创建一个多租户应用，你可以在 **.Core.Shared**项目中通过设置 **PhoneBookDemoConsts.MultiTenancyEnabled**为false来 **禁用**它(名称是PhoneBookDemoConsts就像你自己项目的 *YourProjectNameConsts*)。

### 运行API主机

一旦你完成了配置，你可以运行只包含APIs的服务端应用。当你启动应用时你将会看见一个如下所示的登录页：

![host-login-page](/images/aspnetzero/host-login-page.png)

如果你登录这个主应用，那么你将会看下如下页面：

![host-home-page](/images/aspnetzero/host-home-page.png)

你可以从这个页面导航到 **Swagger UI**,**Hangife Dashboard** 或者 **GraphQL Playground**。注意：默认只有Swagger UI 是启用的，你可以通过[Hangfire documentation](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Infrastructure-Background-Jobs)启用Hangfire,通过[GraphQL documentation](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/GraphQL)启用GraphQL。

例如，当你导航到 **Swagger UI**,你将会看到如下页:

![swagger-ui-ng2-1](/images/aspnetzero/swagger-ui-ng2-1.png)

## Angular 应用

### 恢复包

导航到 **angular**文件夹,打开命令行，运行如下命令来恢复依赖包：

```bash
yarn
```

然后，运行如下命令去创建动态捆绑(这只在第一次下载项目或你升级动态捆绑时运行需要运行)

```bash
npm run create-dynamic-bundles
```

我们使用[yarm](https://yarnpkg.com)是因为NPM有一些问题；NPM很慢并且始终如一的解析依赖关系。Yarn相对于NPM很好的解决了这些问题。

### 运行应用

在命令行运行如下命令:

```bash
npm start
```

一旦应用编译完成，你可以在你的浏览器中浏览[http://localhost:4200](http://localhost:4200)。ASPNET Zero也有 **HMR** (热模块替换)启动。你可以在开发时使用如下命令来启用 HMR(代替 NPM start):

```bash
npm run hmr
```

### 登录

准备完毕！现在，你可以登录应用：

![login-screen-3](/images/aspnetzero/login-screen-3.png)

如果多租户是启用的，你将会看见当前租户和一个切换连接。如此，点击 **Change** 进入 **默认** 的租户名。如果你保留它为空，你将作为admin用户登录。用 **amdin**做用户名,**123qwe**做密码进入(记住在生产环境中更改它用一个更安全的密码！)

### 应用UI

当你作用租户管理登录这个应用时，你将会在屏幕中看见示例仪表盘:

![dashboardV3](/images/aspnetzero/dashboardV3.png)

## ASP.NET Zero Power Tools

ASP.NET Zero Power Tools 让你只要映射你的实体数据就可以创建从数据库到UI层的页面。它创建实体，相关权限，应用服务，DTOs,客户端代码，一个菜单元素等等....它也是创建&适用数据库迁移。

最后你将会有一个CRUD页面，并有插入,更新,删除，列表和excel导出功能。为了减少创建新页面的工作量，从如下连接安装这个强效工具:

[https://marketplace.visualstudio.com/items?itemName=Volosoft.AspNetZeroPowerTools](https://marketplace.visualstudio.com/items?itemName=Volosoft.AspNetZeroPowerTools)
