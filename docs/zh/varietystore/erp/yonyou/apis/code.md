# 会计科目

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
