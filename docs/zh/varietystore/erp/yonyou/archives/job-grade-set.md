# 职等设置

- 资源符

  jobgradeset
  
- 操作符

  - create <Badge type="tip" text="v1" vertical="top" />

  - load <Badge type="tip" text="v2" vertical="top" />

  - edit <Badge type="tip" text="v2" vertical="top" />

  - delete <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|jobgradecode|string||是|职等编码|
|jobgradename|string||是|职等名称|
|maxpaypoint|string||是|薪点上限|
|minpaypoint|string||是|薪点下限|

- 返回参数说明

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
    "jobgradeset": {
        "jobgradecode": "10",
        "jobgradename": "十职等",
        "maxpaypoint": "",
        "minpaypoint": ""
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

:::
::::

::: details 查看演示
[进入传送门](/images/erp/gif/jobgradeset.gif)
:::
