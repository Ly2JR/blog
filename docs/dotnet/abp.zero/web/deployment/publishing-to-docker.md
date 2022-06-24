# [发布到Docker](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Deployment-Angular-Docker)

ASP.NET Zero解决方案有一个**build folder** 其中包含一个PowerShell脚本来 **build&publis** 你的解决方案到 **输出** 文件夹。

为了为你的项目构建Docker镜像，运行`build-with-ng.ps1`。这个脚本将会生成3个镜像。一个是 **MVC** Web项目，一个是 **Public** web项目和另外一个 **Angular** 项目。创建镜像之后，你可以转到`build/outputs/Host`或`build/outputs/Public`文件夹并通过以下命令运行相关镜像：

`docker compose -f docker-compose.yml -f docker-compose.override.yml up`

为了运行Angular镜像，转到`build/outputs/ng`文件夹：

`docker compose -f docker-compose.yml up`

默认 **MVC** 和 **Public** 镜像将会尝试连接服务器数据库192.168.1.37,1433。改变这个IP地址在构建镜像之前改变你想要连接的数据库IP地址。

当你在Visual Studio上运行你的apps时，所有这些镜像将会使用相同的端口，因此你也可以为生产环境改变这些端口。
