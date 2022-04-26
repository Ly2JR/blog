<template><h1 id="段落和换行符" tabindex="-1"><a class="header-anchor" href="#段落和换行符" aria-hidden="true">#</a> <a href="https://daringfireball.net/projects/markdown/syntax#p" target="_blank" rel="noopener noreferrer">段落和换行符<ExternalLinkIcon/></a></h1>
<h2 id="段落" tabindex="-1"><a class="header-anchor" href="#段落" aria-hidden="true">#</a> 段落</h2>
<p>要创建段落，请使用空白行将一行或多行文本进行分割。</p>
<p>不用使用空格(spaces)或制表符(tabs)缩进段落。</p>
<table>
<thead>
<tr>
<th style="text-align:left">✔️ Do This</th>
<th style="text-align:left">❌ Don't Do This</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>Don't put tabs or spaces in front of your paragraphs.</code><br><br><code>Keep lines left-aligned like this.</code></td>
<td style="text-align:left">    <code>This can result in unexpected formatting problems.</code><br><br>    <code>Don't add tabs or spaces in front of paragraphs.</code></td>
</tr>
</tbody>
</table>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>I really like using Markdown.

I think I'll use it to format all of my documents from now on.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>I really like using Markdown.</p>
<p>I think I'll use it to format all of my documents from now on.</p>
<h2 id="换行" tabindex="-1"><a class="header-anchor" href="#换行" aria-hidden="true">#</a> 换行</h2>
<p>在一行的末尾添加两个或多个空格，然后按回车键，即可创建一个换行(<code>&lt;br&gt;</code>)。</p>
<p>几乎每个Markdown应用程序都支持两个或多个空格进行换行，称为<code>结尾空格(trailing whitespace)</code>的方式，但这是由争议的，因为很难在编译器中直接看到空格，并且很多人在每个句子后面都会有意或无意地添加两个空格。由于这个原因，你可能要使用除结尾空格以外的其他方式来换行。幸运的是，几乎每个Markdown应用程序都支持另一种换行方式：HTML的<code>&lt;br&gt;</code>标签。</p>
<p>为了兼容性，请在行尾添加&quot;结尾空格&quot;或HTML的<code>&lt;br&gt;</code>标签来实现换行。</p>
<table>
<thead>
<tr>
<th style="text-align:left">✔️ Do This</th>
<th style="text-align:left">❌ Don't Do This</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>First line with two spaces after.</code><br><code>And the next line.</code><br><code>First line with the HTML tag after.&lt;br&gt;</code><br><code>And the next line.</code></td>
<td style="text-align:left"><code>First line with two spaces after.\</code><br><code>And the next line.</code><br><code>First line with the HTML tag after.</code><br><code>And the next line.</code></td>
</tr>
</tbody>
</table>
</template>
