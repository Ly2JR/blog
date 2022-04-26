<template><h1 id="银行对账单" tabindex="-1"><a class="header-anchor" href="#银行对账单" aria-hidden="true">#</a> 银行对账单</h1>
<ul>
<li>资源符</li>
</ul>
<p>bankacc</p>
<ul>
<li>
<p>操作符</p>
<ul>
<li>
<p>create <Badge type="tip" text="v1" vertical="top"/></p>
</li>
<li>
<p>load <Badge type="tip" text="v2" vertical="top"/></p>
</li>
<li>
<p>edit <Badge type="tip" text="v2" vertical="top"/></p>
</li>
<li>
<p>delete <Badge type="tip" text="v2" vertical="top"/></p>
</li>
</ul>
</li>
<li>
<p>请求参数说明</p>
</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">银行对账单日期</td>
</tr>
<tr>
<td style="text-align:left">subjectcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">balancetype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">结算方式</td>
</tr>
<tr>
<td style="text-align:left">balanceno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">结算号</td>
</tr>
<tr>
<td style="text-align:left">debitorcredit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">方向</td>
</tr>
<tr>
<td style="text-align:left">money</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">金额</td>
</tr>
<tr>
<td style="text-align:left">balance</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">余额</td>
</tr>
<tr>
<td style="text-align:left">flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">对帐标志</td>
</tr>
<tr>
<td style="text-align:left">beginflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">期初标志</td>
</tr>
<tr>
<td style="text-align:left">bdelete</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否核销</td>
</tr>
</tbody>
</table>
<ul>
<li>返回参数说明</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">errcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">状态码(0:成功)</td>
</tr>
<tr>
<td style="text-align:left">errmsg</td>
<td style="text-align:left">string</td>
<td style="text-align:left">错误描述</td>
</tr>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">tradeid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<ul>
<li>示例</li>
</ul>
<CodeGroup>
<CodeGroupItem title="请求">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"bankacc"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"date"</span><span class="token operator">:</span><span class="token string">"2016-01-01"</span><span class="token punctuation">,</span>
        <span class="token property">"subjectcode"</span><span class="token operator">:</span><span class="token string">"100201"</span><span class="token punctuation">,</span>
        <span class="token property">"balancetype"</span><span class="token operator">:</span><span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"balanceno"</span><span class="token operator">:</span><span class="token string">"99"</span><span class="token punctuation">,</span>
        <span class="token property">"debitorcredit"</span><span class="token operator">:</span><span class="token string">"贷"</span><span class="token punctuation">,</span>
        <span class="token property">"money"</span><span class="token operator">:</span><span class="token string">"200"</span><span class="token punctuation">,</span>
        <span class="token property">"balance"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"flag"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"beginflag"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"bdelete"</span><span class="token operator">:</span><span class="token string">""</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="响应">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"errcode"</span><span class="token operator">:</span><span class="token string">"0"</span><span class="token punctuation">,</span>
    <span class="token property">"errmsg"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"id"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"tradeid"</span><span class="token operator">:</span><span class="token string">"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeGroupItem>
<p>:::</p>
</CodeGroup>
<details class="custom-container details"><summary>查看演示</summary>
<p><a href="/images/erp/gif/bankacc.gif">进入传送门</a></p>
</details>
</template>
