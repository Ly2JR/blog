<template><h1 id="自定义键盘" tabindex="-1"><a class="header-anchor" href="#自定义键盘" aria-hidden="true">#</a> 自定义键盘</h1>
<p>开发一个自定义键盘，比如有省份、字母、数字组合的模拟键盘，样式如下:</p>
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code>| 京 | 沪 | 浙 | 苏 | 粤 | 鲁 | 晋 | 冀 | 豫 | 川 |
| 渝 | 辽 | 吉 | 黑 | 皖 | 鄂 | 津 | 贵 | 云 | 桂 |
| 琼 | 青 | 新 | 藏 | 蒙 | 宁 | 甘 | 陕 | 闽 | 赣 |
| 湘 |   
| A | B | C | D | E | F | G | H | I | J |
| K | L | M | N | O | P | Q | R | S | T |
| U | V | W | X | Y | Z |
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2>
<ul>
<li>
<p>jQuery.fn.extend()</p>
<p>语法：jQuery.fn.extend( object )</p>
<p>简介：为JQuery添加扩展方法，并返回本身。</p>
<p><a href="https://api.jquery.com/jQuery.fn.extend/" target="_blank" rel="noopener noreferrer">官方传送门<ExternalLinkIcon/></a></p>
</li>
<li>
<p>设计思路</p>
<ul>
<li>
<p>定义一个数组用于存在键盘按键的内容</p>
<p>第一行用于存储省份;</p>
<p>第二行用于存储大写字母;</p>
<p>第三行用于存储数字;</p>
<p>...</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/*
* 键盘内容
*/</span>
<span class="token keyword">function</span> <span class="token function">getKeyBoardData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> keyBoard <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//省份</span>
    <span class="token keyword">let</span> provinces <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token string">"京"</span><span class="token punctuation">,</span> <span class="token string">"沪"</span><span class="token punctuation">,</span> <span class="token string">"浙"</span><span class="token punctuation">,</span> <span class="token string">"苏"</span><span class="token punctuation">,</span> <span class="token string">"粤"</span><span class="token punctuation">,</span> <span class="token string">"鲁"</span><span class="token punctuation">,</span> <span class="token string">"晋"</span><span class="token punctuation">,</span> <span class="token string">"冀"</span><span class="token punctuation">,</span>
        <span class="token string">"豫"</span><span class="token punctuation">,</span> <span class="token string">"川"</span><span class="token punctuation">,</span> <span class="token string">"渝"</span><span class="token punctuation">,</span> <span class="token string">"辽"</span><span class="token punctuation">,</span> <span class="token string">"吉"</span><span class="token punctuation">,</span> <span class="token string">"黑"</span><span class="token punctuation">,</span> <span class="token string">"皖"</span><span class="token punctuation">,</span> <span class="token string">"鄂"</span><span class="token punctuation">,</span>
        <span class="token string">"津"</span><span class="token punctuation">,</span> <span class="token string">"贵"</span><span class="token punctuation">,</span> <span class="token string">"云"</span><span class="token punctuation">,</span> <span class="token string">"桂"</span><span class="token punctuation">,</span> <span class="token string">"琼"</span><span class="token punctuation">,</span> <span class="token string">"青"</span><span class="token punctuation">,</span> <span class="token string">"新"</span><span class="token punctuation">,</span> <span class="token string">"藏"</span><span class="token punctuation">,</span>
        <span class="token string">"蒙"</span><span class="token punctuation">,</span> <span class="token string">"宁"</span><span class="token punctuation">,</span> <span class="token string">"甘"</span><span class="token punctuation">,</span> <span class="token string">"陕"</span><span class="token punctuation">,</span> <span class="token string">"闽"</span><span class="token punctuation">,</span> <span class="token string">"赣"</span><span class="token punctuation">,</span> <span class="token string">"湘"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//字母65-90</span>
    <span class="token keyword">let</span> letters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">65</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">90</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        letters<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//字母</span>
    <span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//其他</span>
    <span class="token keyword">let</span> others <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"后退"</span><span class="token punctuation">,</span> <span class="token string">"清除"</span><span class="token punctuation">,</span> <span class="token string">"关闭"</span><span class="token punctuation">]</span>

    keyBoard<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> provinces<span class="token punctuation">;</span>
    keyBoard<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> letters<span class="token punctuation">;</span>
    keyBoard<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> numbers<span class="token punctuation">;</span>
    keyBoard<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> others<span class="token punctuation">;</span>
    <span class="token keyword">return</span> keyBoard<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></li>
