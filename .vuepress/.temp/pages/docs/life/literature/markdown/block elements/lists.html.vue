<template><h1 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> <a href="https://daringfireball.net/projects/markdown/syntax#list" target="_blank" rel="noopener noreferrer">列表<ExternalLinkIcon/></a></h1>
<p>可以将多个条目组织成有序或无须的列表。</p>
<h2 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h2>
<p>要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点(<code>.</code>)之后保留一个空格(<code>space</code>)。数字不必按数学顺序排列，但是列表应当以数字<code>1</code>起始。</p>
<p>有序列表的最佳实践</p>
<table>
<thead>
<tr>
<th style="text-align:left">✔️ Do This</th>
<th style="text-align:left">❌ Don't Do This</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>1. First item</code><br/><code>2. Second item</code></td>
<td style="text-align:left"><code>1) First item</code><br/><code>2) Second item</code></td>
</tr>
</tbody>
</table>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">1.</span> First item
<span class="token list punctuation">2.</span> Second item
<span class="token list punctuation">3.</span> Third item
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol>
<li>First Item</li>
<li>Second Item</li>
<li>Third Item</li>
</ol>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">1.</span> First item
<span class="token list punctuation">8.</span> Eight item
<span class="token list punctuation">2.</span> Second item
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol>
<li>First item</li>
<li>Eight item</li>
<li>Second item</li>
</ol>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">1.</span> First item
<span class="token list punctuation">2.</span> Second item
    <span class="token list punctuation">1.</span> Indented item
    <span class="token list punctuation">2.</span> Indented item
<span class="token list punctuation">3.</span> Third item
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol>
<li>First item</li>
<li>Second item
<ol>
<li>Indented item</li>
<li>Indented item</li>
</ol>
</li>
<li>Third item</li>
</ol>
<h2 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h2>
<p>哟啊创建无须列表，请在每个列表项前面添加破折号(<code>-</code>)、星号(<code>*</code>)或加号(<code>+</code>)。缩进(两个空格)一个或多个列表项可创建嵌套列表。</p>
<p>无序列表的最佳实践</p>
<table>
<thead>
<tr>
<th style="text-align:left">✔️ Do This</th>
<th style="text-align:left">❌ Don't Do This</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>- First item</code><br><code>- Second item</code><br><code>- Third item</code></td>
<td style="text-align:left"><code>- First item</code><br><code>* Second item</code><br><code>+ Third item</code></td>
</tr>
</tbody>
</table>
<p>破折号(<code>-</code>)Markdown语法:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">-</span> First item
<span class="token list punctuation">-</span> Second item
<span class="token list punctuation">-</span> Third item
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>破折号(<code>-</code>)预览效果：</p>
<ul>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ul>
<p>星号(<code>*</code>)Markdown语法：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">*</span> First item
<span class="token list punctuation">*</span> Second item
<span class="token list punctuation">*</span> Third item
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>星号(<code>*</code>)预览效果：</p>
<ul>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ul>
<p>加号(<code>+</code>)Markdown语法：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">+</span> First item
<span class="token list punctuation">+</span> Second item
<span class="token list punctuation">+</span> Third item
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>加号(<code>+</code>)预览效果：</p>
<ul>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ul>
<p>多级嵌套Markdown语法：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">-</span> First item
<span class="token list punctuation">-</span> Second item

  <span class="token list punctuation">-</span> Indented item

<span class="token code keyword">    - Indented item</span>

<span class="token code keyword">      - Indented item</span>

  <span class="token list punctuation">-</span> Indented item

<span class="token list punctuation">-</span> Third item
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>多级嵌套预览效果：</p>
<ul>
<li>
<p>First item</p>
</li>
<li>
<p>Second item</p>
<ul>
<li>
<p>Indented item</p>
<ul>
<li>
<p>Indented item</p>
<ul>
<li>Indented item</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Indented item</p>
</li>
</ul>
</li>
<li>
<p>Third item</p>
</li>
</ul>
<h2 id="嵌套其他元素" tabindex="-1"><a class="header-anchor" href="#嵌套其他元素" aria-hidden="true">#</a> 嵌套其他元素</h2>
<p>要在保留列表连续性的同时在列表中添加另外一种元素，请将该元素缩进四个空格(<code>space</code>)或一个制表符(<code>tab</code>)。</p>
<p>嵌套段落Markdown语法：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">-</span> This is the first list item.
<span class="token list punctuation">-</span> Here's the second list item 

<span class="token code keyword">    I need to add another paragraph below the second list item.</span>

<span class="token list punctuation">-</span> And here's the third list item.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>嵌套段落预览效果：</p>
<ul>
<li>
<p>This is the first list item.</p>
</li>
<li>
<p>Here's the second list item.</p>
<p>I need to add another paragraph below the second list item.</p>
</li>
<li>
<p>And here's the third list item.</p>
</li>
</ul>
<p>嵌套引用块Markdown语法：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">-</span> This is the first list item.
<span class="token list punctuation">-</span> Here's the second list item 

<span class="token code keyword">    > I need to add another paragraph below the second list item.</span>

<span class="token list punctuation">-</span> And here's the third list item.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>嵌套引用块预览效果：</p>
<ul>
<li>
<p>This is the first list item.</p>
</li>
<li>
<p>Here's the second list item.</p>
<blockquote>
<p>I need to add another paragraph below the second list item.</p>
</blockquote>
</li>
<li>
<p>And here's the third list item.</p>
</li>
</ul>
<p>嵌套代码块Markdown语法：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">-</span> This is the first list item.
<span class="token list punctuation">-</span> Here's the second list item 

<span class="token code keyword">    ```html
    &lt;html>
        &lt;head>
            &lt;title>Hello Markdown&lt;/title>
        &lt;/head>
    &lt;/html>
    ```</span>

<span class="token list punctuation">-</span> And here's the third list item.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>嵌套代码块预览效果：</p>
<ul>
<li>
<p>This is the first list item.</p>
</li>
<li>
<p>Here's the second list item.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Hello Markdown<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
<li>
<p>And here's the third list item.</p>
</li>
</ul>
<p>嵌套图片Markdown语法：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">1.</span> Open the file containing the Markdown mascot.
<span class="token list punctuation">2.</span> Marvel at its beauty.
<span class="token list punctuation">3.</span> Close the file.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>嵌套图片预览效果：</p>
<ul>
<li>This is the first list item.</li>
<li>Here's the second list item.</li>
<li>And here's the third list item.</li>
</ul>
</template>
