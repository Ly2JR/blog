# 人员类别

- 资源符

  persontype
  
- 操作符

  - create <Badge type="tip" text="v1" vertical="top" />

  - load <Badge type="tip" text="v2" vertical="top" />

  - edit <Badge type="tip" text="v2" vertical="top" />

  - delete <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|档案编码|
|name|string||是|档案名称|
|simplename|string||是|档案简称|
|simplespell|string||是|档案简拼|
|levels|string||是|档案级别|
|pcodeid|string||是|上级代码|
|hideflag|string||是|是否显示|
|memo|string||是|备注|

-返回参数说明

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
    "persontype": {
        "code": "90",
        "name": "派遣",
        "simplename":"派遣",
        "simplespell":"PQ",
        "levels":"0",
        "pcodeid":"",
        "hideflag": "1",
        "memo":""
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
[进入传送门](/images/erp/gif/persontype.gif)
:::