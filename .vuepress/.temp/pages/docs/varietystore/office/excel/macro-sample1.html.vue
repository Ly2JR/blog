<template><h1 id="考勤时间间隔统计" tabindex="-1"><a class="header-anchor" href="#考勤时间间隔统计" aria-hidden="true">#</a> 考勤时间间隔统计</h1>
<h2 id="模板说明" tabindex="-1"><a class="header-anchor" href="#模板说明" aria-hidden="true">#</a> 模板说明</h2>
<p>需要统计出所有员工中午考勤情况，比如中午11:00:00~12:00:00作为午餐时间。</p>
<p>考勤统计显示内容如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">工号</th>
<th style="text-align:left">英文名</th>
<th style="text-align:left">中文名</th>
<th style="text-align:left">部门</th>
<th style="text-align:left">职位</th>
<th style="text-align:left">卡号</th>
<th style="text-align:left">打卡时间</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 06:00:12</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 11:31:21</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 11:57:40</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 17:03:00</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 17:55:51</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 20:01:04</td>
</tr>
<tr>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
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
  <span class="token literal-property property">rCodeCol</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>            <span class="token comment">//工号列</span>
  <span class="token literal-property property">rTimeCol</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">;</span>            <span class="token comment">//打卡时间列</span>
  <span class="token literal-property property">startRow</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">;</span>            <span class="token comment">//开始计算行</span>
  <span class="token literal-property property">wCodeCol</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">;</span>            <span class="token comment">//结果工号写入列</span>
  <span class="token literal-property property">wTimeCol</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">;</span>            <span class="token comment">//结果时间写入列</span>
  <span class="token literal-property property">wValCol</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">;</span>            <span class="token comment">//结果时间差异值写入列</span>
  <span class="token literal-property property">startHour</span><span class="token operator">:</span> <span class="token string">'11:00:00'</span><span class="token punctuation">;</span>  <span class="token comment">//开始时间统计</span>
  <span class="token literal-property property">endHour</span><span class="token operator">:</span> <span class="token string">'12:00:00'</span><span class="token punctuation">;</span>    <span class="token comment">//截至时间统计</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="VBA">
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Const</span> rCodeCol        <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">1</span>        <span class="token comment">'工号列</span>
<span class="token keyword">Const</span> rTimeCol        <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">7</span>        <span class="token comment">'打卡时间列</span>
<span class="token keyword">Const</span> startRow        <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">4</span>        <span class="token comment">'开始计算行</span>
<span class="token keyword">Const</span> wCodeCol        <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">8</span>        <span class="token comment">'结果工号写入列</span>
<span class="token keyword">Const</span> wTimeCol        <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">9</span>        <span class="token comment">'结果时间写入列</span>
<span class="token keyword">Const</span> wValCol         <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">10</span>       <span class="token comment">'结果时间差异值写入列</span>
<span class="token keyword">Const</span> startHour       <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">11</span>       <span class="token comment">'开始时间统计</span>
<span class="token keyword">Const</span> endHour         <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">12</span>       <span class="token comment">'截至时间统计</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤2</strong>: 额外数据结构</li>
</ul>
<CodeGroup>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> dataRecord<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">Key</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>       
  <span class="token literal-property property">Name</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>      <span class="token comment">//姓名</span>
  <span class="token literal-property property">Min</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>       <span class="token comment">//中午考勤最早时间</span>
  <span class="token literal-property property">MinRow</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>     <span class="token comment">//中午考勤最早时间所在行</span>
  <span class="token literal-property property">Max</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>       <span class="token comment">//中午考勤最晚时间</span>
  <span class="token literal-property property">MaxRow</span><span class="token operator">:</span><span class="token number">0</span>      <span class="token comment">//中午考勤最晚时间所在行</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="VBA">
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">public</span> Key    <span class="token keyword">as</span> <span class="token keyword">String</span>
<span class="token keyword">public</span> Name   <span class="token keyword">as</span> <span class="token keyword">String</span>   <span class="token comment">'姓名</span>
<span class="token keyword">public</span> Min    <span class="token keyword">as</span> <span class="token keyword">String</span>   <span class="token comment">'中午考勤最早时间</span>
<span class="token keyword">public</span> MinRow <span class="token keyword">as</span> <span class="token keyword">Integer</span>  <span class="token comment">'中午考勤最早时间所在行</span>
<span class="token keyword">public</span> Max    <span class="token keyword">as</span> <span class="token keyword">String</span>   <span class="token comment">'中午考勤最晚时间</span>
<span class="token keyword">public</span> MaxRow <span class="token keyword">as</span> <span class="token keyword">Integer</span>  <span class="token comment">'中午考勤最晚时间所在行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤3</strong>: 辅助方法</li>
</ul>
<CodeGroup>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dateDiff</span><span class="token punctuation">(</span><span class="token parameter">datePart<span class="token punctuation">,</span>beginDate<span class="token punctuation">,</span> endDate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> sDate <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>beginDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> eDate <span class="token operator">=</span>Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>endDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> dateDiff<span class="token operator">=</span>eDate<span class="token operator">-</span>sDate<span class="token punctuation">;</span>
  <span class="token keyword">let</span> val<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">switch</span><span class="token punctuation">(</span>datePart<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">"hh"</span><span class="token operator">:</span>
      val<span class="token operator">=</span><span class="token function">parseInt</span><span class="token punctuation">(</span>dateDiff<span class="token operator">/</span><span class="token number">1000</span><span class="token operator">/</span><span class="token number">60</span><span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">"n"</span><span class="token operator">:</span>
      val<span class="token operator">=</span><span class="token function">parseInt</span><span class="token punctuation">(</span>dateDiff<span class="token operator">/</span><span class="token number">1000</span><span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">"s"</span><span class="token operator">:</span>
      val<span class="token operator">=</span><span class="token function">parseInt</span><span class="token punctuation">(</span>dateDiff<span class="token operator">/</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> obj<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Key <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤4</strong>: 统计数据</li>
</ul>
<CodeGroup>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">opt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> dic<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> maxRow <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>Rows<span class="token punctuation">.</span>Count<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> opt<span class="token punctuation">.</span>startRow<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> maxRow<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> curCode <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>rCodeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2<span class="token punctuation">;</span>

    <span class="token keyword">let</span> curDateTime <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>rTimeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2<span class="token punctuation">;</span>
    curDateTime <span class="token operator">=</span> Application<span class="token punctuation">.</span>WorksheetFunction<span class="token punctuation">.</span><span class="token function">Text</span><span class="token punctuation">(</span>curDateTime<span class="token punctuation">,</span> <span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> splitDate <span class="token operator">=</span> curDateTime<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> yyyyMMdd <span class="token operator">=</span> splitDate<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> startDate <span class="token operator">=</span> yyyyMMdd <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> startHour<span class="token punctuation">;</span>
    <span class="token keyword">let</span> endDate <span class="token operator">=</span> yyyyMMdd <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> endHour<span class="token punctuation">;</span>
    <span class="token keyword">let</span> curKey <span class="token operator">=</span> curCode <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> yyyyMMdd<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>startDate <span class="token operator">&lt;=</span> curDateTime <span class="token operator">&amp;&amp;</span> curDateTime <span class="token operator">&lt;=</span> endDate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> item <span class="token operator">=</span> <span class="token function">getItem</span><span class="token punctuation">(</span>dic<span class="token punctuation">,</span> curKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token operator">!==</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>Min <span class="token operator">></span> curDateTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          item<span class="token punctuation">.</span>Min <span class="token operator">=</span> curDateTime<span class="token punctuation">;</span>
          item<span class="token punctuation">.</span>MinRow <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>Max <span class="token operator">&lt;</span> curDateTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          item<span class="token punctuation">.</span>Max <span class="token operator">=</span> curDateTime<span class="token punctuation">;</span>
          item<span class="token punctuation">.</span>MaxRow <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> dataRecord <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        dataRecord<span class="token punctuation">.</span>Key <span class="token operator">=</span> key<span class="token punctuation">;</span>
        dataRecord<span class="token punctuation">.</span>Name <span class="token operator">=</span> curCode<span class="token punctuation">;</span>
        dataRecord<span class="token punctuation">.</span>Min <span class="token operator">=</span> curDateTime<span class="token punctuation">;</span>
        dataRecord<span class="token punctuation">.</span>MinRow <span class="token operator">=</span> i<span class="token punctuation">;</span>
        dataRecord<span class="token punctuation">.</span>Max <span class="token operator">=</span> curDateTime<span class="token punctuation">;</span>
        dataRecord<span class="token punctuation">.</span>MaxRow <span class="token operator">=</span> i<span class="token punctuation">;</span>
        dic<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dataRecord<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> dic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="VBA">
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Function</span> GetData<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">Variant</span>
<span class="token keyword">Dim</span> maxRow<span class="token punctuation">,</span>i              <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Dim</span> curCode<span class="token punctuation">,</span>curDateTime<span class="token punctuation">,</span>key   <span class="token keyword">As</span> <span class="token keyword">String</span> 
<span class="token keyword">Dim</span> dic                   <span class="token keyword">As</span> <span class="token keyword">Object</span>
<span class="token keyword">Dim</span> item                  <span class="token keyword">As</span> <span class="token keyword">Variant</span>
<span class="token keyword">Dim</span> curDate<span class="token punctuation">,</span>startDate<span class="token punctuation">,</span>endDate <span class="token keyword">As</span> <span class="token keyword">Date</span>

<span class="token keyword">Set</span> dic <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"scripting.dictionary"</span><span class="token punctuation">)</span>
maxRow <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>Rows<span class="token punctuation">.</span>Count <span class="token comment">'最大有效行</span>

<span class="token keyword">For</span> i <span class="token operator">=</span> startRow <span class="token keyword">To</span> maxRow <span class="token keyword">Step</span> <span class="token number">1</span>
  curCode <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> codeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2

  curDateTime <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> timeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2
  <span class="token keyword">If</span> curDateTime <span class="token operator">=</span> <span class="token string">""</span> <span class="token keyword">Then</span> <span class="token keyword">GoTo</span> goNext

  curDateTime <span class="token operator">=</span> Application<span class="token punctuation">.</span>WorksheetFunction<span class="token punctuation">.</span>Text<span class="token punctuation">(</span>curDateTime<span class="token punctuation">,</span> <span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span>
  curDate <span class="token operator">=</span> DateValue<span class="token punctuation">(</span>curDateTime<span class="token punctuation">)</span>

  startDate <span class="token operator">=</span> DateAdd<span class="token punctuation">(</span><span class="token string">"h"</span><span class="token punctuation">,</span> startHour<span class="token punctuation">,</span> curDate<span class="token punctuation">)</span>
  endDate <span class="token operator">=</span> DateAdd<span class="token punctuation">(</span><span class="token string">"h"</span><span class="token punctuation">,</span> endHour<span class="token punctuation">,</span> curDate<span class="token punctuation">)</span>
  curDate <span class="token operator">=</span> <span class="token keyword">CDate</span><span class="token punctuation">(</span>curDateTime<span class="token punctuation">)</span>

  key <span class="token operator">=</span> curCode <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> Format<span class="token punctuation">(</span>curDate<span class="token punctuation">,</span> <span class="token string">"yyyy-MM-dd"</span><span class="token punctuation">)</span>

  <span class="token keyword">If</span> <span class="token punctuation">(</span>startDate <span class="token operator">&lt;</span><span class="token operator">=</span> curDate <span class="token keyword">And</span> curDate <span class="token operator">&lt;</span><span class="token operator">=</span> endDate<span class="token punctuation">)</span> <span class="token keyword">Then</span>
    <span class="token keyword">If</span> <span class="token punctuation">(</span>dic<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">Then</span>
      <span class="token keyword">Dim</span> curVal <span class="token keyword">As</span> DataRecord
      <span class="token keyword">Set</span> curVal <span class="token operator">=</span> dic<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
      <span class="token keyword">If</span> <span class="token punctuation">(</span>curVal<span class="token punctuation">.</span>Min <span class="token operator">></span> curDateTime<span class="token punctuation">)</span> <span class="token keyword">Then</span>
          curVal<span class="token punctuation">.</span>Min <span class="token operator">=</span> curDateTime
          curVal<span class="token punctuation">.</span>MinRow <span class="token operator">=</span> i
      <span class="token keyword">ElseIf</span> <span class="token punctuation">(</span>curVal<span class="token punctuation">.</span>Max <span class="token operator">&lt;</span> curDateTime<span class="token punctuation">)</span> <span class="token keyword">Then</span>
          curVal<span class="token punctuation">.</span>Max <span class="token operator">=</span> curDateTime
          curVal<span class="token punctuation">.</span>MaxRow <span class="token operator">=</span> i
      <span class="token keyword">End</span> <span class="token keyword">If</span>
    <span class="token keyword">Else</span>
      <span class="token keyword">Dim</span> addData <span class="token keyword">As</span> <span class="token keyword">New</span> DataRecord
      addData<span class="token punctuation">.</span>Name <span class="token operator">=</span> key
      addData<span class="token punctuation">.</span>Min <span class="token operator">=</span> curDateTime
      addData<span class="token punctuation">.</span>MinRow <span class="token operator">=</span> i
      addData<span class="token punctuation">.</span>Max <span class="token operator">=</span> curDateTime
      addData<span class="token punctuation">.</span>MaxRow <span class="token operator">=</span> i
      dic<span class="token punctuation">.</span>Add key<span class="token punctuation">,</span> addData
      <span class="token keyword">Set</span> addData <span class="token operator">=</span> <span class="token boolean">Nothing</span>
    <span class="token keyword">End</span> <span class="token keyword">If</span>
  <span class="token keyword">End</span> <span class="token keyword">If</span>
goNext<span class="token punctuation">:</span>
<span class="token keyword">Next</span>
  GetData<span class="token operator">=</span>dic
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤5</strong>: 显示数据</li>
</ul>
<CodeGroup>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">source<span class="token punctuation">,</span>opt</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  source<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>startRow<span class="token operator">+</span>index<span class="token punctuation">,</span> wCodeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2<span class="token operator">=</span>ele<span class="token punctuation">.</span>Name<span class="token punctuation">;</span>
    ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>startRow<span class="token operator">+</span>index<span class="token punctuation">,</span> wTimeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2<span class="token operator">=</span>ele<span class="token punctuation">.</span>Min <span class="token operator">+</span> <span class="token string">"~"</span> <span class="token operator">+</span> ele<span class="token punctuation">.</span>Max<span class="token punctuation">;</span>
    ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>startRow<span class="token operator">+</span>index<span class="token punctuation">,</span> wValCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2<span class="token operator">=</span><span class="token function">dateDiff</span><span class="token punctuation">(</span><span class="token string">"n"</span><span class="token punctuation">,</span> ele<span class="token punctuation">.</span>Min<span class="token punctuation">,</span> ele<span class="token punctuation">.</span>Max<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="VBA">
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">private</span> <span class="token keyword">sub</span> setData<span class="token punctuation">(</span>source <span class="token keyword">as</span> <span class="token keyword">Variant</span><span class="token punctuation">)</span>
<span class="token keyword">Dim</span> item <span class="token keyword">as</span> <span class="token keyword">Variant</span>
i<span class="token operator">=</span>startRow
<span class="token keyword">For</span> <span class="token keyword">Each</span> item <span class="token keyword">In</span> source<span class="token punctuation">.</span>Items
  ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>Item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> wCodeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> item<span class="token punctuation">.</span>Name
  ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>Item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> wTimeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> item<span class="token punctuation">.</span>Min <span class="token operator">+</span> <span class="token string">"~"</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>Max
  ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>Item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> wValCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> DateDiff<span class="token punctuation">(</span><span class="token string">"n"</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>Min<span class="token punctuation">,</span> item<span class="token punctuation">.</span>Max<span class="token punctuation">)</span>
  i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">Next</span>
<span class="token keyword">set</span> source<span class="token operator">=</span><span class="token boolean">nothing</span>
<span class="token keyword">End</span> <span class="token keyword">sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
