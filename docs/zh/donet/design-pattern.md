# 设计模式

## 创建型

- 单件模式(Singleton Pattern)

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


- 抽象工厂(Abstract Factory)

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

- 建造者模式(Builder)

- 工厂方法模式(Factory Method)

- 原型模式(Prototype)

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