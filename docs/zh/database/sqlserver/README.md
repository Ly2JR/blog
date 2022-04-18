# 基本语法

  :::: tip
  最新版[Sql Server 2019](https://www.microsoft.com/zh-cn/sql-server/sql-server-downloads)
  ::::

## [SELECT](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/select-transact-sql?view=sql-server-ver15)

SELECT语句用于从数据库中选取数据。
结果被存储在一个结果表中，称为结果集。

:::: tip
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

::::

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

## [WHERE](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/where-transact-sql?view=sql-server-ver15)

WHERE子句用于过滤记录。用于提取那些满足指定条件的记录。

:::: tip
查询条件,文本值需要加单引号`'`,数值不需要
::::

- 语法

```sql
SELECT column_name(s) FROM table_name WHERE column_name operator value;
```

- WHERE子句中的运算符

|操作符|描述|
|:-|:-|
|=|等于|
|<>或！=|不等于|
|>|大于|
|<|小于|
|>=|大于等于|
|<=|小于等于|
|BETWEEN AND|
|LIKE|模式匹配|
|IN|指定针对某个列的多个可能值|

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表中选取"country"列的值为“CN”的所有记录

```sql
SELECT * FROM WebSites WHERE country='CN';
```

输出结果为：
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|

### [AND & OR](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/search-condition-transact-sql?view=sql-server-ver15)

AND & OR 运算符用于基于一个以上的条件对记录进行过滤。

如果第一个条件和第二个条件成立，则AND运算符显示一条记录。

如果第一个条件和第二个条件只要有一个成立，则Or运算显示一条记录。

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表中选取"country"列的值为“CN”且Alexa排名大于等于“20”的所有记录

```sql
SELECT * FROM WebSites WHERE country='CN' AND alexa>=20;
```

输出结果为：
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|3|WeiBo|<https://www.weibo.com/>|20|CN|

下面的SQL语句从“WebSites”表中选取"country"列为“CN”或“USA”的所有记录

```sql
SELECT * FROM WebSites WHERE country='CN' OR country='USA';
```

输出结果为：
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“Websites”表中选取alexa列排名大于“15”且country列为“CN”或“USA”的所有记录

```sql
SELECT * FROM WebSites WHERE (country='CN' OR country='USA') AND alexa>15;
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|3|WeiBo|<https://www.weibo.com/>|20|CN|

### [IN](https://docs.microsoft.com/zh-cn/sql/t-sql/language-elements/in-transact-sql?view=sql-server-ver15)

IN操作符允许您在WHERE子句中规定多个值

- 语法

```sql
SELECT coulmn_name(s)
FROM table_name
WHERE column_name in (value1,value2,...)
```

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表中选取“name”列值为“google”或"facebook"的所有记录

```sql
SELECT * FROM WebSites
WHERE name IN ('google','facebook')
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|4|Facebook|<https://www.facebook.com/>|3|USA|

### [BETWEEN](https://docs.microsoft.com/zh-cn/sql/t-sql/language-elements/between-transact-sql?view=sql-server-ver15)

BETWEEN操作符用于选取介于两个值之间的数据范围内的值。这些值可以是数值、文本或日期。

::::warning
BETWEEN AND 在不同版本的数据库中边界问题可能不同，需要自己检测。
::::

- 语法

```sql
SELECT coulmn_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表中选取“alexa”列值在1和10之间的所有记录

```sql
SELECT * FROM WebSites
WHERE alexa BETWEEN 1 AND 10
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表中选取“alexa”列值不在1和10之间的所有记录

```sql
SELECT * FROM WebSites
WHERE alexa NOT BETWEEN 1 AND 10
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|

下面的SQL语句从“WebSites”表中选取“alexa”列值在1和20之间但”country”列值不为“USA”的所有记录

```sql
SELECT * FROM WebSites
WHERE alexa NOT BETWEEN 1 AND 20
AND country not in ('USA')
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|

下面的SQL语句从“WebSites”表中选取“NAME”列值在字母“A”和“H”之间的所有记录

```sql
SELECT * FROM WebSites
WHERE name BETWEEN 'A' AND 'H'
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表中选取“NAME”列值不在字母“A”和“H”之间的所有记录

```sql
SELECT * FROM WebSites
WHERE name NOT BETWEEN 'A' AND 'H'
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|

### [LIKE](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/search-condition-transact-sql?view=sql-server-ver15)

LIKE操作符用于在WHERE子句中搜索列中的指定模式。

- 语法

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name LIKE pattern;
```

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表中选取“name”列值以字母“G”开头的所有记录

```sql
SELECT * FROM WebSites
WHERE name LIKE 'G%'
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|

下面的SQL语句从“WebSites”表中选取“name”列值以字母“k”结尾的所有记录

```sql
SELECT * FROM WebSites
WHERE name LIKE '%k'
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|54|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表中选取“name”列值包含字母“oo”的所有记录

```sql
SELECT * FROM WebSites
WHERE name LIKE '%oo%'
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表中选取“name”列值不包含字母“oo”的所有记录

```sql
SELECT * FROM WebSites
WHERE name NOT LIKE '%oo%'
```

输出结果为：
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|

### [通配符](https://docs.microsoft.com/zh-cn/sql/t-sql/language-elements/like-transact-sql?view=sql-server-ver15)

通配符可用于替代字符串中的任何其他字符，与LIKE 操作符一起使用。

|通配符|描述|
|:-|:-|
|%|包含零个或多个字符的任意字符串|
|_(下划线)|任何单个字符|
|[]|指定范围([a-f])或集合([abcdef]中的任何单个字符)|
|[^]|不属于指定范围([a-f])或集合([abcdef])的任何单个字符|

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表中选取“name”列值以一个任意字符开始，然后是“oogle”的所有记录

```sql
SELECT * FROM WebSites
WHERE name LIKE '_oogle'
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|

下面的SQL语句从“WebSites”表中选取“name”列值以字母“G”开始，然后是一个任意字符，然后是“o”，然后是一个任意字符，然后是“le”的所有记录

```sql
SELECT * FROM WebSites
WHERE name LIKE 'G_o_le'
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|

下面的SQL语句从“WebSites”表中选取“name”列值以字母”A“到字母”H“开始的所有记录

```sql
SELECT * FROM WebSites
WHERE name LIKE '[A-H]%'
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|4|Facebook|<https://www.facebook.com/>|3|USA|

下面的SQL语句从“WebSites”表中选取“name”列值不以字母”A“到字母”H“开始的所有记录

```sql
SELECT * FROM WebSites
WHERE name LIKE '[^A-H]%'
```

输出结果为：
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|

## [ORDER BY](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/select-order-by-clause-transact-sql?view=sql-server-ver15)

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

## [INSERT INTO](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/insert-transact-sql?view=sql-server-ver15)

INSERT INTO 语句用于向表中插入新记录。

:::: tip

INSERT INTO SELECT：

将SELECT查询出来的结果集INSERT INTO 表中，按列的顺序批量插入。INSERT INTO 表真实存在。

示例：insert into WebSites(name,url,country) select 'baidu','https://www.baidu.com/','CN'

SELECT INTO FROM：

将SELECT查询出的结果集插入INTO 表中，INTO 表不存在，一般做零时表使用。

示例：SELECT name,url,country INTO temp FROM Websites;

::::

- 语法

:::: code-group

::: code-group-item insert into columns

```sql
INSERT INTO table_name(column1,column2,column3,...)
VALUES(value1,value2,value3,...);
```

:::

::: code-group-item insert into

```sql
-- 不推荐使用这种写法
INSERT INTO table_name
VALUES(value1,value2,value3,...);
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

下面的SQL语句向“WebSites”表中插入一条新记录

```sql
INSERT INTO Websites(name,url,alexa,country)
VALUES('BaiDu','https://www.baidu.com/','40','CN');
```

输出结果为：

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|
|5|BaiDu|https://www.baidu.com/|40|CN|

### [INSERT INTO SELECT](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/insert-transact-sql?view=sql-server-ver15#OtherTables)

INSERT INTO SELECT语句从一个表复制数据，然后把结果集插入到一个已存在的表中。目标表中任何已存在的行都不会受影响

- 语法

```sql
INSERT INTO table_name1(column_name(s))
SELECT column_names FROM table_name2;
```

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

下面的SQL语句将“Apps”表结果插入到“WebSites”表中。

```sql
INSERT INTO WebSites(name,url,country)
SELECT name,url,country FROM Apps;
```

输出结果为：`SELECT * FROM WebSites`

|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|100|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|20|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|
|5|QQ APP|<https://im.qq.com/>|NULL|CN|
|6|TaoBao APP|<https://www.taobao.com/>|NULL|CN|

## [UPDATE](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/update-transact-sql?view=sql-server-ver15)

UPDATE语句用于更新表中的记录。

:::: warning
WHERE子句规定哪条记录或者哪些记录需要更新。如果忽略了WHERE子句，所有的记录将被更新
::::

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

## [DELETE](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/truncate-table-transact-sql?redirectedfrom=MSDN&view=sql-server-ver15)

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

## [JOIN](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/from-transact-sql?view=sql-server-ver15)

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

  :::: warning
  交叉联接查询中缺少`ON`子句。
  ::::

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

## [UNION](https://docs.microsoft.com/zh-cn/sql/t-sql/language-elements/set-operators-union-transact-sql?view=sql-server-ver15)

UNION操作符合并两个或多个SELECT语句的结果集

::::warning
UNION 内部的每个SELECT语句必须拥有相同数据的列。列也必须拥有相似的数据类型。同时，每个SELECT语句中的列的顺序必须相同
::::

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
