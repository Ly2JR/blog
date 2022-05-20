# [UNION](https://docs.microsoft.com/zh-cn/sql/t-sql/language-elements/set-operators-union-transact-sql?view=sql-server-ver15)

UNION操作符合并两个或多个SELECT语句的结果集

::: warning
UNION 内部的每个SELECT语句必须拥有相同数据的列。列也必须拥有相似的数据类型。同时，每个SELECT语句中的列的顺序必须相同
:::

- 语法

:::: code-group
::: code-group-item UNION

```sql
--结果集不重复
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
```

:::
::: code-group-item UNION ALL

```sql
--结果集重复
SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;
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

“Apps”表数据
|id|app_name|url|country|
|:-|:-|:-|:-|
|1|QQ APP|<https://im.qq.com/>|CN|
|2|TaoBao APP|<https://www.taobao.com/>|CN|

下面的SQL语句将“WebSites”，“Apps”表返回“country”列不同值的所有记录。

```sql
SELECT country FROM WebSites
UNION
SELECT country FROM Apps
```

输出结果为：

|country|
|:-|
|CN|
|USA|

下面的SQL语句将“WebSites”，“Apps”表返回“country”列所有记录。

```sql
SELECT country FROM WebSites
UNION ALL
SELECT country FROM Apps
```

输出结果为：

|country|
|:-|
|USA|
|CN|
|USA|
|CN|
|CN|
|CN|
