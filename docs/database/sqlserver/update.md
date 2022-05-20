# [UPDATE](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/update-transact-sql?view=sql-server-ver15)

UPDATE语句用于更新表中的记录。

::: warning
WHERE子句规定哪条记录或者哪些记录需要更新。如果忽略了WHERE子句，所有的记录将被更新
:::

- 语法

```sql
UPDATE table_name
SET column1=value1,column2=value2,...
WHERE some_column=some_value;
```

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句将“WebSites”表中当“name”列为“Google”时，把“alexa”排名更新为100，“country”更新为“USA”

```sql
UPDATE Websites
SET alexa='100',country='USA'
WHERE name='google';
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|100|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|
