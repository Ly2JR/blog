# 模板方法(Template Method)

模板方法模式定义了一个算法的步骤，并允许子类别为一个或多个步骤提供其实践方式。让子类别在不改变算法架构的情况下，重新定义算法中的某些步骤。在软件工程中，它是一种软件设计模式，和C++模板没有关联。

- 用法

  模板方法模式多用在：

  - 某些类别的算法中，实做了相同的方法，造成程式码的重复。

  - 控制子类别必须遵守的一些事项。

- 示例

:::: code-group
::: code-group-item Structural code

```cs
namespace Design_Pattern.TemplateMethod
{
    var aA = new Structural.ConcreteClassA();
    aA.TemplateMethod();

    var aB = new Structural.ConcreteClassB();
    aB.TemplateMethod();

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了模板方法。
    /// 它提供了方法的骨架调用序列。一个或多个步骤可以推迟到实现这些步骤的子类，而不改变整个调用顺序。
    /// </summary>
    public class Structural
    {
        public abstract class AbstractClass
        {
            public abstract void PrimitiveOperation1();
            public abstract void PrimitiveOperation2();

            public void TemplateMethod()
            {
                PrimitiveOperation1();
                PrimitiveOperation2();
                Console.WriteLine();
            }
        }

        public class ConcreteClassA : AbstractClass
        {
            public override void PrimitiveOperation1()
            {
                Console.WriteLine("ConcreteClassA.PrimitiveOperation1()");
            }
            public override void PrimitiveOperation2()
            {
                Console.WriteLine("ConcreteClassA.PrimitiveOperation2()");
            }
        }

        public class ConcreteClassB : AbstractClass
        {
            public override void PrimitiveOperation1()
            {
                Console.WriteLine("ConcreteClassB.PrimitiveOperation1()");
            }
            public override void PrimitiveOperation2()
            {
                Console.WriteLine("ConcreteClassB.PrimitiveOperation2()");
            }
        }
    }
}
```

:::
::: code-group-item Real-World code

```cs
namespace Design_Pattern.TemplateMethod
{
    var categories = new RealWorld.Categories();
    categories.Run(5);

    var products = new RealWorld.Products();
    products.Run(3);

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了一个名为Run()的模板方法，它提供了一个框架调用方法序列。
    /// 这些步骤的实现被推迟到实现Connect、Select、Process和Disconnect方法的CustomerDataObject子类。
    /// </summary>
    public class RealWorld
    {
        public abstract class DataAccessor
        {
            public abstract void Connect();
            public abstract void Select();
            public abstract void Process(int top);

            public abstract void Disconnect();

            public void Run(int top)
            {
                Connect();
                Select();
                Process(top);
                Disconnect();
            }
        }

        public class Categories : DataAccessor
        {
            private List<string> _categories;

            public override void Connect()
            {
                _categories = new List<string>();
            }

            public override void Disconnect()
            {
                _categories?.Clear();
            }

            public override void Process(int top)
            {
                Console.WriteLine("Categories --- ");
                for (var i = 0; i < top; i++)
                {
                    Console.WriteLine(_categories[i]);
                }
                Console.WriteLine();
            }

            public override void Select()
            {
                if (_categories != null)
                {
                    _categories.Add("Red");
                    _categories.Add("Green");
                    _categories.Add("Blue");
                    _categories.Add("Yellow");
                    _categories.Add("Purple");
                    _categories.Add("White");
                    _categories.Add("Black");
                }
            }
        }

        public class Products : DataAccessor
        {
            private List<string> _products;

            public override void Connect()
            {
                _products = new List<string>();
            }

            public override void Disconnect()
            {
                _products?.Clear();
            }

            public override void Process(int top)
            {
                Console.WriteLine("Products --- ");
                for (var i = 0; i < top; i++)
                {
                    Console.WriteLine(_products?[i]);
                }
                Console.WriteLine();
            }

            public override void Select()
            {
                if (_products != null)
                {
                    _products.Add("Car");
                    _products.Add("Bike");
                    _products.Add("Boat");
                    _products.Add("Truck");
                    _products.Add("Moped");
                    _products.Add("Rollerskate");
                    _products.Add("Stroller");
                }
            }
        }
    }
}
```

:::
::::
