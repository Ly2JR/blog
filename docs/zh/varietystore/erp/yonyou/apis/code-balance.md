# 期初余额

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
