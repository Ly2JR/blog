# 设计模式

## 创建型

### 单件模式(Singleton Pattern)

  单件模式是一种用于确保整个应用程序中只有一个类实例且这个实例所占用资源在整个应用程序中是共享时的程序设计方法
  (根据实际情况，可能需要几个类实例)。

  Singleton模式的实现基于两个要点:

  1):不能直接用类的构造函数，而另外提供一个Public的静态方法来构造类的实例。通常这个方法取名为Instance。
  Public 保证了它的全局可见性，静态方法保证了不会创建出多余的实例。

  2):将类的构造函数设为Private,即将构造函数“隐藏”起来，任何企图使用构造函数创建实例的方法都将报错。
  这样就阻止了开发人员绕过上面的Instance方法直接创建类的实例。

  :::: code-group
  ::: code-group-item 方式一

  ```cs
  using System;
  class SingletonDemo{
    private static SingletonDemo _theSingleton=null;

    private SingletonDemo(){}

    public static SingletonDemo Instance(){
      if(_theSingleton==null){
        _theSingleton=new SingletonDemo();
      }
      return _theSingleton;
    }

    static void Main(string[] args){
      var s1=SingletonDemo.Instance();
      var s2=SingletonDemo.Instance();
      if(s1.Equals(s2)){
        Console.WriteLine("see,only one instance.");
      }
    }
  }
  ```
  :::

  ::: code-group-item 方式二

  ```cs
  using System;
  class SingletonDemo{
    private static SingletonDemo _theSingleton=new SingletonDemo();

    private SingletonDemo(){}

    public static SingletonDemo Instance(){
      return _theSingleton;
    }

    static void Main(string[] args){
      var s1=SingletonDemo.Instance();
      var s2=SingletonDemo.Instance();
      if(s1.Equals(s2)){
        Console.WriteLine("see,only one instance!");
      }
    }
  }
  ```

  :::
  ::::


### 抽象工厂(Abstract Factory)

  抽象工厂是所有形态的工厂模式中最为抽象和最具有一般性的一种形态。
  抽象工厂是指当有多个抽象角色时使用的一种工厂模式。
  抽象工厂模式可以向客户端提供一个接口，使客户端在不必指定产品的具体情况下，创建多个产品族中的产品对象。

  工厂模式中的每一个形态都是针对一定问题的解决方案，工厂方法针对的是多个产品系统结构；
  而抽象工厂模式针对的是过个产品族结构，一个产品族内有多个产品系列。

  - 实现原理

  抽象工厂模式相对于工厂方法模式来说，就是工厂方法模式是针对一个产品系列的，而抽象工厂模式是针对多个产品系列的，
  即工厂方法模式是一个产品系列一个工厂类，而抽象工厂模式是多个产品系列一个工厂类。
  在抽象工厂模式中，客户端不在负责对象的创建，而是把这个责任丢给了具体的工厂类，客户端只负责对对象的调用，
  从而明确了各个类的职责。并且当一系列相互关联的产品被设计到一个工厂类里后，客户端的调用将会变得非常简单，
  而且，入股需要更换这一系列的产品，则只需要更换一个工厂类即可。

  入股客户端需要创建一些产品结构，而这些产品结构又分别属于不同的产品类别，则可以使用抽象工厂模式，抽象工厂模式
  中的抽象工厂类负责定义传教对象的接口，具体这一系列对象的创建工作由实现抽象工厂的具体工厂类来完成。

  - 角色

  抽象工厂模式中存在四种角色，分别是抽象工厂角色，具体工厂角色，抽象产品角色，具体产品角色。

  抽象工厂角色：担任这个角色的是工厂方法模式的核心，它是与应用系统商业逻辑无关的。

  具体工厂角色：这个角色之间在客户端的调用下创建产品的实例。这个角色含有选择合适的产品对象的逻辑，而这个逻辑是
  与应用系统的商业逻辑紧密相关的。

  抽象产品角色：担任这个校色的类是工厂方法模式所创建的对象的父类，或它们共同拥有的接口。

  具体产品角色：抽象工厂模式所创建的任何产品对象都是某一个具体产品类的实例。这是客户端最终需要的东西，
  其内部一定充满了应用系统的商业逻辑。

  - 功能

  抽象工厂模式的一个主要功能是它能够隔离要生成的具体产品类，由于这些类的实际类名部被隐藏在工厂内部，因此客户端
  根本不需要关系如何对它们进行实例化的细节。每种设计模式都是针对特定问题的解决方案，而抽象工厂模式面临的问题则
  是当涉及到有多个产品等级结构时，如何更好地进行软件体系结构的设计。

  - 适用情况

    - 一个系统要独立于它的产品的创建、组合和表示时。

    - 一个系统要由多个产品系列中的一个来配置时。

    - 需要强调一系列相关的产品对象的设计以便进行联合使用时。

    - 提供一个产品类库，而只想显示它们的接口而不是实现时。

  - 优缺点

    - 优点

      （1）分离了具体的类。客户通过抽象接口操作实例，产品的类名也在具体工厂的实现中被分离，它们不会出现在客户代码中。

      （2）易于交换产品系列。一个具体工厂类只在初始化时出现一次，这使得改变一个应用的具体工厂变得很容易，只需改变具体
      的工厂即可使用不同的产品配置。

      （3）有利于产品的一致性。当一个系列的产品对象被设计成一起工作时，一个应用一次只能使用同一个系列中的对象，这一点
      很重要，而抽象工厂很容易实现这一点。

    - 缺点

      难以支持新种类的产品。因为抽象工厂接口确定了可以被创建的产品集合，所以难以扩展抽象工厂以生产新种类的产品。

  ```cs
  //
  public interface Button{}
  public interface Border{}

  //实现抽象类
  public class MacButton:Button{}
  public class MacBorder:Border{}
  public class WinButton:Button{}
  public class WinBorder:Border{}

  //实现工厂
  public class MacFactory{
    public static Button CreateButton(){
       return new MacButton();
    }
    public static Border CreateBorder(){
      return new MacBorder();
    }
  }

  public class WinFactory{
    public static Button CreateButton(){
       return new WinButton();
    }
    public static Border CreateBorder(){
      return new WinBorder();
    }
  }

  ```


