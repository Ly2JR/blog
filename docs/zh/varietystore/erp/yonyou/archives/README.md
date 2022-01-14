# 基础档案

## 机构人员

### 部门档案

- 资源符

  **department**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string	|			|是			|部门编码				|
|name			|string	|			|是			|部门名称				|
|rank	    	|string	|			|是			|编码级次				|
|endflag		|string |			|是			|是否末级				|
|ddepbegindate	|string |			|是			|成立日期				|
|...			|...	|			|...		|...					|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "department":{
        "code":"99",
        "name":"测试",
        "rank":1,
        "endflag":1,
        "ddepbegindate":"2015-12-01"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/department.gif)
:::







### 人员类别

- 资源符

  **persontype**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string	|			|是			|档案编码				|
|name			|string	|			|是			|档案名称				|
|simplename		|string	|			|是			|档案简称				|
|simplespell	|string |			|是			|档案简拼				|
|levels			|string |			|是			|档案级别				|
|pcodeid		|string |			|是			|上级代码				|
|hideflag		|string |			|是			|是否显示				|
|memo			|string	|			|是			|备注				    |

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "persontype": {
        "code": "90",
        "name": "派遣",
        "simplename":"派遣",
        "simplespell":"PQ",
        "levels":"0",
        "pcodeid":"",
        "hideflag": "1",
        "memo":""
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/persontype.gif)
:::

### 人员档案

### 职务类别

- 资源符

  **dutytype**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string	|			|是			|档案编码				|
|name			|string	|			|是			|档案名称				|
|simplename	    |string	|			|是			|档案简称				|
|simplespell	|string |			|是			|档案名称				|
|pcodeid		|string |			|是			|上级代码				|
|hideflag		|string |			|是			|是否显示				|
|memo			|string |			|是			|备注					|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
	"dutytype": {
		"code": "1",
		"name": "运维职务",
		"simplename": "运维职务",
		"simplespell": "YWZW",
		"pcodeid": "",
		"hideflag": "1",
		"memo": ""
	}
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/dutytype.gif)
:::
### 职务级别

- 资源符

  **dutylevel**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string	|			|是			|档案编码				|
|name			|string	|			|是			|档案名称				|
|simplename	    |string	|			|是			|档案简称				|
|simplespell	|string |			|是			|档案名称				|
|pcodeid		|string |			|是			|上级代码				|
|hideflag		|string |			|是			|是否显示				|
|memo			|string |			|是			|备注					|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "dutylevel": {
        "code": "01",
        "name": "零时工",
        "simplename": "零时工",
        "simplespell": "LSG",
        "pcodeid": "",
        "hideflag": "1",
        "memo": ""
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/dutylevel.gif)
:::


### 职务档案


### 职等设置

- 资源符

  **jobgradeset**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|jobgradecode	|string	|			|是			|职等编码				|
|jobgradename	|string	|			|是			|职等名称				|
|maxpaypoint	|string	|			|是			|薪点上限				|
|minpaypoint	|string |			|是			|薪点下限				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "jobgradeset": {
        "jobgradecode": "10",
        "jobgradename": "十职等",
        "maxpaypoint": "",
        "minpaypoint": ""
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/jobgradeset.gif)
:::

## 职位序列

- 资源符

  **jobtype**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string	|			|是			|档案编码				|
|name			|string	|			|是			|档案名称				|
|simplename	    |string	|			|是			|档案简称				|
|simplespell	|string |			|是			|档案名称				|
|pcodeid		|string |			|是			|上级代码				|
|hideflag		|string |			|是			|是否显示				|
|memo			|string |			|是			|备注					|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "jobtype": {
        "code": "C",
        "name": "维护",
        "simplename": "维护",
        "simplespell": "WH",
        "pcodeid": "",
        "hideflag": "1",
        "memo": ""
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/jobtype.gif)
:::


## 职位档案

- 资源符

  **job**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|jobcode			|string	|			|是			|职位编码				|
|jobname			|string	|			|是			|职位名称				|
|depcode			|string	|			|是			|所属部门				|
|suporior			|string |			|是			|直接上级				|
|builddate			|string |			|是			|成立日期				|
|abortdate			|string |			|是			|撤销日期				|
|jobseries			|string |			|是			|职位序列				|
|jobrank			|string |			|是			|职位等级				|
|worksumm			|string |			|是			|工作概要				|
|jobrankclasscode	|string |			|是			|职级分类				|
|jobrankbegin		|string |			|是			|职级范围起				|
|jobrankend			|string |			|是			|职级范围止				|
|jobrankend			|string |			|是			|职等范围起				|
|jobgradeend		|string |			|是			|职等范围止				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "job": {
        "jobcode": "9901",
        "jobname": "测试",
        "depcode": "99",
        "suporior": "",
        "builddate": "2015-12-01",
        "abortdate": "",
        "jobseries": "C",
        "jobrank": "1",
        "worksumm": "",
        "jobrankclasscode": "01",
        "jobrankbegin": "M1",
        "jobrankend": "M1",
        "jobgradebegin": "4",
        "jobgradeend": "4"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/job.gif)
:::


## 客商信息

### 地区分类

- 资源符

  **districtclass**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string	|			|是			|地区编码				|
|name			|string	|			|是			|地区名称				|
|sort	    	|string	|			|是			|编码级次				|
|endflag		|string |			|是			|是否末级				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
  "districtclass": {
    "code": "000000002",
    "name": "南京",
    "sort": "3",
    "endflag": "1"
  }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/districtclass.gif)
:::


## 存货

## 财务

## 收付结算

## 业务

## 生产制造

## 对照表
## 其他

## 银行档案

- 资源符

  **aa_bank**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数               |类型   |参数路径   |是否必填   |描述                    |
