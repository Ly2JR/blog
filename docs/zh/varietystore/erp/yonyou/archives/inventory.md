# 存货档案

- 资源符

  inventory
  
- 操作符

  - create <Badge type="tip" text="v1" vertical="top" />

  - load <Badge type="tip" text="v2" vertical="top" />

  - edit <Badge type="tip" text="v2" vertical="top" />

  - delete <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|存货编码|
|name|string||是|存货名称|
|sort_code|string||是|存货分类编码级次|
|unitgroup_code|string||是|计量单位组编码|
|main_measure|string||是|主计量单位编码|
|cPlanMethod|string||是|计划方法|
|cSRPolicy|string||是|供需政策|
|iSupplyType|string||是|供应类型|
|start_date|string||是|启用日期|
|invcode|string|entry|是|存货编码|
|...|...||...|...|

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
    "inventory": {
        "code": "9901",
        "name": "存货名称",
        "sort_code": "99",
        "main_measure": "0101",
        "unitgroup_code": "01",
        "cPlanMethod": "R",
        "cSRPolicy": "PE",
        "iSupplyType":"2",
        "start_date":"2015-12-01",
        "entry": [{
            "invcode": "9901"
        }]
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
[进入传送门](/images/erp/gif/inventory.gif)
:::