### 建造者模式(Builder)

  建造者模式是设计模式的一种，将一个复杂的对象的构建于它的表示分离，使得同样的构建过程可以创建不同的表示。

  - 使用范围

  1、当创建复杂对象的算法应该独立于该对象的组成部分以及它们的装配方式时。

  2、当构造过程必须允许被构造的对象有不同表示时。

  - 角色

  在这样的设计模式中，有以下几个角色：

  1、Builder:为创建一个产品对象的各个部件指定抽象接口。

  2、ConcreteBuilder:实现Builder的接口以构造和装配该产品的各个部件，定义并明确它所创建的表示，
  并提供一个检索产品的接口。

  3、Director:构造一个使用Builder接口的对象。

  4、Product:表示被构造的复杂对象。ConcreteBuilder创建该产品的内部表示并定义它的装配过程，包含
  定义组成部件的类，包括将这些部件的类，包括将这些部件装配成最终产品的接口。

  ```cs
  using System;
  class BuildDemo{
    public interface PersonBuilder{
      void BuildHead();
      void BuildBody();
      void BuildFoot();
      Person BuildPerson();
    }

    //具体构造工具
    public class ManBuild:PersonBuilder{
      private Person _person;
      public ManBuilder(){
        _person=new Person();
      }

      public void BuildBody(){
        _person.Body="建造男人的身体";
      }

      public void BuildFoot(){
        _person.Foot="建造男人的脚";
      }

      public void BuildHead(){
        _person.Head="建造男人的头";
      }

      public Person BuildPerson(){
        return _person;
      }
    }
    //建造者
    public class PersonDirector{
      public Person ConstructPerson(PersonBuilder pb){
        pb.BuildHead();
        pb.BuildBody();
        pb.BuildFoot();
        return pb.BuildPerson();
      }
    }
    //Product
    public class Person{
      private string _head;
      private string _body;
      private string _foot;
      public string Head{
        get{return _head;}
        set{_head=value;}
      }

      public string Body{
        get{return _body;}
        set{_body=value;}
      }

      public string Foot{
        get{return _foot;}
        set{_foot=value;}
      }
    }

    public class Man:Person{

    }

    static void Main(string[] args){
       var pd=new PersonDirector();
       var person=pd.ConstructPerson(new ManBuilder());
       Console.WriteLine(person.Body);
       Console.WriteLine(person.Foot);
       Console.WriteLine(person.Head);
    }
  }
  ```

