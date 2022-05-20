# 存货货位对照表

- 资源符

  invandpos
  
- 操作符

  - create <Badge type="tip" text="v1" vertical="top" />

  - load <Badge type="tip" text="v2" vertical="top" />

  - edit <Badge type="tip" text="v2" vertical="top" />

  - delete <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|cinvcode|string||是|存货编码|
|cposcode|string||是|货位编码|
|iprior|string||是|优先顺序|

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
    "invandpos": {
        "cinvcode": "01019002063",
        "cposcode": "40-G-0-0-0",
        "iprior": "1"
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
[进入传送门](/images/erp/gif/invandpos.gif)
:::
