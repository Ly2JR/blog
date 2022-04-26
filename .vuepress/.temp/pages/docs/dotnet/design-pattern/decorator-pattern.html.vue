<template><h1 id="装饰模式-decorator-pattern" tabindex="-1"><a class="header-anchor" href="#装饰模式-decorator-pattern" aria-hidden="true">#</a> 装饰模式(Decorator Pattern)</h1>
<p>装饰模式指的是在不必改变原类文件和使用继承的情况下，动态地扩展一个对象的功能。它是通过创建一个包装对象，也就是装饰来包裹真实的对象。</p>
<ul>
<li>定义</li>
</ul>
<p>23钟设计模式之一，英文交Decorator Pattern,又叫装饰者模式。装饰者模式是在不比改变原类文件和使用继承的情况下，动态地扩展一个对象的功能。它是通过创建一个包装对象，也就是装饰来包裹真实的对象。</p>
<ul>
<li>
<p>模式特点</p>
<ol>
<li>装饰对象和真实对象有相同的接口。这样客户端对象就能以和真实对象相同的方式和装饰对象交互。</li>
<li>装饰对象包含一个真实对象的引用(reference)。</li>
<li>装饰对象接受所有来自客户端的请求。它把这些请求转发给真实的对象。</li>
<li>装饰对象可以在转发这些请求以前或以后增加一些附加功能。这样就确保了在运行时，不用修改给定对象的结构就可以在外部增加附加的功能。在面向对象的设计中，通常是通过继承来实现对给定类的功能扩展。</li>
</ol>
</li>
<li>
<p>适用性</p>
</li>
</ul>
<p>以下情况使用Decorator模式</p>
<ol>
<li>需要扩展一个类的功能，或给一个类添加附近职责。</li>
<li>需要动态的给一个对象添加功能，这些功能可以再动态的撤销。</li>
<li>需要增加由一些基本功能的排列组合而产生的非常大量的功能，从而使继承关系变的不现实。</li>
<li>当不能采用生成子类的方法进行扩充时。一种情况是，可能有大量独立的扩展，为支持每一种组合将产生大量的子类，使得子类数目呈爆炸性增长。另一种情况可能是因为类定义被隐藏，或类定义不能用于生成子类。</li>
</ol>
<ul>
<li>优点</li>
</ul>
<ol>
<li>Decorator模式于继承关系的目的都是要扩展对象的功能，但是Decorator可以提供比继承更多的灵活性。</li>
<li>通过使用不同的具体装饰类以及这些装饰类的排列组合，设计师可以创造出很多不同行为的组合。</li>
</ol>
<ul>
<li>
<p>缺点</p>
<ol>
<li>这种比继承更加灵活动机的特性，也同事意味着更加多的复杂性。</li>
<li>装饰模式会导致设计中出现许多小类，如果过度使用，会使程序变得很复杂。</li>
<li>装饰模式是针对抽象组件(Component)类型编程。但是，如果你要针对具体组件编程时，就应该重新思考你的应用架构，以及装饰者是否合适。当然也可以改变Component接口，增加新的公开的行为，实现”半透明“的装饰者模式。在实际项目中要做出最佳选择。</li>
</ol>
<ul>
<li>
<p>设计原则</p>
<ol>
<li>多组合，少继承。
利用继承设计子类的行为，是在编译时静态决定的，而且所有的子类都会继承到相同的行为。然而，如果能够利用组合的做法扩展对象的行为，就可以在运行时动态地进行扩展。</li>
<li>类应设计的对扩展开放，对修改关闭。</li>
</ol>
</li>
</ul>
</li>
<li>
<p>模式简化</p>
</li>
</ul>
<ol>
<li>如果只有一个Concrete Component类而没有抽象的Component接口时，可以让Decorator继承Concrete Component.</li>
<li>如果只有一个Concrete Decorator类时，可以将Decorator和Concrete Decorator合并。</li>
</ol>
<ul>
<li>相关区别</li>
</ul>
<ol>
<li>关于新职责：适配器也可以在转换时增加新的职责，但主要目的不在此。装饰者模式抓哟是给被装饰者新增新职责的。</li>
<li>关于原接口：适配器模式是用新接口来调用原接口，原接口对新系统是不可见或者说不可用的。装饰者模式原封不动的使用原接口，系统对装饰的对象也通过原接口来完成使用。（增加新接口的装饰者模式可用认为是其变种--”半透明“装饰者）</li>
<li>关于其包裹的对象：适配器是知道被适配者的详细情况的(就是那个类或那个接口)。装饰者只知道其接口是什么，至于其具体类型(是基类还是其他派生类)只又在运行期间才知道。</li>
</ol>
<ul>
<li>代码示例</li>
</ul>
<p>在装饰模式中的各个角色有：</p>
<ol>
<li>抽象构件(Component)角色：给出一个抽象接口，以规范准备接收附加责任的对象。</li>
<li>具体构件(Concrete Component)角色：定义一个将要接收附加责任的类。</li>
<li>装饰(Decorator)角色：持有一个构件(Component)对象的实例，并实现一个与抽象构建接口一致的接口。</li>
<li>具体装饰(Concrete Decorator)角色：负责给构建对象添加上附加的责任。</li>
</ol>
<p>以下示例中，ThirdParty.cs假定是一个现有的或者第三方的功能，因某种原因我们不能直接修改，它提供了一个SayMsg()的方法，而我们要做的是想在它的SayMsg()方法中增加一些我们想额外输出的内容，于是我们重写了一个Decorator.cs类。</p>
<ul>
<li>示例</li>
</ul>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">Design_Pattern</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> thirdPartyOne <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DecoratorPattern<span class="token punctuation">.</span>ThirdParty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> decorator1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DecoratorPattern<span class="token punctuation">.</span>Decorator1</span><span class="token punctuation">(</span>thirdPartyOne<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> decorator2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DecoratorPattern<span class="token punctuation">.</span>Decorator2</span><span class="token punctuation">(</span>decorator1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>decorator2<span class="token punctuation">.</span><span class="token function">SayMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DecoratorPattern</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IThirdParty</span>
        <span class="token punctuation">{</span>
            <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">SayMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThirdParty</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IThirdParty</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">SayMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Decorator1</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IThirdParty</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IThirdParty</span> _thirdParty<span class="token punctuation">;</span>

            <span class="token keyword">public</span> <span class="token function">Decorator1</span><span class="token punctuation">(</span><span class="token class-name">IThirdParty</span> thirdParty<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>_thirdParty <span class="token operator">=</span> thirdParty<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">SayMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token interpolation-string"><span class="token string">$"##1</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">_thirdParty<span class="token punctuation">.</span><span class="token function">SayMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">##1"</span></span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Decorator2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IThirdParty</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IThirdParty</span> _thirdParty<span class="token punctuation">;</span>

            <span class="token keyword">public</span> <span class="token function">Decorator2</span><span class="token punctuation">(</span><span class="token class-name">IThirdParty</span> thirdParty<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>_thirdParty <span class="token operator">=</span> thirdParty<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">SayMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token interpolation-string"><span class="token string">$"##2</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">_thirdParty<span class="token punctuation">.</span><span class="token function">SayMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">##2"</span></span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div></template>
