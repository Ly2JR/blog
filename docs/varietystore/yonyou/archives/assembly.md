# 成套件

- 资源符

  `assembly`

- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|assemblycode|string||是|套装件编码|
|fittingcode|string||否|单件编码|
|fittingquantity|float||否|单件数量|
|fittingnumber|float||否|单件件数|
|fittingcost|float||否|单件成本|
|fittingprice|float||否|单件单价|
|cAComunitCode|float||否|辅计量单位编码|

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
  "assembly": {
    "assemblycode": "01019002063",
    "fittingcode": "01019002065",
    "fittingquantity": "1",
    "fittingnumber": "1",
    "fittingcost": "1",
    "fittingprice": "1",
    "cAComunitCode": ""
  }
}
```

:::
::::

- 响应

```json
{
  "errcode": "0",
  "errmsg": "",
  "id": "",
  "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

::: details 查看演示
[进入传送门](/images/yonyou/gif/assembly.gif)
:::
