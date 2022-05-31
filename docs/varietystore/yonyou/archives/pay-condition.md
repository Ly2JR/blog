# 付款条件

- 资源符

  `paycondition`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|付款条件编码|
|name|string||是|付款条件名称|
|creditdays|string||是|信用天数|
|discountdays1|string||是|优惠天数1|
|discountrate1|string||是|优惠率1|
|discountdays2|string||是|优惠天数2|
|discountrate2|string||是|优惠率2|
|discountdays3|string||是|优惠天数3|
|discountrate3|string||是|优惠率3|
|discountdays4|string||是|优惠天数4|
|discountrate4|string||是|优惠天数4|
|maxdiscountdays|string||是|最多优惠天数|

-返回参数说明

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
[进入传送门](/images/yonyou/gif/paycondition.gif)
:::
