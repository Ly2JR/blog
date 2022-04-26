# [DATE](https://docs.microsoft.com/zh-cn/sql/t-sql/functions/date-and-time-data-types-and-functions-transact-sql?view=sql-server-ver15)

当我们处理日期时，最难的任务恐怕是确保所插入的日期的格式，与数据库中日期列的格式相匹配。

只要您的数据包含的只是日期部分，运行查询就不会出现问题。但是如果涉及时间部分，情况就有点复杂了。

在讨论日期查询的复杂性之前，先看看最重要的内建日期处理函数。

- SQL Server Date函数

|函数|描述
|:-|:-|
|[GETDATE()](<https://docs.microsoft.com/zh-cn/sql/t-sql/functions/getdate-transact-sql?view=sql-server-ver15>)|返回当前的日期和时间|
|[DATEPART()](<https://docs.microsoft.com/zh-cn/sql/t-sql/functions/datepart-transact-sql?view=sql-server-ver15>)|返回日期/时间的单独部分|
|[DATEADD()](<https://docs.microsoft.com/zh-cn/sql/t-sql/functions/dateadd-transact-sql?view=sql-server-ver15>)|在日期中添加或减去指定的时间间隔|
|[DATEDIFF()]](<https://docs.microsoft.com/zh-cn/sql/t-sql/functions/datediff-transact-sql?view=sql-server-ver15>)|返回两个日期之间的时间|
|[CONVERT]](<https://docs.microsoft.com/zh-cn/sql/t-sql/functions/cast-and-convert-transact-sql?view=sql-server-ver15>)|用不同的格式显示日期/时间|

- 示例

“Orders”表数据
|OrderId|ProductName|OrderDate|OrderDateTime|
|:-|:-|:-|
|1|Geitost|2008-11-11|2008-11-11 13:24:44|
|2|Camembert Pierrot|2008-11-09|2008-11-09 15:45:21|
|3|Mozzarella di Giovanni|2008-11-11|2008-11-11 11:12:01|
|4|Mascarpone Faboli|2008-10-29|2008-10-29 14:56:59|

下面的SQL语句在已经存在的“Orders”的表，对“OrderDate”列进行查询

```sql
SELECT * FROM Orders WHERE OrderDate='2008-11-11'
```

结果集如下所示：
|OrderId|ProductName|OrderDate|OrderDateTime|
|:-|:-|:-|
|1|Geitost|2008-11-11|2008-11-11 13:24:44|
|3|Mozzarella di Giovanni|2008-11-11|2008-11-11 11:12:01|

下面的SQL语句在已经存在的“Orders”的表，对“OrderDateTime”列进行查询

```sql
SELECT * FROM Orders WHERE OrderDateTime='2008-11-11 00:00:00'
```

那么将得不到结果。因为表中”OrderDateTime“列没有”2008-11-11 00：00：00“日期。可以使用内置函数`CONVERT`处理

```sql
SELECT * FROM Orders WHERE CONVERT(nvarchar(10),OrderDateTime,121)='2008-11-11'
```
