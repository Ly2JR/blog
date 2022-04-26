<template><h1 id="凭证" tabindex="-1"><a class="header-anchor" href="#凭证" aria-hidden="true">#</a> 凭证</h1>
<ul>
<li>
<p>资源符</p>
<p><strong>voucher</strong></p>
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
<td style="text-align:left">voucher_type</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">凭证类别</td>
</tr>
<tr>
<td style="text-align:left">fiscal_year</td>
<td style="text-align:left">number</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">凭证所属的会计年度，不填写取当前年</td>
</tr>
<tr>
<td style="text-align:left">accounting_period</td>
<td style="text-align:left">number</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">所属的会计期间，不填写取当前月份</td>
</tr>
<tr>
<td style="text-align:left">voucher_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">凭证号</td>
</tr>
<tr>
<td style="text-align:left">date</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">制单日期</td>
</tr>
<tr>
<td style="text-align:left">enter</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">制单人名称</td>
</tr>
<tr>
<td style="text-align:left">cashier</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">出纳名称</td>
</tr>
<tr>
<td style="text-align:left">attachment_number</td>
<td style="text-align:left">number</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">附单据数</td>
</tr>
<tr>
<td style="text-align:left">voucher_making_system</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">外部系统类型</td>
</tr>
<tr>
<td style="text-align:left">reserve2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">外部凭证业务号</td>
</tr>
<tr>
<td style="text-align:left">account_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">abstract</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">摘要</td>
</tr>
<tr>
<td style="text-align:left">currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">币种，默认人民币</td>
</tr>
<tr>
<td style="text-align:left">unit_price</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">单价,在科目有数量核算时，填写此项</td>
</tr>
<tr>
<td style="text-align:left">exchange_rate1</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">汇率1，主辅币核算时使用，NC用户使用</td>
</tr>
<tr>
<td style="text-align:left">exchange_rate2</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">汇率2，折本汇率，U8用户使用</td>
</tr>
<tr>
<td style="text-align:left">quantity</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">借方数量,在科目有数量核算时，填写此项</td>
</tr>
<tr>
<td style="text-align:left">primary_amount</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">原币借方发生额</td>
</tr>
<tr>
<td style="text-align:left">secondary_amount</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">辅币借方发生额</td>
</tr>
<tr>
<td style="text-align:left">natural_currency</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">本币借方发生额*与本币贷方发生额不能同时为空</td>
</tr>
<tr>
<td style="text-align:left">dept_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门</td>
</tr>
<tr>
<td style="text-align:left">personnel_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">人员</td>
</tr>
<tr>
<td style="text-align:left">cust_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">客户</td>
</tr>
<tr>
<td style="text-align:left">supplier_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应商</td>
</tr>
<tr>
<td style="text-align:left">item_class</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目大类</td>
</tr>
<tr>
<td style="text-align:left">item_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目档案</td>
</tr>
<tr>
<td style="text-align:left">operator</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">业务员</td>
</tr>
<tr>
<td style="text-align:left">self_define1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段1</td>
</tr>
<tr>
<td style="text-align:left">self_define2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段2</td>
</tr>
<tr>
<td style="text-align:left">self_define3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段3</td>
</tr>
<tr>
<td style="text-align:left">self_define4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段4</td>
</tr>
<tr>
<td style="text-align:left">self_define5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段5</td>
</tr>
<tr>
<td style="text-align:left">self_define6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段6</td>
</tr>
<tr>
<td style="text-align:left">self_define7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段7</td>
</tr>
<tr>
<td style="text-align:left">self_define8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段8</td>
</tr>
<tr>
<td style="text-align:left">self_define9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段9</td>
</tr>
<tr>
<td style="text-align:left">self_define10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段10</td>
</tr>
<tr>
<td style="text-align:left">self_define11</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段11</td>
</tr>
<tr>
<td style="text-align:left">self_define12</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段12</td>
</tr>
<tr>
<td style="text-align:left">self_define13</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段13</td>
</tr>
<tr>
<td style="text-align:left">self_define14</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段14</td>
</tr>
<tr>
<td style="text-align:left">self_define15</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段15</td>
</tr>
<tr>
<td style="text-align:left">self_define16</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段16</td>
</tr>
<tr>
<td style="text-align:left">cexch_name</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">RowGuid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">行标识</td>
</tr>
<tr>
<td style="text-align:left">iYPeriod</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">年期间</td>
</tr>
<tr>
<td style="text-align:left">iyear</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">年</td>
</tr>
<tr>
<td style="text-align:left">csign</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">凭证类别字</td>
</tr>
<tr>
<td style="text-align:left">nd_s</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">数量借方</td>
</tr>
<tr>
<td style="text-align:left">md_f</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">外币借方</td>
</tr>
<tr>
<td style="text-align:left">ccode</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">md</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">借方金额</td>
</tr>
<tr>
<td style="text-align:left">cCashItem</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">现金项目</td>
</tr>
<tr>
<td style="text-align:left">cash_item</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">现金项目</td>
</tr>
<tr>
<td style="text-align:left">natural_currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">是</td>
<td style="text-align:left">本币借方发生额*与本币贷方发生额不能同时为空</td>
</tr>
<tr>
<td style="text-align:left">cdept_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门</td>
</tr>
<tr>
<td style="text-align:left">cperson_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">人员</td>
</tr>
<tr>
<td style="text-align:left">ccus_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">客户</td>
</tr>
<tr>
<td style="text-align:left">csup_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应商</td>
</tr>
<tr>
<td style="text-align:left">citem_class</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目大类</td>
</tr>
<tr>
<td style="text-align:left">citem_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目档案</td>
</tr>
<tr>
<td style="text-align:left">cDefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段1</td>
</tr>
<tr>
<td style="text-align:left">cDefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段2</td>
</tr>
<tr>
<td style="text-align:left">cDefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段3</td>
</tr>
<tr>
<td style="text-align:left">cDefine4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段4</td>
</tr>
<tr>
<td style="text-align:left">cDefine5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段5</td>
</tr>
<tr>
<td style="text-align:left">cDefine6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段6</td>
</tr>
<tr>
<td style="text-align:left">cDefine7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段7</td>
</tr>
<tr>
<td style="text-align:left">cDefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段8</td>
</tr>
<tr>
<td style="text-align:left">cDefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段9</td>
</tr>
<tr>
<td style="text-align:left">cDefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段10</td>
</tr>
<tr>
<td style="text-align:left">cDefine11</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段11</td>
</tr>
<tr>
<td style="text-align:left">cDefine12</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段12</td>
</tr>
<tr>
<td style="text-align:left">cDefine13</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段13</td>
</tr>
<tr>
<td style="text-align:left">cDefine14</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段14</td>
</tr>
<tr>
<td style="text-align:left">cDefine15</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段15</td>
</tr>
<tr>
<td style="text-align:left">cDefine16</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段16</td>
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
    <span class="token property">"voucher"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"voucher_type"</span><span class="token operator">:</span> <span class="token string">"记"</span><span class="token punctuation">,</span>
        <span class="token property">"fiscal_year"</span><span class="token operator">:</span> <span class="token string">"2015"</span><span class="token punctuation">,</span>
        <span class="token property">"accounting_period"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"voucher_id"</span><span class="token operator">:</span> <span class="token string">"999"</span><span class="token punctuation">,</span>
        <span class="token property">"attachment_number"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2015-01-31"</span><span class="token punctuation">,</span>
        <span class="token property">"enter"</span><span class="token operator">:</span> <span class="token string">"demo"</span><span class="token punctuation">,</span>
        <span class="token property">"cashier"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"checker"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"posting_date"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"posting_person"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"voucher_making_system"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"memo1"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"memo2"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"reserve1"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"reserve2"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"revokeflag"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"entry"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">"entry_id"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                <span class="token property">"account_code"</span><span class="token operator">:</span> <span class="token string">"1131"</span><span class="token punctuation">,</span>
                <span class="token property">"abstract"</span><span class="token operator">:</span> <span class="token string">"其他应收单"</span><span class="token punctuation">,</span>
                <span class="token property">"primary_debit_amount"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"natural_debit_currency"</span><span class="token operator">:</span> <span class="token string">"600"</span><span class="token punctuation">,</span>
                <span class="token property">"credit_quantity"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"primary_credit_amount"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"natural_credit_currency"</span><span class="token operator">:</span> <span class="token string">"0"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">"entry_id"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span>
                <span class="token property">"account_code"</span><span class="token operator">:</span> <span class="token string">"1001"</span><span class="token punctuation">,</span>
                <span class="token property">"abstract"</span><span class="token operator">:</span> <span class="token string">"交通费"</span><span class="token punctuation">,</span>
                <span class="token property">"exchange_rate2"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"debit_quantity"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"primary_debit_amount"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"natural_debit_currency"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"credit_quantity"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"primary_credit_amount"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"natural_credit_currency"</span><span class="token operator">:</span> <span class="token string">"400"</span><span class="token punctuation">,</span>
                <span class="token property">"cash_flow"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"cash_item"</span><span class="token operator">:</span> <span class="token string">"03"</span><span class="token punctuation">,</span>
                    <span class="token property">"natural_debit_currency"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"natural_credit_currency"</span><span class="token operator">:</span> <span class="token string">"400.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"cCashItem"</span><span class="token operator">:</span> <span class="token string">"03"</span><span class="token punctuation">,</span>
                    <span class="token property">"md"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                    <span class="token property">"mc"</span><span class="token operator">:</span> <span class="token string">"500"</span><span class="token punctuation">,</span>
                    <span class="token property">"ccode"</span><span class="token operator">:</span> <span class="token string">"1001"</span><span class="token punctuation">,</span>
                    <span class="token property">"md_f"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                    <span class="token property">"mc_f"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                    <span class="token property">"nd_s"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                    <span class="token property">"nc_s"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                    <span class="token property">"dbill_date"</span><span class="token operator">:</span> <span class="token string">"2015-01-31"</span><span class="token punctuation">,</span>
                    <span class="token property">"csign"</span><span class="token operator">:</span> <span class="token string">"记"</span><span class="token punctuation">,</span>
                    <span class="token property">"iyear"</span><span class="token operator">:</span> <span class="token string">"2015"</span><span class="token punctuation">,</span>
                    <span class="token property">"iYPeriod"</span><span class="token operator">:</span> <span class="token string">"201501"</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">"entry_id"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
                <span class="token property">"account_code"</span><span class="token operator">:</span> <span class="token string">"1001"</span><span class="token punctuation">,</span>
                <span class="token property">"abstract"</span><span class="token operator">:</span> <span class="token string">"交通费"</span><span class="token punctuation">,</span>
                <span class="token property">"exchange_rate2"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"debit_quantity"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"primary_debit_amount"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"natural_debit_currency"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"credit_quantity"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"primary_credit_amount"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"natural_credit_currency"</span><span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span>
                <span class="token property">"cash_flow"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"cash_item"</span><span class="token operator">:</span> <span class="token string">"03"</span><span class="token punctuation">,</span>
                    <span class="token property">"natural_debit_currency"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"natural_credit_currency"</span><span class="token operator">:</span> <span class="token string">"200.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"cCashItem"</span><span class="token operator">:</span> <span class="token string">"03"</span><span class="token punctuation">,</span>
                    <span class="token property">"md"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                    <span class="token property">"mc"</span><span class="token operator">:</span> <span class="token string">"100"</span><span class="token punctuation">,</span>
                    <span class="token property">"ccode"</span><span class="token operator">:</span> <span class="token string">"1001"</span><span class="token punctuation">,</span>
                    <span class="token property">"md_f"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                    <span class="token property">"mc_f"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                    <span class="token property">"nd_s"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                    <span class="token property">"nc_s"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                    <span class="token property">"dbill_date"</span><span class="token operator">:</span> <span class="token string">"2015-01-31"</span><span class="token punctuation">,</span>
                    <span class="token property">"csign"</span><span class="token operator">:</span> <span class="token string">"记"</span><span class="token punctuation">,</span>
                    <span class="token property">"iyear"</span><span class="token operator">:</span> <span class="token string">"2015"</span><span class="token punctuation">,</span>
                    <span class="token property">"iYPeriod"</span><span class="token operator">:</span> <span class="token string">"201501"</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div></CodeGroupItem>
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
<p><a href="http://47.117.141.19/gif/voucher.gif" target="_blank" rel="noopener noreferrer">进入传送门<ExternalLinkIcon/></a></p>
</details>
</template>
