# 高级语法

## [CREATE DATABASE](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/create-database-transact-sql?view=sql-server-ver15&tabs=sqlpool)

CREATE DATABASE语句用于创建新的数据库

- 语法

```sql
CREATE DATABASE dnname;
```

- 示例

下面的SQL语句创建一个名为“SQLDocs”的数据库

```sql
CREATE DATABASE SQLDocs;
```

## [CREATE TABLE](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/create-table-transact-sql?view=sql-server-ver15)

CREATE TABLE语句用于创建数据库中的表

- 语法

:::: tip
column_name参数规定表中列的名称

data_type参数规定列的[数据类型](https://docs.microsoft.com/zh-cn/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver15)(例如nvarchar,integer,decimal,date等)

size参数规定表中列的最大长度
::::

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

## [CONSTRANINTS](https://docs.microsoft.com/zh-cn/sql/relational-databases/system-information-schema-views/table-constraints-transact-sql?view=sql-server-ver15)

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

## [CREATE INDEX](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/create-index-transact-sql?view=sql-server-ver15)

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

## DROP

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

## ALTER TABLE

ALTER TABLE语句用于在已有的表中添加、删除或者修改列

- 语法

:::: code-group
::: code-group-item add
```sql
--在已有表中添加新的列
ALTER TABLE table_name
ADD column_name data_type(data_size);

--在已有表中更改列的数据类型
ALTER TABLE table_name
ALTER COLUMN column_name data_type(data_size);
```
:::
:::code-group-item drop
```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```
:::
::::

- 示例

“WebSites”表数据
|id|name|url|alexa|country|
|:-|:-|:-|:-|:-|
|1|Google|https://www.google.com/|1|USA|
|2|TaoBao|https://www.taobao.com/|13|CN|
|3|WeiBo|https://www.weibo.com/|20|CN|
|4|Facebook|https://www.facebook.com/|3|USA|

下面的SQL语句在已有的“WebSites”表中,添加新的“cMemo”列
```sql
ALTER TABLE WebSites
ADD cMemo nvarchar(255);
```
输出结果为：
|id|name|url|alexa|country|cMemo|
|:-|:-|:-|:-|:-|:-|
|1|Google|https://www.google.com/|1|USA|NULL|
|2|TaoBao|https://www.taobao.com/|13|CN|NULL|
|3|WeiBo|https://www.weibo.com/|20|CN|NULL|
|4|Facebook|https://www.facebook.com/|3|USA|NULL|

下面的SQL语句在已存在的“WebSites”表中，改变“cMemo”列的数据类型。
```sql
ALTER TABLE WebSites
ALTER COLUMN cMemo varchar(10);
```

下面的SQL语句在已有的“WebSites”表中,添加新的“cMemo”列
```sql
ALTER TABLE WebSites
ADD cMemo nvarchar(255);
```
输出结果为：
|id|name|url|alexa|country|cMemo|
|:-|:-|:-|:-|:-|:-|
|1|Google|https://www.google.com/|1|USA|NULL|
|2|TaoBao|https://www.taobao.com/|13|CN|NULL|
|3|WeiBo|https://www.weibo.com/|20|CN|NULL|
|4|Facebook|https://www.facebook.com/|3|USA|NULL|