# [CONSTRANINTS](https://docs.microsoft.com/zh-cn/sql/relational-databases/system-information-schema-views/table-constraints-transact-sql?view=sql-server-ver15)

Constraints约束用于规定表中的数据规则。

如果存在违反约束的数据行为，行为会被约束终止。

约束可以在创建表时规定，或者在创建表之后规定。

- 语法

:::: tip

NOT NULL - 指示某列不能存储`NULL`值

UNIQUE - 保证某列的每行必须有`唯一`值,允许`NULL`值

PRIMARY KEY - `NOT NULL`和`UNIQUE`的结合。确保某列(或两个列多个列的结合)有唯一标识，有助于更容易更快速地找到表中的一个特定记录

FOREIGN KEY - 保证一个表中的数据匹配另一个表中的值的参照完整性

CHECK - 保证列中的值符合指定的条件

DEFAULT - 规定没有给列赋值时的默认值
::::

```sql
CREATE TABLE table_name
(
    column_name1 data_type(size) constraint_name,
    column_name2 data_type(size) constraint_name,
    column_name3 data_type(size) constraint_name,
);
```

### NOT NULL

NOT NULL约束列不接受`NULL`值

NOT NULL约束强制字段始终包含值。意味着，如果不向字段添加值，就无法插入新记录或者更新记录。

- 语法

```SQL
ALTER TABLE table_name ALTER COLUMN column_name data_type(size) constraint_name;
```

- 示例

下面的SQL语句创建一个名为“WebSites”的表结构，并对“name”列添加`NOT NULL`约束

```sql
CREATE TABLE WebSites
(
    id int,
    name nvarchar(60) NOT NULL,
    url nvarchar(250),
    alexa int DEFAULT(0),
    country nvarchar(10),
);
```

下面的SQL语句在已存在的“WebSites”表，对“name”列添加`NOT NULL`约束

```sql
ALTER TABLE WebSites 
ALTER COLUMN name nvarchar(10) not null
```

### [DEFAULT](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/create-default-transact-sql?view=sql-server-ver15)

DEFAULT约束用于向列中插入默认值。

如果没有规定其他值，那么会将默认值添加到所有的新记录。

- 语法

```sql
ALTER TABLE table_name
ADD CONSTRAINT contraint_name 
DEFAULT(default_value)
FOR column_name;
```

- 示例

下面的SQL语句创建一个名为“WebSites”的表结构，并对“alexa”列添加`DEFAULT`约束

```sql
CREATE TABLE WebSites
(
    id int,
    name nvarchar(60),
    url nvarchar(250),
    alexa int DEFAULT(0),
    country nvarchar(10),
);
```

下面的SQL语句在已存在的“WebSites”表，对“alexa”列添加`DEFAULT`约束

```sql
ALTER TABLE WebSites
ADD CONSTRAINT def_alexa
DEFAULT(0)
For alexa;
```

下面的SQL语句在已存在的“WebSites”表，已添加的“def_alexa”约束进行删除

```sql
ALTER TABLE WebSites
ALTER COLUMN alexa DROP DEFAULT;
```

### [UNIQUE](https://docs.microsoft.com/zh-cn/sql/relational-databases/tables/unique-constraints-and-check-constraints?view=sql-server-ver15)

UNIQUE约束唯一标识数据库表中的每条记录

UNIQUE和PRIMARY KEY约束均为列或列集合提供了唯一性的保证

PRIMARY KEY 约束拥有自动定义UNIQUE约束

:::: warning
UNIQUE 允许存在`NULL`值，而PRIMARY KEY **不**允许存在`NULL`值

每个表可以有多个UNIQUE约束，但是只能有一个PRIMARY KEY约束
::::

- 语法

:::: code-group
::: code-group-item add Constraint

```sql
ALTER TABLE table_name
ADD CONSTRAINT constraint_name UNIQUE(column_name1,column_name2,...);
```

:::
::: code-group-item remove Constraint

```sql
ALTER TABLE table_name 
DROP CONSTRAINT constraint_name;
```

:::
::::

- 示例

下面的SQL语句创建一个名为“WebSites”的表结构，并对“url”列添加`UNIQUE`约束

```sql
CREATE TABLE WebSites
(
    id int,
    name nvarchar(60),
    url nvarchar(250) UNIQUE,
    alexa int DEFAULT(0),
    country nvarchar(10),
);
```

下面的SQL语句在已存在的“WebSites”表，并对“url”列添加`UNIQUE`约束

```sql
ALTER TABLE WebSites
ALTER CONSTRAINT UQ_url UNIQUE(url);
```

下面的SQL语句在已存在的“WebSites”表，并对“url”列和“name”添加`UNIQUE`约束

```sql
ALTER TABLE WebSites 
ALTER CONSTRAINT UQ_url UNIQUE(name,url);
```

