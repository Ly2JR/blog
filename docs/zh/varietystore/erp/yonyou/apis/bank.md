# 本单位开户银行

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
