# 概率论与数理统计(二)

[MathJax](https://www.mathjax.org/)

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

    设A，B为两个事件，若A发生**必然**导致B发生，则称**事件B包含事件A，或称事件A包含在事件B中**,记$\mathbf{B}\supset\mathbf{A}$，或$\mathbf{A}\subset\mathbf{B}$。

    显然有：$\phi\subset\mathbf{A}\subset\Omega$

  - 2. 和事件

    称事件“$\mathbf{A}$,$\mathbf{B}$中至少有一共发生”为事件$\mathbf{A}$与事件$\mathbf{B}$的**和事件**,也称**事件$\mathbf{A}$与事件$\mathbf{B}$的并**,记作$\mathbf{A}\cup\mathbf{B}$,$\mathbf{A}\cup\mathbf{B}$发生意味着：或事件$\mathbf{A}$发生，或事件$\mathbf{B}$发生或事件$\mathbf{A}$和事件$\mathbf{B}$都发生.

    显然有:

    1°  $\mathbf{A}\subset\mathbf{A}\cup\mathbf{B}$，$\mathbf{B}\subset\mathbf{A}\cup\mathbf{B}$

    2°  若$\mathbf{A}\subset\mathbf{B}$，则$\mathbf{A}\cup\mathbf{B=B}$

  - 3. 积事件

    称事件“$\mathbf{A}$，$\mathbf{B}$同时发生”为事件$\mathbf{A}$与事件$\mathbf{B}$的**积事件**,也称$\mathbf{A}$与$\mathbf{B}$的**交**,记作$\mathbf{A}\cap\mathbf{B}$,简记$\mathbf{AB}$。事件$\mathbf{AB}$发生意味着事件$\mathbf{A}$发生且事件$\mathbf{B}$也发生，也就是说$\mathbf{A}$，$\mathbf{B}$都发生。

    显然有：

    1°  $\mathbf{AB}\subset\mathbf{A}$，$\mathbf{AB}\subset\mathbf{B}$

    2°  若$\mathbf{A}\subset\mathbf{B}$，则$\mathbf{AB=A}$

  - 4. 差事件

    称事件“$\mathbf{A}$发生且$\mathbf{B}$不发生”为事件$\mathbf{A}$与事件$\mathbf{B}$的**差事件**,记作$\mathbf{A-B}$。

    显然有：

    1°  $\mathbf{A﹣B}\subset\mathbf{A}$

    2°  若$\mathbf{A}\subset\mathbf{B}$，则$\mathbf{A﹣B=}\phi$

  - 5. 互不相容

    若事件$\mathbf{A}$与事件$\mathbf{B}$不能同时发生，既$\mathbf{AB=}\phi$，则称事件$\mathbf{A}$与事件$\mathbf{B}$是互不相融的两个事件，检测A与B**互不相容(或互斥)**。

  - 6. 对立事件

    称事件“$\mathbf{A}$不发生”为事件$\mathbf{A}$的**逆事件(或余事件,或对立事件)**，记作$\overline{A}$.

    若事件$\mathbf{A}$与事件$\mathbf{B}$中至少有一共发生，且$\mathbf{A}$与$\mathbf{B}$互不相容，记$\mathbf{A}\cap\mathbf{B=}\Omega$,$\mathbf{AB=}\phi$,则称**A与B互为对立事件**。

    显然有:

    1° $\bar{\bar{A}}\mathbf{=A}$.

    2° $\overline{\Omega}\mathbf{=}\phi$,$\overline{\phi}\mathbf{=}\Omega$

    3° $\mathbf{A-B=A}\overline{B}=\mathbf{A-AB}$