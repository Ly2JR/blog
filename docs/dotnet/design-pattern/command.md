# 命令模式(Command)

在面向对象程序设计的范畴中，命令模式(Command Pattern)是一种设计模式，它尝试以物件来代表实际行动。

- 概述

  在软件系统中，"行为请求者"与"行为实现者"通常呈现一种"紧耦合"。但在某些场合，比如要对行为进行"记录、撤销/重做、事务"等处理，这种无法抵御变化的紧耦合是不合适的。在这种情况下，如何将"行为请求者"与"行为实现者"解耦？将一组行为抽象为对象，实现二者之间的松耦合。这就是命令模式(Command Pattern)。

- 模式结构

  - Command

    定义命令的接口，声明执行的方法。

  - ConcreteCommand:

    命令接口实现对象，是"虚"的实现；通常会持有接收者，并调用接收者的功能来完成命令要执行的操作。

  - Receiver:

    接收者，真正执行命令的对象。任何类都可能成为一个接收者，只要它能够实现命令要求实现的相应功能。

  - Invoker:

    要求命令对象执行请求，通常会持有命令对象，可以持有很多的命令对象。这个是客户端真正触发命令并要求命令执行相应操作的地方，也就是说相当于使用命令对象的入口。

  - Client:

    创建具体的命令对象，并且设置命令对象的接收者。注意这个不是我们常规意义上的客户端，而是在组装命令对象和接收者，或许，把这个Client称为装配者会更好理解，因为真正使用命令的客户端是从Invoker来触发执行。

- 模式协作

  1. Client创建一个ConcreteCommand对象并指定它的Receiver对象
  2. 某个Invoker对象存储该ConcreteCommand对象
  3. 该Invoker通过调用Command对象的Execute操作来提交一个请求。若该命令是可撤销的，ConcreteCommand就在执行Execute操作之前存储当前状态以用于取消该命令
  4. ConcreteCommand对象对调用它的Receiver的一些操作以执行该请求

- 模式分析

  1. 命令模式的本质是对命令进行封装，将发出命令的责任和执行命令的责任分隔开。
  2. 每一个命令都是一个操作：请求的一方发出请求，要求执行一个操作；接收的一方收到请求，并执行操作。
  3. 命令模式允许请求的一方和接收的一方独立开来，使得请求的一方不必知道接收请求的一方的接口，更不必知道请求是怎么被接收，以及操作是否被执行、何时被执行，以及是怎么被执行的。
  4. 命令模式使请求本身成为一个对象，这个对象和其他对象意义被存储和传递。
  5. 命令模式的关键在于引入了抽象命令接口，且发送者针对抽象命令接口编程，只有实现了抽象命令接口的具体命令才能与接收者关联。

- 模式优点

  1. 降低对象之间的耦合度。
  2. 新的命令可以很容易地加入到系统中。
  3. 可以比较容易地设计一个组合命令。
  4. 调用同一方法实现不同的功能。

- 模式缺点
  
  使用命令模式可能会导致某些系统有过多的具体命令类。因为针对每一个命令都需要设计一个具体命令类，因此某些系统可能需要大量具体命令类，这将影响命令模式的使用。

- 适用环境

  1. 系统需要将请求调用者和请求接收者解耦，使得调用者和接收者不直接交互。
  2. 系统需要在不同的时间指定请求、将请求排队和执行请求。
  3. 系统需要支持命令的撤销(Undo)操作和恢复(Redo)操作。
  4. 系统需要将一组操作组合在一起，即支持宏命令。

- 示例

  参与此模式的类和对象包括：

  - Command(`Command`)
    - 声明一个用于执行操作的接口

  - ConcreteCommand(`CalculatorCommand`)
    - 定义Receiver对象和动作之间的绑定
    - 通过调用Receiver上的相应操作来实现Execute

  - Client(`CommandApp`)
    - 创建一个ConcreteCommand对象并设置它的接收者。

  - Invoker(`User`)
    - 要求命令执行请求

  - Receiver(`Calculator`)
    - 知道如何执行与执行请求相关的操作。

