# 费用项目

- 资源符

  **expenseitem**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数				|类型	|参数路径	|是否必填	|描述					|
|:-					|:-		|:-			|:-			|:-						|
|code				|string |			|是			|费用项目编号				|
|name				|string |			|是			|费用项目名称				|
|cexpccode			|string	|			|是			|费用项目分类编码			|
|iexptaxrate		|string	|			|是			|税率(%)					|
|iexpprofititem		|string	|			|是			|盈亏项目				|
|ccode				|string	|			|是			|科目					|
|memo				|string	|			|否			|备注					|

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
    "expenseitem": {
        "code": "60",
        "name": "员工培训",
        "cexpccode": "6"
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
[进入传送门](/images/erp/gif/expenseitem.gif)
:::