# [公开网站](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Public-Website)

ASP.NET Zero包含一个特殊的应用，它能称为你公开网站的起始点或是你应用程序的登录页面。

在运行项目之前，我们需要用 **yarn** 安装NPM包管理。为了做到这些，打开一个命令提示符，导航到 **.Web.Public** 项目的根目录并运行" **yarn** "命令。Yarn必须全局安装。如果你还没有安装它，请进入[https://yarnpkg.com](https://yarnpkg.com/)并安装它。

安装包之后，运行" **npm run create-bundles** "命令来生成JavaScript,CSS和LESS文件绑定。ASP.NET Zero自动观察JavaScript和Style文件并更新这些绑定。

注意：在开发时script文件不会缩小。当你发布你的应用，你需要运行" **npm run build** " 命令来为生产环境生成绑定并使用Visual Studio来发布应用(或者你喜欢的工具)。

我们准备使用Visual Studio来运行应用。因此，使用Visual Studio并运行这个应用，之后会显示公开网站项目的主页面。

![frontend-homepage](/images/aspnetzero/frontend-homepage.jpg)

这有两个页面：**Home Page** 和 "About"。这些页面的内容只是占位符为了演示目的。你可以移除内容并编译你的页面这完全取决于你需要。所以，你应该更改 **logo** 你公司的logo。

浏览[metronic front-end them](https://keenthemes.com/free-bootstrap-templates/multi-purpose-corporate-frontend-themefreebie-corporate-frontend-theme/) 组件尽可能的为构建一个丰富的网站。

菜单被定义在 **** 类里。

![frontend-layout-views-core](/images/aspnetzero/frontend-layout-views-core.png)

![new-tenant-select-edition-2](/images/aspnetzero/new-tenant-select-edition-2.png)

![tenant-signup-v3](/images/aspnetzero/tenant-signup-v3.png)

![public-web-site-login-username](/images/aspnetzero/public-web-site-login-username.png)
