<template><h1 id="成套件" tabindex="-1"><a class="header-anchor" href="#成套件" aria-hidden="true">#</a> 成套件</h1>
<ul>
<li>资源符</li>
</ul>
<p>assembly</p>
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
<td style="text-align:left">assemblycode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">套装件编码</td>
</tr>
<tr>
<td style="text-align:left">fittingcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单件编码</td>
</tr>
<tr>
<td style="text-align:left">fittingquantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单件数量</td>
</tr>
<tr>
<td style="text-align:left">fittingnumber</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单件件数</td>
</tr>
<tr>
<td style="text-align:left">fittingcost</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单件成本</td>
</tr>
<tr>
<td style="text-align:left">fittingprice</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单件单价</td>
</tr>
<tr>
<td style="text-align:left">cAComunitCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">辅计量单位编码</td>
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
<p>:::code-group-item请求</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token property">"assembly"</span><span class="token operator">:</span><span class="token punctuation">{</span>
<span class="token property">"assemblycode"</span><span class="token operator">:</span><span class="token string">"01019002063"</span><span class="token punctuation">,</span>
<span class="token property">"fittingcode"</span><span class="token operator">:</span><span class="token string">"01019002065"</span><span class="token punctuation">,</span>
<span class="token property">"fittingquantity"</span><span class="token operator">:</span><span class="token string">"1"</span><span class="token punctuation">,</span>
<span class="token property">"fittingnumber"</span><span class="token operator">:</span><span class="token string">"1"</span><span class="token punctuation">,</span>
<span class="token property">"fittingcost"</span><span class="token operator">:</span><span class="token string">"1"</span><span class="token punctuation">,</span>
<span class="token property">"fittingprice"</span><span class="token operator">:</span><span class="token string">"1"</span><span class="token punctuation">,</span>
<span class="token property">"cAComunitCode"</span><span class="token operator">:</span><span class="token string">""</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>:::</p>
<p>:::code-group-item响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token property">"errcode"</span><span class="token operator">:</span><span class="token string">"0"</span><span class="token punctuation">,</span>
<span class="token property">"errmsg"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
<span class="token property">"id"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
<span class="token property">"tradeid"</span><span class="token operator">:</span><span class="token string">"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>:::</p>
<p>:::</p>
</CodeGroup>
<p>:::details查看演示
<a href="/images/erp/gif/assembly.gif">进入传送门</a>
:::</p>
</template>
