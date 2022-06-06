# 说明

## 通用接口

  支持yonyou U8 10.1及以上版本

## 定制开发

  支持yonyou U8 10.1及以上版本

## JSON数据基本结构

::: tip
其他特殊结构请参考具体示例
:::

:::: code-group
::: code-group-item 档案

```json
{
  "资源符": {
    "字段1": "字段1值",
    "字段2": "字段2值",
    "字段3": "字段3值",
    "...": "..."
  }
}
```

:::
::: code-group-item 单据

```json
{
  "资源符": {
    "表头字段1": "表头字段1值",
    "表头字段2": "表头字段2值",
    "表头字段3": "表头字段3值",
    "...": "...",
    "entry": [{
      "表体字段1": "表体字段1值",
      "表体字段2": "表体字段2值",
      "表体字段3": "表体字段3值",
      "...": "..."
    }, {
      "表体字段1": "表体字段1值",
      "表体字段2": "表体字段2值",
      "表体字段3": "表体字段3值",
      "...": "..."
    }, {
      "...": "..."
    }]
  }
}
```

:::
::::

## 如何使用

:::: code-group
::: code-group-item C#

```cs
//引用NPK.dll文件
using NPK;

//服务码
const string CORPCODE
="XXX";
//授权码
const string CROPLICENSE="XXX";
//服务器IP地址
const string ADDRESS="127.0.0.1";
//账套号
const string ACCOUNT="999";
// 资源符/操作符
const string RESOURCE="XXX/XXX";
//审核，弃审，删除需要的单据ID
var id=1000000001;
//新增，修改需要提交的数据
var jsonData="XXX";
//唯一号
var tradeid=Guid.NewGuid().ToString("N");
//声明客户端
var client=new NPClient();
//本地调用
var result=client.InvokeLocal(CORPCODE
,CROPLICENSE,RESOURCE,tradeid,jsonData,id,"",ADDRESS,ACCOUNT);
Console.WriteLine(result);
```

:::

::: code-group-item VB

```vb
'服务码
private const CORPCODE as String="XXX"
'授权码
private const CORPLICENSE as String="XXX"
'服务器IP地址
private const ADDRESS as String="127.0.0.1"
'账套号
private const ACCOUNT as String="999"
'资源符/操作符
private const RESOURCE as String="XXX/XXX"
'审核，弃审，删除需要的单据ID
dim id as Long
id=1000000001
'新增，修改需要提交的数据
dim jsonData as String
jsonData="XXX"
'唯一号
dim tradeid as String
tradeid=Format(now,"yyyyMMddHHmmss") '演示用
'客户端声明
dim client as Object
set client=CreateObject("NPK.NPClient");
'本地调用
dim sRet as String
sRet=client.InvokeLocal(CORPCODE
,CROPLICENSE,RESOURCE,tradeid,jsonData,id,"",ADDRESS,ACCOUNT);
Msgbox sRet
```

:::
::::

## 更新频率

  一周两个通用接口,视情况而定..

## 下载(待续)
