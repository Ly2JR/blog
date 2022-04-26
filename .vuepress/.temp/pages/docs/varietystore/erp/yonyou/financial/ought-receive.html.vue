<template><h1 id="应收单" tabindex="-1"><a class="header-anchor" href="#应收单" aria-hidden="true">#</a> 应收单</h1>
<ul>
<li>
<p>资源符</p>
<p><strong>oughreceive</strong></p>
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
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">应收付单据号</td>
</tr>
<tr>
<td style="text-align:left">date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单据日期</td>
</tr>
<tr>
<td style="text-align:left">cust_vendor_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客商编号</td>
</tr>
<tr>
<td style="text-align:left">deptcode</td>
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
<td style="text-align:left">item_classcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目大类编码</td>
</tr>
<tr>
<td style="text-align:left">item_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目编码</td>
</tr>
<tr>
<td style="text-align:left">digest</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">摘要</td>
</tr>
<tr>
<td style="text-align:left">subjectcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">currency_name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">currency_rate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">汇率</td>
</tr>
<tr>
<td style="text-align:left">bdebitcredit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">借贷方向</td>
</tr>
<tr>
<td style="text-align:left">natamount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">本币金额</td>
</tr>
<tr>
<td style="text-align:left">amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">原币金额</td>
</tr>
<tr>
<td style="text-align:left">paycondition_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">付款条件</td>
</tr>
<tr>
<td style="text-align:left">operator</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">操作员姓名</td>
</tr>
<tr>
<td style="text-align:left">flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">标志</td>
</tr>
<tr>
<td style="text-align:left">quantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">数量</td>
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
<td style="text-align:left">cust_vendor_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">客商编号</td>
</tr>
<tr>
<td style="text-align:left">deptcode</td>
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
<td style="text-align:left">item_classcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目大类编码</td>
</tr>
<tr>
<td style="text-align:left">item_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目编码</td>
</tr>
<tr>
<td style="text-align:left">digest</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">摘要</td>
</tr>
<tr>
<td style="text-align:left">subjectcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">currency_name</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">currency_rate</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">汇率</td>
</tr>
<tr>
<td style="text-align:left">bdebitcredit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">借贷方向</td>
</tr>
<tr>
<td style="text-align:left">natamoun</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">本币金额</td>
</tr>
<tr>
<td style="text-align:left">amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">原币金额</td>
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
    <span class="token property">"oughtreceive"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"vouchertype"</span><span class="token operator">:</span> <span class="token string">"R0"</span><span class="token punctuation">,</span>
        <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2015-01-01"</span><span class="token punctuation">,</span>
        <span class="token property">"cust_vendor_code"</span><span class="token operator">:</span> <span class="token string">"011501"</span><span class="token punctuation">,</span>
        <span class="token property">"deptcode"</span><span class="token operator">:</span> <span class="token string">"0301"</span><span class="token punctuation">,</span>
        <span class="token property">"personcode"</span><span class="token operator">:</span> <span class="token string">"00024"</span><span class="token punctuation">,</span>
        <span class="token property">"subjectcode"</span><span class="token operator">:</span> <span class="token string">"122101"</span><span class="token punctuation">,</span>
        <span class="token property">"currency_name"</span><span class="token operator">:</span> <span class="token string">"人民币"</span><span class="token punctuation">,</span>
        <span class="token property">"currency_rate"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"bdebitcredit"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"natamount"</span><span class="token operator">:</span> <span class="token string">"500"</span><span class="token punctuation">,</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"500"</span><span class="token punctuation">,</span>
        <span class="token property">"paycondition_code"</span><span class="token operator">:</span> <span class="token string">"01"</span><span class="token punctuation">,</span>
        <span class="token property">"operator"</span><span class="token operator">:</span> <span class="token string">"demo"</span><span class="token punctuation">,</span>
        <span class="token property">"flag"</span><span class="token operator">:</span> <span class="token string">"AR"</span><span class="token punctuation">,</span>
        <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"entry"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"deptcode"</span><span class="token operator">:</span> <span class="token string">"0301"</span><span class="token punctuation">,</span>
            <span class="token property">"personcode"</span><span class="token operator">:</span> <span class="token string">"00024"</span><span class="token punctuation">,</span>
            <span class="token property">"currency_name"</span><span class="token operator">:</span> <span class="token string">"人民币"</span><span class="token punctuation">,</span>
            <span class="token property">"currency_rate"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
            <span class="token property">"bdebitcredit"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
            <span class="token property">"natamount"</span><span class="token operator">:</span> <span class="token string">"500"</span><span class="token punctuation">,</span>
            <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"500"</span><span class="token punctuation">,</span>
            <span class="token property">"define22"</span><span class="token operator">:</span> <span class="token string">"123"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></CodeGroupItem>
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
<p><a href="http://47.117.141.19/gif/oughreceive.gif" target="_blank" rel="noopener noreferrer">进入传送门<ExternalLinkIcon/></a></p>
</details>
</template>
