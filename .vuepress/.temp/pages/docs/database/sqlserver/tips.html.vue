<template><h1 id="小技巧" tabindex="-1"><a class="header-anchor" href="#小技巧" aria-hidden="true">#</a> 小技巧</h1>
<h2 id="连续的日期" tabindex="-1"><a class="header-anchor" href="#连续的日期" aria-hidden="true">#</a> 连续的日期</h2>
<CodeGroup>
<CodeGroupItem title="SQL">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">convert</span><span class="token punctuation">(</span>nvarchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>dateadd<span class="token punctuation">(</span><span class="token keyword">day</span><span class="token punctuation">,</span>number<span class="token punctuation">,</span><span class="token string">'2021-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">121</span><span class="token punctuation">)</span> <span class="token keyword">as</span> dt
<span class="token keyword">from</span> master<span class="token punctuation">.</span>dbo<span class="token punctuation">.</span>spt_values  
<span class="token keyword">where</span> <span class="token keyword">type</span> <span class="token operator">=</span><span class="token string">'P'</span> <span class="token operator">and</span> number <span class="token operator">&lt;=</span>DATEDIFF<span class="token punctuation">(</span><span class="token keyword">day</span><span class="token punctuation">,</span> <span class="token string">'2021-01-01'</span><span class="token punctuation">,</span>   <span class="token string">'2021-12-31'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h2>
<ul>
<li><code>offset</code>...<code>rows fetch next</code>...<code>rows only</code></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Sql Server 2012及以上才可以使用</p>
</div>
<CodeGroup>
<CodeGroupItem title="SQL">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> Persons <span class="token keyword">order</span> <span class="token keyword">by</span> FirstName <span class="token keyword">offset</span> <span class="token number">10</span> <span class="token keyword">rows</span> <span class="token keyword">fetch</span> <span class="token keyword">next</span> <span class="token number">10</span> <span class="token keyword">rows</span> only<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li><code>row_number() over(order by</code>...<code>)</code></li>
</ul>
<CodeGroup>
<CodeGroupItem title="SQL">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span><span class="token punctuation">,</span> ROW_NUMBER<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">over</span><span class="token punctuation">(</span><span class="token keyword">order</span> <span class="token keyword">by</span> FirstName<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">row</span> <span class="token keyword">from</span> Persons
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