### 工厂方法模式(Factory Method)

  工厂方法模式是一种常用的类创建型设计模式，此模式的核心精神是封装类中变化的部分，提取其中个性化善变的部分为独立类，
  通过依赖注入以达到解耦、复用和方便后期维护扩展的目的。它的核心结构有四个角色，分别是抽象工厂、具体工厂、抽象产品、
  具体产品。

  - 模式简介

  工厂方法模式的意义是定义一个创建产品对象的工厂接口，将实际创建工作推迟到子类当中。核心工厂类不再负责产品的创建，这样
  核心类成为一个抽象工厂校色，仅负责具体工厂子类必须实现的接口，这样进一步抽象化的好处是使得工厂方法模式可以使系统在不
  修改具体工厂角色的情况下引进新的产品。

  工厂方法模式是简单工厂模式的衍生，解决了许多简单工厂模式的问题。首先完全实现'开-闭原则'，实现了可扩展。其次更复杂的乘此结构，
  可以应用于产品结果复杂的场合。

  工厂方法模式对简单工厂模式进行了抽象。有一个抽象的Factory类(可以是抽象类和接口),这个类将不再负责具体的产品生产，而是只
  制定一些规范，具体的生产工作由其子类去完成。在这个模式中，工厂类和产品类王伟可以依次对应。即一个抽象工厂对应一个抽象产品，
  一个具体工厂对应一个具体产品，这个具体的工厂就负责生产对应的产品。

  工厂方法模式是最典型的模板方法模式应用。

  - 角色结构

  抽象工厂角色：是工厂方法模式的核心，与应用程序无关。任何在模式中创建的对象的工厂类必须实现这个接口。

  具体工厂角色：这是实现抽象工厂接口的具体工厂类，包含与应用程序密切相关的逻辑，并且受到应用程序调用以
  创建产品对象。在上图中有两个这样的角色：BuldCreator与TubeCreator。

  抽象产品角色：工厂方法模式所创建的对象的超类型，也就是产品对象的共同父类或共同拥有的接口。

  具体产品角色：这个角色实现了抽象产品角色所定义的接口。某具体产品有专门的具体工厂创建，它们之间往往一一对应。

  - 模式应用

  工厂方法经常用在以下两种情况中：

  第一种情况是针对某个产品，调用者清楚地知道应该使用哪个具体工厂服务，实例化该具体工厂，生产出具体的产品来。

  第二种情况，只是需要一种产品，而不想知道也不需要知道究竟是哪个工厂为生产的，即最终选用哪个具体工厂的决定权
  在生产者一方，它们根据当前系统的情况来实例化一个具体的工厂返回给使用者，而这个决策过程杜宇使用者来说是透明的。

  ```cs
  using System;
  class FactoryMethodDemo{
    public abstract class Food{
      public abstract void Print();
    }

    public class TomatoScrambleEggs:Food{
      public override void Print(){
         Console.WriteLine("西红柿炒鸡蛋");
      }
    }

    public class ShreddedPorkWithPotatoes:Food{
      public override void Print(){
        Console.WriteLine("土豆肉丝");
      }
    }

    public abstract class Creator{
      public abstract Food CreateFoodFactory();
    }

    public class TomatoScrambledEggsFacoty:Creator{
      public override Food CreateFoodFactory(){
        return new TomatoScrambledEggs();
      }
    }

    public class ShreddedPorkWithPotatoesFacoty:Creator{
      public override Food CreateFoodFactory(){
        return new ShreddedPorkWithPotatoes();
      }
    }

    static void Main(string[] args){
       var shreddedPorkWithPotatoesFactory=new ShreddedPorkWithPotatoesFactory();
       var tomatoScrambledEggsFactory=new TomatoScrambledEggsFactory();

       var tomatoScrambleEggs=tomatoScrambledEggsFactory.CreateFoodFactory();
       tomatoScrambleEggs.Print();

       var shreddedPorkWithPotatoes=shreddedPorkWithPotatoesFactory.CreateFoodFactory();
       shreddedPorkWithPatatoes.Print();
    }
  }
  ```

