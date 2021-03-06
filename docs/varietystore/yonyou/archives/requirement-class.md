# 需求分类

- 资源符

  `requirementclass`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|crclasscode|string||是|需求分类代号|
|crclassname|string||是|需求分类说明|
|dstopdate|string||否|停用日期|

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
    "requirementclass": {
        "crclasscode": "0000000000",
        "crclassname": "电商订单交易编号",
        "dstopdate": "2015-12-01"
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
[进入传送门](/images/yonyou/gif/requirementclass.gif)
:::
