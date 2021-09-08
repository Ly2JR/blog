# 成套件

- 资源符

  **assembly**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

参数                |类型    |参数路径    |是否必填    |描述                    |
|:-                    |:-        |:-            |:-            |:-                        |
|assemblycode        |string |            |是            |套装件编码                |
|fittingcode        |string |            |是            |单件编码                |
|fittingquantity    |string    |            |是            |单件数量                |
|fittingnumber        |string    |            |是            |单件件数                |
|fittingcost        |string    |            |是            |单件成本                |
|fittingprice        |string    |            |是            |单件单价                |
|cAComunitCode        |string    |            |否            |辅计量单位编码            |

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
  "assembly": {
    "assemblycode": "01019002063",
    "fittingcode": "01019002065",
    "fittingquantity": "1",
    "fittingnumber": "1",
    "fittingcost": "1",
    "fittingprice": "1",
    "cAComunitCode":""
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
[进入传送门](http://47.117.141.19/gif/assembly.gif)
:::