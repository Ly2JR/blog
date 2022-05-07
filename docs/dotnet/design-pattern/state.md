# 状态模式(State)

允许一个对象在其内部状态改变时改变它的行为。对象看起来似乎修改了它的类

- 状态模式

(State Pattern)是设计模式的一种，属于行为模式。

- 定义

(源于Design Pattern):当一个对象的内在状态改变时允许改变其行为，这个对象看起来想是改变了其类。

状态模式主要解决的是当控制一个对象状态的条件表达式过于复杂的情况。把状态的判断逻辑转移到表示不同状态的一些列类中，可以把复杂的判断逻辑简化。

- 意图

允许一个对象在其内部状态改变时改变它的行为

- 适用场景

  1. 一个对象的行为取决于它的状态，并且它必须在运行时刻根据状态改变它的行为。
  2. 一个操作中含有庞大的多分支结构，并且这些分支决定于对象的状态。

- 示例

  参与此模式的类和对象包括：

  - Context(Account)
    - 定义客户感兴趣的接口
    - 维护定义当前状态的ConcreteState子类的实例。

  - State(State)
    - 定义了一个接口，用于封装与上下文的特定状态相关的行为。

  - Concrete State(RedState,SilverState,GoldState)
    - 每个子类实现与上下文状态相关联的行为。

:::: code-group
::: code-group-item Strutural code

```cs
// 演示了状态模式。

var context = new Context(new ConcreteStateA());

context.Request();
context.Request();
context.Request();
context.Request();
context.Request();

// Wait for user
Console.ReadKey();

public abstract class State
{
    public abstract void Handle(Context context);
}

public class ConcreteStateA:State
{
    public override void Handle(Context context)
    {
        context.State = new ConcreteStateB();
    }
}

public class ConcreteStateB : State
{
    public override void Handle(Context context)
    {
        context.State = new ConcreteStateA();
    }
}

public class Context
{
    private State _state;

    public Context(State state)
    {
        _state= state;
    }

    public State State
    {
        get => _state;
        set
        {
            _state = value;
            Console.WriteLine($"State:{_state.GetType().Name}");
        }
    }

    public void Request()
    {
        _state.Handle(this);
    }
}
```

:::
::: code-group-item Real-World code

```cs
// 该模式允许账户根据其余额表现出不同的行为。
// 行为上的差异被委托给称为RedState、SilverState和GoldSate的State对象。
// 这些状态代码透支账户、初始账户和信誉良好的账户。

var account = new Account("Jim Johnson");

account.Deposit(500.0);
account.Deposit(300.0);
account.Deposit(550.0);
account.PayInterest();
account.Withdraw(2000.00);
account.Withdraw(1100.00);

// Wait for user
Console.ReadKey();

public abstract class State
{
    protected Account account;
    protected double balance;
    protected double Interest;
    protected double LowerLimit;
    protected double UpperLimit;

    public Account Account
    {
        get => account;
        set => account = value;
    }

    public double Balance
    {
        get => balance;
        set => balance = value;
    }

    public abstract void Deposit(double amount);
    public abstract void Withdraw(double amount);
    public abstract void PayInterest();
}

public class RedState : State
{
    private double _serviceFee;

    public RedState(State state)
    {
        balance=state.Balance;
        account = state.Account;
        Initialize();
    }

    private void Initialize()
    {
        Interest = 0.0;
        LowerLimit = -100.0;
        UpperLimit = 0.0;
        _serviceFee = 15.00;
    }

    public override void Deposit(double amount)
    {
        balance+=amount;
        StateChangeCheck();
    }

    public override void Withdraw(double amount)
    {
        amount = amount - _serviceFee;
        Console.WriteLine("No founds available for withdrawal!");
    }

    public override void PayInterest()
    {
        
    }

    private void StateChangeCheck()
    {
        if (balance > UpperLimit)
        {
            account.State = new SilverState(this);
        }
    }
}

public class SilverState : State
{
    public SilverState(State state) : this(state.Balance, state.Account)
    {

    }

    public SilverState(double balance, Account account)
    {
        this.balance = balance;
        this.account=account;
        Initialize();
    }

    private void Initialize()
    {
        Interest = 0.0;
        LowerLimit = 0.0;
        UpperLimit = 1000.0;
    }

    public override void Deposit(double amount)
    {
        balance += amount;
        StateChangeCheck();
    }

    public override void Withdraw(double amount)
    {
        balance -= amount;
        StateChangeCheck();
    }

    public override void PayInterest()
    {
        balance += Interest * balance;
        StateChangeCheck();
    }

    private void StateChangeCheck()
    {
        if (balance < LowerLimit)
        {
            account.State = new RedState(this);
        }
        else if (balance > UpperLimit)
        {
            account.State = new GoldState(this);
        }
    }
}

public class GoldState : State
{
    public GoldState(State state) : this(state.Balance, state.Account)
    {

    }

    public GoldState(double balance, Account account)
    {
        this.balance=balance;
        this.account = account;
        Initialize();
    }

    private void Initialize()
    {
        Interest = 0.05;
        LowerLimit = 1000.0;
        UpperLimit = 10000000.0;
    }

    public override void Deposit(double amount)
    {
        balance+=amount;
        StateChangeCheck();
    }

    public override void Withdraw(double amount)
    {
        balance -= amount;
        StateChangeCheck();
    }

    public override void PayInterest()
    {
        balance+=Interest * balance;
        StateChangeCheck();
    }

    private void StateChangeCheck()
    {
        if (balance < 0.0)
        {
            account.State = new RedState(this);
        }
        else if (balance < LowerLimit)
        {
            account.State = new SilverState(this);
        }
    }
}

public class Account
{
    private string _owner;

    public Account(string owner)
    {
        _owner=owner;
        State = new SilverState(0.0, this);
    }

    public double Balance => State.Balance;

    public State State { get; set; }

    public void Deposit(double amount)
    {
        State.Deposit(amount);
        Console.WriteLine($"Deposited {amount:C} --- ");
        Console.WriteLine($" Balance = {this.Balance:C}");
        Console.WriteLine($" Status = {this.State.GetType().Name}");
        Console.WriteLine("");
    }

    public void Withdraw(double amount)
    {
        State.Withdraw(amount);
        Console.WriteLine($"Withdraw {amount:C} --- ");
        Console.WriteLine($" Balance = {this.Balance:C}");
        Console.WriteLine($" Status = {this.State.GetType().Name}\n");
        Console.WriteLine("");
    }

    public void PayInterest()
    {
        State.PayInterest();
        Console.WriteLine("Interest Paid --- ");
        Console.WriteLine($" Balance = {this.Balance:C}");
        Console.WriteLine($" Status = {this.State.GetType().Name}\n");
        Console.WriteLine("");
    }
}
```

:::
::::
