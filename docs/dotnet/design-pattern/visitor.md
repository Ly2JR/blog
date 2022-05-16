# 访问者模式(Visitor)

访问者模式(Visitor Pattern)是GoF提出的23种设计模式种的一种，属于行为模式。据《大话设计模式》中说算是最复杂也是最难以理解的一种模式了。

定义(源于GOF《Design Pattern》)：表示一个作用于某对象结构中的各元素的操作。它使你可以在不改变各元素类的前提下定义作用于这些元素的新操作。

- 涉及角色

  1. Visitor抽象访问者角色，为该对象结构中具体元素角色声明一个访问操作接口。该操作接口的名字和参数标识了发送访问请求给具体访问者的具体元素角色，这个访问者就可以通过该元素角色的特定接口直接访问它，
  2. ConcreteVisitor具体访问者角色，实现Visitor声明的接口。
  3. Element定义一个接受访问操作(accept()),它以一个访问者(Visitor())作为参数。
  4. ConcreteElement具体元素，实现了抽象元素(Element)所定义的接受操作接口。
  5. ObjectStructure结构对象角色，这是使用访问者模式必备的角色。它具有以下特征：能枚举它的元素；可以提供一个高层接口以允许访问者访问它的元素；如有需要，可以设计成一个复合对象或者一个聚集(如一个列表或无序集合)

- 模式特点

  访问者模式把数据结构和作用与结构上的操作解耦合，使得操作集合可相对自由地演化。

  访问者模式使用于数据结构相对稳定算法又易变化的系统。因为访问者模式使得算法操作增加变得容易。若系统数据结构对象易于变化，经常有新的数据对象增加进来，则不适合使用访问者模式。

  访问者模式的优点是增加操作很容易，因为增加操作意味着增加新的访问者。访问者模式将有关行为集中到一个访问者对象中，其改变不影响系统数据结构。其缺点就是增加新的数据结构很困难。

- 优点

  1. 符合单一职责原则：凡是使用访问者模式的场景中，元素类中需要封装在访问者中的操作必定是与元素类本身关系不大且是易变的操作，使用访问者模式一方面符合单一职责原则，另一方面，因为被封装的操作通常来说都是易变的，所以当发生变化时，就可以在不改变元素类本身的前提下，实现对变化部分的扩展。
  2. 扩展性良好：元素类可以通过接受不同的访问者来实现对不同操作的扩展。

- 适用情况

  1. 一个对象结构包含很多类对象，它们有不同的接口，而你想对这些对象实施一些依赖于其具体类的操作。
  2. 需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而你想避免让这些操作"污染"这些对象的类。Visitor模式使得你可以将相关的操作集中起来定义在一个类中。
  3. 当该对象结构被很多应用共享时，用Visitor模式让每个应用仅包含需要用到的操作。
  4. 定义对象结构的类很少改变，但经常需要在此结构上定义新的操作，改变对象结构类需要定义对所有访问者的接口，这可能需要很大的代价。如果对象结构类经常改变，那么可能还是在这些类中定义这些操作比较好。

- 示例

  参与此模式的类和对象包括：

  - Visitor(`Visitor`)
    - 为对象结构中的每个ConcrteElement类声明一个访问操作。该操作的名称和签名标识了向访问者发送访问请求的类。这让访问者可以确定被访问元素的具体类。然后访问者可以通过其特定的界面直接访问元素。

  - ConcreteVisitor(`IncomeVisitor`,`VacationVisitor`)
    - 实现访问者声明的每个操作。每个操作都实现了为结构中的相应类或对象定义的算法片段。ConcreteVisitor为算法提供上下文并存储其本地状态。这个状态通常会在结构的遍历过程中累积结果。

  - Element(`Element`)
    - 定义一个以访问者为参数的Accept操作。

  - ConcreteElement(`Employee`)
    - 实现以访问者为参数的Accept操作。

  - ObjectStructure(`Employees`)
    - 可以枚举它的元素。
    - 可以提供高级界面以允许访问者访问其元素。
    - 可以是组合(模式)或集合，例如列表或集合。

:::: code-group
::: code-group-item Structural code

