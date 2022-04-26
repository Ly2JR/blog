<template><h1 id="固定资产变动单" tabindex="-1"><a class="header-anchor" href="#固定资产变动单" aria-hidden="true">#</a> 固定资产变动单</h1>
<ul>
<li>
<p>资源符</p>
<p><strong>capitalvouchers</strong></p>
</li>
<li>
<p>操作符</p>
<ul>
<li>
<p><strong>create</strong> <Badge type="tip" text="v1" vertical="top" /></p>
</li>
<li>
<p><strong>load</strong> <Badge type="tip" text="v2" vertical="top" /></p>
</li>
<li>
<p><strong>edit</strong> <Badge type="tip" text="v2" vertical="top" /></p>
</li>
<li>
<p><strong>delete</strong> <Badge type="tip" text="v2" vertical="top" /></p>
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
<td style="text-align:left">vouchertype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变动单类型</td>
</tr>
<tr>
<td style="text-align:left">assetno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">资产编号</td>
</tr>
<tr>
<td style="text-align:left">voucherdata</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变动内容</td>
</tr>
<tr>
<td style="text-align:left">currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">币种名称</td>
</tr>
<tr>
<td style="text-align:left">exchangerate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">汇率</td>
</tr>
<tr>
<td style="text-align:left">memreason</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变动原因</td>
</tr>
<tr>
<td style="text-align:left">siteafter</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变动后存放地点</td>
</tr>
<tr>
<td style="text-align:left">worktotal</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">工作总量</td>
</tr>
<tr>
<td style="text-align:left">accwork</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">累计工作量</td>
</tr>
<tr>
<td style="text-align:left">workunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">工作量单位</td>
</tr>
<tr>
<td style="text-align:left">transdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变动日期</td>
</tr>
<tr>
<td style="text-align:left">transperiod</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变动期间</td>
</tr>
<tr>
<td style="text-align:left">operator</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">经手人</td>
</tr>
<tr>
<td style="text-align:left">assetno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">资产编号</td>
</tr>
<tr>
<td style="text-align:left">deptno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">部门编号</td>
</tr>
<tr>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">使用比例</td>
</tr>
<tr>
<td style="text-align:left">depreciationitemno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应折旧科目编码</td>
</tr>
<tr>
<td style="text-align:left">depreciationitemname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应折旧科目名称</td>
</tr>
<tr>
<td style="text-align:left">relativeprojectno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应项目编码</td>
</tr>
<tr>
<td style="text-align:left">relativeprojectname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应项目名称</td>
</tr>
<tr>
<td style="text-align:left">relativecItemclsId</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目大类</td>
</tr>
<tr>
<td style="text-align:left">sourceno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">sourcescale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应折旧科目编码</td>
</tr>
<tr>
<td style="text-align:left">sourcescale</td>
<td style="text-align:left">string</td>
<td style="text-align:left">sourcescale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应折旧科目编码</td>
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
    <span class="token property">"capitalvouchers"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"vouchertype"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"assetno"</span><span class="token operator">:</span> <span class="token string">"90300001"</span><span class="token punctuation">,</span>
        <span class="token property">"voucherdata"</span><span class="token operator">:</span> <span class="token string">"50000"</span><span class="token punctuation">,</span>
        <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"人民币"</span><span class="token punctuation">,</span>
        <span class="token property">"exchangerate"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"memreason"</span><span class="token operator">:</span> <span class="token string">"05年末计提"</span><span class="token punctuation">,</span>
        <span class="token property">"worktotal"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"accwork"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"transdate"</span><span class="token operator">:</span> <span class="token string">"2015-01-13"</span><span class="token punctuation">,</span>
        <span class="token property">"transperiod"</span><span class="token operator">:</span> <span class="token string">"01"</span><span class="token punctuation">,</span>
        <span class="token property">"operator"</span><span class="token operator">:</span> <span class="token string">"demo"</span><span class="token punctuation">,</span>
        <span class="token property">"entry"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"sourcescale"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"sourceno"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"sourcescale"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></CodeGroupItem>
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
<p><a href="/images/erp/gif/capitalvouchers.gif">进入传送门</a></p>
</details>
</template>
