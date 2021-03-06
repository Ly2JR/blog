# [参考](https://docs.microsoft.com/zh-cn/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver15)

## 精确数字

|数据类型|范围|存储大小|
|:-|:-|:-|
|bigint|-2^63(-9,223,372,036,854,775,808)到2^63-1(9,223,372,036,854,775,807)|8字节|
|bit|1(TRUE或者任何非零值)、0(FALSE)、NULL|SQL Server 数据库引擎优化bit列的存储。 如果表中的 bit 列为 8 列或更少，则这些列作为 1 个字节存储。 如果 bit 列为 9 到 16 列，则这些列作为 2 个字节存储，以此类推。|
|decimal(p,s)|- 10^38 +1 到 10^38 - 1|5-17字节|
|int|-2^31(-2,147,483,648)到2^31-1(2,147,483,647)|4字节|
|money|-922,337,203,685,477.5808 到 922,337,203,685,477.5807（对于 Informatica，为 -922,337,203,685,477.58到 922,337,203,685,477.58。 Informatica 仅支持两位小数，而不是四位。）|8字节|
|numeric||
|smallint|-2^15(-32,768)到2^15-1(32,767)|2字节|
|smallmoney|-214,748.3648 到 214,748.3647|4字节|
|tinyint|0到255|1字节|

- decimal(p[,s])

带固定精度和小数位数的数值数据类型。Decimal和Numeric是同义词，可互换使用。

p(精度)
要存储的十进制数字的总数上限。此数目包括小数点的左右两侧。该精度必须是从1到最大精度38之间的值。默认精度为18。

s(小数位数)

小数点右存储的十进制数字位数。从P中减去此数字可确定小数点左边的最大位数。确定位数值必须介于0和P之间，只能在
指定了精度的情况下指定此值。默认小数为0，因此0<=<<=<。最大存储大小基于精度而变化。

|Precision|存储字节数|
|:-|:-|
|1-9|5|
|10-19|9|
|20-28|13|
|29-38|17|

- 近似数字

|类型||
|:-|:-|
|float|-1.79E + 308 至 -2.23E - 308、0 以及 2.23E - 308 至 1.79E + 308|
|real|-3.40E + 38 至 -1.18E - 38、0 以及 1.18E - 38 至 3.40E + 38|

float[(n)]其中n为用于存储float数值尾数的位数(以科学记数法表示)，因此可以确定精度和存储大小。
如果指定了n，则它必须介于1和53之间的某个值。n的默认值为53。

|n值|Precision|存储大小|
|:-|:-|:-|
|1-24|7位数|4个字节|
|25-53|15位数|8个字节|

## Unicode字符串

- nchar[(n)]

  固定大小字符串数据。n用于定义字符串大小(以双字节为单位),并且它必须为1到4000之间的值。
  存储大小为n字节的两倍。

- nvarchar[(n|max)]

  可变大小字符串数据。n用于定义字符串大小(以双字节为单位),并且它可能为1到4000之间的值。
  max指示最大存储大小是2^30-1个字符(2GB)。存储大小为n字节的两倍+2个字节。

- ntext

  长度可变的Unicode数据，字符串最大长度为2^30-1（1073741823）个字节。
  存储大小是所输入字符串长度的两倍(以字节为单位)。

## 二进制字符串

- bingary[(n)]

binary[(n)]长度为n字节的固定长度二进制数据，其中n是从1到8,000的值。
存储大小为n字节。

- varbinary[(n|max)]

varbinary[(n|max)]可变长度二进制数据。n的取值范围为1到8,000。max指示最大存储大小是2^31-1个字节。存储大小为所输入数据的实际长度+2个字节。所输入数据的长度可以是0字节。

- image

长度可变的二进制数据，从0到2^31-1(2,147,483,647)个字节。

## 字符串

- char[(n)]

