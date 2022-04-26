# [DELETE](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/truncate-table-transact-sql?redirectedfrom=MSDN&view=sql-server-ver15)

DELETE语句用于删除表中的记录

:::: warning
WHERE子句规定哪条记录或者哪些记录需要删除。如果忽略了WHERE子句，所有的记录将被删除
::::

- 语法

```sql
DELETE FROM table_name
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

下面的SQL语句将“WebSites”表中当“name”列值为“facebook”时的记录删除

```sql
DELETE FROM Websites
WHERE name='facebook';
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|

下面的SQL语句在不删除表的情况下，删除“WebSites”表中所有的记录，意味着表结构、属性、索引将保持不变

```sql
DELETE FROM table_name;
```

下面的SQL语句在不删除表的情况下，快速删除“WebSites”表中所有的记录，意味着表结构、属性、索引将保持不变

```sql
TRUNCATE FROM table_name;
```
