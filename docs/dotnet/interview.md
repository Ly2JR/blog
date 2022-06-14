# C#面试宝典

- 简述`private`、`protected`、`public`、`internal`修饰符的访问权限。

`private`:私有成员，在类的内部成员才可以访问。

`protected`:保护成员,在类的内部和继承类中可以访问。

`public`:公开成员，完全公开，没有访问限制。

`internal`:当前程序集内可以访问。

- `ADO.NET`中的五个主要对象

`Connection`:主要是开启程序和数据库之间的连接。没有利用连接对象将数据库打开，是无法从数据库中获取数据的。`Close`和`Dispose`的区别,`Close`以后还是可以`Open`,但是`Dispose`不可以`Open`。

`Command`:主要用来对数据库发出指令，例如查询、新增、修改、删除等，以及调用存储过程等一切命令。这个对象是架构在`Connection`对象上，依赖`Connection`对象连接道数据源。

`DataAdapter`:主要用于数据源与`DataSet`之间数据传输桥梁，它通过`Command`对象执行命令后，将数据源数据映射到`DataSet`对象中。依赖`Command`对象,并提供了很对适配`DataSet`的功能。

`DataSet`:电脑内存里的缓存区，映射真实的数据源,相当于数据库(`DataBase`),`DataTable`相当于数据库里的表。将数据库中查询的数据保留起来。不单单只包含数据，还包含查询表的数据类型等结构。依赖`DataAdapter`对象。

`DataReader`:实时读取(`只读`)数据库中的数据，并依次循环。

- 列举ASP.NET 页面之间传递值的几种方式。

`Request.QueryString`:获取Url中`?`之后的参数,例如`http://localhost?id=1`

`Request.Form`:根据表单指定名称获取值

`Session`：数据存储在服务器内存上，Session之间独立，互不干扰。Session是全局的，但是不能跨进程，只能由该会话用户访问。

`Server.Transfer`:

`Requst.Cookie`：数据存储在客户端上。通过Http头在浏览器和服务器之间来回传递。Cookie只能包含字符串值。

`Application`:作用域全局。使用`Application.Lock`和`Application.Unlock`方法来锁定解锁，防止并发修改。

`Cache`:缓存,需要设置缓存级别和缓存时间，当系统内存不足时，会自动移除优先级别低的项。

`Context.Item`:与`Request.Form`类似，提供当前页面的相关信息，包括请求、响应、Session和Application等。

`ViewState`:用于在同一页面的多个请求之间保存和还原服务器控件视图状态的一种机制。ASP.NET的每个请求都会导致服务器重新生成新的页面，不包含原来页面的数据(`页面无状态`)。`ViewState`目的就是保留原来页面中服务器控件视图状态的数据。

`Static`:静态变量。

- 常用的页面之间挑战有哪些？

`Response.Redirect`:例如:`Response.Redirect("Login.aspx")`;

`Response.Write`:例如:`Response.Write("<script language='javascript'>window.open('http://localhost/Login.aspx')</script>")`;

`Server.Transfer`:例如:`Server.Transfer("Login.aspx")`;

`Process`:例如:`System.Diagnostics.Process.Start("http://localhost/Login.aspx")`;

- C#中的委托是什么？事件是不是一种委托？事件和委托的关系？

委托可以把方法当作参数代入另一个方法。

委托可以理解为指向一个函数的指针。

委托和事件没有对比性。委托是类型，事件是对象。

委托的对象(用委托方式实现的事件)和(标准Event方式实现)事件的区别？

事件的内部是用推脱实现的。对于事件，外部只能使用`注册+=`和`注销-=`，内部就是一个`private`的委托和`add`、`remove`两个方法。

- `override`与`overload`的区别

`override`:是对基类函数进行重新。是面向对象的概念。
`overload`:方法名相同参数不同。是面向过程的概念。

- C#中索引器是否只能根据数字进行索引？是否允许多个索引器参数？

参数个数和类型随意。本质上就是`set_item`和`get_item`方法。如果只有`get`没有`set`就是只读索引。

