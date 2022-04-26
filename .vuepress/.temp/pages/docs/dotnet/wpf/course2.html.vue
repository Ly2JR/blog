<template><h1 id="从零起步认识xaml" tabindex="-1"><a class="header-anchor" href="#从零起步认识xaml" aria-hidden="true">#</a> 从零起步认识XAML</h1>
<h2 id="项目构成" tabindex="-1"><a class="header-anchor" href="#项目构成" aria-hidden="true">#</a> 项目构成</h2>
<p>VS2022新建项目，选择.NET6。</p>
<ol>
<li>
<p>依赖项</p>
<p>标记了当前项目种引用了哪些其他的项目。</p>
</li>
<li>
<p>App.xaml</p>
<p>程序的主体。在Windows系统里，一个程序就是一个进程(Process)。Windows还规定，一个GUI进程需要由一个窗体(Window)作为“主窗体”。</p>
<p>App.xaml文件的作用就是声明了程序的进程会是谁，同时指定了程序的主窗体是谁。在这个分支里还有一个文件---App.xaml.cs,它是App.xaml的后台代码。</p>
</li>
<li>
<p>AssemblyInfo.cs</p>
</li>
<li>
<p>MainWindow.xaml</p>
<p>程序的主窗体。它也具有自己的后台代码MainWindow.xaml.cs。</p>
</li>
</ol>
<h2 id="剖析最简单的xaml代码" tabindex="-1"><a class="header-anchor" href="#剖析最简单的xaml代码" aria-hidden="true">#</a> 剖析最简单的XAML代码</h2>
<p>分析的重点是MainWindow.xaml和它的后台代码，在MainWindow.xaml文件里能看到如下代码:</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Window</span> <span class="token attr-name"><span class="token namespace">x:</span>Class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Head.First.MainWindow<span class="token punctuation">"</span></span>
        <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.microsoft.com/winfx/2006/xaml/presentation<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.microsoft.com/winfx/2006/xaml<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.microsoft.com/expression/blend/2008<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>mc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.openxmlformats.org/markup-compatibility/2006<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>local</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clr-namespace:Head.First<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">mc:</span>Ignorable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d<span class="token punctuation">"</span></span>
        <span class="token attr-name">Title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MainWindow<span class="token punctuation">"</span></span> <span class="token attr-name">Height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>450<span class="token punctuation">"</span></span> <span class="token attr-name">Width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Grid</span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Window</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>XAML是一种由XML派生而来的语言，所以很多XML中的概念在XAML是通用的。比如，在使用标签声明一个元素(每个元素对应内存中的一个对象)时，需要使用起始标签<code>&lt;Tag&gt;</code>和终止标签<code>&lt;/Tag&gt;</code>,夹在起始标签和终止标签中的XAML代码表示是隶属于这个标签的内容。如果没有声明内容隶属于某个标签，则这个标签称为空标签，可以写为<code>&lt;Tag/&gt;</code>。</p>