char[(n)]固定大小字符串数据。n用于定义字符串大小(以字节为单位),并且它必须为1到8,000之间的值。
对于单字节编码字符串，存储大小为n个字节，并且可存储的字符串也为n。对于多字节编码字符集，存储
大小仍为n个字节，但可存储的字符数可能小于n。

- varchar((n|max))

varchar((n|max))可变大小字符串数据。使用n定义字符串大小(以字节为单位),可以是介于1和8,000之间
的值；或使用max指明列约束大小上限为最大存储2^31-1个字节(2GB)。对于单字节编码字符集,存储大小为
n+2个字节，并且可存储的字符数也是n。对于多字节编码字符集，存储大小仍为n+2个字节，但可存储的字符数可能小于n。

- text

服务器代码页中长度可变的非Unicode数据，字符串最大长度为2^31-1(2，147，483，647)个字节。
当服务器代码页使用双字节字符串时，存储仍是2,147,483,647字节。根据字符串，存储大小可能小于
2,147,483,647字节。

## 日期和时间

- date

|properties|值|
|:-|:-|
|语法|date|
|使用情况|DECLARE @MyDate date|
|默认的字符串文字格式|YYYY-MM-DD|
|范围|0001-01-01到9999-12-31(对于Informatica,为1582-10-15到9999-12-31)
公元1年1月1日(公历纪元)到公元9999年12月31日(对于Informatica,公元1582年10月15日到公元9999年12月31日)|
|各元素的范围|YYYY是表示年份的四位数字，范围为从0001到9999。对于Informatica,YYYY限为1582年到9999年。MM是表示指定年份中的月份的两位数字，范围为从01到12。DD是表示指定月份几号的两位数字，介于01和31之间(具体视月份而定)|
|字符长度|10位|
|精度、小数位数|10,0|
|存储大小|固定3个字节|
|存储结构|1、3字节整数存储日期|
|精确度|一天|
|默认值|1900-01-01。此值用于从time隐式转换到datetime2或datetimeoffset时追加的日期部分|
|日历|公历|
|用户定义的秒的小数部分精度|否|
|时区偏移量感知和保留|否|
|夏时制感知|否|

- time

|properties|值|
|:-|:-|
|语法|time|
|使用情况|DECLARE @MyDate time(7) CREATE TABLE Table1(Column1 time(7))|
|fractional seconds scale|为妙的小数部分指定数字的位数。折可以是从0到7的整数。对于Informatica,这可以是从0到3的整数。默认小数位数位7(100ns)|
|默认的字符串文字格式|对于Informatica,为hh:mm:ss[.nnnnnnn]|
|范围|00:00:00.0000000到23:59:59.9999999(对于Informatica,为00:00:00.000到23:59:59.999)|
|各元素的范围|hh是表示小时的两位数字，范围为00到23。mm是表示分钟的两位数字，范围为00到59。ss是表示秒钟的两位数字，范围为00到59。n*为一个0到3位的数字，范围为0到999，表示秒的小数部分。|
|字符长度|最小8位(hh:mm:ss)，最大16位(hh:mm:ss.nnnnnnn)。对于Informatica,最大值位12位(hh:mm:ss.nnn)|
|精度、小数位数|参阅下表|
|存储大小|固定5个字节，是适用默认的100ns妙的小数部分精度时的默认存储大小。在Informatica中，默认为4个字节，固定不变，同时秒的小数部分精度默认为1毫秒。|
|精确度|100纳秒(Informatica中为1毫秒)|
|默认值|00:00:00 此值用作从date隐式转换到datetime2或datetimeoffset时追加的时间部分|
|用户定义的秒的小数部分精度|是|
|时区偏移量感知和保留|否|
|夏时制感知|否|

