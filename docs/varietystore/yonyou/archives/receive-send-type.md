# 收发类别

- 资源符

  `receivesendtype`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|收发类别编码|
|name|string||是|收发类别名称|
|sort|string||否|编码级次|
|rsflag|string||是|收发标志|
|end_flag|string||否|是否末级|
|oppsubject_code|string||否|对方科目编码|
|bRetail|string||否|适用零售|

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
[进入传送门](/images/yonyou/gif/receivesendtype.gif)
:::
