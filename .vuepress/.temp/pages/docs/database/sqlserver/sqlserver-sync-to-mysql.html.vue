<template><h1 id="sql-server-同步-mysql" tabindex="-1"><a class="header-anchor" href="#sql-server-同步-mysql" aria-hidden="true">#</a> SQL Server 同步 MySql</h1>
<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>使用数据库自带的功能，配置即可实现双向同步</p>
</div>
<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2>
<p><a href="https://dev.mysql.com/downloads/installer/" target="_blank" rel="noopener noreferrer">MySql传送门<ExternalLinkIcon/></a></p>
<p><a href="https://dev.mysql.com/downloads/connector/odbc/" target="_blank" rel="noopener noreferrer">MySql ODBC传送门<ExternalLinkIcon/></a></p>
<h2 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙" aria-hidden="true">#</a> 防火墙</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>MySql:3306端口</p>
</div>
<h2 id="mysql流程" tabindex="-1"><a class="header-anchor" href="#mysql流程" aria-hidden="true">#</a> MySql流程</h2>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>如果直接对目标表操作请忽略全部步骤，直接查看Sql Server流程</p>
</div>
<h3 id="中间库" tabindex="-1"><a class="header-anchor" href="#中间库" aria-hidden="true">#</a> 中间库</h3>
<p>该方式以中间库、表为中心流转，比较繁琐。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>中间库名：TempDataBase</p>
<p>中间表名：SnapLink</p>
<p>目标表名：Snap</p>
</div>
<ul>
<li>表结构</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">tag</td>
<td style="text-align:left">varchar</td>
<td style="text-align:left">标签</td>
</tr>
<tr>
<td style="text-align:left">datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">时间</td>
</tr>
<tr>
<td style="text-align:left">cvalue</td>
<td style="text-align:left">decimal</td>
<td style="text-align:left">数据</td>
</tr>
</tbody>
</table>
<ul>
<li>脚本</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>中间表和目标表结构保持一致</p>
</div>
<CodeGroup>
<CodeGroupItem title="中间库">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">Create</span> <span class="token keyword">database</span> TempDataBase<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="中间表">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">Create</span> <span class="token keyword">table</span> <span class="token identifier"><span class="token punctuation">`</span>snap<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    <span class="token identifier"><span class="token punctuation">`</span>tag<span class="token punctuation">`</span></span>       <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">character</span> <span class="token keyword">set</span> utf8mb4 <span class="token keyword">collate</span> utf8mb4_0900_ai_ci <span class="token boolean">null</span> <span class="token keyword">default</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">`</span>datetime<span class="token punctuation">`</span></span>  <span class="token keyword">datetime</span> <span class="token boolean">null</span> <span class="token keyword">default</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">`</span>cvalue<span class="token punctuation">`</span></span>    <span class="token keyword">decimal</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token boolean">null</span> <span class="token keyword">default</span> <span class="token boolean">null</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li>中间库账号</li>
</ul>
<CodeGroup>
<CodeGroupItem title="创建账号">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">'demo'</span><span class="token variable">@'192.168.1.121'</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">'demo'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="删除账号">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">USER</span> <span class="token string">'demo'</span><span class="token variable">@'192.168.1.121'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="账号授权">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span> <span class="token keyword">ON</span> TempDataBase<span class="token punctuation">.</span>snap <span class="token keyword">to</span> <span class="token string">'demo'</span><span class="token variable">@'192.168.1.121'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="刷新权限">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li>远程访问表</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>FEDEATED引擎规则：scheme://user_name[:password]@host_name[:port_num]/db_name/tbl_name</p>
</div>
<CodeGroup>
<CodeGroupItem title="远程访问表">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">Create</span> <span class="token keyword">table</span> <span class="token identifier"><span class="token punctuation">`</span>snaplink<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    <span class="token identifier"><span class="token punctuation">`</span>tag<span class="token punctuation">`</span></span>       <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">character</span> <span class="token keyword">set</span> utf8mb4 <span class="token keyword">collate</span> utf8mb4_0900_ai_ci <span class="token boolean">null</span> <span class="token keyword">default</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">`</span>datetime<span class="token punctuation">`</span></span>  <span class="token keyword">datetime</span> <span class="token boolean">null</span> <span class="token keyword">default</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">`</span>cvalue<span class="token punctuation">`</span></span>    <span class="token keyword">decimal</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token boolean">null</span> <span class="token keyword">default</span> <span class="token boolean">null</span>
<span class="token punctuation">)</span><span class="token keyword">ENGINE</span><span class="token operator">=</span>FEDERATED CONNECTION<span class="token operator">=</span><span class="token string">'mysql://demo:demo@192.168.1.104:3306/TempDataBase/snap'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeGroupItem>
<p>:::</p>
</CodeGroup>
<ul>
<li>存储过程</li>
</ul>
<CodeGroup>
<CodeGroupItem title="存储过程">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">delimiter</span> $$
<span class="token keyword">create</span> <span class="token keyword">procedure</span> proc_upload_to_temp<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">begin</span>
  <span class="token keyword">update</span> snap<span class="token punctuation">,</span>snaplink <span class="token keyword">set</span> snap<span class="token punctuation">.</span><span class="token keyword">datetime</span><span class="token operator">=</span>snaplink<span class="token punctuation">.</span><span class="token keyword">datetime</span><span class="token punctuation">,</span>
  snap<span class="token punctuation">.</span>cvalue<span class="token operator">=</span>snaplink<span class="token punctuation">.</span>cvalue
  <span class="token keyword">where</span> snap<span class="token punctuation">.</span>tag<span class="token operator">=</span>snaplink<span class="token punctuation">.</span>tag
