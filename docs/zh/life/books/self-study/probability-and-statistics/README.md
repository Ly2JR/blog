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

    设A，B为两个事件，若A发生**必然**导致B发生，则称**事件B包含事件A，或称事件A包含在事件B中**,记B$\supset$A，或A$\subset$B。

    显然有：$\phi\subset\mathbf{A}\subset\Omega$

  - 2. 和事件

    称事件“A,B中至少有一共发生”为事件A与事件B的**和事件**,也称**事件A与事件B的并**,记作A$\cup$B,A$\cup\$B发生意味着：或事件A发生，或事件B发生或事件A和事件B都发生.

    显然有:

    1°  $\mathbf{A}\subset\mathbf{A}\cup\mathbf{B}$，$\mathbf{B}\subset\mathbf{A}\cup\mathbf{B}$

    2°  若$\mathbf{A}\subset\mathbf{B}$，则$\mathbf{A}\cup\mathbf{B=B}$

  - 3. 积事件

    称事件“A，B同时发生”为事件A与事件B的**积事件**,也称A与B的**交**,记作A$\cap\$B,简记$\mathbf{AB}$。事件$\mathbf{AB}$发生意味着事件A发生且事件B也发生，也就是说A，B都发生。

    显然有：

    1°  $\mathbf{AB}\subset\mathbf{A}$，$\mathbf{AB}\subset\mathbf{B}$

    2°  若$\mathbf{A}\subset\mathbf{B}$，则$\mathbf{AB=A}$

  - 4. 差事件

    称事件“A发生且B$不发生”为事件A与事件B的**差事件**,记作$\mathbf{A-B}$。

    显然有：

    1°  $\mathbf{A﹣B}\subset\mathbf{A}$

    2°  若$\mathbf{A}\subset\mathbf{B}$，则$\mathbf{A﹣B=}\phi$

  - 5. 互不相容

    若事件A与事件B不能同时发生，既$\mathbf{AB=}\phi$，则称事件A与事件B是互不相融的两个事件，检测A与B**互不相容(或互斥)**。

  - 6. 对立事件

    称事件“A不发生”为事件A$的**逆事件(或余事件,或对立事件)**，记作$\overline{A}$.

    若事件A与事件B中至少有一个发生，且A与B互不相容，记$\mathbf{A}\cap\mathbf{B=}\Omega$,$\mathbf{AB=}\phi$,则称**A与B互为对立事件**。

    显然有:

    1° $\bar{\bar{A}}\mathbf{=A}$.

    2° $\overline{\Omega}\mathbf{=}\phi$,$\overline{\phi}\mathbf{=}\Omega$

    3° $\mathbf{A-B=A}\overline{B}=\mathbf{A-AB}$

<ClientOnly>
  <mjx-container></mjx-container>
</ClientOnly>