<template><h1 id="存货档案" tabindex="-1"><a class="header-anchor" href="#存货档案" aria-hidden="true">#</a> 存货档案</h1>
<ul>
<li>
<p>资源符</p>
<p>inventory</p>
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
<td style="text-align:left">存货编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">存货名称</td>
</tr>
<tr>
<td style="text-align:left">sort_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">存货分类编码级次</td>
</tr>
<tr>
<td style="text-align:left">unitgroup_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">计量单位组编码</td>
</tr>
<tr>
<td style="text-align:left">main_measure</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">主计量单位编码</td>
</tr>
<tr>
<td style="text-align:left">cPlanMethod</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">计划方法</td>
</tr>
<tr>
<td style="text-align:left">cSRPolicy</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供需政策</td>
</tr>
<tr>
<td style="text-align:left">iSupplyType</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供应类型</td>
</tr>
<tr>
<td style="text-align:left">start_date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">启用日期</td>
</tr>
<tr>
<td style="text-align:left">invcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">存货编码</td>
</tr>
<tr>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left"></td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
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
    <span class="token property">"inventory"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"9901"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"存货名称"</span><span class="token punctuation">,</span>
        <span class="token property">"sort_code"</span><span class="token operator">:</span> <span class="token string">"99"</span><span class="token punctuation">,</span>
        <span class="token property">"main_measure"</span><span class="token operator">:</span> <span class="token string">"0101"</span><span class="token punctuation">,</span>
        <span class="token property">"unitgroup_code"</span><span class="token operator">:</span> <span class="token string">"01"</span><span class="token punctuation">,</span>
        <span class="token property">"cPlanMethod"</span><span class="token operator">:</span> <span class="token string">"R"</span><span class="token punctuation">,</span>
        <span class="token property">"cSRPolicy"</span><span class="token operator">:</span> <span class="token string">"PE"</span><span class="token punctuation">,</span>
        <span class="token property">"iSupplyType"</span><span class="token operator">:</span><span class="token string">"2"</span><span class="token punctuation">,</span>
        <span class="token property">"start_date"</span><span class="token operator">:</span><span class="token string">"2015-12-01"</span><span class="token punctuation">,</span>
        <span class="token property">"entry"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token property">"invcode"</span><span class="token operator">:</span> <span class="token string">"9901"</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></CodeGroupItem>
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
<p><a href="/images/erp/gif/inventory.gif">进入传送门</a></p>
</details>
</template>
