# [部署](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Deployment-Angular)

## 关于部署

AspNet Zero在开发&部署时依赖[angular-cli](https://cli.angular.io/)。AspNet Zero使用angular-cli命令来构建和发布Angular客户端应用。AspNet Zero也缩小和捆绑一些资产(JS和CSS文件)，在发布Angular客户端之前使用[gulp](https://gulpjs.com/)因为这些资产在运行时动态加载的。为了发布Angular客户端引用以下命令必须分别运行。

1. 在Angular项目的根目录下运行`yarn`命令。
2. 在Angular项目的根目录下运行`npm run publish`。

AspNet Zero也为ASP.NET Core&Angular版本提供合并解决方案。在这个解决方案中,Angular客户端应用包含在服务端Host项目里。这两个应用，服务端API项目和Angular客户端应用，阔友一次发布并且可以在同一个网站下一起托管。

为了发布合并的Angular解决方案，按以下步骤:

1. 在 **\*.Host** 项目的根目录下运行`dotnet publish -c Release`。你可以添加参数到dotnet public 命令上，参考它的[文档](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-publish)。
2. 当发布完成，转到发布目录并移动所有的文件从`wwwroot/dist`到`wwwroot`文件下。

不要忘记在发布你的应用之后，配置设置在Angular应用下的 **assets/appconfig.production.json**。如果你正在使用合并Anular项目，也在 **appsettings.Production.json** 文件里配置设置。

## AOT

Angular CLI默认使用[AOT](https://angular.io/guide/aot-compiler)( **Ahead of Time** )汇编。你可以添加`--no-aot`参数到`ng build`命令上来禁用它。但是我们推荐AOT功能因为它具有显著的性能提升。
