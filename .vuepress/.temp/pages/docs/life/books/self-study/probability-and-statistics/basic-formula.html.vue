<template><h1 id="基本公式" tabindex="-1"><a class="header-anchor" href="#基本公式" aria-hidden="true">#</a> 基本公式</h1>
<h2 id="古典概型c公式" tabindex="-1"><a class="header-anchor" href="#古典概型c公式" aria-hidden="true">#</a> 古典概型C公式</h2>
<p>下标n的阶乘除以[下标n与上标m之差的阶乘与下标m的阶乘的积]</p>
<p>$$C_n^m=(n*(n-1)<em>\cdots</em>(n-m+1))/m!$$</p>
<p>$\color{blue}\bf{示例：}$</p>
<p>$C_{10}^3=10<em>9</em>8/3<em>2</em>1=720/6=120$</p>
<p>$C_8^2=8<em>7/2</em>1=56/2=28$</p>
<h2 id="定积分定理与常用计算公式" tabindex="-1"><a class="header-anchor" href="#定积分定理与常用计算公式" aria-hidden="true">#</a> 定积分定理与常用计算公式</h2>
<ul>
<li>
<p>$\color{blue}\bf{定积分的计算}$</p>
<ul>
<li>定理1（Newton-Leibniz公式，微积分基本公式）</li>
</ul>
<p>设f是[a,b]上可积，且f在[a,b]上有一个原函数F，则</p>
<p>$$\int_a^bf(x)dx=F(b)-F(a)=F(x)\mid_a^b$$</p>
<ul>
<li>定理2(微积分第一基本定理)</li>
</ul>
<p>$$
设f\in C[a,b],则\left(\int_a^xf(t)dt\right)'=f(x)
$$</p>
<ul>
<li>定理3(微积分第二基本定理)</li>
</ul>
<p>$$
F(x)是f(x)在I上的一个原函数，则F(x)+C是f(x)在I上的所有原函数.
$$</p>
<ul>
<li>定理4(换元法)</li>
</ul>
<p>$设f\in C[a,b],变换x=\varphi{t}满足:$</p>
<p>$(1)存在常数\alpha,\beta使得\varphi(\alpha)=a,\varphi(\beta)=b;$</p>
<p>$(2)在\alpha,\beta界定的区间上，\alpha\leq\varphi(t)\leq b;$</p>
<p>$(3)在\alpha,\beta界定的区间上，\varphi(t)有连续的导数，则$</p>
<p>$$\int_a^b f(x)dx=\int_\alpha^\beta f[\varphi(t)]\varphi'(t)dt$$</p>
<ul>
<li>定理5(分部积分法)</li>
</ul>
<p>$设u(x),v(x)在[a,b]上有连续的导数，则$</p>
<p>$$\int_a^b u(x)v'(x)dx=u(x)v(x)\mid_a^b-\int_a^b u'(x)v(x)dx$$</p>
<ul>
<li>定理6(变限定积分)</li>
</ul>
<p>$设f\in C[a,b],\varphi(x)、\phi(x)可导,则$</p>
<p>$$\frac{d}{dx}\left(\int_{\phi(x)}^{\varphi(x)} f(t)dt\right)=f(\varphi(x))\varphi'(x)-f(\phi(x))\phi'(x)$$</p>
</li>
<li>
<p>$\color{blue}\bf{常用定积分公式}$</p>
<ul>
<li>(1)</li>
</ul>
<p>$$
\int_{-a}^a f(x)dx=
\begin{cases}
2 \int_0^a f(x)dx  &amp;\text{f(x)是偶函数}\
0   &amp;\text{f(x)是奇函数}
\end{cases}
$$</p>
<ul>
<li>(2)设f(x)是R上以T为周期的分段函数连续有解函数。</li>
</ul>
<p>则$\forall a\in R$都有$\int_a^{a+T} f(x)dx=\int_0^T f(x)dx.$</p>
<ul>
<li>
<p>(3)$\int_0^\pi xf(sinx)dx=\frac{\pi}{2}\int_0^\pi f(sinx)dx=\pi\int_0^\frac{\pi}{2} f(sinx)dx$</p>
</li>
<li>
<p>(4)
$$
\int_{0}^\frac{\pi}{2} sin^n xdx=\int_0^\frac{\pi}{2} cons^n xdx=
\begin{cases}
\frac{(n-1)(n-3)\cdots 2}{n(n-3)\cdots 3} &amp;\text{n为奇函数}\
\frac{(n-1)(n-3)\cdots 1}{n(n-2)\cdots 2} \frac{\pi}{2}   &amp;\text{n是偶函数}
\end{cases}
$$</p>
</li>
<li>
<p>(5)$三角函数系，在1,consx,sinx,cos2x,sin2x,\cdots cosmx,sinmx,\cdots中任取两个不同函数.若自然数是m\neq n,则$
$$
\int_0^2\pi sinmxconsnxdx=0,\int_0^2\pi sinmxdx=0,\int_0^2\pi cosnxdx=0,
$$
$$
\int_0^2\pi sin^2 mxconsnxdx=\pi,\int_0^2\pi cos^2nxdx=\pi,\int_0^2\pi 1dx=2\pi.
$$</p>
</li>
</ul>
</li>
</ul>
</template>