|:-                 |:-     |:-        |:-         |:-                      |
|code               |string |          |是         |银行编码                |
|name               |string |          |是         |银行名称                |
|bindfixlen         |string |          |是         |个人账号是否定长        |
|iindaccnolen       |string |          |是         |个人账号长度            |
|iindautoinputlen   |string |          |是         |自动带出的个人账号长度  |
|cindunitcode       |string |          |是         |单位编码                |
|bcomdfixlen        |string |          |是         |企业账号是否定长        |
|icomaccnolen       |string |          |是         |企业账号长度            |

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
  "aa_bank": {
    "code": "00000",
    "name": "中国南京银行",
    "bindfixlen": "0",
    "iindaccnolen": "11",
    "iindautoinputlen": "0",
    "bcomdfixlen": "0",
  }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/aa_bank.gif)
:::

## 成套件

- 资源符

  **assembly**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

参数                |类型    |参数路径    |是否必填    |描述                    |
|:-                    |:-        |:-            |:-            |:-                        |
|assemblycode        |string |            |是            |套装件编码                |
|fittingcode        |string |            |是            |单件编码                |
|fittingquantity    |string    |            |是            |单件数量                |
|fittingnumber        |string    |            |是            |单件件数                |
|fittingcost        |string    |            |是            |单件成本                |
|fittingprice        |string    |            |是            |单件单价                |
|cAComunitCode        |string    |            |否            |辅计量单位编码            |

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
  "assembly": {
    "assemblycode": "01019002063",
    "fittingcode": "01019002065",
    "fittingquantity": "1",
    "fittingnumber": "1",
    "fittingcost": "1",
    "fittingprice": "1",
    "cAComunitCode":""
  }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/assembly.gif)
:::

## 结算方式

- 资源符

  **balancetype**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|结算方式编码				|
|name				|string |			|是			|结算方式名称				|
|flag				|string	|			|是			|是否票据管理				|
|code_rank			|string	|			|是			|编码级次				|
|end_rank_flag		|string	|			|是			|是否末级				|
|issbilltype		|string	|			|是			|对应票据类型				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "balancetype": {
        "code": "601",
        "name": "花呗",
        "flag": "0",
        "code_rank": "2",
        "end_rank_flag": "1",
        "issbilltype": "3"
    }
}
```

:::

::: code-group-item 响应

```json
{
    "errcode": "0",
    "errmsg": "",
    "id": "",
    "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/balancetype.gif)
:::

## 银行对账单

- 资源符

  **bankacc**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|date			|string |			|是			|银行对账单日期			|
|subjectcode	|string |			|是			|科目编码				|
|balancetype	|string	|			|是			|结算方式				|
|balanceno		|string	|			|是			|结算号					|
|debitorcredit	|string	|			|是			|方向					|
|money			|string	|			|是			|金额					|
|balance		|string	|			|是			|余额					|
|flag			|string	|			|是			|对帐标志				|
|beginflag		|string	|			|是			|期初标志				|
|bdelete		|string	|			|是			|是否核销				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "bankacc": {
        "date": "2016-01-01",
        "subjectcode": "100201",
        "balancetype": "1",
        "balanceno": "99",
        "debitorcredit": "贷",
        "money": "200",
        "balance":"",
        "flag":"",
        "beginflag":"",
        "bdelete":""
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/bankacc.gif)
:::

## 本单位开户银行

- 资源符

  **bank**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|银行编号				|
|name				|string |			|是			|开户银行名称				|
|account			|string	|			|是			|银行帐号				|
|flag				|string	|			|是			|暂封标志				|
|cbankcode			|string	|			|是			|所属银行				|
|caccname			|string	|			|是			|账户名称				|
|copenaccaddr		|string	|			|是			|开户银行地址				|
|cprovincename		|string	|			|是			|省/自治区码				|
|ccountyname		|string	|			|是			|市/县					|
|ccurrencyname		|string	|			|是			|币种					|
|dopenaccdate		|string	|			|是			|开户日期				|
|ccustomerno		|string	|			|是			|客户编号				|
|corgno				|string	|			|是			|机构号					|
|cunionbankno		|string	|			|是			|联行号					|
|isignflag			|string	|			|是			|签约标志				|
|bpwdmng			|string	|			|是			|进行密码管理				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "bank": {
        "code": "07",
        "name": "中国南京银行",
        "account": "622202210200",
        "flag": "0",
        "cbankcode": "01",
        "caccname": "环球电脑公司",
        "cprovincename": "江苏",
        "ccountyname": "南京",
        "ccurrencyname": "人民币",
        "dopenaccdate": "2015-12-01"
    }
}
```

:::

::: code-group-item 响应

```json
{
    "errcode": "0",
    "errmsg": "",
    "id": "",
    "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/bank.gif)
:::

## 批次档案

- 资源符

  **batchproperty**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|cinvcode			|string |			|是			|存货编码				|
|cbatch				|string |			|是			|批号					|
|cfree1				|string	|			|是			|自由项1					|
|cfree2				|string	|			|是			|自由项2					|
|cfree3				|string	|			|是			|自由项					|
|cfree4				|string	|			|是			|自由项					|
|cfree5				|string	|			|否			|自由项					|
|cfree6				|string	|			|否			|自由项					|
|cfree7				|string	|			|否			|自由项					|
|cfree8				|string	|			|否			|自由项					|
|cfree9				|string	|			|否			|自由项					|
|cfree10			|string	|			|否			|自由项					|
|cbatchproperty1	|string	|			|否			|批次属性1				|
|cbatchproperty2	|string	|			|否			|批次属性2				|
|cbatchproperty3	|string	|			|否			|批次属性3				|
|cbatchproperty4	|string	|			|否			|批次属性4				|
|cbatchproperty5	|string	|			|否			|批次属性5				|
|cbatchproperty6	|string	|			|否			|批次属性6				|
|cbatchproperty7	|string	|			|否			|批次属性7				|
|cbatchproperty8	|string	|			|否			|批次属性8				|
|cbatchproperty9	|string	|			|否			|批次属性9				|
|cbatchproperty10	|string	|			|否			|批次属性10				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
  "batchproperty": {
    "cinvcode": "01019002063",
    "cbatch": "201512010001"
  }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/aa_bank.gif)
