# 说明

## 通用接口

  支持yonyou U8 12.1及以上版本

## 定制开发

  支持yonyou U8 10.1及以上

## 如何使用

:::: code-group
::: code-group-item C#

```cs
//引用NPK.dll文件
using NPK;

//服务码
const string CROPCODE="XXX";
//授权码
const string CROPLINCESE="XXX";
//服务器IP地址
const string ADDRESS="127.0.0.1";
//账套号
const string ACCOUNT="999";
// 资源符/操作符
const string RESOURCE="XXX/XXX";
//单据ID
var id=1000000001;
//唯一号
var tradeid=Guid.NewGuid().ToString("N");
//声明客户端
var client=new NPClient();
//本地调用
var result=client.InvokeLocal(CROPCODE,CROPLINCESE,RESOURCE,tradeid,"",id,"",ADDRESS,ACCOUNT);
Console.WriteLine(result);
```

:::

::: code-group-item VB

```vb
'服务码
private const CROPCODE as String="XXX"
'授权码
private const CROPLINCESE as String="XXX"
'服务器IP地址
private const ADDRESS as String="127.0.0.1"
'账套号
private const ACCOUNT as String="999"
'资源符/操作符
private const RESOURCE as String="XXX/XXX"
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
sRet=client.InvokeLocal(CROPCODE,CROPLINCESE,RESOURCE,tradeid,"",id,"",ADDRESS,ACCOUNT);
Msgbox sRet
```

:::
::::

## 更新频率

  一周两个通用接口,视情况而定..

## 下载(待续)

  [NPService.msi](README.md)
