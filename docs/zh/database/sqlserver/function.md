# 函数

SQL拥有很多可用于计算的内置函数

## Aggregate函数

### AVG

AVG() 函数返回数值列的平均值

- 语法

```sql
SELECT AVG(column_name) FROM table_name;
```

- 演示

下面是"access_log"表的数据

|aid|site_id|count|date|
|:-|:-|:-|:-|
|1|1|45|2016-05-10|
|2|3|100|2016-05-13|
|3|1|230|2016-05-14|
|4|2|10|2016-05-14|

下面的SQL语句从”access_log“表的”count“列获取平均值

```sql
SELECT AVG(count) from access_log;
```

输出结果：96.25

### COUNT

COUNT() 函数返回匹配指定条件的行数(NULL不计入)。

- 语法

```sql
SELECT COUNT(column_name) FROM table_name;
```

- 演示

下面是"access_log"表的数据

|aid|site_id|count|date|
|:-|:-|:-|:-|
|1|1|45|2016-05-10|
|2|3|100|2016-05-13|
|3|1|230|2016-05-14|
|4|2|10|2016-05-14|

下面的SQL语句从”access_log“表的”site_id“列等于1的总数

```sql
SELECT COUNT(count) from access_log WHERE site_id=1;
```

输出结果：2

下面的SQL语句从”access_log“表的”site_id“列不相同的总数

```sql
SELECT COUNT(DISTINCT site_id) from access_log WHERE site_id=1;
```

输出结果：3

### MAX

MAX() 函数返回指定列的最大值。

- 语法

```sql
SELECT MAX(column_name) FROM table_name;
```

- 演示

下面是"Websites"表的数据

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|https://www.google.com/|1|USA|
|2|TaoBao|https://www.taobao.com/|13|CN|
|3|WeiBo|https://www.weibo.com/|20|CN|
|4|Facebook|https://www.facebook.com/|3|USA|

下面的SQL语句从”Websites“表的”alexa“列最大的值。

```sql
SELECT MAX(alexa) from Websites;
```

输出结果：20

### MIN

MIN() 函数返回指定列的最小值。

- 语法

```sql
SELECT MIN(column_name) FROM table_name;
```

- 演示

下面是"Websites"表的数据

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|https://www.google.com/|1|USA|
|2|TaoBao|https://www.taobao.com/|13|CN|
|3|WeiBo|https://www.weibo.com/|20|CN|
|4|Facebook|https://www.facebook.com/|3|USA|

下面的SQL语句从”Websites“表的”alexa“列最小的值。

```sql
SELECT MIN(alexa) from Websites;
```

输出结果：1

### SUM

SUM() 函数返回指定列的总数。

- 语法

```sql
SELECT SUM(column_name) FROM table_name;
```

- 演示

下面是"access_log"表的数据

|aid|site_id|count|date|
|:-|:-|:-|:-|
|1|1|45|2016-05-10|
|2|3|100|2016-05-13|
|3|1|230|2016-05-14|
|4|2|10|2016-05-14|

下面的SQL语句从”Websites“表的”count“列总数。

```sql
SELECT SUM(count) from access_log;
```

输出结果：385

## Scalar函数

### UPPER

UPPER()函数把字段的值转换为大写。

- 语法

```sql
SELECT UPPER(column_name) FROM table_name;
```

- 演示

下面是"Websites"表的数据

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|https://www.google.com/|1|USA|
|2|TaoBao|https://www.taobao.com/|13|CN|
|3|WeiBo|https://www.weibo.com/|20|CN|
|4|Facebook|https://www.facebook.com/|3|USA|


下面的SQL语句从”Websites“表对”name“列的值转换为大写。

```sql
SELECT UPPER(name) site_title FROM WebSites;
```

输出结果如下:
|site_title|
|:-|
|GOOGLE|
|TAOBAO|
|WEIBO|
|FACEBOOK|


### LOWER

LOWER()函数把字段的值转换为小写。

- 语法

```sql
SELECT LOWER(column_name) FROM table_name;
```

- 演示

