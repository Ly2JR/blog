<template><h1 id="中位数统计" tabindex="-1"><a class="header-anchor" href="#中位数统计" aria-hidden="true">#</a> 中位数统计</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>统计学中的专有名词，是按顺序排列的一组数据中居于中间位置的数</p>
</div>
<h2 id="模板说明" tabindex="-1"><a class="header-anchor" href="#模板说明" aria-hidden="true">#</a> 模板说明</h2>
<p>原始数据显示如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">时间</th>
<th style="text-align:left">...</th>
<th style="text-align:left">数据1</th>
<th style="text-align:left">数据2</th>
<th style="text-align:left">数据3</th>
<th style="text-align:left">数据4</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">01/01</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.31</td>
<td style="text-align:left">620.41</td>
<td style="text-align:left">8.97</td>
<td style="text-align:left">1134.76</td>
</tr>
<tr>
<td style="text-align:left">01/01</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.42</td>
<td style="text-align:left">611.12</td>
<td style="text-align:left">9.12</td>
<td style="text-align:left">1214.11</td>
</tr>
<tr>
<td style="text-align:left">01/01</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.34</td>
<td style="text-align:left">600.42</td>
<td style="text-align:left">8.99</td>
<td style="text-align:left">1206.87</td>
</tr>
<tr>
<td style="text-align:left">01/02</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.41</td>
<td style="text-align:left">623.57</td>
<td style="text-align:left">9.18</td>
<td style="text-align:left">1138.21</td>
</tr>
<tr>
<td style="text-align:left">01/02</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.43</td>
<td style="text-align:left">623.57</td>
<td style="text-align:left">9.05</td>
<td style="text-align:left">1175.29</td>
</tr>
<tr>
<td style="text-align:left">01/02</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.51</td>
<td style="text-align:left">624.09</td>
<td style="text-align:left">9.14</td>
<td style="text-align:left">1165.84</td>
</tr>
<tr>
<td style="text-align:left">01/02</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.42</td>
<td style="text-align:left">611.12</td>
<td style="text-align:left">9.11</td>
<td style="text-align:left">1157.75</td>
</tr>
<tr>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
</tr>
</tbody>
</table>
<p>目测中位数统计结果应该如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">时间</th>
<th style="text-align:left">...</th>
<th style="text-align:left">数据1</th>
<th style="text-align:left">数据2</th>
<th style="text-align:left">数据3</th>
<th style="text-align:left">数据4</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">01/01</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.34</td>
<td style="text-align:left">611.12</td>
<td style="text-align:left">8.99</td>
<td style="text-align:left">1206.87</td>
</tr>
<tr>
<td style="text-align:left">01/02</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.425</td>
<td style="text-align:left">623.57</td>
<td style="text-align:left">9.125</td>
<td style="text-align:left">1161.795</td>
</tr>
</tbody>
</table>
<h2 id="宏命令" tabindex="-1"><a class="header-anchor" href="#宏命令" aria-hidden="true">#</a> 宏命令</h2>
<ul>
<li><strong>步骤1</strong>: 参数</li>
</ul>
<CodeGroup>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rDateCol</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>    <span class="token comment">//日期所在列</span>
  <span class="token literal-property property">rCol1</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">;</span>       <span class="token comment">//Data1读取列</span>
  <span class="token literal-property property">rCol2</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">;</span>       <span class="token comment">//Data2读取列</span>
  <span class="token literal-property property">rCol3</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">;</span>       <span class="token comment">//Data3读取列</span>
  <span class="token literal-property property">rCol4</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">;</span>       <span class="token comment">//Data4读取列</span>
  <span class="token literal-property property">startRow</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">;</span>    <span class="token comment">//第几行开始计算</span>
  <span class="token literal-property property">wRow</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>        <span class="token comment">//第几行开始结果写入</span>
  <span class="token literal-property property">wDateCol</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">;</span>    <span class="token comment">//日期结果所在列</span>
  <span class="token literal-property property">wCol1</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">;</span>       <span class="token comment">//Data1统计结果列</span>
  <span class="token literal-property property">wCol2</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">;</span>      <span class="token comment">//Data2统计结果列</span>
  <span class="token literal-property property">wCol3</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">;</span>      <span class="token comment">//Data3结果列</span>
  <span class="token literal-property property">wCol4</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">;</span>      <span class="token comment">//Data4结果列</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="VBA">
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Const</span> rDateCol     <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">1</span>          <span class="token comment">'日期所在列</span>
<span class="token keyword">Const</span> rCol1        <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">3</span>          <span class="token comment">'Data1读取列</span>
<span class="token keyword">Const</span> rCol2        <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">4</span>          <span class="token comment">'Data2读取列</span>
<span class="token keyword">Const</span> rCol3        <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">5</span>          <span class="token comment">'Data3读取列</span>
<span class="token keyword">Const</span> rCol4        <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">6</span>          <span class="token comment">'Data4读取列</span>
<span class="token keyword">Const</span> startRow     <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">4</span>          <span class="token comment">'第几行开始计算</span>
<span class="token keyword">Const</span> wRow         <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">2</span>          <span class="token comment">'第几行开始结果写入</span>
<span class="token keyword">Const</span> wDateCol     <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">8</span>          <span class="token comment">'日期结果所在列</span>
<span class="token keyword">Const</span> wCol1        <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">9</span>          <span class="token comment">'Data1统计结果列</span>
<span class="token keyword">Const</span> wCol2        <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">10</span>         <span class="token comment">'Data2统计结果列</span>
<span class="token keyword">Const</span> wCol3        <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">11</span>         <span class="token comment">'Data3结果列</span>
<span class="token keyword">Const</span> wCol4        <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">12</span>         <span class="token comment">'Data4结果列</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤2</strong>: 赋值方法</li>
</ul>
<CodeGroup>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">GetMedian</span><span class="token punctuation">(</span><span class="token parameter">dataArray<span class="token punctuation">,</span>eleSize</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> temp<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>medianData<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>eleSize<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>eleSize<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dataArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> dataArray<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        temp <span class="token operator">=</span> dataArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        dataArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dataArray<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        dataArray<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>eleSize<span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//偶数</span>
    index <span class="token operator">=</span> eleSize <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    medianData <span class="token operator">=</span> <span class="token punctuation">(</span>dataArray<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> dataArray<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//奇数</span>
    index <span class="token operator">=</span> <span class="token punctuation">(</span>eleSize <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    medianData <span class="token operator">=</span> dataArray<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> medianData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="VBA">
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Function</span> GetMedian<span class="token punctuation">(</span><span class="token keyword">ByRef</span> data<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Double</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> elSize <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Double</span>
<span class="token keyword">Dim</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> index <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Dim</span> temp <span class="token keyword">As</span> <span class="token keyword">Double</span>
  <span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">To</span> elSize <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">Step</span> <span class="token number">1</span>
    <span class="token keyword">For</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token keyword">To</span> elSize <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">Step</span> <span class="token number">1</span>
      <span class="token keyword">If</span> <span class="token punctuation">(</span>data<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">></span> data<span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">Then</span>
        temp <span class="token operator">=</span> data<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        data<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">=</span> data<span class="token punctuation">(</span>j<span class="token punctuation">)</span>
        data<span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">=</span> temp
      <span class="token keyword">End</span> <span class="token keyword">If</span>
    <span class="token keyword">Next</span> j
  <span class="token keyword">Next</span> i

  <span class="token keyword">If</span> <span class="token punctuation">(</span>elSize <span class="token keyword">Mod</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">Then</span>   <span class="token comment">'偶数</span>
    index <span class="token operator">=</span> <span class="token punctuation">(</span>elSize <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    GetMedian <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> data<span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
  <span class="token keyword">Else</span> <span class="token comment">'奇数</span>
    index <span class="token operator">=</span> <span class="token punctuation">(</span>elSize <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
    GetMedian <span class="token operator">=</span> data<span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤3</strong>: 统计数据</li>
</ul>
<CodeGroup>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MedianStatistics</span><span class="token punctuation">(</span><span class="token parameter">opt</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> Data1<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>Data2<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>Data3<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>Data4<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> Data1Val<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>Data2Val<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>Data3Val<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>Data4Val<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> tempKey<span class="token operator">=</span><span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> wIndex <span class="token operator">=</span> wRow<span class="token punctuation">;</span>
  <span class="token keyword">let</span> maxRow <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>Rows<span class="token punctuation">.</span>Count<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startRow<span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>maxRow<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentKey <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>rDateCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">===</span>MaxRow<span class="token operator">||</span><span class="token punctuation">(</span>tempKey<span class="token operator">!==</span><span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> tempKey<span class="token operator">!==</span>currentKey<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>tempKey<span class="token operator">===</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
      tempKey <span class="token operator">=</span> Application<span class="token punctuation">.</span>WorksheetFunction<span class="token punctuation">.</span><span class="token function">Text</span><span class="token punctuation">(</span>tempKey<span class="token punctuation">,</span> <span class="token string">"MM/dd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>wIndex<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>wDateCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> tempKey<span class="token punctuation">;</span>

      Data1Val <span class="token operator">=</span> <span class="token function">GetMedian</span><span class="token punctuation">(</span>Data1<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
      Data2Val <span class="token operator">=</span> <span class="token function">GetMedian</span><span class="token punctuation">(</span>Data2<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
      Data3Val <span class="token operator">=</span> <span class="token function">GetMedian</span><span class="token punctuation">(</span>Data3<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
      Data4Val <span class="token operator">=</span> <span class="token function">GetMedian</span><span class="token punctuation">(</span>Data4<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
      ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>wIndex<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>wCol1<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>Data1Val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>wIndex<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>wCol2<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>Data2Val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>wIndex<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>wCol3<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>Data3Val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>wIndex<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>wCol4<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>Data4Val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      Data1<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      Data2<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      Data3<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      Data4<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

      wIndex<span class="token operator">++</span><span class="token punctuation">;</span>
      tempKey <span class="token operator">=</span><span class="token keyword">undefined</span><span class="token punctuation">;</span>
      index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>currentKey<span class="token operator">===</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>

  Data1Val <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>rCol1<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2<span class="token punctuation">;</span>
  Data2Val <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>rCol2<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2<span class="token punctuation">;</span>
  Data3Val <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>rCol3<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2<span class="token punctuation">;</span>
  Data4Val <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>rCol4<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2<span class="token punctuation">;</span>

  Data1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Data1Val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Data2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Data2Val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Data3<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Data3Val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Data4<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Data4Val<span class="token punctuation">)</span><span class="token punctuation">;</span>

  tempKey <span class="token operator">=</span> currentKey<span class="token punctuation">;</span>
  index<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="VBA">
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">sub</span> MedianStatistics<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">Dim</span> currentKey<span class="token punctuation">,</span>tempKey                      <span class="token keyword">As</span> <span class="token keyword">String</span>  
<span class="token keyword">Dim</span> maxRow<span class="token punctuation">,</span>i<span class="token punctuation">,</span>index<span class="token punctuation">,</span>capacity<span class="token punctuation">,</span>wIndex          <span class="token keyword">As</span> <span class="token keyword">Long</span>        
<span class="token keyword">Dim</span> Data1<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>Data2<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>Data3<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>Data4<span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token keyword">As</span> <span class="token keyword">Double</span>
<span class="token keyword">Dim</span> Data1Val<span class="token punctuation">,</span> Data2Val<span class="token punctuation">,</span> Data3Val<span class="token punctuation">,</span> Data4Val  <span class="token keyword">As</span> <span class="token keyword">Double</span>

capacity <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">ReDim</span> Data1<span class="token punctuation">(</span>capacity<span class="token punctuation">)</span>
<span class="token keyword">ReDim</span> Data2<span class="token punctuation">(</span>capacity<span class="token punctuation">)</span>
<span class="token keyword">ReDim</span> Data3<span class="token punctuation">(</span>capacity<span class="token punctuation">)</span>
<span class="token keyword">ReDim</span> Data4<span class="token punctuation">(</span>capacity<span class="token punctuation">)</span>

wIndex <span class="token operator">=</span> writeRow
maxRow <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>Rows<span class="token punctuation">.</span>Count <span class="token operator">+</span> <span class="token number">1</span>
index <span class="token operator">=</span> <span class="token number">0</span>
tempKey <span class="token operator">=</span> <span class="token string">""</span>

<span class="token keyword">For</span> i <span class="token operator">=</span> startRow <span class="token keyword">To</span> maxRow <span class="token keyword">Step</span> <span class="token number">1</span>

  currentKey <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> rDateCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2
  <span class="token keyword">If</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">=</span> maxRow<span class="token punctuation">)</span> <span class="token keyword">Or</span> <span class="token punctuation">(</span>tempKey <span class="token operator">&lt;</span><span class="token operator">></span> <span class="token string">""</span> <span class="token keyword">And</span> tempKey <span class="token operator">&lt;</span><span class="token operator">></span> currentKey<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">Then</span>
    <span class="token keyword">If</span> <span class="token punctuation">(</span>tempKey <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token keyword">Then</span> <span class="token keyword">GoTo</span> goNext

    tempKey <span class="token operator">=</span> Application<span class="token punctuation">.</span>WorksheetFunction<span class="token punctuation">.</span>Text<span class="token punctuation">(</span>tempKey<span class="token punctuation">,</span> <span class="token string">"MM/dd"</span><span class="token punctuation">)</span>
    Data1Val <span class="token operator">=</span> Round<span class="token punctuation">(</span>GetMedian<span class="token punctuation">(</span>Data1<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    Data2Val <span class="token operator">=</span> Round<span class="token punctuation">(</span>GetMedian<span class="token punctuation">(</span>Data2<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    Data3Val <span class="token operator">=</span> Round<span class="token punctuation">(</span>GetMedian<span class="token punctuation">(</span>Data3<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    Data4Val <span class="token operator">=</span> Round<span class="token punctuation">(</span>GetMedian<span class="token punctuation">(</span>Data4<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>wIndex<span class="token punctuation">,</span> wCol1<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> Data1Val
    ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>wIndex<span class="token punctuation">,</span> wCol2<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> Data2Val
    ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>wIndex<span class="token punctuation">,</span> wCol3<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> Data3Val
    ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>wIndex<span class="token punctuation">,</span> wCol4<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> Data4Val

    capacity <span class="token operator">=</span> <span class="token number">20</span>
    <span class="token keyword">ReDim</span> Data1<span class="token punctuation">(</span>capacity<span class="token punctuation">)</span>
    <span class="token keyword">ReDim</span> Data2<span class="token punctuation">(</span>capacity<span class="token punctuation">)</span>
    <span class="token keyword">ReDim</span> Data3<span class="token punctuation">(</span>capacity<span class="token punctuation">)</span>
    <span class="token keyword">ReDim</span> Data4<span class="token punctuation">(</span>capacity<span class="token punctuation">)</span>

    wIndex <span class="token operator">=</span> wIndex <span class="token operator">+</span> <span class="token number">1</span>
    tempKey <span class="token operator">=</span> <span class="token string">""</span>
    index <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">End</span> <span class="token keyword">If</span>
  Data1Val <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> rCol1<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2
  Data2Val <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> rCol2<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2
  Data3Val <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> rCol3<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2
  Data4Val <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> rCol4<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2

  Data1<span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">=</span> Data1Val
  Data2<span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">=</span> Data2Val
  Data3<span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">=</span> Data3Val
  Data4<span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">=</span> Data4Val

  tempKey <span class="token operator">=</span> currentKey
  index <span class="token operator">=</span> index <span class="token operator">+</span> <span class="token number">1</span>

  <span class="token keyword">If</span> <span class="token punctuation">(</span>index <span class="token keyword">Mod</span> <span class="token number">20</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">Then</span> <span class="token comment">'超出容量了</span>
    capacity <span class="token operator">=</span> capacity <span class="token operator">+</span> <span class="token number">20</span>
    <span class="token keyword">ReDim</span> Preserve Data1<span class="token punctuation">(</span>capacity<span class="token punctuation">)</span>
    <span class="token keyword">ReDim</span> Preserve Data2<span class="token punctuation">(</span>capacity<span class="token punctuation">)</span>
    <span class="token keyword">ReDim</span> Preserve Data3<span class="token punctuation">(</span>capacity<span class="token punctuation">)</span>
    <span class="token keyword">ReDim</span> Preserve Data4<span class="token punctuation">(</span>capacity<span class="token punctuation">)</span>
  <span class="token keyword">End</span> <span class="token keyword">If</span>
goNext<span class="token punctuation">:</span>
<span class="token keyword">Next</span> i
  <span class="token keyword">Exit</span> <span class="token keyword">Sub</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
