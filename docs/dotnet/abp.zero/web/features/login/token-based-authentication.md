# [身份令牌验证](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Token-Based-Authentication)

ASP.NET Zero Angular UI基于身份令牌验证来使用主机。任何应用都能验证并把应用里的任意功能当作API一样使用。例如，你可以创建一个移动端应用来消费这些API。在这个部分。我们将会演示Postman里的API用法(一个谷歌浏览器扩展)。

## 验证

我们建议你为远程验证的用户禁用双因子验证。除此之外，双因子验证流程应该被客户端实现。你可以查看账户模块源代码来理解流程。我们认为你已经为 **默认** 租户的 **admin** 用户禁用了双因子验证，假设我们在这个示例中使用它。

所有的请求应该配置以下标头(`Abp.TenantId`是默认租户的Id。这对单租户应用不是必需的或如果你想它与主机用户一起工作):

![postman-ng2-auth-headers](/images/aspnetzero/postman-ng2-auth-headers.png)

之后我们可以发送用户名和密码作为 **POST**请求到<https://localhost:44301/api/TokenAuth/Authenticate>

![postman-ng2-auth](/images/aspnetzero/postman-ng2-auth.png)

在响应中，`accessToken`字段将会被用来验证API。

## 使用API

验证并获取访问令牌后，我们可以使用它来调用任何 **需要验证** 的行为。所有 **服务**被远程使用都是可行的。例如，我们可用使用 **用户服务** 来获取 **用户列表**:

![postman-ng2-userlist](/images/aspnetzero/postman-ng2-userlist.png)

我们发送一个Get请求到 **<https://localhost:44301/api/services/app/User/GetUsers>** 并且添加一个像 "**Bearer &lt;accessToken&gt;**" 的验证到标头上。结果是一个包含用户列表的JSON。
