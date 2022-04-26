<template><h1 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h1>
<p>要添加表格，请使用三个或多个连接符(<code>---</code>)创建每列的标题，并使用管道(<code>|</code>)分隔每列。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important">Syntax</span><span class="token punctuation">|</span><span class="token table-header important">Description</span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span><span class="token punctuation">---</span><span class="token punctuation">|</span><span class="token punctuation">---</span><span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data">Header</span><span class="token punctuation">|</span><span class="token table-data">Title</span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data">Pragraph</span><span class="token punctuation">|</span><span class="token table-data">Text</span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table>
<thead>
<tr>
<th>Syntax</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Header</td>
<td>Title</td>
</tr>
<tr>
<td>Pragraph</td>
<td>Text</td>
</tr>
</tbody>
</table>
<h2 id="对齐" tabindex="-1"><a class="header-anchor" href="#对齐" aria-hidden="true">#</a> 对齐</h2>
<p>你可以通过在管道(<code>|</code>)中添加冒号(<code>:</code>),将列中的文本对齐到左侧，右侧或中心。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>|Syntax|Description|Test text|
|:--|:--:|--:|
|Header|Title|Here's this|
|Paragraph|Text|And more|
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">Syntax</th>
<th style="text-align:center">Description</th>
<th style="text-align:right">Test text</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Header</td>
<td style="text-align:center">Title</td>
<td style="text-align:right">Here's this</td>
</tr>
<tr>
<td style="text-align:left">Paragraph</td>
<td style="text-align:center">Text</td>
<td style="text-align:right">And more</td>
</tr>
</tbody>
</table>
<h2 id="格式化表格中的文字" tabindex="-1"><a class="header-anchor" href="#格式化表格中的文字" aria-hidden="true">#</a> 格式化表格中的文字</h2>
<p>您可以在表格中设置文本格式。例如，您可以添加链接，代码(仅反引号(```)中的单词或短语，而不是代码块)和强调。</p>
<p>您不能添加标题，块引用，列表，水平规则，图像或HTML标签。</p>
<h2 id="在表格中转义管道字符" tabindex="-1"><a class="header-anchor" href="#在表格中转义管道字符" aria-hidden="true">#</a> 在表格中转义管道字符</h2>
<p>您可以使用表格的HTML字符代码(<code>&amp;#123;</code>)在表格中显示竖线(<code>|</code>)字符。</p>
</template>
