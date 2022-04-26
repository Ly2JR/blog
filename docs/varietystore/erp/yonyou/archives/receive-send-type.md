# 收发类别

- 资源符

  receivesendtype
  
- 操作符

  - create <Badge type="tip" text="v1" vertical="top" />

  - load <Badge type="tip" text="v2" vertical="top" />

  - edit <Badge type="tip" text="v2" vertical="top" />

  - delete <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|收发类别编码|
|name|string||是|收发类别名称|
|sort|string||是|编码级次|
|rsflag|string||是|收发标志|
|endend_flagflag|string||是|是否末级|

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
    "receivesendtype": {
        "code": "2e",
        "name": "直接出库",
        "sort": "1",
        "rsflag": "0",
        "end_flag": "1"
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
[进入传送门](/images/erp/gif/receivesendtype.gif)
:::
