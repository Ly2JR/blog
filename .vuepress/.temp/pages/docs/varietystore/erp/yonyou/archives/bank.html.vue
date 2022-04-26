<template><h1 id="本单位开户银行" tabindex="-1"><a class="header-anchor" href="#本单位开户银行" aria-hidden="true">#</a> 本单位开户银行</h1>
<ul>
<li>
<p>资源符</p>
<p>bank</p>
</li>
<li>
<p>操作符</p>
<ul>
<li>
<p>create <Badge type="tip" text="v1" vertical="top" /></p>
</li>
<li>
<p>load <Badge type="tip" text="v2" vertical="top" /></p>
</li>
<li>
<p>edit <Badge type="tip" text="v2" vertical="top" /></p>
</li>
<li>
<p>delete <Badge type="tip" text="v2" vertical="top" /></p>
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
<td style="text-align:left">银行编号</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">开户银行名称</td>
</tr>
<tr>
<td style="text-align:left">account</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">银行帐号</td>
</tr>
<tr>
<td style="text-align:left">flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">暂封标志</td>
</tr>
<tr>
<td style="text-align:left">cbankcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">所属银行</td>
</tr>
<tr>
<td style="text-align:left">caccname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">账户名称</td>
</tr>
<tr>
<td style="text-align:left">copenaccaddr</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">开户银行地址</td>
</tr>
<tr>
<td style="text-align:left">cprovincename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">省/自治区码</td>
</tr>
<tr>
<td style="text-align:left">ccountyname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">市/县</td>
</tr>
<tr>
<td style="text-align:left">ccurrencyname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">dopenaccdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">开户日期</td>
</tr>
<tr>
<td style="text-align:left">ccustomerno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客户编号</td>
</tr>
<tr>
<td style="text-align:left">corgno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">机构号</td>
</tr>
<tr>
<td style="text-align:left">cunionbankno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">联行号</td>
</tr>
<tr>
<td style="text-align:left">isignflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">签约标志</td>
</tr>
<tr>
<td style="text-align:left">bpwdmng</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">进行密码管理</td>
</tr>
</tbody>
</table>
<p>-返回参数说明</p>
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
    <span class="token property">"bank"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"07"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"中国南京银行"</span><span class="token punctuation">,</span>
        <span class="token property">"account"</span><span class="token operator">:</span> <span class="token string">"622202210200"</span><span class="token punctuation">,</span>
        <span class="token property">"flag"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"cbankcode"</span><span class="token operator">:</span> <span class="token string">"01"</span><span class="token punctuation">,</span>
        <span class="token property">"caccname"</span><span class="token operator">:</span> <span class="token string">"环球电脑公司"</span><span class="token punctuation">,</span>
        <span class="token property">"cprovincename"</span><span class="token operator">:</span> <span class="token string">"江苏"</span><span class="token punctuation">,</span>
        <span class="token property">"ccountyname"</span><span class="token operator">:</span> <span class="token string">"南京"</span><span class="token punctuation">,</span>
        <span class="token property">"ccurrencyname"</span><span class="token operator">:</span> <span class="token string">"人民币"</span><span class="token punctuation">,</span>
        <span class="token property">"dopenaccdate"</span><span class="token operator">:</span> <span class="token string">"2015-12-01"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="响应">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"errcode"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
    <span class="token property">"errmsg"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"tradeid"</span><span class="token operator">:</span> <span class="token string">"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeGroupItem>
<p>:::</p>
</CodeGroup>
<details class="custom-container details"><summary>查看演示</summary>
<p><a href="/images/erp/gif/bank.gif">进入传送门</a></p>
</details>
</template>
