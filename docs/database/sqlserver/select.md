# [SELECT](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/select-transact-sql?view=sql-server-ver15)

SELECT语句用于从数据库中选取数据。
结果被存储在一个结果表中，称为结果集。

::: tip
SELECT 语句的处理顺序
以下步骤显示 SELECT 语句的处理顺序。

1. FROM

2. ON

3. JOIN

4. WHERE

5. GROUP BY

6. WITH CUBE 或 WITH ROLLUP

7. HAVING

8. SELECT

9. DISTINCT

10. ORDER BY

11. TOP

:::

- 语法

::::  code-group
::: code-group-item select column_name

```sql
SELECT column_name(s) FROM table_name;
```

:::
::: code-group-item select all

```sql
--  查询所有列,少用 *
SELECT * FROM table_name;
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

下面的SQL语句从“WebSites”表中选取“name”,"country"列

```sql
SELECT NAME,COUNTRY FROM WebSites;
```

输出结果为：
|name|country|
|:-|:-|
|Google|USA|
|TaoBao|CN|
|WeiBo|CN|
|Facebook|USA|

### [SELECT DISTINCT](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/select-clause-transact-sql?view=sql-server-ver15)

SELECT DISTINCT 语句用于返回唯一不同的值。

- 语法

```sql
SELECT DISTINCT column_name(s) FROM table_name;
```

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表的“country”列中选取唯一不同的值，也就是去掉“country”列重复值

```sql
SELECT DISTINCT COUNTRY FROM WebSites;
```

输出结果为：

|country|
|:-|
|USA|
|CN|

### [SELECT TOP](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/top-transact-sql?view=sql-server-ver15)

SELECT TOP 子句用于规定要返回的记录的数目。

- 语法

```sql
SELECT TOP number|percent column_name(s)
FROM table_name;
```

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表中前面百分之50的记录

```sql
SELECT TOP 50 PERCENT * FROM WebSites;
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|

下面的SQL语句从“WebSites”表中前3条的记录

```sql
SELECT TOP 3 * FROM WebSites;
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|

### [SELECT INTO](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/select-into-clause-transact-sql?view=sql-server-ver15)

SELECT...INTO在默认文件组中创建一个新表，并将来自查询的结果行插入该表中。

- 语法

```sql
SELECT column_name(s)
INTO newTable
FROM table_name;
```

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句将“WebSites”表“country”为“CN”值的数据进行备份。

```sql
SELECT * 
INTO WebSitesTemp 
FROM WebSites 
Where country='CN';
```

输出结果为：

`SELECT * FROM WebSitesTemp`
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|

### [ALIAS](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/select-transact-sql?view=sql-server-ver15)

为表名或列名称指定别名

- 语法

:::: code-group
::: code-group-item column alias

```sql
SELECT column as alias_name
FROM table_name
```

:::
::: code-group-item table alias

```sql
SELECT column_name(s)
FROM table_name as alias_name
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

下面的SQL语句从“WebSites”表中将"name"列名改为“n”,将"country"列名改为“c”并查询所有记录

```sql
SELECT name AS c,country AS c FROM WebSites;
```

输出结果为：

|n|c|
|:-|:-|
|Google|USA|
|TaoBao|CN|
|WeiBo|CN|
|Facebook|USA|
