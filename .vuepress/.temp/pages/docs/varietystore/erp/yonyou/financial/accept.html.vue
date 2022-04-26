<template><h1 id="收款单" tabindex="-1"><a class="header-anchor" href="#收款单" aria-hidden="true">#</a> 收款单</h1>
<ul>
<li>
<p>资源符</p>
<p><strong>accept</strong></p>
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
<td style="text-align:left">单据类型</td>
</tr>
<tr>
<td style="text-align:left">vouchdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单据日期</td>
</tr>
<tr>
<td style="text-align:left">period</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">期间</td>
</tr>
<tr>
<td style="text-align:left">customercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客商编码</td>
</tr>
<tr>
<td style="text-align:left">departmentcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">personcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职员编码</td>
</tr>
<tr>
<td style="text-align:left">itemclasscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目大类编号</td>
</tr>
<tr>
<td style="text-align:left">itemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目编码</td>
</tr>
<tr>
<td style="text-align:left">itemname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目名称</td>
</tr>
<tr>
<td style="text-align:left">orderid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">订单号</td>
</tr>
<tr>
<td style="text-align:left">balancecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">结算方式</td>
</tr>
<tr>
<td style="text-align:left">notecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">应收应付票据编号</td>
</tr>
<tr>
<td style="text-align:left">digest</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">摘要</td>
</tr>
<tr>
<td style="text-align:left">oppositebankcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">银行帐号</td>
</tr>
<tr>
<td style="text-align:left">foreigncurrency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">currencyrate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">汇率</td>
</tr>
<tr>
<td style="text-align:left">amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">本币金额</td>
</tr>
<tr>
<td style="text-align:left">originalamount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">原币金额</td>
</tr>
<tr>
<td style="text-align:left">operator</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">录入人</td>
</tr>
<tr>
<td style="text-align:left">balanceitemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">应收应付标志</td>
</tr>
<tr>
<td style="text-align:left">sitemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">结算项目</td>
</tr>
<tr>
<td style="text-align:left">oppositebankname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">对方单位银行名称</td>
</tr>
<tr>
<td style="text-align:left">bankname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">本单位银行名称</td>
</tr>
<tr>
<td style="text-align:left">bankaccount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">本单位银行账号</td>
</tr>
<tr>
<td style="text-align:left">define1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项1</td>
</tr>
<tr>
<td style="text-align:left">define2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项2</td>
</tr>
<tr>
<td style="text-align:left">define3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项3</td>
</tr>
<tr>
<td style="text-align:left">define4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项4</td>
</tr>
<tr>
<td style="text-align:left">define5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项5</td>
</tr>
<tr>
<td style="text-align:left">define6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项6</td>
</tr>
<tr>
<td style="text-align:left">define7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项7</td>
</tr>
<tr>
<td style="text-align:left">define8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项8</td>
</tr>
<tr>
<td style="text-align:left">define9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项9</td>
</tr>
<tr>
<td style="text-align:left">define10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项10</td>
</tr>
<tr>
<td style="text-align:left">define11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项11</td>
</tr>
<tr>
<td style="text-align:left">define12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项12</td>
</tr>
<tr>
<td style="text-align:left">define13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项13</td>
</tr>
<tr>
<td style="text-align:left">define14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项14</td>
</tr>
<tr>
<td style="text-align:left">define15</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项15</td>
</tr>
<tr>
<td style="text-align:left">define16</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">表头自定义项16</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">款项类型</td>
</tr>
<tr>
<td style="text-align:left">customercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">客商编码</td>
</tr>
<tr>
<td style="text-align:left">originalamount</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">原币金额</td>
</tr>
<tr>
<td style="text-align:left">amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">本币金额</td>
</tr>
<tr>
<td style="text-align:left">itemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目</td>
</tr>
<tr>
<td style="text-align:left">projectclass</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目大类编号</td>
</tr>
<tr>
<td style="text-align:left">project</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目编号</td>
</tr>
<tr>
<td style="text-align:left">departmentcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">personcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">职员编码</td>
</tr>
<tr>
<td style="text-align:left">orderid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">订单号</td>
</tr>
<tr>
<td style="text-align:left">itemname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目名称</td>
</tr>
<tr>
<td style="text-align:left">ccontype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">合同类型</td>
</tr>
<tr>
<td style="text-align:left">cconid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">合同号</td>
</tr>
<tr>
<td style="text-align:left">iamt_s</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">数量</td>
</tr>
<tr>
<td style="text-align:left">iramt_s</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">剩余数量</td>
</tr>
<tr>
<td style="text-align:left">define22</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项1</td>
</tr>
<tr>
<td style="text-align:left">define23</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项2</td>
</tr>
<tr>
<td style="text-align:left">define24</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项3</td>
</tr>
<tr>
<td style="text-align:left">define25</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项4</td>
</tr>
<tr>
<td style="text-align:left">define26</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项5</td>
</tr>
<tr>
<td style="text-align:left">define27</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项6</td>
</tr>
<tr>
<td style="text-align:left">define28</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项7</td>
</tr>
<tr>
<td style="text-align:left">define29</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项8</td>
</tr>
<tr>
<td style="text-align:left">define30</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项9</td>
</tr>
<tr>
<td style="text-align:left">define31</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项10</td>
</tr>
<tr>
<td style="text-align:left">define32</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项11</td>
</tr>
<tr>
<td style="text-align:left">define33</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项12</td>
</tr>
<tr>
<td style="text-align:left">define34</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项13</td>
</tr>
<tr>
<td style="text-align:left">define35</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项14</td>
</tr>
<tr>
<td style="text-align:left">define36</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项15</td>
</tr>
<tr>
<td style="text-align:left">define37</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项16</td>
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
    <span class="token property">"accept"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"vouchtype"</span><span class="token operator">:</span> <span class="token string">"48"</span><span class="token punctuation">,</span>
        <span class="token property">"vouchdate"</span><span class="token operator">:</span> <span class="token string">"2015-01-01"</span><span class="token punctuation">,</span>
        <span class="token property">"period"</span><span class="token operator">:</span> <span class="token string">"01"</span><span class="token punctuation">,</span>
        <span class="token property">"customercode"</span><span class="token operator">:</span> <span class="token string">"011501"</span><span class="token punctuation">,</span>
        <span class="token property">"balancecode"</span><span class="token operator">:</span> <span class="token string">"201"</span><span class="token punctuation">,</span>
        <span class="token property">"oppositebankcode"</span><span class="token operator">:</span> <span class="token string">"9879879656"</span><span class="token punctuation">,</span>
        <span class="token property">"foreigncurrency"</span><span class="token operator">:</span> <span class="token string">"人民币"</span><span class="token punctuation">,</span>
        <span class="token property">"currencyrate"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"2500"</span><span class="token punctuation">,</span>
        <span class="token property">"originalamount"</span><span class="token operator">:</span> <span class="token string">"2500"</span><span class="token punctuation">,</span>
        <span class="token property">"operator"</span><span class="token operator">:</span> <span class="token string">"demo"</span><span class="token punctuation">,</span>
        <span class="token property">"flag"</span><span class="token operator">:</span> <span class="token string">"AR"</span><span class="token punctuation">,</span>
        <span class="token property">"oppositebankname"</span><span class="token operator">:</span> <span class="token string">"光大银行"</span><span class="token punctuation">,</span>
        <span class="token property">"entry"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
            <span class="token property">"customercode"</span><span class="token operator">:</span> <span class="token string">"011501"</span><span class="token punctuation">,</span>
            <span class="token property">"originalamount"</span><span class="token operator">:</span> <span class="token string">"2500"</span><span class="token punctuation">,</span>
            <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"2500"</span><span class="token punctuation">,</span>
            <span class="token property">"iamt_s"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
            <span class="token property">"iramt_s"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
            <span class="token property">"define22"</span><span class="token operator">:</span> <span class="token string">"123"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></CodeGroupItem>
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
<p><a href="http://47.117.141.19/gif/accept.gif" target="_blank" rel="noopener noreferrer">进入传送门<ExternalLinkIcon/></a></p>
</details>
</template>
