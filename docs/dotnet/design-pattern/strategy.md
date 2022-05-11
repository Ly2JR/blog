# 策略模式(Strategy)

策略模式是指有一定行动内容的相对稳定的策略名称。策略模式再古代种又称"计策",简称"计",如《汉书.高帝纪上》:"汉王从其计"。这里的"计"指的就是计谋、策略。策略模式具有相对稳定的形式，如"避实就虚"、"出奇制胜"等。一定的策略模式，即可应用雨战略决策，也可应用雨战术决策;既可实施于大系统的全局性行动，也可实施于大系统的局部性行动。

- 简介

  策略模式作为一种软件涉及模式，指对象有某一行为，但是再不同的场景中，该行为有不同的实现算法。

  策略模式：

  1. 定义了一组算法(业务规则);
  2. 封装了每个算法；
  3. 这族的算法可互换代替(interchangeable)。

- 组成

  1. 抽象策略角色：策略类，通常由一个接口或者抽象类实现。
  2. 具体策略角色：包装了相关的算法和行为。
  3. 环境角色：持有一个策略类的引用，最终给客户端调用。

- 应用场景

  1. 多个类只区别再表现行为不同,可以使用Strategy模式，再运动时动态选择具体要执行的行为。
  2. 需要再不同情况下使用不同的策略(算法),或者策略还可能在未来用其他方式来实现。
  3. 对客户隐藏具体策略(算法)的实现细节，彼此完全独立。

- 优缺点

  - 优点

    1. 策略模式提供了管理相关的算法族的办法。策略类的等级结构定义了一个算法或行为族。恰当使用继承可以把公共的代码转移到父类里面，从而避免重复的代码。
    2. 策略模式提供了可以替换继承关系的办法。继承可以处理多种算法或行为。如果不是用策略模式，那么使用算法或行为的环境类就可能会有一些子类，没一个子类提供一个不同的算法或行为。但是，这样依赖算法或行为的使用者就和算法或行为本身混在一起。决定使用哪一种算法或采取哪一种行为的逻辑就和算法或行为的逻辑混合在一起，从而不可能再独立演化。继承使得动态改变算法或行为变得不可能。
    3. 使用策略模式可以避免使用多重条件转移语句。多重转移语句维护不易，它把采取哪一种算法或采取哪一种行为的逻辑于算法或行为的逻辑混合在一起，统统立在一个多重转移语句里面，比使用继承的办法还要原始于落后。

  - 缺点

    1. 客户端必须知道所有的策略类，并自行决定使用哪一个策略类。这就意味着客户端必须理解这些算法的区别，以便适时选择恰当的算法类。换言之，策略模式只只用客户端知道所有的算法或行为的情况。
    2. 策略模式造成很多的策略类，每个具体策略类都会产生一个新类。有时候可以把通过依赖于环境的状态保存到客户端里面，而将策略类射击场可共享的，这样策略类实例可以被不同客户端使用。换言之，可以使用享元模式来减少对象的数量。

- 示例

  参与此模式的类和对象包括：

  - Strategy(`SortStrategy`)
    - 声明所有支持的算法通用的接口。Context使用这个接口调用一个ConcreteStrategy定义的算法。

  - ConcreteStrategy(`QuickSort`,`ShellSort`,`MergeSort`)
    - 使用Strategy接口实现算法。

  - Context(`SortedList`)
    - 配置有一个ConcreteStrategy对象。
    - 维护对Strategy对象的引用。
    - 可以定义一个让Strategy访问其数据的接口。

:::: code-group
::: code-group-item Strutural code

```cs
// 此代码演示了以对象形式封装功能的策略模式。
// 这允许客户端动态更改算法策略。

Context context;

context = new Context(new ConcreteStrategyA());
context.ContextInterface();

context = new Context(new ConcreteStrategyB());
context.ContextInterface();

context = new Context(new ConcreteStrategyC());
context.ContextInterface();

// Wait for user
Console.ReadKey();

// Called ConcreteStrategyA.AlgorithmInterface()
// Called ConcreteStrategyB.AlgorithmInterface()
// Called ConcreteStrategyC.AlgorithmInterface()

public abstract class Strategy
{
    public abstract void AlgorithmInterface();
}

public class ConcreteStrategyA : Strategy
{
    public override void AlgorithmInterface()
    {
        Console.WriteLine("Called ConcreteStrategyA.AlgorithmInterface()");
    }
}

public class ConcreteStrategyB : Strategy
{
    public override void AlgorithmInterface()
    {
        Console.WriteLine("Called ConcreteStrategyB.AlgorithmInterface()");
    }
}

public class ConcreteStrategyC:Strategy
{
    public override void AlgorithmInterface()
    {
        Console.WriteLine("Called ConcreteStrategyC.AlgorithmInterface()");
    }
}

public class Context
{
    private readonly Strategy _strategy;

    public Context(Strategy strategy)
    {
        this._strategy = strategy;
    }

    public void ContextInterface()
    {
        _AlgorithmInterface();
    }
}
```

:::
::: code-group-item Real-World code

```cs
// 展示了以排序对象的形式封装排序算法的策略模式。
// 这允许客户端动态更改排序策略，包括Quicksort、Shellsort和Mergesort。

var studentRecords = new SortedList();
studentRecords.Add("Samual");
studentRecords.Add("Jimmy");
studentRecords.Add("Sandra");
studentRecords.Add("Vivek");
studentRecords.Add("Anna");

studentRecords.SetSortStrategy(new QuickSort());
studentRecords.Sort();

studentRecords.SetSortStrategy(new ShellSort());
studentRecords.Sort();

studentRecords.SetSortStrategy(new MergeSort());
studentRecords.Sort();

// Wait for user
Console.ReadKey();

// QuickSorted list
//  Anna
//  Jimmy
//  Samual
//  Sandra
//  Vivek
// ShellSorted list
//  Anna
//  Jimmy
//  Samual
//  Sandra
//  Vivek
// MergeSorted list
//  Anna
//  Jimmy
//  Samual
//  Sandra
//  Vivek

public  abstract class SortStrategy
{
    public abstract void Sort(List<string> list);
}

public class QuickSort:SortStrategy
{
    public override void Sort(List<string> list)
    {
        list.Sort();//Default is Quicksort
        Console.WriteLine("QuickSorted list ");
    }
}

public class ShellSort : SortStrategy
{
    public override void Sort(List<string> list)
    {
        //list.ShellSort();not-implemented
        Console.WriteLine("ShellSorted list ");
    }
}

public class MergeSort : SortStrategy
{
    public override void Sort(List<string> list)
    {
        //list.MergeSort();not-implemented
        Console.WriteLine("MergeSorted list ");
    }
}

public class SortedList
{
    private List<string> list=new List<string>();
    private SortStrategy sortStrategy;

    public void SetSortStrategy(SortStrategy sortStrategy)
    {
        this.sortStrategy= sortStrategy;
    }

    public void Add(string name)
    {
        list.Add(name);
    }

    public void Sort()
    {
        sortSort(list);

        foreach (var name in list)
        {
            Console.WriteLine(" "+name);
        }
    }
}
```

:::
::::
