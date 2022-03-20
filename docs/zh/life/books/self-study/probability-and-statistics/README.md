# 概率论与数理统计(二)

<a href="https://www.mathjax.org">
    <img title="由 MathJax 提供支持"
    src="https://www.mathjax.org/badge/mj_logo.png"
    border="0" alt="由 MathJax 提供支持" />
</a>

[markdown-it-mathjax3](https://github.com/nzt/markdown-it-mathjax3)

::: warning
注意与数学上的混淆
:::

::: tip

$\phi$:空集

$\Omega$:样本空间

$\cap$:

$\cup$:

$\subset$:

$\supset$:

$\overline{H}$

:::


## 一、随机事件与概率

### 1、随机事件

- 1.1 随机现象

- 1.2 随机试验和样本空间

- 1.3 随机事件的概念

- 1.4 随机事件的关系运算

  - 1. 事件的包含与相等

    设A，B为两个事件，若A发生**必然**导致B发生，则称**事件B包含事件A，或称事件A包含在事件B中**,记B$\supset$A，或A$\subset$B。

    显然有：$\phi\subset\mathbf{A}\subset\Omega$

  - 2. 和事件

    称事件“A,B中至少有一个发生”为事件A与事件B的**和事件**,也称**事件A与事件B的并**,记作A$\cup$B,A$\cup$B发生意味着：或事件A发生，或事件B发生或事件A和事件B都发生.

    显然有:

    1°  $\mathbf{A}\subset\mathbf{A}\cup\mathbf{B}$，$\mathbf{B}\subset\mathbf{A}\cup\mathbf{B}$

    2°  若$\mathbf{A}\subset\mathbf{B}$，则$\mathbf{A}\cup\mathbf{B=B}$

  - 3. 积事件

    称事件“A，B同时发生”为事件A与事件B的**积事件**,也称A与B的**交**,记作A$\cap$B,简记$\mathbf{AB}$。事件$\mathbf{AB}$发生意味着事件A发生且事件B也发生，也就是说A，B都发生。

    显然有：

    1°  $\mathbf{AB}\subset\mathbf{A}$，$\mathbf{AB}\subset\mathbf{B}$

    2°  若$\mathbf{A}\subset\mathbf{B}$，则$\mathbf{AB=A}$

  - 4. 差事件

    称事件“A发生且B不发生”为事件A与事件B的**差事件** ,记作$\mathbf{A-B}$。

    显然有：

    1°  $\mathbf{A﹣B}\subset\mathbf{A}$

    2°  若$\mathbf{A}\subset\mathbf{B}$，则$\mathbf{A﹣B=}\phi$

  - 5. 互不相容

    若事件A与事件B不能同时发生，既$\mathbf{AB=}\phi$，则称事件A与事件B是互不相融的两个事件，简称A与B**互不相容(或互斥)**。

  - 6. 对立事件

    称事件“A不发生”为事件A的**逆事件(或余事件,或对立事件)**，记作$\overline{A}$.

    若事件A与事件B中至少有一个发生，且A与B互不相容，记$\mathbf{A}\cap\mathbf{B=}\Omega$,$\mathbf{AB=}\phi$,则称**A与B互为对立事件**。

    显然有:

    1° $\bar{\bar{A}}\mathbf{=A}$.

    2° $\overline{\Omega}\mathbf{=}\phi$,$\overline{\phi}\mathbf{=}\Omega$

    3° $\mathbf{A-B=A}\overline{B}=\mathbf{A-AB}$

### 2、概率

- 2.1 频率与概率

  在相同条件下，进行了n次实验，在这n次实验中，事件A发生的次数$n_A$称为事件A发生的**频数**,而比值$\frac{n_A}{n}$称为事件A发生的**频率**,并记作$f_n(A)$。

  随着试验重复次数n的大量增加,频率$f_n(A)$会逐渐稳定与某一常数，称这个常数为频率的稳定值，这个稳定值就是事件A的概率**P(A)**。

  有频率的定义很容易证明下列基本性质：

  （1） $0\leq{f_n(A)}\leq{1}$

  进行n次试验，事件A发生$n_A$次,$0\leq{n_a}\leq{n}$,则
  
  $$0\leq{f_n(A)}=\frac{n_A}{n}\leq{1}$$

  （2） $f_n(\phi)=0,f_n(\Omega)=1$

  进行n次试验，不可能事件$\phi$一次也不发生，既$n_\phi=0$,故
  
  $$f_n(\phi)=\frac{n_\phi}{n}=\frac{0}{n}=0$$

  又因为必然事件$\Omega$一定发生n次，既$n_\Omega=n$，从而
  
  $$f_n(\Omega)=\frac{n_\Omega}{n}=\frac{n}{n}=1$$

  （3） 若A与B互不相容，则$f_n(A{\cup}B)=f_n(A)+f_n(B)$

  事实上，进行n次试验，事件A发生的次数为$n_A$，事件B发生的次数为$n_B$，因为A与B互不相容，$AB=\phi$，所以
  $A{\cup}B$发生次数$n_{A{\cup}B}=n_A+n_B$，故
  
  $$f_n(A{\cup}B)=\frac{n_{A{\cup}B}}{n}=\frac{n_A+n_B}{n}=\frac{n_A}{n}+\frac{n_B}{n}=f_n(A)+f_n(B)$$

  这个性质可以推广：当$A_1,A_2,\cdots,A_m,\cdots$互不相容时,
  
  $$ f_n( \bigcup_{k=1}^{m} A_k)=\sum_{k=1}^{m} f_n(A_k)$$

  其中m是正整数,当$A_1,A_2,\cdots,A_m,\cdots$互不相容时,

  $$ f_n( \bigcup_{k=1}^{\infty} A_k)=\sum_{k=1}^{\infty} f_n(A_k)$$

  由于频率是概率的近似值，因此不难想到概率P(A)也应有类似特征。

- 2.2 古典概型

  具有下面两个特点的随机试验的概率模型，称为**古典概型**
  （1）基本事件的总数是有限的，换句话说样本空间仅含有有限个样本点。
  （2）每个基本事件发生的可能性相同。

  古典概型事件概率的计算公式。设$\Omega$为随机试验$\mathbf{E}$的样本空间，其中所含样本点总数为$\mathbf{n}$,
  $\mathbf{A}$为一随机事件，其中所含样本点数为$\mathbf
  {r}$,则有
  $$ 
    P(A)=\frac{r}{n}=\frac{A中样本点数}{\Omega中样本点总数},
  $$

  $$
    P(A)=\frac{r}{n}=\frac{A所包含的基本事件数}{基本事件总数}
  $$

- 2.3 概率的定义与性质

  **定义1** 设$\Omega$是随机实验$\mathbf{E}$的样本空间，对于$\mathbf{E}$的每个事件$\mathbf{A}$赋予一共实数，记作$\mathbf{P(A)}$,
  称$\mathbf{P(A)}$为**事件A的概率**,如果它满足下列条件：

  1、$P(A)\geq 0$ ;

  2、$P(\Omega)=1$ ;

  3、设$A_1,A_2,\cdots,A_m,\cdots$是一列互不相容的事件,则有
  $$
    P( \bigcup_{k=1}^{\infty} A_k)=\sum_{k=1}^{\infty}P(A_k)
  $$

  **性质1**   $0\leq P(A)\leq 1,P(\phi)=0$

  **性质2**   对于任意事件A,B有
  $$
    P(A\cup B)=P(A)+P(B)-P(AB).
  $$
  特别地，当A与B互不相容时,
  $$
    P(A\cup B)=P(A)+P(B)
  $$
  性质2可推广：对于任意事件A,B,C有
  $$
    P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC),
  $$
  当$A_1,A_2,\cdots,A_n$互不相容时,
  $$
    P(A_1\cup A_2 \cup \cdots\cup A_n)=P(A_1)+P(A_2)+\cdots+P(A_n)
  $$
  其中$\mathbf{n}$为正整数.

  **性质3** P(B-A)=P(B)-P(AB).

  特别地，当$A \subset B$时,P(B-A)=P(B)-P(A),且$P(A)\leq P(B)$

  **性质4** $P(\overline{A})=1-P(A)$.