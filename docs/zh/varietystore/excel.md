# 宏

Excel最新版是**JS宏**了

## 示例

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

## 开发

- **步骤1**: 添加命令按钮

`开发工具`添加`命令按钮`

> office：选择`ActiveX`下的`命令按钮`

- **步骤2**: 确认关键单元格位置

<CodeGroup>
  <CodeGroupItem title="JS宏" active>

```javascript
const codeCol       = 1             //工号列
const startRow      = 4             //开始行
const timeCol       = 7             //打卡时间列
const writeCol      = 8             //统计结果工号
const writeDateCol  = 9             //统计结果时间
const diffValCol    = 10            //统计结果时间差
const startHour     = '11:00:00'    //考勤开始时间统计
const endHour       = '12:00:00'    //考勤截至时间统计
```

  </CodeGroupItem>

  <CodeGroupItem title="VBA宏">

```VisualBasic
Const codeCol       As Integer = 1          '工号列
Const startRow      As Integer = 4          '开始行
Const timeCol       As Integer = 7          '打卡时间列
Const writeCol      As Integer = 8          '统计结果工号
Const writeDateCol  As Integer = 9          '统计结果时间
Const diffValCol    As Integer = 10         '统计结果时间差
Const startHour     As Integer = 11         '考勤开始时间统计
Const endHour       As Integer = 12         '考勤截至时间统计
```

  </CodeGroupItem>
</CodeGroup>

- **步骤3**: 确认最大有效行

<CodeGroup>
  <CodeGroupItem title="JS宏" active>

```javascript
let MaxRow = ActiveSheet.UsedRange.Rows.Count //最大有效行
```

  </CodeGroupItem>

  <CodeGroupItem title="VBA宏">

```VisualBasic
dim MaxRow as Long
MaxRow = ActiveSheet.UsedRange.Rows.Count '最大有效行
```

  </CodeGroupItem>
</CodeGroup>

- **步骤4**: 统计存储用字典

<CodeGroup>
  <CodeGroupItem title="JS宏" active>

```javascript
let dic=[]      //字典
```

  </CodeGroupItem>

  <CodeGroupItem title="VBA宏">

```VisualBasic
Dim dic     As Object       '字典
Set dic = CreateObject("scripting.dictionary")
```

  </CodeGroupItem>
</CodeGroup>

- **步骤5**: 字典存储内容结构

<CodeGroup>
  <CodeGroupItem title="JS宏" active>

```javascript
let dataRecord={
    Key:'',       
    Name:'',      //姓名
    Min:'',       //中午考勤最早时间
    MinRow:0,     //中午考勤最早时间所在行
    Max:'',       //中午考勤最晚时间
    MaxRow:0      //中午考勤最晚时间所在行
}
```

  </CodeGroupItem>

  <CodeGroupItem title="VBA宏">

```VisualBasic
'新建DataRecord类
public Key    as String
public Name   as String   '姓名
public Min    as String   '中午考勤最早时间
public MinRow as Integer  '中午考勤最早时间所在行
public Max    as String   '中午考勤最晚时间
public MaxRow as Integer  '中午考勤最晚时间所在行
```

  </CodeGroupItem>
</CodeGroup>

- **步骤6**: 单元格内容设置或读取

<CodeGroup>
  <CodeGroupItem title="JS宏" active>

```javascript
ActiveSheet.Cells.Item(1, 1).Value2
```

  </CodeGroupItem>

<CodeGroupItem title="VBA宏">
  
```VisualBasic
ActiveSheet.Cells.Item(1, 1).Value2
```

  </CodeGroupItem>
</CodeGroup>

- **步骤7**: 关键字是否存在检查

<CodeGroup>
  <CodeGroupItem title="JS宏" active>

```javascript
function Check(arr,val)
{
  let hasExist=false
  arr.forEach(function(ele,index){
      if(ele.Key===val)
      {
        hasExist=true
        return false
      }
  })
  return hasExist
};
```

  </CodeGroupItem>

  <CodeGroupItem title="VBA宏">

```VisualBasic
dic.Exists(key)   '因为是标准字典所以直接操作
```

  </CodeGroupItem>
</CodeGroup>

- **步骤8**: 计算时间差

<CodeGroup>
  <CodeGroupItem title="JS宏" active>

