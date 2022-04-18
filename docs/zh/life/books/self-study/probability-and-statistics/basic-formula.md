# 基本公式

- 古典概型C公式

下标n的阶乘除以[下标n与上标m之差的阶乘与下标m的阶乘的积]
$$
C_n^m=(n*(n-1)*\cdots*(n-m+1))/m!
$$

示例：

$C_{10}^3=10*9*8/3*2*1=720/6=120$

$C_8^2=8*7/2*1=56/2=28$

- 定积分定理与常用计算公式

  - 定积分的计算

    - 定理1（Newton-Leibniz公式，微积分基本公式）

      设f是[a,b]上可积，且f在[a,b]上有一个原函数F，则
      $$
      \int_a^bf(x)dx=F(b)-F(a)=F(x)\mid_a^b
      $$

    - 定理2(微积分第一基本定理)

    $$
    设f\in C[a,b],则\left(\int_a^xf(t)dt\right)'=f(x)
    $$

    - 定理3(微积分第二基本定理)

    $$
    F(x)是f(x)在I上的一个原函数，则F(x)+C是f(x)在I上的所有原函数.
    $$

    - 定理4(换元法)

    $设f\in C[a,b],变换x=\varphi{t}满足:$

    $(1)存在常数\alpha,\beta使得\varphi(\alpha)=a,\varphi(\beta)=b;$

    $(2)在\alpha,\beta界定的区间上，\alpha\leq\varphi(t)\leq b;$

    $(3)在\alpha,\beta界定的区间上，\varphi(t)有连续的导数，则$

    $$\int_a^b f(x)dx=\int_\alpha^\beta f[\varphi(t)]\varphi'(t)dt$$

    - 定理5(分部积分法)

    $设u(x),v(x)在[a,b]上有连续的导数，则$

    $$\int_a^b u(x)v'(x)dx=u(x)v(x)\mid_a^b-\int_a^b u'(x)v(x)dx$$

    - 定理6(变限定积分)

    $设f\in C[a,b],\varphi(x)、\phi(x)可导,则$

    $$\frac{d}{dx}\left(\int_{\phi(x)}^{\varphi(x)} f(t)dt\right)=f(\varphi(x))\varphi'(x)-f(\phi(x))\phi'(x)$$

  - 常用定积分公式

    - (1)

    $$
    \int_{-a}^a f(x)dx=
    \begin{cases}
        2 \int_0^a f(x)dx  &\text{f(x)是偶函数}\\
        0   &\text{f(x)是奇函数}
    \end{cases}
    $$

    - (2)设f(x)是R上以T为周期的分段函数连续有解函数。

    则$\forall a\in R$都有$\int_a^{a+T} f(x)dx=\int_0^T f(x)dx.$

    - (3)$\int_0^\pi xf(sinx)dx=\frac{\pi}{2}\int_0^\pi f(sinx)dx=\pi\int_0^\frac{\pi}{2} f(sinx)dx$

    - (4)
    $$
    \int_{0}^\frac{\pi}{2} sin^n xdx=\int_0^\frac{\pi}{2} cons^n xdx=
    \begin{cases}
        \frac{(n-1)(n-3)\cdots 2}{n(n-3)\cdots 3} &\text{n为奇函数}\\
        \frac{(n-1)(n-3)\cdots 1}{n(n-2)\cdots 2} \frac{\pi}{2}   &\text{n是偶函数}
    \end{cases}
    $$

    - (5)$三角函数系，在1,consx,sinx,cos2x,sin2x,\cdots cosmx,sinmx,\cdots中任取两个不同函数.若自然数是m\neq n,则$
    $$
    \int_0^2\pi sinmxconsnxdx=0,\int_0^2\pi sinmxdx=0,\int_0^2\pi cosnxdx=0,
    $$
    $$
    \int_0^2\pi sin^2 mxconsnxdx=\pi,\int_0^2\pi cos^2nxdx=\pi,\int_0^2\pi 1dx=2\pi.
    $$
