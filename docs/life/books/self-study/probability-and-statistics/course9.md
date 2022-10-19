# [第二章 随机变量及其概率分布(2)](https://www.bilibili.com/video/BV1XJ411173b?p=9)

## 第二节 随机变量的分布函数

### 分布函数的概念

定义：设X是随机变量，x是任意实数，函数$F(x)=P(X\leq x)$
称为随机变量X的概率分布函数或分布函数。

当X为离散型随机变量时，设X的分布律为$P_k=P\{X=k\},K=0,1,2,,\cdots$

由于$\{X\leq x\}=\mathop{\cup}\limits_{x_k \leq x}\{X_1=x_k\}$
由概率性质知,

$F(x)=P\{X\leq x\}=\sum\limits_{X_k \leq x} P\{X=x_k\},F(x)=\sum\limits_{X_k\leq x} P_k$

其中，求和是对所有满足$x_k \leq x$时$x_k$相应的概率$P_k$求和。

$\color{blue}\bf{【例题：】}$

将一枚硬币连掷三次，X表示"三次中正面出现的次数"，求X的分不了及分布函数，并求下列概率值$P\{1<X<3\},P\{X\geq 5.5\},P\{1<X\leq 3\}$.

$\color{red}\bf{【答案：】}$

解：设X为证明朝上的次数，因此分布律为

$$
\begin{array}{|c|c|c|c|} X&0&1&2&3 \\
    \hline
    P&\frac{1}{8}&\frac{3}{8}&\frac{3}{8}&\frac{1}{8}
\end{array}
$$

当x<0时,$F(x)=P{X\leq x}=0$;

当$0\leq x <1$时,$F(x)=P\{X \leq x\}=\sum\limits_{x_i \leq 0} P_i=\frac{1}{8}$;

当$1\leq x<2$时,$F(x)=P\{X\leq x\}=P\{X=0\}+P\{X=1\}=\frac{1}{8}+\frac{3}{8}=\frac{1}{2}$

当$2\leq x<3$时,$F(x)=P\{X\leq x\}=1-P\{X=3\}=\frac{7}{8}$

当$X\geq$时,$F(x)=1$

$P\{1<X<3\}=P\{X=2\}=\frac{3}{8},P\{X\geq 5.5\}=0,P\{1<X\leq 3\}=P\{X=2\}+P\{X=3\}=\frac{1}{2}$.

分布函数的性质

(1) $0\leq F(x)\leq 1$

(2) F(x)非减，即若$x_1 < x2$,则$F(X_1) \leq F(X_2)$;

(3) $F(-\infty)=\lim\limits_{x\rightarrow-\infty}F(x)=0,F(+\infty)=\lim\limits_{x\rightarrow+\infty}F(x)=1$

(4) F(x)右连续，即$\lim\limits_{x\rightarrow_0^+}F(x)=F(x_0)$

$\color{blue}\bf{【例题：】}$

设$F_1(x),F_2(x)$为分布函数,问下列函数哪个是分布函数

A $F_1(x)+F_2(x)\qquad$  B $F_1(x)=F_2(x)\qquad$ C $F_1(x)*F_2(x)\qquad$ D $F_1^2(x)+F_2^2(x)$

$\color{red}\bf{【答案：C】}$

$\color{blue}\bf{【例题：】}$

设随机变量X的分布函数为

$$
F(x)=
    \begin{cases}
        A+Be^{-\lambda x} \qquad X>0 (\lambda >0)\\
        0  \qquad  X\leq 0    \\
    \end{cases}
$$

求(1)常数A,B的值.

(2) $P\{-1<X\leq 1\}$.

(3) $P\{X>2\}$.

$\color{red}\bf{【答案：】}$

(1) 解：$\because 1=F(+\infty)=\lim\limits_{x\rightarrow +\infty}F(x)=A$

$0=F(0)=\lim\limits_{x\rightarrow 0+}F(x)=\lim\limits_{x\rightarrow 0}(A+Be^{-\lambda x})=A+B$

$\therefore A=1,B=-1$

$
\therefore
F(x)=\begin{cases}
    1-e^{-\lambda x}\qquad x>0 \\
    0\qquad x\leq 0
\end{cases}
$

(2) $P\{-1<X\leq 1\}=F(1)-F(-1)=1-e^{-\lambda}$

(3) $P\{X>2\}=1-F(2)=1-(1-e^{-2\lambda})=e^{-2\lambda}$

$\color{blue}\bf{【例题：】}$

设随机变量X的分布函数为
$
F(x)=\begin{cases}
    0,\qquad x<0 \\
    0.3,\qquad 0\leq x<2 \\
    1,\qquad x\geq2
\end{cases}
$
则$P\{1<X<3\}$=$\underline{\color{red}{0.7}}$

$\color{red}\bf{【答案：0.7】}$

$\color{red}\bf{【解析：】}$

$P\{1<X<3\}=F(3-0)-F(1)=\lim\limits_{x\rightarrow 3}F(x)-F(1)=1-0.3=0.7$

$\color{blue}\bf{【例题：】}$

箱中装有10件产品，其中8件正品,2件次品,从中任取2件，X表示取到的次品数。

求:(1) X的分布律;

(2) X的分布函数F(x);

(3) $P\{0<X\leq 2\}$.

$\color{red}\bf{【答案：】}$

(1) X的分布律为

$P\{X=0\}=\frac{C_8^2}{C_10^2}=\frac{28}{45}$

$P\{X=1\}=\frac{C_8^1 * C_2^1 }{C_10^2}=\frac{16}{45}$

$P\{X=2\}=\frac{C_2^2}{C_10^2}=\frac{1}{45}$

(2) X的分布函数为
$
F(x)=\begin{cases}
    0,\qquad x<0 \\
    \frac{28}{45},\qquad 0\leq x<1 \\
    \frac{44}{45},\qquad 1\leq x<2 \\
    1,\qquad x\geq2
\end{cases}
$

(3) $\therefore P\{0<x\leq 2\}=P\{X=1\}+P\{X=2\}=\frac{17}{45}$
