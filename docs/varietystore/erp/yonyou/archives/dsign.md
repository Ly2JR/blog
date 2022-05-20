# 凭证类别

- 资源符

  dsign
  
- 操作符

  - create <Badge type="tip" text="v1" vertical="top" />

  - load <Badge type="tip" text="v2" vertical="top" />

  - edit <Badge type="tip" text="v2" vertical="top" />

  - delete <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|type|string||是|凭证类别字|
|order_code|string||是|凭证类别排序号|
|type_name|string||是|凭证类别名称|

- 返回参数说明

|参数|类型|描述|
|:-|:-|:-|
|errcode|string|状态码(0:成功)|
|errmsg|string|错误描述|
|id|string||
|tradeid|string||

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "dsign": {
        "type": "贷",
        "order_code": "1",
        "type_name": "贷款凭证"
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
::::

::: details 查看演示
[进入传送门](/images/erp/gif/dsign.gif)
:::