:::

## 固定资产卡片

- 资源符

  **capitalasserts**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数					|类型	|参数路径	|是否必填	|描述					|
|:-						|:-		|:-			|:-			|:-						|
|assetno				|string |			|是			|资产编号				|
|assetname				|string |			|是			|固定资产名称				|
|typeno					|string	|			|是			|类别编码				|
|originalvalue			|string	|			|是			|原值					|
|startusedate			|string	|			|是			|开始使用日期				|
|currency				|string	|			|是			|币种名称				|
|foreigncurrencynumber	|string	|			|是			|外币原值				|
|exchangerate			|string	|			|是			|汇率					|
|worktotal				|string |			|是			|工作总量				|
|workunit				|string |			|是			|工作量单位				|
|accwork				|string	|			|是			|累计工作量				|
|accdepr				|string	|			|是			|累计折旧				|
|usedmonths				|string	|			|是			|已使用月份				|
|accountaddmannerno		|string	|			|是			|增加方式编号				|
|status					|string	|			|是			|使用状况编号				|
|depreciationmanner		|string	|			|是			|折旧方法编号				|
|life					|string	|			|是			|可使用月份				|
|netleftvalue			|string |			|是			|净残值					|
|netleftvaluerate		|string |			|是			|净残值率				|
|style					|string	|			|是			|规格型号				|
|buildingarea			|string	|			|是			|建筑面积				|
|buildingquantity		|string	|			|是			|间(座)数				|
|machinequantity		|string	|			|是			|电机数量				|
|machinewatt			|string	|			|是			|电机功率				|
|reservesite			|string	|			|是			|存放地点				|
|decvalue				|string |			|是			|减值准备金额				|
|sgroupnum				|string |			|是			|资产组编码				|
|addtax					|string	|			|是			|增值税					|
|skeeper				|string	|			|是			|保管人					|
|cVenCode				|string	|			|是			|供应商编码				|
|cVenName				|string	|			|是			|供应商名称				|
|dPurDate				|string	|			|是			|采购日期				|
|sSeriesNum				|string	|			|是			|序列号					|
|sCommodityCode			|string	|			|是			|商品码					|
|assetno				|string	|entry		|是			|资产编号				|
|deptno					|string	|entry		|是			|部门编号				|
|deptscale				|string	|entry		|是			|使用比例				|
|depreciationitemno		|string	|entry		|是			|对应折旧科目编码			|
|depreciationitemname	|string	|entry		|是			|对应折旧科目名称			|
|relativeprojectno		|string	|entry		|是			|对应项目编码				|
|relativeprojectname	|string	|entry		|是			|对应项目名称				|
|relativecItemclsId		|string	|entry		|是			|项目大类				|
|sourceNum				|string	|entry		|是			|资金构成编码				|
|sourceScale			|string	|entry		|是			|资金构成使用比例			|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "capitalasserts": {
        "assetno": "01200009",
        "assetname": "电脑",
        "typeno": "03",
        "originalvalue": "3000000",
        "startusedate": "2014-01-01",
        "currency": "人民币",
        "exchangerate": "1",
        "usedmonths": "12",
        "accountaddmannerno": "102",
        "status": "1001",
        "depreciationmanner": "1",
        "life": "20",
        "reservesite": "一号厂区",
        "skeeper": "demo",
        "entry": {
            "assetno": "01200009",
            "deptno": "01",
            "deptscale": "1"
        }
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/capitalasserts.gif)
:::

## 资产类别

- 资源符

  **capitalassettypes**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|assettypeno		|string |			|是			|资产类别编码				|
|assettypename		|string |			|是			|资产类别名称				|
|deprmethodnum		|string	|			|是			|折旧方法编码				|
|deprtype			|string	|			|是			|计提属性编码				|
|dblbvrate			|string	|			|是			|净残值率				|
|unit				|string	|			|是			|计量单位				|
|life				|string	|			|是			|使用年限				|
|modelid			|string	|			|是			|卡片样式				|
|assetsubjectnum	|string	|			|是			|固定资产入账科目			|
|deprtotalsubjectnum|string	|			|是			|累计折旧入账科目			|
|decpresubjectnum	|string	|			|是			|减值准备入账科目			|
|bnotcanretdecvalue	|string	|			|是			|不允许转回减值准备		|
|cleanupsubjectnum	|string	|			|是			|资产清理入账科目			|
|bnewassetdepr		|string	|			|是			|新增当月计提折旧			|
|deprsubjectbytype	|string	|			|是			|按资产类别默认折旧科目	|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "capitalassettypes": {
        "assettypeno": "014",
        "assettypename": "电脑",
        "deprmethodnum": "3",
        "deprtype": "0",
        "life": "99",
        "modelid": "0",
        "bnotcanretdecvalue": "1",
        "bnewassetdepr": "0"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/assets/capitalassettypes.gif)
:::

## 固定资产变动单

- 资源符

  **capitalvouchers**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|vouchertype		|string |			|是			|变动单类型				|
