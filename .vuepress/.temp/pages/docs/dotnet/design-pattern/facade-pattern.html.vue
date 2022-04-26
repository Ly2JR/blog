<template><h1 id="外观模式-facade-pattern" tabindex="-1"><a class="header-anchor" href="#外观模式-facade-pattern" aria-hidden="true">#</a> 外观模式(Facade Pattern)</h1>
<p>外观模式。亦称&quot;过程模式&quot;。学校课程评价模式之一。美国教育学者斯泰克1967年在所著《教育评价的外观》中提出。主张按照描述和判断资料来评价课程，关键的活动是在课程实施的全过程中进行观察和搜集意见，以了解人民对课程的不同看法。这种模式不限于检测教学的成果，重视描述和判断教学过程中的各种复杂、动态的现象和事务。</p>
<ul>
<li>
<p>结构</p>
<ol>
<li>Facade</li>
</ol>
<p>这个外观类为子系统提供一个共同的对外接口
2. Clients</p>
<p>这个对象通过一个外观接口读写子系统中各接口的数据资源。</p>
</li>
<li>
<p>适用场景</p>
</li>
</ul>
<p>在以下情况下可以考虑适用外观模式：</p>
<ol>
<li>设计初期阶段，应该有意识的将不同层分离，层与层之间建立外观模式。</li>
<li>开发阶段，子系统越来越复杂，增加外观模式提供一个简单的调用接口。</li>
<li>维护一个大型遗留系统的时候，可能这个系统已经非常难以维护和扩展，但又包含非常重要的功能，为其开发一个外观类，以便更系统与其交互。</li>
</ol>
<ul>
<li>
<p>优点</p>
<ol>
<li>实现了子系统与客户端之间的松耦合关系。</li>
<li>客户端屏蔽了子系统组件，减少了客户端所需处理的对象数目，并使得子系统适用起来更加容易。</li>
</ol>
</li>
<li>
<p>示例</p>
</li>
</ul>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">Design_Pattern</span>
<span class="token punctuation">{</span>
    <span class="token class-name">FacadePattern<span class="token punctuation">.</span>Facade</span> facade <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FacadePattern<span class="token punctuation">.</span>Facade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    facade<span class="token punctuation">.</span><span class="token function">MethodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    facade<span class="token punctuation">.</span><span class="token function">MethodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FacadePattern</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// "Subsystem ClassA" </span>
        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SubSystemOne</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">" SubSystemOne Method"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Subsystem ClassB"   </span>
        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SubSystemTwo</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">" SubSystemTwo Method"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Subsystem ClassC"  </span>
        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SubSystemThree</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodThree</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">" SubSystemThree Method"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Subsystem ClassD"  </span>
        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SubSystemFour</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodFour</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">" SubSystemFour Method"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// "Facade"   </span>
        <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Facade</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">readonly</span> <span class="token class-name">SubSystemOne</span> _one<span class="token punctuation">;</span>
            <span class="token keyword">readonly</span> <span class="token class-name">SubSystemTwo</span> _two<span class="token punctuation">;</span>
            <span class="token keyword">readonly</span> <span class="token class-name">SubSystemThree</span> _three<span class="token punctuation">;</span>
            <span class="token keyword">readonly</span> <span class="token class-name">SubSystemFour</span> _four<span class="token punctuation">;</span>
            <span class="token keyword">public</span> <span class="token function">Facade</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                _one <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SubSystemOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _two <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SubSystemTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _three <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SubSystemThree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _four <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SubSystemFour</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"\nMethodA() ---- "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _one<span class="token punctuation">.</span><span class="token function">MethodOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _two<span class="token punctuation">.</span><span class="token function">MethodTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _four<span class="token punctuation">.</span><span class="token function">MethodFour</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"\nMethodB() ---- "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _two<span class="token punctuation">.</span><span class="token function">MethodTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                _three<span class="token punctuation">.</span><span class="token function">MethodThree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div></template>