```cs
// 演示了访问者模式。
// 其中对象遍历对象结构并对该结构中的每个节点执行相同的操作。
// 不同的访问者对象定义了不同的操作。

var o = new ObjectStructure();
o.Attach(new ConcreteElementA());
o.Attach(new ConcreteElementB());

var v1 = new ConcreteVisitor1();
var v2 = new ConcreteVisitor2();

o.Accept(v1);
o.Accept(v2);

// Wait for user
Console.ReadKey();

// ConcreteElementA visited by ConcreteVisitor1
// ConcreteElementB visited by ConcreteVisitor1
// ConcreteElementA visited by ConcreteVisitor2
// ConcreteElementB visited by ConcreteVisitor2

public abstract class Visitor
{
    public abstract void VisitConcreteElementA(ConcreteElementA concreteElementA);

    public abstract void VisitConcreteElementB(ConcreteElementB concreteElementB);
}

public class ConcreteVisitor1 : Visitor
{
    public override void VisitConcreteElementA(ConcreteElementA concreteElementA)
    {
        Console.WriteLine($"{concreteElementA.GetType().Name} visited by {this.GetType().Name}");
    }

    public override void VisitConcreteElementB(ConcreteElementB concreteElementB)
    {
        Console.WriteLine($"{concreteElementB.GetType().Name} visited by {this.GetType().Name}");
    }
}

public class ConcreteVisitor2:Visitor
{
    public override void VisitConcreteElementA(ConcreteElementA concreteElementA)
    {
        Console.WriteLine($"{concreteElementA.GetType().Name} visited by {this.GetType().Name}");
    }

    public override void VisitConcreteElementB(ConcreteElementB concreteElementB)
    {
        Console.WriteLine($"{concreteElementB.GetType().Name} visited by {this.GetType().Name}");
    }
}

public abstract class Element
{
    public abstract void Accept(Visitor visitor);
}

public class ConcreteElementA:Element
{
    public override void Accept(Visitor visitor)
    {
        visitor.VisitConcreteElementA(this);
    }

    public void OperationA()
    {

    }
}

public class ConcreteElementB:Element
{
    public override void Accept(Visitor visitor)
    {
        visitor.VisitConcreteElementB(this);
    }

    public void OperationB()
    {

    }
}

public class ObjectStructure
{
    private readonly List<Element> _elements=new List<Element>();

    public void Attach(Element element)
    {
        _elements.Add(element);
    }

    public void Detach(Element element)
    {
        _elements.Remove(element);
    }

    public void Accept(Visitor visitor)
    {
        foreach (var element in _elements)
        {
            element.Accept(visitor);
        }
    }
}
```

:::
::: code-group-item Real-World code

```cs
// 演示了访问者模式。
// 其中两个对象遍历员工列表并对每个员工执行相同的操作。
// 这两个访问者对象定义了不同的操作---一个调整休假天数，另一个调整收入。

var employee = new Employees();
employee.Attach(new Clerk());
employee.Attach(new Director());
employee.Attach(new President());

employee.Accept(new IncomeVisitor());
employee.Accept(new VacationVisitor());

// Wait for user
Console.ReadKey();

// Clerk Kevin's new income:￥27,500.00
// Director Elly's new income:￥38,500.00
// President Eric's new income:￥49,500.00

// Clerk Kevin's new Vacation days:17
// Director Elly's new Vacation days:19
// President Eric's new Vacation days:24

public interface IVisitor
{
    void Visit(Element element);
}

public class IncomeVisitor : IVisitor
{
    public void Visit(Element element)
    {
        if (element is Employee employee)
        {
            employee.Income *= 1.10;
            Console.WriteLine($"{employee.GetType().Name} {employee.Name}'s new income:{employee.Income:C}");
        }
    }
}

public class VacationVisitor:IVisitor
{
    public void Visit(Element element)
    {
        if (element is Employee employee)
        {
            employee.VacationDays += 3;

            Console.WriteLine($"{employee.GetType().Name} {employee.Name}'s new Vacation days:{employee.VacationDays}");
        }
    }
}

public abstract class Element
{
    public abstract void Accept(IVisitor visitor);
}

public class Employee:Element
{
    public Employee(string name, double income, int vacationDays)
    {
        Name=name;
        Income=income;
        VacationDays = vacationDays;
    }

    public string Name { get; set; }

    public double Income { get; set; }

    public int VacationDays { get; set; }

    public override void Accept(IVisitor visitor)
    {
        Visit(this);
    }
}

public class Employees
{
    private readonly List<Employee> _employees=new List<Employee>();

    public void Attach(Employee employee)
    {
        _employees.Add(employee);
    }

    public void Detach(Employee employee)
    {
        _employees.Remove(employee);
    }

    public void Accept(IVisitor visitor)
    {
        foreach (var employee in _employees)
        {
            employee.Accept(visitor);
        }
        Console.WriteLine();
    }
}

public class Clerk : Employee
{
    public Clerk() : base("Kevin", 25000.0, 14)
    {
    }
}

public class Director : Employee
{
    public Director() : base("Elly", 35000.0, 16)
    {
    }
}

public class President : Employee
{
    public President() : base("Eric", 45000.0, 21)
    {
    }
}
```

:::
::::