- 属性和public字段的区别是什么？调用set方法为一个属性赋值，然后用get方法读取处理的值一定是set进去的值吗?

属性可以对字段值进行验证控制而字段不能。属性本质上是`set_`和`get_`两个方法。因此,默认get方法获取的是set方法进行的值，但是可以改变。

- 三层架构是哪三层，说说它们的用处？

三层架构是最基本的架构分层，分层目的是为了"高内聚、低耦合"的思想。衍生的五层、七层。

`表现层(UI)`:展示给用户操作的界面。

`业务逻辑层(BLL)`:对具体问题或者操作的业务逻辑处理。

`数据访问层(DAL)`:直接操作数据库，对数据的查询、新增、修改、删除等待。

优点：份工明确，条理清晰，易于调试，而且具有可扩展性。

缺点：层次之间是向下依赖的。下层代码未确定其接口前，上层代码无法开发，下层代码变化使得上层代码一起变化。

- 什么是装箱(`boxing`)和拆箱(`unboxing`)?

Object是所有类型(`值类型`和`引用类型`)的基类。

`装箱`:从值类型转换到引用类型。

`拆箱`:从引用类型转换到值类型。拆箱需要显示类型转换。

要了解装箱和拆箱，就必须了解CTS及它的特点：

NET重要技术和基础之一的CTS(Common Type System)。CTS是为了实现在应用程序声明和使用这些类型时必须遵循的规则而存在的通用类型系统。.NET将整个系统的类型分为两个打雷：`值类型`和`引用类型`。CTS中的所有东西都是对象，源自基类-`System.Object`类型。值类型的最大特点就是它们不能为`null`，值类型的变量总有一个默认值。为了解决值类型不可以为`null`,引用类型可以为`null`的问题，微软在.net中引入了装箱和拆箱。

- C#和.NET的关系？

`.NET`是一个平台，是抽象的概念。

基本类型(通用类型系统CTS，common type system)；

公共语言运行库(CLR,common language runtime)；

通用语言规范(CLS,common language specification):

`C#`:是`.NET`的一种实现,还包括其他语言实现如`VB.NET`、`F#`等。运行在`.NET CLR`上。

- 在DOTNET中类(`class`)和结构(`struct`)的异同？

`class`:引用类型；可以被实例化，是分配在内存的堆上。类是引用传递。

`struct`:值类型，是分配在内存的栈上，结构是复制传递。

- 堆和栈的区别？

`栈`是编辑期间就分配好的内存空间，因此代码中就必须就栈的大小有明确的定义，局部值类型变量、值类型参数等都在栈内存中。

`堆`是程序运行期间动态分配空间，根据程序运行情况确定要分配的堆内存大小。

- 是否使用`foreach`遍历访问对象？

可以，需要实现`IEnumerable`接口或者是声明`GetEnumerator`方法的类型。

- `GC`是什么？为什么需要GC？

`GC`是垃圾收集器(Garbage Collection)。由于.NET是高级语言，运行在CLR上，由CRL自动管理回收，即使手动执行`GC.Collection`方法也无法立即回收。GC只能处理托管内存资源的释放，对于非托管资源则不能使用GC回收，需要程序员手动回收。要请求GC，调用`GC.Collection`方法。

- 值类型与引用类型的区别？

将值类型变量赋值给另一个值类型变量时，复制变量的值。而引用类型变量的赋值只复制对象的引用，不包括对象本身，既赋值是原引用类型的地址，改变赋值变量的值，原变量也会变。

值类型不能派生出新的类型，所有值类型均隐式派生自`System.ValueType`。但与引用类型相同的是，结构也可以实现接口。

值类型不能包括null,但是可控类型允许将null赋值给值类型。

值类型都有一个隐式的默认构造函数来初始化该类型的默认值，既值类型都有默认值，分配内存空间，而引用类型默认为null,不分配内存空间,直到`new`时。

- C#中的接口和类有什么区别？

`相同点`:都可以继承多个接口；都可以包含事件、索引器、方法和属性;

