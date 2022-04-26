<template><h1 id="享元模式-flyweight-pattern" tabindex="-1"><a class="header-anchor" href="#享元模式-flyweight-pattern" aria-hidden="true">#</a> 享元模式(Flyweight Pattern)</h1>
<p>享元模式是一种软件设计模式。它使用共享物件，用来尽可能减少内存使用量以及分析资讯给尽可能多的相似物件；它适合用于只是因重复而导致使用无法令人接受的大量内存的大量物件。通常物件中的部分状态是可以分享。常见做法是把它们放在外部数据结构，当需要使用时再将它们传递给享元。</p>
<ul>
<li>定义</li>
</ul>
<p>享元模式,运用共享技术有效的支持大量细粒度的对象。</p>
<p>典型的享元模式的例子为文书处理器中以图形结构来表示字符。一个做法是，每个字形有其字型外观，字模metrics，和其它格式咨询，但这会使每个字符就耗用上千字节。取而代之的是，每个字符参照到一个共享字形物件，此物件会被其它有共同特质的字符所分享；只有每个字符(文件中或页面中)的位置才需要另外存储。</p>
<ul>
<li>结构</li>
</ul>
<p>两个状态</p>
<ol>
<li>内蕴状态存储再享元内部，不会随环境的改变而有所不同，是可以共享的。</li>
<li>外蕴状态是不可以共享的，它随环境的改变而改变的，因此外蕴状态是由客户端来保持(因为环境的变化是由客户端引起的)。</li>
</ol>
<p>UML结构图</p>
<ol>
<li>抽象享元角色：为具体享元角色规定了必须实现的方法，而外蕴状态就是以参数的形式通过此方法传入。可以由抽象类、接口来担当。</li>
<li>具体享元角色：实现抽象角色规定的方法。如果存在内蕴状态，就负责为内蕴状态提供存储空间。</li>
<li>享元工厂角色：负责创建和管理享元角色。要想达到共享的目的，这个角色的实现是关键！</li>
<li>客户端角色：维护对所有享元对象的引用，而且还需要存储对应的外蕴状态。</li>
</ol>
<ul>
<li>使用场景</li>
</ul>
<p>如果一个应用程序使用了大量的对象，而这些对象造成了很大的存储开销的时候就可以考虑是否使用享元模式。</p>
<p>例如，如果发现某个对象的生成了大量细粒度的实例，并且这些实例除了几个参数外基本是相同的，如果把那些共享参数移到类外面，再方法调用时将它们传递进来，就可以通过共享大幅度单个实例的数目。</p>
<ul>
<li>示例</li>
</ul>
<p>典型的享元模式的例子为文书处理器中以图形结构来表示字符。一个做法是，每个字形有其字型外观，字模metrics，和其他格式资讯，但这会使每个字符就好用上千字节。取而代之的是，每个字符参照到一个共享字形物件，此物件会被其他共同特质的字符所分享；只有每个字符(文件中或页面中)的位置才需要另外存储。</p>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">Design_Pattern</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> document <span class="token operator">=</span> <span class="token string">"AAZZBBZB"</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> chars <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">ToCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FlyweightPattern<span class="token punctuation">.</span>CharacterFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//extrinsic state</span>
    <span class="token class-name"><span class="token keyword">int</span></span> pointSize <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token comment">//for each character use a flyweight object</span>
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> c <span class="token keyword">in</span> chars<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        pointSize<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> character <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">GetCharacter</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        character<span class="token punctuation">.</span><span class="token function">Display</span><span class="token punctuation">(</span>pointSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FlyweightPattern</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CharacterFactory</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">private</span> <span class="token class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">char</span><span class="token punctuation">,</span>Character<span class="token punctuation">></span></span> _characters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">char</span><span class="token punctuation">,</span>Character<span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">public</span> <span class="token return-type class-name">Character</span> <span class="token function">GetCharacter</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">char</span></span> key<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//Uses "lazy initialization"</span>
                <span class="token class-name">Character</span> character <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>_characters<span class="token punctuation">.</span><span class="token function">ContainsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    character <span class="token operator">=</span> _characters<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">else</span>
                <span class="token punctuation">{</span>
                    <span class="token keyword">switch</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        <span class="token keyword">case</span> <span class="token char">'A'</span><span class="token punctuation">:</span> character <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CharacterA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
                        <span class="token keyword">case</span> <span class="token char">'B'</span><span class="token punctuation">:</span> character <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CharacterB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
                        <span class="token keyword">case</span> <span class="token char">'Z'</span><span class="token punctuation">:</span> character <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CharacterZ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    _characters<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>character<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">return</span> character<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span>
        <span class="token doc-comment comment">/// The 'Flyweight' abstract class</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span>
        <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Character</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">protected</span> <span class="token class-name"><span class="token keyword">char</span></span> symbol<span class="token punctuation">;</span>
            <span class="token keyword">protected</span> <span class="token class-name"><span class="token keyword">int</span></span> width<span class="token punctuation">;</span>
            <span class="token keyword">protected</span> <span class="token class-name"><span class="token keyword">int</span></span> height<span class="token punctuation">;</span>
            <span class="token keyword">protected</span> <span class="token class-name"><span class="token keyword">int</span></span> ascent<span class="token punctuation">;</span>
            <span class="token keyword">protected</span> <span class="token class-name"><span class="token keyword">int</span></span> descent<span class="token punctuation">;</span>
            <span class="token keyword">protected</span> <span class="token class-name"><span class="token keyword">int</span></span> pointSize<span class="token punctuation">;</span>

            <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> pointSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span>
        <span class="token doc-comment comment">/// A 'ConcreteFlyweight' class</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span>
        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CharacterA</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Character</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token function">CharacterA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                symbol <span class="token operator">=</span> <span class="token char">'A'</span><span class="token punctuation">;</span>
                height <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
                width <span class="token operator">=</span> <span class="token number">120</span><span class="token punctuation">;</span>
                ascent <span class="token operator">=</span> <span class="token number">70</span><span class="token punctuation">;</span>
                descent <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> pointSize<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>pointSize <span class="token operator">=</span> pointSize<span class="token punctuation">;</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">symbol</span><span class="token punctuation">}</span></span><span class="token string"> (pointSize </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">pointSize</span><span class="token punctuation">}</span></span><span class="token string">)"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CharacterB</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Character</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token function">CharacterB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                symbol <span class="token operator">=</span> <span class="token char">'B'</span><span class="token punctuation">;</span>
                height <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
                width <span class="token operator">=</span> <span class="token number">140</span><span class="token punctuation">;</span>
                ascent <span class="token operator">=</span> <span class="token number">72</span><span class="token punctuation">;</span>
                descent <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> pointSize<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>pointSize <span class="token operator">=</span> pointSize<span class="token punctuation">;</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">symbol</span><span class="token punctuation">}</span></span><span class="token string"> (pointSize </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">pointSize</span><span class="token punctuation">}</span></span><span class="token string">)"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CharacterZ</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Character</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token function">CharacterZ</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                symbol <span class="token operator">=</span> <span class="token char">'Z'</span><span class="token punctuation">;</span>
                height <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
                width <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
                ascent <span class="token operator">=</span> <span class="token number">68</span><span class="token punctuation">;</span>
                descent <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> pointSize<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>pointSize <span class="token operator">=</span> pointSize<span class="token punctuation">;</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">symbol</span><span class="token punctuation">}</span></span><span class="token string"> (pointSize </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">pointSize</span><span class="token punctuation">}</span></span><span class="token string">)"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br></div></div></template>