下面是"Websites"表的数据

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|https://www.google.com/|1|USA|
|2|TaoBao|https://www.taobao.com/|13|CN|
|3|WeiBo|https://www.weibo.com/|20|CN|
|4|Facebook|https://www.facebook.com/|3|USA|


下面的SQL语句从”Websites“表对”name“列的值转换为小写。

```sql
SELECT LOWER(name) site_title FROM WebSites;
```

输出结果如下:
|site_title|
|:-|
|google|
|taobao|
|weibo|
|facebook|

### SUBSTRING

SUBSTRING()函数用于返回SQL Server中字符、二进制文本、文本或图像表达式的一部分。

:::: warning
start:指定返回字符的起始位置的整数或 bigint 表达式 。 （编号从 1 开始，意味着表达式中的第一个字符为 1）。 如果 start 小于 1，则返回的表达式的起始位置为表达式中指定的第一个字符 。 在这种情况下，返回的字符数是起始长度为-1 或0的总和的最大值。 如果 start 大于值表达式中的字符数，将返回一个零长度的表达式 。
::::

- 语法

```sql
SUBSTRING(expression,start,length)
```

- 演示

下面是"Websites"表的数据

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|https://www.google.com/|1|USA|
|2|TaoBao|https://www.taobao.com/|13|CN|
|3|WeiBo|https://www.weibo.com/|20|CN|
|4|Facebook|https://www.facebook.com/|3|USA|


下面的SQL语句从”Websites“表对”name“列的前4个字符。

```sql
SELECT SUBSTRING(name,1,4) site_title FROM WebSites;
```

输出结果如下:
|site_title|
|:-|
|goog|
|taob|
|weib|
|face|

### LEN

LEN()函数返回文本字段中值的长度。

- 语法

```sql
SELECT LEN(column_name) FROM table_name;
```

- 演示

下面是"Websites"表的数据

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|https://www.google.com/|1|USA|
|2|TaoBao|https://www.taobao.com/|13|CN|
|3|WeiBo|https://www.weibo.com/|20|CN|
|4|Facebook|https://www.facebook.com/|3|USA|


下面的SQL语句从”Websites“表对”name“列值的长度。

```sql
SELECT name,LEN(name) name_length FROM WebSites;
```

输出结果如下:
|name|name_length|
|:-|:-|
|Google|6|
|TaoBao|6|
|WeiBo|5|
|Facebook|8|

### ROUND

ROUND()函数返回一共数值，舍入到指定的长度或精度。

- 语法

```sql
ROUND(numeric_expression,length[,function])
```

*numeric_expression*
是精确或近似数值数据类型类别（bit 数据类型除外）的表达式。

*length*
它是 numeric_expression 的舍入精度。 length 必须是 tinyint、smallint 或 int 类型的表达式 。如果 length 为正数，则将 numeric_expression 舍入到 length 指定的小数位数 。 如果 length 为负数，则将 numeric_expression 小数点左边部分舍入到 length 指定的长度。

*函数*
要执行的操作的类型。 function 的数据类型必须是 tinyint、smallint 或 int 。如果 function 省略或其值为 0（默认值），则对 numeric_expression 进行舍入。 如果指定了 0 以外的值，则将截断 numeric_expression。

- 演示

ROUND始终返回一个值。如果length为负数，并且大于小数点前的数字个数，则ROUND将返回0。

|示例|结果|
|:-|:-|
|ROUND(748.58,-4)|0|

如果length为负数，则无论什么数据类型，ROUND都将返回一共舍入的numeric_expression

|示例|结果|
|:-|:-|
|ROUND(748.58,-1)|750.00|
|ROUND(748.58,-2)|700.00|
|ROUND(748.58,-3)|导致算术溢出，因为748.58默认为decimal(5,2),它无法返回1000.00|
|若要向上舍入到4位，请更改输入的数据类型。例如:SELECT ROUND(CAST(748.58 AS decimal(6,2)),3)|

## GROUP BY 

GROUP BY语句用于结合聚合函数，根据一个或多个列对结果集进行分组。

- 语法

```sql
SELECT column_name,aggregate_function(column_name)
FROM table_name;
WHERE column_name operator value
GROUP BY column_name;
```

- 演示

