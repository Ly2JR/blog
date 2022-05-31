# 职务级别

- 资源符

  `dutylevel`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|档案编码|
|name|string||是|档案名称|
|simplename|string||是|档案简称|
|simplespell|string||是|档案名称|
|pcodeid|string||是|上级代码|
|hideflag|string||是|是否显示|
|memo|string||是|备注|

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
    "dutylevel": {
        "code": "01",
        "name": "零时工",
        "simplename": "零时工",
        "simplespell": "LSG",
        "pcodeid": "",
        "hideflag": "1",
        "memo": ""
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
[进入传送门](/images/yonyou/gif/dutylevel.gif)
:::
