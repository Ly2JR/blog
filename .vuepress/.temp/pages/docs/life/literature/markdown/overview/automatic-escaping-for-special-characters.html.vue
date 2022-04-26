<template><h1 id="特殊字符的自动转义" tabindex="-1"><a class="header-anchor" href="#特殊字符的自动转义" aria-hidden="true">#</a> <a href="https://daringfireball.net/projects/markdown/syntax#autoescape" target="_blank" rel="noopener noreferrer">特殊字符的自动转义<ExternalLinkIcon/></a></h1>
<p>在HTML中，有两个字符需要特殊处理：<code>&lt;</code>和<code>&amp;</code>。左尖括号用于开始标签；<code>&amp;</code>符号用于表示HTML实体。如果要将他们用作文字字符，则必须将它们转义为实体，例如<code>alt;</code>和<code>&amp;amp;</code>。</p>
<p>Markdown允许您自然地使用这些字符，并为您处理所有必要的转义。如果你使用<code>&amp;</code>符号作为HTML实体的一部分，它保持不变；否则会被翻译成<code>&amp;amp;</code>。</p>
<p>因此，如果你想在文章中包含版权符号，您可以这样写:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token entity named-entity" title="&copy;">&amp;copy;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>©</p>
<p>Markdown将不会理会它，如果你写</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>AT&amp;T
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Markdown会将其翻译为:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>AT$amp;T
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>同样，因为Markdown支持<RouterLink to="/docs/life/literature/markdown/overview/inline-html.html">内联HTML</RouterLink>，如果你使用尖括号作为HTML标签分隔符，Markdown会这样对待它们。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>4&lt;5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Markdown会将其翻译为:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>4 <span class="token entity named-entity" title="&lt;">&amp;lt;</span> 5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>需要特别注意的是，在Markdown的块级元素和内联元素中， <code>&lt;</code>和<code>&amp;</code>两个符号都会被自动转换成HTML实体，这项特性让你可以很容易地用 Markdown 写 HTML。（在 HTML 语法中，你要手动把所有的 &lt; 和 &amp; 都转换为 HTML 实体。）</p>
</template>
