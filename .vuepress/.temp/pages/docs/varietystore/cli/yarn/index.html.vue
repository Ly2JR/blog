<template><h1 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h1>
<h2 id="安装-yarn" tabindex="-1"><a class="header-anchor" href="#安装-yarn" aria-hidden="true">#</a> 安装 yarn</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">npm</span> <span class="token function">install</span> -g <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="升级-yarn" tabindex="-1"><a class="header-anchor" href="#升级-yarn" aria-hidden="true">#</a> 升级 yarn</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">yarn</span> <span class="token builtin class-name">set</span> version latest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<h3 id="yarn-install" tabindex="-1"><a class="header-anchor" href="#yarn-install" aria-hidden="true">#</a> yarn install</h3>
<p>安装项目依赖</p>
<ul>
<li>示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>可选项</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">定义</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">-D,--dev</td>
<td style="text-align:left">添加一个包作为开发依赖</td>
</tr>
</tbody>
</table>
<h3 id="yarn-add" tabindex="-1"><a class="header-anchor" href="#yarn-add" aria-hidden="true">#</a> yarn add</h3>
<p>从项目中添加依赖项</p>
<ul>
<li>示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">yarn</span> <span class="token function">add</span> vue@3.2.21
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="yarn-remove" tabindex="-1"><a class="header-anchor" href="#yarn-remove" aria-hidden="true">#</a> yarn remove</h3>
<p>从项目中移除依赖项</p>
<ul>
<li>示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">yarn</span> remove vue
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="yarn-up" tabindex="-1"><a class="header-anchor" href="#yarn-up" aria-hidden="true">#</a> yarn up</h3>
<p>升级整个项目的依赖项</p>
<ul>
<li>示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">yarn</span> upgrade vue@3.2.21
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
