<template><h1 id="职位档案" tabindex="-1"><a class="header-anchor" href="#职位档案" aria-hidden="true">#</a> 职位档案</h1>
<ul>
<li>
<p>资源符</p>
<p>job</p>
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
<td style="text-align:left">jobcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职位编码</td>
</tr>
<tr>
<td style="text-align:left">jobname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职位名称</td>
</tr>
<tr>
<td style="text-align:left">depcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">所属部门</td>
</tr>
<tr>
<td style="text-align:left">suporior</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">直接上级</td>
</tr>
<tr>
<td style="text-align:left">builddate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">成立日期</td>
</tr>
<tr>
<td style="text-align:left">abortdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">撤销日期</td>
</tr>
<tr>
<td style="text-align:left">jobseries</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职位序列</td>
</tr>
<tr>
<td style="text-align:left">jobrank</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职位等级</td>
</tr>
<tr>
<td style="text-align:left">worksumm</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">工作概要</td>
</tr>
<tr>
<td style="text-align:left">jobrankclasscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职级分类</td>
</tr>
<tr>
<td style="text-align:left">jobrankbegin</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职级范围起</td>
</tr>
<tr>
<td style="text-align:left">jobrankend</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职级范围止</td>
</tr>
<tr>
<td style="text-align:left">jobrankend</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职等范围起</td>
</tr>
<tr>
<td style="text-align:left">jobgradeend</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职等范围止</td>
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
    <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"jobcode"</span><span class="token operator">:</span> <span class="token string">"9901"</span><span class="token punctuation">,</span>
        <span class="token property">"jobname"</span><span class="token operator">:</span> <span class="token string">"测试"</span><span class="token punctuation">,</span>
        <span class="token property">"depcode"</span><span class="token operator">:</span> <span class="token string">"99"</span><span class="token punctuation">,</span>
        <span class="token property">"suporior"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"builddate"</span><span class="token operator">:</span> <span class="token string">"2015-12-01"</span><span class="token punctuation">,</span>
        <span class="token property">"abortdate"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"jobseries"</span><span class="token operator">:</span> <span class="token string">"C"</span><span class="token punctuation">,</span>
        <span class="token property">"jobrank"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"worksumm"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"jobrankclasscode"</span><span class="token operator">:</span> <span class="token string">"01"</span><span class="token punctuation">,</span>
        <span class="token property">"jobrankbegin"</span><span class="token operator">:</span> <span class="token string">"M1"</span><span class="token punctuation">,</span>
        <span class="token property">"jobrankend"</span><span class="token operator">:</span> <span class="token string">"M1"</span><span class="token punctuation">,</span>
        <span class="token property">"jobgradebegin"</span><span class="token operator">:</span> <span class="token string">"4"</span><span class="token punctuation">,</span>
        <span class="token property">"jobgradeend"</span><span class="token operator">:</span> <span class="token string">"4"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></CodeGroupItem>
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
<p><a href="/images/erp/gif/job.gif">进入传送门</a></p>
</details>
</template>
