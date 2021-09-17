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