<li>
<p>设计单独一个按键的形状</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
* 单独一个小按键
* x:按键的X轴
* y:按键的Y轴
* heigh:按键的高度
* width:按键的宽度
* value:按键的内容
* callback:按键回调事件
**/</span>
<span class="token keyword">function</span> <span class="token function">keyCard</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    height <span class="token operator">=</span> height <span class="token operator">||</span> <span class="token number">48</span><span class="token punctuation">;</span>
    width <span class="token operator">=</span> width <span class="token operator">||</span> <span class="token number">48</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> addHtml <span class="token operator">=</span> <span class="token string">"&lt;div style='position:absolute;left:"</span> <span class="token operator">+</span> x <span class="token operator">+</span> <span class="token string">"px;top:"</span> <span class="token operator">+</span> y <span class="token operator">+</span> <span class="token string">"px;width:"</span> <span class="token operator">+</span> width <span class="token operator">+</span> <span class="token string">"px;height:"</span> <span class="token operator">+</span> height <span class="token operator">+</span> <span class="token string">"px;line-height:"</span> <span class="token operator">+</span> height <span class="token operator">+</span> <span class="token string">"px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; '>"</span><span class="token punctuation">;</span>
    addHtml <span class="token operator">+=</span> <span class="token string">"&lt;span class='keyCard'"</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">&amp;&amp;</span> callback <span class="token keyword">instanceof</span> <span class="token class-name">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        addHtml <span class="token operator">+=</span> <span class="token string">"onclick = '"</span> <span class="token operator">+</span> callback<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"(\""</span> <span class="token operator">+</span> value <span class="token operator">+</span> <span class="token string">"\")'"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    addHtml <span class="token operator">+=</span> <span class="token string">">"</span> <span class="token operator">+</span> value <span class="token operator">+</span> <span class="token string">"&lt;/span>&lt;/div>"</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> addHtml<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></li>
