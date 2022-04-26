# [INSERT INTO](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/insert-transact-sql?view=sql-server-ver15)

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
|5|BaiDu|<https://www.baidu.com/>|40|CN|

## [INSERT INTO SELECT](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/insert-transact-sql?view=sql-server-ver15#OtherTables)

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
