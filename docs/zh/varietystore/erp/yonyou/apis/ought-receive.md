# 应收单

- 资源符

  **oughreceive**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|vouchertype		|string |			|是			|单据类型				|
|code				|string |			|是			|应收付单据号				|
|date				|string	|			|是			|单据日期				|
|cust_vendor_code	|string	|			|是			|客商编号				|
|deptcode			|string	|			|是			|部门编码				|
|personcode			|string	|			|是			|职员编码				|
|item_classcode		|string	|			|是			|项目大类编码				|
|item_code			|string	|			|是			|项目编码				|
|digest				|string	|			|是			|摘要					|
|subjectcode		|string	|			|是			|科目编码				|
|currency_name		|string	|			|是			|币种					|
|currency_rate		|string	|			|是			|汇率					|
|bdebitcredit		|string	|			|是			|借贷方向				|
|natamount			|string	|			|是			|本币金额				|
|amount				|string	|			|是			|原币金额				|
|paycondition_code	|string	|			|是			|付款条件				|
|operator			|string	|			|是			|操作员姓名				|
|flag				|string	|			|是			|标志					|
|quantity			|string	|			|是			|数量					|
|define1			|string	|			|否			|表头自定义项1			|
|define2			|string	|			|否			|表头自定义项2			|
|define3			|string	|			|否			|表头自定义项3			|
|define4			|string	|			|否			|表头自定义项4			|
|define5			|string	|			|否			|表头自定义项5			|
|define6			|string	|			|否			|表头自定义项6			|
|define7			|string	|			|否			|表头自定义项7			|
|define8			|string	|			|否			|表头自定义项8			|
|define9			|string	|			|否			|表头自定义项9			|
|define10			|string	|			|否			|表头自定义项10			|
|define11			|string	|			|否			|表头自定义项11			|
|define12			|string	|			|否			|表头自定义项12			|
|define13			|string	|			|否			|表头自定义项13			|
|define14			|string	|			|否			|表头自定义项14			|
|define15			|string	|			|否			|表头自定义项15			|
|define16			|string	|			|否			|表头自定义项16			|
|cust_vendor_code	|string	|entry		|是			|客商编号				|
|deptcode			|string	|entry		|是			|部门编码				|
|personcode			|string	|entry		|是			|职员编码				|
|item_classcode		|string	|entry		|是			|项目大类编码				|
|item_code			|string	|entry		|是			|项目编码				|
|digest				|string	|entry		|是			|摘要					|
|subjectcode		|string	|entry		|是			|科目编码				|
|currency_name		|string	|entry		|是			|币种					|
|currency_rate		|string	|entry		|是			|汇率					|
|bdebitcredit		|string	|entry		|是			|借贷方向				|
|natamoun			|string	|entry		|是			|本币金额				|
|amount				|string	|entry		|是			|原币金额				|
|define22			|string	|entry		|否			|表体自定义项1			|
|define23			|string	|entry		|否			|表体自定义项2			|
|define24			|string	|entry		|否			|表体自定义项3			|
|define25			|string	|entry		|否			|表体自定义项4			|
|define26			|string	|entry		|否			|表体自定义项5			|
|define27			|string	|entry		|否			|表体自定义项6			|
|define28			|string	|entry		|否			|表体自定义项7			|
|define29			|string	|entry		|否			|表体自定义项8			|
|define30			|string	|entry		|否			|表体自定义项9			|
|define31			|string	|entry		|否			|表体自定义项10			|
|define32			|string	|entry		|否			|表体自定义项11			|
|define33			|string	|entry		|否			|表体自定义项12			|
|define34			|string	|entry		|否			|表体自定义项13			|
|define35			|string	|entry		|否			|表体自定义项14			|
|define36			|string	|entry		|否			|表体自定义项15			|
|define37			|string	|entry		|否			|表体自定义项16			|

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
    "oughtreceive": {
        "vouchertype": "R0",
        "date": "2015-01-01",
        "cust_vendor_code": "011501",
        "deptcode": "0301",
        "personcode": "00024",
        "subjectcode": "122101",
        "currency_name": "人民币",
        "currency_rate": "1",
        "bdebitcredit": "1",
        "natamount": "500",
        "amount": "500",
        "paycondition_code": "01",
        "operator": "demo",
        "flag": "AR",
        "quantity": "0",
        "entry": {
            "deptcode": "0301",
            "personcode": "00024",
            "currency_name": "人民币",
            "currency_rate": "1",
            "bdebitcredit": "0",
            "natamount": "500",
            "amount": "500",
            "define22": "123"
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
[进入传送门](http://47.117.141.19/gif/oughreceive.gif)
:::
