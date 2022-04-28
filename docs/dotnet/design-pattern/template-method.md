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
namespace Design_Pattern
{
    var categories = new TemplateMethod.Categories();
    categories.Run(5);

    var products=new TemplateMethod.Products();
    products.Run(3);

    public  class TemplateMethod
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
            private List<string>? _categories;

            public override void Connect()
            {
                _categories = new List<string>();
            }

            public override void Disconnect()
            {
                _categories.Clear();
            }

            public override void Process(int top)
            {
                Console.WriteLine("Categories --- ");
                for(var i = 0; i < top; i++)
                {
                    Console.WriteLine(_categories[i]);
                }
                Console.WriteLine();
            }

            public override void Select()
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

        public class Products : DataAccessor
        {
            private List<string>? _products;

            public override void Connect()
            {
                _products = new List<string>();
            }

            public override void Disconnect()
            {
                _products.Clear();
            }

            public override void Process(int top)
            {
                Console.WriteLine("Products --- ");
                for (var i = 0; i < top; i++)
                {
                    Console.WriteLine(_products[i]);
                }
                Console.WriteLine();
            }

            public override void Select()
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
```

:::
::: code-group-item RealWorld code

```cs
```

:::
::::
