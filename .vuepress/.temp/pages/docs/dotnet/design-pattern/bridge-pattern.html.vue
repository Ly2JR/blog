<template><h1 id="桥接模式-bridge-pattern" tabindex="-1"><a class="header-anchor" href="#桥接模式-bridge-pattern" aria-hidden="true">#</a> 桥接模式(Bridge Pattern)</h1>
<p>桥接模式是将抽象部分与它的实现部分分离，使它们都开元独立地变化。它是一种对象结构型模式，又成为柄体(Handle and Body)模式或接口(Interface)模式。</p>
<ul>
<li>内容简介</li>
</ul>
<p>在软件系统中，某些类型由于自身的逻辑，它具有两个或多个维度的变化，那么如何应对这种”多维度的变化“？如何利用面向对象的技术来使得该类型能够轻松的沿着多个方向进行变化，而又不引入额外的复杂度？这就要使用Bridge模式。</p>
<ul>
<li>
<p>意图</p>
<p>【GOF95】在提出桥梁模式的时候指出，桥梁模式的用意是”将抽象化(Abstraction)与实现化(Implementation)脱藕，使得二者可以独立地变化“。这句话有三个关键词，也就是抽象化、实现化和脱藕。</p>
<ul>
<li>
<p>抽象化</p>
<p>存在于多个实体中的共同的概念性联系，就是抽象化。作为一个过程，抽象化就是忽略一些信息，从而把不同的实体当做同样的实体对待。</p>
</li>
<li>
<p>实现化</p>
<p>抽象化给出的具体实现，就是实现化。</p>
</li>
<li>
<p>脱藕</p>
<p>所谓耦合，就是两个实体的行为的某种强关联。而将它们的强关联去掉，就是耦合的解脱，或称脱藕。在这里，脱藕是指将抽象化和实现化之间的耦合解脱开，或者说是将它们之间的强关联改换成弱关联。</p>
<p>将两个角色之间的继承关系改为聚合关系，就是将它们之间的强关联改换为弱关联。因此，桥梁模式中的所谓脱藕，就是指在一个软件系统的抽象化和实现化之间使用组合/聚合关系而不是继承关系，从而使两者可以相对独立地变化。这就是桥梁模式的用意。</p>
</li>
</ul>
</li>
<li>
<p>结构</p>
</li>
</ul>
<p>系统含有两个等级结构，也就是:</p>
<ol>
<li>由抽象化角色和修正抽象化角色组成的抽象化等级结构。</li>
<li>由实现化角色和两个具体实现化角色所组成的实现化等级结构。</li>
</ol>
<p>桥梁模式所设计的角色有：</p>
<p>抽象化(Abstraction)角色：抽象化给出的定义，病保存一个对实现化对象的引用。</p>
<p>修正抽象化(Refined Abstraction)角色：扩展抽象化角色，改变和修正父类对抽象化的定义。</p>
<p>实现化(Implementor)角色：这给角色给出实现化角色的接口，但不给出具体的实现。必须指出的是，这个接口不一定和抽象化角色的接口定义相同，实际上，这两个接口可以非常不一样。实现化角色应当只给出底层操作，而抽象化角色应当只给出基于底层操作的更高一层的操作。</p>
<p>具体实现化(Concrete Implementor)角色：这个角色给出实现化角色接口的具体实现。</p>
<ul>
<li>示例</li>
</ul>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">Design_Pattern</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> shapes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BridgePattern<span class="token punctuation">.</span>IShape</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    shapes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BridgePattern<span class="token punctuation">.</span>CircleShape</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BridgePattern<span class="token punctuation">.</span>DrawingApi1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    shapes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BridgePattern<span class="token punctuation">.</span>CircleShape</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BridgePattern<span class="token punctuation">.</span>DrawingApi2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> shape <span class="token keyword">in</span> shapes<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        shape<span class="token punctuation">.</span><span class="token function">ResizeByPercentage</span><span class="token punctuation">(</span><span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        shape<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span>  <span class="token keyword">class</span> <span class="token class-name">BridgePattern</span>
    <span class="token punctuation">{</span>
        <span class="token comment">/**"Implementor"*/</span>
        <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IDrawingApi</span>
        <span class="token punctuation">{</span>
            <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DrawCircle</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> radius<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/**"ConcreteImplementor" 1/2*/</span>
        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DrawingApi1</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IDrawingApi</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DrawCircle</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> radius<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"API1.circle at </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">x</span><span class="token punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">y</span><span class="token punctuation">}</span></span><span class="token string"> radius </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">radius</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/**"ConcreteImplementor" 2/2*/</span>
        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DrawingApi2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IDrawingApi</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DrawCircle</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> radius<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"API2.circle at </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">x</span><span class="token punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">y</span><span class="token punctuation">}</span></span><span class="token string"> radius </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">radius</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/**“Abstraction“*/</span>
        <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IShape</span>
        <span class="token punctuation">{</span>

            <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//low-level(i.e. Implementation-specific)</span>
            <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ResizeByPercentage</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> pct<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/**"Refined Abstraction"*/</span>
        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CircleShape</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IShape</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name"><span class="token keyword">double</span></span> _x<span class="token punctuation">;</span>
            <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name"><span class="token keyword">double</span></span> _y<span class="token punctuation">;</span>
            <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">double</span></span> _radius<span class="token punctuation">;</span>
            <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IDrawingApi</span> _drawingApi<span class="token punctuation">;</span>

            <span class="token keyword">public</span> <span class="token function">CircleShape</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> radius<span class="token punctuation">,</span> <span class="token class-name">IDrawingApi</span> drawingApi<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>_x <span class="token operator">=</span> x<span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>_y <span class="token operator">=</span> y<span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>_radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>_drawingApi <span class="token operator">=</span> drawingApi<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//low-level(i.e. Implementation-specific)</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _drawingApi<span class="token punctuation">.</span><span class="token function">DrawCircle</span><span class="token punctuation">(</span>_x<span class="token punctuation">,</span> _y<span class="token punctuation">,</span> _radius<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">//high-level (i.e. Abstraction-specific)</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ResizeByPercentage</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> pct<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _radius <span class="token operator">*=</span> pct<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div></template>
