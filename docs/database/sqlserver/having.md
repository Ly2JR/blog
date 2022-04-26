# HAVING

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
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

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
