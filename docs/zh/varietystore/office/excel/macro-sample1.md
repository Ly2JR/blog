# 考勤时间间隔统计

## 模板说明

考勤统计显示内容如下:

|工号|英文名|中文名|部门|职位|卡号|打卡时间|
|:-|:-|:-|:-|:-|:-|:-|
|0001|...|王一|...|...|...|2021-08-01 06:00:12|
|0001|...|王一|...|...|...|2021-08-01 11:31:21|
|0001|...|王一|...|...|...|2021-08-01 11:57:40|
|0001|...|王一|...|...|...|2021-08-01 17:03:00|
|0001|...|王一|...|...|...|2021-08-01 17:55:51|
|0001|...|王一|...|...|...|2021-08-01 20:01:04|
|...|...|...|...|...|...|...|

Q：需要统计出所有员工中午考勤打卡时间情况,考勤时间超过30分算早退？

A：需要先确认中午考勤时间范围，比如中午11:00:00~12:00:00作为午餐时间

## 宏

- **步骤1**: 确认关键单元格位置

:::: code-group
::: code-group-item JS

```js
const readColCode     = 1           //工号列
const readColTime     = 7           //打卡时间列
const startRow        = 4           //开始计算行
const writeColCode    = 8           //结果工号写入列
const writeColTime    = 9           //结果时间写入列
const writeColVal     = 10          //结果时间差异值写入列
const startHour       = '11:00:00'  //开始时间统计
const endHour         = '12:00:00'  //截至时间统计
```

:::

::: code-group-item VBA

```vb
Const readColCode     As Integer = 1          '工号列
Const readColTime     As Integer = 7          '打卡时间列
Const startRow        As Integer = 4          '开始计算行
Const writeColCode    As Integer = 8          '结果工号写入列
Const writeColTime    As Integer = 9          '结果时间写入列
Const writeColVal     As Integer = 10         '结果时间差异值写入列
Const startHour       As Integer = 11         '开始时间统计
Const endHour         As Integer = 12         '截至时间统计
```

:::
::::

- **步骤2**: 确认最大有效行

:::: code-group
::: code-group-item JS

```js
let MaxRow = ActiveSheet.UsedRange.Rows.Count;   //最大有效行
```

:::

::: code-group-item VBA

```vb
dim MaxRow as Long
MaxRow = ActiveSheet.UsedRange.Rows.Count   '最大有效行
```

:::
::::

- **步骤3**: 统计存储用字典

:::: code-group
::: code-group-item JS

```js
let dic=[];     //字典
```

:::

::: code-group-item VBA

```vb
Dim dic     As Object           '字典
Set dic = CreateObject("scripting.dictionary")
```

:::
::::

- **步骤4**: 字典存储内容结构

:::: code-group
::: code-group-item JS

```js
let dataRecord={
    Key:'',       
    Name:'',      //姓名
    Min:'',       //中午考勤最早时间
    MinRow:0,     //中午考勤最早时间所在行
    Max:'',       //中午考勤最晚时间
    MaxRow:0      //中午考勤最晚时间所在行
};
```

:::

::: code-group-item VBA

```vb
public Key    as String
public Name   as String   '姓名
public Min    as String   '中午考勤最早时间
public MinRow as Integer  '中午考勤最早时间所在行
public Max    as String   '中午考勤最晚时间
public MaxRow as Integer  '中午考勤最晚时间所在行
```

:::
::::

- **步骤5**: 关键字是否存在检查

:::: code-group
::: code-group-item JS

```js
function Check(arr,val)
{
  let hasExist=false;
  arr.forEach(function(ele,index){
      if(ele.Key===val)
      {
        hasExist=true;
        return false;
      }
  })
  return hasExist;
};
```

:::

::: code-group-item VBA

```vb
dic.Exists(curKey)   '因为是标准字典所以直接操作
```

:::
::::

- **步骤6**: 计算时间差

:::: code-group
::: code-group-item JS

```js
function dateDiff(datepart,begindate, enddate) {
  let sDate = Date.parse(begindate);
  let eDate =Date.parse(enddate);
  let dateDiff=eDate-sDate;
  let val=0;
  switch(datepart)
  {
    case "hh":
      val=parseInt(dateDiff/1000/60/60);
      break;
    case "n":
      val=parseInt(dateDiff/1000/60);
      break;
    case "s":
      val=parseInt(dateDiff/1000);
      break;
  }
  return val;
};
```

