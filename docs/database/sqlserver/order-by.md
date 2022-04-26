# [ORDER BY](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/select-order-by-clause-transact-sql?view=sql-server-ver15)

ORDER BY 关键字用于对结果集进行排序

ORDER BY 关键字默认按照升序对记录进行排序。如果需要按照降序对记录进行排序，可以使用DESC关键字。

- 语法

```sql
SELECT column_name,column_name 
FROM table_name 
ORDER BY column_name,column_name ASC|DESC;
```

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表中选取所有记录，并按照“alexa”列排序

```sql
SELECT * FROM WebSites ORDER BY alexa;
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|4|Facebook|<https://www.facebook.com/>|3|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|

下面的SQL语句从“WebSites”表中选取所有记录，并按照“alexa”列降序排序

```sql
SELECT * FROM WebSites ORDER BY alexa DESC;
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|
|1|Google|<https://www.google.com/>|1|USA|

下面的SQL语句从“WebSites”表中选取所有记录，并按照“country”和“alexa”列排序

```sql
SELECT * FROM WebSites ORDER BY country,alexa;
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|1|Google|<https://www.google.com/>|1|USA|
|4|Facebook|<https://www.facebook.com/>|3|USA|
