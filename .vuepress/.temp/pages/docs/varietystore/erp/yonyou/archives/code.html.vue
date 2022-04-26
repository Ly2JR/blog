<template><h1 id="会计科目" tabindex="-1"><a class="header-anchor" href="#会计科目" aria-hidden="true">#</a> 会计科目</h1>
<ul>
<li>
<p>资源符</p>
<p>code</p>
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
<td style="text-align:left">type</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目类型</td>
</tr>
<tr>
<td style="text-align:left">type_ename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目类型英文名称</td>
</tr>
<tr>
<td style="text-align:left">analysis_type</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">财务分析类型</td>
</tr>
<tr>
<td style="text-align:left">analysis_type_ename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">财务分析类型英文名称</td>
</tr>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目名称</td>
</tr>
<tr>
<td style="text-align:left">ename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目英文名称</td>
</tr>
<tr>
<td style="text-align:left">grade</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目级次</td>
</tr>
<tr>
<td style="text-align:left">prop</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目性质</td>
</tr>
<tr>
<td style="text-align:left">acclist_style</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">帐页格式</td>
</tr>
<tr>
<td style="text-align:left">acclist_style_ename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">帐页格式英文名称</td>
</tr>
<tr>
<td style="text-align:left">ac_assist</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目助记码</td>
</tr>
<tr>
<td style="text-align:left">fc_name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">外币名称</td>
</tr>
<tr>
<td style="text-align:left">measure_unit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">计量单位</td>
</tr>
<tr>
<td style="text-align:left">person_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">个人往来核算</td>
</tr>
<tr>
<td style="text-align:left">cust_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客户往来核算</td>
</tr>
<tr>
<td style="text-align:left">supplier_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供应商往来核算</td>
</tr>
<tr>
<td style="text-align:left">dept_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">部门核算</td>
</tr>
<tr>
<td style="text-align:left">item_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目核算</td>
</tr>
<tr>
<td style="text-align:left">item_category</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目大类</td>
</tr>
<tr>
<td style="text-align:left">date_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">日记帐</td>
</tr>
<tr>
<td style="text-align:left">bank_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">银行帐</td>
</tr>
<tr>
<td style="text-align:left">sum_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否汇总打印</td>
</tr>
<tr>
<td style="text-align:left">end_item_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否末级科目</td>
</tr>
<tr>
<td style="text-align:left">exchange_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否参与汇兑损益计算</td>
</tr>
<tr>
<td style="text-align:left">cash_acc_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否现金科目</td>
</tr>
<tr>
<td style="text-align:left">bank_acc_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否银行科目</td>
</tr>
<tr>
<td style="text-align:left">bacc_enable_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">银行账科目是否启用</td>
</tr>
<tr>
<td style="text-align:left">bacc_balance_way</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">银行账科目对账方向</td>
</tr>
<tr>
<td style="text-align:left">bacc_begin</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">银行账科目启用日期</td>
</tr>
<tr>
<td style="text-align:left">bacc_end</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">银行账科目对账截止日期</td>
</tr>
<tr>
<td style="text-align:left">period_pl</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">期间损益</td>
</tr>
<tr>
<td style="text-align:left">acc_seal_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目是否封存</td>
</tr>
<tr>
<td style="text-align:left">ctrled_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">受控科目</td>
</tr>
<tr>
<td style="text-align:left">other_use_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">其它系统是否使用</td>
</tr>
<tr>
<td style="text-align:left">itemtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">在建工程项目科目类型</td>
</tr>
<tr>
<td style="text-align:left">proj_balance</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否工程结算科目</td>
</tr>
<tr>
<td style="text-align:left">cashitem</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否工程结算科目</td>
</tr>
<tr>
<td style="text-align:left">self_define1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段1</td>
</tr>
<tr>
<td style="text-align:left">self_define2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段2</td>
</tr>
<tr>
<td style="text-align:left">self_define3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段3</td>
</tr>
<tr>
<td style="text-align:left">self_define4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段4</td>
</tr>
<tr>
<td style="text-align:left">self_define5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段5</td>
</tr>
<tr>
<td style="text-align:left">self_define6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段6</td>
</tr>
<tr>
<td style="text-align:left">self_define7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段7</td>
</tr>
<tr>
<td style="text-align:left">self_define8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段8</td>
</tr>
<tr>
<td style="text-align:left">self_define9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段9</td>
</tr>
<tr>
<td style="text-align:left">self_define10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段10</td>
</tr>
<tr>
<td style="text-align:left">self_define11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段11</td>
</tr>
<tr>
<td style="text-align:left">self_define12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段12</td>
</tr>
<tr>
<td style="text-align:left">self_define13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段13</td>
</tr>
<tr>
<td style="text-align:left">self_define14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段14</td>
</tr>
<tr>
<td style="text-align:left">self_define15</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段15</td>
</tr>
<tr>
<td style="text-align:left">self_define16</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段16</td>
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
    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"资产"</span><span class="token punctuation">,</span>
        <span class="token property">"type_ename"</span><span class="token operator">:</span> <span class="token string">"ZC"</span><span class="token punctuation">,</span>
        <span class="token property">"analysis_type"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"analysis_type_ename"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"1000"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"现金"</span><span class="token punctuation">,</span>
        <span class="token property">"ename"</span><span class="token operator">:</span> <span class="token string">"现金eng"</span><span class="token punctuation">,</span>
        <span class="token property">"grade"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"prop"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"acclist_style"</span><span class="token operator">:</span> <span class="token string">"金额式"</span><span class="token punctuation">,</span>
        <span class="token property">"acclist_style_ename"</span><span class="token operator">:</span> <span class="token string">"JES"</span><span class="token punctuation">,</span>
        <span class="token property">"ac_assist"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"fc_name"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"measure_unit"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"person_acc"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"cust_acc"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"supplier_acc"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"dept_acc"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"item_acc"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"item_category"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"date_acc"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"bank_acc"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"sum_flag"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"end_item_flag"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"exchange_flag"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"cash_acc_flag"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"bank_acc_flag"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"bacc_enable_flag"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"bacc_balance_way"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"bacc_begin"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"bacc_end"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"period_pl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"acc_seal_flag"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"ctrled_acc"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"other_use_flag"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"itemtype"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"proj_balance"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"cashitem"</span><span class="token operator">:</span> <span class="token string">"1"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div></CodeGroupItem>
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
<p><a href="/images/erp/gif/code.gif">进入传送门</a></p>
</details>
</template>
