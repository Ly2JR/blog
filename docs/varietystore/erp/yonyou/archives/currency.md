# 外币设置

- 资源符

  `currency`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|币种编码|
|name|string||是|币种名称|
|caltype|number||是|折算方式(1:固定;2:浮动)|
|precision|string||是|小数位数|
|error|number||是|最大误差|

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
    "currency": {
        "code": "EURO",
        "name": "欧元",
        "caltype": "1",
        "precision": "5",
        "error": "0.00005"
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
[进入传送门](/images/erp/gif/currency.gif)
:::
