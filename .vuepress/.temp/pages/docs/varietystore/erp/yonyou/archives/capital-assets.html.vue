<template><h1 id="固定资产卡片" tabindex="-1"><a class="header-anchor" href="#固定资产卡片" aria-hidden="true">#</a> 固定资产卡片</h1>
<ul>
<li>
<p>资源符</p>
<p>capitalasserts</p>
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
<td style="text-align:left">assetno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">资产编号</td>
</tr>
<tr>
<td style="text-align:left">assetname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">固定资产名称</td>
</tr>
<tr>
<td style="text-align:left">typeno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">类别编码</td>
</tr>
<tr>
<td style="text-align:left">originalvalue</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">原值</td>
</tr>
<tr>
<td style="text-align:left">startusedate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">开始使用日期</td>
</tr>
<tr>
<td style="text-align:left">currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">币种名称</td>
</tr>
<tr>
<td style="text-align:left">foreigncurrencynumber</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">外币原值</td>
</tr>
<tr>
<td style="text-align:left">exchangerate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">汇率</td>
</tr>
<tr>
<td style="text-align:left">worktotal</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">工作总量</td>
</tr>
<tr>
<td style="text-align:left">workunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">工作量单位</td>
</tr>
<tr>
<td style="text-align:left">accwork</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">累计工作量</td>
</tr>
<tr>
<td style="text-align:left">accdepr</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">累计折旧</td>
</tr>
<tr>
<td style="text-align:left">usedmonths</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">已使用月份</td>
</tr>
<tr>
<td style="text-align:left">accountaddmannerno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">增加方式编号</td>
</tr>
<tr>
<td style="text-align:left">status</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">使用状况编号</td>
</tr>
<tr>
<td style="text-align:left">depreciationmanner</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">折旧方法编号</td>
</tr>
<tr>
<td style="text-align:left">life</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">可使用月份</td>
</tr>
<tr>
<td style="text-align:left">netleftvalue</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">净残值</td>
</tr>
<tr>
<td style="text-align:left">netleftvaluerate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">净残值率</td>
</tr>
<tr>
<td style="text-align:left">style</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">规格型号</td>
</tr>
<tr>
<td style="text-align:left">buildingarea</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">建筑面积</td>
</tr>
<tr>
<td style="text-align:left">buildingquantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">间(座)数</td>
</tr>
<tr>
<td style="text-align:left">machinequantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">电机数量</td>
</tr>
<tr>
<td style="text-align:left">machinewatt</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">电机功率</td>
</tr>
<tr>
<td style="text-align:left">reservesite</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">存放地点</td>
</tr>
<tr>
<td style="text-align:left">decvalue</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">减值准备金额</td>
</tr>
<tr>
<td style="text-align:left">sgroupnum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">资产组编码</td>
</tr>
<tr>
<td style="text-align:left">addtax</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">增值税</td>
</tr>
<tr>
<td style="text-align:left">skeeper</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">保管人</td>
</tr>
<tr>
<td style="text-align:left">cVenCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供应商编码</td>
</tr>
<tr>
<td style="text-align:left">cVenName</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供应商名称</td>
</tr>
<tr>
<td style="text-align:left">dPurDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">采购日期</td>
</tr>
<tr>
<td style="text-align:left">sSeriesNum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">序列号</td>
</tr>
<tr>
<td style="text-align:left">sCommodityCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">商品码</td>
</tr>
<tr>
<td style="text-align:left">assetno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">资产编号</td>
</tr>
<tr>
<td style="text-align:left">deptno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">部门编号</td>
</tr>
<tr>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">使用比例</td>
</tr>
<tr>
<td style="text-align:left">depreciationitemno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应折旧科目编码</td>
</tr>
<tr>
<td style="text-align:left">depreciationitemname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应折旧科目名称</td>
</tr>
<tr>
<td style="text-align:left">relativeprojectno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应项目编码</td>
</tr>
<tr>
<td style="text-align:left">relativeprojectname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应项目名称</td>
</tr>
<tr>
<td style="text-align:left">relativecItemclsId</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目大类</td>
</tr>
<tr>
<td style="text-align:left">sourceNum</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">资金构成编码</td>
</tr>
<tr>
<td style="text-align:left">sourceScale</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">资金构成使用比例</td>
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
    <span class="token property">"capitalasserts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"assetno"</span><span class="token operator">:</span> <span class="token string">"01200009"</span><span class="token punctuation">,</span>
        <span class="token property">"assetname"</span><span class="token operator">:</span> <span class="token string">"电脑"</span><span class="token punctuation">,</span>
        <span class="token property">"typeno"</span><span class="token operator">:</span> <span class="token string">"03"</span><span class="token punctuation">,</span>
        <span class="token property">"originalvalue"</span><span class="token operator">:</span> <span class="token string">"3000000"</span><span class="token punctuation">,</span>
        <span class="token property">"startusedate"</span><span class="token operator">:</span> <span class="token string">"2014-01-01"</span><span class="token punctuation">,</span>
        <span class="token property">"currency"</span><span class="token operator">:</span> <span class="token string">"人民币"</span><span class="token punctuation">,</span>
        <span class="token property">"exchangerate"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"usedmonths"</span><span class="token operator">:</span> <span class="token string">"12"</span><span class="token punctuation">,</span>
        <span class="token property">"accountaddmannerno"</span><span class="token operator">:</span> <span class="token string">"102"</span><span class="token punctuation">,</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"1001"</span><span class="token punctuation">,</span>
        <span class="token property">"depreciationmanner"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"life"</span><span class="token operator">:</span> <span class="token string">"20"</span><span class="token punctuation">,</span>
        <span class="token property">"reservesite"</span><span class="token operator">:</span> <span class="token string">"一号厂区"</span><span class="token punctuation">,</span>
        <span class="token property">"skeeper"</span><span class="token operator">:</span> <span class="token string">"demo"</span><span class="token punctuation">,</span>
        <span class="token property">"entry"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"assetno"</span><span class="token operator">:</span> <span class="token string">"01200009"</span><span class="token punctuation">,</span>
            <span class="token property">"deptno"</span><span class="token operator">:</span> <span class="token string">"01"</span><span class="token punctuation">,</span>
            <span class="token property">"deptscale"</span><span class="token operator">:</span> <span class="token string">"1"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></CodeGroupItem>
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
<p><a href="/images/erp/gif/capitalasserts.gif">进入传送门</a></p>
</details>
</template>