|assetno			|string |			|是			|资产编号				|
|voucherdata		|string	|			|是			|变动内容				|
|currency			|string	|			|是			|币种名称				|
|exchangerate		|string	|			|是			|汇率					|
|memreason			|string	|			|是			|变动原因				|
|siteafter			|string	|			|是			|变动后存放地点			|
|worktotal			|string	|			|是			|工作总量				|
|accwork			|string	|			|是			|累计工作量				|
|workunit			|string	|			|是			|工作量单位				|
|transdate			|string	|			|是			|变动日期				|
|transperiod		|string	|			|是			|变动期间				|
|operator			|string	|			|是			|经手人					|
|assetno			|string	|deptscale	|是			|资产编号				|
|deptno				|string	|deptscale	|是			|部门编号				|
|deptscale			|string	|deptscale	|是			|使用比例				|
|depreciationitemno	|string	|deptscale	|是			|对应折旧科目编码			|
|depreciationitemname|string|deptscale	|是			|对应折旧科目名称			|
|relativeprojectno	|string	|deptscale	|是			|对应项目编码				|
|relativeprojectname|string	|deptscale	|是			|对应项目名称				|
|relativecItemclsId	|string	|deptscale	|是			|项目大类				|
|sourceno			|string	|sourcescale|是			|对应折旧科目编码			|
|sourcescale		|string	|sourcescale|是			|对应折旧科目编码			|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "capitalvouchers": {
        "vouchertype": "1",
        "assetno": "90300001",
        "voucherdata": "50000",
        "currency": "人民币",
        "exchangerate": "1",
        "memreason": "05年末计提",
        "worktotal": "0",
        "accwork": "0",
        "transdate": "2015-01-13",
        "transperiod": "01",
        "operator": "demo",
        "entry": {
            "sourcescale": {
                "sourceno": "",
                "sourcescale": ""
            }
        }
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/capitalvouchers.gif)
:::

## 期初余额

- 资源符

  **codebalance**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数					|类型	|参数路径	|是否必填	|描述					|
|:-						|:-		|:-			|:-			|:-						|
|account_code			|string |			|是			|科目编码				|
|auxiliary_accounting	|string |			|是			|辅助核算类型				|
|date					|string	|			|是			|凭证日期				|
|voucher_type			|string	|			|是			|凭证类别				|
|voucher_id				|string	|			|是			|凭证号					|
|abstract				|string	|			|是			|摘要					|
|currency				|string	|			|是			|币种名称				|
|direction				|string	|			|是			|金额期初方向				|
|debit_quantity			|string	|			|是			|数量借方				|
|primary_debit_currency	|string	|			|是			|累计借方原币金额			|
|natural_debit_currency	|string	|			|是			|累计借方本币金额			|
|credit_quantity		|string	|			|是			|数量贷方				|
|primary_credit_currency|string	|			|是			|累计贷方原币金额			|
|natural_credit_currency|string	|			|是			|累计贷方本币金额			|
|end_quantity			|string	|			|是			|数量期末				|
|primary_end_currency	|string	|			|是			|原币期末				|
|natural_end_currency	|string	|			|是			|金额期末				|
|...					|...	|			|...		|...					|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "codebalance": {
        "account_code": "1001",
        "auxiliary_accounting": "0",
        "date": "2015-12-1",
        "abstract": "科目期初及累借累贷",
        "currency": "人民币",
        "direction": "借",
        "debit_quantity": "0",
        "primary_debit_currency": "0",
        "natural_debit_currency": "0",
        "credit_quantity": "0",
        "primary_credit_currency": "0",
        "natural_credit_currency": "0",
        "end_quantity": "0",
        "primary_end_currency": "0",
        "natural_end_currency": "999"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/codebalance.gif)
:::


## 会计科目

- 资源符

  **code**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|type				|string |			|是			|科目类型				|
|type_ename			|string |			|是			|科目类型英文名称			|
|analysis_type		|string	|			|是			|财务分析类型				|
|analysis_type_ename|string	|			|是			|财务分析类型英文名称		|
|code				|string	|			|是			|科目编码				|
|name				|string	|			|是			|科目名称				|
|ename				|string	|			|是			|科目英文名称				|
|grade				|string	|			|是			|科目级次				|
|prop				|string	|			|是			|科目性质				|
|acclist_style		|string	|			|是			|帐页格式				|
|acclist_style_ename|string	|			|是			|帐页格式英文名称			|
|ac_assist			|string	|			|是			|科目助记码				|
|fc_name			|string	|			|是			|外币名称				|
|measure_unit		|string	|			|是			|计量单位				|
|person_acc			|string	|			|是			|个人往来核算				|
|cust_acc			|string	|			|是			|客户往来核算				|
|supplier_acc		|string	|			|是			|供应商往来核算			|
|dept_acc			|string	|			|是			|部门核算				|
|item_acc			|string	|			|是			|项目核算				|
|item_category		|string	|			|是			|项目大类				|
|date_acc			|string	|			|是			|日记帐					|
|bank_acc			|string	|			|是			|银行帐					|
|sum_flag			|string	|			|是			|是否汇总打印				|
|end_item_flag		|string	|			|是			|是否末级科目				|
|exchange_flag		|string	|			|是			|是否参与汇兑损益计算		|
|cash_acc_flag		|string	|			|是			|是否现金科目				|
|bank_acc_flag		|string	|			|是			|是否银行科目				|
|bacc_enable_flag	|string	|			|是			|银行账科目是否启用		|
|bacc_balance_way	|string	|			|是			|银行账科目对账方向		|
|bacc_begin			|string	|			|是			|银行账科目启用日期		|
|bacc_end			|string	|			|是			|银行账科目对账截止日期	|
|period_pl			|string	|			|是			|期间损益				|
|acc_seal_flag		|string	|			|是			|科目是否封存				|
|ctrled_acc			|string	|			|是			|受控科目				|
|other_use_flag		|string	|			|是			|其它系统是否使用			|
|itemtype			|string	|			|是			|在建工程项目科目类型		|
|proj_balance		|string	|			|是			|是否工程结算科目			|
|cashitem			|string	|			|是			|是否工程结算科目			|
|self_define1		|string	|			|否			|自定义字段1				|
|self_define2		|string	|			|否			|自定义字段2				|
|self_define3		|string	|			|否			|自定义字段3				|
|self_define4		|string	|			|否			|自定义字段4				|
|self_define5		|string	|			|否			|自定义字段5				|
|self_define6		|string	|			|否			|自定义字段6				|
|self_define7		|string	|			|否			|自定义字段7				|
|self_define8		|string	|			|否			|自定义字段8				|
|self_define9		|string	|			|否			|自定义字段9				|
|self_define10		|string	|			|否			|自定义字段10			|
|self_define11		|string	|			|否			|自定义字段11			|
|self_define12		|string	|			|否			|自定义字段12			|
|self_define13		|string	|			|否			|自定义字段13			|
|self_define14		|string	|			|否			|自定义字段14			|
|self_define15		|string	|			|否			|自定义字段15			|
|self_define16		|string	|			|否			|自定义字段16			|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "code": {
        "type": "资产",
        "type_ename": "ZC",
        "analysis_type": "",
        "analysis_type_ename": "",
        "code": "1000",
        "name": "现金",
        "ename": "现金eng",
        "grade": "1",
        "prop": "1",
        "acclist_style": "金额式",
        "acclist_style_ename": "JES",
        "ac_assist": "",
        "fc_name": "",
        "measure_unit": "",
        "person_acc": "0",
        "cust_acc": "0",
        "supplier_acc": "0",
        "dept_acc": "0",
        "item_acc": "0",
        "item_category": "",
        "date_acc": "1",
        "bank_acc": "0",
        "sum_flag": "",
        "end_item_flag": "1",
        "exchange_flag": "0",
        "cash_acc_flag": "1",
        "bank_acc_flag": "0",
        "bacc_enable_flag": "0",
        "bacc_balance_way": "1",
        "bacc_begin": "",
        "bacc_end": "",
        "period_pl": "",
        "acc_seal_flag": "0",
        "ctrled_acc": "",
        "other_use_flag": "0",
        "itemtype": "0",
        "proj_balance": "0",
        "cashitem": "1"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/code.gif)
