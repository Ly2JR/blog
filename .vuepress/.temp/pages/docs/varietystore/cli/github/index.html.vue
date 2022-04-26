<template><h1 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h1>
<p><a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">下载<ExternalLinkIcon/></a></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#git基础">Git基础</RouterLink><ul><li><RouterLink to="#获取git仓库">获取Git仓库</RouterLink></li><li><RouterLink to="#记录每次更新到仓库">记录每次更新到仓库</RouterLink></li><li><RouterLink to="#查看提交历史">查看提交历史</RouterLink></li><li><RouterLink to="#撤销操作">撤销操作</RouterLink></li><li><RouterLink to="#远程仓库的使用">远程仓库的使用</RouterLink></li></ul></li></ul></nav>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> <span class="token punctuation">[</span>--version<span class="token punctuation">]</span> <span class="token punctuation">[</span>--help<span class="token punctuation">]</span> <span class="token punctuation">[</span>-C <span class="token operator">&lt;</span>path<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-c <span class="token operator">&lt;</span>name<span class="token operator">>=</span><span class="token operator">&lt;</span>value<span class="token operator">></span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span>--exec-path<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>path<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--html-path<span class="token punctuation">]</span> <span class="token punctuation">[</span>--man-path<span class="token punctuation">]</span> <span class="token punctuation">[</span>--info-path<span class="token punctuation">]</span>
  <span class="token punctuation">[</span>-p<span class="token operator">|</span>--paginate<span class="token operator">|</span>-P<span class="token operator">|</span>--no-pager<span class="token punctuation">]</span> <span class="token punctuation">[</span>--no-replace-objects<span class="token punctuation">]</span> <span class="token punctuation">[</span>--bare<span class="token punctuation">]</span>
  <span class="token punctuation">[</span>--git-dir<span class="token operator">=</span><span class="token operator">&lt;</span>path<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--work-tree<span class="token operator">=</span><span class="token operator">&lt;</span>path<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--namespace<span class="token operator">=</span><span class="token operator">&lt;</span>name<span class="token operator">></span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span>--super-prefix<span class="token operator">=</span><span class="token operator">&lt;</span>path<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--config-env<span class="token operator">=</span><span class="token operator">&lt;</span>name<span class="token operator">>=</span><span class="token operator">&lt;</span>envvar<span class="token operator">></span><span class="token punctuation">]</span>
  <span class="token operator">&lt;</span>command<span class="token operator">></span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>args<span class="token operator">></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="git基础" tabindex="-1"><a class="header-anchor" href="#git基础" aria-hidden="true">#</a> Git基础</h2>
