<template><h1 id="结算方式" tabindex="-1"><a class="header-anchor" href="#结算方式" aria-hidden="true">#</a> 结算方式</h1>
<ul>
<li>资源符</li>
</ul>
<p>balancetype</p>
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
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">结算方式编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">结算方式名称</td>
</tr>
<tr>
<td style="text-align:left">flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否票据管理</td>
</tr>
<tr>
<td style="text-align:left">code_rank</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">编码级次</td>
</tr>
<tr>
<td style="text-align:left">end_rank_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否末级</td>
</tr>
<tr>
<td style="text-align:left">issbilltype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应票据类型</td>
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
    <span class="token property">"balancetype"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span><span class="token string">"601"</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"花呗"</span><span class="token punctuation">,</span>
    <span class="token property">"flag"</span><span class="token operator">:</span><span class="token string">"0"</span><span class="token punctuation">,</span>
    <span class="token property">"code_rank"</span><span class="token operator">:</span><span class="token string">"2"</span><span class="token punctuation">,</span>
    <span class="token property">"end_rank_flag"</span><span class="token operator">:</span><span class="token string">"1"</span><span class="token punctuation">,</span>
    <span class="token property">"issbilltype"</span><span class="token operator">:</span><span class="token string">"3"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></CodeGroupItem>
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
<p><a href="/images/erp/gif/balancetype.gif">进入传送门</a></p>
</details>
</template>