:::: code-group
::: code-group-item Structural code

```cs
// 演示了命令模式。
// 该模式将请求存储为允许客户端执行或回放请求的对象。

var receiver = new Receiver();
var command = new ConcreteCommand(receiver);
var invoker = new Invoker();

invoker.SetCommand(command);
invoker.ExecuteCommand();

// Wait for user
Console.ReadKey();

// Called Receiver.Action()

public abstract class Command
{
    protected Receiver Receiver;

    protected Command(Receiver receiver)
    {
        this.Receiver= receiver;
    }

    public abstract  void Execute();
}

public class ConcreteCommand : Command
{
    public ConcreteCommand(Receiver receiver) : base(receiver)
    {
    }

    public override void Execute()
    {
        Receiver.Action();
    }
}

public class Receiver
{
    public void Action()
    {
        Console.WriteLine("Called Receiver.Action()");
    }
}

public class Invoker
{
    private Command _command = null!;

    public void SetCommand(Command command)
    {
        _command=command;
    }

    public void ExecuteCommand()
    {
        _command.Execute();
    }
}
```

:::
::: code-group-item Real-World code

```cs
// 演示了在一个简单的计算器中使用的命令模式，它具有无线数量的撤销和重做。
// 请注意，在C#中,"运算符"一词是关键字。用`@`作为前缀允许将其用作标识符。

var user = new User();
user.Compute('+', 100);
user.Compute('-', 50);
user.Compute('*', 10);
user.Compute('/', 2);

user.Undo(4);
user.Redo(3);

// Wait for user
Console.ReadKey();

// Current value=100 (following + 100)
// Current value= 50 (following - 50)
// Current value=500 (following * 10)
// Current value=250 (following / 2)

// --- Undo 4 levels
// Current value=500 (following * 2)
// Current value= 50 (following / 10)
// Current value=100 (following + 50)
// Current value=  0 (following - 100)

// --- Redo 3 levels
// Current value=100 (following + 100)
// Current value= 50 (following - 50)
// Current value=500 (following * 10)

public abstract class Command
{
    public abstract void Execute();

    public abstract void UnExecute();
}

public class CalculatorCommand : Command
{
    private readonly char _operator;
    private readonly int _operand;
    private readonly Calculator _calculator;

    public CalculatorCommand(Calculator calculator, char @operator, int operand)
    {
        _calculator = calculator;
        _operator = @operator;
        _operand = operand;
    }

    public override void Execute()
    {
        _calculator.Operation(_operator, _operand);
    }

    public override void UnExecute()
    {
        _calculator.Operation(Undo(_operator), _operand);
    }

    private char Undo(char @operator)
    {
        switch (@operator)
        {
            case '+': return '-';
            case '-': return '+';
            case '*': return '/';
            case '/': return '*';
            default: throw new ArgumentException("@operator");
        }
    }
}

public class Calculator
{
    private int _current;

    public void Operation(char @operator, int operand)
    {
        switch (@operator)
        {
            case '+': _current += operand; break;
            case '-': _current -= operand; break;
            case '*': _current *= operand; break;
            case '/': _current /= operand; break;
        }
        Console.WriteLine($"Current value={_current,3} (following {@operator} {operand})");
    }
}

public class User
{
    private readonly Calculator _calculator = new();
    private readonly List<Command> _commands = new();
    private int _current;

    public void Redo(int levels)
    {
        Console.WriteLine($"\n--- Redo {levels} levels ");
        for (var i = 0; i < levels; i++)
        {
            if (_current < _commands.Count - 1)
            {
                var command = _commands[_current++];
                command.Execute();
            }
        }
    }

    public void Undo(int levels)
    {
        Console.WriteLine($"\n--- Undo {levels} levels");

        for (int i = 0; i < levels; i++)
        {
            if (_current > 0)
            {
                var command = _commands[--_current];
                command.UnExecute();
            }
        }
    }

    public void Compute(char @operator, int operand)
    {
        var command = new CalculatorCommand(_calculator, @operator, operand);
        command.Execute();

        _commands.Add(command);
        _current++;
    }
}
```

:::
::::
