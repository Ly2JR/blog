<template><h1 id="课程代号02197" tabindex="-1"><a class="header-anchor" href="#课程代号02197" aria-hidden="true">#</a> 课程代号02197</h1>
<a href="https://www.mathjax.org">
    <img title="由 MathJax 提供支持"
    src="https://www.mathjax.org/badge/mj_logo.png"
    border="0" alt="由 MathJax 提供支持" />
</a>
<p><a href="https://github.com/nzt/markdown-it-mathjax3" target="_blank" rel="noopener noreferrer">markdown-it-mathjax3<ExternalLinkIcon/></a></p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>注意与数学上的混淆</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>$\phi$:空集</p>
<p>$\Omega$:样本空间</p>
<p>$\cap$:</p>
<p>$\cup$:</p>
<p>$\subset$:</p>
<p>$\supset$:</p>
<p>$\overline{H}$</p>
</div>
<h2 id="一、随机事件与概率" tabindex="-1"><a class="header-anchor" href="#一、随机事件与概率" aria-hidden="true">#</a> 一、随机事件与概率</h2>
<h3 id="_1、随机事件" tabindex="-1"><a class="header-anchor" href="#_1、随机事件" aria-hidden="true">#</a> 1、随机事件</h3>
<ul>
<li>
<p>1.1 随机现象</p>
</li>
<li>
<p>1.2 随机试验和样本空间</p>
</li>
<li>
<p>1.3 随机事件的概念</p>
</li>
<li>
<p>1.4 随机事件的关系运算</p>
<ul>
<li>
<ol>
<li>事件的包含与相等</li>
</ol>
<p>设A，B为两个事件，若A发生<strong>必然</strong>导致B发生，则称<strong>事件B包含事件A，或称事件A包含在事件B中</strong>,记B$\supset$A，或A$\subset$B。</p>
<p>显然有：$\phi\subset\mathbf{A}\subset\Omega$</p>
</li>
<li>
<ol start="2">
<li>和事件</li>
</ol>
<p>称事件“A,B中至少有一个发生”为事件A与事件B的<strong>和事件</strong>,也称<strong>事件A与事件B的并</strong>,记作A$\cup$B,A$\cup$B发生意味着：或事件A发生，或事件B发生或事件A和事件B都发生.</p>
<p>显然有:</p>
<p>1°  $\mathbf{A}\subset\mathbf{A}\cup\mathbf{B}$，$\mathbf{B}\subset\mathbf{A}\cup\mathbf{B}$</p>
<p>2°  若$\mathbf{A}\subset\mathbf{B}$，则$\mathbf{A}\cup\mathbf{B=B}$</p>
</li>
<li>
<ol start="3">
<li>积事件</li>
</ol>
<p>称事件“A，B同时发生”为事件A与事件B的<strong>积事件</strong>,也称A与B的<strong>交</strong>,记作A$\cap$B,简记$\mathbf{AB}$。事件$\mathbf{AB}$发生意味着事件A发生且事件B也发生，也就是说A，B都发生。</p>
<p>显然有：</p>
<p>1°  $\mathbf{AB}\subset\mathbf{A}$，$\mathbf{AB}\subset\mathbf{B}$</p>
<p>2°  若$\mathbf{A}\subset\mathbf{B}$，则$\mathbf{AB=A}$</p>
</li>
<li>
<ol start="4">
<li>差事件</li>
</ol>
<p>称事件“A发生且B不发生”为事件A与事件B的<strong>差事件</strong> ,记作$\mathbf{A-B}$。</p>
<p>显然有：</p>
<p>1°  $\mathbf{A﹣B}\subset\mathbf{A}$</p>
<p>2°  若$\mathbf{A}\subset\mathbf{B}$，则$\mathbf{A﹣B=}\phi$</p>
</li>
<li>
<ol start="5">
<li>互不相容</li>
</ol>
<p>若事件A与事件B不能同时发生，既$\mathbf{AB=}\phi$，则称事件A与事件B是互不相融的两个事件，简称A与B<strong>互不相容(或互斥)</strong>。</p>
</li>
<li>
<ol start="6">
<li>对立事件</li>
</ol>
<p>称事件“A不发生”为事件A的<strong>逆事件(或余事件,或对立事件)</strong>，记作$\overline{A}$.</p>
<p>若事件A与事件B中至少有一个发生，且A与B互不相容，记$\mathbf{A}\cap\mathbf{B=}\Omega$,$\mathbf{AB=}\phi$,则称<strong>A与B互为对立事件</strong>。</p>
<p>显然有:</p>
<p>1° $\bar{\bar{A}}\mathbf{=A}$.</p>
<p>2° $\overline{\Omega}\mathbf{=}\phi$,$\overline{\phi}\mathbf{=}\Omega$</p>
<p>3° $\mathbf{A-B=A}\overline{B}=\mathbf{A-AB}$</p>
</li>
</ul>
</li>
</ul>
<h3 id="_2、概率" tabindex="-1"><a class="header-anchor" href="#_2、概率" aria-hidden="true">#</a> 2、概率</h3>
<ul>
<li>
<p>2.1 频率与概率</p>
<p>在相同条件下，进行了n次实验，在这n次实验中，事件A发生的次数$n_A$称为事件A发生的<strong>频数</strong>,而比值$\frac{n_A}{n}$称为事件A发生的<strong>频率</strong>,并记作$f_n(A)$。</p>
<p>随着试验重复次数n的大量增加,频率$f_n(A)$会逐渐稳定与某一常数，称这个常数为频率的稳定值，这个稳定值就是事件A的概率<strong>P(A)</strong>。</p>
<p>有频率的定义很容易证明下列基本性质：</p>
<p>（1） $0\leq{f_n(A)}\leq{1}$</p>
<p>进行n次试验，事件A发生$n_A$次,$0\leq{n_a}\leq{n}$,则</p>
<p>$$0\leq{f_n(A)}=\frac{n_A}{n}\leq{1}$$</p>
<p>（2） $f_n(\phi)=0,f_n(\Omega)=1$</p>
<p>进行n次试验，不可能事件$\phi$一次也不发生，既$n_\phi=0$,故</p>
<p>$$f_n(\phi)=\frac{n_\phi}{n}=\frac{0}{n}=0$$</p>
<p>又因为必然事件$\Omega$一定发生n次，既$n_\Omega=n$，从而</p>
<p>$$f_n(\Omega)=\frac{n_\Omega}{n}=\frac{n}{n}=1$$</p>
<p>（3） 若A与B互不相容，则$f_n(A{\cup}B)=f_n(A)+f_n(B)$</p>
<p>事实上，进行n次试验，事件A发生的次数为$n_A$，事件B发生的次数为$n_B$，因为A与B互不相容，$AB=\phi$，所以
$A{\cup}B$发生次数$n_{A{\cup}B}=n_A+n_B$，故</p>
<p>$$f_n(A{\cup}B)=\frac{n_{A{\cup}B}}{n}=\frac{n_A+n_B}{n}=\frac{n_A}{n}+\frac{n_B}{n}=f_n(A)+f_n(B)$$</p>
<p>这个性质可以推广：当$A_1,A_2,\cdots,A_m,\cdots$互不相容时,</p>
<p>$$ f_n( \bigcup_{k=1}^{m} A_k)=\sum_{k=1}^{m} f_n(A_k)$$</p>
<p>其中m是正整数,当$A_1,A_2,\cdots,A_m,\cdots$互不相容时,</p>
<p>$$ f_n( \bigcup_{k=1}^{\infty} A_k)=\sum_{k=1}^{\infty} f_n(A_k)$$</p>
<p>由于频率是概率的近似值，因此不难想到概率P(A)也应有类似特征。</p>
</li>
<li>
<p>2.2 古典概型</p>
<p>具有下面两个特点的随机试验的概率模型，称为<strong>古典概型</strong>
（1）基本事件的总数是有限的，换句话说样本空间仅含有有限个样本点。
（2）每个基本事件发生的可能性相同。</p>
<p>古典概型事件概率的计算公式。设$\Omega$为随机试验$\mathbf{E}$的样本空间，其中所含样本点总数为$\mathbf{n}$,
$\mathbf{A}$为一随机事件，其中所含样本点数为$\mathbf{r}$,则有</p>
<p>$$P(A)=\frac{r}{n}=\frac{A中样本点数}{\Omega中样本点总数},$$</p>
<p>$$P(A)=\frac{r}{n}=\frac{A所包含的基本事件数}{基本事件总数}$$</p>
</li>
<li>
<p>2.3 概率的定义与性质</p>
<p>$\color{blue}\bf{定义：}$</p>
<p>设$\Omega$是随机实验$\mathbf{E}$的样本空间，对于$\mathbf{E}$的每个事件$\mathbf{A}$赋予一共实数，记作$\mathbf{P(A)}$,
称$\mathbf{P(A)}$为<strong>事件A的概率</strong>,如果它满足下列条件：</p>
<p>1、$P(A)\geq 0$ ;</p>
<p>2、$P(\Omega)=1$ ;</p>
<p>3、设$A_1,A_2,\cdots,A_m,\cdots$是一列互不相容的事件,则有
$$P( \bigcup_{k=1}^{\infty} A_k)=\sum_{k=1}^{\infty}P(A_k)$$</p>
<p>$\color{blue}\bf{性质1：}$</p>
<p>$0\leq P(A)\leq 1,P(\phi)=0$</p>
<p>$\color{blue}\bf{性质2：}$</p>
<p>对于任意事件A,B有
$$P(A\cup B)=P(A)+P(B)-P(AB).$$</p>
<p>特别地，当A与B互不相容时,
$$P(A\cup B)=P(A)+P(B)$$</p>
<p>性质2可推广：对于任意事件A,B,C有
$$P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC),$$</p>
<p>当$A_1,A_2,\cdots,A_n$互不相容时,
$$P(A_1\cup A_2 \cup \cdots\cup A_n)=P(A_1)+P(A_2)+\cdots+P(A_n)$$
其中$\mathbf{n}$为正整数.</p>
<p>$\color{blue}\bf{性质3：}$</p>
<p>P(B-A)=P(B)-P(AB).</p>
<p>特别地，当$A \subset B$时,P(B-A)=P(B)-P(A),且$P(A)\leq P(B)$</p>
<p>$\color{blue}\bf{性质4：}$</p>
<p>$P(\overline{A})=1-P(A)$.</p>
</li>
</ul>
</template>
