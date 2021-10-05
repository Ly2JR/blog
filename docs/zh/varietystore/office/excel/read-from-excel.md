# 读取Excel

## 方式一

ADO.NET

::: tip
[官方AccessDataBaseEngine](https://www.microsoft.com/en-us/download/details.aspx?id=54920)
:::

### 代码示例

::: tip

[官方文档](https://docs.microsoft.com/zh-cn/dotnet/framework/data/adonet/connection-string-syntax?redirectedfrom=MSDN)

HDR=Yes 默认值，表示第一行是标题

IMES=0 写入

IMES=1 读取

IMES=2 并存
:::

:::: code-group
::: code-group-item xlxs

``` cs
Provider=Microsoft.ACE.OLEDB.12.0;Data Source=<excelPath>;Extended Properties='Excel 12.0;HDR=YES;IMEX=1'
```

:::

::: code-group-item xls

``` cs
Provider=Microsoft.ACE.OLEDB.4.0;Data Source=<excelPath>;Extended Properties='Excel 8.0;HDR=YES;IMEX=1'
```

:::
::::

``` cs
const string ConnString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\\demo.xlsx;Extended Properties='Excel 12.0;HDR=YES;IMEX=1'";
string sSql = "SELECT * FROM [Sheet1$]";
var sheet1 = new DataTable("Sheet1");
using (OleDbConnection conn = new OleDbConnection(ConnString))
{
    conn.Open();
    using (OleDbDataAdapter cmd = new OleDbDataAdapter(sSql, conn))
    {
        cmd.Fill(sheet1);
    }
}
```
