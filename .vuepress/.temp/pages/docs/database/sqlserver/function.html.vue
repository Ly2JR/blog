<template><h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h1>
<p>SQL拥有很多可用于计算的内置函数</p>
<h2 id="aggregate函数" tabindex="-1"><a class="header-anchor" href="#aggregate函数" aria-hidden="true">#</a> Aggregate函数</h2>
<h3 id="avg" tabindex="-1"><a class="header-anchor" href="#avg" aria-hidden="true">#</a> AVG</h3>
<p>AVG() 函数返回数值列的平均值</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>column_name<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>演示</li>
</ul>
<p>下面是&quot;access_log&quot;表的数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">aid</th>
<th style="text-align:left">site_id</th>
<th style="text-align:left">count</th>
<th style="text-align:left">date</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">1</td>
<td style="text-align:left">45</td>
<td style="text-align:left">2016-05-10</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">3</td>
<td style="text-align:left">100</td>
<td style="text-align:left">2016-05-13</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">1</td>
<td style="text-align:left">230</td>
<td style="text-align:left">2016-05-14</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">2</td>
<td style="text-align:left">10</td>
<td style="text-align:left">2016-05-14</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从”access_log“表的”count“列获取平均值</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token keyword">from</span> access_log<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果：96.25</p>
<h3 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> COUNT</h3>
<p>COUNT() 函数返回匹配指定条件的行数(NULL不计入)。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>column_name<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>演示</li>
</ul>
<p>下面是&quot;access_log&quot;表的数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">aid</th>
<th style="text-align:left">site_id</th>
<th style="text-align:left">count</th>
<th style="text-align:left">date</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">1</td>
<td style="text-align:left">45</td>
<td style="text-align:left">2016-05-10</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">3</td>
<td style="text-align:left">100</td>
<td style="text-align:left">2016-05-13</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">1</td>
<td style="text-align:left">230</td>
<td style="text-align:left">2016-05-14</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">2</td>
<td style="text-align:left">10</td>
<td style="text-align:left">2016-05-14</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从”access_log“表的”site_id“列等于1的总数</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token keyword">from</span> access_log <span class="token keyword">WHERE</span> site_id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果：2</p>
<p>下面的SQL语句从”access_log“表的”site_id“列不相同的总数</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> site_id<span class="token punctuation">)</span> <span class="token keyword">from</span> access_log <span class="token keyword">WHERE</span> site_id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果：3</p>
<h3 id="max" tabindex="-1"><a class="header-anchor" href="#max" aria-hidden="true">#</a> MAX</h3>
<p>MAX() 函数返回指定列的最大值。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>column_name<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>演示</li>
</ul>
<p>下面是&quot;Websites&quot;表的数据</p>
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
<p>下面的SQL语句从”Websites“表的”alexa“列最大的值。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>alexa<span class="token punctuation">)</span> <span class="token keyword">from</span> Websites<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果：20</p>
<h3 id="min" tabindex="-1"><a class="header-anchor" href="#min" aria-hidden="true">#</a> MIN</h3>
<p>MIN() 函数返回指定列的最小值。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>column_name<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>演示</li>
</ul>
<p>下面是&quot;Websites&quot;表的数据</p>
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
<p>下面的SQL语句从”Websites“表的”alexa“列最小的值。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>alexa<span class="token punctuation">)</span> <span class="token keyword">from</span> Websites<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果：1</p>
<h3 id="sum" tabindex="-1"><a class="header-anchor" href="#sum" aria-hidden="true">#</a> SUM</h3>
<p>SUM() 函数返回指定列的总数。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>column_name<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>演示</li>
</ul>
<p>下面是&quot;access_log&quot;表的数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">aid</th>
<th style="text-align:left">site_id</th>
<th style="text-align:left">count</th>
<th style="text-align:left">date</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">1</td>
<td style="text-align:left">45</td>
<td style="text-align:left">2016-05-10</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">3</td>
<td style="text-align:left">100</td>
<td style="text-align:left">2016-05-13</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">1</td>
<td style="text-align:left">230</td>
<td style="text-align:left">2016-05-14</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">2</td>
<td style="text-align:left">10</td>
<td style="text-align:left">2016-05-14</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从”Websites“表的”count“列总数。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token keyword">from</span> access_log<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果：385</p>
<h2 id="scalar函数" tabindex="-1"><a class="header-anchor" href="#scalar函数" aria-hidden="true">#</a> Scalar函数</h2>
<h3 id="upper" tabindex="-1"><a class="header-anchor" href="#upper" aria-hidden="true">#</a> UPPER</h3>
<p>UPPER()函数把字段的值转换为大写。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> UPPER<span class="token punctuation">(</span>column_name<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>演示</li>
</ul>
<p>下面是&quot;Websites&quot;表的数据</p>
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
<p>下面的SQL语句从”Websites“表对”name“列的值转换为大写。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> UPPER<span class="token punctuation">(</span>name<span class="token punctuation">)</span> site_title <span class="token keyword">FROM</span> WebSites<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">site_title</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">GOOGLE</td>
</tr>
<tr>
<td style="text-align:left">TAOBAO</td>
</tr>
<tr>
<td style="text-align:left">WEIBO</td>
</tr>
<tr>
<td style="text-align:left">FACEBOOK</td>
</tr>
</tbody>
</table>
<h3 id="lower" tabindex="-1"><a class="header-anchor" href="#lower" aria-hidden="true">#</a> LOWER</h3>
<p>LOWER()函数把字段的值转换为小写。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> LOWER<span class="token punctuation">(</span>column_name<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>演示</li>
</ul>
<p>下面是&quot;Websites&quot;表的数据</p>
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
<p>下面的SQL语句从”Websites“表对”name“列的值转换为小写。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> LOWER<span class="token punctuation">(</span>name<span class="token punctuation">)</span> site_title <span class="token keyword">FROM</span> WebSites<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">site_title</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">google</td>
</tr>
<tr>
<td style="text-align:left">taobao</td>
</tr>
<tr>
<td style="text-align:left">weibo</td>
</tr>
<tr>
<td style="text-align:left">facebook</td>
</tr>
</tbody>
</table>
<h3 id="substring" tabindex="-1"><a class="header-anchor" href="#substring" aria-hidden="true">#</a> SUBSTRING</h3>
<p>SUBSTRING()函数用于返回SQL Server中字符、二进制文本、文本或图像表达式的一部分。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>start:指定返回字符的起始位置的整数或 bigint 表达式 。 （编号从 1 开始，意味着表达式中的第一个字符为 1）。 如果 start 小于 1，则返回的表达式的起始位置为表达式中指定的第一个字符 。 在这种情况下，返回的字符数是起始长度为-1 或0的总和的最大值。 如果 start 大于值表达式中的字符数，将返回一个零长度的表达式 。</p>
</div>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>SUBSTRING<span class="token punctuation">(</span>expression<span class="token punctuation">,</span><span class="token keyword">start</span><span class="token punctuation">,</span>length<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>演示</li>
</ul>
<p>下面是&quot;Websites&quot;表的数据</p>
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
<p>下面的SQL语句从”Websites“表对”name“列的前4个字符。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> SUBSTRING<span class="token punctuation">(</span>name<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span> site_title <span class="token keyword">FROM</span> WebSites<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">site_title</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">goog</td>
</tr>
<tr>
<td style="text-align:left">taob</td>
</tr>
<tr>
<td style="text-align:left">weib</td>
</tr>
<tr>
<td style="text-align:left">face</td>
</tr>
</tbody>
</table>
<h3 id="len" tabindex="-1"><a class="header-anchor" href="#len" aria-hidden="true">#</a> LEN</h3>
<p>LEN()函数返回文本字段中值的长度。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">LEN</span><span class="token punctuation">(</span>column_name<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>演示</li>
</ul>
<p>下面是&quot;Websites&quot;表的数据</p>
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
<p>下面的SQL语句从”Websites“表对”name“列值的长度。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> name<span class="token punctuation">,</span><span class="token function">LEN</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> name_length <span class="token keyword">FROM</span> WebSites<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:left">name_length</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Google</td>
<td style="text-align:left">6</td>
</tr>
<tr>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left">6</td>
</tr>
<tr>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left">5</td>
</tr>
<tr>
<td style="text-align:left">Facebook</td>
<td style="text-align:left">8</td>
</tr>
</tbody>
</table>
<h3 id="round" tabindex="-1"><a class="header-anchor" href="#round" aria-hidden="true">#</a> ROUND</h3>
<p>ROUND()函数返回一共数值，舍入到指定的长度或精度。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token function">ROUND</span><span class="token punctuation">(</span>numeric_expression<span class="token punctuation">,</span>length<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><em>numeric_expression</em>
是精确或近似数值数据类型类别（bit 数据类型除外）的表达式。</p>
<p><em>length</em>
它是 numeric_expression 的舍入精度。 length 必须是 tinyint、smallint 或 int 类型的表达式 。如果 length 为正数，则将 numeric_expression 舍入到 length 指定的小数位数 。 如果 length 为负数，则将 numeric_expression 小数点左边部分舍入到 length 指定的长度。</p>
<p><em>函数</em>
要执行的操作的类型。 function 的数据类型必须是 tinyint、smallint 或 int 。如果 function 省略或其值为 0（默认值），则对 numeric_expression 进行舍入。 如果指定了 0 以外的值，则将截断 numeric_expression。</p>
<ul>
<li>演示</li>
</ul>
<p>ROUND始终返回一个值。如果length为负数，并且大于小数点前的数字个数，则ROUND将返回0。</p>
<table>
<thead>
<tr>
<th style="text-align:left">示例</th>
<th style="text-align:left">结果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ROUND(748.58,-4)</td>
<td style="text-align:left">0</td>
</tr>
</tbody>
</table>
<p>如果length为负数，则无论什么数据类型，ROUND都将返回一共舍入的numeric_expression</p>
<table>
<thead>
<tr>
<th style="text-align:left">示例</th>
<th style="text-align:left">结果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ROUND(748.58,-1)</td>
<td style="text-align:left">750.00</td>
</tr>
<tr>
<td style="text-align:left">ROUND(748.58,-2)</td>
<td style="text-align:left">700.00</td>
</tr>
<tr>
<td style="text-align:left">ROUND(748.58,-3)</td>
<td style="text-align:left">导致算术溢出，因为748.58默认为decimal(5,2),它无法返回1000.00</td>
</tr>
<tr>
<td style="text-align:left">若要向上舍入到4位，请更改输入的数据类型。例如:SELECT ROUND(CAST(748.58 AS decimal(6,2)),3)</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<h2 id="group-by" tabindex="-1"><a class="header-anchor" href="#group-by" aria-hidden="true">#</a> GROUP BY</h2>
<p>GROUP BY语句用于结合聚合函数，根据一个或多个列对结果集进行分组。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">,</span>aggregate_function<span class="token punctuation">(</span>column_name<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
<span class="token keyword">WHERE</span> column_name operator <span class="token keyword">value</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> column_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>演示</li>
</ul>
<p>下面是&quot;Websites&quot;表的数据</p>
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
<p>下面是&quot;access_log&quot;表的数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">aid</th>
<th style="text-align:left">site_id</th>
<th style="text-align:left">count</th>
<th style="text-align:left">date</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">1</td>
<td style="text-align:left">45</td>
<td style="text-align:left">2016-05-10</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">3</td>
<td style="text-align:left">100</td>
<td style="text-align:left">2016-05-13</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">1</td>
<td style="text-align:left">230</td>
<td style="text-align:left">2016-05-14</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">2</td>
<td style="text-align:left">10</td>
<td style="text-align:left">2016-05-14</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从”Websites“表、”Access_log“表中统计网站访问记录。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> WebSites<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span>access_log<span class="token punctuation">.</span>aid<span class="token punctuation">)</span> <span class="token keyword">as</span> num
<span class="token keyword">FROM</span> Access_Log
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> WebSites
<span class="token keyword">ON</span> Access_Log<span class="token punctuation">.</span>site_id<span class="token operator">=</span>Websites<span class="token punctuation">.</span>id
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> WebSites<span class="token punctuation">.</span>name
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输出结果如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:left">num</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Google</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left">1</td>
</tr>
</tbody>
</table>
<h2 id="having" tabindex="-1"><a class="header-anchor" href="#having" aria-hidden="true">#</a> HAVING</h2>
<p>在SQL中增加HAVING子句原因是，WHERE关键字无法与聚合函数一起使用。
HAVING子句可以让筛选分组后的各组数据</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>WHERE在Group By前，Having在Group by之后。</p>
<p>聚合函数(avg、sum、max、min、count),不能作为条件放在Where之后，但可以放在Having之后。</p>
</div>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">,</span>aggregate_function<span class="token punctuation">(</span>column_name<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
<span class="token keyword">WHERE</span> column_name operator <span class="token keyword">value</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> column_name
<span class="token keyword">HAVING</span> aggregate_function<span class="token punctuation">(</span>column_name<span class="token punctuation">)</span> operator <span class="token keyword">value</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>演示</li>
</ul>
<p>下面是&quot;Websites&quot;表的数据</p>
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
<p>下面是&quot;access_log&quot;表的数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">aid</th>
<th style="text-align:left">site_id</th>
<th style="text-align:left">count</th>
<th style="text-align:left">date</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">1</td>
<td style="text-align:left">45</td>
<td style="text-align:left">2016-05-10</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">3</td>
<td style="text-align:left">101</td>
<td style="text-align:left">2016-05-13</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">1</td>
<td style="text-align:left">230</td>
<td style="text-align:left">2016-05-14</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">2</td>
<td style="text-align:left">10</td>
<td style="text-align:left">2016-05-14</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从”Websites“表、”Access_log“表中统计网站访问记录大于100的记录。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> Websites<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>access_log<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token keyword">as</span> nums
<span class="token keyword">FROM</span> Access_Log
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> WebSites
<span class="token keyword">ON</span> Access_Log<span class="token punctuation">.</span>site_id<span class="token operator">=</span>Websites<span class="token punctuation">.</span>id
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> WebSites<span class="token punctuation">.</span>name
<span class="token keyword">HAVING</span> <span class="token function">SUM</span><span class="token punctuation">(</span>access_log<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token operator">></span><span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>输出结果如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:left">num</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Google</td>
<td style="text-align:left">275</td>
</tr>
<tr>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left">101</td>
</tr>
</tbody>
</table>
<h2 id="exists" tabindex="-1"><a class="header-anchor" href="#exists" aria-hidden="true">#</a> EXISTS</h2>
<p>EXISTS运算符用于判断查询子句是否有记录，如果有一条或多条记录存在返回True,否则返回False。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table_name
<span class="token keyword">WHERE</span> <span class="token keyword">EXISTS</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> column_name <span class="token keyword">FROM</span> table_name <span class="token keyword">WHERE</span> condition<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>演示</li>
</ul>
<p>下面是&quot;Websites&quot;表的数据</p>
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
<p>下面是&quot;access_log&quot;表的数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">aid</th>
<th style="text-align:left">site_id</th>
<th style="text-align:left">count</th>
<th style="text-align:left">date</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">1</td>
<td style="text-align:left">45</td>
<td style="text-align:left">2016-05-10</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">3</td>
<td style="text-align:left">101</td>
<td style="text-align:left">2016-05-13</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">1</td>
<td style="text-align:left">230</td>
<td style="text-align:left">2016-05-14</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">2</td>
<td style="text-align:left">10</td>
<td style="text-align:left">2016-05-14</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从”Websites“表、”Access_log“表中统计网站访问记录大于100的记录。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> Websites<span class="token punctuation">.</span>name<span class="token punctuation">,</span>Websites<span class="token punctuation">.</span>url
<span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> <span class="token keyword">EXISTS</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> count <span class="token keyword">FROM</span> Access_log <span class="token keyword">WHERE</span> Websites<span class="token punctuation">.</span>id<span class="token operator">=</span>access_log<span class="token punctuation">.</span>site_id <span class="token operator">AND</span> count<span class="token operator">></span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>输出结果如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<p>下面的SQL语句从”Websites“表、”Access_log“表中统计网站访问记录不大于100的记录。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> Websites<span class="token punctuation">.</span>name<span class="token punctuation">,</span>Websites<span class="token punctuation">.</span>url
<span class="token keyword">FROM</span> WebSites
<span class="token keyword">WHERE</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> count <span class="token keyword">FROM</span> Access_log <span class="token keyword">WHERE</span> Websites<span class="token punctuation">.</span>id<span class="token operator">=</span>access_log<span class="token punctuation">.</span>site_id <span class="token operator">AND</span> count<span class="token operator">></span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>输出结果如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<h2 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> FORMAT</h2>
<p>返回以指定的格式和可选的区域性格式化的值。 使用 FORMAT 函数将日期/时间和数字值格式化为识别区域设置的字符串。 对于一般的数据类型转换，请使用 CAST 或 CONVERT。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token function">FORMAT</span><span class="token punctuation">(</span> <span class="token keyword">value</span><span class="token punctuation">,</span> format <span class="token punctuation">[</span><span class="token punctuation">,</span> culture <span class="token punctuation">]</span> <span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>参数</li>
</ul>
<p><em>value</em>
支持格式化的数据类型的表达式。 有关有效类型的列表，请参阅下面“备注”部分中的表。</p>
<p><em>format</em>
nvarchar 格式模式 。</p>
<p>format 参数必须包含一个有效的 .NET Framework 格式字符串，要么作为标准格式字符串（例如，“C”或“D”），要么作为日期值和数值的自定义字符模式（例如，“MMMM DD, yyyy (dddd)”） 。 不支持组合格式。 有关这些格式模式的完整解释，请查阅有关常规字符串格式、自定义日期和时间格式以及自定义数字格式的 .NET Framework 文档。 一个好的起点是主题“格式类型”。</p>
<p><em>区域性</em>
指定区域性的可选 nvarchar 参数 。</p>
<p>如果未提供 culture 参数，则使用当前会话的语言 。 可以使用 SET LANGUAGE 语句隐式或显式设置此语言。 culture接受 .NET Framework 支持的任何区域性作为参数; 它并不限于 SQL Server 显式支持的语言。 如果 culture 参数无效，FORMAT 将引发错误 。</p>
<ul>
<li>演示</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DECLARE</span> <span class="token variable">@d</span> <span class="token keyword">DATE</span> <span class="token operator">=</span> <span class="token string">'11/22/2020'</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token function">FORMAT</span><span class="token punctuation">(</span> <span class="token variable">@d</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'en-US'</span> <span class="token punctuation">)</span> <span class="token string">'US English'</span>  
      <span class="token punctuation">,</span><span class="token function">FORMAT</span><span class="token punctuation">(</span> <span class="token variable">@d</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'en-gb'</span> <span class="token punctuation">)</span> <span class="token string">'Great Britain English'</span>  
      <span class="token punctuation">,</span><span class="token function">FORMAT</span><span class="token punctuation">(</span> <span class="token variable">@d</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'de-de'</span> <span class="token punctuation">)</span> <span class="token string">'German'</span>  
      <span class="token punctuation">,</span><span class="token function">FORMAT</span><span class="token punctuation">(</span> <span class="token variable">@d</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'zh-cn'</span> <span class="token punctuation">)</span> <span class="token string">'Simplified Chinese (PRC)'</span><span class="token punctuation">;</span>  
  
<span class="token keyword">SELECT</span> <span class="token function">FORMAT</span><span class="token punctuation">(</span> <span class="token variable">@d</span><span class="token punctuation">,</span> <span class="token string">'D'</span><span class="token punctuation">,</span> <span class="token string">'en-US'</span> <span class="token punctuation">)</span> <span class="token string">'US English'</span>  
      <span class="token punctuation">,</span><span class="token function">FORMAT</span><span class="token punctuation">(</span> <span class="token variable">@d</span><span class="token punctuation">,</span> <span class="token string">'D'</span><span class="token punctuation">,</span> <span class="token string">'en-gb'</span> <span class="token punctuation">)</span> <span class="token string">'Great Britain English'</span>  
      <span class="token punctuation">,</span><span class="token function">FORMAT</span><span class="token punctuation">(</span> <span class="token variable">@d</span><span class="token punctuation">,</span> <span class="token string">'D'</span><span class="token punctuation">,</span> <span class="token string">'de-de'</span> <span class="token punctuation">)</span> <span class="token string">'German'</span>  
      <span class="token punctuation">,</span><span class="token function">FORMAT</span><span class="token punctuation">(</span> <span class="token variable">@d</span><span class="token punctuation">,</span> <span class="token string">'D'</span><span class="token punctuation">,</span> <span class="token string">'zh-cn'</span> <span class="token punctuation">)</span> <span class="token string">'Chinese (Simplified PRC)'</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>结果如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">US English</th>
<th style="text-align:left">Great Britain English</th>
<th style="text-align:left">German</th>
<th style="text-align:left">Simplified Chinese (PRC)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">11/22/2020</td>
<td style="text-align:left">22/11/2020</td>
<td style="text-align:left">22.11.2020</td>
<td style="text-align:left">2020-11-22</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:left">US English</th>
<th style="text-align:left">Great Britain English</th>
<th style="text-align:left">German</th>
<th style="text-align:left">Chinese (Simplified PRC)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Sunday, November 22, 2020</td>
<td style="text-align:left">22 November 2020</td>
<td style="text-align:left">Sonntag, 22. November 2020</td>
<td style="text-align:left">2020年11月22日</td>
</tr>
</tbody>
</table>
</template>
