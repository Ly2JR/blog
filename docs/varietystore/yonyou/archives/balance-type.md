# 结算方式

- 资源符

  `balancetype`

- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|结算方式编码|
|name|string||是|结算方式名称|
|flag|bool||是|是否票据管理|
|code_rank|bool||否|编码级次|
|end_rank_flag|bool||否|是否末级|
|issbilltype|bool||否|对应票据类型|
|bPortalSettle|bool||否|允许门户结算|
|iNEInBillType|bool||是|对应网报支付方式|

- 返回参数说明

|参数|类型|描述|
|:-|:-|:-|
|errcode|string|[状态码](./../error.md)|
|errmsg|string|错误描述|
|id|string|单据ID|
|tradeid|string|唯一号|

- 请求示例

:::: code-group
::: code-group-item 新增

```json
{
    "balancetype":{
    "code":"601",
    "name":"花呗",
    "flag":"0",
    "code_rank":"2",
    "end_rank_flag":"1",
    "issbilltype":"3"
    }
}
```

:::
::::

- 响应

```json
{
    "errcode":"0",
    "errmsg":"",
    "id":"",
    "tradeid":"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

::: details 查看演示
[进入传送门](/images/yonyou/gif/balancetype.gif)
:::