|指定的小数位数|结果(精度，小数位数)|列长度(以字节为单位)|小数 seconds 精确率|
|:-|:-|:-|:-|
|time|(16,7),Informatica中为(12,3)|5(Informatica中为4)|7(Informatica中为3)|
|time(0)|(8,0)|3|0-2|
|time(1)|(10,1)|3|0-2|
|time(2)|(11,2)|3|0-2|
|time(3)|(12,3)|4|3-4|
|time(4) Informatica中部支持|(13,4)|4|3-4|
|time(5) Informatica中部支持|(14,5)|5|5-7|
|time(6) Informatica中部支持|(15,6)|5|5-7|
|time(7) Informatica中部支持|(16,7)|5|5-7|

- datetime

|properties|值|
|:-|:-|
|语法|datetime|
|使用情况|DECLARE @MyDate datetime CREATE TABLE Table1(Column1 datetime)|
|默认的字符串文字格式|不适用|
|日期范围|1753年1月1日到9999年12月31日|
|时间范围|00:00:00到23:59:59.997|
|时区偏移量范围|无|
|各元素的范围|YYYY是表示年份的四位数字，范围为1753到9999。MM是表示指定年份中的月份的两位数字,范围为01到12。DD是表示指定月份中的某一天的两位数字，范围为01到31(最高值取决于相应月份)。hh是表示小时的两位数字，范围为00到23。mm是表示分钟的两位数字，范围为00到59。ss是表示秒钟的两位数字，范围为00到59。n*为一个0到3位的数字，范围为0到999，表示秒的小数部分。|
|字符长度|最低19位到最高23位|
|存储大小|8个字节|
|精确度|舍入到.000、0.003或0.007秒三个增量|
|默认值|1900-01-01 00:00:00|
|日历|公历|
|用户定义的秒的小数部分精度|否|
|时区偏移量感知和保留|否|
|夏时制感知|否|

- datetime2

|properties|值|
|:-|:-|
|语法|datetime2|
|使用情况|DECLARE @MyDate datetime2(7) CREATE TABLE Table1(Column1 datetime2(7))|
|默认的字符串文字格式|YYYY-MM-DD hh:mm:ss[.fractional seconds]|
|日期范围|0001-01-01到9999-12-31 公元1年1月1日到公元9999年12月31日|
|时间范围|00:00:00 到 23:59:59.9999999|
|时区偏移量范围|无|
|各元素的范围|YYYY是表示年份的四位数字，范围为1753到9999。MM是表示指定年份中的月份的两位数字,范围为01到12。DD是表示指定月份中的某一天的两位数字，范围为01到31(最高值取决于相应月份)。hh是表示小时的两位数字，范围为00到23。mm是表示分钟的两位数字，范围为00到59。ss是表示秒钟的两位数字，范围为00到59。n*为一个0到3位的数字，范围为0到999，表示秒的小数部分。|
|字符长度|最低19位(YYYY-MM-DD hh:mm:ss)到最高27位(YYYY-MM-DD hh:mm:ss.0000000)|
|精度、小数位数|0至7位，准确度为100ns。默认精度为7位数|
|存储大小|精度小于3的6个字节。精度为3和4的6个字节。所有其他精度需要8个字节|
|精确度|100纳秒|
|默认值|1900-01-01 00:00:00|
|日历|公历|
|用户定义的秒的小数部分精度|是|
|时区偏移量感知和保留|否|
|夏时制感知|否|

- datetimeoffset

