<template><h1 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>最新版<a href="https://www.microsoft.com/zh-cn/sql-server/sql-server-downloads" target="_blank" rel="noopener noreferrer">Sql Server 2019<ExternalLinkIcon/></a></p>
</div>
<h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/queries/select-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">SELECT<ExternalLinkIcon/></a></h2>
<p>SELECT语句用于从数据库中选取数据。
结果被存储在一个结果表中，称为结果集。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>SELECT 语句的处理顺序
以下步骤显示 SELECT 语句的处理顺序。</p>
<ol>
<li>
<p>FROM</p>
</li>
<li>
<p>ON</p>
</li>
<li>
<p>JOIN</p>
</li>
<li>
<p>WHERE</p>
</li>
<li>
<p>GROUP BY</p>
</li>
<li>
<p>WITH CUBE 或 WITH ROLLUP</p>
</li>
<li>
<p>HAVING</p>
</li>
<li>
<p>SELECT</p>
</li>
<li>
<p>DISTINCT</p>
</li>
<li>
<p>ORDER BY</p>
</li>
<li>
<p>TOP</p>
</li>
</ol>
</div>
<ul>
<li>语法</li>
</ul>
<CodeGroup>
<CodeGroupItem title="select column_name">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="select all">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">--  查询所有列,少用 *</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“name”,&quot;country&quot;列</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> NAME<span class="token punctuation">,</span>COUNTRY <span class="token keyword">FROM</span> WebSites<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Google</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">Facebook</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<h3 id="select-distinct" tabindex="-1"><a class="header-anchor" href="#select-distinct" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/queries/select-clause-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">SELECT DISTINCT<ExternalLinkIcon/></a></h3>
<p>SELECT DISTINCT 语句用于返回唯一不同的值。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表的“country”列中选取唯一不同的值，也就是去掉“country”列重复值</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> COUNTRY <span class="token keyword">FROM</span> WebSites<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<h3 id="select-top" tabindex="-1"><a class="header-anchor" href="#select-top" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/queries/top-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">SELECT TOP<ExternalLinkIcon/></a></h3>
<p>SELECT TOP 子句用于规定要返回的记录的数目。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">TOP</span> number<span class="token operator">|</span><span class="token keyword">percent</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中前面百分之50的记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">TOP</span> <span class="token number">50</span> <span class="token keyword">PERCENT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中前3条的记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">TOP</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<h3 id="select-into" tabindex="-1"><a class="header-anchor" href="#select-into" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/queries/select-into-clause-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">SELECT INTO<ExternalLinkIcon/></a></h3>
<p>SELECT...INTO在默认文件组中创建一个新表，并将来自查询的结果行插入该表中。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">INTO</span> newTable
<span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句将“WebSites”表“country”为“CN”值的数据进行备份。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> 
<span class="token keyword">INTO</span> WebSitesTemp 
<span class="token keyword">FROM</span> WebSites 
<span class="token keyword">Where</span> country<span class="token operator">=</span><span class="token string">'CN'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>输出结果为：</p>
<p><code>SELECT * FROM WebSitesTemp</code></p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<h3 id="alias" tabindex="-1"><a class="header-anchor" href="#alias" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/queries/select-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">ALIAS<ExternalLinkIcon/></a></h3>
<p>为表名或列名称指定别名</p>
<ul>
<li>语法</li>
</ul>
<CodeGroup>
<CodeGroupItem title="column alias">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">column</span> <span class="token keyword">as</span> alias_name
<span class="token keyword">FROM</span> table_name
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="table alias">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table_name <span class="token keyword">as</span> alias_name
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中将&quot;name&quot;列名改为“n”,将&quot;country&quot;列名改为“c”并查询所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> name <span class="token keyword">AS</span> c<span class="token punctuation">,</span>country <span class="token keyword">AS</span> c <span class="token keyword">FROM</span> WebSites<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">n</th>
<th style="text-align:left">c</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Google</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">Facebook</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<h2 id="where" tabindex="-1"><a class="header-anchor" href="#where" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/queries/where-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">WHERE<ExternalLinkIcon/></a></h2>
<p>WHERE子句用于过滤记录。用于提取那些满足指定条件的记录。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>查询条件,文本值需要加单引号<code>'</code>,数值不需要</p>
</div>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table_name <span class="token keyword">WHERE</span> column_name operator <span class="token keyword">value</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>WHERE子句中的运算符</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">操作符</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">=</td>
<td style="text-align:left">等于</td>
</tr>
<tr>
<td style="text-align:left">&lt;&gt;或！=</td>
<td style="text-align:left">不等于</td>
</tr>
<tr>
<td style="text-align:left">&gt;</td>
<td style="text-align:left">大于</td>
</tr>
<tr>
<td style="text-align:left">&lt;</td>
<td style="text-align:left">小于</td>
</tr>
<tr>
<td style="text-align:left">&gt;=</td>
<td style="text-align:left">大于等于</td>
</tr>
<tr>
<td style="text-align:left">&lt;=</td>
<td style="text-align:left">小于等于</td>
</tr>
<tr>
<td style="text-align:left">BETWEEN AND</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">LIKE</td>
<td style="text-align:left">模式匹配</td>
</tr>
<tr>
<td style="text-align:left">IN</td>
<td style="text-align:left">指定针对某个列的多个可能值</td>
</tr>
</tbody>
</table>
<ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取&quot;country&quot;列的值为“CN”的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites <span class="token keyword">WHERE</span> country<span class="token operator">=</span><span class="token string">'CN'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<h3 id="and-or" tabindex="-1"><a class="header-anchor" href="#and-or" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/queries/search-condition-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">AND &amp; OR<ExternalLinkIcon/></a></h3>
<p>AND &amp; OR 运算符用于基于一个以上的条件对记录进行过滤。</p>
<p>如果第一个条件和第二个条件成立，则AND运算符显示一条记录。</p>
<p>如果第一个条件和第二个条件只要有一个成立，则Or运算显示一条记录。</p>
<ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取&quot;country&quot;列的值为“CN”且Alexa排名大于等于“20”的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites <span class="token keyword">WHERE</span> country<span class="token operator">=</span><span class="token string">'CN'</span> <span class="token operator">AND</span> alexa<span class="token operator">>=</span><span class="token number">20</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取&quot;country&quot;列为“CN”或“USA”的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites <span class="token keyword">WHERE</span> country<span class="token operator">=</span><span class="token string">'CN'</span> <span class="token operator">OR</span> country<span class="token operator">=</span><span class="token string">'USA'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“Websites”表中选取alexa列排名大于“15”且country列为“CN”或“USA”的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites <span class="token keyword">WHERE</span> <span class="token punctuation">(</span>country<span class="token operator">=</span><span class="token string">'CN'</span> <span class="token operator">OR</span> country<span class="token operator">=</span><span class="token string">'USA'</span><span class="token punctuation">)</span> <span class="token operator">AND</span> alexa<span class="token operator">></span><span class="token number">15</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<h3 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/language-elements/in-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">IN<ExternalLinkIcon/></a></h3>
<p>IN操作符允许您在WHERE子句中规定多个值</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> coulmn_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table_name
<span class="token keyword">WHERE</span> column_name <span class="token operator">in</span> <span class="token punctuation">(</span>value1<span class="token punctuation">,</span>value2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“name”列值为“google”或&quot;facebook&quot;的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> name <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">'google'</span><span class="token punctuation">,</span><span class="token string">'facebook'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<h3 id="between" tabindex="-1"><a class="header-anchor" href="#between" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/language-elements/between-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">BETWEEN<ExternalLinkIcon/></a></h3>
<p>BETWEEN操作符用于选取介于两个值之间的数据范围内的值。这些值可以是数值、文本或日期。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>BETWEEN AND 在不同版本的数据库中边界问题可能不同，需要自己检测。</p>
</div>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> coulmn_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table_name
<span class="token keyword">WHERE</span> column_name <span class="token operator">BETWEEN</span> value1 <span class="token operator">AND</span> value2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“alexa”列值在1和10之间的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> alexa <span class="token operator">BETWEEN</span> <span class="token number">1</span> <span class="token operator">AND</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“alexa”列值不在1和10之间的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> alexa <span class="token operator">NOT</span> <span class="token operator">BETWEEN</span> <span class="token number">1</span> <span class="token operator">AND</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“alexa”列值在1和20之间但”country”列值不为“USA”的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> alexa <span class="token operator">NOT</span> <span class="token operator">BETWEEN</span> <span class="token number">1</span> <span class="token operator">AND</span> <span class="token number">20</span>
<span class="token operator">AND</span> country <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">'USA'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“NAME”列值在字母“A”和“H”之间的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> name <span class="token operator">BETWEEN</span> <span class="token string">'A'</span> <span class="token operator">AND</span> <span class="token string">'H'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“NAME”列值不在字母“A”和“H”之间的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> name <span class="token operator">NOT</span> <span class="token operator">BETWEEN</span> <span class="token string">'A'</span> <span class="token operator">AND</span> <span class="token string">'H'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<h3 id="like" tabindex="-1"><a class="header-anchor" href="#like" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/queries/search-condition-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">LIKE<ExternalLinkIcon/></a></h3>
<p>LIKE操作符用于在WHERE子句中搜索列中的指定模式。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table_name
<span class="token keyword">WHERE</span> column_name <span class="token operator">LIKE</span> pattern<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“name”列值以字母“G”开头的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> name <span class="token operator">LIKE</span> <span class="token string">'G%'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“name”列值以字母“k”结尾的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> name <span class="token operator">LIKE</span> <span class="token string">'%k'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">54</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“name”列值包含字母“oo”的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> name <span class="token operator">LIKE</span> <span class="token string">'%oo%'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“name”列值不包含字母“oo”的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> name <span class="token operator">NOT</span> <span class="token operator">LIKE</span> <span class="token string">'%oo%'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<h3 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/language-elements/like-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">通配符<ExternalLinkIcon/></a></h3>
<p>通配符可用于替代字符串中的任何其他字符，与LIKE 操作符一起使用。</p>
<table>
<thead>
<tr>
<th style="text-align:left">通配符</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">%</td>
<td style="text-align:left">包含零个或多个字符的任意字符串</td>
</tr>
<tr>
<td style="text-align:left">_(下划线)</td>
<td style="text-align:left">任何单个字符</td>
</tr>
<tr>
<td style="text-align:left">[]</td>
<td style="text-align:left">指定范围([a-f])或集合([abcdef]中的任何单个字符)</td>
</tr>
<tr>
<td style="text-align:left">[^]</td>
<td style="text-align:left">不属于指定范围([a-f])或集合([abcdef])的任何单个字符</td>
</tr>
</tbody>
</table>
<ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“name”列值以一个任意字符开始，然后是“oogle”的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> name <span class="token operator">LIKE</span> <span class="token string">'_oogle'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“name”列值以字母“G”开始，然后是一个任意字符，然后是“o”，然后是一个任意字符，然后是“le”的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> name <span class="token operator">LIKE</span> <span class="token string">'G_o_le'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“name”列值以字母”A“到字母”H“开始的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> name <span class="token operator">LIKE</span> <span class="token string">'[A-H]%'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取“name”列值不以字母”A“到字母”H“开始的所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> name <span class="token operator">LIKE</span> <span class="token string">'[^A-H]%'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<h2 id="order-by" tabindex="-1"><a class="header-anchor" href="#order-by" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/queries/select-order-by-clause-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">ORDER BY<ExternalLinkIcon/></a></h2>
<p>ORDER BY 关键字用于对结果集进行排序</p>
<p>ORDER BY 关键字默认按照升序对记录进行排序。如果需要按照降序对记录进行排序，可以使用DESC关键字。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">,</span>column_name 
<span class="token keyword">FROM</span> table_name 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> column_name<span class="token punctuation">,</span>column_name <span class="token keyword">ASC</span><span class="token operator">|</span><span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取所有记录，并按照“alexa”列排序</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> alexa<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取所有记录，并按照“alexa”列降序排序</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> alexa <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从“WebSites”表中选取所有记录，并按照“country”和“alexa”列排序</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> WebSites <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> country<span class="token punctuation">,</span>alexa<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<h2 id="insert-into" tabindex="-1"><a class="header-anchor" href="#insert-into" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/statements/insert-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">INSERT INTO<ExternalLinkIcon/></a></h2>
<p>INSERT INTO 语句用于向表中插入新记录。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>INSERT INTO SELECT：</p>
<p>将SELECT查询出来的结果集INSERT INTO 表中，按列的顺序批量插入。INSERT INTO 表真实存在。</p>
<p>示例：insert into WebSites(name,url,country) select 'baidu','https://www.baidu.com/','CN'</p>
<p>SELECT INTO FROM：</p>
<p>将SELECT查询出的结果集插入INTO 表中，INTO 表不存在，一般做零时表使用。</p>
<p>示例：SELECT name,url,country INTO temp FROM Websites;</p>
</div>
<ul>
<li>语法</li>
</ul>
<CodeGroup>
<CodeGroupItem title="insert into columns">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table_name<span class="token punctuation">(</span>column1<span class="token punctuation">,</span>column2<span class="token punctuation">,</span>column3<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token keyword">VALUES</span><span class="token punctuation">(</span>value1<span class="token punctuation">,</span>value2<span class="token punctuation">,</span>value3<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="insert into">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- 不推荐使用这种写法</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table_name
<span class="token keyword">VALUES</span><span class="token punctuation">(</span>value1<span class="token punctuation">,</span>value2<span class="token punctuation">,</span>value3<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句向“WebSites”表中插入一条新记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> Websites<span class="token punctuation">(</span>name<span class="token punctuation">,</span>url<span class="token punctuation">,</span>alexa<span class="token punctuation">,</span>country<span class="token punctuation">)</span>
<span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">'BaiDu'</span><span class="token punctuation">,</span><span class="token string">'https://www.baidu.com/'</span><span class="token punctuation">,</span><span class="token string">'40'</span><span class="token punctuation">,</span><span class="token string">'CN'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left">BaiDu</td>
<td style="text-align:left">https://www.baidu.com/</td>
<td style="text-align:left">40</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<h3 id="insert-into-select" tabindex="-1"><a class="header-anchor" href="#insert-into-select" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/statements/insert-transact-sql?view=sql-server-ver15#OtherTables" target="_blank" rel="noopener noreferrer">INSERT INTO SELECT<ExternalLinkIcon/></a></h3>
<p>INSERT INTO SELECT语句从一个表复制数据，然后把结果集插入到一个已存在的表中。目标表中任何已存在的行都不会受影响</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table_name1<span class="token punctuation">(</span>column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> column_names <span class="token keyword">FROM</span> table_name2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>“Apps”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">app_name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">QQ APP</td>
<td style="text-align:left"><a href="https://im.qq.com/" target="_blank" rel="noopener noreferrer">https://im.qq.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao APP</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句将“Apps”表结果插入到“WebSites”表中。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> WebSites<span class="token punctuation">(</span>name<span class="token punctuation">,</span>url<span class="token punctuation">,</span>country<span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> name<span class="token punctuation">,</span>url<span class="token punctuation">,</span>country <span class="token keyword">FROM</span> Apps<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：<code>SELECT * FROM WebSites</code></p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">100</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left">QQ APP</td>
<td style="text-align:left"><a href="https://im.qq.com/" target="_blank" rel="noopener noreferrer">https://im.qq.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">6</td>
<td style="text-align:left">TaoBao APP</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/queries/update-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">UPDATE<ExternalLinkIcon/></a></h2>
<p>UPDATE语句用于更新表中的记录。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>WHERE子句规定哪条记录或者哪些记录需要更新。如果忽略了WHERE子句，所有的记录将被更新</p>
</div>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">UPDATE</span> table_name
<span class="token keyword">SET</span> column1<span class="token operator">=</span>value1<span class="token punctuation">,</span>column2<span class="token operator">=</span>value2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">WHERE</span> some_column<span class="token operator">=</span>some_value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句将“WebSites”表中当“name”列为“Google”时，把“alexa”排名更新为100，“country”更新为“USA”</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">UPDATE</span> Websites
<span class="token keyword">SET</span> alexa<span class="token operator">=</span><span class="token string">'100'</span><span class="token punctuation">,</span>country<span class="token operator">=</span><span class="token string">'USA'</span>
<span class="token keyword">WHERE</span> name<span class="token operator">=</span><span class="token string">'google'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">100</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<h2 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/statements/truncate-table-transact-sql?redirectedfrom=MSDN&amp;view=sql-server-ver15" target="_blank" rel="noopener noreferrer">DELETE<ExternalLinkIcon/></a></h2>
<p>DELETE语句用于删除表中的记录</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>WHERE子句规定哪条记录或者哪些记录需要删除。如果忽略了WHERE子句，所有的记录将被删除</p>
</div>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> table_name
<span class="token keyword">WHERE</span> some_column<span class="token operator">=</span>some_value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句将“WebSites”表中当“name”列值为“facebook”时的记录删除</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> Websites
<span class="token keyword">WHERE</span> name<span class="token operator">=</span><span class="token string">'facebook'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句在不删除表的情况下，删除“WebSites”表中所有的记录，意味着表结构、属性、索引将保持不变</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>下面的SQL语句在不删除表的情况下，快速删除“WebSites”表中所有的记录，意味着表结构、属性、索引将保持不变</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">TRUNCATE</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/queries/from-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">JOIN<ExternalLinkIcon/></a></h2>
<p>JOIN用于把来自两个或者多个表的记录集合记录。</p>
<p>联接使用以下Transact-SQL语法以逻辑方式表示：</p>
<ul>
<li>
<p>INNER JOIN</p>
<p>指定返回所有匹配的记录。放弃两个表中不匹配的记录。如果未指定任何链接类型，此设置为默认设置。</p>
</li>
<li>
<p>LEFT [OUTER] JOIN</p>
<p>即使右表中没有匹配，也从左表返回所有的记录</p>
</li>
<li>
<p>RIGHT [OUTER] JOIN</p>
<p>即使左表中没有任何匹配，也在右表中返回所有的记录</p>
</li>
<li>
<p>FULL [OUTER] JOIN</p>
<p>指定在结果集中包括左表或右表中部满足链接条件的行，并将对应于另一个表的输出列设为NULL。这是对通常由INNER JOIN返回的所有行的补充。</p>
</li>
<li>
<p>CROSS JOIN</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>交叉联接查询中缺少<code>ON</code>子句。</p>
</div>
<p>指定两个表的叉积。返回相同的行。</p>
</li>
</ul>
<h3 id="inner-join" tabindex="-1"><a class="header-anchor" href="#inner-join" aria-hidden="true">#</a> INNER JOIN</h3>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table1
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> table2
<span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name<span class="token operator">=</span>table2<span class="token punctuation">.</span>column_name<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>“Access_Log”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">siteid</th>
<th style="text-align:left">count</th>
<th style="text-align:left">latestdate</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">1</td>
<td style="text-align:left">50</td>
<td style="text-align:left">2015-01-01</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">4</td>
<td style="text-align:left">63</td>
<td style="text-align:left">2016-01-01</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">2</td>
<td style="text-align:left">42</td>
<td style="text-align:left">2017-01-01</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句将“WebSites”，“Access_Log”表内联接查询返回所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> WebSites<span class="token punctuation">.</span>name<span class="token punctuation">,</span>Access_Log<span class="token punctuation">.</span>count<span class="token punctuation">,</span>Access_Log<span class="token punctuation">.</span>latestdate
<span class="token keyword">FROM</span> WebSites
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> Access_Log
<span class="token keyword">ON</span> WebSites<span class="token punctuation">.</span>id<span class="token operator">=</span>Access_Log<span class="token punctuation">.</span>siteid
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> Access_Log<span class="token punctuation">.</span>Count<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:left">count</th>
<th style="text-align:left">latestdate</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left">42</td>
<td style="text-align:left">2017-01-01</td>
</tr>
<tr>
<td style="text-align:left">Google</td>
<td style="text-align:left">50</td>
<td style="text-align:left">2015-01-01</td>
</tr>
<tr>
<td style="text-align:left">Facebook</td>
<td style="text-align:left">63</td>
<td style="text-align:left">2016-01-01</td>
</tr>
</tbody>
</table>
<h3 id="left-join" tabindex="-1"><a class="header-anchor" href="#left-join" aria-hidden="true">#</a> LEFT JOIN</h3>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table1
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> table2
<span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name<span class="token operator">=</span>table2<span class="token punctuation">.</span>column_name<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>“Access_Log”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">siteid</th>
<th style="text-align:left">count</th>
<th style="text-align:left">latestdate</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">1</td>
<td style="text-align:left">50</td>
<td style="text-align:left">2015-01-01</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">4</td>
<td style="text-align:left">63</td>
<td style="text-align:left">2016-01-01</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">2</td>
<td style="text-align:left">42</td>
<td style="text-align:left">2017-01-01</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句将“WebSites”，“Access_Log”表左联接查询返回所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> WebSites<span class="token punctuation">.</span>name<span class="token punctuation">,</span>Access_Log<span class="token punctuation">.</span>count<span class="token punctuation">,</span>Access_Log<span class="token punctuation">.</span>latestdate
<span class="token keyword">FROM</span> WebSites
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> Access_Log
<span class="token keyword">ON</span> WebSites<span class="token punctuation">.</span>id<span class="token operator">=</span>Access_Log<span class="token punctuation">.</span>siteid
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> Access_Log<span class="token punctuation">.</span>Count <span class="token keyword">desc</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:left">count</th>
<th style="text-align:left">latestdate</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Facebook</td>
<td style="text-align:left">63</td>
<td style="text-align:left">2016-01-01</td>
</tr>
<tr>
<td style="text-align:left">Google</td>
<td style="text-align:left">50</td>
<td style="text-align:left">2015-01-01</td>
</tr>
<tr>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left">42</td>
<td style="text-align:left">2017-01-01</td>
</tr>
<tr>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left">null</td>
<td style="text-align:left">null</td>
</tr>
</tbody>
</table>
<h3 id="right-join" tabindex="-1"><a class="header-anchor" href="#right-join" aria-hidden="true">#</a> RIGHT JOIN</h3>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table1
<span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> table2
<span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name<span class="token operator">=</span>table2<span class="token punctuation">.</span>column_name<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>“Access_Log”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">siteid</th>
<th style="text-align:left">count</th>
<th style="text-align:left">latestdate</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">1</td>
<td style="text-align:left">50</td>
<td style="text-align:left">2015-01-01</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">4</td>
<td style="text-align:left">63</td>
<td style="text-align:left">2016-01-01</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">2</td>
<td style="text-align:left">42</td>
<td style="text-align:left">2017-01-01</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句将“WebSites”，“Access_Log”表右联接查询返回所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> WebSites<span class="token punctuation">.</span>name<span class="token punctuation">,</span>Access_Log<span class="token punctuation">.</span>count<span class="token punctuation">,</span>Access_Log<span class="token punctuation">.</span>latestdate
<span class="token keyword">FROM</span> WebSites
<span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> Access_Log
<span class="token keyword">ON</span> WebSites<span class="token punctuation">.</span>id<span class="token operator">=</span>Access_Log<span class="token punctuation">.</span>siteid
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> Access_Log<span class="token punctuation">.</span>Count <span class="token keyword">desc</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:left">count</th>
<th style="text-align:left">latestdate</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Facebook</td>
<td style="text-align:left">63</td>
<td style="text-align:left">2016-01-01</td>
</tr>
<tr>
<td style="text-align:left">Google</td>
<td style="text-align:left">50</td>
<td style="text-align:left">2015-01-01</td>
</tr>
<tr>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left">42</td>
<td style="text-align:left">2017-01-01</td>
</tr>
</tbody>
</table>
<h3 id="full-join" tabindex="-1"><a class="header-anchor" href="#full-join" aria-hidden="true">#</a> FULL JOIN</h3>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table1
<span class="token keyword">FULL</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> table2
<span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name<span class="token operator">=</span>table2<span class="token punctuation">.</span>column_name<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>“Access_Log”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">siteid</th>
<th style="text-align:left">count</th>
<th style="text-align:left">latestdate</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">1</td>
<td style="text-align:left">50</td>
<td style="text-align:left">2015-01-01</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">4</td>
<td style="text-align:left">63</td>
<td style="text-align:left">2016-01-01</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">2</td>
<td style="text-align:left">42</td>
<td style="text-align:left">2017-01-01</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句将“WebSites”，“Access_Log”表全联接查询返回所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> WebSites<span class="token punctuation">.</span>name<span class="token punctuation">,</span>Access_Log<span class="token punctuation">.</span>count<span class="token punctuation">,</span>Access_Log<span class="token punctuation">.</span>latestdate
<span class="token keyword">FROM</span> WebSites
<span class="token keyword">FULL</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> Access_Log
<span class="token keyword">ON</span> WebSites<span class="token punctuation">.</span>id<span class="token operator">=</span>Access_Log<span class="token punctuation">.</span>siteid
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> Access_Log<span class="token punctuation">.</span>Count <span class="token keyword">desc</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:left">count</th>
<th style="text-align:left">latestdate</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Facebook</td>
<td style="text-align:left">63</td>
<td style="text-align:left">2016-01-01</td>
</tr>
<tr>
<td style="text-align:left">Google</td>
<td style="text-align:left">50</td>
<td style="text-align:left">2015-01-01</td>
</tr>
<tr>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left">42</td>
<td style="text-align:left">2017-01-01</td>
</tr>
<tr>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left">null</td>
<td style="text-align:left">null</td>
</tr>
</tbody>
</table>
<h3 id="cross-join" tabindex="-1"><a class="header-anchor" href="#cross-join" aria-hidden="true">#</a> CROSS JOIN</h3>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table1
<span class="token keyword">CROSS</span> <span class="token keyword">JOIN</span> table2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>“Access_Log”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">siteid</th>
<th style="text-align:left">count</th>
<th style="text-align:left">latestdate</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">1</td>
<td style="text-align:left">50</td>
<td style="text-align:left">2015-01-01</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">4</td>
<td style="text-align:left">63</td>
<td style="text-align:left">2016-01-01</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">2</td>
<td style="text-align:left">42</td>
<td style="text-align:left">2017-01-01</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句将“WebSites”，“Access_Log”表交叉联接查询返回所有记录</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> WebSites<span class="token punctuation">.</span>name<span class="token punctuation">,</span>Access_Log<span class="token punctuation">.</span>count<span class="token punctuation">,</span>Access_Log<span class="token punctuation">.</span>latestdate
<span class="token keyword">FROM</span> WebSites
<span class="token keyword">CROSS</span> <span class="token keyword">JOIN</span> Access_Log
<span class="token keyword">ON</span> WebSites<span class="token punctuation">.</span>id<span class="token operator">=</span>Access_Log<span class="token punctuation">.</span>siteid
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> Access_Log<span class="token punctuation">.</span>Count <span class="token keyword">desc</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:left">count</th>
<th style="text-align:left">latestdate</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Google</td>
<td style="text-align:left">63</td>
<td style="text-align:left">2016-01-01</td>
</tr>
<tr>
<td style="text-align:left">Google</td>
<td style="text-align:left">50</td>
<td style="text-align:left">2015-01-01</td>
</tr>
<tr>
<td style="text-align:left">Google</td>
<td style="text-align:left">42</td>
<td style="text-align:left">2017-01-01</td>
</tr>
<tr>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left">63</td>
<td style="text-align:left">2016-01-01</td>
</tr>
<tr>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left">50</td>
<td style="text-align:left">2015-01-01</td>
</tr>
<tr>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left">42</td>
<td style="text-align:left">2017-01-01</td>
</tr>
<tr>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left">63</td>
<td style="text-align:left">2016-01-01</td>
</tr>
<tr>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left">50</td>
<td style="text-align:left">2015-01-01</td>
</tr>
<tr>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left">42</td>
<td style="text-align:left">2017-01-01</td>
</tr>
<tr>
<td style="text-align:left">Facebook</td>
<td style="text-align:left">63</td>
<td style="text-align:left">2016-01-01</td>
</tr>
<tr>
<td style="text-align:left">Facebook</td>
<td style="text-align:left">50</td>
<td style="text-align:left">2015-01-01</td>
</tr>
<tr>
<td style="text-align:left">Facebook</td>
<td style="text-align:left">42</td>
<td style="text-align:left">2017-01-01</td>
</tr>
</tbody>
</table>
<h2 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/language-elements/set-operators-union-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">UNION<ExternalLinkIcon/></a></h2>
<p>UNION操作符合并两个或多个SELECT语句的结果集</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>UNION 内部的每个SELECT语句必须拥有相同数据的列。列也必须拥有相似的数据类型。同时，每个SELECT语句中的列的顺序必须相同</p>
</div>
<ul>
<li>语法</li>
</ul>
<CodeGroup>
<CodeGroupItem title="UNION">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">--结果集不重复</span>
<span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table1
<span class="token keyword">UNION</span>
<span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="UNION ALL">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">--结果集重复</span>
<span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table1
<span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
<span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>“Apps”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">app_name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">QQ APP</td>
<td style="text-align:left"><a href="https://im.qq.com/" target="_blank" rel="noopener noreferrer">https://im.qq.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao APP</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句将“WebSites”，“Apps”表返回“country”列不同值的所有记录。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> country <span class="token keyword">FROM</span> WebSites
<span class="token keyword">UNION</span>
<span class="token keyword">SELECT</span> country <span class="token keyword">FROM</span> Apps
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句将“WebSites”，“Apps”表返回“country”列所有记录。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> country <span class="token keyword">FROM</span> WebSites
<span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
<span class="token keyword">SELECT</span> country <span class="token keyword">FROM</span> Apps
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
</template>
