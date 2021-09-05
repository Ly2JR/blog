# 采购类型

- 资源符

  **purchasetype**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|销售类型编码				|
|name				|string |			|是			|销售类型名称				|
|rstype_code		|string	|			|是			|出库类别				|
|bdefau				|string	|			|是			|是否默认值				|
|bpfdefault			|string	|			|是			|是否委外默认值			|

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
    "purchasetype": {
        "code": "00",
        "name": "线下采购",
        "rstype_code": "11",
        "bdefau": "0",
        "bpfdefault":"0"
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
[进入传送门](http://47.117.141.19/gif/purchasetype.gif)
:::
