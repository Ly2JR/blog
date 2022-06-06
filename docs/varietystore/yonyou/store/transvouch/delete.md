# 删除

- 资源符

  `transvouch`
  
- 操作符

  `delete`

- 返回参数说明

|参数|类型|描述|
|:-|:-|:-|
|errcode|string|[状态码](./../error.md)|
|errmsg|string|错误描述|
|id|string|单据ID|
|tradeid|string|唯一号|

- 请求示例

:::: code-group
::: code-group-item dotnet

```cs
//引用NPK.dll文件
using NPK;

//服务码
const string CORPCODE="XXX";
//授权码
const string CORPLICENSE="XXX";
//服务器IP地址
const string ADDRESS="127.0.0.1";
//账套号
const string ACCOUNT="999";
//资源
const string RESOURCE="transvouch/delete";
//单据ID
var id=1000000001;
//唯一号
var tradeid=Guid.NewGuid().ToString("N");
//声明客户端
var client=new NPClient();
//本地调用
var result=client.InvokeLocal(CORPCODE
,CORPLICENSE,RESOURCE,tradeid,"",id,"",ADDRESS,ACCOUNT);
Console.WriteLine(result);
```

:::
::: code-group-item vb

```vb
'服务码
private const CORPCODE as String="XXX"
'授权码
private const CORPLICENSE as String="XXX"
'服务器IP地址
private const ADDRESS as String="127.0.0.1"
'账套号
private const ACCOUNT as String="999"
'资源
private const RESOURCE as String="transvouch/delete"
'单据ID
dim id as Long
id=1000000001
'唯一号
dim tradeid as String
tradeid=Format(now,"yyyyMMddHHmmss") '演示用
'客户端声明
dim client as Object
set client=CreateObject("NPK.NPClient");
'本地调用
dim sRet as String
sRet=client.InvokeLocal(CORPCODE,CORPLICENSE,RESOURCE,tradeid,"",id,"",ADDRESS,ACCOUNT);
Msgbox sRet
```

:::
::::

- 响应

```json
{
    "errcode": "0",
    "errmsg": "",
    "id": "1000000001",
    "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

<!-- ::: details 查看演示
[删除单据](/images/yonyou/gif/transvouch/delete.gif)
::: -->
