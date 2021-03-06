# [盛炎平-第一章 随机事件与概率(2)](https://www.bilibili.com/video/BV1XJ411173b?p=4)

## 概率

### 一、频率与概率

- 1、频率的定义

  $\bf{在相同条件下,进行了n次试验,在这n次试验中,事件A发生的次数n_A称为事件A发生的频数}$

  比值$n_A/n$称为事件A发生的频率,记作$f_n (A)$

- 2、频率的性质

  设A是随机试验$E$的任一事件，则

  (1) $0\leq f_n(A)\leq 1$

  (2) $f_n(S)=1$

  (3) 若$A_1,A_2,\cdots,A_k$是两两互不相容的事件,则$f_n(A_1\cup A_2\cup\cdots\cup A_k)=f_n(A_1)+f_n(A_2)+\cdots+f_n(A_k)$

  $\because AB=\phi$

  若$A\cup B$发生，即A或B其中之一发生，但A与B不同时发生,
  
  所以$n_{A\cup B}=n_A+n_B$，得$f_\pi(A\cup B)=\frac{n_{A\cup B}}{n}=\frac{n_A}{n}+\frac{n_B}{n}=f_\pi (A)+f_\pi (B)$

### 二、古典概型

  古典概型定义：若随机试验满足下述两个条件:

  (1) 样本空间$S$只包含有限个样本点;

  (2) 每个样本点(基本事件)出现的可能性相同.

  称这种试验为古典概型。

  $\color{blue}\bf{【题型:】}$

  抛掷一枚硬币3次，就以下情形写出样本空间：

  (1) 观察正面$H$反面$T$出现的情况  (2)观察正面$H$出现的次数

  $\color{red}\bf{【解析:】}$

  (1) $S_1={HHH,HHT,HTH,HTT,THH,THT,TTT}$

  (2) $S_2={0,1,2,3}$

  $\color{blue}\bf{概率的古典定义}$

  定义: 设试验$E$的样本空间$S$包含$n$个基本事件，事件$A$包含$k$个基本事件，则有

  $$P(A)=\frac{k}{n}=\frac{A包含的基本事件}{S中基本事件的总数}$$

  该试验称为随机事件A的概率,记作$P(A)$.

  解决古典概型问题的步骤如下:

  1、分析题目是否满足古典概型的条件即"样本空间有限和等可能性"两个条件;

  2、计算出样本空间所包含的所有基本事件的总数$n$;

  3、计算出事件$A$所包含的基本事件个数$k$;

  4、带入公式$P(A)=\frac{k}{n}计算概率$.

  排列组合是计算古典概率的有力工具。

  $\color{blue}\bf{【题型:】}$

  从${1,2,3,4,5}$中随机地取3个数字，求

  (1) 三个数字中最大的是4的概率$P_1$;

  (2) 三个数字中没有3的概率$P_2$;

  $\color{red}\bf{【解析:】}$

  基本事件总数:$C_5^3$

  $A_1$所含的基本事件数=$C_3^2 \qquad \colorbox{orange}{取定4，从1，2，3中选2个}$

  $A_2$所含的基本事件数=$C_4^3 \qquad \colorbox{orange}{从1,2,4,5中取3个}$

  $P_1=\frac{C_3^2}{C_5^3}=\frac{3}{10}; \qquad P_2=\frac{C_4^3}{C_5^3}=\frac{4}{10}$

  $\color{blue}\bf{【题型:】}$

  设有$N$件产品,其中有$D$件次品,现在从中随机取$n$件,

  问:其中恰有$k$件次品的概率是多少?

  $\color{red}\bf{【解析:】}$

  记$A$表示"所取$n$件产品中恰有$k$件次品"

  基本事件总数=$C_N^n$

  $A$所含基本事件数=$C_D^k C_{N-D}^{n-k}$

  $\colorbox{orange}{k件次品随机取自D件次品,其余来自正品。}$

  $P(A)=\frac{C_D^k C_{N-D}^{n-k}}{C_N^n}$

  $\color{blue}\bf{【题型:】}$

  袋中有$a$个白球与$b$个黑球。每次从中取一个球,取出的球不再放回。把球全部取出，求$\color{blue}{第k次取得白球}$的概率。

  $\color{red}\bf{【解析: 排列方法】}$

  $S:a+b$个球看作不同的编号，依次排列在$a+b$个位置，

  有$(a+b)!$种放法;

  $A:$第$k$个位置放白球，有$a$种方法，另外$(a+b-1)$个位置，

  有$(a+b-1)!$种放法。

  $P(A)=\frac{a(a+b-1)!}{(a+b)!}=\frac{a}{a+b}$

