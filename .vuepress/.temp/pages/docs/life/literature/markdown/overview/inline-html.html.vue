<template><h1 id="内联html" tabindex="-1"><a class="header-anchor" href="#内联html" aria-hidden="true">#</a> <a href="https://daringfireball.net/projects/markdown/syntax#html" target="_blank" rel="noopener noreferrer">内联HTML<ExternalLinkIcon/></a></h1>
<p>允许你在Markdown中嵌入Html语法标记。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>This is a regular paragraph.

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>

This is another regular paragraph.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>This is a regular paragraph.</p>
<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>
<p>This is another regular paragraph.</p>
</template>
