# Aggregate函数

## AVG

AVG() 函数返回数值列的平均值

- 语法

``` sql
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

``` sql
SELECT AVG(count) from access_log;
```

输出结果：96.25

## COUNT

COUNT() 函数返回匹配指定条件的行数(NULL不计入)。

- 语法

``` sql
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

``` sql
SELECT COUNT(count) from access_log WHERE site_id=1;
```

输出结果：2

下面的SQL语句从”access_log“表的”site_id“列不相同的总数

``` sql
SELECT COUNT(DISTINCT site_id) from access_log WHERE site_id=1;
```

输出结果：3

## MAX

MAX() 函数返回指定列的最大值。

- 语法

``` sql
SELECT MAX(column_name) FROM table_name;
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

下面的SQL语句从”Websites“表的”alexa“列最大的值。

``` sql
SELECT MAX(alexa) from Websites;
```

输出结果：20

## MIN

MIN() 函数返回指定列的最小值。

- 语法

``` sql
SELECT MIN(column_name) FROM table_name;
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

下面的SQL语句从”Websites“表的”alexa“列最小的值。

``` sql
SELECT MIN(alexa) from Websites;
```

输出结果：1

## SUM

SUM() 函数返回指定列的总数。

- 语法

``` sql
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

``` sql
SELECT SUM(count) from access_log;
```

输出结果：385