:::

## 外币设置

- 资源符

  **currency**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string |			|是			|币种编码				|
|name			|string |			|是			|币种名称				|
|caltype		|number	|			|是			|折算方式(1:固定;2:浮动)	|
|precision		|string	|			|是			|小数位数				|
|error			|number	|			|是			|最大误差			    |

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
 {
   "currency": {
     "code": "EURO",
     "name": "欧元",
     "caltype": "1",
     "precision": "5",
     "error": "0.00005"
   }
 }
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/currency.gif)
:::

## 客户存货对照表

- 资源符

  **cusandinv**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|ccuscode			|string |			|是			|客户编码				|
|cinvcode			|string |			|是			|存货编码				|
|ccusinvcode		|string	|			|否			|客户存货编码				|
|ccusinvname		|string	|			|否			|客户存货名称				|
|iteststyle			|string	|			|否			|检验方式				|
|idtmethod			|string	|			|否			|抽检方案				|
|fdtrate			|string	|			|否			|抽检率					|
|fdtnum				|string	|			|否			|抽检量					|
|cdtunit			|string	|			|否			|检验计量单位				|
|idtstyle			|string	|			|否			|抽检方式				|
|idtlevel			|string	|			|否			|检验水平				|
|cdtaql				|string	|			|否			|AQL					|
|boutinvdt			|string	|			|否			|是否发货检验				|
|crulecode			|string	|			|否			|自定义抽检规则			|
|fcusinvwasterate	|string	|			|否			|发货合理损耗率%			|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
	"cusandinv": {
		"ccuscode": "0111",
		"cinvcode": "01019002063"
	}
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/cusandinv.gif)
:::

## 客户分类

- 资源符

  **customerclass**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述				|
|:-				|:-		|:-		 	|:-	  		|:-					|
|code			|string	|		 	|是			|客户分类编码			|
|name			|string	|		 	|是			|客户分类名称			|
|rank			|number	|		 	|是			|客户分类编码级次		|
|end_rank_flag	|boolean|		 	|是			|末级标志			|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "customerclass":{
        "code":"98",
        "name":"测试",
        "rank":"1",
        "end_rank_flag":"1"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/customerclass.gif)
:::

## 客户联系人

- 资源符

  **customerlinker**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|联系人编码				|
|name				|string |			|是			|联系人名称				|
|title				|string |			|是			|称呼					|
|sex				|string |			|是			|性别					|
|be_main_linker		|string |			|是			|是否主要联系人			|
|founder			|string |			|是			|建档人					|
|fondertime			|string |			|是			|建档时间				|
|bDefaultCon		|string |			|是			|默认联系人				|
|cConDepart			|string |			|否			|部门					|
|...				|string |			|否			|...					|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "customerlinker": {
        "code": "00000000",
        "name": "demo",
        "title": "0001",
        "sex": "0",
        "be_main_linker": "1",
        "founder": "demo",
        "fondertime": "2015-12-01",
        "bDefaultCon": "1",
        "cConDepart": "0301"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/customerlinker.gif)
:::

## 客户档案

- 资源符

  **customer**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string |			|是			|客户编码				|
|name			|string |			|是			|客户名称				|
|sort_code		|string	|			|是			|分类编码				|
|contact		|string	|			|是			|联系人					|
|ccusmngtypecode|string	|			|是			|客户管理类型编码			|
|ccusexch		|string	|			|是			|币种					|
|seed_date		|string	|			|是			|发展日期				|
|...		    |...	|			|是			|...					|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "customer": {
        "code": "99",
        "name": "测试客户",
        "abbrname": "测试客户",
        "sort_code": "98",
        "contact": "demo",
        "ccusmngtypecode": "999",
        "ccusexch_name": "人民币",
        "seed_date":"2021-03-09"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/customer.gif)
:::

## 常用摘要

- 资源符

  **digest**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|常用摘要编码				|
|text				|string |			|是			|常用摘要正文				|
|subjectcode		|string	|			|是			|相关科目编码				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "digest": {
        "code": "00",
        "text": "产品销售收入",
        "subjectcode": "2181"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/digest.gif)
:::

## 凭证类别

- 资源符

  **dsign**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|type				|string |			|是			|凭证类别字				|
|order_code			|string |			|是			|凭证类别排序号			|
|type_name			|string	|			|是			|凭证类别名称				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "dsign": {
        "type": "贷",
        "order_code": "1",
        "type_name": "贷款凭证"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/dsign.gif)
