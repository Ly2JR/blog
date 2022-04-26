<template><h1 id="盛炎平-第一章-随机事件与概率-2" tabindex="-1"><a class="header-anchor" href="#盛炎平-第一章-随机事件与概率-2" aria-hidden="true">#</a> <a href="https://www.bilibili.com/video/BV1XJ411173b?p=4" target="_blank" rel="noopener noreferrer">盛炎平-第一章 随机事件与概率(2)<ExternalLinkIcon/></a></h1>
<h2 id="概率" tabindex="-1"><a class="header-anchor" href="#概率" aria-hidden="true">#</a> 概率</h2>
<h3 id="一、频率与概率" tabindex="-1"><a class="header-anchor" href="#一、频率与概率" aria-hidden="true">#</a> 一、频率与概率</h3>
<ul>
<li>
<p>1、频率的定义</p>
<p>$\bf{在相同条件下,进行了n次试验,在这n次试验中,事件A发生的次数n_A称为事件A发生的频数}$。</p>
<p>比值$n_A/n$称为事件A发生的频率,记作$f_n (A)$</p>
</li>
<li>
<p>2、频率的性质</p>
<p>设A是随机试验$E$的任一事件，则</p>
<p>(1) $0\leq f_n(A)\leq 1$</p>
<p>(2) $f_n(S)-1$</p>
<p>(3) 若$A_1,A_2,\cdots,A_k$是两两互不相容的事件,则$f_n(A_1\cup A_2\cup\cdots\cup A_k)=f_n(A_1)+f_n(A_2)+\cdots+f_n(A_k)$</p>
<p>$\because AB=\phi$</p>
<p>若$A\cup B$发生，即A或B其中之一发生，但A与B不同时发生,</p>
<p>所以$n_{A\cup B}=n_A+n_B$，得$f_\pi(A\cup B)=\frac{n_{A\cup B}}{n}=\frac{n_A}{n}+\frac{n_B}{n}=f_\pi (A)+f_\pi (B)$</p>
</li>
</ul>
<h3 id="二、古典概型" tabindex="-1"><a class="header-anchor" href="#二、古典概型" aria-hidden="true">#</a> 二、古典概型</h3>
<p>古典概型定义：若随机试验满足下述两个条件:</p>
<p>(1) 样本空间$S$只包含有限个样本点;</p>
<p>(2) 每个样本点(基本事件)出现的可能性相同.</p>
<p>称这种试验为古典概型。</p>
<p>$\color{blue}\bf{【题型:】}$</p>
<p>抛掷一枚硬币3次，就以下情形写出样本空间：</p>
<p>(1) 观察正面$H$反面$T$出现的情况  (2)观察正面$H$出现的次数</p>
<p>$\color{red}\bf{【解析:】}$</p>
<p>(1) $S_1={HHH,HHT,HTH,HTT,THH,THT,TTT}$</p>
<p>(2) $S_2={0,1,2,3}$</p>
<p>$\color{blue}\bf{概率的古典定义}$</p>
<p>定义: 设试验$E$的样本空间$S$包含$n$个基本事件，事件$A$包含$k$个基本事件，则有</p>
<p>$$P(A)=\frac{k}{n}=\frac{A包含的基本事件}{S中基本事件的总数}$$</p>
<p>该试称为随机事件A的概率,记作$P(A)$.</p>
<p>解决古典概型问题的步骤如下:</p>
<p>1、分析题目是否满足古典概型的条件即&quot;样本空间有限和等可能性&quot;两个条件;</p>
<p>2、计算出样本空间所包含的所有基本事件的总数$n$;</p>
<p>3、计算出事件$A$所包含的基本事件个数$k$;</p>
<p>4、带入公式$P(A)=\frac{k}{n}计算概率$.</p>
<p>排列组合是计算古典概率的有力工具。</p>
<p>$\color{blue}\bf{【题型:】}$</p>
<p>从${1,2,3,4,5}$中随机地取3个数字，求</p>
<p>(1) 三个数字中最大的是4的概率$P_1$;</p>
<p>(2) 三个数字中没有3的概率$P_2$;</p>
<p>$\color{red}\bf{【解析:】}$</p>
<p>基本事件总数:$C_5^3$</p>
<p>$A_1$所含的基本事件数=$C_3^2 \qquad \colorbox{orange}{取定4，从1，2，3中选2个}$</p>
<p>$A_2$所含的基本事件数=$C_4^3 \qquad \colorbox{orange}{从1,2,4,5中取3个}$</p>
<p>$P_1=\frac{C_3^2}{C_5^2}=\frac{3}{10}; \qquad P_2=\frac{C_4^3}{C_5^3}=\frac{4}{10}$</p>
<p>$\color{blue}\bf{【题型:】}$</p>
<p>设有$N$件产品,其中有$D$件次品,现在从中随机取$n$件,</p>
<p>问:其中恰有$k$件次品的概率是多少?</p>
<p>$\color{red}\bf{【解析:】}$</p>
<p>记$A$表示&quot;所取$n$件产品中恰有$k$件次品&quot;</p>
<p>基本事件总数=$C_n^N$</p>
<p>$A$所含基本事件数=$C_k^D C_{N-D}^{n-k}$</p>
<p>$\colorbox{orange}{k件次品随机取自D件次品,其余来自正品。}$</p>
<p>$P(A)=\frac{C_D^k C_{N-D}^{n-k}}{C_N^n}$</p>
<p>$\color{blue}\bf{【题型:】}$</p>
<p>袋中有$a$个白球与$b$个黑球。每次从中取一共球,取出的求不再放回。把球全部取出，求$\color{blue}{第k次取得白球}$的概率。</p>
<p>$\color{red}\bf{【解析: 排列方法】}$</p>
<p>$S:a+b$个球看作不同的编号，依次排列在$a+b$个位置，</p>
<p>有$(a+b)!$种放法;</p>
<p>$A:$第$k$个位置放白球，有$a$种方法，另外$(a+b-1)$个位置，</p>
<p>有$(a+b-1)!$种放法。</p>
<p>$P(A)=\frac{a(a+b-1)!}{(a+b)!}=\frac{a}{a+b}$</p>
<h3 id="三、概率的定义与性质" tabindex="-1"><a class="header-anchor" href="#三、概率的定义与性质" aria-hidden="true">#</a> 三、概率的定义与性质</h3>
<p>$\color{blue}\bf{概率的定义}$</p>
<p>设$E$为随机试验，$S$为$E$的样本空间，对于$E$的每一个事件$A$，赋予一共实数$P(A)$,称作事件$A$发生的概率,其中集合函数$P(.)$满足以下条件:</p>
<p>(1) 对于任意的事件$A,P(A)\geq 0$</p>
<p>(2) $P(S)=1$</p>
<p>(3) 对于任意两两互不相容的事件$A_1,A_2,\cdots,P(A_1\cup A_2 \cup \cdots)=P(A_1)+P(A_2)+\cdots$</p>
<p>$A_i A_j=\phi,i\neq j$</p>
<p>$\color{blue}\bf{概率的性质}$</p>
<p>1、$P(\phi)=0$,即：不可能事件发生的概率为0。</p>
<p>2、有限可加性</p>
<p>若$A_i A_j=\phi(i\neq j,i,j=1,2,\cdots n)$,则</p>
<p>$\color{red}{P(A_1\cup\cdots A_n)=P(A_1)+P(A_2)+\cdots+P(A_n)}$</p>
<p>不交的有限个集合的总面积=各个集合面积相加.</p>
<p>推论1:</p>
<p>对于任意的事件$A$和$B$,有$P(A)=P(AB)+P(A\overline{B})$.</p>
<p>推论2:</p>
<p>若$B_1,B_2,\cdots,B_n$是样本空间$S$的一个划分,即$B_1 \cup B_2\cup\cdots\cup B_n=S$且$B_i B_j=\phi(i\neq j)$,则$P(A)=P(A B_1)+P(A B_2)+\cdots+P(A B_n)$</p>
<p>$P(A\cup B)=P(A)+P(b)-P(AB)$</p>
<p>$P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(AB)-P(BC)-P(AC)+P(ABC)$</p>
<p>推论3:</p>
<p>$P(B-A)=P(B)-P(AB)$,</p>
<p>推论4:</p>
<p>对于任意事件$A$，有$P(A)\leq 1$。</p>
<p>推论5:</p>
<p>$P(\overline{A})=1-P(A) \qquad  \colorbox{orange}{逆概率公式}$</p>
<p>$\color{blue}\bf{【题型:】}$</p>
<p>设$P(A)=\frac{1}{2},P(B)=\frac{1}{3},P(A\cup B)=\frac{7}{12}.$则$P(\overline{AB})$=$\overline{\frac{3}{4}}$</p>
<p>$\color{red}\bf{【答案:】\frac{3}{4}}$</p>
<p>$\color{red}\bf{【解析:】}$</p>
<p>$P(AB)=P(A)+P(B)-P(A\cup B)=\frac{1}{2}+\frac{1}{3}-\frac{7}{12}=\frac{1}{4}$</p>
<p>$P(\overline{AB})=1-P(AB)=\frac{3}{4}$</p>
<p>$\color{blue}\bf{【题型:】}$</p>
<p>盒中有7个球，编号为1至7号，随机取2个，取出球的最小号码是3的概率为($\color{red}{C}$).</p>
<p>$A \frac{1}{21}. \qquad B \frac{5}{21}. \qquad C \frac{4}{21}. \qquad D \frac{2}{21}$</p>
<p>$\color{red}\bf{【答案:】C}$</p>
<p>$\color{red}\bf{【解析:】}$</p>
<p>本题为古典概型。</p>
<p>7个球取2个总数为：$C_7^2$。</p>
<p>最小号码是3,则只能在4、5、6、7种取一个即$C_4^1$。</p>
<p>所求概率为$\frac{C_4^1}{C_7^2}=\frac{4}{21}$,选C。</p>
</template>
