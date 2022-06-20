# [健康检测](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/HealthChecks)

Asp.Net Zero 实现了健康检测和健康检测UI。

你可以启用或禁用健康检测和健康检测UI。

## 设置

健康检测设置位于`appsettings.json`文件

```json
"HealthChecks": {
    "HealthChecksEnabled": true, //enable/disable all health checks.
    "HealthChecksUI": {
      "HealthChecksUIEnabled": true, //enable/disable health checks ui
      "HealthChecks": [
        {
          "Name": "MyCompanyName.AbpZeroTemplate.Web.MVC", //your app name
          "Uri": "https://localhost:44302/health" /* your_project_url/health
            you should change that url before you publish your project*/
        }
      ],
      "EvaluationTimeOnSeconds": 10,
      "MinimumSecondsBetweenFailureNotifications": 60,
      //"HealthCheckDatabaseConnectionString": "Data Source=[PUT-MY-PATH-HERE]\\healthchecksdb" //-> Optional, default on WebContentRoot,
      //for example, if you use azure you may need to set this connection string
    }
  }
```

>注意: 如果你启用健康检测UI，不要忘记在发布你的网站之前更改你的`health`URL。

## 添加新的健康检测

这有一些库，你可以很容易的添加到你的健康检测中。为了在AspNet Zero查看库的清单和使用的包，预览<https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks>。有一些示例的包名：

`AspNetCore.HealthChecks.System`

`AspNetCore.HealthChecks.Network`

`AspNetCore.HealthChecks.SqlServer`

`...`

## 添加你自定义的健康检测

为了添加你自己的健康检测，你应该创建一个继承`IHealthCheck`的类(已经实现了健康检测类位于`.Application`项目的 **HealthChecks** 文件夹下)。

```cs
public class MyCustomHealthCheck : IHealthCheck
{
    private readonly MyService _myService;
    public AbpZeroTemplateDbContextHealthCheck(MyService myService)
    {
        _myService = myService;
    }

    public Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = new CancellationToken())
    {
        if (_myService.CheckSomeThing())
        {
            return Task.FromResult(HealthCheckResult.Healthy("MyService is healthy."));
        }

        return Task.FromResult(HealthCheckResult.Unhealthy("MyService is unhealthy."));
    }
}
```

在这两种情况下，你应该添加你的健康检测到 **HealthCheckBuilder** 。HealthCheckBuilder位于`.Web.Core`项目。`(.Web.Core->healthCheck-><AbpZeroHealthCheck.cs->AddAbpZeroHealthCheck)`。

```cs
public static class AbpZeroHealthCheck
{
    public static IHealthChecksBuilder AddAbpZeroHealthCheck(this IServiceCollection services)
    {
        var builder = services.AddHealthChecks();
        builder.AddCheck<AbpZeroTemplateDbContextHealthCheck>("Database Connection");
        builder.AddCheck<AbpZeroTemplateDbContextUsersHealthCheck>("Database Connection with user check");
        builder.AddCheck<CacheHealthCheck>("Cache");

        // add your other health checks here
        // builder.AddCheck<MyCustomHealthCheck>("my health check");
        //...
        return builder;
    }
}
```

在你的新健康检测之后，你将能自动地在JSON和UI上看见它的状态。

### 终端

- MVC项目(只存在Asp.Net Core&JQuery 版本)

  健康检测UI终端:<https://localhost:44302/healthchecks-ui> (如果它是启用的)

  健康检测JSON结果终端:<https://localhost:44302/health> (如果它是启用的)

- Host项目(在Asp.Net Core版本可用但为Angular project设计)

  健康检测UI终端:<https://localhost:44301/healthchecks-ui> (如果它是启用的)

  健康检测JSON结果终端:<https://localhost:44301/health> (如果它是启用的)

- 公开网站

  健康检测UI终端:<https://localhost:45776/healthchecks-ui> (如果它是启用的)

  健康检测JSON结果终端:<https://localhost:45776/health> (如果它是启用的)

另请参阅:

<https://github.com/xabaril/AspNetCore.Diagnostics.HealthChecks>

<https://docs.docker.com/engine/reference/builder/#healthcheck>

>注意:如果启用了健康检测，它将会创建它自己的dbContext。这是为什么，当你尝试创建新的合并或更新数据库时你应该使用`-c [YourProjectName]DbContext`命令。
