<template><h1 id="原型模式-prototype" tabindex="-1"><a class="header-anchor" href="#原型模式-prototype" aria-hidden="true">#</a> 原型模式(Prototype)</h1>
<p>用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。</p>
<p>原型模式是一种创建型设计模式，Prototype模式允许一个对象再创建另外一个可定制的对象，根本无需知道任何如何创建的细节，
工作原理是：通过将一个原型对象传给那个要发动创建的对象，这个要发动创建的对象通过请求原型对象拷贝它们自己来实施创建。</p>
<ul>
<li>解决问题</li>
</ul>
<p>它主要面对的问题是:&quot;某些结构复杂的对象&quot;的创建工作；由于需求的变化，这些对象经常面临着剧烈的变化，但是它们却拥有比较
稳定一致的接口。</p>
<ul>
<li>示例</li>
</ul>
<CodeGroup>
<CodeGroupItem title="浅度复制">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">Design_Pattern</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> redColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Prototype<span class="token punctuation">.</span>RedColor</span>
    <span class="token punctuation">{</span>
        Red <span class="token operator">=</span> <span class="token number">255</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"RedColor - Red </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">redColor<span class="token punctuation">.</span>Red</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> redColorClone <span class="token operator">=</span> redColor<span class="token punctuation">.</span><span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>redColorClone <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        redColorClone<span class="token punctuation">.</span>Red <span class="token operator">=</span> <span class="token number">224</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"RedColorClone - Red </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">redColorClone<span class="token punctuation">.</span>Red</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"RedColor - Red </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">redColor<span class="token punctuation">.</span>Red</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span>  <span class="token keyword">class</span> <span class="token class-name">Prototype</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IColor</span>
        <span class="token punctuation">{</span>
           <span class="token return-type class-name">IColor</span> <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

           <span class="token return-type class-name"><span class="token keyword">int</span></span> Red <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

           <span class="token return-type class-name"><span class="token keyword">int</span></span> Green <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

           <span class="token return-type class-name"><span class="token keyword">int</span></span> Blue <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedColor</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IColor</span></span>
        <span class="token punctuation">{</span>
           <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Red <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

           <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Green <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

           <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Blue <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

           <span class="token keyword">public</span> <span class="token return-type class-name">IColor</span> <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
           <span class="token punctuation">{</span>
               <span class="token keyword">return</span> <span class="token punctuation">(</span>IColor<span class="token punctuation">)</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">MemberwiseClone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="深度复制">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Text<span class="token punctuation">.</span>Json</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">Design_Pattern</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> redColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Prototype<span class="token punctuation">.</span>RedColor</span>
    <span class="token punctuation">{</span>
        Red <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">,</span>
        F <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Prototype<span class="token punctuation">.</span>Factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">"RedColor"</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"RedColor - Factory:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">redColor<span class="token punctuation">.</span>F<span class="token punctuation">.</span>Name</span><span class="token punctuation">}</span></span><span class="token string">; Red - </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">redColor<span class="token punctuation">.</span>Red</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> redColorClone <span class="token operator">=</span> redColor<span class="token punctuation">.</span><span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    redColorClone<span class="token punctuation">.</span>Red <span class="token operator">=</span> <span class="token number">234</span><span class="token punctuation">;</span>
    redColorClone<span class="token punctuation">.</span>F<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"RedColorClone"</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"RedColorClone - Factory </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">redColorClone<span class="token punctuation">.</span>F<span class="token punctuation">.</span>Name</span><span class="token punctuation">}</span></span><span class="token string">; Red - </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">redColorClone<span class="token punctuation">.</span>Red</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span>  <span class="token keyword">class</span> <span class="token class-name">Prototype</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IColor</span>
        <span class="token punctuation">{</span>
            <span class="token return-type class-name">IColor<span class="token punctuation">?</span></span> <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token return-type class-name"><span class="token keyword">int</span></span> Red <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

            <span class="token return-type class-name"><span class="token keyword">int</span></span> Green <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

            <span class="token return-type class-name"><span class="token keyword">int</span></span> Blue <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

            <span class="token return-type class-name">Factory<span class="token punctuation">?</span></span> F <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Factory</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span><span class="token punctuation">?</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedColor</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IColor</span></span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Red <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Green <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Blue <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
            <span class="token keyword">public</span> <span class="token return-type class-name">Factory<span class="token punctuation">?</span></span> F <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

            <span class="token keyword">public</span> <span class="token return-type class-name">IColor<span class="token punctuation">?</span></span> <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token class-name"><span class="token keyword">var</span></span> json <span class="token operator">=</span> JsonSerializer<span class="token punctuation">.</span><span class="token function">Serialize</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> JsonSerializer<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Deserialize</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>RedColor<span class="token punctuation">></span></span></span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
