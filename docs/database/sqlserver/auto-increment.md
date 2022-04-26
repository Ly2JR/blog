
# [AUTO INCREMENT](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/create-table-transact-sql-identity-property?view=sql-server-ver15)

AUTO INCREMENT会在新记录插入表中时生成一个唯一的数字

- 示例

下面的SQL语句创建一个名为“WebSites”的表结构，并对“id”列设置`AUTO INCREMENT`

```sql
CREATE TABLE WebSites
(
    id int identity(1,1),
    name nvarchar(60),
    url nvarchar(250),
    alexa int,
    country nvarchar(10)
);
```