<span class="token keyword">end</span>
<span class="token keyword">delimiter</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
<p>:::</p>
</CodeGroup>
<ul>
<li>调度</li>
</ul>
<CodeGroup>
<CodeGroupItem title="事件">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> EVENT <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> upload_to_temp_event
<span class="token keyword">ON</span> SCHEDULE EVERY <span class="token number">15</span> <span class="token keyword">MINUTE</span>
<span class="token keyword">ON</span> COMPLETION PRESERVE <span class="token keyword">ENABLE</span>
<span class="token keyword">DO</span> <span class="token keyword">CALL</span> proc_upload_to_temp<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
<p>:::</p>
</CodeGroup>
<h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3>
<CodeGroup>
<CodeGroupItem title="查看事件">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SHOW</span> events<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="开启">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> EVENT upload_to_temp <span class="token keyword">ENABLE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="关闭">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> EVENT upload_to_temp <span class="token keyword">DISABLE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="删除">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> EVENT <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> upload_to_temp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="调度" tabindex="-1"><a class="header-anchor" href="#调度" aria-hidden="true">#</a> 调度</h3>
<CodeGroup>
<CodeGroupItem title="查看调度">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">'EVENT_SCHEDULER'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="开启">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> EVENT_SCHEDULER <span class="token operator">=</span> <span class="token keyword">ON</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="关闭">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> EVENT_SCHEDULER <span class="token operator">=</span> <span class="token keyword">OFF</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="引擎" tabindex="-1"><a class="header-anchor" href="#引擎" aria-hidden="true">#</a> 引擎</h3>
<CodeGroup>
<CodeGroupItem title="查看引擎">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SHOW</span> ENGINES<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li>
<p>启用FEDERATED</p>
<ul>
<li>
<p>文件路径</p>
<p>默认 C:\ProgramData\MySQL\MySQL Server 8.0\my.ini</p>
</li>
<li>
<p>添加引擎</p>
<p>文件末尾添加<strong>federated</strong></p>
</li>
<li>
<p>重启mysql服务</p>
</li>
</ul>
</li>
</ul>
<h2 id="sql-server-流程" tabindex="-1"><a class="header-anchor" href="#sql-server-流程" aria-hidden="true">#</a> Sql Server 流程</h2>
<h3 id="配置odbc" tabindex="-1"><a class="header-anchor" href="#配置odbc" aria-hidden="true">#</a> 配置ODBC</h3>
<ul>
<li>
<p>打开ODBC</p>
<p>搜索<code>ODBC</code></p>
</li>
<li>
<p>添加系统数据源</p>
<p><code>系统DSN</code>-&gt;<code>添加</code>-&gt;<code>MySQL ODBC 8.0 Unicode Driver</code></p>
</li>
<li>
<p>配置系统数据源</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>TCP/IP Server 为目标库或中间库的IP和端口</p>
</div>
<CodeGroup>
<CodeGroupItem title="中间库配置示例">
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code>|Data Srouce Name |MySql        |
|Description      |MySql        |
|TCP/IP Server    |192.168.1.104|
|Port             |3306         |
|User             |demo         |
|Password         |demo         |
|Database         |TempDataBase |
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="配置链接服务器" tabindex="-1"><a class="header-anchor" href="#配置链接服务器" aria-hidden="true">#</a> 配置链接服务器</h3>
<ul>
<li>
<p>新建链接服务器</p>
<p>路径：<code>服务器对象</code>-&gt;<code>链接服务器</code>;
选中右击新建</p>
</li>
<li>
<p>配置链接服务器</p>
</li>
</ul>
<CodeGroup>
<CodeGroupItem title="常规">
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code>|链接服务器(N)     |MySql                                     |
|服务器类型        |其他数据源                                 |
|提供程序(p)       |Microsoft OLE DB Provider for ODBC Drivers|
|数据源            |MySql                                     |
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="安全性">
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code>|远程登录(R)       |demo  |
|使用密码(P)       |demo  |
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
