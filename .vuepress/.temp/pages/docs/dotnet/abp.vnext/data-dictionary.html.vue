<template><h1 id="数据字典" tabindex="-1"><a class="header-anchor" href="#数据字典" aria-hidden="true">#</a> 数据字典</h1>
<ul>
<li>AbpAuditLogActions</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">长度</th>
<th style="text-align:left">允许为空</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Id</td>
<td style="text-align:left">uniqueidentifier</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">PK</td>
</tr>
<tr>
<td style="text-align:left">TenantId</td>
<td style="text-align:left">uniqueidentifier</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">AuditLogId</td>
<td style="text-align:left">uniqueidentifier</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">FK</td>
</tr>
<tr>
<td style="text-align:left">ServiceName</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">256</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">MethodName</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">128</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">Parameters</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">2000</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">ExecutionTime</td>
<td style="text-align:left">datetime2</td>
<td style="text-align:left">7</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">ExecutionDuration</td>
<td style="text-align:left">int</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">ExtraProperties</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">max</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<details class="custom-container details"><summary>点击查看SQL</summary>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span>dbo<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>AbpAuditLogActions<span class="token punctuation">]</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span>Id<span class="token punctuation">]</span> <span class="token punctuation">[</span>uniqueidentifier<span class="token punctuation">]</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>TenantId<span class="token punctuation">]</span> <span class="token punctuation">[</span>uniqueidentifier<span class="token punctuation">]</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>AuditLogId<span class="token punctuation">]</span> <span class="token punctuation">[</span>uniqueidentifier<span class="token punctuation">]</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ServiceName<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>MethodName<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>Parameters<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ExecutionTime<span class="token punctuation">]</span> <span class="token punctuation">[</span>datetime2<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ExecutionDuration<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">int</span><span class="token punctuation">]</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ExtraProperties<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
 <span class="token keyword">CONSTRAINT</span> <span class="token punctuation">[</span>PK_AbpAuditLogActions<span class="token punctuation">]</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">CLUSTERED</span> 
<span class="token punctuation">(</span>
    <span class="token punctuation">[</span>Id<span class="token punctuation">]</span> <span class="token keyword">ASC</span>
<span class="token punctuation">)</span><span class="token keyword">WITH</span> <span class="token punctuation">(</span>PAD_INDEX <span class="token operator">=</span> <span class="token keyword">OFF</span><span class="token punctuation">,</span> STATISTICS_NORECOMPUTE <span class="token operator">=</span> <span class="token keyword">OFF</span><span class="token punctuation">,</span> IGNORE_DUP_KEY <span class="token operator">=</span> <span class="token keyword">OFF</span><span class="token punctuation">,</span> ALLOW_ROW_LOCKS <span class="token operator">=</span> <span class="token keyword">ON</span><span class="token punctuation">,</span> ALLOW_PAGE_LOCKS <span class="token operator">=</span> <span class="token keyword">ON</span><span class="token punctuation">,</span> OPTIMIZE_FOR_SEQUENTIAL_KEY <span class="token operator">=</span> <span class="token keyword">OFF</span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token punctuation">[</span><span class="token keyword">PRIMARY</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token punctuation">[</span><span class="token keyword">PRIMARY</span><span class="token punctuation">]</span> TEXTIMAGE_ON <span class="token punctuation">[</span><span class="token keyword">PRIMARY</span><span class="token punctuation">]</span>
GO

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span>dbo<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>AbpAuditLogActions<span class="token punctuation">]</span>  <span class="token keyword">WITH</span> <span class="token keyword">CHECK</span> <span class="token keyword">ADD</span>  <span class="token keyword">CONSTRAINT</span> <span class="token punctuation">[</span>FK_AbpAuditLogActions_AbpAuditLogs_AuditLogId<span class="token punctuation">]</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span><span class="token punctuation">[</span>AuditLogId<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">REFERENCES</span> <span class="token punctuation">[</span>dbo<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>AbpAuditLogs<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>Id<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span>
GO

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span>dbo<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>AbpAuditLogActions<span class="token punctuation">]</span> <span class="token keyword">CHECK</span> <span class="token keyword">CONSTRAINT</span> <span class="token punctuation">[</span>FK_AbpAuditLogActions_AbpAuditLogs_AuditLogId<span class="token punctuation">]</span>
GO
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></details>
<ul>
<li>AbpAuditLogs</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">长度</th>
<th style="text-align:left">允许为空</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Id</td>
<td style="text-align:left">uniqueidentifier</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">PK</td>
</tr>
<tr>
<td style="text-align:left">ApplicationName</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">96</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">UserId</td>
<td style="text-align:left">uniqueidentifier</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">UserName</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">256</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">TenantId</td>
<td style="text-align:left">uniqueidentifier</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">TenantName</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">max</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">ImpersonatorUserId</td>
<td style="text-align:left">uniqueidentifier</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">ImpersonatorTenantId</td>
<td style="text-align:left">uniqueidentifier</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">ExecutionTime</td>
<td style="text-align:left">datetime2</td>
<td style="text-align:left">7</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">ExecutionDuration</td>
<td style="text-align:left">int</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">ClientIpAddress</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">64</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">ClientName</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">128</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">ClientId</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">64</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">CorrelationId</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">64</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">BrowerInfo</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">512</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">HttpMethod</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">16</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">Url</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">256</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">Exceptions</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">max</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">Comments</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">256</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">HttpStatusCode</td>
<td style="text-align:left">int</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">ExtraProperties</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">max</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">ConcurrencyStamp</td>
<td style="text-align:left">nvarchar</td>
<td style="text-align:left">40</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<details class="custom-container details"><summary>点击查看SQL</summary>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span>dbo<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>AbpAuditLogs<span class="token punctuation">]</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span>Id<span class="token punctuation">]</span> <span class="token punctuation">[</span>uniqueidentifier<span class="token punctuation">]</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ApplicationName<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">96</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>UserId<span class="token punctuation">]</span> <span class="token punctuation">[</span>uniqueidentifier<span class="token punctuation">]</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>UserName<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>TenantId<span class="token punctuation">]</span> <span class="token punctuation">[</span>uniqueidentifier<span class="token punctuation">]</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>TenantName<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ImpersonatorUserId<span class="token punctuation">]</span> <span class="token punctuation">[</span>uniqueidentifier<span class="token punctuation">]</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ImpersonatorTenantId<span class="token punctuation">]</span> <span class="token punctuation">[</span>uniqueidentifier<span class="token punctuation">]</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ExecutionTime<span class="token punctuation">]</span> <span class="token punctuation">[</span>datetime2<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ExecutionDuration<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">int</span><span class="token punctuation">]</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ClientIpAddress<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ClientName<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ClientId<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>CorrelationId<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>BrowserInfo<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">512</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>HttpMethod<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>Url<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>Exceptions<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>Comments<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>HttpStatusCode<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">int</span><span class="token punctuation">]</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ExtraProperties<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>ConcurrencyStamp<span class="token punctuation">]</span> <span class="token punctuation">[</span>nvarchar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
 <span class="token keyword">CONSTRAINT</span> <span class="token punctuation">[</span>PK_AbpAuditLogs<span class="token punctuation">]</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">CLUSTERED</span> 
<span class="token punctuation">(</span>
    <span class="token punctuation">[</span>Id<span class="token punctuation">]</span> <span class="token keyword">ASC</span>
<span class="token punctuation">)</span><span class="token keyword">WITH</span> <span class="token punctuation">(</span>PAD_INDEX <span class="token operator">=</span> <span class="token keyword">OFF</span><span class="token punctuation">,</span> STATISTICS_NORECOMPUTE <span class="token operator">=</span> <span class="token keyword">OFF</span><span class="token punctuation">,</span> IGNORE_DUP_KEY <span class="token operator">=</span> <span class="token keyword">OFF</span><span class="token punctuation">,</span> ALLOW_ROW_LOCKS <span class="token operator">=</span> <span class="token keyword">ON</span><span class="token punctuation">,</span> ALLOW_PAGE_LOCKS <span class="token operator">=</span> <span class="token keyword">ON</span><span class="token punctuation">,</span> OPTIMIZE_FOR_SEQUENTIAL_KEY <span class="token operator">=</span> <span class="token keyword">OFF</span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token punctuation">[</span><span class="token keyword">PRIMARY</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token punctuation">[</span><span class="token keyword">PRIMARY</span><span class="token punctuation">]</span> TEXTIMAGE_ON <span class="token punctuation">[</span><span class="token keyword">PRIMARY</span><span class="token punctuation">]</span>
GO
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></details>
</template>