|properties|值|
|:-|:-|
|语法|datetimeoffset|
|使用情况|DECLARE @MyDate datetimeoffset(7) CREATE TABLE Table1(Column1 datetimeoffset(7))|
|fractional seconds scale|为妙的小数部分指定数字的位数。折可以是从0到7的整数。对于Informatica,这可以是从0到3的整数。默认小数位数位7(100ns)|
|默认的字符串文字格式|YYYY-MM-DD hhLmm:ss[.nnnnnnn][{+|-}hh:mm]|
|日期范围|0001-01-01到9999-12-31 公元1年1月1日到公元9999年12月31日|
|时间范围|00:00:00 到 23:59:59.9999999|
|时区偏移量范围|-14:00到+14:00|
|各元素的范围|YYYY是表示年份的四位数字，范围为1753到9999。MM是表示指定年份中的月份的两位数字,范围为01到12。DD是表示指定月份中的某一天的两位数字，范围为01到31(最高值取决于相应月份)。hh是表示小时的两位数字，范围为00到23。mm是表示分钟的两位数字，范围为00到59。ss是表示秒钟的两位数字，范围为00到59。n*为一个0到3位的数字，范围为0到9999999，表示秒的小数部分。hh是两位数，范围为-14到+14。mm是两位数，范围为00到59|
|字符长度|最低26位(YYYY-MM-DD hh:mm:ss{+|-}hh:mm)到最高34位(YYYY-MM-DDhh:mm:ss.nnnnnnn{+|-}hh:mm)|
|精度、小数位数|参阅下表|
|存储大小|默认值为10个字节的固定大小，默认的秒的小数部分精度为100ns|
|精确度|100纳秒|
|默认值|1900-01-01 00:00:00 00:00|
|日历|公历|
|用户定义的秒的小数部分精度|是|
|时区偏移量感知和保留|否|
|夏时制感知|否|

|指定的小数位数|结果(精度，小数位数)|列长度(以字节为单位)|秒的小数部分精度|
|:-|:-|:-|:-|
|datetimeoffset|(34,7)|10|7|
|datetimeoffset(0)|(26,0)|8|0-2|
|datetimeoffset(1)|(28,1)|8|0-2|
|datetimeoffset(2)|(29,2)|8|0-2|
|datetimeoffset(3)|(30,3)|9|3-4|
|datetimeoffset(4)|(31,4)|9|3-4|
|datetimeoffset(5)|(32,5)|10|5-7|
|datetimeoffset(6)|(33,6)|10|5-7|
|datetimeoffset(7)|(34,7)|10|5-7|

- smalldatetime

|properties|值|
|:-|:-|
|语法|smalldatetime|
|使用情况|DECLARE @MyDate smalldatetime CREATE TABLE Table1(Column1 smalldatetime)|
|fractional seconds scale|为妙的小数部分指定数字的位数。折可以是从0到7的整数。对于Informatica,这可以是从0到3的整数。默认小数位数位7(100ns)|
|默认的字符串文字格式|不适用|
|日期范围|1900-01-2079-06-06 1900年1月1日到2079年6月6日|
|时间范围|00:00:00 到 23:59:59。2007-05-09 23:59:59将舍入为2007-05-10 00:00:00|
|各元素的范围|YYYY是表示年份的四位数字，范围为1900到2079。MM是表示指定年份中的月份的两位数字,范围为01到12。DD是表示指定月份中的某一天的两位数字，范围为01到31(最高值取决于相应月份)。hh是表示小时的两位数字，范围为00到23。mm是表示分钟的两位数字，范围为00到59。ss是表示秒钟的两位数字，范围为00到59。值为29.998秒或更小值时会向下舍入到最接近的分钟数。值为29.999秒或更大值时会向上舍入到最接近的分钟数。|
|字符长度|最高19位|
|存储大小|固定4字节|
|精确度|一分钟|
|默认值|1900-01-01 00:00:00|
|日历|公历|
|用户定义的秒的小数部分精度|否|
|时区偏移量感知和保留|否|
|夏时制感知|否|

## 其他数据类型

- curosr

这是变量或存储过程OUTPUT参数的一种数据类型，这些参数包含对游标的引用。

有些操作可以引用那些具有cursor数据类型的变量和参数，这些操作包括：

- DECLARE @local_variable和SET @local_variable语句。

- OPEN、FETCH、CLOSE及DEALLOCATE游标语句。

- 存储过程输出参数

- CURSOR_STATUS函数

- sp_cursor_list、sp_describe_cursor、sp_describe_cursor_tables以及sp_describe_cursor_columns系统存储过程。

  sp_cursor_list和sp_describe_cursor的cursor_name输出列返回游标变量的名称。

  适用cursor数据类型创建的所有变量都可以为NULL。

  对于CREATE TABLE语句中的列，不能使用cursor数据类型。

