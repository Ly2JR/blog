# [第一章 随机事件与概率(4)](https://www.bilibili.com/video/BV1XJ411173b?p=6)

## 条件概率

### 二、全概率公式与贝叶斯公式

  $\color{blue}\bf{全概率公式：}$

  $A_1,A_2,\cdots,A_n$为互不相容的完备事件组(分割),且$P(A_i)>0,i=1,2,\cdots,n$。

  $B=BA_1\cup B A_2 \cup\cdots\cup B A_n$

  则$P(B)=P(A_1)P(B|A_1)+\cdots+P(A_n)P(B|A_n)$。

  $\colorbox{orange}{已知原因查结果或者有先后关系，使用全概率公式。}$

  $\colorbox{orange}{已知结果查原因，使用贝叶斯公式。}$

  $\color{blue}\bf{【题型：】}$

  12个兵乓球都是新球，每次比赛时取出3个，用完后放回。求第三次比赛时取到的三个球都是新球的概率。

  $\color{red}\bf{【答案：0.1458】}$

  $\color{red}\bf{【解析：】}$

  解：设$A_i(i=0,1,2)$分别表示第二次比赛时，恰好取到i个新球，B表示第三次取的三个球都是新球。

  $P(A_0)=\frac{C_3^3}{C_{12}^3},\qquad P(A_1)=\frac{C_9^1 C_3^2}{C_{12}^3},\qquad P(A_2)=\frac{C_9^2 C_3^1}{C_{12}^3},\qquad P(A_3)=\frac{C_9^3 C_3^0}{C_{12}^3}$

  $P(B|A_0)=\frac{C_9^3}{C_{12}^3},\qquad P(B|A_1)=\frac{C_8^3}{C_{12}^3},\qquad P(B|A_2)=\frac{C_7^3}{C_{12}^3},\qquad P(B|A_3)=\frac{C_6^3}{C_{12}^3}$

  $$P(B)=\sum_{i=0}^3 P(A_i)P(B|A_i)=0.1458$$

  $\color{blue}\bf{贝叶斯公式：}$

  设$B_1,B_2,\cdots,B_n$为样本空间$E$的一个划分,$P(B_j)>0$,且$P(A|B_j)$都存在，则

  $$P(B_i|A)=\frac{P(AB_i)}{P(A)}=\frac{P(B_i)P(A|B_i)}{\sum_{j=1}^n P(B_j)P(A|B_j)}$$

  $\color{red}\bf{方法:全概率公式+乘法公式}$

  $\color{blue}\bf{【题型：】}$

  设系统只传输0和1,系统的传真率都是$p$，系统以2:1的比率发出0和1。现收到的信号都是1，问：原发信号是1的概率是多少?

  $\color{red}\bf{【答案：0.1458】}$

  $\color{red}\bf{【解析：】}$

  解:设$B$表示“发出的信号是1”，$A$表示“收到的信号是1”.

  已知$P(B)=\frac{1}{3},P(\overline{B})=\frac{2}{3}$

  $P(A|B)=P,P(A|\overline{B})=1-p$

  $P(B|A)=\frac{P(AB)}{P(A)}=\frac{P(B)P(A|B)}{P(B)P(A|B)+P({\overline{B})P(A|\overline{B})}}=\frac{p}{2-p}$

  $\color{blue}\bf{【题型：】}$

  一批随意混放的零件是由1号、2号、3号机床加工的，它们加工的零件的合格率依次分别是90%，92%和94%。它们加工的零件的数量比例为1:2:1。

  求:(1) 这批零件的合格率。
  (2) 已知从中随机取一零件是不合格，求次零件是1号机床加工的概率。

  $\color{red}\bf{【答案：】(1):0.92} (2):0.3125$

  $\color{red}\bf{【解析：】}$

  解:设$B_1、B_2,B_3$分别表示所取零件是1号、2号、3号机床加工的。
  又设$A$表示所取产品为合格品，则依题意

  $P(B_1)=\frac{1}{4},P(B2)=\frac{2}{4},P(B3)=\frac{1}{4},$

  $P(A|B_1)=90\% ,P(A|B2)=92\%,P(A|B_3)=94\%,$

  (1):
  
  $P(A)=P(B1)P(A|B_1)+P(B_2)P(A|B2)+P(B_3)P(A|B_3)=\frac{1}{4}*0.90+\frac{2}{4}*0.92+\frac{1}{4}*0.94=0.92$

  (2):
  
  $\because P(B_1)=\frac{1}{4},P(A|B_1)=90\%,P(A)=0.92$

  $\therefore P(B_1|\overline{A})=\frac{P(\overline{A}B_1)}{P(\overline{A})}=\frac{P(B_1)P(\overline{A}|B_1)}{1-P(A)}$

  $\because P(\overline{A}|B_1)=1-P(A|B_1)$

  $\therefore P(B_1|\overline{A})=\frac{\frac{1}{4}\times(1-0.90)}{1-0.92}=0.3215$
  
