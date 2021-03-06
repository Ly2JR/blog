# 工厂方法模式(Factory Method)

工厂方法模式是一种常用的类创建型设计模式，此模式的核心精神是封装类中变化的部分，提取其中个性化善变的部分为独立类，
通过依赖注入以达到解耦、复用和方便后期维护扩展的目的。它的核心结构有四个角色，分别是抽象工厂、具体工厂、抽象产品、
具体产品。

- 模式简介

  工厂方法模式的意义是定义一个创建产品对象的工厂接口，将实际创建工作推迟到子类当中。核心工厂类不再负责产品的创建，这样
核心类成为一个抽象工厂校色，仅负责具体工厂子类必须实现的接口，这样进一步抽象化的好处是使得工厂方法模式可以使系统在不
修改具体工厂角色的情况下引进新的产品。

  工厂方法模式是简单工厂模式的衍生，解决了许多简单工厂模式的问题。首先完全实现'开-闭原则'，实现了可扩展。其次更复杂的层次结构，
可以应用于产品结果复杂的场合。

  工厂方法模式对简单工厂模式进行了抽象。有一个抽象的Factory类(可以是抽象类和接口),这个类将不再负责具体的产品生产，而是只
制定一些规范，具体的生产工作由其子类去完成。在这个模式中，工厂类和产品类往往可以依次对应。即一个抽象工厂对应一个抽象产品，
一个具体工厂对应一个具体产品，这个具体的工厂就负责生产对应的产品。

  工厂方法模式是最典型的模板方法模式应用。

- 角色结构

  抽象工厂角色：是工厂方法模式的核心，与应用程序无关。任何在模式中创建的对象的工厂类必须实现这个接口。

  具体工厂角色：这是实现抽象工厂接口的具体工厂类，包含与应用程序密切相关的逻辑，并且受到应用程序调用以
创建产品对象。

  抽象产品角色：工厂方法模式所创建的对象的超类型，也就是产品对象的共同父类或共同拥有的接口。

  具体产品角色：这个角色实现了抽象产品角色所定义的接口。某具体产品有专门的具体工厂创建，它们之间往往一一对应。

- 模式应用

  工厂方法经常用在以下两种情况中：

  第一种情况是针对某个产品，调用者清楚地知道应该使用哪个具体工厂服务，实例化该具体工厂，生产出具体的产品来。

  第二种情况，只是需要一种产品，而不想知道也不需要知道究竟是哪个工厂为生产的，即最终选用哪个具体工厂的决定权
在生产者一方，它们根据当前系统的情况来实例化一个具体的工厂返回给使用者，而这个决策过程这对于使用者来说是透明的。

- 示例

  参与此模式的类和对象包括：

  - Product(`Page`)
    - 定义工厂方法创建的对象的接口。

  - ConcreteProduct(`SkillsPage`,`EducationPage`,`ExperiencePage`)
    - 实现产品接口。

  - Creator(`Document`)
    - 声明工厂方法，它返回一个Product类型的对象。Creator还可以定义返回默认ConcreteProduct对象的工厂方法的默认实现。
    - 可以调用工厂方法来创建Product对象。

  - ConcreteCreator(`Report`,`Resume`)

    - 重写工厂方法以返回ConcreteProduct的实例。

:::: code-group
::: code-group-item Structural code

```cs
// 演示了Factory方法，它在创建不同对象方面提供了极大的灵活性。
// Abstract类可以提供一个默认对象，但每个子类都可以实例化该对象的扩展版本。

var creators = new Creator[2];
creators[0] = new ConcreteCreatorA();
creators[1] = new ConcreteCreatorB();

foreach (var creator in creators)
{
    var product = creator.FactoryMethod();
    Console.WriteLine($"Created {product.GetType().Name}");
}

// Wait for user
Console.ReadKey();

// Created ConcreteProductA
// Created ConcreteProductB

public abstract class Product
{

}

public class ConcreteProductA:Product
{
    
}

public class ConcreteProductB:Product
{
    
}

public abstract class Creator
{
    public abstract Product FactoryMethod();
}

public class ConcreteCreatorA:Creator
{
    public override Product FactoryMethod()
    {
        return new ConcreteProductA();
    }
}

public class ConcreteCreatorB : Creator
{
    public override Product FactoryMethod()
    {
        return new ConcreteProductB();
    }
}
```

:::
::: code-group-item Real-World code

```cs
// 演示了工厂方法，它在创建不同的文档时提供了灵活性。
// 派生的Document类Report和Resume实例化Document类的扩展版本。
// 这里，工厂方法在Document基类的构造函数中被调用。

var documents = new Document[2];
documents[0] = new Resume();
documents[1] = new Report();

foreach (var document in documents)
{
    Console.WriteLine($"\n{document.GetType().Name} ---");
    foreach (var page in document.Pages)
    {
        Console.WriteLine($" {page.GetType().Name}");
    }
}

// Wait for user
Console.ReadKey();

// Resume--
//  SkillsPage
//  EducationPage
//  ExperiencePage

// Report--
//  IntroductionPage
//  ResultPage
//  ConclusionPage
//  SummaryPage
//  BibliographyPage

public abstract class Page
{
    
}

public class SkillsPage:Page
{
    
}

public class EducationPage:Page
{

}

public class ExperiencePage:Page
{
}

public class IntroductionPage:Page
{
    
}

public class ResultPage:Page
{
    
}

public class ConclusionPage:Page
{
    
}

public class SummaryPage:Page
{
    
}

public class BibliographyPage:Page
{
    
}

public abstract class Document
{
    private readonly List<Page> _pages=new List<Page>();

    protected Document()
    {
        this.CreatePages();
    }

    public List<Page> Pages
    {
        get { return _pages; }
    }

    public abstract void CreatePages();
}

public class Resume:Document
{
    public override void CreatePages()
    {
        Pages.Add(new SkillsPage());
        Pages.Add(new EducationPage());
        Pages.Add(new ExperiencePage());
    }
}

public class Report:Document
{
    public override void CreatePages()
    {
        Pages.Add(new IntroductionPage());
        Pages.Add(new ResultPage());
        Pages.Add(new ConclusionPage());
        Pages.Add(new SummaryPage());
        Pages.Add(new BibliographyPage());
    }
}
```

:::
::::
