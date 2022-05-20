# [VIEW](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/alter-view-transact-sql?view=sql-server-ver15)

VIEW视图是可视化的表。

在SQL中，视图是基于SQL语句的结果集的可视化表。

视图包含行和列，就像一个真实的表。视图中的字段就是来自一个或多个数据库中的真实表中的字段。

您可以向视图添加SQL函数、WHERE以及JOIN语句，也可以呈现数据，就像这些数据来自于某个单一的表一样。

::: tip
视图总是显示最新的数据！每当用户查询视图时，数据库引擎通过使用视图的SQL语句重建数据。
:::

- 语法

:::: code-group
::: code-group-item Create

```sql
CREATE VIEW view_name
AS
    SELECT column_name(s)
    FROM table_name
    WHERE condition;
GO
```

:::
::: code-group-item Alter

```sql
ALTER VIEW view_name
AS
    SELECT column_name(s)
    FROM table_name
    WHERE condition;
GO
```

:::
::: code-group-item Drop

```sql
DROP VIEW view_name;
```

:::
::::

- 示例

下面的SQL语句创建一个名为“vWeb”的视图

```sql
CREATE VIEW vWeb
AS
    SELECT  id,name,url,alexa,country
    FROM WebSites;
GO
```

下面的SQL语句修改“vWeb”的视图

```sql
ALTER VIEW vWeb
AS
    SELECT  WebSites.id,WebSites.name,WebSites.url,WebSites.alexa,WebSites.country,
    Access_Log.count
    FROM WebSites
    LEFT JOIN Access_Log
    ON WebSites.id=Access_Log.site_id
GO
```

下面的SQL语句删除“vWeb”的视图

```sql
DROP VIEW vWeb;
```
