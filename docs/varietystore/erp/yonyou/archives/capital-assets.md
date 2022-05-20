# 固定资产卡片

- 资源符

  capitalasserts
  
- 操作符

  - create <Badge type="tip" text="v1" vertical="top" />

  - load <Badge type="tip" text="v2" vertical="top" />

  - edit <Badge type="tip" text="v2" vertical="top" />

  - delete <Badge type="tip" text="v2" vertical="top" />

- 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|assetno|string||是|资产编号|
|assetname|string||是|固定资产名称|
|typeno|string||是|类别编码|
|originalvalue|string||是|原值|
|startusedate|string||是|开始使用日期|
|currency|string||是|币种名称|
|foreigncurrencynumber|string||是|外币原值|
|exchangerate|string||是|汇率|
|worktotal|string||是|工作总量|
|workunit|string||是|工作量单位|
|accwork|string||是|累计工作量|
|accdepr|string||是|累计折旧|
|usedmonths|string||是|已使用月份|
|accountaddmannerno|string||是|增加方式编号|
|status|string||是|使用状况编号|
|depreciationmanner|string||是|折旧方法编号|
|life|string||是|可使用月份|
|netleftvalue|string||是|净残值|
|netleftvaluerate|string||是|净残值率|
|style|string||是|规格型号|
|buildingarea|string||是|建筑面积|
|buildingquantity|string||是|间(座)数|
|machinequantity|string||是|电机数量|
|machinewatt|string||是|电机功率|
|reservesite|string||是|存放地点|
|decvalue|string||是|减值准备金额|
|sgroupnum|string||是|资产组编码|
|addtax|string||是|增值税|
|skeeper|string||是|保管人|
|cVenCode|string||是|供应商编码|
|cVenName|string||是|供应商名称|
|dPurDate|string||是|采购日期|
|sSeriesNum|string||是|序列号|
|sCommodityCode|string||是|商品码|
|assetno|string|entry|是|资产编号|
|deptno|string|entry|是|部门编号|
|deptscale|string|entry|是|使用比例|
|depreciationitemno|string|entry|是|对应折旧科目编码|
|depreciationitemname|string|entry|是|对应折旧科目名称|
|relativeprojectno|string|entry|是|对应项目编码|
|relativeprojectname|string|entry|是|对应项目名称|
|relativecItemclsId|string|entry|是|项目大类|
|sourceNum|string|entry|是|资金构成编码|
|sourceScale|string|entry|是|资金构成使用比例|

-返回参数说明

|参数|类型|描述|
|:-|:-|:-|
|errcode|string|状态码(0:成功)|
|errmsg|string|错误描述|
|id|string||
|tradeid|string||

- 示例

:::: code-group
::: code-group-item 请求

```json
{
    "capitalasserts": {
        "assetno": "01200009",
        "assetname": "电脑",
        "typeno": "03",
        "originalvalue": "3000000",
        "startusedate": "2014-01-01",
        "currency": "人民币",
        "exchangerate": "1",
        "usedmonths": "12",
        "accountaddmannerno": "102",
        "status": "1001",
        "depreciationmanner": "1",
        "life": "20",
        "reservesite": "一号厂区",
        "skeeper": "demo",
        "entry": {
            "assetno": "01200009",
            "deptno": "01",
            "deptscale": "1"
        }
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
::::

::: details 查看演示
[进入传送门](/images/erp/gif/capitalasserts.gif)
:::
