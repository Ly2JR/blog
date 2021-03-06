# 销售类型

- 资源符

  `saletype`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|销售类型编码|
|name|string||是|销售类型名称|
|rstype_code|string||是|出库类别|
|bdefau|string||否|是否默认值|
|bstmps_mrp|string||否|是否列入MPS/MRP计划|

- 返回参数说明

|参数|类型|描述|
|:-|:-|:-|
|errcode|string|状态码(0:成功)|
|errmsg|string|错误描述|
|id|string|单据ID|
|tradeid|string|唯一号|

- 请求示例

:::: code-group
::: code-group-item 新增

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
[进入传送门](/images/yonyou/gif/saletype.gif)
:::