- rowversion

  公开数据库中自动生成的唯一二进制数字的数据类型。rowversion通常用作给表行加版本戳的机制。
  存储大小为8个字节。rowversion数据类型只是递增的数字，不保留日期或时间。若要记录日期或
  时间，请使用datetime2数据类型。

  每个数据库都有一个计数器，当对数据库中包含rowversion列的表执行插入或更新操作时，该计数器值
  就会增加。此计数器是数据库行版本。这可以跟踪数据库内的相对时间，而不是时钟相关联的实际时间。
  一个表只能有一个rowversion列。每次修改或插入包含rowversion列的行时，就会在rowversion列中
  插入经过增量的数据库rowversion值。这一属性使rowversion列不适合作为键使用，尤其是不嫩那个作为主键适用。对行的任何更新都会更改行版本值，从而更改键值。如果该列属于主键，那么旧的键值将无效，进而引用该旧值的外键也将不再有效。 如果该表在动态游标中引用，则所有更新均会更改游标中行的位置。 如果该列属于索引键，则对数据行的所有更新还将导致索引更新。 使用任何更新语句都会让 rowversion 值递增，即使没有任何行值发生更改。 （例如，如果某列的值为 5，且更新语句将该值设置为 5，即使没有发生任何更改，此操作也被视为更新，并且 rowversion 发生递增。）

  timestamp 的数据类型为 rowversion 数据类型的同义词，并具有数据类型同义词的行为。 在 DDL 语句中，应尽量使用 rowversion，而不是 timestamp。

- uniqueidentifier

16字节GUID

uniqueidentifier 数据类型的列或局部变量可通过以下方式初始化为一个值 ：

- 通过使用 NEWID 或 NEWSEQUENTIALID 函数。

- 通过从 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 形式的字符串常量进行转换，其中每个 x 都是 0-9 或 a-f 范围的十六进制数字。 例如，6F9619FF-8B86-D011-B42D-00C04FC964FF 为有效的 uniqueidentifier 值 。

比较运算符可与 uniqueidentifier 值一起使用 。 不过，排序不是通过比较两个值的位模式来实现的。 唯一可以针对 uniqueidentifier 值执行的操作是比较 (=、<>=<、= >) 以及检查 NULL (IS NULL 和 IS NOT NULL) 。 不能使用其他算术运算符。 除 IDENTITY 之外的所有列约束和属性均可对 uniqueidentifier 数据类型使用 。

具有更新订阅的合并复制和事务复制使用 uniqueidentifier 列来确保在表的多个副本中唯一地标识行 。

- XML

它是存储 XML 数据的数据类型。 可在列中或者 xml 类型的变量中存储 xml 实例 。

xml 数据类型实例的存储表示形式不能超过 2 GB (GB) 大小。

- hierarchyid

hierarchyid 数据类型是一种长度可变的系统数据类型。 可使用 hierarchyid 表示层次结构中的位置。 类型为 hierarchyid 的列不会自动表示树。 由应用程序来生成和分配 hierarchyid 值，使行与行之间的所需关系反映在这些值中。

hierarchyid 数据类型的值表示树层次结构中的位置。 hierarchyid 的值具有以下属性：

- 非常紧凑

    在具有 n 个节点的树中，表示一个节点所需的平均位数取决于平均端数（节点的平均子级数）。 对于 small 小时 (0-7) ，大小约为 6 * logAn 位，其中 A 是平均端数。 对于平均端数为 6 级、包含 100,000 个人的组织层次结构，一个节点大约占 38 位。 存储时，此值向上舍入为 40 位，即 5 字节。

- 按深度优先顺序进行比较

    假设有两个 hierarchyid 值 a 和 b， a b 意味着在树的深度优先遍历中，a 位于 b 之前。 hierarchyid 数据类型的索引按深度优先顺序排序，在深度优先遍历中相邻的节点的存储位置也相邻。 例如，一条记录的子级的存储位置与该记录的存储位置是相邻的。 有关详细信息，请参阅分层数据 (SQL Server) 。