下面是"Websites"表的数据

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|https://www.google.com/|1|USA|
|2|TaoBao|https://www.taobao.com/|13|CN|
|3|WeiBo|https://www.weibo.com/|20|CN|
|4|Facebook|https://www.facebook.com/|3|USA|

下面是"access_log"表的数据

|aid|site_id|count|date|
|:-|:-|:-|:-|
|1|1|45|2016-05-10|
|2|3|100|2016-05-13|
|3|1|230|2016-05-14|
|4|2|10|2016-05-14|

下面的SQL语句从”Websites“表、”Access_log“表中统计网站访问记录。

```sql
SELECT WebSites.name,count(access_log.aid) as num
FROM Access_Log
LEFT JOIN WebSites
ON Access_Log.site_id=Websites.id
GROUP BY WebSites.name
```

输出结果如下:
|name|num|
|:-|:-|
|Google|2|
|TaoBao|1|
|WeiBo|1|

## HAVING

在SQL中增加HAVING子句原因是，WHERE关键字无法与聚合函数一起使用。
HAVING子句可以让筛选分组后的各组数据

:::: tip
WHERE在Group By前，Having在Group by之后。

聚合函数(avg、sum、max、min、count),不能作为条件放在Where之后，但可以放在Having之后。
::::

- 语法

```sql
SELECT column_name,aggregate_function(column_name)
FROM table_name;
WHERE column_name operator value
GROUP BY column_name
HAVING aggregate_function(column_name) operator value;
```

- 演示

下面是"Websites"表的数据

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|https://www.google.com/|1|USA|
|2|TaoBao|https://www.taobao.com/|13|CN|
|3|WeiBo|https://www.weibo.com/|20|CN|
|4|Facebook|https://www.facebook.com/|3|USA|

下面是"access_log"表的数据

|aid|site_id|count|date|
|:-|:-|:-|:-|
|1|1|45|2016-05-10|
|2|3|101|2016-05-13|
|3|1|230|2016-05-14|
|4|2|10|2016-05-14|

下面的SQL语句从”Websites“表、”Access_log“表中统计网站访问记录大于100的记录。

```sql
SELECT Websites.name,SUM(access_log.count) as nums
FROM Access_Log
LEFT JOIN WebSites
ON Access_Log.site_id=Websites.id
GROUP BY WebSites.name
HAVING SUM(access_log.count)>100
```

输出结果如下:
|name|num|
|:-|:-|
|Google|275|
|WeiBo|101|

## EXISTS

EXISTS运算符用于判断查询子句是否有记录，如果有一条或多条记录存在返回True,否则返回False。

- 语法

```sql
SELECT column_name(s)
FROM table_name
WHERE EXISTS(SELECT column_name FROM table_name WHERE condition);
```

- 演示

下面是"Websites"表的数据

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|https://www.google.com/|1|USA|
|2|TaoBao|https://www.taobao.com/|13|CN|
|3|WeiBo|https://www.weibo.com/|20|CN|
|4|Facebook|https://www.facebook.com/|3|USA|

下面是"access_log"表的数据

|aid|site_id|count|date|
|:-|:-|:-|:-|
|1|1|45|2016-05-10|
|2|3|101|2016-05-13|
|3|1|230|2016-05-14|
|4|2|10|2016-05-14|

下面的SQL语句从”Websites“表、”Access_log“表中统计网站访问记录大于100的记录。

```sql
SELECT Websites.name,Websites.url
FROM WebSites
WHERE EXISTS(SELECT count FROM Access_log WHERE Websites.id=access_log.site_id AND count>100)
```

输出结果如下:
|name|url|
|:-|:-|
|Google|https://www.google.com/|
|WeiBo|https://www.weibo.com/|

下面的SQL语句从”Websites“表、”Access_log“表中统计网站访问记录不大于100的记录。

```sql
SELECT Websites.name,Websites.url
FROM WebSites
WHERE NOT EXISTS(SELECT count FROM Access_log WHERE Websites.id=access_log.site_id AND count>100)
```

输出结果如下:
|name|url|
|:-|:-|
|TaoBao|https://www.taobao.com/|

## FORMAT

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