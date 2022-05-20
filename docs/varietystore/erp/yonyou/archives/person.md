# 人员档案

- 资源符

  person
  
- 操作符

  - create <Badge type="tip" text="v1" vertical="top" />

  - load <Badge type="tip" text="v2" vertical="top" />

  - edit <Badge type="tip" text="v2" vertical="top" />

  - delete <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|人员编码|
|name|string||是|人员名称|
|cpsnmobilephone|string||否|手机号|
|rEmployState|string||是|雇佣状态|
|cdept_num|string||是|行政部门|
|rIDType|string||是|证件类型|
|rpersontype|string||是|人员类别|
|rpersontypename|string||是|人员类别名称|
|rsex|string||是|性别|
|...|...||...|...|

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
    "person":{
        "code":"9901",
        "name":"测试人员",
        "cpsnmobilephone":"18698085765",
        "rEmployState":"10",
        "cdept_num":"99",
        "rIDType":"1",
        "rpersontype":"10",
        "rpersontypename":"正式员工",
        "rsex":"1"
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
[进入传送门](/images/erp/gif/person.gif)
:::
