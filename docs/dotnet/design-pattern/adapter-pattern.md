# 适配器模式(Adapter Pattern)

在计算机编程重，适配器模式(有时候也城包装样式或者包装)将一个类的接口适配成用户所期待的。
一个适配允许通常因为接口不兼容而不能在一起工作的类工作在一起，做法是将类自己的接口包裹在一个已存在的类中。

- 基本信息

  共有两类适配器模式：

  - 对象适配器模式

    在这种适配器模式中，适配器容纳一个它包裹的类的实例。在这种情况下，适配器调用被包裹对象的物理实体。

  - 类适配器模式

    这种适配模式下，适配器继承自己实现的类(一般多重继承)。

- 解释

  将一个类的接口转换成客户希望的另外一个接口。Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。

  - 基本概念

    客户：需要调用我们的代码的对象。

    Adapter模式的宗旨：保留现有类所提供的服务，向客户提供借口，以满足客户的期望。

  - 主要内容

    - 1. 类适配器：

      当客户在接口中定义了他期望的行为时，我们就可以应用适配器模式，提供一个实现该接口的类，并且扩展已有的类，通过创建子类来实现适配。

    - 2. 对象适配器：

      对象适配器：通过组合除了满足用户期待接口还降低了代码间的不良耦合。在工作中推荐使用“对象适配”。

    - 3. 缺省适配器模式：

      缺省适配器模式是一种特殊的适配器模式，但这个适配器是由一个抽象类实现的，并且在抽象类中要实现目标接口中所规定的所有方法，但很多方法的实现都是“平庸”的实现，也就是说，这些方法都是空方法。而具体的子类都要继承此抽象类。

- 适用情况

1. 接口中规定了所有要实现的方法
2. 但一个要实现此接口的具体类，只用到了其中国的几个方法，而其它的方法都是没有用。

- 实现方法

1. 用一个抽象类实现已有的接口，并实现接口中所规定的所有方法，这些方法的实现可以都是“平庸”实现----空方法；但此类中的方法是具体的方法，而不是抽象发给发，否则的话，在具体的子类中仍要实现所有的方法，这就失去了适配器本来的作用。
2. 原本要实现接口的子类，只实现其中的抽象类即可，并在其内部实现时，只对其感兴趣的方法进行实现。

- 注意事项

1. 充当适配器角色的类就是：实现已有接口的抽象类
2. 为什么要用抽象类:

此类是不要被实例化的。而只充当适配器的角色，也就为其子类提供了一个共同的接口，但其子类有可以将精力只集中在其感兴趣的地方。

- 模式解析

你想适用一个已经存在的适配器模式，而他的接口不符合你的需求。你想创建一个可以复用的类，该类可以与其他不相关的类或不可预见的类协同工作。你想适用一些已经存在的子类，但是不可能对每一个都进行子类化一一匹配他们的接口，对象适配器可以适配他的父类接口。适配器如何一个常见的变压器，也如果电脑的变压器喝插线板之间的电源连接线，它们虽然都是3相的，但是电脑后面的插孔却不能之间插到插线板上。作者曾经遇到过一个ASP编程的难题，字段名字是bh,每个编号是唯一的，但却不是主键，表中适用一个自动增长的id作为主键。在产品的详情页中适用传过来的参数id查询产品，而在另外一个系统中也有一个同样的表，需要访问详情页(已经由另外一个程序员设计好，并且地面晦涩难懂)，由于字段值是自动增长的，两个表的主键并不对应(在其中一个系统中进行删除添加都会引起id的增长)，在具体的实现中，本人在有详情页的系统中添加了一个页面(adapter)，接受传过来的产品编号bh,然后根据编号查找数据库得到相应产品的主键id,最后让页面跳转到详情页面并传递一个id,在另外的系统中只要得到产品的编号bh,并把bh作为参数传递到添加的页面(adapter)便可以得到正确的结果。

- 总结

如何做到一个类不被实例化或者不被轻易实例化？

1. 把一个类定义为抽象类；
2. 把一个类的构造方法设置为：private类型的,这样在客户端就不能通过new ClassName()方法来轻易将一个类实例化，而要生成此类的实例就必须通过一个特殊的方法，这样在一个系统中，对此类的使用就能得到合理的控制(如：单例模式/多例模式/简单工厂方法等模式)。
3. 对于两个独立的系统，要满足OCP原则，则适配器模式会有一定的局限性。

- 示例

:::: code-group
::: code-group-item Structural code

```cs
namespace Design_Pattern.Adapter
{
    var target = new Structural.Adapter();
    target.Request();

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了适配器模式，该模式将一个类的接口映射到另一个类，以便它们可以一起工作。
    /// 这些不兼容的类可能来自不同的库或框架。
    /// </summary>
    public class Structural
    {
        public class Target
        {
            public virtual void Request()
            {
                Console.WriteLine("Called Target Request()");
            }
        }

        public class Adapter:Target
        {
            private readonly Adaptee _adapter = new Adaptee();

            public override void Request()
            {
                _adapter.SpecificRequest();
            }
        }

        public class Adaptee
        {
            public void SpecificRequest()
            {
                Console.WriteLine("Called SpecificRequest()");
            }
        }
    }
}
```

:::
::: code-group-item RealWorld code

```cs
namespace Design_Pattern.Adapter
{
    var unknown = new RealWorld.Compound();
    unknown.Display();

    var water = new RealWorld.RichCompound("Water");
    water.Display();

    var benzene = new RealWorld.RichCompound("Benzene");
    benzene.Display();

    var ethanol = new RealWorld.RichCompound("Ethanol");
    ethanol.Display();

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了适配器模式，该模式将一个类的接口映射到另一个类，以便它们可以一起工作。
    /// 这些不兼容的类可能来自不同的库或框架。
    /// </summary>
    public class Structural
    {
        public class Target
        {
            public virtual void Request()
            {
                Console.WriteLine("Called Target Request()");
            }
        }

        public class Adapter:Target
        {
            private readonly Adaptee _adapter = new Adaptee();

            public override void Request()
            {
                _adapter.SpecificRequest();
            }
        }

        public class Adaptee
        {
            public void SpecificRequest()
            {
                Console.WriteLine("Called SpecificRequest()");
            }
        }
    }
}
```

:::
::::
