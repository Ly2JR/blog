<template><h1 id="读取excel" tabindex="-1"><a class="header-anchor" href="#读取excel" aria-hidden="true">#</a> 读取Excel</h1>
<h2 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一</h2>
<p>ADO.NET</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><a href="https://www.microsoft.com/en-us/download/details.aspx?id=54920" target="_blank" rel="noopener noreferrer">官方AccessDataBaseEngine<ExternalLinkIcon/></a></p>
</div>
<h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><a href="https://docs.microsoft.com/zh-cn/dotnet/framework/data/adonet/connection-string-syntax?redirectedfrom=MSDN" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
<p>HDR=Yes 默认值，表示第一行是标题</p>
<p>IMES=0 写入</p>
<p>IMES=1 读取</p>
<p>IMES=2 并存</p>
</div>
<CodeGroup>
<CodeGroupItem title="xlxs">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code>Provider<span class="token operator">=</span>Microsoft<span class="token punctuation">.</span>ACE<span class="token punctuation">.</span>OLEDB<span class="token punctuation">.</span><span class="token number">12.0</span><span class="token punctuation">;</span><span class="token class-name">Data</span> Source<span class="token operator">=</span><span class="token operator">&lt;</span>excelPath<span class="token operator">></span><span class="token punctuation">;</span><span class="token class-name">Extended</span> Properties<span class="token operator">=</span>'Excel <span class="token number">12.0</span><span class="token punctuation">;</span>HDR<span class="token operator">=</span>YES<span class="token punctuation">;</span>IMEX<span class="token operator">=</span><span class="token number">1</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="xls">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code>Provider<span class="token operator">=</span>Microsoft<span class="token punctuation">.</span>ACE<span class="token punctuation">.</span>OLEDB<span class="token punctuation">.</span><span class="token number">4.0</span><span class="token punctuation">;</span><span class="token class-name">Data</span> Source<span class="token operator">=</span><span class="token operator">&lt;</span>excelPath<span class="token operator">></span><span class="token punctuation">;</span><span class="token class-name">Extended</span> Properties<span class="token operator">=</span>'Excel <span class="token number">8.0</span><span class="token punctuation">;</span>HDR<span class="token operator">=</span>YES<span class="token punctuation">;</span>IMEX<span class="token operator">=</span><span class="token number">1</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> ConnString <span class="token operator">=</span> <span class="token string">"Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\\demo.xlsx;Extended Properties='Excel 12.0;HDR=YES;IMEX=1'"</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">string</span></span> sSql <span class="token operator">=</span> <span class="token string">"SELECT * FROM [Sheet1$]"</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> sheet1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DataTable</span><span class="token punctuation">(</span><span class="token string">"Sheet1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">OleDbConnection</span> conn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OleDbConnection</span><span class="token punctuation">(</span>ConnString<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    conn<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">OleDbDataAdapter</span> cmd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OleDbDataAdapter</span><span class="token punctuation">(</span>sSql<span class="token punctuation">,</span> conn<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cmd<span class="token punctuation">.</span><span class="token function">Fill</span><span class="token punctuation">(</span>sheet1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>
