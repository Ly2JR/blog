# 货位档案

- 资源符

  **position**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|货位编码				|
|name				|string |			|是			|货位名称				|
|grade				|string	|			|是			|编码级次				|
|end_flag			|string	|			|是			|是否末级				|
|warehouse_code		|string	|			|是			|仓库编码				|
|maxcubage			|string	|			|否			|最大体积				|
|maxweight			|string	|			|否			|最大重量				|
|remark				|string	|			|否			|备注					|
|barcode			|string	|			|否			|对应条形码中的编码		|

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
    "position": {
        "code": "40-G-0-0-0",
        "name": "40号库D发货区货位",
        "grade": "2",
        "end_flag": "1",
        "warehouse_code": "50",
        "maxcubage":"",
        "maxweight":"",
        "remark":"",
        "barcode":""
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
[进入传送门](http://47.117.141.19/gif/position.gif)
:::