<template><h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><a href="https://git-scm.com/book/zh/v2" target="_blank" rel="noopener noreferrer">官方传送门<ExternalLinkIcon/></a></p>
</div>
<ul>
<li>查看全局配置</li>
</ul>
<div class="language-git ext-git line-numbers-mode"><pre v-pre class="language-git"><code>$git> git config --global --list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>查看用户名</li>
</ul>
<div class="language-git ext-git line-numbers-mode"><pre v-pre class="language-git"><code>$git> git config user.name
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>查看用户邮箱</li>
</ul>
<div class="language-git ext-git line-numbers-mode"><pre v-pre class="language-git"><code>$git> git config user.email
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>修改用户名</li>
</ul>
<div class="language-git ext-git line-numbers-mode"><pre v-pre class="language-git"><code>$git> git config --global user.name <span class="token string">'your_username'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>修改用户邮箱</li>
</ul>
<div class="language-git ext-git line-numbers-mode"><pre v-pre class="language-git"><code>$git> git config --global user.email <span class="token string">'your_email'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>修改默认分支</li>
</ul>
<div class="language-git ext-git line-numbers-mode"><pre v-pre class="language-git"><code>$git> git config --global init.defaultBranch main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>-- 删除某个配置</p>
<div class="language-git ext-git line-numbers-mode"><pre v-pre class="language-git"><code>$git> git config --global --unset http.version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
