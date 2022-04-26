# ALTER TABLE

ALTER TABLE语句用于在已有的表中添加、删除或者修改列

- 语法

:::: code-group
::: code-group-item add

```sql
--在已有表中添加新的列
ALTER TABLE table_name
ADD column_name data_type(data_size);

--在已有表中更改列的数据类型
ALTER TABLE table_name
ALTER COLUMN column_name data_type(data_size);
```

:::
:::code-group-item drop

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

:::
::::

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句在已有的“WebSites”表中,添加新的“cMemo”列

```sql
ALTER TABLE WebSites
ADD cMemo nvarchar(255);
```

输出结果为：

|id|name|url|alexa|country|cMemo|
|:-|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|NULL|
|2|TaoBao|<https://www.taobao.com/>|13|CN|NULL|
|3|WeiBo|<https://www.weibo.com/>|20|CN|NULL|
|4|Facebook|<https://www.facebook.com/>|3|USA|NULL|

下面的SQL语句在已存在的“WebSites”表中，改变“cMemo”列的数据类型。

```sql
ALTER TABLE WebSites
ALTER COLUMN cMemo varchar(10);
```

下面的SQL语句在已有的“WebSites”表中,删除“cMemo”列

```sql
ALTER TABLE WebSites
DROP COLUMN cMemo;
```
