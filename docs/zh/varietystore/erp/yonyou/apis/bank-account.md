# 银行对账单

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