`不同点`:接口不能被实例化；接口不包含方法的实现；接口可以多继承，类只能单继承；类可以在不同的源文件之间进行拆分(`partial`)；接口不能声明字段。

- 抽象类(`abstract class`)和接口(`interface`)有什么区别?

`相同点`:都不能被实例化；都可以通过继承实现其抽象方法。

`不同点`:接口支持多继承,抽象类不能实现多继承；接口只包含方法、属性、索引器、事件的签名，不能定义其实现。抽象类不仅包含方法、属性、索引器、事件，还包含其行为的实现。接口可以用作值类型和应用类型，抽象类只能作用于引用类型，例如，Struct可以继承接口，而不能继承类。

- 是否可以继承`String`类？

不能，String类是`sealed`类故不能继承。

- `using`关键字的作用？什么是`IDisposable`?

`using`可以声明namespace的引用。还可以实现资源的释放。

`IDisposable`：继承了`IDisposable`的类在`using`中创建，在`using`之后自动调用该对象的`Dispose`方法,释放资源。

- `XML`与`HTML`的区别?

`XML`:区分大小写；标记成对出现；属性值必须放在引号`'`中；属性名必须有值；用来存储和传输数据的；

`HTML`:不区分大小写；可省略结束标记；属性值不是必须放在引号`'`;属性名不必须有值。用来显示数据的；如果使用了完全符合XML语法要求的HTML，那么就叫符合XHTML标准，有利于SEO。

- `string str=null`和`string str=""`的区别?

`string str=null`:声明变量str，没有时间内存空间。

`string str=""`:声明变量str,分配了空字符串的内存空间。

- 如何分页显示数据?

`row_number`:例如:`select row_number() over(order by (getdate())) row_num ...`

- 面向对象的语言具有？

`封装`、`继承`、`多态`

- 在.NET中所有可序列化的类都被标记为？

`serializable`

- 什么是code-behind技术?

代码隐藏，在ASP.NET 中通过ASPX页面指向CS文件的方法实现逻辑和处理逻辑的分类。WPF，MVVM鼻祖。

- `StringBuilder`和`String`的区别？

`String`在进行运算时如赋值拼接等，会产生一个新的实列，而`StringBuilder`不会。

`String`类是一种传统的修改字符串的方式，它确实可以把一个字符串添加到另一个字符串上，但在.NET框架下，通过删除创建新的String对象，有额外的系统开销。

`StringBuilder`提供`Append`方法，对原有对象的原地址进行字符串的修改。

- 请叙述属性与索引器的区别

`属性`:可以为静态成员或实列成员；通过名称访问；`get`访问器没有参数；`get`访问器包含隐式的value参数。
`索引器`:必须为实列成员；通过元素访问;`get`访问器具有与索引器相同的形参；`get`访问器除了隐式的value参数还有与索引器相同的形参。

- 请解释ASP.NET中的Web页面与其隐藏类之间的关系？

一个ASP.NET页面对应一个隐藏类。示例：`<%@ Page language="c#" Codebehind="Login.aspx.cs" AutoEventWireup="false" Inherits="Web.Login"%>`。`Codebehind="Login.aspx.cs"`表明编译页面时使用的哪个代码文件。`Inherits="Web.Login"`表明运行时使用哪个隐藏类。ASP页面会编译成一个类，这个类从隐藏类继承。

- 在什么情况下会用到虚方法(`virtual`)?它与接口有什么不同？

子类重新定义父类的方法时，父类必须将方法定义为`virtual`;

接口中不能有方法体，但是虚方法可以;

子类可以重定义或者不重定义父类虚方法，但是接口，必须实现;

- 传入某个属性的set方法的隐含参数的名称是什么?

`value`:它的类型和属性所声明的类型相同;

- C#支持多重继承吗？

类之间不支持，接口支持；

- C#中所有对象的共同基类是什么?

`System.Object`

- 通过超链接怎么传递中文参数？

进行转码,使用`UrlEncode`编码,`UrlDecode`解码；

- string,String;int,Int32;Boolean,bool的区别？

