# 存货分类

- 资源符

  `inventoryclass`

- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|存货分类编码|
|name|string||是|存货分类名称|
|rank|string||是|存货分类编码级次|
|end_rank_flag|string||否|末级标志|
|econo_sort_code|string||否|所属经济分类编码|
|barcode|string||是|对应条形码中的编码|

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
    "inventoryclass":{
        "code":"99",
        "name":"存货分类",
        "rank":1,
        "end_rank_flag":1,
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
[进入传送门](/images/yonyou/gif/inventoryclass.gif)
:::
