<template><h1 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> <a href="https://daringfireball.net/projects/markdown/syntax#img" target="_blank" rel="noopener noreferrer">图片<ExternalLinkIcon/></a></h1>
<p>要添加图像，请使用感叹号(<code>!</code>),然后在方括号<code>[]</code>中添加文本,图片连接放在后面的圆括号里<code>()</code>,括号里的链接后可以增加一个可选的图片标题文本。</p>
<p>插入图片Markdown语法代码1:<code>![图片Alt](图片链接 '图片title')</code></p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">logo</span>](<span class="token url">/favicon.ico</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="/favicon.ico" alt="logo"></p>
<p>插入图片Markdown语法代码2:<code>![图片Alt][id]</code>。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">logo</span>][<span class="token variable">1</span>]</span>

[1]:/favicon.ico
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="/favicon.ico" alt="logo"></p>
<p>另外还可以将图片转换成Base64字符串,需要自己检测是否支持。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">logo</span>][<span class="token variable">logo</span>]</span>

[logo]:data:image/x-png;base64,...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>图片链接</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url">[<span class="token content">![logo</span>](<span class="token url">/favicon.ico</span>)</span>](https://ilyl.life/zh/life/literature/markdown)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="https://ilyl.life//zh/life/literature/markdown" target="_blank" rel="noopener noreferrer"><img src="/favicon.ico" alt="logo"><ExternalLinkIcon/></a></p>
</template>
