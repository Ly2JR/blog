# [CREATE TABLE](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/create-table-transact-sql?view=sql-server-ver15)

CREATE TABLE语句用于创建数据库中的表

- 语法

::: tip
column_name参数规定表中列的名称

data_type参数规定列的[数据类型](https://docs.microsoft.com/zh-cn/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver15)(例如nvarchar,integer,decimal,date等)

size参数规定表中列的最大长度
:::

```sql
CREATE TABLE table_name
(
    column_name1 data_type(size),
    column_name2 data_type(size),
    column_name3 data_type(size),
    ...    
);
```

- 示例

下面的SQL语句创建一个名为“WebSites”的表结构

```sql
CREATE TABLE WebSites
(
    id int ,
    name nvarchar(60),
    url nvarchar(250),
    alexa int,
    country nvarchar(10),
);
```
