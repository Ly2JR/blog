# [盛炎平-第一章 随机事件与概率(1)](https://www.bilibili.com/video/BV1XJ411173b?p=3)

## 随机事件

### 一、随机现象

- 1、确定性现象

  $\color{red}\bf{在一定条件下必然发生的现象称为确定性现象。}$

- 2、随机现象

  $\color{red}\bf{在一定条件下可能出现也可能不出现的现象称为随机现象。}$

### 二、随机试验与样本空间

- 1、随机试验

  在概率论中，把具有以下$\color{red}\bf{三个特征}$的试验称为$\color{red}\bf{随机试验}$

  (1) 可以在相同的条件下重复地进行；

  (2) 每次试验的可能结果不止一个，并且能事先明确试验的所有可能结果；

  (3) 进行一次试验之前不能确定哪一个结果。

  $\color{blue}\bf{【题型:】}$

  "抛掷一枚硬币，观察字面，花面出现的情况"。

  $\color{red}\bf{【解析:】}$

  (1) 试验可能在相同的条件下重复地进行;

  (2) 试验的所有可能结果:$\color{red}\bf{字面、画面}$；

  (3) 进行一次试验之前不能确定哪一个结果会出现。

  故为随机试验。

- 2、样本空间、样本点

  $\color{blue}\bf{定义:}$

  随机试验$E$的所有可能结果组成的集合称为$E$的样本空间，记作$\Omega$。
  样本空间的元素，即试验$E$的每一个结果，称为样本点。

  $\color{blue}\bf{【题型:】}$

  投掷硬币，观察正反面的试验，写出样本空间。

  $\color{red}\bf{【解析:】}$

  两个样本点：正面、反面，样本点为有限个;

  样本空间:$S1$={正面,反面}。

### 三、随机事件的概念

- 1、基本概念

  随机试验$E$的样本空间$S$的子集称为$E$的$\color{red}{随机事件}$,简称事件。

  每次实验中，当且仅当这一子集中的一个样本点出现时称这一$\color{red}\bf{事件发生}$.

  由一个样本点组成的单点集，称为$\color{red}\bf{基本事件}$

  样本空间$S$所有的样本点，它是$S$自身的子集，在每次实验中它总是发生的，$\color{red}\bf{S称为必然事件}$。

  空集$\phi$不包含任何点，它也作为样本空间的子集，它在每次实验中都不发生，$\color{red}\bf{\phi称为不可能事件}$。

  必然事件的对立面是不可能事件，不可能事件的对立面是必然事件，她们互称为$\color{red}\bf{对立事件}$。

  $\color{blue}\bf{【题型:】}$

  投掷一枚骰子，观察出现的点数的试验。

  $\color{red}\bf{【解析:】}$

  样本空间$S={1,2,3,4,5,6}$

  A={点数为6}**即**$\qquad A={6}$

  B={点数为偶数}   $\qquad B={2,4,6}$

  C={点数小于5}    $\qquad C={1,2,3,4,}$

  D={点数小于7}    $\qquad D={1,2,3,4,5,6}$

  E={点数大于6}    $\qquad E=\phi$

  任一随机事件都是样本空间的一个子集;

  必然事件$\color{red}\bf{即样本空间}$    不可能事件$\color{red}\bf{即空集}$

- 几点说明

  (1) 随机事件可简称为事件，并以$\color{red}{大写英文字母}$A,B,C来表示事件。

  $\color{blue}\bf{【题型:】}$

  抛掷一枚骰子，观察出现的点数。可设A="点数不大于4"，B="点数为奇数"等等.

  (2) 随机试验、样本空间与随机事件的关系

  每一个随机试验相应地有一个样本空间，样本空间的子集就是随机事件。
  
