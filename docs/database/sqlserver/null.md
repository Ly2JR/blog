
# [NULL](<https://docs.microsoft.com/zh-cn/sql/t-sql/language-elements/null-and-unknown-transact-sql?view=sql-server-ver15>)

NULL值代表遗漏的未知数据。

默认地，表的列可以存放NULL值。

如果表中的某个列是可选的，那么在不向该列添加值的情况下插入新记录或者更新已有的记录。这意味着该字段将以NULL值保存。

NULL值的处理方式与其他值不同。

NULL用户未知的或不适用的值的占位符

::: warning
NULL无法与除本身之外的其他值比较；它们是不等价的。

可以通过ISNULL()函数设置一个默认值。
:::

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|3|WeiBo|<https://www.weibo.com/>|NULL|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|
|5|QQ|<https://www.QQ.com/>|NULL|CN|

下面的SQL语句通过`IS NULL`、`IS NOT NULL`、`ISNULL`方式对”alexa“列进行查询。

```sql
--IS NULL
SELECT * FROM  WebSites WHERE alexa IS NULL
```

结果集如下所示：
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|3|WeiBo|<https://www.weibo.com/>|NULL|CN|
|5|QQ|<https://www.QQ.com/>|NULL|CN|

```sql
--IS NOT NULL
SELECT * FROM  WebSites WHERE alexa IS NOT NULL
```

结果集如下所示：
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|<https://www.google.com/>|1|USA|
|2|TaoBao|<https://www.taobao.com/>|13|CN|
|4|Facebook|<https://www.facebook.com/>|3|USA|

```sql
--ISNULL
SELECT * FROM  WebSites WHERE ISNULL(alexa,0)=0
```

结果集如下所示：
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|3|WeiBo|<https://www.weibo.com/>|NULL|CN|
|5|QQ|<https://www.QQ.com/>|NULL|CN|
