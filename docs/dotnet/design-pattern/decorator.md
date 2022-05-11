# 装饰模式(Decorator)

装饰模式指的是在不必改变原类文件和使用继承的情况下，动态地扩展一个对象的功能。它是通过创建一个包装对象，也就是装饰来包裹真实的对象。

- 定义

  23钟设计模式之一，英文叫Decorator Pattern,又叫装饰者模式。装饰者模式是在不必改变原类文件和使用继承的情况下，动态地扩展一个对象的功能。它是通过创建一个包装对象，也就是装饰来包裹真实的对象。

- 模式特点

  1. 装饰对象和真实对象有相同的接口。这样客户端对象就能以和真实对象相同的方式和装饰对象交互。
  2. 装饰对象包含一个真实对象的引用(reference)。
  3. 装饰对象接受所有来自客户端的请求。它把这些请求转发给真实的对象。
  4. 装饰对象可以在转发这些请求以前或以后增加一些附加功能。这样就确保了在运行时，不用修改给定对象的结构就可以在外部增加附加的功能。在面向对象的设计中，通常是通过继承来实现对给定类的功能扩展。

- 适用性

  以下情况使用Decorator模式

  1. 需要扩展一个类的功能，或给一个类添加附近职责。
  2. 需要动态的给一个对象添加功能，这些功能可以再动态的撤销。
  3. 需要增加由一些基本功能的排列组合而产生的非常大量的功能，从而使继承关系变的不现实。
  4. 当不能采用生成子类的方法进行扩充时。一种情况是，可能有大量独立的扩展，为支持每一种组合将产生大量的子类，使得子类数目呈爆炸性增长。另一种情况可能是因为类定义被隐藏，或类定义不能用于生成子类。

- 优点

  1. Decorator模式于继承关系的目的都是要扩展对象的功能，但是Decorator可以提供比继承更多的灵活性。
  2. 通过使用不同的具体装饰类以及这些装饰类的排列组合，设计师可以创造出很多不同行为的组合。

- 缺点

  1. 这种比继承更加灵活动机的特性，也同时意味着更加多的复杂性。
  2. 装饰模式会导致设计中出现许多小类，如果过度使用，会使程序变得很复杂。
  3. 装饰模式是针对抽象组件(Component)类型编程。但是，如果你要针对具体组件编程时，就应该重新思考你的应用架构，以及装饰者是否合适。当然也可以改变Component接口，增加新的公开的行为，实现”半透明“的装饰者模式。在实际项目中要做出最佳选择。

- 设计原则

  1. 多组合，少继承。
    利用继承设计子类的行为，是在编译时静态决定的，而且所有的子类都会继承到相同的行为。然而，如果能够利用组合的做法扩展对象的行为，就可以在运行时动态地进行扩展。
  2. 类应设计的对扩展开放，对修改关闭。

- 模式简化

  1. 如果只有一个Concrete Component类而没有抽象的Component接口时，可以让Decorator继承Concrete Component.
  2. 如果只有一个Concrete Decorator类时，可以将Decorator和Concrete Decorator合并。

- 相关区别

  1. 关于新职责：适配器也可以在转换时增加新的职责，但主要目的不在此。装饰者模式主要是给被装饰者新增新职责的。
  2. 关于原接口：适配器模式是用新接口来调用原接口，原接口对新系统是不可见或者说不可用的。装饰者模式原封不动的使用原接口，系统对装饰的对象也通过原接口来完成使用。（增加新接口的装饰者模式可用认为是其变种--”半透明“装饰者）
  3. 关于其包裹的对象：适配器是知道被适配者的详细情况的(就是那个类或那个接口)。装饰者只知道其接口是什么，至于其具体类型(是基类还是其他派生类)只有在运行期间才知道。

- 代码示例

  在装饰模式中的各个角色有：

  1. 抽象构件(Component)角色：给出一个抽象接口，以规范准备接收附加责任的对象。
  2. 具体构件(Concrete Component)角色：定义一个将要接收附加责任的类。
  3. 装饰(Decorator)角色：持有一个构件(Component)对象的实例，并实现一个与抽象构建接口一致的接口。
  4. 具体装饰(Concrete Decorator)角色：负责给构建对象添加上附加的责任。

- 示例

  参与此模式的类和对象包括：

  - Component(`LibraryItem`)
    - 定义对象的接口，这些对象可以动态地向其添加职责。

  - ConcreteComponent(`Book`,`Video`)
    - 定义可附加其他职责的对象。

  - Decorator(`Decorator`)
    - 维护对组件对象的引用，并定义符合Component接口的接口。

  - ConcreteDecorator(`Borrowable`)
    - 向组件添加职责。

