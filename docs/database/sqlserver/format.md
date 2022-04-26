# FORMAT

返回以指定的格式和可选的区域性格式化的值。 使用 FORMAT 函数将日期/时间和数字值格式化为识别区域设置的字符串。 对于一般的数据类型转换，请使用 CAST 或 CONVERT。

- 语法

```sql
FORMAT( value, format [, culture ] )  
```

- 参数

*value*
支持格式化的数据类型的表达式。 有关有效类型的列表，请参阅下面“备注”部分中的表。

*format*
nvarchar 格式模式 。

format 参数必须包含一个有效的 .NET Framework 格式字符串，要么作为标准格式字符串（例如，“C”或“D”），要么作为日期值和数值的自定义字符模式（例如，“MMMM DD, yyyy (dddd)”） 。 不支持组合格式。 有关这些格式模式的完整解释，请查阅有关常规字符串格式、自定义日期和时间格式以及自定义数字格式的 .NET Framework 文档。 一个好的起点是主题“格式类型”。

*区域性*
指定区域性的可选 nvarchar 参数 。

如果未提供 culture 参数，则使用当前会话的语言 。 可以使用 SET LANGUAGE 语句隐式或显式设置此语言。 culture接受 .NET Framework 支持的任何区域性作为参数; 它并不限于 SQL Server 显式支持的语言。 如果 culture 参数无效，FORMAT 将引发错误 。

- 演示

```sql
DECLARE @d DATE = '11/22/2020';
SELECT FORMAT( @d, 'd', 'en-US' ) 'US English'  
      ,FORMAT( @d, 'd', 'en-gb' ) 'Great Britain English'  
      ,FORMAT( @d, 'd', 'de-de' ) 'German'  
      ,FORMAT( @d, 'd', 'zh-cn' ) 'Simplified Chinese (PRC)';  
  
SELECT FORMAT( @d, 'D', 'en-US' ) 'US English'  
      ,FORMAT( @d, 'D', 'en-gb' ) 'Great Britain English'  
      ,FORMAT( @d, 'D', 'de-de' ) 'German'  
      ,FORMAT( @d, 'D', 'zh-cn' ) 'Chinese (Simplified PRC)'; 
```

结果如下：

|US English|Great Britain English|German|Simplified Chinese (PRC)|
|:-|:-|:-|:-|
|11/22/2020|22/11/2020|22.11.2020|2020-11-22|

|US English|Great Britain English|German|Chinese (Simplified PRC)|
|:-|:-|:-|:-|
|Sunday, November 22, 2020|22 November 2020|Sonntag, 22. November 2020|2020年11月22日|
