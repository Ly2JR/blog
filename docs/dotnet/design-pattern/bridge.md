# 桥接模式(Bridge)

桥接模式是将抽象部分与它的实现部分分离，使它们都开元独立地变化。它是一种对象结构型模式，又成为柄体(Handle and Body)模式或接口(Interface)模式。

- 内容简介

在软件系统中，某些类型由于自身的逻辑，它具有两个或多个维度的变化，那么如何应对这种”多维度的变化“？如何利用面向对象的技术来使得该类型能够轻松的沿着多个方向进行变化，而又不引入额外的复杂度？这就要使用Bridge模式。

- 意图

  【GOF95】在提出桥梁模式的时候指出，桥梁模式的用意是”将抽象化(Abstraction)与实现化(Implementation)脱藕，使得二者可以独立地变化“。这句话有三个关键词，也就是抽象化、实现化和脱藕。

  - 抽象化

    存在于多个实体中的共同的概念性联系，就是抽象化。作为一个过程，抽象化就是忽略一些信息，从而把不同的实体当做同样的实体对待。

  - 实现化

    抽象化给出的具体实现，就是实现化。

  - 脱藕

    所谓耦合，就是两个实体的行为的某种强关联。而将它们的强关联去掉，就是耦合的解脱，或称脱藕。在这里，脱藕是指将抽象化和实现化之间的耦合解脱开，或者说是将它们之间的强关联改换成弱关联。

    将两个角色之间的继承关系改为聚合关系，就是将它们之间的强关联改换为弱关联。因此，桥梁模式中的所谓脱藕，就是指在一个软件系统的抽象化和实现化之间使用组合/聚合关系而不是继承关系，从而使两者可以相对独立地变化。这就是桥梁模式的用意。

- 结构

系统含有两个等级结构，也就是:

1. 由抽象化角色和修正抽象化角色组成的抽象化等级结构。
2. 由实现化角色和两个具体实现化角色所组成的实现化等级结构。

桥梁模式所设计的角色有：

抽象化(Abstraction)角色：抽象化给出的定义，病保存一个对实现化对象的引用。

修正抽象化(Refined Abstraction)角色：扩展抽象化角色，改变和修正父类对抽象化的定义。

实现化(Implementor)角色：这给角色给出实现化角色的接口，但不给出具体的实现。必须指出的是，这个接口不一定和抽象化角色的接口定义相同，实际上，这两个接口可以非常不一样。实现化角色应当只给出底层操作，而抽象化角色应当只给出基于底层操作的更高一层的操作。

具体实现化(Concrete Implementor)角色：这个角色给出实现化角色接口的具体实现。

- 示例

  参与此模式的类和对象包括：

  - Abstraction(`BusinessObject`)
    - 定义抽象的接口。
    - 维护对实现器类型对象的引用。

  - RefinedAbstraction(`CustomerBusinessObject`)
    - 扩展抽象定义的接口。

  - Implementor(`DataObject`)
    - 定义实现类的接口。这个接口不必完全对应于抽象的接口；实际上，这两个接口可能完全不同。通常，实现接口仅提供基元操作，抽象基于这些基元定义更高级别的操作。

  - ConcreteImplementor(`CustomerDataObject`)
    - 实现实现器接口并定义其具体实现。

:::: code-group
::: code-group-item Structural code

```cs
// 演示了将接口于其实现分离(解耦)的桥接模式。
// 实现可以在不改变使用对象抽象的客户端的情况下发展。

var ab = new RefinedAbstraction
{
    Implementor = new ConcreteImplementorA()
};
ab.Operation();

ab.Implementor = new ConcreteImplementorB();
ab.Operation();

// Wait for user
Console.ReadKey();

public class Abstraction
{
    protected Implementor implementor = null!;

    public Implementor Implementor
    {
        set => implementor = value;
    }

    public virtual void Operation()
    {
        implementor.Operation();
    }
}

public abstract class Implementor
{
    public abstract void Operation();
}

public class RefinedAbstraction:Abstraction
{
    public override void Operation()
    {
        implementor.Operation();
    }
}

public class ConcreteImplementorA : Implementor
{
    public override void Operation()
    {
        Console.WriteLine("ConcreteImplementorA Operation");
    }
}

public class ConcreteImplementorB:Implementor
{
    public override void Operation()
    {
        Console.WriteLine("ConcreteImplementorB Operation");
    }
}
```

:::
::: code-group-item Real-World code

```cs
// 演示了桥接模式，其中BusinessObject抽象于DataObject中的实现分离。
// DataObject实现可以动态发展而无需更改任何客户端。

var customers = new Customers
{
    Data = new CustomersData("Chicago")
};

customers.Show();
customers.Next();
customers.Show();
customers.Next();
customers.Show();
customers.Add("Henry Velasquez");
customers.ShowAll();

// Wait for user
Console.ReadKey();

public class CustomerBase
{
    private DataObject _dataObject = null!;

    public DataObject Data
    {
        get => _dataObject;
        set=> _dataObject = value;
    }

    public virtual void Next()
    {
        _dataObject.NextRecord();
    }

    public virtual void Prior()
    {
        _dataObject.PriorRecord();
    }

    public virtual void Add(string customer)
    {
        _dataObject.AddRecord(customer);
    }

    public virtual void Delete(string customer)
    {
        _dataObject.DeleteRecord(customer);
    }

    public virtual void Show()
    {
        _dataObject.ShowRecord();
    }

    public virtual void ShowAll()
    {
        _dataObject.ShowAllRecords();
    }
}

public class Customers : CustomerBase
{
    public override void ShowAll()
    {
        Console.WriteLine();
        Console.WriteLine("-----------------------------");
        base.ShowAll();
        Console.WriteLine("-----------------------------");
    }
}
public abstract class DataObject
{
    public abstract void NextRecord();
    public abstract void PriorRecord();
    public abstract void AddRecord(string name);
    public abstract void DeleteRecord(string name);
    public abstract string GetCurrentRecord();
    public abstract void ShowRecord();
    public abstract void ShowAllRecords();
}

public class CustomersData : DataObject
{
    private readonly List<string> _customers = new List<string>();
    private int _current;
    private readonly string _city;

    public CustomersData(string city)
    {
        _city=city;
        _customers.Add("Jim Jones");
        _customers.Add("Samual Jackson");
        _customers.Add("Allen Good");
        _customers.Add("Ann Stills");
        _customers.Add("Lisa Giolani");
    }

    public override void NextRecord()
    {
        if (_current <= _customers.Count - 1)
        {
            _current++;
        }
    }

    public override void PriorRecord()
    {
        if (_current > 0)
        {
            _current--;
        }
    }

    public override void AddRecord(string customer)
    {
        _customers.Add(customer);
    }

    public override void DeleteRecord(string customer)
    {
        _customers.Remove(customer);
    }

    public override string GetCurrentRecord()
    {
        return _customers[_current];
    }

    public override void ShowRecord()
    {
        Console.WriteLine(_customers[_current]);
    }

    public override void ShowAllRecords()
    {
        Console.WriteLine($"Customer City: {_city}");
        foreach (var customer in _customers)
        {
            Console.WriteLine($" {customer}");
        }
    }
}
```

:::
::::
