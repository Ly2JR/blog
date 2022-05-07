# 备忘录模式(Memento)

备忘录模式是一种软件设计模式；在不破坏封闭的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可以将该对象恢复到原先保存的状态。

- 基本介绍

    备忘录模式(Memoento Pattern)又叫做快照模式(Snapshot Pattern)或Token模式，是GoF的23种设计模式之一，属于行为模式。

  - 定义

    在不破坏封闭的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可以将该对象恢复到原先保存的状态。

  - 涉及角色

    1. Originator(发起人):负责创建一个备忘录Memento，用以记录当前时刻自身的内部状态，并可使用备忘录恢复内部状态。Originator可以根据需要决定Memento存储自己的哪些内部状态。
    2. Memento(备忘录):负责存储Originator对象的内部状态，并可以防止Originator以外的其他对象访问备忘录。备忘录有两个接口：Caretaker只能看到备忘录的窄接口，他只能将备忘录传递给其他对象。Originator却可看到备忘录的宽接口，允许它访问返回到先前状态所需要的所有数据。
    3. Caretaker(管理者):负责备忘录Memento,不能对Menmento的内容进行访问或者操作。

- 备忘录模式的优点和缺点

  - 备忘录模式的优点

    1. 有时一些发起人对象的内部信息必须保存在发起人对象以外的地方，但是必须要由发起人对象自己读取，这是，使用备忘录模式可以把复杂的发起人内部信息对其他的对象屏蔽起来，从而可以恰当地保持封装的边界。
    2. 本模式简化了发起人类。发起人不再需要管理和保存其内部状态的一个个版本，客户端可以自行管理他们所需要的这些状态的版本。
    3. 当发起人角色的状态改变的时候，有可能这个状态无效，这时候就可以使用暂时存储起来的备忘录将状态复原。

  - 备忘录模式的缺点

    1. 如果发起人角色的在状态需要完整地存储到备忘录对象种，那么再资源消耗上面备忘录对象会很昂贵。
    2. 当负责人角色将一个备忘录存储起来的时候，负责人可能并不知道这个状态会占用多大的存储控件，从而无法提醒用户一个操作是否很昂贵。
    3. 当发起人角色的状态改变的时候，有可能这个协议无效。如果状态改变的成功率不高的话，不如采取"假如"协议模式。

- 示例

  参与此模式的类和对象包括：

  - Memento(`Memento`)
    - 存储Originator对象的内部状态。纪念品可以更具其发起者的判断，尽可能多地或京可能少地存储发起者的内部状态。
    - 防止发起者以外的对象访问。Mementos实际上有两个接口。Caretaker看到了Memento的狭窄接口---它只能将memento传递给其他对象。相比之下，originator看到了一个广泛的界面，它可以访问所有必要的数据以将自己恢复到之前的状态。理想情况下，只有产生备忘录的始发者才被允许访问备忘录的内部状态。

  - Originator(`SalesProspect`)
    - 创建一个包含其当前内部状态快照的纪念品。
    - 使用纪念品恢复其内部状态。

  - Caretaker(`Caretaker`)
    - 负责纪念品的保管。
    - 从不操作或检测纪念品的内容。

:::: code-group
::: code-group-item Structureal code

```cs
// 演示了临时保存和恢复另一个对象的内部状态的备忘录模式

var o = new Originator
{
    State = "On"
};
var c =new Caretaker
{
    Memento = o.CreateMemento()
};

o.State = "Off";
o.SetMemento(c.Memento);

// Wait for user
Console.ReadKey();

public class Originator
{
    private string? _state;

    public string? State
    {
        get => _state;
        set
        {
            _state = value;
            Console.WriteLine($"State = {_state}");
        }
    }

    public Memento CreateMemento()
    {
        return new Memento(_state);
    }

    public void SetMemento(Memento memento)
    {
        Console.WriteLine("Restoring state...");
        State=State;
    }
}

public class Memento
{
    public Memento(string? state)
    {
        State=state;
    }

    public string? State { get; }
}

public class Caretaker
{
    public Memento Memento { get; set; } = null!;
}
```

:::
::: code-group-item Real-World code

```cs
// 演示了临时保存然后恢复SalesProspect的内部状态的Memento模式

var s = new SaleProspect()
{
    Name = "Noel van Halen",
    Phone = "(412) 256-0990",
    Budget = 25000.0
};

var m = new ProspectMemory
{
    Memento = s.SaveMemento()
};

s.Name = "Leo Welch";
s.Phone = "(310) 209-7111";
s.Budget = 1000000.0;

s.RestoreMemento(m.Memento);

// Wait for user
Console.ReadKey();

public class SaleProspect
{
    private string _name = null!;
    private string _phone = null!;
    private double _budget;

    public string Name
    {
        get => _name;
        set
        {
            _name = value;
            Console.WriteLine($"Name: {_name}");
        }
    }

    public string Phone
    {
        get => _phone;
        set
        {
            _phone = value;
            Console.WriteLine($"Phone: {_phone}");
        }
    }

    public double Budget
    {
        get => _budget;
        set
        {
            _budget = value;
            Console.WriteLine($"Budget: {_budget}");
        }
    }

    public Memento SaveMemento()
    {
        Console.WriteLine("\nSaving state -- \n");
        return new Memento(_name, _phone, _budget);
    }

    public void RestoreMemento(Memento memento)
    {
        Console.WriteLine("\nRestoring state --\n");
        Name=Name;
        Phone=Phone;
        Budget=Budget;
    }
}

public class Memento
{
    public string Name { get; set; }
    public string Phone { get; set; }

    public double Budget { get; set; }

    public Memento(string name, string phone, double budget)
    {
        Name = name;
        Phone = phone;
        Budget = budget;
    }
}

public class ProspectMemory
{
    public Memento Memento { get; set; } = null!;
}
```

:::
::::
