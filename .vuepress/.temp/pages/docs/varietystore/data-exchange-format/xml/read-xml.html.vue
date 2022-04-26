<template><h1 id="读取" tabindex="-1"><a class="header-anchor" href="#读取" aria-hidden="true">#</a> 读取</h1>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<CodeGroup>
<CodeGroupItem title="XML">
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="ISO-8859-1"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bookstore</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>book</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eng<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Harry Potter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>price</span><span class="token punctuation">></span></span>29.99<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>price</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>book</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>book</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eng<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Learning XML<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>price</span><span class="token punctuation">></span></span>39.95<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>price</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>book</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bookstore</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<h3 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>引用 using System.Xml.Linq;</p>
</div>
<CodeGroup>
<CodeGroupItem title="控制台">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> filePath <span class="token operator">=</span> <span class="token string">"D:\\books.xml"</span><span class="token punctuation">;</span>

<span class="token class-name">XmlDocument</span> xmlDoc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">XmlDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xmlDoc<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name">XmlElement</span> item <span class="token keyword">in</span> xmlDoc<span class="token punctuation">.</span><span class="token function">SelectNodes</span><span class="token punctuation">(</span><span class="token string">"//book/title"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>InnerText<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>引用 using System.Xml;</p>
</div>
<CodeGroup>
<CodeGroupItem title="控制台">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> filePath <span class="token operator">=</span> <span class="token string">"D:\\books.xml"</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> xDoc <span class="token operator">=</span> XElement<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> item <span class="token keyword">in</span> xDoc<span class="token punctuation">.</span><span class="token function">Elements</span><span class="token punctuation">(</span><span class="token string">"book"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">Element</span><span class="token punctuation">(</span><span class="token string">"title"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="方式三" tabindex="-1"><a class="header-anchor" href="#方式三" aria-hidden="true">#</a> 方式三</h3>
<h4 id="_1、数据建模" tabindex="-1"><a class="header-anchor" href="#_1、数据建模" aria-hidden="true">#</a> 1、数据建模</h4>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>引入 using System.Xml.Serialization;</p>
</div>
<CodeGroup>
<CodeGroupItem title="BookStore">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">XmlRoot</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">"bookstore"</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Serializable</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookStore</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">XmlElement</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token named-parameter punctuation">elementName</span><span class="token punctuation">:</span> <span class="token string">"book"</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Book<span class="token punctuation">></span></span> Books <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="Book">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Serializable</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Book</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">XmlElement</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">"title"</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">BookTitle</span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">XmlElement</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">"price"</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Price <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="BookTitle">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Serializable</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookTitle</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">XmlAttribute</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">"lang"</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Lang <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">XmlText</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Text <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h4 id="_2、反序列化" tabindex="-1"><a class="header-anchor" href="#_2、反序列化" aria-hidden="true">#</a> 2、反序列化</h4>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>引用 using System.Xml.Serialization;</p>
<p>引用 using System.Text.Json;</p>
</div>
<CodeGroup>
<CodeGroupItem title="控制台">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> filePath <span class="token operator">=</span> <span class="token string">"D:\\books.xml"</span><span class="token punctuation">;</span>

<span class="token class-name">BookStore</span> bookStore <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>File<span class="token punctuation">.</span><span class="token function">Exists</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">StreamReader</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> xmlSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">XmlSerializer</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">BookStore</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bookStore <span class="token operator">=</span> xmlSerializer<span class="token punctuation">.</span><span class="token function">Deserialize</span><span class="token punctuation">(</span>reader<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">BookStore</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">JsonSerializerOptions</span> options <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonSerializerOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    WriteIndented <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                                   
    AllowTrailingCommas <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                                                                                 
    IgnoreReadOnlyProperties <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        
    PropertyNameCaseInsensitive <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                   
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">string</span></span> json <span class="token operator">=</span> JsonSerializer<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Serialize</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BookStore<span class="token punctuation">></span></span></span><span class="token punctuation">(</span>bookStore<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>  

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
