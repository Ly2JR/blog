# [Swagger UI](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Swagger-UI)

[Swagger UI](https://swagger.io/swagger-ui/) **默认** 被 **集成** 到 Asp.Net Zero。你可以从`https://localhost:44301/swagger/ui/`URL浏览 **Swagger UI**。

注意：这个在服务端Host项目里生效。

以下页面是服务端API应用默认的页面，这里有你看到所有可用的API端点：

![swagger-ui-ng2-1](/images/aspnetzero/swagger-ui-ng2-1.png)

**.Web.Host** 项目包含一个基本登录页。如果你登录到这个页面，你能在Sagger Ui上执行这些需要身份验证的操作。

为了在Swagger UI启用注释，在`appsettings.json`设置`Swagger:ShowSummaries`为true。之后，Swagger UI将显示写在你的应用服务和控制器里的概述。