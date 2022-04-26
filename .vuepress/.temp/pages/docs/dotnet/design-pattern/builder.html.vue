<template><h1 id="建造者模式-builder" tabindex="-1"><a class="header-anchor" href="#建造者模式-builder" aria-hidden="true">#</a> 建造者模式(Builder)</h1>
<p>建造者模式是设计模式的一种，将一个复杂的对象的构建于它的表示分离，使得同样的构建过程可以创建不同的表示。</p>
<ul>
<li>使用范围</li>
</ul>
<ol>
<li>当创建复杂对象的算法应该独立于该对象的组成部分以及它们的装配方式时。</li>
<li>当构造过程必须允许被构造的对象有不同表示时。</li>
</ol>
<ul>
<li>角色</li>
</ul>
<p>在这样的设计模式中，有以下几个角色：</p>
<ol>
<li>Builder:为创建一个产品对象的各个部件指定抽象接口。</li>
<li>ConcreteBuilder:实现Builder的接口以构造和装配该产品的各个部件，定义并明确它所创建的表示，
并提供一个检索产品的接口。</li>
<li>Director:构造一个使用Builder接口的对象。</li>
<li>Product:表示被构造的复杂对象。ConcreteBuilder创建该产品的内部表示并定义它的装配过程，包含
定义组成部件的类，包括将这些部件的类，包括将这些部件装配成最终产品的接口。</li>
</ol>
<ul>
<li>示例</li>
</ul>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">Design_Pattern</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> pd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Builder<span class="token punctuation">.</span>PersonDirector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> person <span class="token operator">=</span> pd<span class="token punctuation">.</span><span class="token function">ConstructPerson</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Builder<span class="token punctuation">.</span>ManBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>Body<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>Foot<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>Head<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span>  <span class="token keyword">class</span> <span class="token class-name">Builder</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IPersonBuilder</span>
        <span class="token punctuation">{</span>
            <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildFoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token return-type class-name">Person</span> <span class="token function">BuildPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span>
        <span class="token doc-comment comment">/// 具体构造工具</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span>
        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ManBuilder</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IPersonBuilder</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Person</span> _person<span class="token punctuation">;</span>
            <span class="token keyword">public</span> <span class="token function">ManBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _person<span class="token punctuation">.</span>Body <span class="token operator">=</span> <span class="token string">"建造男人的身体"</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildFoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _person<span class="token punctuation">.</span>Foot <span class="token operator">=</span> <span class="token string">"建造男人的脚"</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BuildHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _person<span class="token punctuation">.</span>Head <span class="token operator">=</span> <span class="token string">"建造男人的头"</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name">Person</span> <span class="token function">BuildPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> _person<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span>
        <span class="token doc-comment comment">/// 建造者</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span>
        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonDirector</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token return-type class-name">Person</span> <span class="token function">ConstructPerson</span><span class="token punctuation">(</span><span class="token class-name">IPersonBuilder</span> pb<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                pb<span class="token punctuation">.</span><span class="token function">BuildHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                pb<span class="token punctuation">.</span><span class="token function">BuildBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                pb<span class="token punctuation">.</span><span class="token function">BuildFoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> pb<span class="token punctuation">.</span><span class="token function">BuildPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span>
        <span class="token doc-comment comment">/// Product</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span>
        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Head <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Body <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Foot <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Man</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Person</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div></template>
