<template><h1 id="代理模式-proxy-pattern" tabindex="-1"><a class="header-anchor" href="#代理模式-proxy-pattern" aria-hidden="true">#</a> 代理模式(Proxy Pattern)</h1>
<p>所谓的代理者是指一个类别可以作为其它东西的接口。代理者可以作任何东西的接口：网上连接、存储器中的大对象、文件或其他昂贵或无法复制的资源。</p>
<ul>
<li>简介</li>
</ul>
<p>代理模式的定义：为其他对象提供一种代理以控制对这个对象的访问。在某些情况下，一个对象不适合或者不饿能直接引用另外一个对象，而代理对象可以在客户端和目标对象直接起到中介作用。</p>
<p>著名的代理模式例子为引用计数(英文:reference counting)指针对象。</p>
<p>当一个复杂对象的多份副本须存在时，代理模式可以结合享元模式以减少存储器用量。典型作法是创建一个复杂对象及多个代理者，每个代理者会引用到原本的复杂对象。而作用在代理者的运算会转送到原本对象。一旦苏哦有的代理者都不存在时，复杂对象会被移除。</p>
<ul>
<li>组成</li>
</ul>
<p>抽象角色：通过接口或抽象类声明真实角色实现的业务方法。</p>
<p>代理角色：实现抽象角色，是真实角色的代理，通过真实角色的业务逻辑方法来实现抽象方法，并可以附加自己的操作。</p>
<p>真实角色：实现抽象角色，定义真实角色所要实现的业务逻辑，供代理角色调用。</p>
<ul>
<li>优点</li>
</ul>
<ol>
<li>
<p>职责清晰</p>
<p>真实的角色角色实现实际的业务逻辑，不用关系其他非本职责的事物，通过后期的代理完成一件完成事物，附带的结果就是编程简洁清晰。</p>
</li>
<li>
<p>代理对象可以在客户端和目标对象之间起到中介的作用，这样起到了中介的作用和保护了目标对象的作用。</p>
</li>
<li>
<p>高扩展性</p>
</li>
</ol>
<ul>
<li>模式结构</li>
</ul>
<p>一个是真正的你要访问的对象(目标类)，一个是代理对象，真正对象与代理。</p>
<p>对象实现同一个接口，先访问代理类再访问真正要访问的对象。</p>
<p>代理模式分为静态代理、动态代理。</p>
<p>静态代理是由程序员创建或工具生成代理类的源码，再编译代理类。所谓静态也就是再程序运行前就已经存在代理类的字节码文件，代理类和委托类的关系再运行前就确定了。</p>
<p>动态代理是在实现阶段不用关心代理类，而在运行阶段才指定哪一个对象。</p>
<ul>
<li>示例</li>
</ul>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">Design_Pattern</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProxyPattern<span class="token punctuation">.</span>MathProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"4 + 2 = </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">proxy<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"4 - 2 = </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">proxy<span class="token punctuation">.</span><span class="token function">Sub</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"4 * 2 = </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">proxy<span class="token punctuation">.</span><span class="token function">Mul</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"4 / 2 = </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">proxy<span class="token punctuation">.</span><span class="token function">Div</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyPattern</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IMath</span>
        <span class="token punctuation">{</span>
            <span class="token return-type class-name"><span class="token keyword">double</span></span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token return-type class-name"><span class="token keyword">double</span></span> <span class="token function">Sub</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token return-type class-name"><span class="token keyword">double</span></span> <span class="token function">Mul</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token return-type class-name"><span class="token keyword">double</span></span> <span class="token function">Div</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Math</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IMath</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> x<span class="token operator">+</span> y<span class="token punctuation">;</span> 
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> <span class="token function">Sub</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> <span class="token function">Mul</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> <span class="token function">Div</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> x <span class="token operator">/</span> y<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MathProxy</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IMath</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">private</span> <span class="token class-name">Math</span> _math<span class="token operator">=</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Math</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
               <span class="token keyword">return</span> _math<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> <span class="token function">Div</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> _math<span class="token punctuation">.</span><span class="token function">Div</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> <span class="token function">Mul</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> _math<span class="token punctuation">.</span><span class="token function">Mul</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> <span class="token function">Sub</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">double</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> y<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> _math<span class="token punctuation">.</span><span class="token function">Sub</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div></template>
