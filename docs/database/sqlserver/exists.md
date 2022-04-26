# EXISTS

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
SELECT Websites.name,Websites.url
FROM WebSites
WHERE EXISTS(SELECT count FROM Access_log WHERE Websites.id=access_log.site_id AND count>100)
```

输出结果如下:
|name|url|
|:-|:-|
|Google|<https://www.google.com/>|
|WeiBo|<https://www.weibo.com/>|

下面的SQL语句从”Websites“表、”Access_log“表中统计网站访问记录不大于100的记录。

```sql
SELECT Websites.name,Websites.url
FROM WebSites
WHERE NOT EXISTS(SELECT count FROM Access_log WHERE Websites.id=access_log.site_id AND count>100)
```

输出结果如下:
|name|url|
|:-|:-|
|TaoBao|<https://www.taobao.com/>|