<li>
<p>整体键盘生成</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** 整体键盘生成
*id: 容器
*opt：配置参数
*callback:按钮回调
**/</span>
<span class="token keyword">function</span> <span class="token function">generateKeyBoard</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> opt<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//按键数据</span>
    <span class="token keyword">let</span> keyBoard <span class="token operator">=</span> <span class="token function">getKeyBoardData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//行</span>
    <span class="token keyword">let</span> maxRows <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    keyBoard<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        maxRows <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>length <span class="token operator">/</span> opt<span class="token punctuation">.</span>maxColumns<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//按键背景高度</span>
    <span class="token keyword">let</span> key_bg_height <span class="token operator">=</span> maxRows <span class="token operator">*</span> <span class="token punctuation">(</span>opt<span class="token punctuation">.</span>keyHeigh <span class="token operator">+</span> opt<span class="token punctuation">.</span>space<span class="token punctuation">)</span> <span class="token operator">+</span> opt<span class="token punctuation">.</span>space<span class="token punctuation">;</span>
    <span class="token keyword">let</span> key_bg_wight <span class="token operator">=</span> opt<span class="token punctuation">.</span>maxColumns <span class="token operator">*</span> <span class="token punctuation">(</span>opt<span class="token punctuation">.</span>keyWidth <span class="token operator">+</span> opt<span class="token punctuation">.</span>space<span class="token punctuation">)</span> <span class="token operator">+</span> opt<span class="token punctuation">.</span>space<span class="token punctuation">;</span>

    <span class="token function">$</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">"background-color"</span><span class="token operator">:</span> <span class="token string">"transpant"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"width"</span><span class="token operator">:</span> key_bg_wight <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">,</span>
        <span class="token string-property property">"position"</span><span class="token operator">:</span> <span class="token string">"fixed"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"right"</span><span class="token operator">:</span> opt<span class="token punctuation">.</span>right <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">,</span>
        <span class="token string-property property">"top"</span><span class="token operator">:</span> opt<span class="token punctuation">.</span>top <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">,</span>
        <span class="token string-property property">"height"</span><span class="token operator">:</span> key_bg_height <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">,</span>
        <span class="token string-property property">"display"</span><span class="token operator">:</span> <span class="token string">"block"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> lastRow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    keyBoard<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> startY <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        lastRow <span class="token operator">+=</span> index <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">/</span> opt<span class="token punctuation">.</span>maxColumns<span class="token punctuation">)</span><span class="token punctuation">;</span>
        data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> startX <span class="token operator">=</span> i <span class="token operator">%</span> opt<span class="token punctuation">.</span>maxColumns<span class="token punctuation">;</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>startX <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token operator">++</span>startY<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            x <span class="token operator">=</span> startX <span class="token operator">*</span> opt<span class="token punctuation">.</span>keyWidth <span class="token operator">+</span> <span class="token punctuation">(</span>startX <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> opt<span class="token punctuation">.</span>space<span class="token punctuation">;</span>
            y <span class="token operator">=</span> <span class="token punctuation">(</span>lastRow <span class="token operator">+</span> startY<span class="token punctuation">)</span> <span class="token operator">*</span> opt<span class="token punctuation">.</span>keyHeigh <span class="token operator">+</span> <span class="token punctuation">(</span>lastRow <span class="token operator">+</span> startY <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> opt<span class="token punctuation">.</span>space<span class="token punctuation">;</span>
            <span class="token function">$</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token function">keyCard</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>keyWidth<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>keyHeigh<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div></li>
<li>
<p>集成一个自定义插件</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  $<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">//默认设置</span>
      <span class="token literal-property property">defaults</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//最大列</span>
          <span class="token literal-property property">maxColumns</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
          <span class="token comment">//默认大小</span>
          <span class="token literal-property property">keyWidth</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
          <span class="token literal-property property">keyHeigh</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
          <span class="token comment">//按钮间距</span>
          <span class="token literal-property property">space</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
          <span class="token comment">//顶部距离</span>
          <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token comment">//右边距</span>
          <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function-variable function">plateKeyBoard</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">opts<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> containId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
          <span class="token keyword">let</span> opt <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>defaults<span class="token punctuation">,</span> opts<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">generateKeyBoard</span><span class="token punctuation">(</span>containId<span class="token punctuation">,</span> opt<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></li>
<li>
<p>Html页面使用</p>
<ul>
<li>
<p>定义三个标签</p>
<p>一个文本框用于接收</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keyBoardContent<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>一个按钮用于点击显示模拟键盘</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">bindKeyBoard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>一个空的容器用于生成键盘</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keyboard<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>自定义按钮绑定生成键盘事件及按键点击处理事件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span>
    <span class="token comment">//与按钮绑定</span>
    <span class="token keyword">function</span> <span class="token function">bindKeyBoard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#keyboard'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">plateKeyBoard</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">60</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> chooseKeyCard<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//自定义处于按键内容</span>
    <span class="token keyword">function</span> <span class="token function">chooseKeyCard</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> currentValue <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#keyBoardContent"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">"后退"</span><span class="token operator">:</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>currentValue <span class="token operator">==</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
                currentValue <span class="token operator">=</span> currentValue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">"清除"</span><span class="token operator">:</span>
                currentValue <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">"关闭"</span><span class="token operator">:</span>
                <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#keyboard"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                currentValue <span class="token operator">+=</span> value<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#keyBoardContent"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span>currentValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></li>
</ul>
</li>
<li>
<p>自定义按钮样式</p>
</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.keyCard</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 17px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> 微软雅黑<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.keyCard:hover</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> royalblue<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 8px 16px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
