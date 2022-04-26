<template><h1 id="考勤迟到早退统计" tabindex="-1"><a class="header-anchor" href="#考勤迟到早退统计" aria-hidden="true">#</a> 考勤迟到早退统计</h1>
<h2 id="模板说明" tabindex="-1"><a class="header-anchor" href="#模板说明" aria-hidden="true">#</a> 模板说明</h2>
<p>需要统计出所有员工考勤打卡迟到或早退的问题，07：54-08：01早班迟到，19：54-20：01晚班迟到。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> options<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rNameCol</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rJobCol</span> <span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rTimeCol</span> <span class="token operator">:</span><span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wNameCol</span> <span class="token operator">:</span><span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wSCol</span> <span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wNameCol1</span> <span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wTimeCol</span> <span class="token operator">:</span><span class="token number">13</span><span class="token punctuation">,</span>
    <span class="token literal-property property">startRow</span> <span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token literal-property property">jobs</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"检验员"</span><span class="token punctuation">,</span> <span class="token string">"量测员"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="VBA">
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Const</span> rNameCol  <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">3</span>    <span class="token comment">'姓名读取列</span>
<span class="token keyword">Const</span> rJobCol   <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">5</span>    <span class="token comment">'职位读取列</span>
<span class="token keyword">Const</span> rTimeCol  <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">7</span>    <span class="token comment">'打卡时间读取列</span>
<span class="token keyword">Const</span> wNameCol  <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">9</span>    <span class="token comment">'姓名写入列</span>
<span class="token keyword">Const</span> wSCol     <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">10</span>   <span class="token comment">'总次数写入列</span>
<span class="token keyword">Const</span> wNameCol1 <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">12</span>
<span class="token keyword">Const</span> wTimeCol  <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">13</span>
<span class="token keyword">Const</span> startRow  <span class="token keyword">As</span> <span class="token keyword">Integer</span> <span class="token operator">=</span> <span class="token number">4</span>    <span class="token comment">'开始行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤2</strong>：辅助方法</li>
</ul>
<CodeGroup>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">EoL</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> stdTime <span class="token operator">=</span> <span class="token punctuation">[</span>Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">"2022-01-13 07:54:00"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">"2022-01-13 8:02:00"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">"2022-01-13 19:54:00"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">"2022-01-13 20:02:00"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">"2022-01-13 "</span> <span class="token operator">+</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>now <span class="token operator">></span> stdTime<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> stdTime<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">></span> now<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>now <span class="token operator">></span> stdTime<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> stdTime<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">></span> now<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">checkArray</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> obj<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Key <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="VBA">
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Function</span> EoL<span class="token punctuation">(</span><span class="token keyword">ByVal</span> time <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Integer</span>
    <span class="token keyword">Dim</span> stdTime <span class="token keyword">As</span> <span class="token keyword">Variant</span>
    stdTime <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token string">"07:54:00"</span><span class="token punctuation">,</span> <span class="token string">"8:02:00"</span><span class="token punctuation">,</span> <span class="token string">"19:54:00"</span><span class="token punctuation">,</span> <span class="token string">"20:02:00"</span><span class="token punctuation">)</span>
    <span class="token keyword">If</span> <span class="token punctuation">(</span>DateDiff<span class="token punctuation">(</span><span class="token string">"s"</span><span class="token punctuation">,</span> stdTime<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">And</span> DateDiff<span class="token punctuation">(</span><span class="token string">"s"</span><span class="token punctuation">,</span> time<span class="token punctuation">,</span> stdTime<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">Then</span>
        EoL <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">ElseIf</span> <span class="token punctuation">(</span>DateDiff<span class="token punctuation">(</span><span class="token string">"s"</span><span class="token punctuation">,</span> stdTime<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">And</span> DateDiff<span class="token punctuation">(</span><span class="token string">"s"</span><span class="token punctuation">,</span> time<span class="token punctuation">,</span> stdTime<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">Then</span>
        EoL <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">End</span> <span class="token keyword">If</span>
    EoL <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤3</strong>: 统计方法</li>
</ul>
<CodeGroup>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">opt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> dic <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> dicTemp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> maxRow <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>Rows<span class="token punctuation">.</span>Count<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> opt<span class="token punctuation">.</span>startRow<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> maxRow<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> curJob <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>rJobCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curJob <span class="token operator">==</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> hasExits <span class="token operator">=</span> <span class="token function">checkArray</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>jobs<span class="token punctuation">,</span> curJob<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hasExits<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> curName <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>rNameCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2<span class="token punctuation">;</span>

    <span class="token keyword">let</span> curTime <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>rTimeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2<span class="token punctuation">;</span>
    curTime <span class="token operator">=</span> Application<span class="token punctuation">.</span>WorksheetFunction<span class="token punctuation">.</span><span class="token function">Text</span><span class="token punctuation">(</span>curTime<span class="token punctuation">,</span> <span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curTimeValue <span class="token operator">=</span> curTime<span class="token punctuation">;</span>
    <span class="token keyword">let</span> curTimeTemp <span class="token operator">=</span> Application<span class="token punctuation">.</span>WorksheetFunction<span class="token punctuation">.</span><span class="token function">Text</span><span class="token punctuation">(</span>curTime<span class="token punctuation">,</span> <span class="token string">"yyyy-MM-dd HH:00:00"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    curTime <span class="token operator">=</span> Application<span class="token punctuation">.</span>WorksheetFunction<span class="token punctuation">.</span><span class="token function">Text</span><span class="token punctuation">(</span>curTime<span class="token punctuation">,</span> <span class="token string">"HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curKey <span class="token operator">=</span> curName <span class="token operator">+</span> <span class="token string">"|"</span> <span class="token operator">+</span> curTimeTemp<span class="token punctuation">;</span>

    <span class="token keyword">let</span> curType <span class="token operator">=</span> <span class="token function">EoL</span><span class="token punctuation">(</span>curTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curType <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> isMult <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> itemMain <span class="token operator">=</span> <span class="token function">getItem</span><span class="token punctuation">(</span>dic<span class="token punctuation">,</span> curKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>itemMain <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>itemMain<span class="token punctuation">.</span>Value <span class="token operator">&lt;=</span> curTimeValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        itemMain<span class="token punctuation">.</span>Value <span class="token operator">=</span> curTimeValue<span class="token punctuation">;</span>
        isMult <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      dic<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">Key</span><span class="token operator">:</span> curKey<span class="token punctuation">,</span>
      <span class="token literal-property property">Value</span><span class="token operator">:</span> curTimeValue
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> itemDetail <span class="token operator">=</span> <span class="token function">getItem</span><span class="token punctuation">(</span>dicTemp<span class="token punctuation">,</span> curName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>itemDetail <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isMult<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">++</span>itemDetail<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> newData <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">Key</span><span class="token operator">:</span> curName<span class="token punctuation">,</span>
      <span class="token literal-property property">Value</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      dicTemp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>dic<span class="token punctuation">,</span> dicTemp<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="VBA">
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Function</span> GetData<span class="token punctuation">(</span><span class="token keyword">ByRef</span> jobs <span class="token keyword">As</span> <span class="token keyword">Variant</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Variant</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">Dim</span> maxRow<span class="token punctuation">,</span>i<span class="token punctuation">,</span> iTemp                 <span class="token keyword">As</span> <span class="token keyword">Long</span>                 
<span class="token keyword">Dim</span> curKey<span class="token punctuation">,</span> curName<span class="token punctuation">,</span> curJob         <span class="token keyword">As</span> <span class="token keyword">String</span>               
<span class="token keyword">Dim</span> curTime<span class="token punctuation">,</span> curTimeTemp<span class="token punctuation">,</span> curTimeValue<span class="token punctuation">,</span> temp      <span class="token keyword">As</span> <span class="token keyword">String</span>    
<span class="token keyword">Dim</span> curType             <span class="token keyword">As</span> <span class="token keyword">Integer</span>
<span class="token keyword">Dim</span> isMult              <span class="token keyword">As</span> <span class="token keyword">Boolean</span>
<span class="token keyword">Dim</span> data<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> matchJob   <span class="token keyword">As</span> <span class="token keyword">Variant</span>
maxRow <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>Rows<span class="token punctuation">.</span>Count    <span class="token comment">'最大有效行</span>

<span class="token keyword">Set</span> data<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"scripting.dictionary"</span><span class="token punctuation">)</span>
<span class="token keyword">Set</span> data<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"scripting.dictionary"</span><span class="token punctuation">)</span>

<span class="token keyword">For</span> i <span class="token operator">=</span> startRow <span class="token keyword">To</span> maxRow <span class="token keyword">Step</span> <span class="token number">1</span>
  curJob <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> rJobCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2
  <span class="token keyword">If</span> <span class="token punctuation">(</span>curJob <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token keyword">Then</span> <span class="token keyword">GoTo</span> goNext
  matchJob <span class="token operator">=</span> Filter<span class="token punctuation">(</span>jobs<span class="token punctuation">,</span> curJob<span class="token punctuation">)</span>
  <span class="token keyword">If</span> UBound<span class="token punctuation">(</span>matchJob<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">Then</span> <span class="token keyword">GoTo</span> goRun <span class="token keyword">Else</span> <span class="token keyword">GoTo</span> goNext
goRun<span class="token punctuation">:</span>
  curName <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> rNameCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2
  curTime <span class="token operator">=</span> ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> rTimeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2

  curTime <span class="token operator">=</span> Application<span class="token punctuation">.</span>WorksheetFunction<span class="token punctuation">.</span>Text<span class="token punctuation">(</span>curTime<span class="token punctuation">,</span> <span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span>
  curTimeValue <span class="token operator">=</span> curTime
  curTimeTemp <span class="token operator">=</span> Format<span class="token punctuation">(</span>curTime<span class="token punctuation">,</span> <span class="token string">"yyyy-MM-dd HH:00:00"</span><span class="token punctuation">)</span>
  curTime <span class="token operator">=</span> Application<span class="token punctuation">.</span>WorksheetFunction<span class="token punctuation">.</span>Text<span class="token punctuation">(</span>curTime<span class="token punctuation">,</span> <span class="token string">"HH:mm:ss"</span><span class="token punctuation">)</span>
  curKey <span class="token operator">=</span> curName <span class="token operator">+</span> <span class="token string">"|"</span> <span class="token operator">+</span> curTimeTemp

  curType <span class="token operator">=</span> EoL<span class="token punctuation">(</span>curTime<span class="token punctuation">)</span>
  <span class="token keyword">If</span> curType <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">Then</span> <span class="token keyword">GoTo</span> goNext

  isMult <span class="token operator">=</span> <span class="token boolean">False</span>
  <span class="token keyword">If</span> <span class="token punctuation">(</span>data<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span>curKey<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">Then</span>
    temp <span class="token operator">=</span> data<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">(</span>curKey<span class="token punctuation">)</span>
    <span class="token keyword">If</span> <span class="token punctuation">(</span>temp <span class="token operator">&lt;</span><span class="token operator">=</span> curTimeValue<span class="token punctuation">)</span> <span class="token keyword">Then</span>
      data<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">(</span>curKey<span class="token punctuation">)</span> <span class="token operator">=</span> curTimeValue
      isMult <span class="token operator">=</span> <span class="token boolean">True</span>
    <span class="token keyword">End</span> <span class="token keyword">If</span>
  <span class="token keyword">Else</span>
    data<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Add curKey<span class="token punctuation">,</span> curTimeValue
  <span class="token keyword">End</span> <span class="token keyword">If</span>

  <span class="token keyword">If</span> <span class="token punctuation">(</span>data<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span>curName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">Then</span>
    <span class="token keyword">If</span> <span class="token keyword">Not</span> isMult <span class="token keyword">Then</span>
      data<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span>curName<span class="token punctuation">)</span> <span class="token operator">=</span> data<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span>curName<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">End</span> <span class="token keyword">If</span>
  <span class="token keyword">Else</span>
    data<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Add curName<span class="token punctuation">,</span> <span class="token number">1</span>
 <span class="token keyword">End</span> <span class="token keyword">If</span>
goNext<span class="token punctuation">:</span>
<span class="token keyword">Next</span> i

GetData <span class="token operator">=</span> data
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤4</strong>: 结果显示</li>
</ul>
<CodeGroup>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">setData</span><span class="token punctuation">(</span><span class="token parameter">source<span class="token punctuation">,</span>opt</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>startRow <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>wNameCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> <span class="token string">"姓名"</span><span class="token punctuation">;</span>
  ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>startRow <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>wSCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> <span class="token string">"异常总次数"</span><span class="token punctuation">;</span>
  ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>startRow <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>wNameCol1<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> <span class="token string">"姓名"</span><span class="token punctuation">;</span>
  ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>startRow <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>wTimeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> <span class="token string">"异常时间"</span><span class="token punctuation">;</span>

  source<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>startRow<span class="token operator">+</span>index<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>wNameCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> ele<span class="token punctuation">.</span>Key<span class="token punctuation">;</span>
    ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>startRow<span class="token operator">+</span>index<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>wSCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> ele<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  source<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> t <span class="token operator">=</span> ele<span class="token punctuation">.</span>Key<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"|"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>startRow<span class="token operator">+</span>index<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>wNameCol1<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> t<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span><span class="token function">Item</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>startRow<span class="token operator">+</span>index<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>wTimeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> ele<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="VBA">
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> SetData<span class="token punctuation">(</span><span class="token keyword">ByRef</span> source <span class="token keyword">As</span> <span class="token keyword">Variant</span><span class="token punctuation">)</span>
<span class="token keyword">Dim</span> item<span class="token punctuation">,</span>t <span class="token keyword">As</span> <span class="token keyword">Variant</span>
<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Long</span>
i <span class="token operator">=</span> startRow

ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> wNameCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> <span class="token string">"姓名"</span>
ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> wSCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> <span class="token string">"异常总次数"</span>
ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> wNameCol1<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> <span class="token string">"姓名"</span>
ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> wTimeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> <span class="token string">"异常时间"</span>

<span class="token keyword">For</span> <span class="token keyword">Each</span> item <span class="token keyword">In</span> source<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>keys
  ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> wNameCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> item
  ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> wSCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> source<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
  i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">Next</span>
i <span class="token operator">=</span> startRow
<span class="token keyword">For</span> <span class="token keyword">Each</span> item <span class="token keyword">In</span> source<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>keys
  t <span class="token operator">=</span> Split<span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token string">"|"</span><span class="token punctuation">)</span>
  ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> wNameCol1<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> t<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  ActiveSheet<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>item<span class="token punctuation">(</span>i<span class="token punctuation">,</span> wTimeCol<span class="token punctuation">)</span><span class="token punctuation">.</span>Value2 <span class="token operator">=</span> source<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
  i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
