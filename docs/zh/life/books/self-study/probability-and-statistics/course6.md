# [盛炎平-第一章 随机事件与概率(4)](https://www.bilibili.com/video/BV1XJ411173b?p=6)

## 条件概率

- 二、全概率公式与贝叶斯公式

$\color{blue}\bf{全概率公式：}$

$A_1,A_2,\cdots,A_n$为互不相容的完备事件组(分割),且$P(A_i)>0,i=1,2,\cdots,n$。

$B=BA_1\cup B A_2 \cup\cdots\cup B A_n$

则$P(B)=P(A_1)P(B|A_1)+\cdots+P(A_n)P(B|A_n)$。

$\colorbox{orange}{已知原因查结果或者有先后关系，使用全概率公式。}$

$\colorbox{orange}{已知结果查原因，使用贝叶斯公式。}$

$\color{blue}{【题型：】}$

12个兵乓球都是新球，每次比赛时取出3个，用完后放回。求第三次比赛时取到的三个球都是新球的概率。

$\color{red}{【答案：0.1458】}$

$\color{red}{【解析：】}$

解：设$A_i(i=0,1,2)$分别表示第二次比赛时，恰好取到i个新球，B表示第三次取的三个球都是新球。

$P(A_0)=\frac{C_3^3}{C_12^3},\qquad P(A_1)=\frac{C_9^1 C_3^2}{C_12^3},\qquad P(A_2)=\frac{C_9^2 C_3^1}{C_12^3},\qquad P(A_3)=\frac{C_9^3 C_3^0}{C_12^3}$

$P(B|A_0)=\frac{C_9^3}{C_12^3},\qquad P(B|A_1)=\frac{C_8^3}{C_12^3},\qquad P(B|A_2)=\frac{C_7^3}{C_12^3},\qquad P(B|A_3)=\frac{C_6^3}{C_12^3}$

$$P(B)=\sum_{i=0}^3 P(A_i)P(B|A_i)=0.1458$$

$\color{blue}\bf{贝叶斯公式：}$
