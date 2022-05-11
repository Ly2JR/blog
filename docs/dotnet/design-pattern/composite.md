# 组合模式（Composite）

组合模式，将对象组合成树形结构以表示"部分-整体"的层次结构。

- 组合模式概述

  组合模式使得用户对单个对象和组合对象的使用具有一致性。

  有时候又叫做部分-整体模式，它使完美树型结构的问题中，模糊了简单元素和复杂元素的概念，客户程序可以处理简单元素一样来处理复杂元素，从而使得客户程序与复杂元素的内部结构解耦。

  组合模式让你可以优化处理递归或分级模式结构。有许多关于分级数据结构的例子，使得组合模式非常有用武之地。关于分级数据结构的一个普遍性的例子是你每次使用电脑时所遇到的`文件系统`。文件系统由目录和文件组成。每个目录都可以装内容。目录的内容可以是文件，也可以是目录。按照这种方式，计算机的文件系统就是以递归结构来组织的。如果你想要描述这样的数据结构，那么你可以使用组合模式Composite。

  - 定义

    （GOF《设计模式》）:将对象组合成树形结构以表示“部分整体“的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。

  - 涉及角色

    1. Component是组合中的对象声明接口，在适当的情况下，实现所有类共有接口的默认行为。声明一个接口用于访问和管理Component子部件。
    2. Leaf 在组合中表示叶子节点对象，叶子节点没有子节点。
    3. Composite定义有枝界节点行为，用来存储子部件，在Component接口中实现与子部件有关操作，如增加(`add`)和删除(`remove`)等。

  - 适用性

    以下情况下使用Composite模式：

    1. 你想表达对象的部分-整体层次结构
    2. 你希望用户忽略组合对象与单个对象的不同，用户将统一地使用组合结构中的所有对象。

- 总结

  组合模式解耦了客户程序与复杂元素内部结构，从而使客户程序可以像处理简单元素一样来处理复杂元素。

  如果你想要创建层次结构，并可以在其中以相同的方式对待所有元素，那么组合模式就是最理想的选择。

- 示例

  参与此模式的类和对象包括：

  - Component(`DrawingElement`)
    - 声明组合对象的接口。
    - 酌情为所有类通用的接口实现默认行为。
    - 声明一个用于访问和管理其子组件的接口。
    - （可选）在递归结构中定义一个用于访问组件父级的接口，并在适当的情况下实现它。

  - Leaf(`PrimitiveElement`)
    - 表示组合中的叶对象。叶子没有孩子。
    - 定义组合中原始对象的行为。

  - Composite(`CompositeElement`)
    - 定义具有子组件的行为。
    - 存储子组件。
    - 在组件接口中实现子相关的操作。

  - Client(`CompositeApp`)
    - 通过组件接口操作组合中的对象。

:::: code-group
::: code-group-item Structural code

```cs
// 演示了复合模式。
// 它允许创建一个树结构，其中单个节点被统一访问，无论它们是叶节点还是分支(复合)节点。

var root = new Composite("root");
root.Add(new Leaf("Leaf A"));
root.Add(new Leaf("Leaf B"));

var comp = new Composite("Composite X");
comp.Add(new Leaf("Leaf XA"));
comp.Add(new Leaf("Leaf XB"));
root.Add(comp);
root.Add(new Leaf("Leaf C"));

var leaf = new Leaf("Leaf D");
root.Add(leaf);
root.Remove(leaf);

root.Display(1);

// Wait for user
Console.ReadKey();

// ---root
// ---Leaf A
// ---Leaf B
// ---Composite X
// -----Leaf XA
// -----Leaf XB
// ---Leaf C

public abstract class Component
{
    protected string Name;

    protected Component(string name)
    {
        this.Name = name;
    }

    public abstract void Add(Component c);

    public abstract void Remove(Component c);

    public abstract void Display(int depth);
}

public class Composite : Component
{
    private readonly List<Component> _children=new List<Component>();
    public Composite(string name) : base(name)
    {
    }

    public override void Add(Component c)
    {
        _children.Add(c);
    }

    public override void Remove(Component c)
    {
        _children.Remove(c);
    }

    public override void Display(int depth)
    {
        Console.WriteLine(new string('-',3)+Name);

        foreach (var component in _children)
        {
            component.Display(depth+2);
        }
    }
}

public class Leaf : Component
{
    public Leaf(string name) : base(name)
    {
    }

    public override void Add(Component c)
    {
        Console.WriteLine("Cannot add to a leaf");
    }

    public override void Remove(Component c)
    {
        Console.WriteLine("Cannot remove from a leaf");
    }

    public override void Display(int depth)
    {
        Console.WriteLine(new String('-',depth)+Name);
    }
}
```

:::
::: code-group-item Real-World code

```cs
// 演示了用于构建由原始节点(线、圆等)和复合节点(组成更复杂元素的绘图元素组)组成的图形树结构的复合模式。

var root2 = new CompositeElement("Picture");
root2.Add(new PrimitiveElement("Red Line"));
root2.Add(new PrimitiveElement("Blue Circle"));
root2.Add(new PrimitiveElement("Green Box"));

var comp2 = new CompositeElement("Two Circles");
comp2.Add(new PrimitiveElement("Black Circle"));
comp2.Add(new PrimitiveElement("White Circle"));
root2.Add(comp2);

var pe = new PrimitiveElement("Yellow Line");
root2.Add(pe);
root2.Remove(pe);

root2.Display(1);

// Wait for user
Console.ReadKey();

// -+ Picture
// --- Red Line
// --- Blue Circle
// --- Green Box
// ---+ Two Circles
// ----- Black Circle
// ----- White Circle

public abstract class DrawingElement
{
    protected string Name;

    protected DrawingElement(string name)
    {
        this.Name= name;
    }

    public abstract void Add(DrawingElement d);

    public abstract void Remove(DrawingElement d);

    public abstract void Display(int indent);
}

public class PrimitiveElement:DrawingElement
{
    public PrimitiveElement(string name) : base(name)
    {
    }

    public override void Add(DrawingElement d)
    {
        Console.WriteLine("Cannot add to a PrimitiveElement");
    }

    public override void Remove(DrawingElement d)
    {
        Console.WriteLine("Cannot remove from a PrimitiveElement");
    }

    public override void Display(int indent)
    {
        Console.WriteLine(new string('-',indent)+" "+Name);
    }
}

public class CompositeElement:DrawingElement
{
    private readonly List<DrawingElement> _elements = new List<DrawingElement>();

    public CompositeElement(string name) : base(name)
    {
    }

    public override void Add(DrawingElement d)
    {
        _elements.Add(d);
    }

    public override void Remove(DrawingElement d)
    {
        _elements.Remove(d);
    }

    public override void Display(int indent)
    {
        Console.WriteLine(new string('-',indent)+"+ "+Name);

        foreach (var d in _elements)
        {
            d.Display(indent+2);
        }
    }
}
```

:::
::::
