# 概述

## 介绍

在阅读本文档之前，建议运行应用并根据[入门文档](./getting-started.md)按描述探索用户界面。这将会帮你有一个更好的理解这里的定义概念。

### IDE&Operating System

推荐使用一个IDE来开发你的项目。我们推荐[Visual Studio 2017+](https://visualstudio.microsoft.com/),但是你也可以使用Visual Studio Code或者任何其他你喜欢的IDE/Editor。你也可以使用任何操作系统(MacOs/Linux/Windows)。

## 结构

以下图标展示了解决方案的所有结构：

![angular2-core-overall-architecture](/images/aspnetzero/angular2-core-overall-architecture.png)

Angular项目被设计成可以与后端ASP.NET Core解决方案 **单独部署**，部署到同一服务器的不同端口或者是不同服务器中。当它部署后，它实际是一个纯HTML+JS+CSS应用，可以在任何操作系统任何Web服务器上提供服务。

注意：ASP.NET Core解决方案没有任何HTML,JS或者CSS代码。它简单的为基本令牌的身份验证和使用的应用服务(REST APIs)提供端点。

### 服务端解决方案结构(层次)

在你创建并下载项目后，你有一个 **\*.Web.sln** 的解决方案结构,如下所示：

![solution-overall-host](/images/aspnetzero/solution-overall-host.png)

还有2个的解决方案：

- **\*.Mobile.sln**包含Xamarin 项目
- **\*.All.sln**包含移动端和Web的开发项目

在解决方案中有12个项目：

- **Core.Shared**项目包含`consts`,`enums`和辅助类被用在移动端和Web项目中。
- **Core**项目包含领域层的类(比如[entities](https://aspnetboilerplate.com/Pages/Documents/Entities)和[domain services](https://aspnetboilerplate.com/Pages/Documents/Domain-Services))。
- **Application.Shared**项目包含[application service interfaces](https://aspnetboilerplate.com/Pages/Documents/Application-Services#DocIApplicationServiceInterface)和[DTOs](https://aspnetboilerplate.com/Pages/Documents/Data-Transfer-Objects)。
- **Application**项目包含应用逻辑(比如[application services](https://aspnetboilerplate.com/Pages/Documents/Application-Services))
- **EntityFrameworkCore**项目包含你的DbContext,[仓储](https://aspnetboilerplate.com/Pages/Documents/Repositories)现实，数据库迁移和其他特别的Entity Framework Core概念。
- **Web.Host**项目不包含任何web关联文件,像HTML,CSS或者JS。代替的是，它只是作为远程API的应用服务。所以，任何设备都能将你的应用当作API使用。更多信息参考[Web.Host Project](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Mvc-Core-Web-Host-Project)
- **Web.Core**项目包含常用的类被用在MVC和Host项目。
- **Web.Public**项目是一个特别的Web应用，被用来在你的程序创建一个公开的网站或者一个登录页。更多的信息参考[Public Website](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Public-Website)。
- **Migrator**项目是一个控制台应用,用来运行数据库迁移。更多信息参考[Migrator Console Application](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Migrator-Console-Application)
- **ConsoleApiClient**项目是一个简单的控制台应用，用于通过IdentityServer4认证的应用程序授权执行API请求。
- **Test**项目包含单元和集成测试。

### 应用

ASP.NET Zero解决方案包含三个应用：

- **终端API(`Web.Host`)**:为主要应用提供REST API服务不提供任何UI。
- **公开网站(`Web.Public`)**:这被用来为你的应用创建一个公开的网站或一个登录页面。
- **迁移执行者(`Migrator`)**:控制台应用用来运行数据库迁移。

#### 基础配置

`appsettings.json`在Web.Host项目中包含许多配置，但是 **ServerRootAddress** ，**ClientRootAddress** 和 **CorsOrigins** 是运行应用必须的配置。

```json
"ServerRootAddress": "https://localhost:44301/",
"ClientRootAddress ": "http://localhost:4200/",
"CorsOrigins": "http://localhost:4200/"
```

**ServerRootAddress**是服务端Web.Host应用的URL。
**ClientRootAddress**是客户端Angular应用的URL。
**CorsOrigins**包含的地址是允许通过跨域请求到Web.Host应用。

关于配置Web.Host应用的更多信息，参考[Features-Mvc-Core-Web-Host-Project](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Mvc-Core-Web-Host-Project)

#### 多租户

多租户被用来轻松生成 **Saas**(软件即服务)应用。根据这个技术，我们可以部署**单个应用**来服务**多个客户**。每一个租户将会拥有它自己的角色，用户，配置和其他数据。

ASP.NET Zero的代码库被开发成 **多租户**。但是，如果你正在开发一个**单租户**应用，用一行配置就能[禁用](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Getting-Started-Angular#configure-multi-tenancy)它。当你禁用它时，所有的多租户东西将会隐藏。如果多租户被禁用，将会有一名称为 **默认** 的单租户。

多租户应用中有两种类别的看法：

- **Host** :管理者租户和系统。
- **Tenant**: 使用实际的应用功能并为它付费。

为了多租户应用，URLS包含动态租户名称，例如，放置`{TENANCY_NAME}`作为租户名的占位符，像这样：

```json
"ServerRootAddress": "http://{TENANCY_NAME}.mydomain.com/",
"ClientRootAddress": "http://{TENANCY_NAME}.app.mydomain.com/"
```

为了跨域设置，你可以使用 **\*** 字符来允许所有的子域名，例如

```json
"CorsOrigins": "http://*.app.mydomain.com/"
```

如果你想在你的URLS上使用`{TENANCY_NAME}`占位符，你也可以在客户端Angular应用上配置URLs。

因此，ASP.NET Zero可以自动的在URLs检查当前租户。如果你按照上述方式配置它，你也应该将所有的子域名重定向到你的应用，要做到这点：

  1. 你应该配置DNS，让所有的子域名重定向到一个静态IP地址。为了声明'所有子域名'，你可以使用一个通配符,例如 **\*.mydomain.com**。
  2. 你应该配置IIS以这个静态IP地址绑定到你的应用程序。

还有很多其他的方式可以实现它，但是这是最简单的一种。

> 在开发期间，为了更简单的开发体验，你不需要为租户使用子域名。当你想这样做时，一个手动'切换租户'的对话框被用在多租户当中。

如果你正在生成多租户应用，查看[多租户文档](https://aspnetboilerplate.com/Pages/Documents/Multi-Tenancy)。

### Angulear解决方案

Angular解决方案的 **入口点** 是 **src/main.ts**。它只是引导着Angular根模块：**RootModule**。解决方案的基本模块如下所示：

![ng2-modules](/images/aspnetzero/ng2-modules.png)

- **RootModules** 负责引导应用程序。
- **AccountModule**提供登录，双因子验证，注册，忘记密码和密码重置，电子邮箱激活，等等...，它是[懒加载](https://angular.io/guide/router)的。
- **AppModule**只是对应用模块进行分组，提供一个基础的布局。它包含两个子模块：
  - **AdminModule**包含多种页面，如用户管理页面，角色管理页面，租户管理页面，语言管理页面，配置页面等等。它是懒加载的。
  - **MainModule**是开发你自己应用程序的主要模块。它只包含一个演示用的仪表盘页面，你可以修改或者删除它。建议像我们在启动项目中所做的那样，将你的应用程序拆分到更小的模块中，而不是把所有的功能都写进主模块。这也是懒加载。
  
  基础模块有它们自己的 **路由**。例如：AccountModule视图以**/account**(如"/account/login")开始,AdminModule视图以 **/app/admin**(如"/app/admin/users")开始。

Angular的路由是延迟加载模块的。例如，当你以"app/admin"开始请求一个url时，AdminModule包括它所有的组件被加载进来。如果不请求这些页面它们不会被加载。这带来了更好的启动效率(也带来了更快的开发时间，因为它们被独立的分开成块)。

除了这些基础的模块之外，还有一些共享模块：

- app/shared/common/**app-common.module**: 一个公用模块被main和admin模块共享功能。
- shared/common/**common.module**:一个公用模块被account和app模块共享(包括它们的子模块)
- shared/utils/**utils.module**：另外一个公用模块被所有模块(包括它们的子模块)共享。我们试着整理这些通用代码，是为了它们可以在不同的应用中使用。
- shared/service-proxies/**service-proxy.module**：自动生成`nswag`代码。它是用来跟后端ASP.NET Core API通信的。稍后，我们将会看到"怎样生成自动代理"。

#### 配置

Angular解决方案包含src/assets/**appconfig.json**文件，里面包含了客户端的一些基础配置：

- **remoteServiceBaseUrl**:用来配置服务端APIs的基地址。默认值:`https://localhost:44301`
- **appBaseUrl**:用来配置客户端的基地址。默认值:`https://localhost:4200`
- **localMappings**:用来配置与现有本地化不兼容的第三方库的本地化。

**appBaseUrl**是配置好的，因为我们要用它来定义我们的URL格式。如果我们要为多租户应用使用租户名称作为子域名的话，我们可以这样定义**appBaseUrl**:

`http://{TENANCY_NAME}.mydomain.com`

*{TENANCY_NAME}*这是为租户名称使用的一个占位符。也可以为 **remoteServiceBaseUrl**配置相似租户名。为了让有租户名的子域名生效。跟应用配置相比，我们也应该做两个配置：

  1. 你应该配置DNS，让所有的子域名重定向到一个静态IP地址。为了声明'所有子域名'，你可以使用一个通配符,例如 **\*.mydomain.com**。
  2. 你应该配置IIS以这个静态IP地址绑定到你的应用程序。

还有很多其他的方式可以实现它，但是这是最简单的一种。

> 在开发期间，为了更简单的开发体验，你不需要为租户使用子域名。当你想这样做时，一个手动'切换租户'的对话框被用在多租户当中。

#### 应用程序基础组件

如果你从 **AppComponentBase** 类继承你自己的组件,你可以得到很多预注入的常用服务(像本地化，权限检查，功能检查，UI消息通知，配置等等...)。例如：你可以在组件类中为本地资源化使用 **this.l(...)** 功能。在视图中，你可以使用 **localize** 管道。参考预生成组件的更多示例用法。
