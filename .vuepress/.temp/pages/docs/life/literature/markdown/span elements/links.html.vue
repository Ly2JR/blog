<template><h1 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> <a href="https://daringfireball.net/projects/markdown/syntax#link" target="_blank" rel="noopener noreferrer">链接<ExternalLinkIcon/></a></h1>
<p>不同的Markdown应用程序处理Url中间的空格方式不一样。为了兼容性，请尽量使用<code>%20</code>替代空格。</p>
<table>
<thead>
<tr>
<th style="text-align:left">✔️ Do This</th>
<th style="text-align:left">❌ Don't Do This</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>[link](https://example/com/my%20first%20page)</code></td>
<td style="text-align:left"><code>[link](https://example/com/my first page)</code></td>
</tr>
</tbody>
</table>
<h2 id="超链接" tabindex="-1"><a class="header-anchor" href="#超链接" aria-hidden="true">#</a> 超链接</h2>
<p>链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。</p>
<p>超链接Markdown语法代码：<code>[超链接显示名](超链接地址 &quot;超链接title&quot;)</code></p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url">[<span class="token content">Markdown</span>](<span class="token url">https://ilyl.life/zh/life/literature/markdown/</span>)</span>

<span class="token url">[<span class="token content">Markdown</span>](<span class="token url">https://ilyl.life/zh/life/literature/markdown/</span> <span class="token string">"Markdown语法"</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><a href="https://ilyl.life/zh/life/literature/markdown/" target="_blank" rel="noopener noreferrer">Markdown<ExternalLinkIcon/></a></p>
<p><a href="https://ilyl.life/zh/life/literature/markdown/" title="Markdown语法" target="_blank" rel="noopener noreferrer">Markdown<ExternalLinkIcon/></a></p>
<h2 id="引用类型链接" tabindex="-1"><a class="header-anchor" href="#引用类型链接" aria-hidden="true">#</a> 引用类型链接</h2>
<p>引用样式链接是一种特殊的链接，它使URL在Markdown中便于显示和阅读。</p>
<p>引用类型链接Markdown语法代码：</p>
<p><code>[超链接显示名] [超链接地址标签]</code></p>
<p><code>[超链接地址标签]:超链接地址</code></p>
<p>第一部分格式：</p>
<p>第一组方括号包围应显示为链接的文本。第二组括号显示一个标签，该标签用于指向您存储在文档其他位置的链接。</p>
<p>在第一组和第二组括号之间包含一个空格。第二组括号中的标签不区分大小写，可以包含字母，数字，空格或标点符号。</p>
<p>第二部分格式:</p>
<p>默认第二部分放在文章的最后。</p>
<p>1、放在括号中的标签，其后紧跟一个冒号和至少一个空格(例如:<code>[lable]:%20</code>)；</p>
<p>2、链接的URL，可以选择将其括在尖括号中。</p>
<p>3、链接的可选标题，可以将其括在双引号，单引号或者括号中。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url">[<span class="token content">Markwon1</span>][<span class="token variable">1</span>]</span>

<span class="token url">[<span class="token content">Markwon2</span>][<span class="token variable">2</span>]</span>

<span class="token url">[<span class="token content">Markwon3</span>][<span class="token variable">3</span>]</span>

<span class="token url">[<span class="token content">Markwon4</span>][<span class="token variable">4</span>]</span>

<span class="token url">[<span class="token content">Markwon5</span>][<span class="token variable">5</span>]</span>

<span class="token url">[<span class="token content">Markwon6</span>][<span class="token variable">6</span>]</span>

<span class="token url">[<span class="token content">Markwon7</span>][<span class="token variable">7</span>]</span>

<span class="token url">[<span class="token content">Markwon8</span>][<span class="token variable">8</span>]</span>

[1]:https://ilyl.life/zh/life/literature/markdown/

[2]:https://ilyl.life/zh/life/literature/markdown/ "Markdown2"

[3]:https://ilyl.life/zh/life/literature/markdown/ 'Markdown3'

[4]:https://ilyl.life/zh/life/literature/markdown/ (Markdown4)

[5]:&lt;https://ilyl.life/zh/life/literature/markdown/>

[6]:&lt;https://ilyl.life/zh/life/literature/markdown/> "Markdown6"

[7]:&lt;https://ilyl.life/zh/life/literature/markdown/> 'Markdown7'

[8]:&lt;https://ilyl.life/zh/life/literature/markdown/> (Markdown8)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p><a href="https://ilyl.life/zh/life/literature/markdown/" target="_blank" rel="noopener noreferrer">Markwon1<ExternalLinkIcon/></a></p>
<p><a href="https://ilyl.life/zh/life/literature/markdown/" title="Markdown2" target="_blank" rel="noopener noreferrer">Markwon2<ExternalLinkIcon/></a></p>
<p><a href="https://ilyl.life/zh/life/literature/markdown/" title="Markdown3" target="_blank" rel="noopener noreferrer">Markwon3<ExternalLinkIcon/></a></p>
<p><a href="https://ilyl.life/zh/life/literature/markdown/" title="Markdown4" target="_blank" rel="noopener noreferrer">Markwon4<ExternalLinkIcon/></a></p>
<p><a href="https://ilyl.life/zh/life/literature/markdown/" target="_blank" rel="noopener noreferrer">Markwon5<ExternalLinkIcon/></a></p>
<p><a href="https://ilyl.life/zh/life/literature/markdown/" title="Markdown6" target="_blank" rel="noopener noreferrer">Markwon6<ExternalLinkIcon/></a></p>
<p><a href="https://ilyl.life/zh/life/literature/markdown/" title="Markdown7" target="_blank" rel="noopener noreferrer">Markwon7<ExternalLinkIcon/></a></p>
<p><a href="https://ilyl.life/zh/life/literature/markdown/" title="Markdown8" target="_blank" rel="noopener noreferrer">Markwon8<ExternalLinkIcon/></a></p>
<h2 id="注脚" tabindex="-1"><a class="header-anchor" href="#注脚" aria-hidden="true">#</a> 注脚</h2>
<p>在需要添加注脚的文字后面加上注脚名称<code>[^注脚标签]</code>,称为加注。</p>
<p>注脚的Markdown语法代码：</p>
<p><code>内容[^注脚标签]</code></p>
<p><code>[^注脚标签]:注脚内容</code></p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>Markwon1[^1]

Markwon2[^2]

Markwon3[^3]

Markwon4[^4]

Markwon5[^5]

Markwon6[^6]

Markwon7[^7]

Markwon8[^8]

[^1]:https://ilyl.life/zh/life/literature/markdown/

[^2]:https://ilyl.life/zh/life/literature/markdown/ "Markdown2"

[^3]:https://ilyl.life/zh/life/literature/markdown/ 'Markdown3'

[^4]:https://ilyl.life/zh/life/literature/markdown/ (Markdown4)

[^5]:&lt;https://ilyl.life/zh/life/literature/markdown/>

[^6]:&lt;https://ilyl.life/zh/life/literature/markdown/> "Markdown6"

[^7]:&lt;https://ilyl.life/zh/life/literature/markdown/> 'Markdown7'

[^8]:&lt;https://ilyl.life/zh/life/literature/markdown/> (Markdown8)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>Markwon1<a href="https://ilyl.life/zh/life/literature/markdown/" target="_blank" rel="noopener noreferrer">^1<ExternalLinkIcon/></a></p>
<p>Markwon2<a href="https://ilyl.life/zh/life/literature/markdown/" title="Markdown2" target="_blank" rel="noopener noreferrer">^2<ExternalLinkIcon/></a></p>
<p>Markwon3<a href="https://ilyl.life/zh/life/literature/markdown/" title="Markdown3" target="_blank" rel="noopener noreferrer">^3<ExternalLinkIcon/></a></p>
<p>Markwon4<a href="https://ilyl.life/zh/life/literature/markdown/" title="Markdown4" target="_blank" rel="noopener noreferrer">^4<ExternalLinkIcon/></a></p>
<p>Markwon5<a href="https://ilyl.life/zh/life/literature/markdown/" target="_blank" rel="noopener noreferrer">^5<ExternalLinkIcon/></a></p>
<p>Markwon6<a href="https://ilyl.life/zh/life/literature/markdown/" title="Markdown6" target="_blank" rel="noopener noreferrer">^6<ExternalLinkIcon/></a></p>
<p>Markwon7<a href="https://ilyl.life/zh/life/literature/markdown/" title="Markdown7" target="_blank" rel="noopener noreferrer">^7<ExternalLinkIcon/></a></p>
<p>Markwon8<a href="https://ilyl.life/zh/life/literature/markdown/" title="Markdown8" target="_blank" rel="noopener noreferrer">^8<ExternalLinkIcon/></a></p>
<h2 id="锚点-页内链接" tabindex="-1"><a class="header-anchor" href="#锚点-页内链接" aria-hidden="true">#</a> 锚点(页内链接)</h2>
<p>锚点就是页内超链接，链接本文档内部的某些元素，实现当前页面中的跳转。</p>
<p>锚点只吃菜在标题后插入锚点，并且跳转的位置也是标题。</p>
<p>锚点的Markdown代码语法:<code>[锚点内容](#标题)</code></p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url">[<span class="token content">锚点</span>](<span class="token url">#链接语法</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="#%E9%93%BE%E6%8E%A5%E8%AF%AD%E6%B3%95">锚点</a></p>
</template>
