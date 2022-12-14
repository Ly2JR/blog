# [第二章 随机变量及其概率分布(3)](https://www.bilibili.com/video/BV1XJ411173b?p=10)

## 第三节 连续型随机变量及其概率密度

定义.设随机变量X的分布函数为F(x),如果存在实数轴上的一个非负函数f(x)，使得对任意实数x,有

$$
F(x)=\int_{-\infty}^x f(t)\mathrm{d}t
$$

则称X为连续随机变量,f(x)为X的概率密度函数，简称密度函数，或密度。

显然$F'(x)=f(x)$

密度函数的性质

1. $$f(x) \geq 0$$
2. $$\int_{-\infty}^{\infty} f(x)\mathrm{d}x=1$$

    注:连续型随机变量在单点处的概率为零:$P\{X=c\}=0$

    证明:

    $$
    \begin{array}{lcl}
    0\leq P\{X=c\}\leq P\{c-\Delta x<X\leq c\} \\
    =\lim_{\Delta x \to 0+}\int_{c-\Delta x}^{c} f(x)\mathrm{d}x=0 \\
    \therefore P(X=c)=0\\
    \end{array}
    $$

3. $$P\{a<X<b\}=P\{a<X\leq b\}=\int_{a}^{b} f(x)\mathrm{d}x$$

$\color{blue}\bf{【例题：】}$

设X具有一下概率密度

$
f(x)=\begin{cases}
kx=1 \qquad 0\leq x\leq 2 \\
0   \qquad 其他
\end{cases}
$

求

(1)系数k？

(2)X的分布函数?

(3)$P\{1.5<X<2.5\}$?

$\color{red}\bf{【答案：】}$

解:(1)

$$
\begin{array}{lcl}
\because 1=\int_{-\infty}^{+\infty} f(x)\mathrm{d}x \\
=\int_{-\infty}^0 0 \mathrm{d}x+\int_0^2(kx+1)\mathrm{d}x+\int_2^{+\infty}0\mathrm{d}x \\
=[\frac{1}{2}kx^2+x]\mid_0^2=2k+2 \\
\therefore k=-\frac{1}{2} \\
\therefore f(x)=\begin{cases}
1-\frac{x}{2} \qquad 0\leq x\leq 2 \\
0 \qquad 其他
\end{cases}
\end{array}
$$

(2)求F(x)=$\int_{-\infty}^{x} f(t)\mathrm{d}t$

当$x\leq 0,F(x)=\int_{-\infty}^X 0\mathrm{d}x=0$

当$0<x<2,F(x)=\int_{-\infty}^0 0\mathrm{d}x+\int_0^x (1-\frac{t}{2})\mathrm{d}t=x-\frac{x^2}{4}$

当$x\geq 2,F(X)=\int_{-\infty}^0 0\mathrm{d}t+\int_0^2(1-\frac{t}{2})\mathrm{d}t+\int_2^x 0\mathrm{d}t=1$

$
F(x)=\begin{cases}
0 \qquad x\leq 0 \\
x-\frac{x^2}{4} \qquad 0<x<2 \\
1 \qquad x\geq 2
\end{cases}
$

(3)

$\begin{array}{lcl}
P\{1.5<X\leq 2.5\}=F(2.5)-F(1.5) \\
=1-0.9375 \\
=0.0625
\end{array}
$

$\color{blue}\bf{【例题：】}$

已知X的分布函数为

$
F(x)=\begin{cases}
1-e^{\lambda x} \qquad x>0 \\
0 \qquad x\leq 0
\end{cases}
$

求X的概率密度函数f(x)。

$\color{red}\bf{【答案：】}$

解：

$
f(x)=F^\prime (x) \\
=\begin{cases}
\lambda e^{-\lambda x} \qquad x>0 \\
0 \qquad x\leq 0
\end{cases}
$

注:F(x)在0点不可导，不妨令f(x)=0.

$(e^{-\lambda x})^\prime = e^{-\lambda x} \cdot (-\lambda x)^{\prime}=-\lambda e^{-\lambda x}$
