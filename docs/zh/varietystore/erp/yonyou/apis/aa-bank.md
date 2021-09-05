# 银行档案

- 资源符

  **aa_bank**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数               |类型   |参数路径   |是否必填   |描述                    |
|:-                 |:-     |:-        |:-         |:-                      |
|code               |string |          |是         |银行编码                |
|name               |string |          |是         |银行名称                |
|bindfixlen         |string |          |是         |个人账号是否定长        |
|iindaccnolen       |string |          |是         |个人账号长度            |
|iindautoinputlen   |string |          |是         |自动带出的个人账号长度  |
|cindunitcode       |string |          |是         |单位编码                |
|bcomdfixlen        |string |          |是         |企业账号是否定长        |
|icomaccnolen       |string |          |是         |企业账号长度            |

- 返回参数说明

|参数   |类型     |描述           |
|:-     |:-       |:-            |
|errcode|string   |状态码(0:成功) |
|errmsg |string   |错误描述       |
|id     |string   |               |
|tradeid|string   |               |

- 示例

:::: code-group
::: code-group-item 请求

```json
{
  "aa_bank": {
    "code": "00000",
    "name": "中国南京银行",
    "bindfixlen": "0",
    "iindaccnolen": "11",
    "iindautoinputlen": "0",
    "bcomdfixlen": "0",
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
[进入传送门](http://47.117.141.19/gif/aa_bank.gif)
:::