```javascript
function dateDiff(datepart,begindate, enddate) {
  let sDate = Date.parse(begindate);
  let eDate =Date.parse(enddate);
  let dateDiff=eDate-sDate;
  let val=0;
  switch(datepart)
  {
    case "hh":
      val=parseInt(dateDiff/1000/60/60)
      break
    case "n":
      val=parseInt(dateDiff/1000/60)
      break;
    case "s":
      val=parseInt(dateDiff/1000)
      break;
  }
  return val;
};
```

  </CodeGroupItem>

  <CodeGroupItem title="VBA宏">

```VisualBasic
DateDiff("n", beginDate, endDate)     'DateDiff是标准函数
```

  </CodeGroupItem>
</CodeGroup>

- **步骤9**: 命令按钮循环执行

<CodeGroup>
  <CodeGroupItem title="JS宏" active>

```javascript
for(let i=startRow;i<MaxRow;i++)
{
  let curCode = getCell(i, codeCol)

  let curDateTime = getCell(i,timeCol)
  curDateTime = Application.WorksheetFunction.Text(curDateTime, "yyyy-MM-dd HH:mm:ss")

  let splitDate=curDateTime.split(' ')
  let yyyyMMdd=splitDate[0]
  let startDate=yyyyMMdd+' '+startHour
  let endDate=yyyyMMdd+' '+endHour
  //
  let key = curCode + " " + yyyyMMdd
  //午饭时间 11:00:00~12:00:00
  if (startDate <= curDateTime && curDateTime <= endDate) {
    let hasExist=Check(dic,key)
    if (hasExist){
      let curVal = getItem(dic,key)
      if (curVal.Min > curDateTime){
          curVal.Min = curDateTime
          curVal.MinRow = i
      }else if (curVal.Max < curDateTime){
          curVal.Max = curDateTime
          curVal.MaxRow = i
      }
    }
    else{
      let dataRecord={}
      dataRecord.Key=key
      dataRecord.Name = curCode
      dataRecord.Min = curDateTime
      dataRecord.MinRow = i
      dataRecord.Max = curDateTime
      dataRecord.MaxRow = i
      dic.push(dataRecord)
    }
  }
}
```

  </CodeGroupItem>

  <CodeGroupItem title="VBA宏">

```VisualBasic
For i = startRow To MaxRow Step 1
    curCode = ActiveSheet.Cells.Item(i, codeCol).Value2

    curDateTime = ActiveSheet.Cells.Item(i, timeCol).Value2
    curDateTime = Application.WorksheetFunction.Text(curDateTime, "yyyy-MM-dd HH:mm:ss")
    curDate = DateValue(curDateTime)

    startDate = DateAdd("h", startHour, curDate)
    endDate = DateAdd("h", endHour, curDate)
    curDate = CDate(curDateTime)
    
    key = curCode + " " + Format(curDate, "yyyy-MM-dd")
    '午饭时间 11:00:00~12:00:00
    If (startDate <= curDate And curDate <= endDate) Then
      If (curCode = "T04070") Then
        If (dic.exists(key)) Then
            Dim curVal As DateRecord
            Set curVal = dic(key)
            If (curVal.Min > curDateTime) Then
                curVal.Min = curDateTime
                curVal.MinRow = i
            ElseIf (curVal.Max < curDateTime) Then
                curVal.Max = curDateTime
                curVal.MaxRow = i
            End If
        Else
          Dim data As New DateRecord
          data.Name = key
          data.Min = curDateTime
          data.MinRow = i
          data.Max = curDateTime
          data.MaxRow = i
          dic.Add key, data
          set data=nothing
        End If
    End If
  End If
Next
```

  </CodeGroupItem>
</CodeGroup>

- **步骤10**: 将统计结果显示

<CodeGroup>
  <CodeGroupItem title="JS宏" active>

```javascript
let i=startRow
dic.forEach(function(ele,index){
    ActiveSheet.Cells.Item(i, writeCol).Value2=ele.Name
    ActiveSheet.Cells.Item(i, writeDateCol).Value2=ele.Min + "~" + ele.Max
    ActiveSheet.Cells.Item(i, diffValCol).Value2=dateDiff("n", ele.Min, ele.Max)
    i++
})
```

  </CodeGroupItem>

  <CodeGroupItem title="VBA宏">

```VisualBasic
dim item as variant
i=startRow
For Each item In dic.Items
    ActiveSheet.Cells.Item(i, writeCol).Value2 = item.Name
    ActiveSheet.Cells.Item(i, writeDateCol).Value2 = item.Min + "~" + item.Max
    ActiveSheet.Cells.Item(i, diffValCol).Value2 = DateDiff("n", item.Min, item.Max)
    i = i + 1
Next
```

  </CodeGroupItem>
</CodeGroup>