### 三、概率的定义与性质

  $\color{blue}\bf{概率的定义}$

  设$E$为随机试验，$S$为$E$的样本空间，对于$E$的每一个事件$A$，赋予一个实数$P(A)$,称作事件$A$发生的概率,其中集合函数$P(.)$满足以下条件:

  (1) 对于任意的事件$A,P(A)\geq 0$

  (2) $P(S)=1$

  (3) 对于任意两两互不相容的事件$A_1,A_2,\cdots,P(A_1\cup A_2 \cup \cdots)=P(A_1)+P(A_2)+\cdots$

  $A_i A_j=\phi,i\neq j$

  $\color{blue}\bf{概率的性质}$

  1、$P(\phi)=0$,即：不可能事件发生的概率为0。

  2、有限可加性

  若$A_i A_j=\phi(i\neq j,i,j=1,2,\cdots n)$,则

  $\color{red}{P(A_1\cup\cdots A_n)=P(A_1)+P(A_2)+\cdots+P(A_n)}$

  不交的有限个集合的总面积=各个集合面积相加.

  推论1:

  对于任意的事件$A$和$B$,有$P(A)=P(AB)+P(A\overline{B})$.

  推论2:

  若$B_1,B_2,\cdots,B_n$是样本空间$S$的一个划分,即$B_1 \cup B_2\cup\cdots\cup B_n=S$且$B_i B_j=\phi(i\neq j)$,则$P(A)=P(A B_1)+P(A B_2)+\cdots+P(A B_n)$

  $P(A\cup B)=P(A)+P(B)-P(AB)$

  $P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(AB)-P(BC)-P(AC)+P(ABC)$

  推论3:

  $P(B-A)=P(B)-P(AB)$,

  推论4:

  对于任意事件$A$，有$P(A)\leq 1$。

  推论5:

  $P(\overline{A})=1-P(A) \qquad  \colorbox{orange}{逆概率公式}$

  $\color{blue}\bf{【题型:】}$

  设$P(A)=\frac{1}{2},P(B)=\frac{1}{3},P(A\cup B)=\frac{7}{12}.$则$P(\overline{AB})$=$\underline{\frac{3}{4}}$

  $\color{red}\bf{【答案:】\frac{3}{4}}$

  $\color{red}\bf{【解析:】}$

  $P(AB)=P(A)+P(B)-P(A\cup B)=\frac{1}{2}+\frac{1}{3}-\frac{7}{12}=\frac{1}{4}$

  $P(\overline{AB})=1-P(AB)=\frac{3}{4}$

  $\color{blue}\bf{【题型:】}$

  盒中有7个球，编号为1至7号，随机取2个，取出球的最小号码是3的概率为($\color{red}{C}$).

  $A \frac{1}{21}. \qquad B \frac{5}{21}. \qquad C \frac{4}{21}. \qquad D \frac{2}{21}$

  $\color{red}\bf{【答案:】C}$

  $\color{red}\bf{【解析:】}$

  本题为古典概型。

  7个球取2个总数为：$C_7^2$。

  最小号码是3,则只能在4、5、6、7种取一个即$C_4^1$。

  所求概率为$\frac{C_4^1}{C_7^2}=\frac{4}{21}$,选C。
