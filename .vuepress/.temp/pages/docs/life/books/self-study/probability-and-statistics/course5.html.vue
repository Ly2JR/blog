<template><h1 id="盛炎平-第一章-随机事件与概率-3" tabindex="-1"><a class="header-anchor" href="#盛炎平-第一章-随机事件与概率-3" aria-hidden="true">#</a> <a href="https://www.bilibili.com/video/BV1XJ411173b?p=5" target="_blank" rel="noopener noreferrer">盛炎平-第一章 随机事件与概率(3)<ExternalLinkIcon/></a></h1>
<h2 id="条件概率" tabindex="-1"><a class="header-anchor" href="#条件概率" aria-hidden="true">#</a> 条件概率</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>抽签原理:(无放回)抽签</p>
<p>每个人抽中签的概率相同。</p>
<p>$P\lbrace第k个人抽中签\rbrace=P\lbrace第一个人抽中签\rbrace$</p>
</div>
<h3 id="一、条件概率与乘法公式" tabindex="-1"><a class="header-anchor" href="#一、条件概率与乘法公式" aria-hidden="true">#</a> 一、条件概率与乘法公式</h3>
<p>$\color{blue}\bf{【题型:】}$</p>
<p>设袋中有10个考签,其中4给难签，按甲、乙、丙先后顺序抽签，设A、B、C分布表示甲、乙、丙抽到难签。</p>
<p>$\color{red}\bf{【答案:】}$</p>
<p>(1) 乙抽到难签的概率为：$\color{red}{\frac{4}{10}}$</p>
<p>(2) 在A发生的前提条件下,乙抽到难签的概率为：$\color{red}{\frac{3}{9}}$</p>
<p>$\color{red}\bf{【分析:】}$</p>
<p>(1) $P(A)=\frac{C_4^1}{C_10^1}$</p>
<p>(2) $P(B)=\frac{C_3^1}{C_9^1}$</p>
<p>$\color{blue}\bf{定义}$</p>
<p>设A、B是任何两个事件，$P(A)&gt;0$，则称$\frac{P(AB)}{P(A)}$为A发生的条件下，B发生的条件概率，记作</p>
<p>$$P(B|A)=\frac{P(AB)}{P(A)}$$</p>
<p>$P(B|A)$就是在A发生的前提条件下，计算B发生的概率。</p>
<p>$\color{blue}\bf{【题型:】}$</p>
<p>一只口袋中装还有4白2红共6只球，从袋中取球2次，每次取一只(不放回)，求:</p>
<p>(1) 第一个次取白球的情况下，第二次仍取白球的概率。</p>
<p>$\color{red}\bf{【答案:】} \frac{3}{5}$</p>
<p>$\color{red}\bf{【解析:】}$</p>
<p>第一种古典概型解法:</p>
<p>“第一次取白起的情况下”是条件，即n：$C_5^1$</p>
<p>&quot;第二次仍取白球的概率&quot;即k：$C_3^1$</p>
<p>则$P(A)=\frac{C_3^1}{C_5^1}=\frac{3}{5}$</p>
<p>第二种条件概率解法：</p>
<p>设$A_1,A_2$分别表示第一、二次取白球，则</p>
<p>总基本事件数=6*5=30</p>
<p>$A_1 A_2$所含的基本事件数=4*3=12</p>
<p>$A_1$所含基本事件数=4<em>3+4</em>2=20</p>
<p>则$P(A_2|A_1)=\frac{P(A_2 A_1)}{P(A_1)}=\frac{12}{20}=\frac{3}{5}$</p>
<p>$\color{blue}\bf{乘法公式}$</p>
<p>定理:设$P(A)&gt;0$则$P(AB)=P(A)P(B|A)$.</p>
<p>注1：设$P(B)&gt;0$,则$P(AB)=P(B)P(A|B)$.</p>
<p>多个乘积情形:</p>
<p>设$P(A_1 A_2\cdots A_n)&gt;0$,则</p>
<p>$P(A_1 A_2\cdots A_n)=P(A_1 A_2\cdots A_{n-1})P(A_n|A_1 \cdots A_{n-1})=P(A_1) P(A_2|A_1)\cdots P(A_{n-1}|A_1\cdots A_{n-2})P(A_n|A_1\cdots A_{n-1})$</p>
<p>$\color{blue}\bf{【题型:】}$</p>
<p>设袋中有10个考签，其中4个难签，按甲、乙、丙先后顺序抽取，求甲乙丙都抽到难签的概率。</p>
<p>$\color{red}\bf{【答案:】0.03}$</p>
<p>$\color{red}\bf{【解析:】}$</p>
<p>解:设A、B、C分别表示甲乙丙抽到难签，依题意，</p>
<p>$P(A)=\frac{C_4^1}{C_{10}^1}=\frac{4}{10}$,$P(B|A)=\frac{C_3^1}{C_9^1}=\frac{3}{9}$,$P(C|AB)=\frac{C_2^1}{C_{8}^1}=\frac{2}{8}$</p>
<p>$P(ABC)=P(A)P(B|A)P(C|AB)=\frac{4}{10}<em>\frac{3}{9}</em>\frac{2}{8}=0.033$</p>
<p>甲乙丙都抽到难签的概率为0.033.</p>
<p>$\color{blue}\bf{【题型:】}$</p>
<p>设袋中装有r只红球，t只白球，每次从袋中随机取球一只，观察其颜色后放回，并放入$\alpha$个同色球，如此连续取球三次，试求第一、二次取红球且第三次取白球的概率。</p>
<p>$\color{red}\bf{【答案:】} \frac{t}{r+t+2\alpha}<em>\frac{r+\alpha}{r+t+\alpha}</em>\frac{r}{r+t}$</p>
<p>$\color{red}\bf{【解析:】}$</p>
<p>解:设$A_i(i=1,2,3)$分别表示第$i$次取红球，则</p>
<p>$P(A_1)=\frac{C_r^1}{C_{r+t}^1}=\frac{r}{r+t}$</p>
<p>$P(A_2|A_1)=\frac{C_{r+\alpha}^1}{C_{r+t+\alpha}^1}=\frac{r+\alpha}{r+t+\alpha}$</p>
<p>$P(\overline{A_3}|A_1 A_2)=\frac{C_t^1}{C_{r+t+2\alpha}^1}=\frac{t}{r+t+2\alpha}$</p>
<p>$P(A_1 A_2 \overline(A_3))=P(A_1)P(A_2|A_1)P(\overline(A_3)|A_1 A_2)=\frac{t}{r+t+2\alpha}<em>\frac{r+\alpha}{r+t+\alpha}</em>\frac{r}{r+t}$</p>
</template>
