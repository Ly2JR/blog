# 职务类别

- 资源符

  **duty**
  
- 操作符

  - **create** <Badge type="tip" text="v1" vertical="top" />

  - **load** <Badge type="tip" text="v2" vertical="top" />

  - **edit** <Badge type="tip" text="v2" vertical="top" />

  - **delete** <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数			|类型	|参数路径	|是否必填	|描述					|
|:-				|:-		|:-			|:-			|:-						|
|dutycode		|string	|			|是			|职务编码				|
|dutyname		|string	|			|是			|职务名称				|
|dutysumm	    |string	|			|是			|职务概要				|
|series			|string |			|是			|职务类别				|
|dutylev		|string |			|是			|职务级别				|
|begindate		|string |			|是			|设立日期				|
|enddate		|string |			|是			|撤销日期				|

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
    "duty": {
        "dutycode": "1",
        "dutyname": "测试",
        "dutysumm": "",
        "series": "8",
        "dutylev": "01",
        "begindate": "2015-12-01",
        "enddate": ""
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
[进入传送门](/images/erp/gif/duty.gif)
:::