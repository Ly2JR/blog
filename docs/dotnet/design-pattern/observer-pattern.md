# 观察者模式(Observer Pattern)

观察者模式(有时又被称为模型(Model)-视图(View)模式、源-收听者(Listener)模式或从属者模式)是软件设计模式的一种。在此种模式中，一个目标物件管理所有相异于它的观察者物件，并且在它本身的状态改变时主动发出通知。者通常透过呼叫各观察者所提供的方法来实现。此种模式通常被用来实现事件处理系统。

- 基本介绍

观察者模式是一种对象行为模式。它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。在观察者模式种，主体是通知的发布者，它发出通知时并不需要知道谁是它的观察者，可以又任意数目的观察者订阅并接收通知。观察者模式不仅被广泛应用于软件界面元素之间的交互，在业务对象之间的交互、权限管理等方面也又广泛的应用。

观察者模式(Observer)完美的将观察者和被观察者的对象分离开。举个例子，用户界面可以作为一个观察者，业务数据是被观察者，用户界面观察业务数据的变化，发现数据变化后，就显示在界面上。面向对象设计的一个原则是：系统中的每个类将重点放在某一个功能上，而不是其他方面。一个对象只做一件事情，并且将它做好。观察者模式在模块之间划定了清晰的界限，提高了应用程序的可维护性和重用性。

观察者设计模式定义了对象间的一种一对多的组合关系，以便一个对象的状态发送变化时，所有依赖于它的对象都得到通知并自动刷新。

- 实现方式

观察者模式有很多实现方式，从根本上说，该模式必须包含两个角色：观察者和被观察者。在刚才的例子中，业务数据是被观察对象，用户界面是观察者。观察者和被观察者之间存在"观察"的逻辑关联，当被观察者发生改变的时候，观察者就会观察到这样的变化，并且做出相应的相应。如果在用户界面、业务数据之间适用这样的观察过程，可以确保界面和数据之间华清界限，假定应用程序的需求发生变化，需要修改界面的编写，只需要重新构建一个用户界面，业务数据不需要发生变化。

- 使用场景

1. 当一个抽象模型有两个方面，其中一个方面依赖于另一方面。将这两者封装在独立的对象中以使它们可以各自独立地改变和复用。
2. 当对一个对象的改变需要同时改变其他对象，而不知道具体有多少对象需要被改变。
3. 当一个对象必须通知其他对象，而它又不能假定其他对象是谁。换言之，不希望这些对象是紧密耦合的。

- 角色
  
1. 抽象主题(Subject):

    它把所有观察者对象的引用保存到一个聚集里，每个主题都可以由任何数量的观察者，抽象主题提供一个接口，可以增加和删除观察者对象。

2. 具体主题(Concrete Subject):

    将有关状态存入具体观察者对象；在具体主题内部状态改变时，给所有登记过的观察者发出通知。

3. 抽象观察者(Observer):

    为所有的具体观察者定义一个接口，在得到主题通知时更新自己。

4. 具体观察者(Concrete Observer):

    实现抽象观察者角色所要求的更新接口，以便使本身的状态于主题状态协调。

- 优缺点

  观察者模式的主要的作用就是对对象解耦，将观察者和被观察者完全隔离。

  - 观察者模式的优点

    观察者模式解除了主题和具体观察者的耦合，让耦合的双方都依赖于抽象，而不是依赖具体。

  - 观察者模式的缺点

    在应用观察者模式时需要考虑以下开发小路问题，程序中包括一个被观察者和多个被观察者，开发和调试比较复杂，而且消息的通知默认是顺序执行的，一个观察者的卡顿会影响整体的执行效率。在这种情况下，一般考虑采用异步的方式。