<p>为了表示同类标签中的某个标签与众不同，可以给它的特征(Attribute)赋值。为特征赋值的语法如下：</p>
<ul>
<li>
<p>非空标签：<code>&lt;Tag Attribute1=Value1 Attritebu2=Valute&gt;Content&lt;/Tag&gt;</code></p>
</li>
<li>
<p>空标签:<code>&lt;Tag Attribute1=Value1 Attribute2=Value2/&gt;</code></p>
</li>
</ul>
<p>在这里，有必要把<code>Attribute</code>和<code>Property</code>这两个次仔细地辨别一下。</p>
<p>这两个词的混淆由来已久。混淆的主要原因就是大多数中文译本里即把<code>Attribute</code>译为“属性”,也把<code>Property</code>译为“属性”。其实，这两个词所表达的不是一个层面上的东西。</p>
<p><code>Property</code>属于面向对象理论范畴。在使用面向对象思想编程的时候，常常需要对客观事物进行抽象，再把抽象出来的结果封装成类，类中用来表示事物状态的成员就是<code>Property</code>。总结一句话就是:<code>Property</code>(属性)是针对对象而言的。</p>
<p><code>Attribute</code>则是编程语言文法层面的东西。比如有两个同类的语法元素A和B，为了表示A与B不完全相同或者A与B在语法上有些区别，这时候就要针对A和B加一些Attribute。也就是说，Attribute只与语言层面上的东西有关，与抽象出来的对象没有关系。因为Attribute是为了表示“区分”的，所以把它译为“特征”。C#中的Attribute就是这种应用的典型例子，我们可以为一个类添加Attribute，这个类的类成员中有很多Property。显然Attribute只是用来影响类在程序中的用法，而Property则对应这抽象对象身上的形状，它们根本不是一个层面上的东西。</p>
<p>习惯上，英文中把标签式语言中表示一个标签特征的“名称-值”对称作Attribute。如果恰好又是用一种标签语言在进行面向对象编程，这时候两个概念就有可能混淆在一起了。实际上，使用能够进行面向对象编程的标签式语言知识把标签与对象做了一个映射，同时把标签的Attrite与对象的Property也做了一个映射---针对标签还是叫Attribute,针对对象还是叫Property，仍然不是一个层面上的东西。而且，标签的Attribute与对象的Propery也不是完全映射的，往往是一个标签所具有的Attribute多于它所代码的对象的Property。</p>
<p>明白了XAML的格式以及Attribute与Property的关系，对上面的代码即可一目了然。它的总体结构是一个<code>&lt;Window&gt;</code>标签内部包含着一个<code>&lt;Grid&gt;</code>标签(或者说<code>&lt;Grid&gt;</code>标签是<code>&lt;Window&gt;</code>标签的内容)，代表的含义是一个窗体对象内嵌套着一个Grid对象。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Window</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Grid</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Grid</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Window</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>XAML是一种“声明”式语言，当你见到一个标签，就意味着声明了一个对象，对象之间的层级关系要是并列、要么是包含，全都提现在标签的关系上。</p>
<p>下面这些代码就都是<code>&lt;Window&gt;</code>标签的Attribute。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>x:Class="Head.First.MainWindow"
xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
xmlns:local="clr-namespace:Head.First"
mc:Ignorable="d"
Title="MainWindow" Height="450" Width="800"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Title、Height、Width一看就知道是与Window对象的Propery相对应的。中间两行(即两个xmlns)是在声明名称空间。最上面一行是在使用名为Class的Attribute，这个Attribute来自与x:前缀所对应的名称空间。</p>
<p>XAML语言是从XML语言派生出来的。XML语言有一个功能就是可以在XML文档的标签上使用xmlns特征来定义名称空间(Namespace),xmlns也就是XML-Namespace的缩写了。定义名称空间的好处就是，当来源不同的类重名时，可以使用名称空间加以区分。</p>
<p>xmlns特征的语法格式:<code>xmlns[:可选的映射前缀]=&quot;名称空间&quot;</code></p>
<p>xmlns后可以跟一个可选的映射前缀，之间用冒号(<code>:</code>)分割。如果没有写可选映射前缀，那就意味着苏哦有来自于这个空名称空间的标签前都不用加前缀，这个没有映射前缀的名称空间称为&quot;默认名称空间&quot;---默认名称空间只能有一个，而且应该选择其中元素被最频繁使用的名称空间来充当默认名称空间。</p>
<p>XAML中引入外来程序集和其中.NET名称空间的语法与C#是不一样的。在C#中，如果想使用System.Windows.Controls名称空间里的Button类，需要先把包含System.Windows.Controls名称空间的程序集PresentationFramework.dll通过添加引用的方式引用到项目中，然后再在C#代码的顶部写上一个Using System.Windows.Controls。在XAML中做同样的事件也需要先添加对程序集的引用，然后再在根元素的起始标签中协商一句:<code>xmlns:c=&quot;clr-namespace:System.Windows.Controls;assembly=PresentationFramework&quot;</code>。c是映射前缀，缓存其他的字符串也可以。因为Button来自前缀c对应的名称空间。所以在使用Button的时候就要写成<code>&lt;c:Button&gt;...&lt;c:Button/&gt;</code></p>
<p>默认引用进来的两个名称空间格外重要，它们所对应的程序集和.NET名称空间如下：</p>
<p><code>http://schemas.microsoft.com/winfx/2006/xaml/presentation</code>对应:</p>
<ul>
<li>System.Windows</li>
<li>System.Windows.Automation</li>
<li>System.Windows.Controls</li>
<li>System.Windows.Controls.Primitives</li>
<li>System.Windows.Data</li>
<li>System.Windows.Documents</li>
<li>System.Windows.Forms.Intergration</li>
<li>System.Windows.Ink</li>
<li>System.Windows.Input</li>
<li>System.Windows.Media</li>
<li>System.Windows.Media.Animation</li>
<li>System.Windows.Media.Effects</li>
<li>System.Windows.Media.Imaging</li>
<li>System.Windows.Media.Media3D</li>
<li>System.Windows.Media.TextFormatting</li>
<li>System.Windows.Nagivation</li>
<li>System.Windows.Shapes</li>
</ul>
<p>也就是说，你在XAML代码中可以直接使用这些CL名称空间中的类型(因为默认XML名称空间没有前缀)。</p>
<p><code>https://schemas.microsfot.com/winfx/2006/xaml</code>则对应一些与XAML语法和编译相关的CLR名称空间。使用这些名称空间中的类型时需要加x前缀，因为它们被映射到了名为x的XML名称空间中。</p>
<p>从着两个名称空间的名字和它们所对应的.NET程序集上，不难看出，第一个名称空间对应的是与绘制UI相关的程序集，是表示(Presentation)层面上的东西;第二个名称空间则对应XAML语言解析处理相关的程序集，是语言层面上的东西。</p>
<p>还剩下<code>x:Class=&quot;Head.First.MainWindow&quot;</code>这个Attribute。x:前缀说明这个Attribute来自于x映射的名称空间，这个名称空间是对应XAML解析功能的。</p>
<p>通过把<code>x:Class=&quot;Head.First.MainWindow</code>这个Attribute删掉，再到MainWindows.xaml.cs文件里，把构造器中对InitializeComponent方法的迪奥用也删掉。编译程序，发现程序仍然可以运行。打开App.xaml这个文件，你能发现一个Attribute----<code>StartupUri=&quot;MainWindow.xaml&quot;</code>,它是再告诉编译器把 由MainWindow.xaml解析后生成的窗体作为程序启动时的主窗体。也就是说，只要MainWindows.xaml文件能够被正确解析成一个窗体，程序就可以正常运行。</p>
<p>然后，只恢复x:Class这个Attribute(不恢复对InitialzeComponent方法的调用),并更改它的值为<code>x:Class=&quot;&quot;Head.First.MainWindowABC&quot;</code>。编译之后，任然可以争取运行。使用中间语言反编译器打开项目的编译结果，你会发现在由项目编译生成的程序集里包含一个名为MainWindowABC的类。</p>
<p>这说明，x:Class这个Attribute的作用是当XAML解析器将包含它的标签解析成C#类。</p>
<p>回到最初的代码。在XAML里有<code>x:Class=&quot;Head.First.MainWindow&quot;</code>,在MainWindow.xaml.cx里也声明了MainWindow这个类，难道它们不会冲突吗？仔细观察MainWindow.xaml.cx中的MainWindow类的声明就知道了---在声明时使用了<code>partial</code>这个关键字。使用<code>partial</code>关键字，可以把一个类拆分在多处定义，只要各部分代码不冲突即可。显然，由XAML解析器生成的MainWindow类在声明时也使用了<code>partial</code>关键字，这样，由XAML解析成的类和C#文件里定义的部分就合二为一。正是由于这种<code>partial</code>机制,我们可以把类的逻辑代码留在<code>.cs</code>文件里，用C#语言来实现，而把那些于声明及布局UI元素相关的代码分离出去，实现UI于逻辑分离。并且，用于绘制UI的代码(如声明控件类型的字段、设置它们的外观和布局等)也不必再使用C#语言，使用XAML和XAML编辑工具就能轻松搞定！</p>
<p>至此，这个最简单的XAML程序了然于胸了。</p>
</template>
