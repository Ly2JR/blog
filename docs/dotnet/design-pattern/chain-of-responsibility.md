# 职责链模式(Chain of Responsibility)

职责链模式(Chain of Responsibility pattern)是2018年公布的计算机技术名词。

- 定义

一种设计模式。把可以响应请求的对象组织成一条链，并在这条链上传递请求，从而保证多个对象都有处理请求并可以避免请求方和响应方的紧密耦合。

- 示例

:::: code-group
::: code-group-item Structural code

```cs
namespace Design_Pattern.Chain
{
    var h1 = new Chain.Structural.ConcreteHandler1();
    var h2 = new Chain.Structural.ConcreteHandler2();
    var h3 = new Chain.Structural.ConcreteHandler3();
    h1.SetSuccessor(h2);
    h2.SetSuccessor(h3);

    int[] requests = { 2, 5, 14, 22, 18, 3, 27, 20 };
    foreach (var request in requests)
    {
        h1.HandleRequest(request);
    }

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了责任链模式。
    /// 其中为多个链接对象(链)提供了响应请求或将其交给下一个对象的机会
    /// </summary>
    public class Structural
    {
        public abstract class Handler
        {
            protected Handler successor;

            public void SetSuccessor(Handler successor)
            {
                this.successor = successor;
            }

            public abstract void HandleRequest(int request);
        }

        public class ConcreteHandler1 : Handler
        {
            public override void HandleRequest(int request)
            {
                if (request is >= 0 and < 10)
                {
                    Console.WriteLine($"{this.GetType().Name} handled request {request}");

                }else if (successor != null)
                {
                    successor.HandleRequest(request);
                }
            }
        }

        public class ConcreteHandler2 : Handler
        {
            public override void HandleRequest(int request)
            {
                if (request is >= 10 and < 20)
                {
                    Console.WriteLine($"{this.GetType().Name} handled request {request}");

                }
                else if (successor != null)
                {
                    successor.HandleRequest(request);
                }
            }
        }

        public class ConcreteHandler3 : Handler
        {
            public override void HandleRequest(int request)
            {
                if (request is >= 20 and < 30)
                {
                    Console.WriteLine($"{this.GetType().Name} handled request {request}");

                }
                else if (successor != null)
                {
                    successor.HandleRequest(request);
                }
            }
        }
    }
}
```

:::
::: code-group-item RealWorld code

```cs
namespace Design_Pattern.Chain
{
    var larry = new Chain.RealWorld.Director();
    var sam = new Chain.RealWorld.Director.VicePresident();
    var tammy = new Chain.RealWorld.Director.President();

    larry.SetSuccessor(sam);
    sam.SetSuccessor(tammy);

    var p = new Chain.RealWorld.Purchase(2034, 450, "Supplies");
    larry.ProcessRequest(p);

    p = new Chain.RealWorld.Purchase(2035, 32590.10, "Project X");
    larry.ProcessRequest(p);

    p = new Chain.RealWorld.Purchase(2036, 122100.00, "Project Y");
    larry.ProcessRequest(p);

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了责任链模式，在该模式中，多个相关的经理和高管可以响应采购请求或将其交给上级。
    /// 每个职位都可以有自己的一套规则，他们可以批准这些订单。
    /// </summary>
    public class RealWorld
    {
        public abstract class Approver
        {
            protected Approver successor;

            public void SetSuccessor(Approver successor)
            {
                this.successor = successor;
            }

            public abstract void ProcessRequest(Purchase purchase);
        }

        public class Director:Approver
        {
            public override void ProcessRequest(Purchase purchase)
            {
                if (purchase.Amount < 10000)
                {
                    Console.WriteLine($"{this.GetType().Name} approved request# {purchase.Number}");
                }
                else if (successor != null)
                {
                    successor.ProcessRequest(purchase);
                }
            }

            public class VicePresident : Approver
            {
                public override void ProcessRequest(Purchase purchase)
                {
                    if (purchase.Amount < 25000.0)
                    {
                        Console.WriteLine($"{this.GetType().Name} approved request# {purchase.Number}");
                    }
                    else if (successor != null)
                    {
                        successor.ProcessRequest(purchase);
                    }
                }
            }

            public class President : Approver
            {
                public override void ProcessRequest(Purchase purchase)
                {
                    if (purchase.Amount < 100000.0)
                    {
                        Console.WriteLine($"{this.GetType().Name} approved request# {purchase.Number}");
                    }
                    else
                    {
                        Console.WriteLine($"Request#{purchase.Number} requires an executive meeting!");
                    }
                }
            }
        }

        public class Purchase
        {
            public Purchase(int number,double amount,string purpose)
            {
                Number = number;
                Amount = amount;
                Purpose = purpose;
            }

            public int Number { get; set; }

            public double Amount { get; set; }

            public string Purpose { get; set; }
        }
    }
}
```

:::
::::
