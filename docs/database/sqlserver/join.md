# [JOIN](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/from-transact-sql?view=sql-server-ver15)

JOIN用于把来自两个或者多个表的记录集合记录。

联接使用以下Transact-SQL语法以逻辑方式表示：

- INNER JOIN

  指定返回所有匹配的记录。放弃两个表中不匹配的记录。如果未指定任何链接类型，此设置为默认设置。

- LEFT [OUTER] JOIN

  即使右表中没有匹配，也从左表返回所有的记录

- RIGHT [OUTER] JOIN

  即使左表中没有任何匹配，也在右表中返回所有的记录

- FULL [OUTER] JOIN

  指定在结果集中包括左表或右表中部满足链接条件的行，并将对应于另一个表的输出列设为NULL。这是对通常由INNER JOIN返回的所有行的补充。

- CROSS JOIN

  ::: warning
  交叉联接查询中缺少`ON`子句。
  :::

  指定两个表的叉积。返回相同的行。

### INNER JOIN

- 语法

```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name=table2.column_name,...;
```

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

“Access_Log”表数据
|id|siteid|count|latestdate|
|:-|:-|:-|:-|
|1|1|50|2015-01-01|
|2|4|63|2016-01-01|
|3|2|42|2017-01-01|

下面的SQL语句将“WebSites”，“Access_Log”表内联接查询返回所有记录

```sql
SELECT WebSites.name,Access_Log.count,Access_Log.latestdate
FROM WebSites
INNER JOIN Access_Log
ON WebSites.id=Access_Log.siteid
ORDER BY Access_Log.Count;
```

输出结果为：

|name|count|latestdate|
|:-|:-|:-|
|TaoBao|42|2017-01-01|
|Google|50|2015-01-01|
|Facebook|63|2016-01-01|

### LEFT JOIN

- 语法

```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name=table2.column_name,...;
```

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

“Access_Log”表数据
|id|siteid|count|latestdate|
|:-|:-|:-|:-|
|1|1|50|2015-01-01|
|2|4|63|2016-01-01|
|3|2|42|2017-01-01|

下面的SQL语句将“WebSites”，“Access_Log”表左联接查询返回所有记录

```sql
SELECT WebSites.name,Access_Log.count,Access_Log.latestdate
FROM WebSites
LEFT JOIN Access_Log
ON WebSites.id=Access_Log.siteid
ORDER BY Access_Log.Count desc;
```

输出结果为：

|name|count|latestdate|
|:-|:-|:-|
|Facebook|63|2016-01-01|
|Google|50|2015-01-01|
|TaoBao|42|2017-01-01|
|WeiBo|null|null|

### RIGHT JOIN

- 语法

```sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name=table2.column_name,...;
```

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

“Access_Log”表数据
|id|siteid|count|latestdate|
|:-|:-|:-|:-|
|1|1|50|2015-01-01|
|2|4|63|2016-01-01|
|3|2|42|2017-01-01|

下面的SQL语句将“WebSites”，“Access_Log”表右联接查询返回所有记录

```sql
SELECT WebSites.name,Access_Log.count,Access_Log.latestdate
FROM WebSites
RIGHT JOIN Access_Log
ON WebSites.id=Access_Log.siteid
ORDER BY Access_Log.Count desc;
```

输出结果为：

|name|count|latestdate|
|:-|:-|:-|
|Facebook|63|2016-01-01|
|Google|50|2015-01-01|
|TaoBao|42|2017-01-01|

### FULL JOIN

- 语法

```sql
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name=table2.column_name,...;
```

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

“Access_Log”表数据
|id|siteid|count|latestdate|
|:-|:-|:-|:-|
|1|1|50|2015-01-01|
|2|4|63|2016-01-01|
|3|2|42|2017-01-01|

下面的SQL语句将“WebSites”，“Access_Log”表全联接查询返回所有记录

```sql
SELECT WebSites.name,Access_Log.count,Access_Log.latestdate
FROM WebSites
FULL OUTER JOIN Access_Log
ON WebSites.id=Access_Log.siteid
ORDER BY Access_Log.Count desc;
```

输出结果为：

|name|count|latestdate|
|:-|:-|:-|
|Facebook|63|2016-01-01|
|Google|50|2015-01-01|
|TaoBao|42|2017-01-01|
|WeiBo|null|null|

### CROSS JOIN

- 语法

```sql
SELECT column_name(s)
FROM table1
CROSS JOIN table2
```

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

“Access_Log”表数据
|id|siteid|count|latestdate|
|:-|:-|:-|:-|
|1|1|50|2015-01-01|
|2|4|63|2016-01-01|
|3|2|42|2017-01-01|

下面的SQL语句将“WebSites”，“Access_Log”表交叉联接查询返回所有记录

```sql
SELECT WebSites.name,Access_Log.count,Access_Log.latestdate
FROM WebSites
CROSS JOIN Access_Log
ON WebSites.id=Access_Log.siteid
ORDER BY Access_Log.Count desc;
```

输出结果为：

|name|count|latestdate|
|:-|:-|:-|
|Google|63|2016-01-01|
|Google|50|2015-01-01|
|Google|42|2017-01-01|
|TaoBao|63|2016-01-01|
|TaoBao|50|2015-01-01|
|TaoBao|42|2017-01-01|
|WeiBo|63|2016-01-01|
|WeiBo|50|2015-01-01|
|WeiBo|42|2017-01-01|
|Facebook|63|2016-01-01|
|Facebook|50|2015-01-01|
|Facebook|42|2017-01-01|
