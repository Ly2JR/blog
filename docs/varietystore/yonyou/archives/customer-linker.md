# 客户联系人

- 资源符

  `customerlinker`
  
- 操作符

  `create`

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|联系人编码|
|name|string||是|联系人名称|
|title|string||是|称呼|
|sex|string||是|性别|
|be_main_linker|string||是|是否主要联系人|
|founder|string||是|建档人|
|fondertime|string||是|建档时间|
|bDefaultCon|string||是|默认联系人|
|cConDepart|string||否|部门|
|...|string||否|...|

- 返回参数说明

|参数|类型|描述|
|:-|:-|:-|
|errcode|string|[状态码](./../error.md)|
|errmsg|string|错误描述|
|id|string|单据ID|
|tradeid|string|唯一号|

- 请求示例

:::: code-group
::: code-group-item 新增

```json
{
    "customerlinker": {
        "code": "00000000",
        "name": "demo",
        "title": "0001",
        "sex": "0",
        "be_main_linker": "1",
        "founder": "demo",
        "fondertime": "2015-12-01",
        "bDefaultCon": "1",
        "cConDepart": "0301"
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
[进入传送门](/images/yonyou/gif/customerlinker.gif)
:::