:::



- 资源符

  **duty**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|dutycode		|string	|			|是			|职务编码				|
|dutyname		|string	|			|是			|职务名称				|
|dutysumm	    |string	|			|是			|职务概要				|
|series			|string |			|是			|职务类别				|
|dutylev		|string |			|是			|职务级别				|
|begindate		|string |			|是			|设立日期				|
|enddate		|string |			|是			|撤销日期				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "duty": {
        "dutycode": "1",
        "dutyname": "测试",
        "dutysumm": "",
        "series": "8",
        "dutylev": "01",
        "begindate": "2015-12-01",
        "enddate": ""
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/duty.gif)
:::

## 费用项目

- 资源符

  **expenseitem**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|费用项目编号				|
|name				|string |			|是			|费用项目名称				|
|cexpccode			|string	|			|是			|费用项目分类编码			|
|iexptaxrate		|string	|			|是			|税率(%)					|
|iexpprofititem		|string	|			|是			|盈亏项目				|
|ccode				|string	|			|是			|科目					|
|memo				|string	|			|否			|备注					|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "expenseitem": {
        "code": "60",
        "name": "员工培训",
        "cexpccode": "6"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/expenseitem.gif)
:::

## 费用项目分类

- 资源符

  **expitemclass**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|费用项目分类编码			|
|name				|string |			|是			|费用项目分类名称			|
|rank				|string	|			|是			|编码级次				|
|end_rank_flag		|string	|			|是			|末级标志				|
|memo				|string	|			|否			|备注					|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "expitemclass": {
        "code": "6",
        "name": "培训费",
        "rank": "1",
        "end_rank_flag": "1",
        "memo":""
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/expitemclass.gif)
:::

## 存货分类

- 资源符

  **inventoryclass**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string	|			|是			|存货分类编码				|
|name			|string	|			|是			|存货分类名称				|
|rank			|number	|			|是			|存货分类编码级次			|
|end_rank_flag	|boolean|			|是			|末级标志				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "inventoryclass":{
        "code":"99",
        "name":"存货分类",
        "rank":1,
        "end_rank_flag":1,
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/inventoryclass.gif)
:::

## 存货自由项对照表

- 资源符

  **invandfree**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|cinvcode			|string |			|是			|存货编码				|
|cudid				|string |			|是			|自由项ID				|
|cudvalue			|string	|			|是			|自由项值				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
	"invandfree": {
		"cinvcode": "01019002063",
		"cudid": "34",
		"cudvalue": "黑色"
	}
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/invandfree.gif)
:::

## 存货货位对照表

- 资源符

  **invandpos**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|cinvcode			|string |			|是			|存货编码				|
|cposcode			|string |			|是			|货位编码				|
|iprior				|string	|			|是			|优先顺序			|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "invandpos": {
        "cinvcode": "01019002063",
        "cposcode": "40-G-0-0-0",
        "iprior": "1"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/invandpos.gif)
:::

## 存货档案

- 资源符

  **inventory**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string	|			|是			|存货编码				|
|name			|string	|			|是			|存货名称				|
|sort_code	    |string	|			|是			|存货分类编码级次			|
|unitgroup_code	|string |			|是			|计量单位组编码			|
|main_measure	|string |			|是			|主计量单位编码			|
|cPlanMethod	|string	|			|是			|计划方法				|
|cSRPolicy		|string	|			|是			|供需政策				|
|iSupplyType	|string	|			|是			|供应类型				|
|start_date		|string	|			|是			|启用日期				|
|invcode		|string	|entry		|是			|存货编码				|
|...			|...	|			|...		|...					|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "inventory": {
        "code": "9901",
        "name": "存货名称",
        "sort_code": "99",
        "main_measure": "0101",
        "unitgroup_code": "01",
        "cPlanMethod": "R",
        "cSRPolicy": "PE",
        "iSupplyType":"2",
        "start_date":"2015-12-01",
        "entry": [{
            "invcode": "9901"
        }]
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/inventory.gif)
:::


## 付款条件

- 资源符

  **paycondition**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|付款条件编码				|
|name				|string |			|是			|付款条件名称				|
|creditdays			|string	|			|是			|信用天数				|
|discountdays1		|string	|			|是			|优惠天数1				|
|discountrate1		|string	|			|是			|优惠率1					|
|discountdays2		|string	|			|是			|优惠天数2				|
|discountrate2		|string	|			|是			|优惠率2					|
|discountdays3		|string	|			|是			|优惠天数3				|
|discountrate3		|string	|			|是			|优惠率3					|
|discountdays4		|string	|			|是			|优惠天数4				|
|discountrate4		|string	|			|是			|优惠天数4				|
|maxdiscountdays	|string	|			|是			|最多优惠天数				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "paycondition": {
        "code": "04",
        "name": "",
        "creditdays": "30",
        "discountdays1": "5",
        "discountrate1": "2",
        "discountdays2": "6",
        "discountrate2": "1",
        "discountdays3": "0",
        "discountrate3": "0",
        "discountdays4": "0",
        "discountrate4": "0",
        "maxdiscountdays": "1"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/paycondition.gif)
:::



- 资源符

  **person**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string	|			|是			|人员编码				|
|name			|string	|			|是			|人员名称				|
|cpsnmobilephone|string	|			|否			|手机号					|
|rEmployState	|string |			|是			|雇佣状态				|
|cdept_num		|string |			|是			|行政部门				|
|rIDType		|string |			|是			|证件类型				|
|rpersontype	|string |			|是			|人员类别				|
|rpersontypename|string	|			|是			|人员类别名称 		    |
|rsex			|string	|			|是			|性别				    |
|...			|...	|			|...		|...				    |

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "person":{
        "code":"9901",
        "name":"测试人员",
        "cpsnmobilephone":"18698085765",
        "rEmployState":"10",
        "cdept_num":"99",
        "rIDType":"1",
        "rpersontype":"10",
        "rpersontypename":"正式员工",
        "rsex":"1"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/person.gif)
