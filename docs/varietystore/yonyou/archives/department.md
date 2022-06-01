# 部门档案

- 资源符

  `department`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|部门编码|
|endflag|string||否|是否末级|
|name|string||是|部门名称|
|cdepnameen|string||否|英文名称|
|cdepleader|string||否|分管领导|
|rank|string||是|编码级次|
|manager|string||是|负责人|
|prop|string||否|部门属性|
|phone|string||否|电话|
|address|string||否|地址|
|remark|string||否|备注|
|creditline|string||否|信用额度|
|creditgrade|string||是|信用等级|
|creditdate|string||否|信用天数|
|ddepbegindate|string||否|成立日期|
|ddependdate|string||否|撤销日期|
|vauthorizedoc|string||否|批准文号|
|vauthorizeunit|string||否|批准单位|
|cdepfax|string||否|传真|
|cdeppostcode|string||否|邮政编码|
|cdepemail|string||否|电子邮件|
|cdeptype|string||否|部门类型|
|bim|string||是|是否启用UTU|
|bretail|string||是|适用零售|
|cdepnameen|string||是|英文名称|

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
