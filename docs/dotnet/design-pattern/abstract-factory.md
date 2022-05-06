# 抽象工厂(Abstract Factory)

抽象工厂是所有形态的工厂模式中最为抽象和最具有一般性的一种形态。
抽象工厂是指当有多个抽象角色时使用的一种工厂模式。
抽象工厂模式可以向客户端提供一个接口，使客户端在不必指定产品的具体情况下，创建多个产品族中的产品对象。

工厂模式中的每一个形态都是针对一定问题的解决方案，工厂方法针对的是多个产品系统结构；
而抽象工厂模式针对的是过个产品族结构，一个产品族内有多个产品系列。

- 实现原理

抽象工厂模式相对于工厂方法模式来说，就是工厂方法模式是针对一个产品系列的，而抽象工厂模式是针对多个产品系列的，
即工厂方法模式是一个产品系列一个工厂类，而抽象工厂模式是多个产品系列一个工厂类。
在抽象工厂模式中，客户端不在负责对象的创建，而是把这个责任丢给了具体的工厂类，客户端只负责对对象的调用，
从而明确了各个类的职责。并且当一系列相互关联的产品被设计到一个工厂类里后，客户端的调用将会变得非常简单，
而且，入股需要更换这一系列的产品，则只需要更换一个工厂类即可。

入股客户端需要创建一些产品结构，而这些产品结构又分别属于不同的产品类别，则可以使用抽象工厂模式，抽象工厂模式
中的抽象工厂类负责定义传教对象的接口，具体这一系列对象的创建工作由实现抽象工厂的具体工厂类来完成。

- 角色

抽象工厂模式中存在四种角色，分别是抽象工厂角色，具体工厂角色，抽象产品角色，具体产品角色。

抽象工厂角色：担任这个角色的是工厂方法模式的核心，它是与应用系统商业逻辑无关的。

具体工厂角色：这个角色之间在客户端的调用下创建产品的实例。这个角色含有选择合适的产品对象的逻辑，而这个逻辑是
与应用系统的商业逻辑紧密相关的。

抽象产品角色：担任这个校色的类是工厂方法模式所创建的对象的父类，或它们共同拥有的接口。

具体产品角色：抽象工厂模式所创建的任何产品对象都是某一个具体产品类的实例。这是客户端最终需要的东西，
其内部一定充满了应用系统的商业逻辑。

- 功能

抽象工厂模式的一个主要功能是它能够隔离要生成的具体产品类，由于这些类的实际类名部被隐藏在工厂内部，因此客户端
根本不需要关系如何对它们进行实例化的细节。每种设计模式都是针对特定问题的解决方案，而抽象工厂模式面临的问题则
是当涉及到有多个产品等级结构时，如何更好地进行软件体系结构的设计。

- 适用情况

  - 一个系统要独立于它的产品的创建、组合和表示时。

  - 一个系统要由多个产品系列中的一个来配置时。

  - 需要强调一系列相关的产品对象的设计以便进行联合使用时。

  - 提供一个产品类库，而只想显示它们的接口而不是实现时。

- 优缺点

  - 优点

    1. 分离了具体的类。客户通过抽象接口操作实例，产品的类名也在具体工厂的实现中被分离，它们不会出现在客户代码中。
    2. 易于交换产品系列。一个具体工厂类只在初始化时出现一次，这使得改变一个应用的具体工厂变得很容易，只需改变具体
    的工厂即可使用不同的产品配置。
    3. 有利于产品的一致性。当一个系列的产品对象被设计成一起工作时，一个应用一次只能使用同一个系列中的对象，这一点
    很重要，而抽象工厂很容易实现这一点。

  - 缺点

    难以支持新种类的产品。因为抽象工厂接口确定了可以被创建的产品集合，所以难以扩展抽象工厂以生产新种类的产品。

- 示例

:::: code-group
::: code-group-item Structural code

