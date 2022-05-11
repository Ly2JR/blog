# 外观模式(Facade)

外观模式。亦称"过程模式"。学校课程评价模式之一。美国教育学者斯泰克1967年在所著《教育评价的外观》中提出。主张按照描述和判断资料来评价课程，关键的活动是在课程实施的全过程中进行观察和搜集意见，以了解人民对课程的不同看法。这种模式不限于检测教学的成果，重视描述和判断教学过程中的各种复杂、动态的现象和事务。

- 结构

  1. Facade

     这个外观类为子系统提供一个共同的对外接口。

  2. Clients

     这个对象通过一个外观接口读写子系统中各接口的数据资源。

- 适用场景

  在以下情况下可以考虑适用外观模式：

  1. 设计初期阶段，应该有意识的将不同层分离，层与层之间建立外观模式。
  2. 开发阶段，子系统越来越复杂，增加外观模式提供一个简单的调用接口。
  3. 维护一个大型遗留系统的时候，可能这个系统已经非常难以维护和扩展，但又包含非常重要的功能，为其开发一个外观类，以便更系统与其交互。

- 优点

  1. 实现了子系统与客户端之间的松耦合关系。
  2. 客户端屏蔽了子系统组件，减少了客户端所需处理的对象数目，并使得子系统适用起来更加容易。

- 示例

  参与此模式的类和对象包括：

  - Facade(`MortgageApplication`)
    - 知道哪些子系统类负责请求。
    - 将客户端请求委托给适当的子系统对象。

  - Subsystem classes(`Bank`,`Credit`,`Loan`)
    - 实现子系统功能。
    - 处理由Facade对象分配的工作。
    - 对外观一无所知，也不对其进行参考。

:::: code-group
::: code-group-item Structural code

```cs
/// 演示了外观模式。
/// 它为类的大型子系统提供了一个简化且统一的接口。

var facade = new Facade();
facade.MethodA();
facade.MethodB();

// Wait for user
Console.ReadKey();

// MethodA() ----
//  SubSystemOne Method
//  SubSystemTwo Method
//  SubSystemFour Method

// MethodB() ----
//  SubSystemTwo Method
//  SubSystemThree Method

public class SubSystemOne
{
    public void MethodOne()
    {
        Console.WriteLine(" SubSystemOne Method");
    }
}

public class SubSystemTwo
{
    public void MethodTwo()
    {
        Console.WriteLine(" SubSystemTwo Method");
    }
}

public class SubSystemThree
{
    public void MethodThree()
    {
        Console.WriteLine(" SubSystemThree Method");
    }
}

public class SubSystemFour
{
    public void MethodFour()
    {
        Console.WriteLine(" SubSystemFour Method");
    }
}

public class Facade
{
    private readonly SubSystemOne _one;
    private readonly SubSystemTwo _two;
    private readonly SubSystemThree _three;
    private readonly SubSystemFour _four;

    public Facade()
    {
        _one=new SubSystemOne();
        _two=new SubSystemTwo();
        _three=new SubSystemThree();
        _four=new SubSystemFour();
    }

    public void MethodA()
    {
        Console.WriteLine("\nMethodA() ---- ");
        _one.MethodOne();
        _two.MethodTwo();
        _four.MethodFour();
    }

    public void MethodB()
    {
        Console.WriteLine("\nMethodB() ---- ");
        _two.MethodTwo();
        _three.MethodThree();
    }
}
```

:::
::: code-group-item Real-World code

```cs
// 将Facade模式演示为MortgageApplication对象，该对象为测量申请人信用度的大型类子系统提供了一个简化的接口。

var mortgage = new Mortgage();

var customer = new Customer("Ann McKinsey");
bool eligible = mortgage.IsEligible(customer, 125000);
Console.WriteLine($"\n{customer.Name} has been {(eligible?"Approved":"Rejected")}");

// Wait for user
Console.ReadKey();

// Ann McKinsey applies for ￥125,000.00 loan

// Check bank for Ann McKinsey
// Check loans for Ann McKinsey
// Check credit for Ann McKinsey

// Ann McKinsey has been Approved

public class Bank
{
    public bool HasSufficientSavings(Customer c, int amount)
    {
        Console.WriteLine($"Check bank for {c.Name}");
        return true;
    }
}

public class Credit
{
    public bool HasGoodCredit(Customer c)
    {
        Console.WriteLine($"Check credit for {c.Name}");
        return true;
    }
}

public class Loan
{
    public bool HasNoBadLoans(Customer c)
    {
        Console.WriteLine($"Check loans for {c.Name}");
        return true;
    }
}

public class Customer
{
    public Customer(string name)
    {
        Name=name;
    }

    public string Name { get; }
}

public class Mortgage
{
    private readonly Bank _bank=new Bank();
    private readonly Loan _loan=new Loan();
    private readonly Credit _credit=new Credit();

    public bool IsEligible(Customer customer, int amount)
    {
        Console.WriteLine($"{customer.Name} applies for {amount:C} loan\n");
        var eligible = true;
        if (!_bank.HasSufficientSavings(customer, amount))
        {
            eligible = false;
        }else if (!_loan.HasNoBadLoans(customer))
        {
            eligible = false;
        }
        else if (!_credit.HasGoodCredit(customer))
        {
            eligible = false;
        }

        return eligible;
    }
}
```

:::
::::
