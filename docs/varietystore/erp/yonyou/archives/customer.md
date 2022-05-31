# 客户档案

- 资源符

  `customer`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|客户编码|
|name|string||是|客户名称|
|sort_code|string||是|分类编码|
|contact|string||是|联系人|
|ccusmngtypecode|string||是|客户管理类型编码|
|ccusexch|string||是|币种|
|seed_date|string||是|发展日期|
|...|...||是|...|

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
    "customer": {
        "code": "99",
        "name": "测试客户",
        "abbrname": "测试客户",
        "sort_code": "98",
        "contact": "demo",
        "ccusmngtypecode": "999",
        "ccusexch_name": "人民币",
        "seed_date":"2021-03-09"
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
[进入传送门](/images/erp/gif/customer.gif)
:::
