# [控制台迁移应用](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Migrator-Console-Application)

ASP.NET Zero包含一个 **Migrator.exe** 工具，很容易迁移你的数据库。你可以运行这个应用来创建/迁移主机和租户数据库。

![database-migrator](/images/aspnetzero/database-migrator.png)

这个应用从它 **自己的appsettings.json文件** 获取主机连接字符。它和.Web项目里的appsettings.json文件一样。确保配置文件里是你想要的数据库连接字符串。获取 **主机连接字符串** 之后,如果它已经存在，它首先创建主机数据库或者应用迁移。然后它得到租户数据库的连接字符串并运行这些数据库的迁移。如果租户没有专用的数据库或者数据库已经被其他租户迁移，它将会跳过租户(为了多租户共享数据库)。

你可以在开发或者生产环境用这个工具在部署时迁移数据库，替代EntityFramework自己的Migrate.exe(这需要一些配置和一次只能工作在一个数据库)。
