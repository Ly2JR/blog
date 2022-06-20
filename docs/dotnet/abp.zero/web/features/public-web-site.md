# [公开网站](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Public-Website)

ASP.NET Zero包含一个特殊的应用，它能成为你公开网站的起始点或者是你应用程序的登录页面。

在运行项目之前，我们需要用 **yarn** 安装NPM包管理。为了做到这些，打开一个命令提示符，导航到 **.Web.Public** 项目的根目录并运行" **yarn** "命令。Yarn必须全局安装。如果你还没有安装它，请进入[https://yarnpkg.com](https://yarnpkg.com/)并安装它。

安装包之后，运行" **npm run create-bundles** "命令来生成JavaScript,CSS和LESS文件绑定。ASP.NET Zero自动观察JavaScript和Style文件并更新这些绑定。

注意：在开发时script文件不会缩小。当你发布你的应用，你需要运行" **npm run build** " 命令来为生产环境生成绑定并使用Visual Studio来发布应用(或者你喜欢的工具)。

我们准备使用Visual Studio来运行应用。因此，使用Visual Studio并运行这个应用，之后会显示公开网站项目的主页面。

![frontend-homepage](/images/aspnetzero/frontend-homepage.jpg)

这有两个页面：**Home Page** 和 "About"。这些页面的内容只是占位符为了演示目的。你可以移除内容并编译你的页面这完全取决于你需要。所以，你应该更改 **logo** 你公司的logo。

浏览[metronic front-end them](https://keenthemes.com/free-bootstrap-templates/multi-purpose-corporate-frontend-themefreebie-corporate-frontend-theme/) 组件尽可能的为构建一个丰富的网站。

菜单被定义在 **FrontEndNavigationProvider** 类里。当你在这里添加一个新菜单项，它将会自动的显示在菜单里。有一个 **登录** 连接在右上角。这个链接把用户带到 **登录页** 并进去 **Angular** 应用里。登录之后，用户将会重定向返回到公开网站。

## 布局

前端页面的布局位于 **Views/Layout** 文件夹下。

![frontend-layout-views-core](/images/aspnetzero/frontend-layout-views-core.png)

**_Layout** 是一个主布局文件包括scripts和styles。语言标记和菜单生成在 **Header component**，这些位于Shared/Components下。_PreFooter还没有用到但是你想要的话可以添加它到_Layout。

## 新租户注册

当你点击 **新租户** 链接(在区域的右上方)你会被重定向到版本/计划选择页面:

![new-tenant-select-edition-2](/images/aspnetzero/new-tenant-select-edition-2.png)

实际上，这个UI位于主应用中。当你挑选一个版本时，根据你点击的按钮你被重定向到支付或者注册表单。注册表单如下所示：

![tenant-signup-v3](/images/aspnetzero/tenant-signup-v3.png)

## 单点登录

公开完整有一个登录集成到主应用。当你点击到登录按钮(在区域的右上方)你会被重新写到主应用。如果你已经登录那么你也会自动的登录到公开网站，如果没有，你可以输入你的用户名和密码来登录。之后你被重定向返回到公开网站并且你的用户名显示在右上方。

![public-web-site-login-username](/images/aspnetzero/public-web-site-login-username.png)

为了使这些工作，公开网站必须知道Angular应用的URL。这是在 **Web.Public** 项目里在 **appsettings.json** 文件里可配置的，设置 **AdminWebSiteRootAddress** 到主引用的根URL。

在开发环境这个配置是一个属性设置。你应该更改它当你发布你的项目时。
