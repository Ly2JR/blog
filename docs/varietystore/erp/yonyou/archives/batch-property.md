# 批次档案

- 资源符

  `batchproperty`

- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|cinvcode|string||是|存货编码|
|cbatch|string||是|批号|
|cfree1|string||是|自由项1|
|cfree2|string||是|自由项2|
|cfree3|string||是|自由项|
|cfree4|string||是|自由项|
|cfree5|string||否|自由项|
|cfree6|string||否|自由项|
|cfree7|string||否|自由项|
|cfree8|string||否|自由项|
|cfree9|string||否|自由项|
|cfree10|string||否|自由项|
|cbatchproperty1|string||否|批次属性1|
|cbatchproperty2|string||否|批次属性2|
|cbatchproperty3|string||否|批次属性3|
|cbatchproperty4|string||否|批次属性4|
|cbatchproperty5|string||否|批次属性5|
|cbatchproperty6|string||否|批次属性6|
|cbatchproperty7|string||否|批次属性7|
|cbatchproperty8|string||否|批次属性8|
|cbatchproperty9|string||否|批次属性9|
|cbatchproperty10|string||否|批次属性10|

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
    "batchproperty":{
        "cinvcode":"01019002063",
        "cbatch":"201512010001"
    }
}
```

:::
::::

- 响应

```json
{
    "errcode":"0",
    "errmsg":"",
    "id":"",
    "tradeid":"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

::: details 查看演示
[进入传送门](/images/erp/gif/aa_bank.gif)
:::