`String`：是Framework中的类;需要Using System;不是关键字，可以作为类、结构、字段、枚举、变量、方法、属性的名称。

`string`：是C#中的类，是System.String在.NET中的别名；使用`string`编译器会把它编译成`String`；推荐使用`string`,符合规范,`string`始终代表`System.String(1.x)`或`::System.String(2.0)`;不需要Using System;是关键字，不能作为类、结构、字段、枚举、变量、方法、属性的名称。

- Server.Transfer和Response.Redirect的区别是什么？

`Server.Transfer`是服务器中控制权的转向，直接访问目标地址，把URL响应内容读取出来，发送给浏览器，在客户端不会显示转向后地址；这个过程中浏览器和web服务器经过一次交互；因此，不可以转向外部网站；

`Response.Redirect`是完全跳转，浏览器会得到跳转的地址，并重新发送请求链接，浏览器可以看到跳转后的地址;这个过程中浏览器和web服务器经过两次交互。可以转向外部网站。

- 字符串是不可变的吗？`string s="abc";s="123"`不就是变了吗?

STRING是不可变的，在这个代码中，s一开始指向string对象，内容是"abc"，当赋值"123"时,s对象并没有改变，只是s这个引用变量改变了。

- 是否可以从一个static方法内部发出对非static方法的调用?

不可以。因为非static方法需要与对象关联在一起，在创建对象之后才可以访问，而static不需要创建对象便直接调用。

- post和get的区别

`get`参数显示在浏览器地址栏中;get的页面可以被搜索引擎抓取;get提交的数据量很小(2k),受网页地址的长度限制。get不可以提交文件

`post`参数不会显示在浏览器地址栏中;使用post提交的页面在点击"刷新"时，一般会提示是否重新提交;post的页面不会被搜索引擎抓取;post提交的数据量很大；post可以进行文件的提交；

- WebService和Restful的区别?

`WebService`：解决三个问题，接口的自我描述；采用http协议等常规协议，不用写原始的Socker;基于Web服务器，不占用80端口之外的端口。`UDDI`用来自动发现WebService的协议;`WSDL`是对WebService上的方法名、参数进行描述的协议(接口自描述).`SOAP`是对参数，返回值以什么样的格式进行传递进行描述的协议。WebService是跨平台、跨语言调用的，可以跨防火墙。缺点是效率低。使用两个非内部系统的通讯。

- SOAP和HTTP的关系?

SOAP基于Http西医，和普通网页不同的是网页返回HTML,SOAP则是符合SOAP协议的XML数据;

- .NET、ASP.NET、C#、VisualStudio之间的关系？

`.NET`一般指`.NET Framework`，提供了基础的.NET类，这些类可以 被任何一种.net编程语言调用,还提供了CLR、JIT、GC等功能。

`ASP.NET`是.NET中用来进行Web开发的一种技术,ASP.NET的页面部分写在aspx文件中，逻辑代码通常通过Code-behind方法用C#，VB.NET等支持.NET的语言编写。

`C#`是使用最广泛的支持.NET的编程语言。除了C#还有VB.NET等。

`VisualStudio`是微软提供用来进行.NET开发的集成开发环境(IDE)。

- AJAX解决什么问题？如何使用AJAX？AJAX有什么问题需要注意？哪里用到了AJAX？

AJAX解决了"无刷新更新页面"的问题，用传统的HTML表单进行页面更新是，每次请求都会提交到服务器，服务器返回在重绘页面，这样页面经历了提交->变白->重新显示这个过程,体验较差，而AJAX则不会。

AJAX本质是实现在JavaScript中使用XMLHttpRequest进行Http请求，开发通常使用UpdatePanel，JQuery方式简化AJAX开发。UpdatePanel的方式是实现AJAX最简单方式，但数据量较大。

AJAX最重要的问题是无法跨域请求(www.localhost.com->www.bing.com)，也就是无法在页面中向和当前域名不同的页面发送请求，可以使用在当前页面所在的域的服务端做代理页面的方式解决。