下面的SQL语句在已存在的“WebSites”表，已添加的“UQ_url”约束进行删除

```sql
ALTER TABLE WebSites
DROP CONSTRAINT UQ_url;
```

### [PRIMARY KEY](https://docs.microsoft.com/zh-cn/sql/relational-databases/tables/primary-and-foreign-key-constraints?view=sql-server-ver15)

PRIMARY KEY 约束唯一标识数据库表中的每一条记录

主键必须包含唯一的值

主键列不能包含`NULL`值

每个表都应该有一个主键，并且每个表只有一个主键

- 语法

```sql
ALTER TABLE table_name
ADD CONSTRAINT constraint_name PRIMARY KEY(column_name1,column_name2,...);
```

- 示例

下面的SQL语句创建一个名为“WebSites”的表结构，并对“id”列添加`PRIMARY KEY`约束

```sql
CREATE TABLE WebSites
(
    id int PRIMARY KEY,
    name nvarchar(60) NOT NULL,
    url nvarchar(250),
    alexa int DEFAULT(0),
    country nvarchar(10),
);
```

下面的SQL语句在已存在的“WebSites”表，对“id”列添加`PRIMARY KEY`约束

```sql
ALTER TABLE WebSites 
ADD CONSTRAINT pk_id PRIMARY KEY(id);
```

下面的SQL语句在已存在的“WebSites”表，对“name”列和“url”列添加`PRIMARY KEY`约束

```sql
ALTER TABLE WebSites 
ADD CONSTRAINT pk_name_url PRIMARY KEY(id,url);
```

下面的SQL语句在已存在的“WebSites”表，对已添加的“pk_id”约束进行删除

```sql
ALTER TABLE WebSites
DROP CONSTRAINT pk_id;
```

### [FOREIGN KEY](https://docs.microsoft.com/zh-cn/sql/relational-databases/tables/create-foreign-key-relationships?view=sql-server-ver15)

一个表中的FOREIGN KEY指向另一个表中的UNIQUE KEY（唯一约束的键）

- 语法

```sql
ALTER TABLE table_name1
ADD CONSTRAINT constraint_name
FOREIGN KEY(column_name1,column_name2,...)
REFERENCES table_name2(column_name1,column_name2,...)
ON DELETE CASCADE;
```

- 示例

下面的SQL语句创建一个名为“Access_Log”的表结构，并对“site_id”列添加`FOREIGN KEY`约束

```sql
CREATE TABLE Access_Log
(
    id int,
    [site_id] int FOREIGN KEY REFERENCES WebSites(id)
    name nvarchar(60),
    [count] int,
    [country] nvarchar(10),
);
```

下面的SQL语句在已存在的“Access_Log”表，对“site_id”列添加`FOREIGN KEY`约束

```sql
ALTER TABLE Access_Log 
ADD CONSTRAINT fk_site_id
FOREIGN KEY (site_id)
REFERENCES WebSites(id)
ON DELETE CASCADE;
```

下面的SQL语句在已存在的“Access_Log”表，对已添加的“fk_site_id”约束进行删除

```sql
ALTER TABLE Access_Log
DROP CONSTRAINT fk_site_id;
```

### [CHECK](https://docs.microsoft.com/zh-cn/sql/relational-databases/tables/unique-constraints-and-check-constraints?view=sql-server-ver15)

CHECK 约束是用于限制中的值的范围

如果对单个列定义CHECK约束，那么该列只允许特定的值

如果对一个表定义CHECK约束，那么此约束会基于行中其他列的值在特定的列中对值进行限制

- 语法

```sql
ALTER TABLE table_name
ADD CONSTRAINT contraint_name
CHECK (column_name operate condition)
```

- 示例

下面的SQL语句创建一个名为“WebSites”的表结构，并对“country”列添加`CHECK`约束

```sql
CREATE TABLE WebSites
(
    id int,
    name nvarchar(60),
    url nvarchar(250),
    alexa int,
    country nvarchar(10) CHECK(country in ('CN','USA')),
);
```

下面的SQL语句创建一个名为“WebSites”的表结构，并对“country”列和“alexa”列添加`CHECK`约束

```sql
CREATE TABLE WebSites
(
    id int,
    name nvarchar(60),
    url nvarchar(250),
    alexa int,
    country nvarchar(10),
    CONSTRAINT chk_WebSite CHECK(country in ('CN','USA') AND Alexa>0)
);
```

下面的SQL语句在已存在的“Access_Log”表，对“country”列添加`CHECK`约束

```sql
ALTER TABLE Access_Log 
ADD CONSTRAINT chk_country
CHECK (country in ('CN','USA'))
```

下面的SQL语句在已存在的“Access_Log”表，对已添加的“chk_country”约束进行删除

```sql
ALTER TABLE Access_Log
DROP CONSTRAINT chk_country;
```
