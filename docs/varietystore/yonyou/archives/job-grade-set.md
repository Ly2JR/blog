# 职等设置

- 资源符

  `jobgradeset`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|jobgradecode|string||是|职等编码|
|jobgradename|string||是|职等名称|
|maxpaypoint|string||否|薪点上限|
|minpaypoint|string||否|薪点下限|

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
    "jobgradeset": {
        "jobgradecode": "10",
        "jobgradename": "十职等",
        "maxpaypoint": "",
        "minpaypoint": ""
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
[进入传送门](/images/yonyou/gif/jobgradeset.gif)
:::