- 原型模式(Prototype)

  用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。

  原型模式是一种创建型设计模式，Prototype模式允许一个对象再创建另外一个可定制的对象，根本无需知道任何如何创建的细节，
  工作原理是：通过将一个原型对象传给那个要发动创建的对象，这个要发动创建的对象通过请求原型对象拷贝它们自己来实施创建。

  - 解决问题

  它主要面对的问题是:"某些结构复杂的对象"的创建工作；由于需求的变化，这些对象经常面临着剧烈的变化，但是它们却拥有比较
  稳定一致的接口。


  ```cs
  :::: code-group
  ::: code-group-item 浅度复制
  using System;
  class PrototypeDemo{
    public interface IColor{
      IColor Clone();

      int Red{get;set;}

      int Green{get;set;}

      int Blue{get;set;}
    }

    public class RedColor:IColor{
      public int Red{get;set;}

      public int Green{get;set;}

      public int Blue{get;set;}

      public IColor Clone(){
        return (IColor)this.MemberwiseClone();
      }
    }

    static void Main(string[] args){
      var redColor=new RedColor();
      redColor.Red=255;
      Console.WriteLine($"RedColor -Red {redColor.Red}");

      var redColorClone=redColor.Clone();
      redColorClone.Red=224;
      Console.WriteLine($"RedColorClone -Red {redColorClone.Red}");
      Console.WriteLine($"RedColor -Red {redColor.Red}");
      Console.ReadKey();
    }
  }
  ```
  :::

  ::: code-group-item 深度复制
  ```cs
  using System;
  using System.IO;
  using System.Runtime.Serialization.Formatters.Binary;
  class PrototypeDemo{
    public interface IColor{
      IColor Clone();

      int Red{get;set;}

      int Green{get;set;}

      int Blue{get;set;}

      Factory F{get;set;}
    }

    [Serializable]
    public class Factory{
      public string Name{get;set;}
    }

    [Serializable]
    public class RedColor:IColor{
      public int Red{get;set;}
      public int Green{get;set;}
      public int Blue{get;set;}

      public IColor Clone(){
          var serialize=new SerializeHelper();
          string target=serialize.Serializable(this);
          return serialize.Derializable(IColor)(target);
      }
    }

    public class SerializableHelper{
      public string Serializable(object target){
        using(var stream=new MemoryStream()){
          new BinaryFormatter().Serialize(stream,target);
          return Convert.ToBase64String(stram.ToArray());
        }
      }

      public object Derializablle(string target){
        var targetArray=Convert.FromBase64String(target);
        using(var stream=new MemoryStream(targetArray)){
          return new BinaryFormatter().Deserialize(stream);
        }
      }

      public T Derializable<T>(string target){
        return (T)Derializable(target);
      }
    }

    static void Main(string[] args){
       var redColor=new RedColor();
       redColor.Red=255;
       redColor.F=new Factory(){Name="RedColor"};
       Console.WriteLine($"RedColor - Factory {redColor.F.Name}");

       var redColorClone=redColor.Clone();
       redColorClone.Red=234;
       redColorClone.F.Name="RedColorClone";
       Console.WriteLine($"RedColorClone - Factory {redColorClone.F.Name}");
       Console.WriteLine($"RedColor - Factory {redColor.F.Name}");
       Console.ReadKey();
    }
  }
  ```

  :::
  ::::

## 结构型

- 适配器模式(Adapter Pattern)

- 桥接模式(Bridge Pattern)

- 装饰模式(Decorator Pattern)

- 组合模式(Composite Pattern)

- 外观模式(Facade Pattern)

- 享元模式(Flyweight Pattern)

- 代理模式(Proxy Pattern)

## 行为型

- 模板方法(Template Method)

- 命令模式(Command Pattern)

- 迭代器模式(Iterator Pattern)

- 观察者模式)(Observer Pattern)

- 解释器模式(Interpreter Pattern)

- 中介者模式(Mediator Pattern)

- 职责链模式(Chain of Responsibility Pattern)

- 备忘录模式(Memento Pattern)

- 策略模式(Strategy Pattern)

- 访问者模式(Visitor Pattern)

- 状态模式(State Pattern)