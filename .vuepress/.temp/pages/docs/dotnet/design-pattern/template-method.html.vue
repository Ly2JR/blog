<template><h1 id="模板方法-template-method" tabindex="-1"><a class="header-anchor" href="#模板方法-template-method" aria-hidden="true">#</a> 模板方法(Template Method)</h1>
<p>模板方法模式定义了一个算法的步骤，并允许子类别为一个或多个步骤提供其实践方式。让子类别在不改变算法架构的情况下，重新定义算法中的某些步骤。在软件工程中，它是一种软件设计模式，和C++模板没有关联。</p>
<ul>
<li>
<p>用法</p>
<p>模板方法模式多用在：</p>
<ul>
<li>
<p>某些类别的算法中，实做了相同的方法，造成程式码的重复。</p>
</li>
<li>
<p>控制子类别必须遵守的一些事项。</p>
</li>
</ul>
</li>
<li>
<p>示例</p>
</li>
</ul>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">Design_Pattern</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> categories <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TemplateMethod<span class="token punctuation">.</span>Categories</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    categories<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> products<span class="token operator">=</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">TemplateMethod<span class="token punctuation">.</span>Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    products<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span>  <span class="token keyword">class</span> <span class="token class-name">TemplateMethod</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">DataAccessor</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Process</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> top<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> top<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token function">Connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">Select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">Process</span><span class="token punctuation">(</span>top<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">Disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Categories</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">DataAccessor</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">private</span> <span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">></span><span class="token punctuation">?</span></span> _categories<span class="token punctuation">;</span>

            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _categories <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _categories<span class="token punctuation">.</span><span class="token function">Clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Process</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> top<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Categories --- "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> top<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>_categories<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _categories<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Red"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _categories<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Green"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _categories<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Blue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _categories<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Yellow"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _categories<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Purple"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _categories<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"White"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _categories<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Black"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Products</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">DataAccessor</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">private</span> <span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">></span><span class="token punctuation">?</span></span> _products<span class="token punctuation">;</span>

            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _products <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _products<span class="token punctuation">.</span><span class="token function">Clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Process</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> top<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Products --- "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> top<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>_products<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _products<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Car"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _products<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Bike"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _products<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Boat"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _products<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Truck"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _products<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Moped"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _products<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Rollerskate"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _products<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Stroller"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div></template>
