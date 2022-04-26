<template><h1 id="工厂方法模式-factory-method" tabindex="-1"><a class="header-anchor" href="#工厂方法模式-factory-method" aria-hidden="true">#</a> 工厂方法模式(Factory Method)</h1>
<p>工厂方法模式是一种常用的类创建型设计模式，此模式的核心精神是封装类中变化的部分，提取其中个性化善变的部分为独立类，
通过依赖注入以达到解耦、复用和方便后期维护扩展的目的。它的核心结构有四个角色，分别是抽象工厂、具体工厂、抽象产品、
具体产品。</p>
<ul>
<li>模式简介</li>
</ul>
<p>工厂方法模式的意义是定义一个创建产品对象的工厂接口，将实际创建工作推迟到子类当中。核心工厂类不再负责产品的创建，这样
核心类成为一个抽象工厂校色，仅负责具体工厂子类必须实现的接口，这样进一步抽象化的好处是使得工厂方法模式可以使系统在不
修改具体工厂角色的情况下引进新的产品。</p>
<p>工厂方法模式是简单工厂模式的衍生，解决了许多简单工厂模式的问题。首先完全实现'开-闭原则'，实现了可扩展。其次更复杂的乘此结构，
可以应用于产品结果复杂的场合。</p>
<p>工厂方法模式对简单工厂模式进行了抽象。有一个抽象的Factory类(可以是抽象类和接口),这个类将不再负责具体的产品生产，而是只
制定一些规范，具体的生产工作由其子类去完成。在这个模式中，工厂类和产品类王伟可以依次对应。即一个抽象工厂对应一个抽象产品，
一个具体工厂对应一个具体产品，这个具体的工厂就负责生产对应的产品。</p>
<p>工厂方法模式是最典型的模板方法模式应用。</p>
<ul>
<li>角色结构</li>
</ul>
<p>抽象工厂角色：是工厂方法模式的核心，与应用程序无关。任何在模式中创建的对象的工厂类必须实现这个接口。</p>
<p>具体工厂角色：这是实现抽象工厂接口的具体工厂类，包含与应用程序密切相关的逻辑，并且受到应用程序调用以
创建产品对象。在上图中有两个这样的角色：BuldCreator与TubeCreator。</p>
<p>抽象产品角色：工厂方法模式所创建的对象的超类型，也就是产品对象的共同父类或共同拥有的接口。</p>
<p>具体产品角色：这个角色实现了抽象产品角色所定义的接口。某具体产品有专门的具体工厂创建，它们之间往往一一对应。</p>
<ul>
<li>模式应用</li>
</ul>
<p>工厂方法经常用在以下两种情况中：</p>
<p>第一种情况是针对某个产品，调用者清楚地知道应该使用哪个具体工厂服务，实例化该具体工厂，生产出具体的产品来。</p>
<p>第二种情况，只是需要一种产品，而不想知道也不需要知道究竟是哪个工厂为生产的，即最终选用哪个具体工厂的决定权
在生产者一方，它们根据当前系统的情况来实例化一个具体的工厂返回给使用者，而这个决策过程杜宇使用者来说是透明的。</p>
<ul>
<li>示例</li>
</ul>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">Design_Pattern</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> shreddedPorkWithPotatoesFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FactoryMethod<span class="token punctuation">.</span>ShreddedPorkWithPotatoesFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> tomatoScrambledEggsFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FactoryMethod<span class="token punctuation">.</span>TomatoScrambledEggsFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> tomatoScrambleEggs <span class="token operator">=</span> tomatoScrambledEggsFactory<span class="token punctuation">.</span><span class="token function">CreateFoodFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tomatoScrambleEggs<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> shreddedPorkWithPotatoes <span class="token operator">=</span> shreddedPorkWithPotatoesFactory<span class="token punctuation">.</span><span class="token function">CreateFoodFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    shreddedPorkWithPotatoes<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span>  <span class="token keyword">class</span> <span class="token class-name">FactoryMethod</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Food</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TomatoScrambleEggs</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Food</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"西红柿炒鸡蛋"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShreddedPorkWithPotatoes</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Food</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"土豆肉丝"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Creator</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name">Food</span> <span class="token function">CreateFoodFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TomatoScrambledEggsFactory</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Creator</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">Food</span> <span class="token function">CreateFoodFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TomatoScrambleEggs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShreddedPorkWithPotatoesFactory</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Creator</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">Food</span> <span class="token function">CreateFoodFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ShreddedPorkWithPotatoes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div></template>
