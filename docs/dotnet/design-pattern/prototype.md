# 原型模式(Prototype)

用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。

原型模式是一种创建型设计模式，Prototype模式允许一个对象再创建另外一个可定制的对象，根本无需知道任何如何创建的细节，
工作原理是：通过将一个原型对象传给那个要发动创建的对象，这个要发动创建的对象通过请求原型对象拷贝它们自己来实施创建。

- 解决问题

它主要面对的问题是:"某些结构复杂的对象"的创建工作；由于需求的变化，这些对象经常面临着剧烈的变化，但是它们却拥有比较
稳定一致的接口。

- 示例

  参与此模式的类和对象包括：

  - Prototype(ColorPrototype)
    - 声明用于克隆自身的接口。

  - ConcretePrototype(Color)
    - 实现克隆本身的操作。

  - Client(ColorManager)
    - 通过要求原型克隆自身来创建新对象。

:::: code-group
::: code-group-item Structural code

```cs
namespace Design_Pattern.Prototype
{
    var p1 = new Structural.ConcretePrototype1("I");
    var c1 = (Structural.ConcretePrototype1)p1.Clone();
    Console.WriteLine($"Cloned:{c1.Id}");

    var p2=new Structural.ConcretePrototype2("II");
    var c2 = (Structural.ConcretePrototype2)p2.Clone();
    Console.WriteLine($"Cloned:{c2.Id}");

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了原型模式，其中通过复制同一类的预先存在的对象(原型)来创建新对象。
    /// </summary>
    public class Structural
    {
        public abstract class Prototype
        {
            private string _id;

            protected Prototype(string id)
            {
                _id = id;
            }

            public string Id
            {
                get { return _id; }
            }

            public abstract Prototype Clone();
        }

        public class ConcretePrototype1 : Prototype
        {
            public ConcretePrototype1(string id) : base(id)
            {
            }

            public override Prototype Clone()
            {
                return (Prototype)this.MemberwiseClone();
            }
        }

        public class ConcretePrototype2:Prototype
        {
            public ConcretePrototype2(string id) : base(id)
            {
            }

            public override Prototype Clone()
            {
                return (Prototype)this.MemberwiseClone();
            }
        }
    }
}
```

:::
::: code-group-item Real-World code

```cs
namespace Design_Pattern.Prototype
{
    var colorManager = new RealWorld.ColorManager
    {
        ["red"] = new RealWorld.Color(255, 0, 0),
        ["green"] = new RealWorld.Color(0, 255, 0),
        ["blue"] = new RealWorld.Color(0, 0, 255)
    };

    //User adds personalized colors
    colorManager["angry"]=new RealWorld.Color(255, 54, 0);
    colorManager["peace"] = new RealWorld.Color(128, 211, 128);
    colorManager["flame"] = new RealWorld.Color(211, 34, 20);

    //User clones selected colors
    var color1 = colorManager["red"].Clone() as RealWorld.Color;
    var color2 = colorManager["peace"].Clone() as RealWorld.Color;
    var color3= colorManager["flame"].Clone() as RealWorld.Color;

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了原型模式，其中通过复制预先存在的、用户定义的相同类型的颜色来创建新的颜色对象。
    /// </summary>
    public class RealWorld
    {
        public abstract class ColorPrototype
        {
            public abstract ColorPrototype Clone();
        }

        public class Color:ColorPrototype
        {
            private int _red;
            private int _green;
            private int _blue;

            public Color(int red,int green,int blue)
            {
                _red = red;
                _green = green;
                _blue = blue;
            }

            public override ColorPrototype Clone()
            {
                Console.WriteLine($"Cloning color RGB:{_red,3},{_green,3},{_blue,3}");
                return this.MemberwiseClone() as ColorPrototype;
            }
        }

        public class ColorManager
        {
            private Dictionary<string,ColorPrototype> _colors=new Dictionary<string,ColorPrototype>();

            public ColorPrototype this[string key]
            {
                get { return _colors[key]; }
                set{_colors.Add(key,value);}
            }
        }
    }
}
```

:::
::::
