# 财务

## 收款单

- 资源符

  **accept**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数               |类型 |参数路径 |是否必填 |描述     |
|:-     |:-  |:-   |:-   |:-      |
|vouchertype  |string |   |是   |单据类型    |
|vouchdate   |string |   |是   |单据日期    |
|period    |string |   |是   |期间     |
|customercode  |string |   |是   |客商编码    |
|departmentcode  |string |   |是   |部门编码    |
|personcode   |string |   |是   |职员编码    |
|itemclasscode  |string |   |是   |项目大类编号    |
|itemcode   |string |   |是   |项目编码    |
|itemname   |string |   |是   |项目名称    |
|orderid   |string |   |是   |订单号     |
|balancecode  |string |   |是   |结算方式    |
|notecode   |string |   |是   |应收应付票据编号   |
|digest    |string |   |是   |摘要     |
|oppositebankcode |string |   |是   |银行帐号    |
|foreigncurrency |string |   |是   |币种     |
|currencyrate  |string |   |是   |汇率     |
|amount    |string |   |是   |本币金额    |
|originalamount  |string |   |是   |原币金额    |
|operator   |string |   |是   |录入人     |
|balanceitemcode |string |   |是   |科目编码    |
|flag    |string |   |是   |应收应付标志    |
|sitemcode   |string |   |是   |结算项目    |
|oppositebankname |string |   |是   |对方单位银行名称   |
|bankname   |string |   |是   |本单位银行名称   |
|bankaccount  |string |   |是   |本单位银行账号   |
|define1   |string |   |否   |表头自定义项1   |
|define2   |string |   |否   |表头自定义项2   |
|define3   |string |   |否   |表头自定义项3   |
|define4   |string |   |否   |表头自定义项4   |
|define5   |string |   |否   |表头自定义项5   |
|define6   |string |   |否   |表头自定义项6   |
|define7   |string |   |否   |表头自定义项7   |
|define8   |string |   |否   |表头自定义项8   |
|define9   |string |   |否   |表头自定义项9   |
|define10   |string |   |否   |表头自定义项10   |
|define11   |string |   |否   |表头自定义项11   |
|define12   |string |   |否   |表头自定义项12   |
|define13   |string |   |否   |表头自定义项13   |
|define14   |string |   |否   |表头自定义项14   |
|define15   |string |   |否   |表头自定义项15   |
|define16   |string |   |否   |表头自定义项16   |
|type    |string |entry  |是   |款项类型    |
|customercode  |string |entry  |是   |客商编码    |
|originalamount  |string |entry  |是   |原币金额    |
|amount    |string |entry  |是   |本币金额    |
|itemcode   |string |entry  |是   |科目     |
|projectclass  |string |entry  |是   |项目大类编号    |
|project   |string |entry  |是   |项目编号    |
|departmentcode  |string |entry  |是   |部门编码    |
|personcode   |string |entry  |是   |职员编码    |
|orderid   |string |entry  |是   |订单号     | 
|itemname   |string |entry  |是   |项目名称    |
|ccontype   |string |entry  |是   |合同类型    |
|cconid    |string |entry  |是   |合同号     |
|iamt_s    |string |entry  |是   |数量     |
|iramt_s   |string |entry  |是   |剩余数量    |
|define22   |string |entry  |否   |表体自定义项1   |
|define23   |string |entry  |否   |表体自定义项2   |
|define24   |string |entry  |否   |表体自定义项3   |
|define25   |string |entry  |否   |表体自定义项4   |
|define26   |string |entry  |否   |表体自定义项5   |
|define27   |string |entry  |否   |表体自定义项6   |
|define28   |string |entry  |否   |表体自定义项7   |
|define29   |string |entry  |否   |表体自定义项8   |
|define30   |string |entry  |否   |表体自定义项9   |
|define31   |string |entry  |否   |表体自定义项10   |
|define32   |string |entry  |否   |表体自定义项11   |
|define33   |string |entry  |否   |表体自定义项12   |
|define34   |string |entry  |否   |表体自定义项13   |
|define35   |string |entry  |否   |表体自定义项14   |
|define36   |string |entry  |否   |表体自定义项15   |
|define37   |string |entry  |否   |表体自定义项16   |

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
  "accept": {
    "vouchtype": "48",
    "vouchdate": "2015-01-01",
    "period": "01",
    "customercode": "011501",
    "balancecode": "201",
    "oppositebankcode": "9879879656",
    "foreigncurrency": "人民币",
    "currencyrate": "1",
    "amount": "2500",
    "originalamount": "2500",
    "operator": "demo",
    "flag": "AR",
    "oppositebankname": "光大银行",
    "entry": {
        "type": "0",
        "customercode": "011501",
        "originalamount": "2500",
        "amount": "2500",
        "iamt_s": "0",
        "iramt_s": "0",
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
[进入传送门](http://47.117.141.19/gif/accept.gif)
:::

## 应付单

- 资源符

  **oughtpay**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|vouchertype		|string |			|是			|单据类型				|
|code				|string	|			|是			|应收付单据号				|
|relatevouchercode	|string	|			|是			|对应单据号				|
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
|natamount			|string	|entry		|是			|本币金额				|
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
  "oughtpay": {
    "vouchertype": "P0",
    "date": "2015-01-01",
    "cust_vendor_code": "03006",
    "deptcode": "0403",
    "personcode": "00044",
    "subjectcode": "220202",
    "currency_name": "人民币",
    "currency_rate": "1",
    "bdebitcredit": "0",
    "natamount": "2530",
    "amount": "2530",
    "paycondition_code": "01",
    "operator": "demo",
    "flag": "AP",
    "quantity": "10",
    "startflag": "0",
    "entry": {
      "cust_vendor_code": "03006",
      "deptcode": "0403",
      "personcode": "00044",
      "currency_name": "人民币",
      "currency_rate": "1",
      "bdebitcredit": "1",
      "natamount": "2530",
      "amount": "2530"
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
[进入传送门](http://47.117.141.19/gif/oughtpay.gif)
:::

## 应收单

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

## 凭证

- 资源符

  **voucher**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数					|类型	|参数路径		|是否必填	|描述									|
|:-						|:-		|:-				|:-			|:-										|
|voucher_type			|string	|				|是			|凭证类别								|
|fiscal_year			|number	|				|是			|凭证所属的会计年度，不填写取当前年			|
|accounting_period		|number	|				|是			|所属的会计期间，不填写取当前月份			|
|voucher_id				|string	|				|否			|凭证号									|
|date					|date	|				|否			|制单日期								|
|enter					|string	|				|否			|制单人名称								|
|cashier				|string	|				|否			|出纳名称								|
|attachment_number		|number	|				|否			|附单据数								|
|voucher_making_system	|string	|				|否			|外部系统类型								|
|reserve2				|string	|				|否			|外部凭证业务号							|
|account_code			|string	|entry			|否			|科目编码								|
|abstract				|string	|entry			|否			|摘要									|
|currency				|string	|entry			|否			|币种，默认人民币							|
|unit_price				|number	|entry			|否			|单价,在科目有数量核算时，填写此项			|
|exchange_rate1			|number	|entry			|否			|汇率1，主辅币核算时使用，NC用户使用		|
|exchange_rate2			|number	|entry			|否			|汇率2，折本汇率，U8用户使用				|
|quantity				|number	|entry			|否			|借方数量,在科目有数量核算时，填写此项		|
|primary_amount			|number	|entry			|否			|原币借方发生额							|
|secondary_amount		|number	|entry			|否			|辅币借方发生额							|
|natural_currency		|number	|entry			|是			|本币借方发生额*与本币贷方发生额不能同时为空	|
|dept_id				|string	|entry/auxiliary|否			|部门									|
|personnel_id			|string	|entry/auxiliary|否			|人员									|
|cust_id				|string	|entry/auxiliary|否			|客户									|
|supplier_id			|string	|entry/auxiliary|否			|供应商									|
|item_class				|string	|entry/auxiliary|否			|项目大类								|
|item_id				|string	|entry/auxiliary|否			|项目档案								|
|operator				|string	|entry/auxiliary|否			|业务员									|
|self_define1			|string	|entry/auxiliary|否			|自定义字段1								|
|self_define2			|string	|entry/auxiliary|否			|自定义字段2								|
|self_define3			|string	|entry/auxiliary|否			|自定义字段3								|
|self_define4			|string	|entry/auxiliary|否			|自定义字段4								|
|self_define5			|string	|entry/auxiliary|否			|自定义字段5								|
|self_define6			|string	|entry/auxiliary|否			|自定义字段6								|
|self_define7			|string	|entry/auxiliary|否			|自定义字段7								|
|self_define8			|string	|entry/auxiliary|否			|自定义字段8								|
|self_define9			|string	|entry/auxiliary|否			|自定义字段9								|
|self_define10			|string	|entry/auxiliary|否			|自定义字段10							|
|self_define11			|string	|entry/auxiliary|否			|自定义字段11							|
|self_define12			|string	|entry/auxiliary|否			|自定义字段12							|
|self_define13			|string	|entry/auxiliary|否			|自定义字段13							|
|self_define14			|string	|entry/auxiliary|否			|自定义字段14							|
|self_define15			|string	|entry/auxiliary|否			|自定义字段15							|
|self_define16			|string	|entry/auxiliary|否			|自定义字段16							|
|cexch_name				|number	|entry/cash_flow|否			|币种									|
|RowGuid				|string	|entry/cash_flow|否			|行标识									|
|iYPeriod				|date	|entry/cash_flow|否			|年期间									|
|iyear					|date	|entry/cash_flow|否			|年										|
|csign					|number	|entry/cash_flow|否			|凭证类别字								|
|nd_s					|number	|entry/cash_flow|否			|数量借方								|
|md_f					|number	|entry/cash_flow|否			|外币借方								|
|ccode					|number	|entry/cash_flow|否			|科目编码								|
|md						|number	|entry/cash_flow|否			|借方金额								|
|cCashItem				|string	|entry/cash_flow|否			|现金项目								|
|cash_item				|string	|entry/cash_flow|否			|现金项目								|
|natural_currency		|string	|entry/cash_flow|是			|本币借方发生额*与本币贷方发生额不能同时为空	|
|cdept_id				|string	|entry/cash_flow|否			|部门									|
|cperson_id				|string	|entry/cash_flow|否			|人员									|
|ccus_id				|string	|entry/cash_flow|否			|客户									|
|csup_id				|string	|entry/cash_flow|否			|供应商									|
|citem_class			|string	|entry/cash_flow|否			|项目大类								|
|citem_id				|string	|entry/cash_flow|否			|项目档案								|
|cDefine1				|string	|entry/cash_flow|否			|自定义字段1								|
|cDefine2				|string	|entry/cash_flow|否			|自定义字段2								|
|cDefine3				|string	|entry/cash_flow|否			|自定义字段3								|
|cDefine4				|string	|entry/cash_flow|否			|自定义字段4								|
|cDefine5				|string	|entry/cash_flow|否			|自定义字段5								|
|cDefine6				|string	|entry/cash_flow|否			|自定义字段6								|
|cDefine7				|string	|entry/cash_flow|否			|自定义字段7								|
|cDefine8				|string	|entry/cash_flow|否			|自定义字段8								|
|cDefine9				|string	|entry/cash_flow|否			|自定义字段9								|
|cDefine10				|string	|entry/cash_flow|否			|自定义字段10							|
|cDefine11				|string	|entry/cash_flow|否			|自定义字段11							|
|cDefine12				|string	|entry/cash_flow|否			|自定义字段12							|
|cDefine13				|string	|entry/cash_flow|否			|自定义字段13							|
|cDefine14				|string	|entry/cash_flow|否			|自定义字段14							|
|cDefine15				|string	|entry/cash_flow|否			|自定义字段15							|
|cDefine16				|string	|entry/cash_flow|否			|自定义字段16							|

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
    "voucher": {
        "voucher_type": "记",
        "fiscal_year": "2015",
        "accounting_period": "1",
        "voucher_id": "999",
        "attachment_number": "0",
        "date": "2015-01-31",
        "enter": "demo",
        "cashier": "",
        "signature": "",
        "checker": "",
        "posting_date": "",
        "posting_person": "",
        "voucher_making_system": "",
        "memo1": "",
        "memo2": "",
        "reserve1": "",
        "reserve2": "",
        "revokeflag": "",
        "entry": [{
                "entry_id": "1",
                "account_code": "1131",
                "abstract": "其他应收单",
                "primary_debit_amount": "0",
                "natural_debit_currency": "600",
                "credit_quantity": "0",
                "primary_credit_amount": "0",
                "natural_credit_currency": "0"
            },
            {
                "entry_id": "2",
                "account_code": "1001",
                "abstract": "交通费",
                "exchange_rate2": "0",
                "debit_quantity": "0",
                "primary_debit_amount": "0",
                "natural_debit_currency": "0",
                "credit_quantity": "0",
                "primary_credit_amount": "0",
                "natural_credit_currency": "400",
                "cash_flow": {
                    "cash_item": "03",
                    "natural_debit_currency": "0.00",
                    "natural_credit_currency": "400.00",
                    "cCashItem": "03",
                    "md": "0",
                    "mc": "500",
                    "ccode": "1001",
                    "md_f": "0",
                    "mc_f": "0",
                    "nd_s": "0",
                    "nc_s": "0",
                    "dbill_date": "2015-01-31",
                    "csign": "记",
                    "iyear": "2015",
                    "iYPeriod": "201501",
                }
            },
            {
                "entry_id": "3",
                "account_code": "1001",
                "abstract": "交通费",
                "exchange_rate2": "0",
                "debit_quantity": "0",
                "primary_debit_amount": "0",
                "natural_debit_currency": "0",
                "credit_quantity": "0",
                "primary_credit_amount": "0",
                "natural_credit_currency": "200",
                "cash_flow": {
                    "cash_item": "03",
                    "natural_debit_currency": "0.00",
                    "natural_credit_currency": "200.00",
                    "cCashItem": "03",
                    "md": "0",
                    "mc": "100",
                    "ccode": "1001",
                    "md_f": "0",
                    "mc_f": "0",
                    "nd_s": "0",
                    "nc_s": "0",
                    "dbill_date": "2015-01-31",
                    "csign": "记",
                    "iyear": "2015",
                    "iYPeriod": "201501",
                }
            }
        ]
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
[进入传送门](http://47.117.141.19/gif/voucher.gif)
:::
