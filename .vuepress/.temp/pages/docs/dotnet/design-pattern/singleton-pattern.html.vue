<template><h1 id="单件模式-singleton-pattern" tabindex="-1"><a class="header-anchor" href="#单件模式-singleton-pattern" aria-hidden="true">#</a> 单件模式(Singleton Pattern)</h1>
<p>单件模式是一种用于确保整个应用程序中只有一个类实例且这个实例所占用资源在整个应用程序中是共享时的程序设计方法
(根据实际情况，可能需要几个类实例)。</p>
<p>Singleton模式的实现基于两个要点:</p>
<ol>
<li>不能直接用类的构造函数，而另外提供一个Public的静态方法来构造类的实例。通常这个方法取名为Instance。
Public 保证了它的全局可见性，静态方法保证了不会创建出多余的实例。</li>
<li>将类的构造函数设为Private,即将构造函数“隐藏”起来，任何企图使用构造函数创建实例的方法都将报错。
这样就阻止了开发人员绕过上面的Instance方法直接创建类的实例。</li>
</ol>
<ul>
<li>示例</li>
</ul>
<CodeGroup>
<CodeGroupItem title="方式一">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">Design_Pattern</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> s1 <span class="token operator">=</span> SingletonPattern<span class="token punctuation">.</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> s2 <span class="token operator">=</span> SingletonPattern<span class="token punctuation">.</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">Equals</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"see,only one instance."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonPattern</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">SingletonPattern<span class="token punctuation">?</span></span> _theSingleton<span class="token punctuation">;</span>

        <span class="token keyword">private</span> <span class="token function">SingletonPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">SingletonPattern</span> <span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> _theSingleton <span class="token operator">??=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SingletonPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="方式二">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">Design_Pattern</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> s1 <span class="token operator">=</span> SingletonPattern<span class="token punctuation">.</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> s2 <span class="token operator">=</span> SingletonPattern<span class="token punctuation">.</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">Equals</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"see,only one instance."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonPattern</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">SingletonPattern</span> TheSingleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SingletonPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">private</span> <span class="token function">SingletonPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">SingletonPattern</span> <span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> TheSingleton<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
