# 费用项目分类

- 资源符

  `expitemclass`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|费用项目分类编码|
|name|string||是|费用项目分类名称|
|rank|string||是|编码级次|
|end_rank_flag|string||是|末级标志|
|memo|string||否|备注|

- 返回参数说明

|参数|类型|描述|
|:-|:-|:-|
|errcode|string|状态码(0:成功)|
|errmsg|string|错误描述|
|id|string||
|tradeid|string||

- 请求示例

:::: code-group
::: code-group-item 新增

```json
{
    "expitemclass": {
        "code": "6",
        "name": "培训费",
        "rank": "1",
        "end_rank_flag": "1",
        "memo":""
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
[进入传送门](/images/erp/gif/expitemclass.gif)
:::