- 支持任意插入和删除

    使用 GetDescendant 方法，始终可以在任意给定节点的右侧、左侧或任意两个同级节点之间生成同级节点。 在层次结构中插入或删除任意数目的节点时，该比较属性保持不变。 大多数插入和删除操作都保留了紧凑性属性。 但是，对于在两个节点之间执行的插入操作，所产生的 hierarchyid 值的表示形式在紧凑性方面将稍微降低。

- hierarchyid 类型中所用的编码限制为 892 字节。 因此，如果节点的表示形式中包含过多级别，以至于 892 字节不足以容纳它，则该节点不能用 hierarchyid 类型表示。

hierarchyid 类型可以作为 SqlHierarchyId 数据类型供 CLR 客户端使用。

- sql_variant

一种数据类型，用于存储各种 SQL Server 支持的数据类型的值。

sql_variant 可以用在列、参数、变量和用户定义函数的返回值中 。 借助 sql_variant，这些数据库对象可以支持其他数据类型的值 。

类型为 sql_variant 的列可能包含不同数据类型的行 。 例如，定义为 sql_variant 的列可以存储 int、binary 和 char 类型的值 。

sql_variant 的最大长度可以是 8016 个字节 。 这包括基类型信息和基类型值。 实际基类型值的最大长度是 8,000 个字节。

对于 sql_variant 数据类型，必须先将它转换为其基本数据类型值，然后才能参与诸如加减这类运算 。

可以为 sql_variant 分配默认值 。 该数据类型还可以将 NULL 作为其基础值，但是 NULL 值没有关联的基类型。 此外，sql_variant 不能使用其他 sql_variant 作为其基础类型 。

唯一键、主键或外键可能包含类型为 sql_variant 的列，但是，组成指定行的键的数据值的总长度不应大于索引的最大长度 。 该最大长度是 900 个字节。

一个表可以包含任意多个 sql_variant 列 。

不能在 CONTAINSTABLE 和 FREETEXTTABLE 中使用 sql_variant 。

ODBC 不完全支持 sql_variant 。 因此，使用 Microsoft OLE DB Provider for ODBC (MSDASQL) 时，sql_variant 列的查询将作为二进制数据返回 。 例如，包含字符串数据 'PS2091' 的 sql_variant 列将作为 0x505332303931 返回 。

- table

一种特殊的数据类型，可用于存储结果集以进行后续处理。 table 主要用于临时存储一组作为表值函数结果集返回的行。 可将函数和变量声明为 table 类型。 table 变量可用于函数、存储过程和批处理中。 若要声明 table类型的变量，请使用 。

- 空间几何类型 - geometry

平面空间数据类型 geometry 作为公共语言运行时实现， (CLR) 数据类型SQL Server。 此类型表示欧几里得（平面）坐标系中的数据。

SQL Server几何空间数据类型的一组方法。 这些方法包括有关 几何图形的方法 ，这些方法由 开放地理空间信息联盟 (OGC) 标准定义，以及一组 Microsoft 扩展到该标准。

geometry 方法的公差可高达 1.0e-7 * extents。 extents 表示 geometry 对象的各点之间的近似最大距离。

-空间类型 - geography

geography 空间数据类型 geography 作为 .NET 公共语言运行时实现， (CLR) 数据类型SQL Server。 此类型表示圆形地球坐标系中的数据。 geography SQL Server数据类型存储椭圆体 (圆形地球) ，例如 GPS 纬度和经度坐标。

SQL Server地理空间数据类型支持一组方法。 这包括 OGC 开放地理空间信息联盟 (定义的) 和一组 Microsoft 扩展。

geography 方法的容错可高达 1.0e-7 * extents。 extents 表示 geography 对象的各点之间的近似最大距离。
