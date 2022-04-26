# DROP

DROP语句，可以轻松地删除索引、表和数据库。

- 语法

:::: code-group
::: code-group-item index

```sql
DROP INDEX index_name ON table_name;
```

:::
::: code-group-item table

```sql
DROP TABLE table_name;
```

:::
::: code-group-item truncate

```sql
--快速清除表内的数据
TRUNCATE TABLE table_name;
```

:::
::: code-group-item database

```sql
DROP DATABASE db_name;
```

:::
::::
