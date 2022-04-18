# 小技巧

## 连续的日期

:::: code-group
::: code-group-item SQL

```sql
select convert(nvarchar(10),dateadd(day,number,'2021-01-01'),121) as dt
from master.dbo.spt_values  
where type ='P' and number <=DATEDIFF(day, '2021-01-01',   '2021-12-31')
```

:::
::::

## 分页

- `offset`...`rows fetch next`...`rows only`

::: tip
Sql Server 2012及以上才可以使用
:::

:::: code-group
::: code-group-item SQL

```sql
select * from Persons order by FirstName offset 10 rows fetch next 10 rows only;
```

:::
::::

- `row_number() over(order by`...`)`

:::: code-group
::: code-group-item SQL

```sql
select *, ROW_NUMBER() over(order by FirstName) as row from Persons
```

:::
::::
