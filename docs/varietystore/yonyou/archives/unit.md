# 计量单位

- 资源符

  `unit`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|计量单位编码|
|name|string||是|计量单位名称|
|group_code|string||是|计量单位组编码|
|barcode|string||否|对应条形码中的编码|
|main_flag|string||否|主计量单位标志|
|changerate|string||否|换算率|
|portion|string||否|合理浮动比例|
|SerialNum|string||否|辅计量单位序号|
|censingular|string||否|英文名称单数|
|cenplural|string||否|英文名称复数|
|cunitrefinvcode|string||否|对应存货编码|

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
    "unit": {
        "code": "0001",
        "name": "g",
        "group_code": "00",
        "main_flag": "1",
        "changerate": 1000
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
[进入传送门](/images/yonyou/gif/unit.gif)
:::
