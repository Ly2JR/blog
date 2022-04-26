# [CREATE INDEX](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/create-index-transact-sql?view=sql-server-ver15)

CREATE INDEX语句用于在表中创建索引。

在不读取整个表的情况下，索引使数据库应用程序可以更快地查找数据。

您可以在表中创建索引，以便更加快速高效地查询数据。

用户无法看到索引，它们只能被用来加速搜索/查询。

:::: warning
更新一个包含索引的表需要比更新一个没有索引的表花费更多的时间，这是由于索引本身也需要更新。
因此，理想的做法是仅仅在常常被搜索的列(以及表)上面创建索引。
::::

- 语法

:::: code-group
::: code-group-item index

```sql
--在表上创建一个简单的索引。允许使用重复值
CREATE INDEX index_name
ON table_name(column_name);

--在表上创建一个简单的索引,如果索引名存在则更新。允许使用重复值
CREATE INDEX index_name
ON table_name(column_name)
WITH(DROP_EXISTING=ON)
```

:::
::: code-group-item unique index

```sql
--在表上创建一个唯一的所应。不允许使用重复的值：唯一的索引意味着两个行不能拥有相同的索引值。
CREATE UNIQUE INDEX index_name
ON table_name(column_name);
```

:::
::: code-group-item drop index

```sql
--在表上删除创建的一个索引
DROP INDEX index_name
ON table_name;

--删除多个索引
DROP INDEX index_name1 ON table_name1,
index_name2 ON table_name2,
...
index_namen ON table_namen;
```

:::
::::

- 示例

下面的SQL语句在已存在的“WebSite”表，对“name”列添加`UNIQUE INDEX`索引

```sql
CREATE UNIQUE INDEX IX_Name
ON WebSite(name);
```

下面的SQL语句在已存在的“WebSite”表，对“name”列和“url”列添加`INDEX`索引

```sql
CREATE INDEX IX_NameUrl
ON WebSite(name,url);
```

下面的SQL语句在已存在的“WebSite”表，对已添加的“IX_NameUrl”索引进行删除

```sql
DROP INDEX IX_NameUrl ON WebSite;
```