抽签问题：10个考题，4难，6易。

$P(A)=\frac{4}{10}，P(\overline{A})=\frac{6}{10},$

$P(B|A)=\frac{3}{9},P(B|\overline{A}=\frac{4}{9}),$

$B=AB\cup\overline{A}B$

$P(B)=P(A)P(B|A)+P(\overline{A})P(B|\overline{A})=\frac{4}{10}*\frac{3}{9}+\frac{6}{10}*\frac{4}{9}=\frac{4}{10}$

$P(B)=P(A)$,抽签是公平的！

$\color{blue}\bf{【例题：】}$

已知甲袋中有3个白球、2个红球；乙袋中有1个白球、2个红球。现从甲袋中任取一球放入乙袋，再从乙袋中任取一球，求该球是白球的概率。

$\colorbox{orange}{已知原因查结果或者有先后关系，使用全概率公式。}$

$\color{red}\bf{【答案：\frac{2}{5}}】$

$\color{red}\bf{【解析：】}$

解：设A={从甲袋中取出的是白球}，B={从乙袋中取出的是白球}

则从甲袋中取出的是白球的概率为$P(A)=\frac{3}{5}$

从甲袋中取出的是红球的概率为$P(\overline{A})=\frac{2}{5}$

从甲袋中取出白球后从乙袋中取出白球的概率为$P(B|A)=\frac{2}{4}$

从甲袋中取出红球后从乙袋中取出白球的概率为$P(B|\overline{A})=\frac{1}{4}$

则第二次取到白球的概率为:

$P(B)=P(A)P(B|A)+P(\overline{A})P(B|\overline{A})=\frac{3}{5}*\frac{2}{4}+\frac{2}{5}*\frac{1}{4}=\frac{8}{20}=\frac{2}{5}$

$\color{blue}\bf{【例题：】}$

设甲、乙、丙三个工厂生产同一种产品，由于各工厂规模与设备、技术的差异，三个工厂产品数量比例为1：2：1，且产品次品率分别为1%，2%，3%。

求：（1）从该产品中任取1件，其为次品的概率$P_1$。

（2）在取出1件产品是次品的条件下，其为丙厂生产的概率$P_2$。

$\colorbox{orange}{1、已知原因查结果或者有先后关系，使用全概率公式。}$

$\colorbox{orange}{2、已知结果查原因，使用贝叶斯公式。}$

$\color{red}\bf{【答案：（1）P_1=0.02；（2）P_2=0.375】}$

$\color{red}\bf{【解析：】}$

设B表示这1件产品是次品，$A_1,A_2,A_3$分别表示取出的是由甲乙丙三个工厂生产的产品。

则由已知得

$P(A_1)=\frac{1}{4},P(A_2)=\frac{1}{2},P(A_3)=\frac{1}{4}。$

$P(B|A_1)=0.01,P(B|A_2)=0.02,P(B|A_3)=0.03$

(1)由全概率公式得

$P_1=P(B)=P(A_1)P(B|A_1)+P(A_2)P(B|A_2)+P(A_3)P(B|A_3)=\frac{1}{4}*0.01+\frac{1}{2}*0.02+\frac{1}{4}*0.03=0.02$

(2)由贝叶斯公式得

$P_2=P(A_3|B)=\frac{P(A_3)P(B|A_3)}{P(B)}=0.375$
