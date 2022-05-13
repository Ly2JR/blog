# 代理模式(Proxy)

所谓的代理者是指一个类别可以作为其它东西的接口。代理者可以作任何东西的接口：网上连接、存储器中的大对象、文件或其他昂贵或无法复制的资源。

- 简介

  代理模式的定义：为其他对象提供一种代理以控制对这个对象的访问。在某些情况下，一个对象不适合或者不能直接引用另外一个对象，而代理对象可以在客户端和目标对象直接起到中介作用。

  著名的代理模式例子为引用计数(英文:reference counting)指针对象。

  当一个复杂对象的多份副本须存在时，代理模式可以结合享元模式以减少存储器用量。典型作法是创建一个复杂对象及多个代理者，每个代理者会引用到原本的复杂对象。而作用在代理者的运算会转送到原本对象。一旦所有的代理者都不存在时，复杂对象会被移除。

- 组成

  抽象角色：通过接口或抽象类声明真实角色实现的业务方法。

  代理角色：实现抽象角色，是真实角色的代理，通过真实角色的业务逻辑方法来实现抽象方法，并可以附加自己的操作。

  真实角色：实现抽象角色，定义真实角色所要实现的业务逻辑，供代理角色调用。

- 优点

  1. 职责清晰

     真实的角色实现实际的业务逻辑，不用关心其他非本职责的事物，通过后期的代理完成一件完成事物，附带的结果就是编程简洁清晰。

  2. 代理对象可以在客户端和目标对象之间起到中介的作用，这样起到了中介的作用和保护了目标对象的作用。
  3. 高扩展性

- 模式结构

  一个是真正的你要访问的对象(目标类)，一个是代理对象，真正对象与代理。

  对象实现同一个接口，先访问代理类再访问真正要访问的对象。

  代理模式分为静态代理、动态代理。

  静态代理是由程序员创建或工具生成代理类的源码，再编译代理类。所谓静态也就是在程序运行前就已经存在代理类的字节码文件，代理类和委托类的关系在运行前就确定了。

  动态代理是在实现阶段不用关心代理类，而在运行阶段才指定哪一个对象。

- 示例

  参与此模式的类和对象包括：

  - Proxy(`MathProxy`)
    - 维护一个让代理访问真实主题的引用。如果RealSubject和Subject接口相同，Proxy可以引用Subject。
    - 提供与Subject相同的接口，以便可以用代理代替真实的主题。
    - 控制对真实主题的访问，并可能负责创建和删除它。
    - 其他职责取决于代理的类型：
      - 远程代理负责对请求机器参数进行编码，并将编码后的请求发送到不同地址空间中的真实主体。
      - 虚拟代理可以换成有关真实主题的附加信息，以便它们可以推迟访问它。例如，来自Motivation的ImageProxy缓存了真实图像的范围。
      - 保护代理检测调用者是否具有执行请求所需的访问权限。

  - Subject(`IMath`)
    - 定义RealSubject和proxy的公共接口，以便在任何需要RealSubject的地方都可以使用Proxy。

  - RealSubject(`Math`)
    - 定义代理所代表的真实对象。

:::: code-group
::: code-group-item Structural code

```cs
// 演示了代理模式，它提供了一个代表对象(代理)来控制对另一个类似对象的访问。

var proxy = new Proxy();
proxy.Request();

// Wait for user
Console.ReadKey();

// Called RealSubject.Request()

public abstract class Subject
{
    public abstract void Request();
}

public class RealSubject : Subject
{
    public override void Request()
    {
        Console.WriteLine("Called RealSubject.Request()");
    }
}

public class Proxy : Subject
{
    private RealSubject _realSubject;
    public override void Request()
    {
        if (_realSubject == null)
        {
            _realSubject = new RealSubject();
        }
        _realSubject.Request();
    }
}
```

:::
::: code-group-item Real-World code

```cs
// 演示了由MathProxy对象表示的Math对象的代理模式。

var proxy2 = new MathProxy();
Console.WriteLine($"4 + 2 = {proxy2.Add(4, 2)}");
Console.WriteLine($"4 - 2 = {proxy2.Sub(4, 2)}");
Console.WriteLine($"4 * 2 = {proxy2.Mul(4, 2)}");
Console.WriteLine($"4 / 2 = {proxy2.Div(4, 2)}");

// Wait for user
Console.ReadKey();

// 4 + 2 = 6
// 4 - 2 = 2
// 4 * 2 = 8
// 4 / 2 = 2

public interface IMath
{
    double Add(double x, double y);
    double Sub(double x, double y);
    double Mul(double x, double y);
    double Div(double x, double y);
}

public class Math : IMath
{
    public double Add(double x, double y)
    {
        return x + y;
    }

    public double Sub(double x, double y)
    {
        return x - y;
    }

    public double Mul(double x, double y)
    {
        return x * y;
    }

    public double Div(double x, double y)
    {
        return x / y;
    }
}

public class MathProxy : IMath
{
    private readonly Math _math = new Math();

    public double Add(double x, double y)
    {
        return _math.Add(x, y);
    }

    public double Div(double x, double y)
    {
        return _math.Div(x, y);
    }

    public double Mul(double x, double y)
    {
        return _math.Mul(x, y);
    }

    public double Sub(double x, double y)
    {
        return _math.Sub(x, y);
    }
}
```

:::
::::
