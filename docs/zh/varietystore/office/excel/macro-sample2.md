# 中位数统计

::: tip
统计学中的专有名词，是按顺序排列的一组数据中居于中间位置的数
:::

## 模板说明

原始数据显示如下:

|时间|...|数据1|数据2|数据3|数据4|
|:-|:-|:-|:-|:-|:-|
|01/01|...|9.31|620.41|8.97|1134.76|
|01/01|...|9.42|611.12|9.12|1214.11|
|01/01|...|9.34|600.42|8.99|1206.87|
|01/02|...|9.41|623.57|9.18|1138.21|
|01/02|...|9.43|623.57|9.05|1175.29|
|01/02|...|9.51|624.09|9.14|1165.84|
|01/02|...|9.42|611.12|9.11|1157.75|
|...|...|...|...|...|...|

目测中位数统计结果应该如下:

|时间|...|数据1|数据2|数据3|数据4|
|:-|:-|:-|:-|:-|:-|
|01/01|...|9.34|611.12|8.99|1206.87|
|01/02|...|9.425|623.57|9.125|1161.795|

## 宏

- **步骤1**: 确认关键单元格位置

:::: code-group
::: code-group-item JS

```js
const readDateCol      = 1          //日期所在列
const readCol1         = 3          //Data1读取列
const readCol2         = 4          //Data2读取列
const readCol3         = 5          //Data3读取列
const readCol4         = 6          //Data4读取列
const readRow          = 4          //第几行开始计算

const writeRow         = 2          //第几行开始结果写入
const writeDateCol     = 8          //日期结果所在列
const writeCol1        = 9          //Data1统计结果列
const writeCol2        = 10         //Data2统计结果列
const writeCol3        = 11         //Data3结果列
const writeCol4        = 12         //Data4结果列
```

:::

::: code-group-item VBA

```vb
Const readDateCol      As Integer = 1          '日期所在列
Const readCol1         As Integer = 3          'Data1读取列
Const readCol2         As Integer = 4          'Data2读取列
Const readCol3         As Integer = 5          'Data3读取列
Const readCol4         As Integer = 6          'Data4读取列
Const readRow          As Integer = 4          '第几行开始计算

Const writeRow         As Integer = 2          '第几行开始结果写入
Const writeDateCol     As Integer = 8          '日期结果所在列
Const writeCol1        As Integer = 9          'Data1统计结果列
Const writeCol2        As Integer = 10         'Data2统计结果列
Const writeCol3        As Integer = 11         'Data3结果列
Const writeCol4        As Integer = 12         'Data4结果列
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

- **步骤3**: 中位数统计计算

:::: code-group
::: code-group-item JS

```js
function GetMedian(dataArray,eleSize){
	let temp=0,medianData=0,index=0;
	for(let i = 0;i<eleSize;i++)
	{
	    for(let j=i+1;j<eleSize;j++)
	    {
	    	if (dataArray[i] > dataArray[j])
	    	{
	    		temp = dataArray[i];
			    dataArray[i] = dataArray[j];
			    dataArray[j] = temp;
	    	}
	    }
	}
	
	if (eleSize% 2 === 0)    //偶数
	{
		index = eleSize / 2;
	    medianData = (dataArray[index - 1] + dataArray[index]) / 2;
	}
	else //奇数
	{
		index = (eleSize + 1) / 2 - 1;
	    medianData = dataArray[index];
	}
	return medianData;
}
```

:::

::: code-group-item VBA

```vb
'***********
'获取中位数计算
'data   :存储的元素数组
'eleSize:元素个数
'***********
Private Function GetMedianData(ByRef data() As Double, ByVal eleSize As Integer) As Double
Dim i, j, index As Long
Dim temp As Double
Dim max  As Long
For i = 0 To eleSize
    For j = i + 1 To eleSize
        If (data(i) > data(j)) Then
            temp = data(i)
            data(i) = data(j)
            data(j) = temp
        End If
    Next j
Next i

If (eleSize Mod 2 = 0) Then   '偶数
    index = (eleSize / 2)
    GetMedianData = (data(index - 1) + data(index)) / 2
Else '奇数
    index = (eleSize + 1) / 2 - 1
    GetMedianData = data(index)
End If
End Function
```

:::
::::

- **步骤4**: 统计计算

:::: code-group
::: code-group-item JS

```js

```

:::

::: code-group-item VBA

```vb

'***
'Data1~Data4：对应数据采集的动态数组
'****
For i = readRow To MaxRow Step 1
    currentKey = ActiveSheet.Cells.item(i, readDateCol).Value2
    Data1Val = ActiveSheet.Cells.item(i, readCol1).Value2
    Data2Val = ActiveSheet.Cells.item(i, readCol2).Value2
    Data3Val = ActiveSheet.Cells.item(i, readCol3).Value2
    Data4Val = ActiveSheet.Cells.item(i, readCol4).Value2
            
    If currentKey = "" Then
        bEnd = True
        GoTo goNext
    End If

    If tempKey <> "" And tempKey <> currentKey Then
goNext:
        If bEnd And Data1 <> 0 And Data2 <> 0 And Data3<> 0 And Data4 <> 0 Then
            Data1(index) = Data1Val
            Data2(index) = Data2Val
            Data3(index) = Data3Val
            Data4(index) = Data4Val
            index = index + 1
        End If
        '统计结果
        ActiveSheet.Cells.item(writeIndex, writeDateCol).Value2 = tempKey
        Data1Val = Round(GetMedian(Data1, index), 2)
        Data2Val = Round(GetMedian(Data2, index), 2)
        Data3Val = Round(GetMedian(Data3, index), 2)
        Data4Val = Round(GetMedian(Data4, index), 2)
        If Data1Val <> 0 And Data2Val <> 0 And Data3Val <> 0 And Data4Val <> 0 Then
            ActiveSheet.Cells.item(writeIndex, writeCol1).Value2 = Data1Val
            ActiveSheet.Cells.item(writeIndex, writeCol2).Value2 = Data2Val
            ActiveSheet.Cells.item(writeIndex, writeCol3).Value2 = Data3Val
            ActiveSheet.Cells.item(writeIndex, writeCol4).Value2 = Data4Val
        end if
        
        capacity = 20
        ReDim Data1(capacity)
        ReDim Data2(capacity)
        ReDim Data3(capacity)
        ReDim Data4(capacity)
        
        writeIndex = writeIndex + 1
        tempKey = ""
        index = 0
        bEnd = False
        Data1(index) = ActiveSheet.Cells.item(i, readCol1).Value2
        Data2(index) = ActiveSheet.Cells.item(i, readCol2).Value2
        Data3(index) = ActiveSheet.Cells.item(i, readCol3).Value2
        Data4(index) = ActiveSheet.Cells.item(i, readCol4).Value2
        index = 1
    Else
        tempKey = currentKey
        Data1(index) = ActiveSheet.Cells.item(i, readCol1).Value2
        Data2(index) = ActiveSheet.Cells.item(i, readCol2).Value2
        Data3(index) = ActiveSheet.Cells.item(i, readCol3).Value2
        Data4(index) = ActiveSheet.Cells.item(i, readCol4).Value2
        index = index + 1
    End If
    
    If (index Mod 20 = 0) Then 
        capacity = capacity + 20
        ReDim Preserve Data1(capacity)
        ReDim Preserve Data2(capacity)
        ReDim Preserve Data3(capacity)
        ReDim Preserve Data4(capacity)
    End If
Next i
```

:::
::::