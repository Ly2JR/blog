# 供应商分类

- 资源符

  **vendorclass**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|code			|string	|			|是			|供应商分类编码			|
|name			|string	|			|是			|供应商分类名称			|
|rank			|number	|			|是			|供应商分类编码级次		|
|end_rank_flag	|boolean|			|是			|末级标志				|

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
    "vendorclass":{
        "code":"98",
        "name":"测试分类98",
        "rank":"1",
        "end_rank_flag":"1"
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
[进入传送门](http://47.117.141.19/gif/vendorclass.gif)
:::