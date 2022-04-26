<template><h1 id="强调" tabindex="-1"><a class="header-anchor" href="#强调" aria-hidden="true">#</a> <a href="https://daringfireball.net/projects/markdown/syntax#em" target="_blank" rel="noopener noreferrer">强调<ExternalLinkIcon/></a></h1>
<h2 id="斜体-italic" tabindex="-1"><a class="header-anchor" href="#斜体-italic" aria-hidden="true">#</a> <em>斜体(Italic)</em></h2>
<p>使用<code>*</code>或<code>_</code>包裹需要显示斜体的内容。</p>
<p>斜体Markdown语法代码：<code>*斜体*</code></p>
<p>默认是对标题使用，而不是正文。</p>
<table>
<thead>
<tr>
<th style="text-align:left">✔️ Do This</th>
<th style="text-align:left">❌ Don't Do This</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"># <em>Italic</em></td>
<td style="text-align:left"><em>Italic</em></td>
</tr>
</tbody>
</table>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token italic"><span class="token punctuation">*</span><span class="token content">这是斜体</span><span class="token punctuation">*</span></span>

<span class="token italic"><span class="token punctuation">_</span><span class="token content">这是斜体</span><span class="token punctuation">_</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><em>这是斜体</em></p>
<p><em>这是斜体</em></p>
<h2 id="粗体-bold" tabindex="-1"><a class="header-anchor" href="#粗体-bold" aria-hidden="true">#</a> <strong>粗体(Bold)</strong></h2>
<p>使用<code>**</code>包裹需要显示加粗的内容。</p>
<p>粗体Markdown语法代码：<code>**斜体**</code></p>
<p>默认是对标题使用，而不是正文。</p>
<table>
<thead>
<tr>
<th style="text-align:left">✔️ Do This</th>
<th style="text-align:left">❌ Don't Do This</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"># <strong>Bold</strong></td>
<td style="text-align:left"><strong>Bold</strong></td>
</tr>
</tbody>
</table>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">这是粗体</span><span class="token punctuation">**</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>这是粗体</strong></p>
<h2 id="粗体-bold-和斜体-italic" tabindex="-1"><a class="header-anchor" href="#粗体-bold-和斜体-italic" aria-hidden="true">#</a> 粗体(Bold)和斜体(Italic)</h2>
<p>使用<code>***</code>包裹需要显示斜体加粗的内容。</p>
<p>粗体和斜体Markdown语法代码：<code>***斜体和斜体***</code></p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content"><span class="token italic"><span class="token punctuation">*</span><span class="token content">这是斜体粗体</span><span class="token punctuation">*</span></span></span><span class="token punctuation">**</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><em><strong>这是斜体粗体</strong></em></p>
<h2 id="删除线-strikethrough" tabindex="-1"><a class="header-anchor" href="#删除线-strikethrough" aria-hidden="true">#</a> 删除线(Strikethrough)</h2>
<p>使用<code>~</code>包裹需要显示斜体加粗的内容。</p>
<p>删除线Markdown语法代码：<code>~删除线~</code></p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token strike"><span class="token punctuation">~</span><span class="token content">这是删除线</span><span class="token punctuation">~</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>~这是删除线~</p>
</template>