:::

## 货位档案

- 资源符

  **position**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|货位编码				|
|name				|string |			|是			|货位名称				|
|grade				|string	|			|是			|编码级次				|
|end_flag			|string	|			|是			|是否末级				|
|warehouse_code		|string	|			|是			|仓库编码				|
|maxcubage			|string	|			|否			|最大体积				|
|maxweight			|string	|			|否			|最大重量				|
|remark				|string	|			|否			|备注					|
|barcode			|string	|			|否			|对应条形码中的编码		|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "position": {
        "code": "40-G-0-0-0",
        "name": "40号库D发货区货位",
        "grade": "2",
        "end_flag": "1",
        "warehouse_code": "50",
        "maxcubage":"",
        "maxweight":"",
        "remark":"",
        "barcode":""
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/position.gif)
:::

## 采购类型

- 资源符

  **purchasetype**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|销售类型编码				|
|name				|string |			|是			|销售类型名称				|
|rstype_code		|string	|			|是			|出库类别				|
|bdefau				|string	|			|是			|是否默认值				|
|bpfdefault			|string	|			|是			|是否委外默认值			|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "purchasetype": {
        "code": "00",
        "name": "线下采购",
        "rstype_code": "11",
        "bdefau": "0",
        "bpfdefault":"0"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/purchasetype.gif)
:::

## 原因码档案

- 资源符

  **reason**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|编码					|
|name				|string |			|是			|名称					|
|Reasontype			|string	|			|是			|所属类型				|
|ReasonMemo			|string	|			|是			|说明					|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "reason": {
        "code": "00",
        "name": "无原因",
        "Reasontype": "3"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/reason.gif)
:::

## 收发类别

- 资源符

  **receivesendtype**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|收发类别编码				|
|name				|string |			|是			|收发类别名称				|
|sort				|string	|			|是			|编码级次				|
|rsflag				|string	|			|是			|收发标志				|
|endend_flagflag	|string	|			|是			|是否末级				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "receivesendtype": {
        "code": "2e",
        "name": "直接出库",
        "sort": "1",
        "rsflag": "0",
        "end_flag": "1"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/receivesendtype.gif)
:::

## 需求分类

- 资源符

  **requirementclass**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|crclasscode		|string |			|是			|需求分类代号				|
|crclassname		|string |			|是			|需求分类说明				|
|dstopdate			|string	|			|否			|停用日期				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "requirementclass": {
        "crclasscode": "0000000000",
        "crclassname": "电商订单交易编号",
        "dstopdate": "2015-12-01"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/requirementclass.gif)
:::

## 销售类型

- 资源符

  **saletype**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|销售类型编码				|
|name				|string |			|是			|销售类型名称				|
|rstype_code		|string	|			|是			|出库类别				|
|bdefau				|string	|			|是			|是否默认值				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "saletype": {
        "code": "12",
        "name": "线下销售",
        "rstype_code": "22",
        "bdefau": "0"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/saletype.gif)
:::

## 发运方式

- 资源符

  **shippingchoice**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|发运方式编码				|
|name				|string |			|是			|发运方式名称				|
|cscenname			|string	|			|是			|发运方式英文名称			|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "shippingchoice": {
        "code": "05",
        "name": "自提",
        "cscenname":"Self Mention"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/shippingchoice.gif)
:::

## 交易单位账号

- 资源符

  **unitacc**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|caccountnumber		|string |			|是			|银行账号				|
|cpayunitid			|string |			|是			|交易方编号				|
|bisdefault			|string |			|否			|是否默认账号				|
|cbankid			|string |			|是			|所属银行				|
|cbankname			|string |			|否			|开户行					|
|caccname			|string |			|否			|账户名称				|
|cprinvince			|string |			|否			|省自治区				|
|ccity				|string |			|否			|市县					|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "unitacc": {
        "caccountnumber": "11123123",
        "cpayunitid": "0001",
        "bisdefault": "1",
        "cbankid": "00002",
        "cbankname": "南京银行",
        "caccname": "个人",
        "cprinvince": "",
        "ccity": ""
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/unitacc.gif)
:::

## 交易单位分类

- 资源符

  **unitclass**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|cclassid			|string |			|是			|类别编码				|
|cclassname			|string |			|是			|类别名称				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "unitclass": {
        "cclassid": "00",
        "cclassname": "外包",
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/unitclass.gif)
:::

## 交易单位档案

- 资源符

  **unitdoc**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|cunitid			|string |			|是			|交易方编号				|
|cunitname			|string |			|是			|交易方名称				|
|cunitsname			|string |			|否			|交易方简称				|
|cclass				|string |			|是			|交易方分类编号			|
|ccusid				|string |			|否			|客户编码				|
|csupid				|string |			|否			|供应商编码				|
|caddress			|string |			|否			|联系地址				|
|cpostcode			|string |			|否			|邮政编码				|
|ctelephone			|string |			|否			|电话					|
|ctelefax			|string |			|否			|传真					|
|cbp				|string |			|否			|呼机					|
|cmobiletele		|string |			|否			|手机					|
|cemail				|string |			|否			|Email地址				|
|clinkman			|string |			|否			|联系人					|
|cremark			|string |			|否			|备注					|
|cbankcode			|string |			|否			|对应科目编码				|
|cdepid				|string |			|否			|对应部门编码				|
|cpersonid			|string |			|否			|对应人员编码				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "unitdoc": {
        "cunitid": "0001",
        "cunitname": "个人",
        "cunitsname": "个人",
        "cclass": "00",
        "ccusid": "",
        "csupid": "",
        "caddress": "",
        "cpostcode": "",
        "ctelephone": "",
        "ctelefax": "",
        "cbp": "",
        "cmobiletele": "",
        "cemail": "",
        "clinkman": "",
        "cremark": "",
        "cdepid": "",
        "cpersonid": ""
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/unitdoc.gif)
:::

