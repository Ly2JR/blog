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

### 基础配置

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

### 多租户

多租户被用来轻松生成 **Saas**(软件即服务)应用。根据这个技术，我们可以部署**单个应用**来服务**多个客户**。每一个租户将会拥有它自己的角色，用户，配置和其他数据。

ASP.NET Zero的代码库被开发成 **多租户**。但是，如果你正在开发一个**单租户**应用，用一行配置就能[禁用](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Getting-Started-Angular#configure-multi-tenancy)它。
