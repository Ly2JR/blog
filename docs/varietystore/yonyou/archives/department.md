# 部门档案

- 资源符

  `department`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|部门编码|
|name|string||是|部门名称|
|rank|string||是|编码级次|
|endflag|string||是|是否末级|
|ddepbegindate|string||是|成立日期|
|...|...||...|...|

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
    "department":{
        "code":"99",
        "name":"测试",
        "rank":1,
        "endflag":1,
        "ddepbegindate":"2015-12-01"
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
[进入传送门](/images/yonyou/gif/department.gif)
:::