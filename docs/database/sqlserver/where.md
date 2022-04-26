# [WHERE](https://docs.microsoft.com/zh-cn/sql/t-sql/queries/where-transact-sql?view=sql-server-ver15)

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

