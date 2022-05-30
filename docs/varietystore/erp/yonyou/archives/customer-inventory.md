# 客户存货对照表

- 资源符

  `cusandinv`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|ccuscode|string||是|客户编码|
|cinvcode|string||是|存货编码|
|ccusinvcode|string||否|客户存货编码|
|ccusinvname|string||否|客户存货名称|
|iteststyle|string||否|检验方式|
|idtmethod|string||否|抽检方案|
|fdtrate|string||否|抽检率|
|fdtnum|string||否|抽检量|
|cdtunit|string||否|检验计量单位|
|idtstyle|string||否|抽检方式|
|idtlevel|string||否|检验水平|
|cdtaql|string||否|AQL|
|boutinvdt|string||否|是否发货检验|
|crulecode|string||否|自定义抽检规则|
|fcusinvwasterate|string||否|发货合理损耗率%|

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
    "cusandinv": {
        "ccuscode": "0111",
        "cinvcode": "01019002063"
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
[进入传送门](/images/erp/gif/cusandinv.gif)
:::
