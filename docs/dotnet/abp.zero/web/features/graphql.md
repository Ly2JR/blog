# [GraphQL](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/GraphQL)

GraphQL是一个APIs的查询语言并且使用你现有数据完成运行时查询。GraphQL为你的API提供一个完整和可理解的数据描述，当客户端有能力确切的知道它们需要什么，仅此而已，让APIS随时间发展而变得更加容易，是一个强大的开发者工具。它适用于不同客户端像移动端、桌面端，平板的单一API界面。ASP.NET Zero包括一个GraphQL API的实现。在解决方法 **.GraohQL** 项目里公开一些内置查询像组织结构、角色和用户，还有一个测试项目在`test`文件夹 **.GraphQL.Tests** 里。你可以添加你自己的GraphQL单元测试到这个项目里。

关于GraphQL的更多信息参考[https://graphql.or](https://graphql.org/)

## GraphQL结构

**.GrahphQL** 项目由一个`MainSchema`组成。在`MainSchema`里有一个`QueryContainer`它托管所有查询。开箱即用，这里有`Roles`,`Organization Units`和`Users`的查询。

![graphql_structure_overview](/images/aspnetzero/graphql_structure_overview.jpg)

**.GraphQL** 项目依赖`AbpZeroTemplateCoreModule`。它被用在 **.Web.Host** 和 **\*.Web.Mvc** 项目。因此`ASP.NET Core Angular`和`ASP.NET Core MVC`模板都包含GraphQL项目。

GraphQL被添加到`Angular`项目 **\*.Web.Host.Startup** 的`Configure`方法里和`MVC`项目的 **\*.Web.MVC.Startup** 里。

这也有一个GraphQL的游乐场包含在项目里。GraphQL游乐场是一个IDE像Swagger,帮组你直接从你的网站里写出你的查询。默认的游乐场端点是<http://your-domain.com/ui/playground>

```cs
app.UseGraphQL<MainSchema>();
app.UseGraphQLPlayground(new GraphQLPlaygroundOptions()); 
```

这个GraphQL中间件被添加到`Angular`项目的 **.Web.Host.Startup**里的`ConfigureService`和`MVC`项目里的 **\*.Web.MVC.Startup**。

```cs
services.AddAndConfigureGraphQL();
```

`AddAndConfigureGraphQL()`是一个扩展方法添加在GraphQL中间件并进行必要的配置。在调试模式，所有的GraphQL异常发送到客户都但在释放模式下异常不会发送到客户端。

## 启用GraphQL

默认情况下,GraphQL是 **禁用** 的。为了启用GraphQL,打开 **\*.Web.Core** 项目里的`WebConsts.cs`并设置`GraphQL.Enabled=true`。

### Web.Core/Common/WebConsts.cs

```cs
public static class WebConsts
{
    //ignored...
    
    public static class GraphQL
    {
        //ignored...
        public static bool Enabled = true;
    }
}
```

## GraphQL端点

默认的GraphQL端点是:

- <https://localhost:44302/graphql>`MVC`
- <https://localhost:44301/graphql>`Angular`

### 变更默认GraphQL端点

你可以改变默认的GraphQL端点。为了做到这个，打开`Angular`项目的 **\*.Web.Host** 里的`Startup.cs`文件或者`MVC`项目的 **\*.Web.Mvc**。在`Configure`方法里，找到`app.UseGraphQL<MainSchema>()`方法所在行。并设置如下`paht`参数:

```cs
app.UseGraphQL<MainSchema>(path: "/mygraphql");
```

这将会改变你的端点到`yourdomain.com/mygraphsql`。

## GraphQL游乐场

GraphQL游乐场是一个扩展工具，帮助你很容易的写出你的GraphQL查询。它支持自动补全&错误高亮。它包含在AspNet Zero里但默认是禁用的。默认的GraphQL游乐场端点是:

- <https://localhost:44302/ui/playground>`MVC`
- <https://localhost:44301/ui/playground>`Angular`

也有一个桌面版的GraphQL游乐场。桌面应用跟Web版本一样但是包含这些额外的特征：

- 部分支持[garphql-config](https://github.com/prismagraphql/graphql-config)启用功能像多环境配置(不支持发送http头)。
- 双击打开`*.graphql`文件。

为了下载GraphQL桌面版本点击以下链接:

<https://github.com/prisma/graphql-playground/releases>

## GraphQL游乐场设置

为了能够运行查询需要身份验证，你需要在你的浏览器上打开游乐场，打开设置选项卡并修改`request.credentials`从`omit`到`include`。这为cookie身份验证是必要的。

另一方面，游乐场适用轮询来更新架构，并且每两秒刷新一次架构。你也可以安全地禁用这个选项，以免在你的浏览器网络选项卡上看到泛滥的XHR请求。

必要的变更是:

```json
{
   "request.credentials": "include",
   "schema.polling.enable": false   
}
```

这些配置之后，你需要保存它通过按下`SAVE SETTINGS`按钮。

![graphql_playground_settings](/images/aspnetzero/graphql_playground_settings.jpg)

## 在GraphQL游乐场运行查询

游乐场为你适用智能感知编写查询并在浏览器上查看结果的优势。有两种查询类型： **需要查询身份验证** 和 **不需要查询身份验证** 。为了查询不需要身份验证，你可以直接在游乐场里编写查询并查看结果。但需要身份验证的查询你不得不首先进行身份验证。为了身份验证，阅读与你项目相关的下一章节..

### MVC项目里验证游乐场请求

#### Cookie验证

MVC项目适用cookie身份验证。在运行任何查询之前需要身份验证，你需要登录到你的网站获取身份证验证cookie。启动你的 **\*.Web.Mvc** 项目，打开你的浏览器并导航到<https://localhost:44302/Account/Login>。成功登录之后，你将会有一个有效的cookies验证在你的浏览器的存储里。现在你可以转到<https://localhost:44302/ui/playground>并以你身份验证的方式运行查询。

### Angular项目里验证游乐场请求

Angular项目适用身份令牌(Bearer)和cookie验证。最简单的方式就是适用cookie验证。

#### 基于Cookie验证

启动你的 **\*.Web.Host** 项目并转到<https://localhost:44301/ui/login>。成功登录之后，你将会在重定向页面看见GraphQL游乐场沙盒。点击这个点击进入<https://localhost:44301/ui/playground>并以你身份验证的方式运行查询。

#### 基于Token验证

或者你可以在`Angular`项目里使用token身份验证。制造一个post请求到<https://localhost:44301/api/TokenAuth/Authenticate>来获取token。查看以下请求来获取token:

```json
POST /api/TokenAuth/Authenticate HTTP/1.1
Host: localhost:22742
Content-Type: application/json
cache-control: no-cache

{
    TenancyName: "",
    UserNameOrEmailAddress: "admin",
    Password: "123qwe"
}
```

你将会得到一个最小的响应像这样。你将会用到`accessToken`的值。

```json
{
    "result": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IktGWDUzQldLWlNZNUE1TjNQM0xYRFM2S1NUNUIyRDdPIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkFkbWluIiwiMjU2ZTc4NmVmZmFmNDJmZDk5N2MyNTk5MTNjNjEyNDciXSwic3ViIjoiMSIsImp0aSI6ImZkMmY3NWFhLWNiMWItNDlmMi1iYjg2LWZjNTNiMmZhYTI3NyIsImlhdCI6MTU1MjYzOTM5NiwidG9rZW5fdmFsaWRpdHlfa2V5IjoiNjFhOGVkNjYtMTMwYS00ODhhLWEwMTAtYThkMDI2M2RiNTUxIiwidXNlcl9pZGVudGlmaWVyIjoiMSIsIm5iZiI6MTU1MjYzOTM5NiwiZXhwIjoxNTUyNzI1Nzk2LCJpc3MiOiJBYnBaZXJvVGVtcGxhdGUiLCJhdWQiOiJBYnBaZXJvVGVtcGxhdGUifQ.nGcwto1Ih8z15FIZ_4lAXc_Q7Lf1ccJwKDAnGh8AzY8",
        "encryptedAccessToken": "wNYmO41/48SHNstaLVXxHCCre29BZQl1NhC6NM3R3rzpXtPQxVzH6jEzA/QhXFN5tu6Fk7pO53uppm1mVXMZgxbyRVz26dnepi/FyB6axBY+6gq1GL+uRQgoiFUCjRN2p8w6LevViwKlHyWZZJZO1DGVSjAi1m2U+og9pkHw9/QR4Nl/DPnoP9JYDMpZ1zxx09u6s0GZ9/Q5Sjk+L0UfcSCbl38X8he5w9UIn/Hvxh7ysM1CiPLsoOwtbiieSRVmrmt0JjnipAn4/K283F8GrGwzwgehWsqefmUnM0ckMwP9ZAdwQxWDhxv0IqNw4tDhwUYs/1SYdYozdNzgByhgNOBPzQDObNLlWc4vV5VMOiajyrvabgoLnMvpYCP0YrrR2Trkgw9U1crOz6qWkGpdxJs8t6le2nIPkkMDOuzJL+9gOpxxPd6pOXWTmPN73/ioJF5xcwxX3KnKQX7IbIlv7MRIHQf0EjGdpCk+TMkVcAAYSOGMv/0AMZSS0LZQYDrDCEy1wQMDhH8FT4VaJDnugINdL8TWD7ZX3lYu3HLvTpyDX59wqSqUuT/M0XaTW+J/7lGWOyz8zzPUXPsID4wDAXGe6vfLrzn0Tz9zyeRbXApmmP0aFJN7xfh96O3H4H7L9QWNefIZjq0UMPGmDkCW7FubMRuLNdJNLs6ItfUDCJcDVppn0hNRJB7mpocPeII4fd06Q7YGdbB3sruMYXx/CQxvZCiohK4q0hQxFXqG7Xb2Ig1xYJOA5qT9JikvS2vVcvDGh/+Shn6FQISBwDGwOBjlJ4EupqQ1XalfAqa4IPUjskHsN1spypNb4WMZvu5gooxES4mFdTiJoPPR7WgpauAdu2CHKr7CLla6fBeHfVbNXgVYPEM/mJFnd++RZj5SYul+6FhwZwNfTixawjknoGX9+vJfeYID5V1F4mjN86FAP4caVp5nAOuycdYjgnc6vdvEXjuZ+KU5nVFFO8U5i+Xd9Hc0qMNllF6aM3TilIHVWQKdESuHdBLfCT7MYyeWu1YNh7LsXuadb7eTctUUzxJ3roUh6tg/hyRh9TE7hGvmvucz+2ZJwfnYfLNeXXnTJjsDKIWwHC9v999e5B2LeA==",
        "expireInSeconds": 86400,
        "shouldResetPassword": false,
        "passwordResetCode": null,
        "userId": 1,
        "requiresTwoFactorVerification": false,
        "twoFactorAuthProviders": null,
        "twoFactorRememberClientToken": null,
        "returnUrl": null,
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IktGWDUzQldLWlNZNUE1TjNQM0xYRFM2S1NUNUIyRDdPIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkFkbWluIiwiMjU2ZTc4NmVmZmFmNDJmZDk5N2MyNTk5MTNjNjEyNDciXSwic3ViIjoiMSIsImp0aSI6ImU1NTY3MTkxLWY0YTktNDZjOC04Mjc3LTgyMjdlYjRiZjNmMCIsImlhdCI6MTU1MjYzOTM5NiwidG9rZW5fdmFsaWRpdHlfa2V5IjoiNjJmYWMzNDMtNDhiOS00MTgzLTkyMWItNGM4Njk5YWQ1YzdhIiwidXNlcl9pZGVudGlmaWVyIjoiMSIsIm5iZiI6MTU1MjYzOTM5NiwiZXhwIjoxNTg0MTc1Mzk2LCJpc3MiOiJBYnBaZXJvVGVtcGxhdGUiLCJhdWQiOiJBYnBaZXJvVGVtcGxhdGUifQ.u6cnxzB6Hnd4VpPYt-hOi23f6YlEkNZdw3cnyzi-0go"
    },
    "targetUrl": null,
    "success": true,
    "error": null,
    "unAuthorizedRequest": false,
    "__abp": true
}
```

将`accessToken`的值写到HTTP请求头上像这样。

![graphql_playground_token_authentication](/images/aspnetzero/graphql_playground_token_authentication.jpg)

#### GraphQL查询示例

这有一个查询示例，检索内置实体像`role`，`organizationUnit`和`user`。如果你的GraphQL API正常工作的话
你可以用这个查询来测试。

```json
query MyQuery {
  users(id: 1) {
    totalCount
    items {
      name
      surname

      roles {
        id
        name
        displayName
      }

      organizationUnits {
        id
        code
        displayName
      }
    }
  }

  roles {
    displayName
    id
    name
    tenantId
  }

  organizationUnits {
    id
    code
    displayName
    tenantId
  }
}
```

**注意** 如果你的身份验证是无效的或者你没有在你的游乐场设置里设置`"request.credentials":"include"`，你将会看到身份验证所需请求返回的以下错误。

```json
errors": [
    {
      "message": "GraphQL.ExecutionError: Error trying to resolve users. ---> Abp.Authorization.AbpAuthorizationException: Current user did not login to the application!\r\n   at Abp.Authorization.AuthorizationHelper.AuthorizeAsync(IEnumerable`1 authorizeAttributes) in D:\\Github\\aspnetboilerplate\\src\\Abp\\Authorization\\AuthorizationHelper.cs:line 42\r\n   at Abp.Authorization.AuthorizationHelper.CheckPermissions(MethodInfo methodInfo, Type type) in D:\\Github\\aspnetboilerplate\\src\\Abp\\Authorization\\AuthorizationHelper.cs:line 107\r\n   at Abp.Authorization.AuthorizationHelper.AuthorizeAsync(MethodInfo methodInfo, Type type) in D:\\Github\\aspnetboilerplate\\src\\Abp\\Authorization\\AuthorizationHelper.cs:line 56\r\n   at Nito.AsyncEx.Synchronous.TaskExtensions.WaitAndUnwrapException(Task task)\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n--- End of stack trace from previous location where exception was thrown ---\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot)\r\n--- End of stack trace from previous location where exception was thrown ---\r\n   at Nito.AsyncEx.Synchronous.TaskExtensions.WaitAndUnwrapException(Task task)\r\n   at Nito.AsyncEx.AsyncContext.Run(Func`1 action)\r\n   at Abp.Authorization.AuthorizationInterceptor.Intercept(IInvocation invocation) in D:\\Github\\aspnetboilerplate\\src\\Abp\\Authorization\\AuthorizationInterceptor.cs:line 20\r\n   at Castle.DynamicProxy.AbstractInvocation.Proceed()\r\n   at Castle.DynamicProxy.AbstractInvocation.Proceed()\r\n   at Castle.Proxies.UserQueryProxy.Resolve(ResolveFieldContext`1 context)\r\n   at MyCompanyName.AbpZeroTemplate.Core.Base.AbpZeroTemplateQueryBase`2.InternalResolve(ResolveFieldContext`1 context) in D:\\Github\\aspnet-zero-core\\aspnet-core\\src\\MyCompanyName.AbpZeroTemplate.GraphQL\\Core\\Base\\AbpZeroTemplateQueryBase.cs:line 47\r\n   at Abp.Threading.InternalAsyncHelper.AwaitTaskWithPostActionAndFinallyAndGetResult[T](Task`1 actualReturnValue, Func`1 postAction, Action`1 finalAction)\r\n   at GraphQL.Instrumentation.MiddlewareResolver.Resolve(ResolveFieldContext context)\r\n   at GraphQL.Execution.ExecutionStrategy.ExecuteNodeAsync(ExecutionContext context, ExecutionNode node)\r\n   --- End of inner exception stack trace ---",
        "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "users"
      ],
      "extensions": {
        "code": "ABP_AUTHORIZATION"
      }
    }
]
```

### GraphQL查询执行流程

当一个新查询初始化，GraphQL中间件解析这个查询然后将其路由到 **\*.GraphQL** 项目的`QueryContainer`类里注册的相应查询处理程序。开箱即用，在`QueryContainer`有3个注册的查询处理：`RoleQuery`,`UserQuery`和`OrganizationUnitQuery`。下一步就是查询上下文的查询`Resolve`方法。查询上下文有关于查询的所有信息像`UserContext`,`Arguments`,`Selections`和`Variables`。如果有一个`[AbpAuthorize]`特性在`Resolve`方法上，AspNet Boilerplate框架检测登录用户的相关权限并当相关权限没有授权时抛出`ABP_AUTHORIZATION`异常。如果没有`[AbpAuthorize]`特性，那么它可以被任意用户运行。在`Resolve`方法里，运行必要的查询并返回一个`DTO`对象。之后`DTO`对象被转换成相关的`IGraphType`。此对话由GraphQL中间件进行并且中间件知道那个`IGraphType`被传话，正如它在`QueryContainer`里注册的那样。

### 编写一个新GraphQL查询

让我们创建一个新的GraphQL查询。为了这个案例，我们将会使用`AbpAuditLogs`，它是为了在数据库存储所有日志。下面是一个`AuditLog`实体的最简单版本。

AuditLog Entity:

```cs
public class AuditLog : Entity<long>, IMayHaveTenant
{
    //...ignored other properties
    public virtual int? TenantId { get; set; }
    public virtual long? UserId { get; set; }
    public virtual string ServiceName { get; set; }
    public virtual DateTime ExecutionTime { get; set; }
}
```

1. 创建一个新的`DTO`类。名称叫`AuditLogDot.cs`，存储在 **\*.GraphQL** 项目的`DTO`文件下。为了映射`AuditLogDto`添加`[AutoMapFrom(typeof(AuditLog))]`特性来注册。这个将会用来从`AuditLog`到`AuditLogDto`的映射。

AuditLogDto.cs

```cs
[AutoMapFrom(typeof(AuditLog))]
public class AuditLogDto : EntityDto<long>
{    
 public int? TenantId { get; set; }
 public long? UserId { get; set; }
 public string ServiceName { get; set; }
 public DateTime ExecutionTime { get; set; }
}
```

2. 在 **\*.GraphQL** 项目的`Types`问你就创建一个新的类并命名为`AuditLogType.cs`。从`ObjectGraphType<AuditLogDto>`获得这个类。`AuditLogType`被用来从`AuditLogDto`类映射。

注意`nullable`类型。你必须明确的定义`nullable`字段。

AuditLogType.cs

```cs
public class AuditLogType : ObjectGraphType<AuditLogDto>
{
 public AuditLogType()
 {
    Field(x => x.Id);
    Field(x => x.UserId, nullable: true);
    Field(x => x.TenantId, nullable: true);
    Field(x => x.ExecutionTime);
    Field(x => x.ServiceName);
 }
}
```

3. 在 **\*.GrahpQL** 项目里`Queries`文件夹下创建一个新类并命名叫`AuditLogQuery.cs`。这是`AuditLogs`的查询解析。它应该从基础类`AbpZeroTemplateQueryBase<TField,TResult>`里获取。这个抽象基础类由两个通用类型。`TField`返回客户端的类型，在这个示例中，它是`AuditLogType`的清单。另外一个字段是`TResult`，这个返回`Resolve()`方法的类型。基本上`TResult`将会由`TField`通过GraphQL中间件映射。

为了获取到audit logs清单，`IRepository<AuditLog,long>`被注入到查询里，注意基础类`AbpZeroTemplateQueryBase`被注册到依赖注册容器`ITransient`生命周期。因此所有从`AbpZeroTemplateQueryBase`派生的GrapQL查询都是`ITransientDependency`。

基础的结构查询需要一个字段名。在我们的示例中,这个字段名是`auditLogs`。这个名称将hi用在查询文本。第二个参数是`Arguments`列表。它是一个`Dictionary<string,Type>`允许客户端来根据参数过滤查询。在这个示例中,`userId`和`serviceName`是参数并通过客户端发送来过滤记录。

AuditLogQuery.cs

```cs
public class AuditLogQuery : AbpZeroTemplateQueryBase<ListGraphType<AuditLogType>, List<AuditLogDto>>
{
 private readonly IRepository<AuditLog, long> _auditLogRepository;

 public static class Args
 {
    public const string UserId = "userId";
    public const string ServiceName = "serviceName";
 }

 public AuditLogQuery(IRepository<AuditLog, long> auditLogRepository)
 :base("auditLogs",new Dictionary<string, Type>
 {
    {Args.UserId, typeof(IdGraphType)},
    {Args.ServiceName, typeof(StringGraphType)}
 })
 {
    _auditLogRepository = auditLogRepository;
 }

 protected override Task<List<AuditLogDto>> Resolve(ResolveFieldContext<object> context)
 {
    throw new NotImplementedException();
 }
}
```

让我们编写`Resolve()`方法的内容。基本上我们需要返回根据给定的参数过滤`AuditLogDto`列表。为了简单演示，我们将会只返回10条记录。在下面代码中,`ContainsArgument`是一个扩展方法帮助我们来添加一个条件到查询上如果有一个参数。如果客户端发送`UserId`或者`ServiceName`参数，它们将会在查询里过滤。在最后一行，`ProjectToListAsync`是一个基本方法并映射查询列表到`AuditLogDto`列表。

```cs
protected override async Task<List<AuditLogDto>> Resolve(ResolveFieldContext<object> context)
{
 var query = _auditLogRepository.GetAll().Take(10).AsNoTracking();

 context
    .ContainsArgument<int>(Args.UserId, userId => query = query.Where(a => a.UserId == userId))
    .ContainsArgument<string>(Args.ServiceName, serviceName => query = query.Where(a => a.ServiceName == serviceName));

 return await ProjectToListAsync<AuditLogDto>(query);
}
```

4. 添加`AuditLogQuery`到`QueryContainer`。这是公开架构必须的。

```cs
public sealed class QueryContainer : ObjectGraphType, ITransientDependency
{
   public QueryContainer(
       //other queries... ,

       AuditLogQuery auditLogQuery)
   {
         //other queries...

         AddField(auditLogQuery.GetFieldType());
   }
}
```

5. 完成后，我们已经添加一个新的查询来获取审计日志。你现在可以在GraphQL游乐场运行这个查询并看到查询结构。以下查询示例从GraphQL Api来获取审计日志。

```json
query MyAuditLogQuery {
  auditLogs {
    id
    serviceName
    tenantId
    userId
    executionTime
  }
}
```

结果是最小话的JSON数据：

注意，为了在响应里看到某些数据，`AbpAuditLogs`表里应该有数据。

```json
 "data": {
    "auditLogs": [
      {
        "id": 1,
        "serviceName": "MyProject.Web.Controllers.AccountController",
        "tenantId": null,
        "userId": 1,
        "executionTime": "2019-03-14"
      },
      {
        "id": 2,
        "serviceName": "MyProject.Web.Controllers.AccountController",
        "tenantId": null,
        "userId": 1,
        "executionTime": "2019-03-14"
      }
 ]
}
```

6. 新查询已准备好但是可以匿名访问。如果你像添加权限来检测你的查询，它跟我们使用[Application Serivice](https://aspnetboilerplate.com/Pages/Documents/Authorization#checking-permissions)一样。在`Resolve()`方法里添加需要权限的[AbpAuthorize]特性。

```cs
[AbpAuthorize(AppPermissions.Pages_Administration_AuditLogs)]
```

最后查看`Resolve()`方法:

```cs
[AbpAuthorize(AppPermissions.Pages_Administration_AuditLogs)]
protected override async Task<List<AuditLogDto>> Resolve(ResolveFieldContext<object> context)
{
 var query = _auditLogRepository.GetAll().Take(10).AsNoTracking();

 context
    .ContainsArgument<int>(Args.UserId, userId => query = query.Where(a => a.UserId == userId))
`   .ContainsArgument<string>(Args.ServiceName, serviceName => query = query.Where(a => a.ServiceName == serviceName));

 return await ProjectToListAsync<AuditLogDto>(query);
}
```

运行最终使用`[AbpAuthorize]`特性的查询，你需要获取一个cookie身份验证。转到你的登录页:

- <https://localhost:44302/Account/Login>`MVC`
- <https://localhost:44301/ui/login>`Angular`

登录成功之后，你将会有你自己的cookie身份验证并且你可以运行这个查询。

### 为你的查询编写一个新的单元测试

当你编写一个新的GrapQL查询。建议为你的查询编写一个新的单元测试。ASP.NET Zero为你的GraphQL查询提供一个单元测试的项目。在你的ASP.NET Zero解决方案里由一个`test`文件夹。在`test`文件夹，打开 **\*.GraphQL.Tests** 项目。为你的新查询创建一个新的文件夹。

在之前的示例，我们为`AuditLog`实体编写一个查询。让我们为`AuditLogQuery`编写一个单元测试。

在为新实体编写单元测试之前。你需要添加示例数据到内存测试数据库中。为了`AuditLog`测试，让我们添加一些测试数据;

1. 打开 **\*.Test.Base** 项目并创建一个新类，名称叫`TestAuditLogsBuilder.cs`。在以下类中有两个测试审计日志实体被添加。

```cs
public class TestAuditLogsBuilder
{
  private readonly AbpZeroTemplateDbContext _context;

  public TestAuditLogsBuilder(AbpZeroTemplateDbContext context)
  {
    _context = context;
  }

  public void Create()
  {
    _context.AuditLogs.Add(new AuditLog
    {
      ServiceName = "MyProject.Web.Controllers.AccountController",
      ExecutionTime = DateTime.Parse("2019-12-30"),
      UserId = 1
    });

    _context.AuditLogs.Add(new AuditLog
    {
      ServiceName = "MyProject.MultiTenancy.TenantAppService",
      ExecutionTime = DateTime.Parse("2019-12-28"),
      UserId = 2
    });
  }
}
```

打开 **\*.Test.Base\\TestData\\TestDataBuilder.cs** 类并添加`TestAuditLogsBuilder`到`Create()`方法。

```cs
public class TestDataBuilder
{
    //ignored...

  public void Create()
  {
  //ignored...

  new TestAuditLogsBuilder(_context).Create();

  _context.SaveChanges();
  }
}
```

2. 在 **\*.GraphQL.Tests** 项目的根目录创建一个新文件夹，名称叫`AuditLogs`。
3. 在`AuditLogs`文件夹下创建一个新类，名称叫`AuditLogQuery_Tests.cs`。
4. `AuditLogQuery_Tests`类从`GraphQLTestBase<MainSchema>`派生。这将会帮助我们用一些方便的基础功能

注意`MainSchema`是一个为我们所有查询的架构并且它被注册在 **\*.Web.Mvc** 项目或者 **\*.Web.Host** 项目的`Startup`中。

5. 以下是`AuditLogQuery_Tests`类的全部内容。`AssertQuerySuccessAsync()`方法来自基类。它获取一个GraphQL查询并有一个异常值。它与实际值进行一个字符串的比较并等它们不相等时有异常值，它未通过测试。

```cs
public class AuditLogQuery_Tests : GraphQLTestBase<MainSchema>
{
  [Fact]
  public async Task Should_Get_AuditLogs()
  {
    LoginAsHostAdmin();

    const string query = @"
      query MyAuditLogQuery {
      auditLogs {
      id
      serviceName
      tenantId
      userId
      executionTime
      }
    }";

  const string expectedResult = @"
    {
      ""auditLogs"": 
      [
        {
        ""id"": 1,
        ""serviceName"": ""MyProject.Web.Controllers.AccountController"",
        ""tenantId"": null,
        ""userId"": 1,
        ""executionTime"": ""2019-12-30""
        },
        {
        ""id"": 2,
        ""serviceName"": ""MyProject.MultiTenancy.TenantAppService"",
        ""tenantId"": null,
        ""userId"": 2,
        ""executionTime"": ""2019-12-28""
        }
       ]
    }";

    await AssertQuerySuccessAsync(query, expectedResult);
  }
}
```

### 结论

GraphQL帮助我们给我们的客户端提供一个非常灵活的Web API。在这个文档，我们看见关于Asp.Net Zero Graphql 架构的实现。我们理解我们如何启用GrahQL和GraphQL游乐场。我们添加一个新的GraphQL查询示例来更好的理解它。我们也为查询示例添加一个新的单元测试。
