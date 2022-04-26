<template><h1 id="盛炎平-第一章-随机事件与概率-4" tabindex="-1"><a class="header-anchor" href="#盛炎平-第一章-随机事件与概率-4" aria-hidden="true">#</a> <a href="https://www.bilibili.com/video/BV1XJ411173b?p=6" target="_blank" rel="noopener noreferrer">盛炎平-第一章 随机事件与概率(4)<ExternalLinkIcon/></a></h1>
<h2 id="条件概率" tabindex="-1"><a class="header-anchor" href="#条件概率" aria-hidden="true">#</a> 条件概率</h2>
<h3 id="二、全概率公式与贝叶斯公式" tabindex="-1"><a class="header-anchor" href="#二、全概率公式与贝叶斯公式" aria-hidden="true">#</a> 二、全概率公式与贝叶斯公式</h3>
<p>$\color{blue}\bf{全概率公式：}$</p>
<p>$A_1,A_2,\cdots,A_n$为互不相容的完备事件组(分割),且$P(A_i)&gt;0,i=1,2,\cdots,n$。</p>
<p>$B=BA_1\cup B A_2 \cup\cdots\cup B A_n$</p>
<p>则$P(B)=P(A_1)P(B|A_1)+\cdots+P(A_n)P(B|A_n)$。</p>
<p>$\colorbox{orange}{已知原因查结果或者有先后关系，使用全概率公式。}$</p>
<p>$\colorbox{orange}{已知结果查原因，使用贝叶斯公式。}$</p>
<p>$\color{blue}\bf{【题型：】}$</p>
<p>12个兵乓球都是新球，每次比赛时取出3个，用完后放回。求第三次比赛时取到的三个球都是新球的概率。</p>
<p>$\color{red}\bf{【答案：0.1458】}$</p>
<p>$\color{red}\bf{【解析：】}$</p>
<p>解：设$A_i(i=0,1,2)$分别表示第二次比赛时，恰好取到i个新球，B表示第三次取的三个球都是新球。</p>
<p>$P(A_0)=\frac{C_3^3}{C_12^3},\qquad P(A_1)=\frac{C_9^1 C_3^2}{C_12^3},\qquad P(A_2)=\frac{C_9^2 C_3^1}{C_12^3},\qquad P(A_3)=\frac{C_9^3 C_3^0}{C_12^3}$</p>
<p>$P(B|A_0)=\frac{C_9^3}{C_12^3},\qquad P(B|A_1)=\frac{C_8^3}{C_12^3},\qquad P(B|A_2)=\frac{C_7^3}{C_12^3},\qquad P(B|A_3)=\frac{C_6^3}{C_12^3}$</p>
<p>$$P(B)=\sum_{i=0}^3 P(A_i)P(B|A_i)=0.1458$$</p>
<p>$\color{blue}\bf{贝叶斯公式：}$</p>
<p>设$B_1,B_2,\cdots,B_n$为样本空间$E$的一个划分,$P(B_j)&gt;0$,且$P(A|B_j)$都存在，则</p>
<p>$$P(B_i|A)=\frac{P(AB_i)}{P(A)}=\frac{P(B_i)P(A|B_i)}{\sum_{j=1}^n P(B_j)P(A|B_j)}$$</p>
<p>$\color{red}\bf{方法:全概率公式+乘法公式}$</p>
<p>$\color{blue}\bf{【题型：】}$</p>
<p>设系统只传输0和1,系统的传真率都是$p$，系统以2:1的比率发出0和1。现收到的信号都是1，问：原发信号是1的概率是多少?</p>
<p>$\color{red}\bf{【答案：0.1458】}$</p>
<p>$\color{red}\bf{【解析：】}$</p>
<p>解:设$B$表示“发出的信号是1”，$A$表示“收到的信号是1”.</p>
<p>已知$P(B)=\frac{1}{3},P(\overline{B}=frac{2}/{3})$</p>
<p>$P(A|B)=P,P(A|\overline{B})=1-p$</p>
<p>$P(B|A)=\frac{P(AB)}{P(A)}=\frac{P(B)P(A|B)}{P(B)P(A|B)+P({\overline{B})P(A|\overline{B})}}=\frac{p}{2-p}$</p>
<p>$\color{blue}\bf{【题型：】}$</p>
<p>一批随意混放的零件是由1号、2号、3号机床加工的，它们加工的零件的合格率依次分别是90%，92%和94%。它们加工的零件的数量比例为1:2:1。</p>
<p>求:(1) 这批零件的合格率。</p>
<p>(2) 已知从中随机取一零件是不合格，求次零件是1号机床加工的概率。</p>
</template>
