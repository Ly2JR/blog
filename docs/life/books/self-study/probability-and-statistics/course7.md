# [第一章 随机事件与概率(5)](https://www.bilibili.com/video/BV1XJ411173b?p=7)

## 一、事件的独立性

问：如何描述事件A、B之间互不影响的关系？

$P(B|A)=P(B)    P(A|B)=P(A)$

定义：若$P(AB)=P(A)P(B)$,则称事件A和B互相独立。

结论：若事件A和B互相独立,则$A与\overline{B},\overline{A}与B,\overline{A}与\overline{B}也相互独立。$

定义：若事件$A_1,A_2,\cdots,A_n$满足条件

$P(A_{i1} A_{i2} \cdots A_{ik})=P(A_{i1})P(A_{i2})\cdots P(A_{ik})(k=1,\cdots,n)$

称事件$A_1,A_2,\cdots,A_n$相互独立。

根据题意得到独立性，再求事件乘积的概率。

$\color{blue}\bf{【例题：】}$

甲、乙、丙三部机床独立工作，由一个工人照管。某段时间内他们不需要工人照管的概率分别为0.9，0.85，0.8。求这段时间内有机床需要工人照管的概率。

$\color{red}\bf{【答案：0.388}$

$\color{red}\bf{【解析：】}$

解：设A、B、C分别表示机床甲、乙、丙需要工人照管，依题意，A、B、C相互独立。

已知:$P(A)=0.1，P(B)=0.15,P(C)=0.2$

$P(A\cup B\cup C)=1-P(\overline{A\cup B\cup C})=1-P(\overline{A}\overline{B}\overline{C})=1-P(\overline{A})P(\overline{B})P(\overline{C})=1-0.9*0.85*0.8=0.388$
