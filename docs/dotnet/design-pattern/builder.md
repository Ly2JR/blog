# 建造者模式(Builder)

建造者模式是设计模式的一种，将一个复杂的对象的构建于它的表示分离，使得同样的构建过程可以创建不同的表示。

- 使用范围

  1. 当创建复杂对象的算法应该独立于该对象的组成部分以及它们的装配方式时。
  2. 当构造过程必须允许被构造的对象有不同表示时。

- 角色

  在这样的设计模式中，有以下几个角色：

  1. Builder:为创建一个产品对象的各个部件指定抽象接口。
  2. ConcreteBuilder:实现Builder的接口以构造和装配该产品的各个部件，定义并明确它所创建的表示，
  并提供一个检索产品的接口。
  3. Director:构造一个使用Builder接口的对象。
  4. Product:表示被构造的复杂对象。ConcreteBuilder创建该产品的内部表示并定义它的装配过程，包含
  定义组成部件的类，包括将这些部件装配成最终产品的接口。

- 示例

  参与此模式的类和对象包括：

  - Builder(`VehicleBuilder`)
    - 指定用于创建Product对象的部分的抽象接口。

  - ConcreteBuilder(`MotorCycleBuilder`,`CarBuilder`,`ScooterBuilder`)
    - 通过实现Builder接口来构造和组装产品的各个部分。
    - 定义并跟踪它创建的表示。
    - 提供检索产品的接口。

  - Director(`Shop`)
    - 使用Builder接口构造一个对象。

  - Product(`Vehicle`)
    - 表示正在构建的复杂对象。ConcreteBuilder构建产品的内部表示并定义其组装过程。
    - 包括定义组成部分的类，包括将这些部分组装成最终结果的接口。

:::: code-group
::: code-group-item Structural code

```cs
// 演示了构建器模式，其中以逐步方式创建复杂对象。
// 构建过程可以创建不同的对象表示并提供对对象组装的高级控制

var director = new Director();

var b1 = new ConcreteBuilder1();
var b2 = new ConcreteBuilder2();

director.Construct(b1);
var p1 = b1.GetResult();
p1.Show();

director.Construct(b2);
var p2 = b2.GetResult();
p2.Show();

// Wait for user
Console.ReadKey();

//  Product Parts -------
// PartA
// PartB

//  Product Parts -------
// PartX
// PartY

public class Director
{
    public void Construct(Builder builder)
    {
        builder.BuildPartA();
        builder.BuildPartB();
    }
}

public abstract class Builder
{
    public abstract void BuildPartA();
    public abstract void BuildPartB();
    public abstract Product GetResult();
}

public class ConcreteBuilder1:Builder
{
    private readonly Product _product = new Product();

    public override void BuildPartA()
    {
        _product.Add("PartA");
    }

    public override void BuildPartB()
    {
        _product.Add("PartB");
    }

    public override Product GetResult()
    {
        return _product;
    }
}

public class ConcreteBuilder2:Builder
{
    private readonly Product _product=new Product();

    public override void BuildPartA()
    {
        _product.Add("PartX");
    }

    public override void BuildPartB()
    {
        _product.Add("PartY");
    }

    public override Product GetResult()
    {
        return _product;
    }
}

public class Product
{
    private readonly List<string> _parts = new List<string>();

    public void Add(string part)
    {
        _parts.Add(part);
    }

    public void Show()
    {
        Console.WriteLine("\n Product Parts -------");
        foreach (string part in _parts)
        {
            Console.WriteLine(part);
        }
    }
}
```

:::
::: code-group-item Real-World code

```cs
// 演示了构建起模式，其中不同的车辆以逐步的方式组装。
// 商店使用VehicleBuilders以一系列顺序步骤构建各种车辆。

VehicleBuilder builder;

var shop = new Shop();
builder = new ScooterBuilder();
shop.Construct(builder);
builder.Vehicle.Show();

builder = new CarBuilder();
shop.Construct(builder);
builder.Vehicle.Show();

builder = new MotorCycleBuilder();
shop.Construct(builder);
builder.Vehicle.Show();

// Wait for user
Console.ReadKey();

// --------------------------
// Vehicle Type:Scooter
//  Frame:Scooter Frame
//  Engine:50 cc
//  #Wheels:2
//  #Doors:0

// --------------------------
// Vehicle Type:Car
//  Frame:Car Frame
//  Engine:2500 cc
//  #Wheels:4
//  #Doors:4

// --------------------------
// Vehicle Type:MotorCycle
//  Frame:MotorCycle Frame
//  Engine:500 cc
//  #Wheels:2
//  #Doors:0

public class Shop
{
    public void Construct(VehicleBuilder vehicleBuilder)
    {
        vehicleBuilder.BuildFrame();
        vehicleBuilder.BuildEngine();
        vehicleBuilder.BuildWheels();
        vehicleBuilder.BuildDoors();
    }
}

public abstract class VehicleBuilder
{
    public Vehicle Vehicle { get; protected set; } = null!;

    public abstract void BuildFrame();
    public abstract void BuildEngine();
    public abstract void BuildWheels();
    public abstract void BuildDoors();
}

public class MotorCycleBuilder:VehicleBuilder
{
    public MotorCycleBuilder()
    {
        Vehicle = new Vehicle("MotorCycle");
    }

    public override void BuildFrame()
    {
        Vehicle["frame"] = "MotorCycle Frame";
    }

    public override void BuildEngine()
    {
        Vehicle["engine"] = "500 cc";
    }

    public override void BuildWheels()
    {
        Vehicle["wheels"] = "2";
    }

    public override void BuildDoors()
    {
        Vehicle["doors"] = "0";
    }
}

public class CarBuilder:VehicleBuilder
{
    public CarBuilder()
    {
        Vehicle = new Vehicle("Car");
    }

    public override void BuildFrame()
    {
        Vehicle["frame"] = "Car Frame";
    }

    public override void BuildEngine()
    {
        Vehicle["engine"] = "2500 cc";
    }

    public override void BuildWheels()
    {
        Vehicle["wheels"] = "4";
    }

    public override void BuildDoors()
    {
        Vehicle["doors"] = "4";
    }
}

public class ScooterBuilder:VehicleBuilder
{
    public ScooterBuilder()
    {
        Vehicle = new Vehicle("Scooter");
    }

    public override void BuildFrame()
    {
        Vehicle["frame"] = "Scooter Frame";
    }

    public override void BuildEngine()
    {
        Vehicle["engine"] = "50 cc";
    }

    public override void BuildWheels()
    {
        Vehicle["wheels"] = "2";
    }

    public override void BuildDoors()
    {
        Vehicle["doors"]="0";
    }
}

public class Vehicle
{
    private readonly string _vehicleType;
    private readonly Dictionary<string,string> _parts=new Dictionary<string,string>();

    public Vehicle(string vehicleType)
    {
        _vehicleType=vehicleType;
    }

    public string this[string key]
    {
        get => _parts[key];
        set => _parts[key] = value;
    }

    public void Show()
    {
        Console.WriteLine("\n--------------------------");
        Console.WriteLine($"Vehicle Type:{_vehicleType}");
        Console.WriteLine($" Frame:{_parts["frame"]}");
        Console.WriteLine($" Engine:{_parts["engine"]}");
        Console.WriteLine($" #Wheels:{_parts["wheels"]}");
        Console.WriteLine($" #Doors:{_parts["doors"]}");
    }
}
```

:::
::::