:::

::: code-group-item VBA

```vb
DateDiff("n", beginDate, endDate)     'DateDiff是标准函数
```

:::
::::

- **步骤7**: 命令按钮执行

:::: code-group
::: code-group-item JS

```js
for(let i=startRow;i<maxRow;i++)
{
  let curCode = ActiveSheet.Cells.Item(i, readColCode).Value2;

  let curDateTime = ActiveSheet.Cells.Item(i,readColTime).Value2;
  curDateTime = Application.WorksheetFunction.Text(curDateTime, "yyyy-MM-dd HH:mm:ss");

  let splitDate=curDateTime.split(' ');
  let yyyyMMdd=splitDate[0];
  let startDate=yyyyMMdd+' '+startHour;
  let endDate=yyyyMMdd+' '+endHour;
  //
  let curKey = curCode + " " + yyyyMMdd;
  //午饭时间 11:00:00~12:00:00
  if (startDate <= curDateTime && curDateTime <= endDate) {
    let hasExist=Check(dic,curKey);
    if (hasExist){
      let curVal = getItem(dic,curKey);
      if (curVal.Min > curDateTime){
          curVal.Min = curDateTime;
          curVal.MinRow = i;
      }else if (curVal.Max < curDateTime){
          curVal.Max = curDateTime;
          curVal.MaxRow = i;
      }
    }else{
      let dataRecord={};
      dataRecord.Key = key;
      dataRecord.Name = curCode;
      dataRecord.Min = curDateTime;
      dataRecord.MinRow = i;
      dataRecord.Max = curDateTime;
      dataRecord.MaxRow = i;
      dic.push(dataRecord);
    }
  }
}
```

:::

::: code-group-item VBA

```vb
For i = startRow To maxRow Step 1
    curCode = ActiveSheet.Cells.Item(i, readColCode).Value2

    curDateTime = ActiveSheet.Cells.Item(i, readColTime).Value2
    curDateTime = Application.WorksheetFunction.Text(curDateTime, "yyyy-MM-dd HH:mm:ss")
    curDate = DateValue(curDateTime)

    startDate = DateAdd("h", startHour, curDate)
    endDate = DateAdd("h", endHour, curDate)
    curDate = CDate(curDateTime)
    
    curKey = curCode + " " + Format(curDate, "yyyy-MM-dd")
    '午饭时间 11:00:00~12:00:00
    If (startDate <= curDate And curDate <= endDate) Then
        If (dic.Exists(curKey)) Then
            Dim curVal As DateRecord
            Set curVal = dic(curKey)
            If (curVal.Min > curDateTime) Then
                curVal.Min = curDateTime
                curVal.MinRow = i
            ElseIf (curVal.Max < curDateTime) Then
                curVal.Max = curDateTime
                curVal.MaxRow = i
            End If
        Else
          Dim data As New DateRecord
          data.Key = curKey
          data.Name = curCode
          data.Min = curDateTime
          data.MinRow = i
          data.Max = curDateTime
          data.MaxRow = i
          dic.Add key, data
          set data=nothing
        End If
  End If
Next
```

:::
::::

- **步骤8**: 将统计结果显示

:::: code-group
::: code-group-item JS

```js
let i=startRow
dic.forEach(function(ele,index){
    ActiveSheet.Cells.Item(i, writeColCode).Value2=ele.Name;
    ActiveSheet.Cells.Item(i, writeColTime).Value2=ele.Min + "~" + ele.Max;
    ActiveSheet.Cells.Item(i, writeColVal).Value2=dateDiff("n", ele.Min, ele.Max);
    i++
})
```

:::

::: code-group-item VBA

```vb
Dim item as Variant
i=startRow
For Each item In dic.Items
    ActiveSheet.Cells.Item(i, writeColCode).Value2 = item.Name
    ActiveSheet.Cells.Item(i, writeColTime).Value2 = item.Min + "~" + item.Max
    ActiveSheet.Cells.Item(i, writeColVal).Value2 = DateDiff("n", item.Min, item.Max)
    i = i + 1
Next
set dic=nothing
```

:::
::::
