# [发布到IIS](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Deployment-Angular-Publish-IIS)

## 发布托管应用

发布ASP.NET Zero Host项目跟任何其他ASP.NET Core应用发布没有什么不同。

### 发布网站

- 右击`\*.Web.Host`项目并点击 **发布**
- 点击 **开始** 并选择 **文件夹** 选项卡并选择你想要发布的URL。

![iis-core-publish-select-folder-and-publish](/images/aspnetzero/iis-core-publish-select-folder-and-publish.png)

- 在服务器的 **IIS** 路径下新建一个文件夹。(例如:`c:\inetpub\wwwroot\mywebsite`)。
- 复制外部文件到服务器。(从`*.Web.Host/bin/release.netcoreapp2.1/publish`到`c:\inetpub\wwwroot\mywebsite`)。
- 用你自己的设置配置`appsettings.production.json`

### 创建IIS网站

- 右击 **站点** 并点击 **添加网站**。

![iis-core-publish-add-website-to-iis](/images/aspnetzero/iis-core-publish-add-website-to-iis.png)

- **mywebsite** 应用池将会自动创建。点击 **应用程序池**,双击 **mywebsite** 应用程序池并改变它的配置。

![iis-core-publish-configure-app-pool](/images/aspnetzero/iis-core-publish-configure-app-pool.png)

项目包含一个`web.config`文件，它的内容在开发阶段可能改变，请在发布后检查`web.config`文件，尤其是`ASPNETCORE_ENVIRONMENT`设置。

更多细节查阅[在Windows用IIS托管ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/index?view=aspnetcore-2.1)

## 发布Angular应用

我们在开发&部署时使用angular-cli。Angular CLI有它自己编译命令可以用来编译你的应用。

- 运行`npm run publish`。这个命令用dist文件夹作为输出目录。
- 用你自己的配置来改变`assets/appconfig.production.json`文件。
- ng构建命令之后，dist文件夹包含在IIS下创建网站需要的所有文件。(例如:从`\*.dist`复制文件到`c:\inetpub\wwwroot\angularwebsite`)。

**注意**:一个重要的事就是:Angular使用客户端路由。如果你刷新一个页面(F5)那么IIS将会出来这个请求并将会找不到请求的路径并返回一个HTTP 404错误。我们应该配置IIS来重定向所有的请求到index.htm页(或到跟路径)。同时，IIS需要安装URL重写模块，请参考<https://www.iis.net/downloads/microsoft/url-rewrite>

ASP.NET Zero Angular UI 包含一个`web.config`文件。你可以复制它到网站的根目录下来克服以上问题描述。