## 计量单位组

- 资源符

  **unitgroup**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|计量单位组编码			|
|name				|string |			|是			|计量单位组名称			|
|type				|string	|			|是			|组类别(0:固定；1：浮动)	|
|cgrprelinvcode		|string	|			|否			|对应存货编码				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "unitgroup": {
        "code": "00",
        "name": "公斤",
        "type": "1",
        "cgrprelinvcode": ""
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/unitgroup.gif)
:::

## 计量单位

- 资源符

  **unit**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|计量单位编码				|
|name				|string |			|是			|计量单位名称				|
|group_code			|string	|			|是			|计量单位组编码			|
|main_flag			|string	|			|是			|主计量单位标志			|
|changerate			|string	|			|是			|换算率					|
|barcode			|string	|			|否			|对应条形码中的编码	  	|
|portion			|string	|			|否			|合理浮动比例				|
|SerialNum			|string	|			|否			|辅计量单位序号			|
|censingular		|string	|			|否			|英文名称单数				|
|cenplural			|string	|			|否			|英文名称复数				|
|cunitrefinvcode	|string	|			|否			|对应存货编码				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "unit": {
        "code": "0001",
        "name": "g",
        "group_code": "00",
        "main_flag": "1",
        "changerate": 1000
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/unit.gif)
:::

## 供应商分类

- 资源符

  **vendorclass**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string	|			|是			|供应商分类编码			|
|name			|string	|			|是			|供应商分类名称			|
|rank			|number	|			|是			|供应商分类编码级次		|
|end_rank_flag	|boolean|			|是			|末级标志				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "vendorclass":{
        "code":"98",
        "name":"测试分类98",
        "rank":"1",
        "end_rank_flag":"1"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/vendorclass.gif)
:::

## 供应商存货对照表

- 资源符

  **venandinv**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|cvencode			|string |			|是			|供应商编码				|
|cinvcode			|string |			|是			|存货编码				|
|cquanlity			|string	|			|是			|供货品质				|
|fquota				|string	|			|是			|配额					|
|fadvdate			|string	|			|是			|提前期					|
|cdepcode			|string	|			|是			|部门编码				|
|cpersoncode		|string	|			|否			|采购员					|
|cveninvcode		|string	|			|否			|供应商存货编码			|
|iteststyle			|string	|			|否			|检验方式				|
|idtmethod			|string	|			|否			|抽检方案				|
|fdtrate			|string	|			|否			|抽检率					|
|fdtnum				|string	|			|否			|抽检量					|
|cdtunit			|string	|			|否			|检验计量单位				|
|idtstyle			|string	|			|否			|抽检方式				|
|iqtmethod			|string	|			|否			|质量检验方案				|
|isuppproperty		|string	|			|否			|供应类型				|
|fmaxsuppnum		|string	|			|否			|最大交货量				|
|fminsuppnum		|string	|			|否			|最小交货量				|
|cveninvname		|string	|			|否			|供应商存货名称			|
|idtlevel			|string	|			|否			|检验水平				|
|cdtaql				|string	|			|否			|AQL					|
|fsupplybatch		|string	|			|否			|供应批量				|
|ftotalquota		|string	|			|否			|累计配额总量				|
|ffinishrateup		|string	|			|否			|实际完成率上限(%)		|
|ftopcost			|string	|			|否			|最高进价				|
|crulecode			|string	|			|否			|自定义抽检规则			|
|drohsenddate		|string	|			|否			|ROHS认证失效日期			|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
	"venandinv": {
		"cvencode": "01002",
		"cinvcode": "01019002063",
		"fadvdate": "122",
		"isuppproperty": "1"
	}
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/venandinv.gif)
:::

## 供应商档案

- 资源符

  **vendor**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string	|			|是			|供应商编码				|
|name			|string	|			|是			|供应商名称				|
|abbrname		|string	|			|是			|供应商简称				|
|sort_code		|string |			|是			|供应商分类编码			|
|bvencargo		|boolean|			|是			|是否采购				|
|seed_date		|string |			|是			|发展日期				|
|cvenexch_name	|string |			|是			|币种				    |
|...			|...	|			|是			|...				    |

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "vendor":{
        "code":"99",
        "name":"供应商名称",
        "abbrname":"供应商简称",
        "sort_code":"98",
        "bvencargo":"1",
        "seed_date":"2015-12-01",
        "cvenexch_name":"人民币"
    }
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/vendor.gif)
:::

## 单据类型与收发类别对照表

- 资源符

  **vouchandrd**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|cvbtid				|string |			|是			|单据业务类型				|
|cvrrcode			|string |			|是			|收类别编码				|
|cvrscode			|string	|			|是			|发类别编码				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
	"vouchandrd": {
		"cvbtid": "0101",
		"cvrrcode": "11"
	}
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/vouchandrd.gif)
:::
## 单据类型与收发类别对照表

- 资源符

  **vouchandrd**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|cvbtid				|string |			|是			|单据业务类型				|
|cvrrcode			|string |			|是			|收类别编码				|
|cvrscode			|string	|			|是			|发类别编码				|

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
	"vouchandrd": {
		"cvbtid": "0101",
		"cvrrcode": "11"
	}
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/vouchandrd.gif)
:::

## 仓库档案

- 资源符

  **warehouse**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string	|			|是			|仓库编码				|
|name			|string	|			|是			|仓库名称				|
|valuestyle		|string	|			|是			|计价方式				|
|cFactoryCode	|string |			|是			|工厂					|
|...			|...	|			|是			|...				    |

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
	"warehouse": {
		"code": "99",
		"name": "测试仓",
		"valuestyle": "全月平均法",
		"cFactoryCode": "001"
	}
}
```

:::

::: code-group-item 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

:::
::::

::: details 查看演示
[进入传送门](http://47.117.141.19/gif/warehouse.gif)
:::

