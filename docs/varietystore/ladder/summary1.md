# 第三方对接案例1

当与第三方系统对接时除了需要基本数据外还需要图片数据。在Web端开发管理界面包括图片上传、图片预览以及基本数据维护形成完整数据，以便在手动操作上传至第三方。衍生出通过Windows服务定时模拟Web端手动点击上传功能。

- 问题描述1

在进行Web端数据展示时，出现与数据库表设计数据有出入问题，表结构和展示数据展示如下:

原始主表(`Main`)数据示例：

|id|name|
|:-|:-|
|001|王二|
|002|张三|

原始子表(`Details`)数据示例：

|id|no|createtime|path|
|:-|:-|:-|:-|
|1|001|2022-06-15 08:00:00|图片1|
|2|001|2022-06-15 08:20:00|图片2|
|3|001|2022-06-15 09:10:00|图片3|
|4|002|2022-06-15 08:02:00|图片1|
|5|002|2022-06-15 08:31:00|图片2|

新加附加表(`Extra`)数据示例:

|id|name|extra1|extra2|extra3|picture1|picture2|
|:-|:-|:-|:-|:-|:-|:-|
|1|王二|性别|地址|身份证|图片1|图片2|
|2|张三|性别|地址|身份证|图片1|图片2|

新加状态表(`DataStatus`)数据上传状态示例：

|id|code|
|:-|:-|
|1|0|
|3|500|
|4|1|

Web最终展示:

|id|name|extra1|extra2|extra3|picture1|picture2|indatetime|inpath|outdatetime|outpath|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|001|王二|性别|地址|身份证|图片1|图片2|2022-06-15 08:00:00|图片1|2022-06-15 09:10:00|图片3|
|002|王二|性别|地址|身份证|图片1|图片2|2022-06-15 08:02:00|图片1|2022-06-15 08:31:00|图片2|

子表存储的是主表数据产生的流程记录，而展示的最终数据因要求只要子表的第一条和最后一条数据，并需要分别处理。

- 解决方式

如果通过ORM实体循环主表在找到相关子表的第一条或者最后一条数据，会产生这样的问题,查询主表，查询子表第一条数据，查询子表第二条数据，查询附加表,组织展示数据,这会产生效率问题。因此直接使用Sql完美解决该问题，既查询结果就是展示数据并能显示每个数据状态。

```sql
select * from (
select Main.id,Main.main,
min(Details.id) inid,min(Details.createtime) iniime,isnull(min(DataStatus.code),-99) as inresult,
max(Details.id) outid,max(Details.createtime) outtime,isnull(max(DataStatus.code),-99) as outresult,
Extra.extra1,Extra.extra2,Extra.extra3,Extra.picture1,Extra.picture2 from Details  with (nolock)
inner join Main  with (nolock) on Details.no=Main.id
left join Extra  with (nolock) on Main.name=Extra.name
left join DataStatus  with (nolock)  on Details.id=DataStatus.id
group by Main.id,Main.main,Extra.extra1,Extra.extra2,Extra.extra3,Extra.picture1,Extra.picture2
)t where inresult<>0 or outresult<>0
```

- 问题描述2

`xxx.dll`为web端业务逻辑，`job.exe`为windows服务，调用`xxx.dll`。文档结构如下：

```md
|--web
|   --bin
|       --xxx.dll
|       --job.exe
|   --files
|       --login.png
```

部署在IIS上，Web端上传图片及预览图片,存储地址路径为`/files/login.png`，实际物理完整路径为`D:\\Web\\files\\login.png`。当Web端数据图片上传预览以及手动上传至第三方系统都正常时。衍生出通过Windows服务定时模拟Web端手动点击上传功能，出现的图片路径问题。

- 解决方式

分析发现,Web端上传执行的文件路径为`D:\\Web\\files\\login.png`一切正常，而定时服务执行的路径为`D:\\Web\\bin\\files\\login.png`。对文件路径进行`Replce("\\bin/","")`处理，满足Web端和定时服务同时生效。

- 问题描述3

上传图片采用第三方JS插件[jquery upload file](https://plugins.jquery.com/uploadfile/)，调试及部署IIS图片上传正常，生产环境不显示上传按钮

- 解决方式

web调试发现`jquery.uploadfile.min.js`在线引用`jquery.form.js`的文件，如`e.getScript(("https:"==document.location.protocol?"https://":"http://")+"malsup.github.io/jquery.form.js")`。将`jquery.form.js`文件下载保存本地，更改`jquery.uploadfile.min.js`文件部分即可。
