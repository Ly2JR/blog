<template><h1 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> <a href="https://daringfireball.net/projects/markdown/syntax#precode" target="_blank" rel="noopener noreferrer">代码块<ExternalLinkIcon/></a></h1>
<p>Markdown基本语法允许您通过将行缩进四个空格或一个制表符来创建代码块。如果发现不方便，请尝试使用受保护的代码块。根据Markdown处理器或编辑器的不同，您将在代码块之前和之后的行上使用三个反引号(<code>```</code>)或三个波浪号(<code>~~~</code>)。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>    ```
    {
    "firstName":"John",
    "lastName":"Smith",
    "age",25
    }
    ```
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>{
  "firstName":"John",
  "lastName":"Smith",
  "age",25
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="语法高亮" tabindex="-1"><a class="header-anchor" href="#语法高亮" aria-hidden="true">#</a> 语法高亮</h2>
<p>许多Markdown处理器都支持受围栏代码块的语法突出显示。要添加语法突出显示，请在受防护的代码块之前的反引号旁边指定一种语言。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>
<span class="token code keyword">    ```json
    {
    "firstName":"John",
    "lastName":"Smith",
    "age",25
    }
    ```</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"firstName"</span><span class="token operator">:</span><span class="token string">"John"</span><span class="token punctuation">,</span>
  <span class="token property">"lastName"</span><span class="token operator">:</span><span class="token string">"Smith"</span><span class="token punctuation">,</span>
  <span class="token string">"age"</span><span class="token punctuation">,</span><span class="token number">25</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
