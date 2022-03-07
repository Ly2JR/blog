# 数据字典

- AbpAuditLogActions

|字段|类型|长度|允许为空|描述|
|:-|:-|:-|:-|:-|
|Id|uniqueidentifier||否|PK|
|TenantId|uniqueidentifier||否|
|AuditLogId|uniqueidentifier||否|FK|
|ServiceName|nvarchar|256|是||
|MethodName|nvarchar|128|是||
|Parameters|nvarchar|2000|是||
|ExecutionTime|datetime2|7|否||
|ExecutionDuration|int||否||
|ExtraProperties|nvarchar|max|否||

::: details 点击查看SQL
```sql
CREATE TABLE [dbo].[AbpAuditLogActions](
	[Id] [uniqueidentifier] NOT NULL,
	[TenantId] [uniqueidentifier] NULL,
	[AuditLogId] [uniqueidentifier] NOT NULL,
	[ServiceName] [nvarchar](256) NULL,
	[MethodName] [nvarchar](128) NULL,
	[Parameters] [nvarchar](2000) NULL,
	[ExecutionTime] [datetime2](7) NOT NULL,
	[ExecutionDuration] [int] NOT NULL,
	[ExtraProperties] [nvarchar](max) NULL,
 CONSTRAINT [PK_AbpAuditLogActions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[AbpAuditLogActions]  WITH CHECK ADD  CONSTRAINT [FK_AbpAuditLogActions_AbpAuditLogs_AuditLogId] FOREIGN KEY([AuditLogId])
REFERENCES [dbo].[AbpAuditLogs] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[AbpAuditLogActions] CHECK CONSTRAINT [FK_AbpAuditLogActions_AbpAuditLogs_AuditLogId]
GO
```
:::

- AbpAuditLogs

|字段|类型|长度|允许为空|描述|
|:-|:-|:-|:-|:-|
|Id|uniqueidentifier||否|PK|
|ApplicationName|nvarchar|96|是||
|UserId|uniqueidentifier||是||
|UserName|nvarchar|256|是||
|TenantId|uniqueidentifier||是||
|TenantName|nvarchar|max|是||
|ImpersonatorUserId|uniqueidentifier||是||
|ImpersonatorTenantId|uniqueidentifier||是||
|ExecutionTime|datetime2|7|否||
|ExecutionDuration|int||否||
|ClientIpAddress|nvarchar|64|是||
|ClientName|nvarchar|128|是||
|ClientId|nvarchar|64|是||
|CorrelationId|nvarchar|64|是||
|BrowerInfo|nvarchar|512|是||
|HttpMethod|nvarchar|16|是||
|Url|nvarchar|256|是||
|Exceptions|nvarchar|max|是||
|Comments|nvarchar|256|是||
|HttpStatusCode|int||是||
|ExtraProperties|nvarchar|max|是||
|ConcurrencyStamp|nvarchar|40|是||

::: details 点击查看SQL
```sql
CREATE TABLE [dbo].[AbpAuditLogs](
	[Id] [uniqueidentifier] NOT NULL,
	[ApplicationName] [nvarchar](96) NULL,
	[UserId] [uniqueidentifier] NULL,
	[UserName] [nvarchar](256) NULL,
	[TenantId] [uniqueidentifier] NULL,
	[TenantName] [nvarchar](max) NULL,
	[ImpersonatorUserId] [uniqueidentifier] NULL,
	[ImpersonatorTenantId] [uniqueidentifier] NULL,
	[ExecutionTime] [datetime2](7) NOT NULL,
	[ExecutionDuration] [int] NOT NULL,
	[ClientIpAddress] [nvarchar](64) NULL,
	[ClientName] [nvarchar](128) NULL,
	[ClientId] [nvarchar](64) NULL,
	[CorrelationId] [nvarchar](64) NULL,
	[BrowserInfo] [nvarchar](512) NULL,
	[HttpMethod] [nvarchar](16) NULL,
	[Url] [nvarchar](256) NULL,
	[Exceptions] [nvarchar](max) NULL,
	[Comments] [nvarchar](256) NULL,
	[HttpStatusCode] [int] NULL,
	[ExtraProperties] [nvarchar](max) NULL,
	[ConcurrencyStamp] [nvarchar](40) NULL,
 CONSTRAINT [PK_AbpAuditLogs] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
```
:::
