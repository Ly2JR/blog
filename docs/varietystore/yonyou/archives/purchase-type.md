# 采购类型

- 资源符

  `purchasetype`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|销售类型编码|
|name|string||是|销售类型名称|
|rstype_code|string||是|出库类别|
|bdefau|string||是|是否默认值|
|bpfdefault|string||是|是否委外默认值|

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
    "purchasetype": {
        "code": "00",
        "name": "线下采购",
        "rstype_code": "11",
        "bdefau": "0",
        "bpfdefault":"0"
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
[进入传送门](/images/yonyou/gif/purchasetype.gif)
:::