<h3 id="获取git仓库" tabindex="-1"><a class="header-anchor" href="#获取git仓库" aria-hidden="true">#</a> 获取Git仓库</h3>
<p>将本地未进行版本控制的文件进行版本控制</p>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> init <span class="token punctuation">[</span>-q <span class="token operator">|</span> --quiet<span class="token punctuation">]</span> <span class="token punctuation">[</span>--bare<span class="token punctuation">]</span> <span class="token punctuation">[</span>--template<span class="token operator">=</span><span class="token operator">&lt;</span>template_directory<span class="token operator">></span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span>--separate-git-dir <span class="token operator">&lt;</span>git dir<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--object-format<span class="token operator">=</span><span class="token operator">&lt;</span>format<span class="token operator">></span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span>-b <span class="token operator">&lt;</span>branch-name<span class="token operator">></span> <span class="token operator">|</span> --initial-branch<span class="token operator">=</span><span class="token operator">&lt;</span>branch-name<span class="token operator">></span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span>--shared<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>permissions<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>directory<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>克隆远程仓库</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>$&gt; git clone --help 查看详细说明</p>
</div>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> clone <span class="token punctuation">[</span>--template<span class="token operator">=</span><span class="token operator">&lt;</span>template_directory<span class="token operator">></span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span>-l<span class="token punctuation">]</span> <span class="token punctuation">[</span>-s<span class="token punctuation">]</span> <span class="token punctuation">[</span>--no-hardlinks<span class="token punctuation">]</span> <span class="token punctuation">[</span>-q<span class="token punctuation">]</span> <span class="token punctuation">[</span>-n<span class="token punctuation">]</span> <span class="token punctuation">[</span>--bare<span class="token punctuation">]</span> <span class="token punctuation">[</span>--mirror<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>-o <span class="token operator">&lt;</span>name<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-b <span class="token operator">&lt;</span>name<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-u <span class="token operator">&lt;</span>upload-pack<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--reference <span class="token operator">&lt;</span>repository<span class="token operator">></span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--dissociate<span class="token punctuation">]</span> <span class="token punctuation">[</span>--separate-git-dir <span class="token operator">&lt;</span>git dir<span class="token operator">></span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--depth <span class="token operator">&lt;</span>depth<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">[</span>no-<span class="token punctuation">]</span>single-branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>--no-tags<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--recurse-submodules<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>pathspec<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">[</span>no-<span class="token punctuation">]</span>shallow-submodules<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--<span class="token punctuation">[</span>no-<span class="token punctuation">]</span>remote-submodules<span class="token punctuation">]</span> <span class="token punctuation">[</span>--jobs <span class="token operator">&lt;</span>n<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--sparse<span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">[</span>no-<span class="token punctuation">]</span>reject-shallow<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--filter<span class="token operator">=</span><span class="token operator">&lt;</span>filter<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token operator">&lt;</span>repository<span class="token operator">></span>
    <span class="token punctuation">[</span><span class="token operator">&lt;</span>directory<span class="token operator">></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="记录每次更新到仓库" tabindex="-1"><a class="header-anchor" href="#记录每次更新到仓库" aria-hidden="true">#</a> 记录每次更新到仓库</h3>
<h4 id="查看文件状态" tabindex="-1"><a class="header-anchor" href="#查看文件状态" aria-hidden="true">#</a> 查看文件状态</h4>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>$&gt; git add --help 查看详细说明</p>
</div>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> status <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">[</span>--<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token operator">&lt;</span>pathspec<span class="token operator">></span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>可选项</li>
</ul>
<p><code>-s</code>:可选，简化内容</p>
<p>A 新添加到缓存取的文件</p>
<p>M 修改的文件</p>
<p>?? 新添加未跟踪的文件</p>
<h4 id="跟踪新文件" tabindex="-1"><a class="header-anchor" href="#跟踪新文件" aria-hidden="true">#</a> 跟踪新文件</h4>
<p>命令理解:精确地将内容添加到下一次提交中</p>
<p>git add 命令使用文件或目录的路径作为参数;</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>$&gt; git add --help 查看详细说明</p>
</div>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>--verbose <span class="token operator">|</span> -v<span class="token punctuation">]</span> <span class="token punctuation">[</span>--dry-run <span class="token operator">|</span> -n<span class="token punctuation">]</span> <span class="token punctuation">[</span>--force <span class="token operator">|</span> -f<span class="token punctuation">]</span> <span class="token punctuation">[</span>--interactive <span class="token operator">|</span> -i<span class="token punctuation">]</span> <span class="token punctuation">[</span>--patch <span class="token operator">|</span> -p<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--edit <span class="token operator">|</span> -e<span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">[</span>no-<span class="token punctuation">]</span>all <span class="token operator">|</span> --<span class="token punctuation">[</span>no-<span class="token punctuation">]</span>ignore-removal <span class="token operator">|</span> <span class="token punctuation">[</span>--update <span class="token operator">|</span> -u<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--intent-to-add <span class="token operator">|</span> -N<span class="token punctuation">]</span> <span class="token punctuation">[</span>--refresh<span class="token punctuation">]</span> <span class="token punctuation">[</span>--ignore-errors<span class="token punctuation">]</span> <span class="token punctuation">[</span>--ignore-missing<span class="token punctuation">]</span> <span class="token punctuation">[</span>--renormalize<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--chmod<span class="token operator">=</span><span class="token punctuation">(</span>+<span class="token operator">|</span>-<span class="token punctuation">)</span>x<span class="token punctuation">]</span> <span class="token punctuation">[</span>--pathspec-from-file<span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">></span> <span class="token punctuation">[</span>--pathspec-file-nul<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>pathspec<span class="token operator">></span>…​<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件" aria-hidden="true">#</a> 忽略文件</h4>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>.gitigore 文件</p>
<p>GitHub 有一个十分详细的针对数十种项目及语言的 .gitignore 文件列表， 你可以在 <a href="https://github.com/github/gitignore" target="_blank" rel="noopener noreferrer">https://github.com/github/gitignore<ExternalLinkIcon/></a> 找到它。</p>
</div>
<p>文件<code>.gitignore</code>的格式规范如下:</p>
<ul>
<li>
<p>所有空行或者以<code>#</code>开头的行都会被Git忽略</p>
</li>
<li>
<p>可以使用标准的glob模式匹配,它会递归地应用在整个工作区中</p>
</li>
<li>
<p>匹配模式可以以<code>/</code>开头防止递归</p>
</li>
<li>
<p>匹配模式可以以<code>/</code>结尾指定目录</p>
</li>
<li>
<p>要忽略指定模式以外的文件或目录，可以在模式前加叹号<code>!</code>取反</p>
</li>
</ul>
<details class="custom-container details"><summary>blog</summary>
<p>glob模式是指shell所使用的简化了的正则表达式。</p>
<p>星号（<code>*</code>）匹配零个或多个任意字符;</p>
<p>[<code>abc</code>]匹配任何一个列在方括号中的字符(这个例子要么匹配一个a,要么匹配一个b,要么匹配一个c);</p>
<p>问号(<code>?</code>)只匹配一个任意字符；</p>
<p>方括号中使用短划线分割两个字符，表示所有在这两个字符范围内的都可以匹配(比如[0-9]表示匹配所有0到9的数字)</p>
<p>使用两个星号(<code>**</code>)表示匹配任意中间目录,比如<code>a/**/z</code>可以匹配<code>a/z</code>、<code>a/b/z</code>或<code>a/b/c/z</code>等</p>
</details>
<p>一个<code>.gitignore</code>文件的例子</p>
<CodeGroup>
<CodeGroupItem title=".gitignore">
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code># 忽略所有的.a文件
*.a

# 跟踪所有的lib.a,即便在前面忽略了.a文件
！lib.a

# 只忽略当前目录下的TODO文件，而不忽略subidt/TODO
/TODO

# 忽略任何目录下名未build的文件
build/

# 忽略doc/notes.txt,但不忽略doc/server/arch.txt
doc/*.txt

# 忽略doc/目录及其所有子目录下的.pdf文件
doc/**/*.pdf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h4 id="查看已暂存和未暂存的修改" tabindex="-1"><a class="header-anchor" href="#查看已暂存和未暂存的修改" aria-hidden="true">#</a> 查看已暂存和未暂存的修改</h4>
<p>git diff 本身只显示尚未暂存的改动,而不是自上次提交以来所做的所有改动</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>$&gt; git diff --help 查看详细说明</p>
</div>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>commit<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>path<span class="token operator">></span>…​<span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">]</span> --cached <span class="token punctuation">[</span>--merge-base<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>commit<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>path<span class="token operator">></span>…​<span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--merge-base<span class="token punctuation">]</span> <span class="token operator">&lt;</span>commit<span class="token operator">></span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>commit<span class="token operator">></span>…​<span class="token punctuation">]</span> <span class="token operator">&lt;</span>commit<span class="token operator">></span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>path<span class="token operator">></span>…​<span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>commit<span class="token operator">></span>…​<span class="token operator">&lt;</span>commit<span class="token operator">></span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>path<span class="token operator">></span>…​<span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>blob<span class="token operator">></span> <span class="token operator">&lt;</span>blob<span class="token operator">></span>
$<span class="token operator">></span> <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">]</span> --no-index <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token operator">&lt;</span>path<span class="token operator">></span> <span class="token operator">&lt;</span>path<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="提交更新" tabindex="-1"><a class="header-anchor" href="#提交更新" aria-hidden="true">#</a> 提交更新</h4>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>$&gt; git commit --help 查看详细说明</p>
</div>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> commit <span class="token punctuation">[</span>-a <span class="token operator">|</span> --interactive <span class="token operator">|</span> --patch<span class="token punctuation">]</span> <span class="token punctuation">[</span>-s<span class="token punctuation">]</span> <span class="token punctuation">[</span>-v<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u<span class="token operator">&lt;</span>mode<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--amend<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--dry-run<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>-c <span class="token operator">|</span> -C <span class="token operator">|</span> --squash<span class="token punctuation">)</span> <span class="token operator">&lt;</span>commit<span class="token operator">></span> <span class="token operator">|</span> --fixup <span class="token punctuation">[</span><span class="token punctuation">(</span>amend<span class="token operator">|</span>reword<span class="token punctuation">)</span>:<span class="token punctuation">]</span><span class="token operator">&lt;</span>commit<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span>-F <span class="token operator">&lt;</span>file<span class="token operator">></span> <span class="token operator">|</span> -m <span class="token operator">&lt;</span>msg<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--reset-author<span class="token punctuation">]</span> <span class="token punctuation">[</span>--allow-empty<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--allow-empty-message<span class="token punctuation">]</span> <span class="token punctuation">[</span>--no-verify<span class="token punctuation">]</span> <span class="token punctuation">[</span>-e<span class="token punctuation">]</span> <span class="token punctuation">[</span>--author<span class="token operator">=</span><span class="token operator">&lt;</span>author<span class="token operator">></span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--date<span class="token operator">=</span><span class="token operator">&lt;</span>date<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--cleanup<span class="token operator">=</span><span class="token operator">&lt;</span>mode<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">[</span>no-<span class="token punctuation">]</span>status<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>-i <span class="token operator">|</span> -o<span class="token punctuation">]</span> <span class="token punctuation">[</span>--pathspec-from-file<span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">></span> <span class="token punctuation">[</span>--pathspec-file-nul<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token punctuation">(</span>--trailer <span class="token operator">&lt;</span>token<span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token operator">=</span><span class="token operator">|</span><span class="token builtin class-name">:</span><span class="token punctuation">)</span><span class="token operator">&lt;</span>value<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">)</span>…​<span class="token punctuation">]</span> <span class="token punctuation">[</span>-S<span class="token punctuation">[</span><span class="token operator">&lt;</span>keyid<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>pathspec<span class="token operator">></span>…​<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>可选项</li>
</ul>
<p><code>-a</code>:可选，将所有已经跟踪过的文件暂存起来，从而跳过<code>git add</code>步骤</p>
<p><code>-m</code>:可选，将提交信息与命令放置同一行</p>
<h4 id="移除文件" tabindex="-1"><a class="header-anchor" href="#移除文件" aria-hidden="true">#</a> 移除文件</h4>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>$&gt; git rm --help 查看详细说明</p>
</div>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>-f <span class="token operator">|</span> --force<span class="token punctuation">]</span> <span class="token punctuation">[</span>-n<span class="token punctuation">]</span> <span class="token punctuation">[</span>-r<span class="token punctuation">]</span> <span class="token punctuation">[</span>--cached<span class="token punctuation">]</span> <span class="token punctuation">[</span>--ignore-unmatch<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--quiet<span class="token punctuation">]</span> <span class="token punctuation">[</span>--pathspec-from-file<span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">></span> <span class="token punctuation">[</span>--pathspec-file-nul<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>pathspec<span class="token operator">></span>…​<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>可选项</li>
</ul>
<p><code>-f</code>:可选，即 force 的首字母,强制删除</p>
<p><code>--cached</code>:可选，从暂存区移除</p>
<h4 id="移动文件" tabindex="-1"><a class="header-anchor" href="#移动文件" aria-hidden="true">#</a> 移动文件</h4>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>$&gt; git mv --help 查看详细说明</p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> <span class="token function">mv</span> <span class="token operator">&lt;</span>options<span class="token operator">></span>…​ <span class="token operator">&lt;</span>args<span class="token operator">></span>…​
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><details class="custom-container details"><summary>git mv</summary>
<p>运行<code>git mv</code>相当于运行了下面三条命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">mv</span> README.MD README
$<span class="token operator">></span> <span class="token function">git</span> <span class="token function">rm</span> README.MD
$<span class="token operator">></span> <span class="token function">git</span> <span class="token function">add</span> README
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<h3 id="查看提交历史" tabindex="-1"><a class="header-anchor" href="#查看提交历史" aria-hidden="true">#</a> 查看提交历史</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>$&gt; git log --help 查看详细说明</p>
</div>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> log <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>revision range<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token operator">&lt;</span>path<span class="token operator">></span>…​<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>可选项</li>
</ul>
<p><code>-patch</code> 或 <code>-p</code> 显示每次提交所引入的差异(按<strong>补丁</strong>的格式输出)</p>
<p><code>-number</code>：number为数字，限制显示的日志条码数量</p>
<h3 id="撤销操作" tabindex="-1"><a class="header-anchor" href="#撤销操作" aria-hidden="true">#</a> 撤销操作</h3>
<p>有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。
此时，可以运行带有<code>--ament</code>选项的提交命令来重新提交：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> commit --amend
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这个命令会将暂存区中的文件提交。如果自上次提交以来你还未做任何修改
(例如，在上次提交后马上执行了次命令),那么快照会保持不变，而你所修改的只是提交信息。</p>
<p>例如，你提交后发现忘记了暂存某些需要的修改，可以像下面这样操作：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> commit -m <span class="token string">'initial commit'</span>
$<span class="token operator">></span> <span class="token function">git</span> <span class="token function">add</span> forgotten_file
$<span class="token operator">></span> <span class="token function">git</span> commit --ament
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>最终你只会有一个提交--第二次提交将代替第一次提交的结果</p>
<h4 id="取消暂存的文件" tabindex="-1"><a class="header-anchor" href="#取消暂存的文件" aria-hidden="true">#</a> 取消暂存的文件</h4>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>$&gt; git reset --help 查看详细说明</p>
</div>
<p>例如，你已经修改了两个文件并且想要将它们作为两次独立的修改提交，
但是却意外地输入<code>git add *</code>暂存了他们两个。如果只取消暂存两个中的一个呢？
<code>git status</code>命令提示了您：在“Changes to be committed”文字正下方，提示
使用<code>git reset HEAD &lt;file&gt;...</code>来取消暂存。</p>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> reset <span class="token punctuation">[</span>-q<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>tree-ish<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token operator">&lt;</span>pathspec<span class="token operator">></span>…​
$<span class="token operator">></span> <span class="token function">git</span> reset <span class="token punctuation">[</span>-q<span class="token punctuation">]</span> <span class="token punctuation">[</span>--pathspec-from-file<span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">></span> <span class="token punctuation">[</span>--pathspec-file-nul<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>tree-ish<span class="token operator">></span><span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> reset <span class="token punctuation">(</span>--patch <span class="token operator">|</span> -p<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>tree-ish<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>pathspec<span class="token operator">></span>…​<span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> reset <span class="token punctuation">[</span>--soft <span class="token operator">|</span> --mixed <span class="token punctuation">[</span>-N<span class="token punctuation">]</span> <span class="token operator">|</span> --hard <span class="token operator">|</span> --merge <span class="token operator">|</span> --keep<span class="token punctuation">]</span> <span class="token punctuation">[</span>-q<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>commit<span class="token operator">></span><span class="token punctuation">]</span>
    DEPRECATED: <span class="token function">git</span> reset <span class="token punctuation">[</span>-q<span class="token punctuation">]</span> <span class="token punctuation">[</span>--stdin <span class="token punctuation">[</span>-z<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>tree-ish<span class="token operator">></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="撤销对文件的修改" tabindex="-1"><a class="header-anchor" href="#撤销对文件的修改" aria-hidden="true">#</a> 撤销对文件的修改</h4>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>$&gt; git checkout --help 查看详细说明</p>
</div>
<p>如果你并不想保留对文件的修改怎么办？你该如何方便地撤销修改--将它还原成
上次提交时的样子(或者刚克隆完的样子，或者刚把它放入工作目录时的样子)？
幸运的是，<code>git status</code>也告诉了你应该如何做。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>请务必记得<code>git checkout --&lt;file&gt;</code>是一个危险的命令。你对那个文件在本地的
任何修改都会消失----Git会用最近提交的版本覆盖掉它。除非你确实清楚不想要对
那个文件的本地修改了，否则请不要使用这个命令。</p>
</div>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">"git add &lt;file>..."</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">"git checkout -- &lt;file>..."</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

    modified:   CONTRIBUTING.md
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> checkout <span class="token punctuation">[</span>-q<span class="token punctuation">]</span> <span class="token punctuation">[</span>-f<span class="token punctuation">]</span> <span class="token punctuation">[</span>-m<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>branch<span class="token operator">></span><span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> checkout <span class="token punctuation">[</span>-q<span class="token punctuation">]</span> <span class="token punctuation">[</span>-f<span class="token punctuation">]</span> <span class="token punctuation">[</span>-m<span class="token punctuation">]</span> --detach <span class="token punctuation">[</span><span class="token operator">&lt;</span>branch<span class="token operator">></span><span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> checkout <span class="token punctuation">[</span>-q<span class="token punctuation">]</span> <span class="token punctuation">[</span>-f<span class="token punctuation">]</span> <span class="token punctuation">[</span>-m<span class="token punctuation">]</span> <span class="token punctuation">[</span>--detach<span class="token punctuation">]</span> <span class="token operator">&lt;</span>commit<span class="token operator">></span>
$<span class="token operator">></span> <span class="token function">git</span> checkout <span class="token punctuation">[</span>-q<span class="token punctuation">]</span> <span class="token punctuation">[</span>-f<span class="token punctuation">]</span> <span class="token punctuation">[</span>-m<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>-b<span class="token operator">|</span>-B<span class="token operator">|</span>--orphan<span class="token punctuation">]</span> <span class="token operator">&lt;</span>new_branch<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>start_point<span class="token operator">></span><span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> checkout <span class="token punctuation">[</span>-f<span class="token operator">|</span>--ours<span class="token operator">|</span>--theirs<span class="token operator">|</span>-m<span class="token operator">|</span>--conflict<span class="token operator">=</span><span class="token operator">&lt;</span>style<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>tree-ish<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token operator">&lt;</span>pathspec<span class="token operator">></span>…​
$<span class="token operator">></span> <span class="token function">git</span> checkout <span class="token punctuation">[</span>-f<span class="token operator">|</span>--ours<span class="token operator">|</span>--theirs<span class="token operator">|</span>-m<span class="token operator">|</span>--conflict<span class="token operator">=</span><span class="token operator">&lt;</span>style<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>tree-ish<span class="token operator">></span><span class="token punctuation">]</span> --pathspec-from-file<span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">></span> <span class="token punctuation">[</span>--pathspec-file-nul<span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> checkout <span class="token punctuation">(</span>-p<span class="token operator">|</span>--patch<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>tree-ish<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>pathspec<span class="token operator">></span>…​<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果你仍然想保留对那个文件做出的修改，但是现在仍然需要撤销，我们将会在<code>Git 分支</code>介绍
保持进度与分支，这通常是更好的做法。</p>
<p>记住，在Git中任何<code>已提交</code>的东西几乎总是可以恢复的。设置那些被删除的分支中的提交或使用
<code>--ament</code>选项覆盖的提交也可以恢复。然而，任何你未提交的东西丢失后很可能再也找不到了。</p>
<h3 id="远程仓库的使用" tabindex="-1"><a class="header-anchor" href="#远程仓库的使用" aria-hidden="true">#</a> 远程仓库的使用</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>远程仓库可以在你的本地主机上
你完全可以在一个“远程”仓库上工作，而实际上它在你本地的主机上，
词语“远程”未必表示仓库在网络或者互联网上的其他未知，而只是表示它在别处。
在这样的远程仓库上工作，仍然需要和其它远程仓库上一样的标准推送、拉取和抓取操作。</p>
</div>
<h4 id="查看远程仓库" tabindex="-1"><a class="header-anchor" href="#查看远程仓库" aria-hidden="true">#</a> 查看远程仓库</h4>
<p>如果想查看你已经配置的远程仓库服务器，可以运行<code>git remote</code>命令。
它会列出你指定的每一个远程服务器的简写。如果你已经克隆了自己的仓库，
那么至少应该能看到origin----这是Git给你克隆的仓库服务器的默认名字。</p>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> remote <span class="token punctuation">[</span>-v <span class="token operator">|</span> --verbose<span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>-t <span class="token operator">&lt;</span>branch<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-m <span class="token operator">&lt;</span>master<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-f<span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">[</span>no-<span class="token punctuation">]</span>tags<span class="token punctuation">]</span> <span class="token punctuation">[</span>--mirror<span class="token operator">=</span><span class="token punctuation">(</span>fetch<span class="token operator">|</span>push<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>name<span class="token operator">></span> <span class="token operator">&lt;</span>url<span class="token operator">></span>
$<span class="token operator">></span> <span class="token function">git</span> remote <span class="token function">rename</span> <span class="token operator">&lt;</span>old<span class="token operator">></span> <span class="token operator">&lt;</span>new<span class="token operator">></span>
$<span class="token operator">></span> <span class="token function">git</span> remote remove <span class="token operator">&lt;</span>name<span class="token operator">></span>
$<span class="token operator">></span> <span class="token function">git</span> remote set-head <span class="token operator">&lt;</span>name<span class="token operator">></span> <span class="token punctuation">(</span>-a <span class="token operator">|</span> --auto <span class="token operator">|</span> -d <span class="token operator">|</span> --delete <span class="token operator">|</span> <span class="token operator">&lt;</span>branch<span class="token operator">></span><span class="token punctuation">)</span>
$<span class="token operator">></span> <span class="token function">git</span> remote set-branches <span class="token punctuation">[</span>--add<span class="token punctuation">]</span> <span class="token operator">&lt;</span>name<span class="token operator">></span> <span class="token operator">&lt;</span>branch<span class="token operator">></span>…​
$<span class="token operator">></span> <span class="token function">git</span> remote get-url <span class="token punctuation">[</span>--push<span class="token punctuation">]</span> <span class="token punctuation">[</span>--all<span class="token punctuation">]</span> <span class="token operator">&lt;</span>name<span class="token operator">></span>
$<span class="token operator">></span> <span class="token function">git</span> remote set-url <span class="token punctuation">[</span>--push<span class="token punctuation">]</span> <span class="token operator">&lt;</span>name<span class="token operator">></span> <span class="token operator">&lt;</span>newurl<span class="token operator">></span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>oldurl<span class="token operator">></span><span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> remote set-url --add <span class="token punctuation">[</span>--push<span class="token punctuation">]</span> <span class="token operator">&lt;</span>name<span class="token operator">></span> <span class="token operator">&lt;</span>newurl<span class="token operator">></span>
$<span class="token operator">></span> <span class="token function">git</span> remote set-url --delete <span class="token punctuation">[</span>--push<span class="token punctuation">]</span> <span class="token operator">&lt;</span>name<span class="token operator">></span> <span class="token operator">&lt;</span>url<span class="token operator">></span>
$<span class="token operator">></span> <span class="token function">git</span> remote <span class="token punctuation">[</span>-v <span class="token operator">|</span> --verbose<span class="token punctuation">]</span> show <span class="token punctuation">[</span>-n<span class="token punctuation">]</span> <span class="token operator">&lt;</span>name<span class="token operator">></span>…​
$<span class="token operator">></span> <span class="token function">git</span> remote prune <span class="token punctuation">[</span>-n <span class="token operator">|</span> --dry-run<span class="token punctuation">]</span> <span class="token operator">&lt;</span>name<span class="token operator">></span>…​
$<span class="token operator">></span> <span class="token function">git</span> remote <span class="token punctuation">[</span>-v <span class="token operator">|</span> --verbose<span class="token punctuation">]</span> update <span class="token punctuation">[</span>-p <span class="token operator">|</span> --prune<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>group<span class="token operator">></span> <span class="token operator">|</span> <span class="token operator">&lt;</span>remote<span class="token operator">></span><span class="token punctuation">)</span>…​<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="添加远程仓库" tabindex="-1"><a class="header-anchor" href="#添加远程仓库" aria-hidden="true">#</a> 添加远程仓库</h4>
<p>之前已经提到并展示了<code>git clone</code>命令是如何自行添加远程仓库的，
不过这里将告诉你如何自己来添加它。运行<code>git remote add &lt;shortname&gt; &lt;url&gt;</code>
添加一个新的远程Git仓库，同事指定一个方便的使用简写。</p>
<p>例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> remote
origin
$ <span class="token function">git</span> remote <span class="token function">add</span> blog https://github.com/TgT982474256/blog.git
$ <span class="token function">git</span> remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>现在你可以在命令行中使用字符串<code>blog</code>来代替整个URL。例如，如果你想
拉取Blog的仓库中有但你没有的信息，可以运行<code>git fetch blog</code></p>
<h4 id="从远程仓库中抓取与拉取" tabindex="-1"><a class="header-anchor" href="#从远程仓库中抓取与拉取" aria-hidden="true">#</a> 从远程仓库中抓取与拉取</h4>
<p>如刚才所见，从远程仓库中获取数据，可以执行:
<code>$ git fetch &lt;remote&gt;</code>
这个命令会访问远程仓库，从中拉取所有你还没有的数据。
执行完成后，你将会用友那个远程仓库中所有的分支的引用，
可以随时合并或查看。</p>
<p>如果你使用<code>clone</code>命令克隆了一个仓库，命令会自动将其添加
未远程仓库并默认以“origin”为简写。所以<code>git fetch origin</code>
会抓取克隆(或上一次抓取)后新推送的所有工作。必须注意<code>git fetch</code>
命令只会将数据下载到你的本地仓库----它并不会自动合并或修改你当前的工作。
当准备好时你必须手动将其合并入你的工作。</p>
<p>如果你的当前分支设置了跟踪远程分支，那么可以用<code>git pull</code>命令来自动抓取后
合并该远程分支到当前分支。这或许是个更加简单舒服的工作流程。默认情况下，
<code>git clone</code>命令会自动设置本地<code>main</code>分支跟踪克隆的远程仓库的<code>main</code>分支
(或其他名字的默认分支)。运行<code>git pull</code>通常会从最初克隆的服务器上抓取数据
并自动尝试合并到当前所在的分支。</p>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> fetch <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>repository<span class="token operator">></span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>refspec<span class="token operator">></span>…​<span class="token punctuation">]</span><span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> fetch <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>group<span class="token operator">></span>
$<span class="token operator">></span> <span class="token function">git</span> fetch --multiple <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>repository<span class="token operator">></span> <span class="token operator">|</span> <span class="token operator">&lt;</span>group<span class="token operator">></span><span class="token punctuation">)</span>…​<span class="token punctuation">]</span>
$<span class="token operator">></span> <span class="token function">git</span> fetch --all <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> pull <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>repository<span class="token operator">></span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>refspec<span class="token operator">></span>…​<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送到远程仓库" aria-hidden="true">#</a> 推送到远程仓库</h4>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
</div>
<p>当你想分享你的项目时，必须将其推送到上游。这个命令很简单:
<code>git push &lt;remote&gt;&lt;branch&gt;</code>。当你想要将<code>main</code>分支推送到
<code>origin</code>服务器时(再次说明，克隆时通常会自动设置好那两个名字),
那么运行这个命令就可以将你所做的备份到服务器:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> pull orgin main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>只有当你有所克隆服务器的写入权限，并且之前没有人推送过时，这条命令才能生效。
当你和其他人在同一时间克隆，他们先推送到上游然后你再推送到上游，你的推送就会
毫无疑问地被拒绝。你必须先抓取他们的工作并将其合并进你的工作后才能推送。</p>
<ul>
<li>概要</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> push <span class="token punctuation">[</span>--all <span class="token operator">|</span> --mirror <span class="token operator">|</span> --tags<span class="token punctuation">]</span> <span class="token punctuation">[</span>--follow-tags<span class="token punctuation">]</span> <span class="token punctuation">[</span>--atomic<span class="token punctuation">]</span> <span class="token punctuation">[</span>-n <span class="token operator">|</span> --dry-run<span class="token punctuation">]</span> <span class="token punctuation">[</span>--receive-pack<span class="token operator">=</span><span class="token operator">&lt;</span>git-receive-pack<span class="token operator">></span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span>--repo<span class="token operator">=</span><span class="token operator">&lt;</span>repository<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-f <span class="token operator">|</span> --force<span class="token punctuation">]</span> <span class="token punctuation">[</span>-d <span class="token operator">|</span> --delete<span class="token punctuation">]</span> <span class="token punctuation">[</span>--prune<span class="token punctuation">]</span> <span class="token punctuation">[</span>-v <span class="token operator">|</span> --verbose<span class="token punctuation">]</span>
  <span class="token punctuation">[</span>-u <span class="token operator">|</span> --set-upstream<span class="token punctuation">]</span> <span class="token punctuation">[</span>-o <span class="token operator">&lt;</span>string<span class="token operator">></span> <span class="token operator">|</span> --push-option<span class="token operator">=</span><span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span>--<span class="token punctuation">[</span>no-<span class="token punctuation">]</span>signed<span class="token operator">|</span>--signed<span class="token operator">=</span><span class="token punctuation">(</span>true<span class="token operator">|</span><span class="token boolean">false</span><span class="token operator">|</span>if-asked<span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span>--force-with-lease<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>refname<span class="token operator">></span><span class="token punctuation">[</span>:<span class="token operator">&lt;</span>expect<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--force-if-includes<span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span>--no-verify<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>repository<span class="token operator">></span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>refspec<span class="token operator">></span>…​<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="查看某个远程仓库" tabindex="-1"><a class="header-anchor" href="#查看某个远程仓库" aria-hidden="true">#</a> 查看某个远程仓库</h4>
<p>如果想要查看某一个远程仓库的更多信息，可以使用<code>git remote show &lt;remote&gt;</code>命令。
如果想以一个特定的缩写运行这个名，例如<code>origin</code>，会得到下面类似的信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote show origin
* remote origin
  Fetch URL: https://github.com/TgT982474256/blog.git
  Push  URL: https://github.com/TgT982474256/blog.git
  HEAD branch: main
  Remote branch:
    main tracked
  Local branch configured <span class="token keyword">for</span> <span class="token string">'git pull'</span><span class="token builtin class-name">:</span>
    main merges with remote main
  Local ref configured <span class="token keyword">for</span> <span class="token string">'git push'</span><span class="token builtin class-name">:</span>
    main pushes to main <span class="token punctuation">(</span>up to <span class="token function">date</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>它同样会列出远程仓库的URL与跟踪分支的信息。这些信息非常有用，它告诉你正处于
<code>main</code>分支，并且如果运行<code>git pull</code>，就会抓取所有的远程引用,然后将远程
<code>main</code>分支合并到本地<code>main</code>分支。它也会列出拉取到的所有远程引用。</p>
<p>这个命令列出了当你在特定的分支上执行<code>git push</code>会自动地推送到哪一个远程分支。
它也同样地列出了哪些远程分支不在你的本地，哪些远程分支已经从服务器上移除了，
还有当你执行<code>git pull</code>时哪些本地分支可以与它跟踪的远程分支自动合并。</p>
<h4 id="远程仓库的重命名与移除" tabindex="-1"><a class="header-anchor" href="#远程仓库的重命名与移除" aria-hidden="true">#</a> 远程仓库的重命名与移除</h4>
<p>你可以运行<code>git remote rename</code>来修改一个远程仓库的简写名。例如，想要将<code>blog</code>
重命名为<code>Tg-Blog</code>,可以用<code>git remote rename</code>这样做:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> remote <span class="token function">rename</span> blog Tg-Blog
$<span class="token operator">></span> <span class="token function">git</span> remote
origin
Tg-Blog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>值得注意的是这同样也会修改你所有远程跟踪的分支名称。哪些过去引用<code>Blog\main</code>
的现在会引用<code>Tg-Blog\main</code></p>
<p>如果因为一些原因想要移除一个远程仓库----你已经从服务器上搬走了或不再想使用
某一个特定的镜像了，又或者某一个贡献值不在贡献了----可以使用<code>git remote remove</code>
或<code>git remote rm</code>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$<span class="token operator">></span> <span class="token function">git</span> remote remove Tg-Blog
$<span class="token operator">></span> <span class="token function">git</span> remote
origin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>一旦你使用这种方式删除了一个远程仓库，那么所有和这个远程仓库相关的远程跟踪分支
以及配置信息也会一起被删除。</p>
</template>
