# 计量单位

- 资源符

  **unit**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|计量单位编码				|
|name				|string |			|是			|计量单位名称				|
|group_code			|string	|			|是			|计量单位组编码			|
|main_flag			|string	|			|是			|主计量单位标志			|
|changerate			|string	|			|是			|换算率					|
|barcode			|string	|			|否			|对应条形码中的编码	  	|
|portion			|string	|			|否			|合理浮动比例				|
|SerialNum			|string	|			|否			|辅计量单位序号			|
|censingular		|string	|			|否			|英文名称单数				|
|cenplural			|string	|			|否			|英文名称复数				|
|cunitrefinvcode	|string	|			|否			|对应存货编码				|

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
[进入传送门](http://47.117.141.19/gif/unit.gif)
:::