- 过程

  实现观察者模式由很多形式，比较直观的一种是使用一种"注册-通知-撤销注册"的形式。

  - 观察者

    (Observer)将自己注册到被观察对象(Subject)中，被观察对象将观察者存放在一个容器(Container)里。

  - 被观察

    被观察对象发生了某种变化，从容器中得到所有注册过的观察者，将变化通知观察者。

  - 撤销观察

    观察者告诉被观察者要撤销观察，被观察者从容器中将观察者去除。观察者将自己注册到被观察者的容器中，被观察者不应该过问观察者的具体类型，而是应该使用观察者的接口。这样的优点是：假定程序中还有别的观察者，那么只要这个观察者也是相同的接口实现即可。一个被观察者可以对应多个观察者，当被观察者发生变化的时候，他可以将消息---通知给所有的观察者。基于接口，而不是具体的实现，这一点为程序提供了更大的灵活性。

- 示例

:::: code-group
::: code-group-item Structural code

```cs
namespace Design_Pattern
{
    var s = new ObserverPattern.ConcreteSubject();
    s.Attach(new ObserverPattern.ConcreteObserver(s,"x"));
    s.Attach(new ObserverPattern.ConcreteObserver(s, "y"));
    s.Attach(new ObserverPattern.ConcreteObserver(s, "z"));

    s.SubjectState = "ABC";
    s.Notify();

    public class ObserverPattern
    {
        public abstract class Subject
        {
           private readonly List<Observer> _observers=new();

           public void Attach(Observer observer)
           {
               _observers.Add(observer);
           }

           public void Detach(Observer observer)
           {
               _observers.Remove(observer);
           }

           public void Notify()
           {
               foreach (var o in _observers)
               {
                   o.Update();
               }
           }
        }

        public class ConcreteSubject : Subject
        {
           public string? SubjectState { get; set; }
        }

        public abstract class Observer
        {
           public abstract void Update();
        }

        public class ConcreteObserver : Observer
        {
           private readonly string _name;
           private string? _observerState;
           private ConcreteSubject _subject;

           public ConcreteObserver(ConcreteSubject subject, string name)
           {
               _subject = subject;
               _name = name;
           }
           public override void Update()
           {
               _observerState = _subject.SubjectState;
               Console.WriteLine($"Observer {_name}'s new state is {_observerState}");
           }

           public ConcreteSubject Subject
           {
               get => _subject;
               set => _subject = value;
           }
        }
    }
}
```

:::
::: code-group-item Real-world code

```cs
namespace Design_Pattern
{
    var ibm = new ObserverPattern.IBM("IBM", 120.00);
    ibm.Attach(new ObserverPattern.Investor("Sorros"));
    ibm.Attach(new ObserverPattern.Investor("Berkshire"));

    ibm.Price = 120.10;
    ibm.Price = 121.00;
    ibm.Price = 120.50;
    ibm.Price = 120.75;

    public class ObserverPattern
    {
        public abstract class Stock
        {
            private string _symbol;
            private double _price;
            private List<IInvestor> _investors=new List<IInvestor>();

            public Stock(string symbol, double price)
            {
                _symbol=symbol;
                _price=price;
            }

            public void Attach(IInvestor investor)
            {
                _investors.Add(investor);
            }

            public void Detach(IInvestor investor)
            {
                _investors.Remove(investor);
            }

            public void Notify()
            {
                foreach (var investor in _investors)
                {
                    investor.Update(this);
                }

                Console.WriteLine("");
            }

            public double Price
            {
                get => _price;
                set
                {
                    if (_price != value)
                    {
                        _price = value;
                        Notify();
                    }
                }
            }

            public string Symbol => _symbol;
        }

        public class IBM :ObserverPattern.Stock
        {
            public IBM(string symbol, double price) : base(symbol, price)
            {

            }
        }

        public interface IInvestor
        {
            void Update(ObserverPattern.Stock stock);
        }

        public class Investor : IInvestor
        {
            private string _name;
            private ObserverPattern.Stock _stock;

            public Investor(string name)
            {
                _name=name;
            }

            public void Update(ObserverPattern.Stock stock)
            {
                Console.WriteLine($"Notified {_name } of {stock.Symbol}'s change  to {stock.Price:C}");
            }

            public ObserverPattern.Stock Stock
            {
                get => _stock;
                set => _stock = value;
            }
        }
    }
}
```

:::
::::