:::: code-group
::: code-group-item Structural code

```cs
// 演示了装饰器模式，它动态地向现有对象添加额外的功能。

var c = new ConcreteComponent();
var d1 = new ConcreteDecoratorA();
var d2 = new ConcreteDecoratorB();

d1.SetComponent(c);
d2.SetComponent(d1);

d2.Operation();

// Wait for user
Console.ReadKey();

// ConcreteComponent.Operation()
// ConcreteDecoratorA.Operation()
// ConcreteDecoratorB.Operation()

public abstract class Component
{
    public abstract void Operation();
}

public class ConcreteComponent:Component
{
    public override void Operation()
    {
        Console.WriteLine("ConcreteComponent.Operation()");
    }
}

public abstract class Decorator:Component
{
    protected Component Component;

    public void SetComponent(Component component)
    {
        this.Component = component;
    }

    public override void Operation()
    {
        if (Component != null)
        {
            Component.Operation();
        }
    }
}

public class ConcreteDecoratorA:Decorator
{
    public override void Operation()
    {
        base.Operation();
        Console.WriteLine("ConcreteDecoratorA.Operation()");
    }
}

public class ConcreteDecoratorB:Decorator
{
    public override void Operation()
    {
        base.Operation();
        AddedBehavior();
        Console.WriteLine("ConcreteDecoratorB.Operation()");
    }

    void AddedBehavior()
    {

    }
}
```

:::
::: code-group-item Real-World code

```cs
// 演示了装饰器模式。
// 其中"可借"功能被添加到现有的图书馆项目(书籍和视频)中。

var book = new Book("Worley", "Inside ASP.NET", 10);
book.Display();

var video = new Video("Spielberg", "Jaws", 23, 92);
video.Display();

Console.WriteLine("\nMaking video borrowable:");

var borrowvideo = new Borrowable(video);
borrowvideo.BorrowItem("Customer #1");
borrowvideo.BorrowItem("Customer #2");
borrowvideo.Display();

// Wait for user
Console.ReadKey();

// Book ------
//  Author:Worley
//  Title:Inside ASP.NET
// # Copies: 10

// Video ------
//  Director: Spielberg
//  Title: Jaws
//  # Copies: 23
//  Playtime: 92


// Making video borrowable:

// Video ------
//  Director: Spielberg
//  Title: Jaws
//  # Copies: 21
//  Playtime: 92

//  borrower:Customer #1
//  borrower:Customer #2

public abstract class LibraryItem
{
    public int NumCopies { get; set; }

    public abstract void Display();
}

public class Book:LibraryItem
{
    private readonly string _author;
    private readonly string _title;

    public Book(string author, string title, int numCopies)
    {
        _author = author;
        _title = title;
        NumCopies = numCopies;
    }

    public override void Display()
    {
        Console.WriteLine("\nBook ------ ");
        Console.WriteLine($" Author:{_author}");
        Console.WriteLine($" Title:{_title}");
        Console.WriteLine($"# Copies: {NumCopies}");
    }
}

public class Video:LibraryItem
{
    private readonly string _director;
    private readonly string _title;
    private readonly int _playTime;

    public Video(string director, string title, int numCopies, int playTime)
    {
        _director=director;
        _title=title;
        _playTime=playTime;
        NumCopies=numCopies;
    }

    public override void Display()
    {
        Console.WriteLine("\nVideo ------ ");
        Console.WriteLine($" Director: {_director}");
        Console.WriteLine($" Title: {_title}");
        Console.WriteLine($" # Copies: {NumCopies}");
        Console.WriteLine($" Playtime: {_playTime}\n");
    }
}

public abstract class Decorator:LibraryItem
{
    protected LibraryItem libraryItem;

    protected Decorator(LibraryItem libraryItem)
    {
        this.libraryItem = libraryItem;
    }

    public override void Display()
    {
        libraryItem.Display();
    }
}

public class Borrowable:Decorator
{
    protected readonly List<string> borrowers = new List<string>();
    public Borrowable(LibraryItem libraryItem) : base(libraryItem)
    {
    }

    public void BorrowItem(string name)
    {
        borrowers.Add(name);
        libraryItem.NumCopies--;
    }

    public void ReturnItem(string name)
    {
        borrowers.Remove(name);
        libraryItem.NumCopies++;
    }

    public override void Display()
    {
        base.Display();
        foreach (var borrow in borrowers)
        {
            Console.WriteLine($" borrower:{borrow}");
        }
    }
}
```

:::
::::
