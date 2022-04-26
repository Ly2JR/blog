# GROUP BY

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
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

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