### 四、随机事件的关系与运算

  设实验的样本空间为$S$。而$A,B,A_k(K=1,\cdots)$是$S$的子集。

  1、若$A\subset B$,则称$\color{red}{事件A包含于事件B}$。这指的是事件A发生必然导致事件B发生。

  若$A\subset B 且B\subset A$,则称$\color{red}{事件A与事件B相等}$

  2、事件$A\cup B={x|x\in A 或 x\in B},\color{red}{称为事件A与事件B的和事件}$,当且仅当$A,B$中至少有一个发生时，事件$A\cup B$发生

  $\color{red}\bf{推广}$
  $$\bigcup_{k=1}^{n} A_k 为n个事件A_1,A_2,\cdots,A_n的和事件$$

  3、事件$A\cap B={x|x\in A且x\in B}$,称为事件A与事件B的积事件，当且仅当A,B同时发生时事件$A\cap B$发生，$A\cap B$也记作$AB$.

  类似地,

  $$\bigcap_{k=1}^{n} A_k 为n个事件A_1,A_2,\cdots,A_n的积事件$$

  4、事件$A-B={x|x\in A 且x\notin B}$，称为事件A与事件B的差事件,当且仅当A发生,B不发生时,$A-B$发生。

  5、若$A\cap B=\phi$，$\color{red}{则称事件A与B是互不相融，或互斥的}$,这指的是事件A与事件B不能同时发生，基本事件是两两互不相容的。

  $\color{blue}\bf{【题型:】}$

  "骰子出现1点"$\underleftrightarrow{互斥}$"骰子出现2点"

  "出现花面"与"出现字面"是$\color{red}{互不相容}$的两个事件。

  6、若$A\cup B=S且A\cap B=\phi\color{red}{则称事件A与事件B互为逆事件}$，又称事件A与事件B互为对立事件。

  A对立事件记为$\overline{A},\overline{A}=S-A$.

  $\color{blue}\bf{【题型:】}$

  "骰子出现1点"$\underleftrightarrow{对立}$"骰子不出现1点"

  7、互不相融的完备事件组

  设有$n$个事件$A_1,A_2,\cdots,A_n$,如果其满足:

  (1)$A_{i} A_{j}=\phi,(i\neq j,i,j=1,2,\cdots,n)$

  (2)

  $$\bigcup_{i=1}^{n} A_i =S$$

  则称$A_1,A_2,\cdots,A_n$构成互不相容的完备事件组。

  显然$A与\overline{A}$构成互不相容的完备事件组。

  $\color{blue}\bf{【题型:】}$

  投掷一枚骰子，观察出现的点数的试验。

  若$A={6},B={2,4},C={1,3,5}$

  问事件A,B,C能否构成一个互不相容的完备事件组？

  $\color{red}\bf{【解析:】}$

  1、$A\cap B=\phi,A\cap C=\phi,B\cap C=\phi$

  2、$A\cup B\cup C=S$

  据定义，事件A,B,C能构成一个互不相容的完备事件组。

  $\color{blue}\bf{事件间的运算规律}$

  设A,B,C为事件，则有

  (1) 交换律 $\qquad A\cup B=B\cup A;\qquad  A\cap B=B\cap A$.

  (2) 结合律 $\qquad A\cup(B\cup C)=(A\cup B)\cup C;\qquad A\cap(B\cap C)=(A\cap B)\cap C$;

  (3) 分配律 $\qquad A\cup (B\cap C)=(A\cup B)\cap(A\cup C);\qquad A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$.

  (4)德.摩根律 $\qquad\overline{A\cup B}=\overline{A}\cap\overline{B};\qquad \overline{A\cap B}=\overline{A}\cup\overline{B}$.

  $\color{blue}\bf{【题型:】}$

  设A,B为随机事件，则事件"A,B至少有一个发生"可由A，B表示为$\underline{\color{red}{A\cup B}}$.

  $\color{red}\bf{【答案:】A\cup B}$

  $\color{red}\bf{【解析:】}$

  "A,B至少有一个发生",可表示为:$A\cup B$