```cs
namespace Design_Pattern.AbstractFactory
{
    var factory1 = new Structural.ConcreteFactory1();
    var client1 = new Structural.Client(factory1);
    client1.Run();

    var factory2 = new Structural.ConcreteFactory2();
    var client2 = new Structural.Client(factory2);
    client2.Run();

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了创建对象的并行层次结构的抽象工厂模式。
    /// 对象创建已被抽象化，客户端代码中不需要硬编码的类名。
    /// </summary>
    public class Structural
    {
        public abstract class AbstractFactory
        {
            public abstract AbstractProductA CreateProductA();
            public abstract AbstractProductB CreateProductB();
        }

        public class ConcreteFactory1 : AbstractFactory
        {
            public override AbstractProductA CreateProductA()
            {
                return new ProductA1();
            }

            public override AbstractProductB CreateProductB()
            {
                return new ProductB1();
            }
        }

        public class ConcreteFactory2 : AbstractFactory
        {
            public override AbstractProductA CreateProductA()
            {
                return new ProductA2();
            }

            public override AbstractProductB CreateProductB()
            {
                return new ProductB2();
            }
        }

        public abstract class AbstractProductA{}

        public abstract class AbstractProductB
        {
            public abstract void Interact(AbstractProductA a);
        }

        public class ProductA1 : AbstractProductA{}

        public class ProductB1 : AbstractProductB
        {
            public override void Interact(AbstractProductA a)
            {
                Console.WriteLine($"{this.GetType().Namespace} interacts with {a.GetType().Name}");
            }
        }

        public class ProductA2 : AbstractProductA{}

        public class ProductB2 : AbstractProductB
        {
            public override void Interact(AbstractProductA a)
            {
                Console.WriteLine($"{this.GetType().Name} interacts with {a.GetType().Name}");
            }
        }

        public class Client
        {
            private AbstractProductA _abstractProductA;
            private AbstractProductB _abstractProductB;

            public Client(AbstractFactory factory)
            {
                _abstractProductA=factory.CreateProductA();
                _abstractProductB=factory.CreateProductB();
            }

            public void Run()
            {
                _abstractProductB.Interact(_abstractProductA);
            }
        }
    }
}
```

:::
::: code-group-item Real-World code

```cs
namespace Design_Pattern.AbstractFactory
{
    var africa = new RealWorld.AfricaFactory();
    var world = new RealWorld.AnimalWorld(africa);
    world.RunFoodChain();

    var america = new RealWorld.AmericalFactory();
    world = new RealWorld.AnimalWorld(america);
    world.RunFoodChain();

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了使用不同工厂为电脑游戏创建不同的动物世界。
    /// 虽然大陆工厂创造的动物不同，但动物之间的互动是一样的。
    /// </summary>
    public class RealWorld
    {
        public abstract class ContinentFactory
        {
            public abstract Herbivore CreateHerbivore();
            public abstract Carnivore CreateCarnivore();
        }

        public class AfricaFactory:ContinentFactory
        {
            public override Herbivore CreateHerbivore()
            {
                return new Wildebeest();
            }

            public override Carnivore CreateCarnivore()
            {
                return new Lion();
            }
        }

        public class AmericalFactory:ContinentFactory
        {
            public override Herbivore CreateHerbivore()
            {
                return new Bison();
            }

            public override Carnivore CreateCarnivore()
            {
                return new Wolf();
            }
        }

        public abstract class Herbivore{}

        public abstract class Carnivore
        {
            public abstract void Eat(Herbivore h);
        }

        public class Wildebeest:Herbivore{}

        public class Lion:Carnivore
        {
            public override void Eat(Herbivore h)
            {
                //Eat Wildebeest
                Console.WriteLine($"{this.GetType().Name} eats {h.GetType().Name}");
            }
        }

        public class Bison : Herbivore{}

        public class Wolf:Carnivore
        {
            public override void Eat(Herbivore h)
            {
                //Eat Bison
                Console.WriteLine($"{this.GetType().Name} eats {h.GetType().Name}");
            }
        }

        public  class AnimalWorld
        {
            private Herbivore _herbivore;
            private Carnivore _carnivore;

            public AnimalWorld(ContinentFactory factory)
            {
                _carnivore = factory.CreateCarnivore();
                _herbivore = factory.CreateHerbivore();
            }

            public void RunFoodChain()
            {
                _carnivore.Eat(_herbivore);
            }
        }
    }
}
```

:::
::::
