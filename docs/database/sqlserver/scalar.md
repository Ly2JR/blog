# Scalar函数

## UPPER

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
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

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

## LOWER

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
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

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

## SUBSTRING

SUBSTRING()函数用于返回SQL Server中字符、二进制文本、文本或图像表达式的一部分。

::: warning
start:指定返回字符的起始位置的整数或 bigint 表达式 。 （编号从 1 开始，意味着表达式中的第一个字符为 1）。 如果 start 小于 1，则返回的表达式的起始位置为表达式中指定的第一个字符 。 在这种情况下，返回的字符数是起始长度为-1 或0的总和的最大值。 如果 start 大于值表达式中的字符数，将返回一个零长度的表达式 。
:::

- 语法

```sql
SUBSTRING(expression,start,length)
```

- 演示

下面是"Websites"表的数据

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

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

## LEN

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
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

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

## ROUND

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
