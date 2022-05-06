# 享元模式(Flyweight)

享元模式是一种软件设计模式。它使用共享物件，用来尽可能减少内存使用量以及分析资讯给尽可能多的相似物件；它适合用于只是因重复而导致使用无法令人接受的大量内存的大量物件。通常物件中的部分状态是可以分享。常见做法是把它们放在外部数据结构，当需要使用时再将它们传递给享元。

- 定义

享元模式,运用共享技术有效的支持大量细粒度的对象。

典型的享元模式的例子为文书处理器中以图形结构来表示字符。一个做法是，每个字形有其字型外观，字模metrics，和其它格式咨询，但这会使每个字符就耗用上千字节。取而代之的是，每个字符参照到一个共享字形物件，此物件会被其它有共同特质的字符所分享；只有每个字符(文件中或页面中)的位置才需要另外存储。

- 结构

两个状态

  1. 内蕴状态存储再享元内部，不会随环境的改变而有所不同，是可以共享的。
  2. 外蕴状态是不可以共享的，它随环境的改变而改变的，因此外蕴状态是由客户端来保持(因为环境的变化是由客户端引起的)。

UML结构图

  1. 抽象享元角色：为具体享元角色规定了必须实现的方法，而外蕴状态就是以参数的形式通过此方法传入。可以由抽象类、接口来担当。
  2. 具体享元角色：实现抽象角色规定的方法。如果存在内蕴状态，就负责为内蕴状态提供存储空间。
  3. 享元工厂角色：负责创建和管理享元角色。要想达到共享的目的，这个角色的实现是关键！
  4. 客户端角色：维护对所有享元对象的引用，而且还需要存储对应的外蕴状态。

- 使用场景

如果一个应用程序使用了大量的对象，而这些对象造成了很大的存储开销的时候就可以考虑是否使用享元模式。

例如，如果发现某个对象的生成了大量细粒度的实例，并且这些实例除了几个参数外基本是相同的，如果把那些共享参数移到类外面，再方法调用时将它们传递进来，就可以通过共享大幅度单个实例的数目。

- 示例

典型的享元模式的例子为文书处理器中以图形结构来表示字符。一个做法是，每个字形有其字型外观，字模metrics，和其他格式资讯，但这会使每个字符就好用上千字节。取而代之的是，每个字符参照到一个共享字形物件，此物件会被其他共同特质的字符所分享；只有每个字符(文件中或页面中)的位置才需要另外存储。

:::: code-group
::: code-group-item Structural code

```cs
namespace Design_Pattern.Flyweight
{
    int extrinsicstate = 22;
    var factory = new Structural.FlyweightFactory();

    var fx = factory.GetFlyweight("X");
    fx.Operation(--extrinsicstate);

    var fy = factory.GetFlyweight("Y");
    fy.Operation(--extrinsicstate);

    var fz = factory.GetFlyweight("Z");
    fz.Operation(--extrinsicstate);

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了享元模式。
    /// 其中相对少量的对象被不同的客户端多次共享。
    /// </summary>
    public class Structural
    {
        public class FlyweightFactory
        {
            private Dictionary<string, Flyweight> Flyweights { get; } = new Dictionary<string, Flyweight>();

            public FlyweightFactory()
            {
                Flyweights.Add("X", new ConcreteFlyweight());
                Flyweights.Add("Y", new ConcreteFlyweight());
                Flyweights.Add("Z", new ConcreteFlyweight());
            }

            public Flyweight GetFlyweight(string key)
            {
                return Flyweights[key];
            }
        }

        public abstract class Flyweight
        {
            public abstract void Operation(int extrinsicstate);
        }

        public class ConcreteFlyweight : Flyweight
        {
            public override void Operation(int extrinsicstate)
            {
                Console.WriteLine($"ConcreteFlyweight:{extrinsicstate}");
            }
        }

        public class UnsharedConcreteFlyweight : Flyweight
        {
            public override void Operation(int extrinsicstate)
            {
                Console.WriteLine($"UnsharedConcreteFlyweight:{extrinsicstate}");
            }
        }
    }
}
```

:::
::: code-group-item Real-World code

```cs
namespace Design_Pattern.Flyweight
{

    var fu = new Structural.UnsharedConcreteFlyweight();
    fu.Operation(--extrinsicstate);

    string document = "AAZZBBZB";
    var chars = document.ToCharArray();

    var factory2 = new RealWorld.CharacterFactory();

    int pointSize = 10;

    foreach (var c in chars)
    {
        pointSize++;
        var character = factory2.GetCharacter(c);
        character.Display(pointSize);
    }

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了享元模式。
    /// 其中相对少量的Character对象由可能具有许多字符的文档多次共享。
    /// </summary>
    public class RealWorld
    {
        public class CharacterFactory
        {
            private readonly Dictionary<char, Character> _characters = new Dictionary<char, Character>();

            public Character GetCharacter(char key)
            {
                Character character = null;
                if (_characters.ContainsKey(key))
                {
                    character = _characters[key];
                }
                else
                {
                    switch (key)
                    {
                        case 'A': character = new CharacterA(); break;
                        case 'B': character = new CharacterB(); break;
                        case 'Z': character = new CharacterZ(); break;
                    }
                    _characters.Add(key, character);
                }

                return character;
            }
        }

        public abstract class Character
        {
            protected char Symbol;
            protected int Width;
            protected int Height;
            protected int Ascent;
            protected int Descent;
            protected int PointSize;

            public abstract void Display(int pointSize);
        }

        public class CharacterA : Character
        {
            public CharacterA()
            {
                Symbol = 'A';
                Height = 100;
                Width = 120;
                Ascent = 70;
                Descent = 0;
            }

            public override void Display(int pointSize)
            {
                this.PointSize = pointSize;
                Console.WriteLine($"{Symbol} (pointSize {pointSize})");
            }
        }

        public class CharacterB : Character
        {
            public CharacterB()
            {
                Symbol = 'B';
                Height = 100;
                Width = 140;
                Ascent = 72;
                Descent = 0;
            }

            public override void Display(int pointSize)
            {
                this.PointSize = pointSize;
                Console.WriteLine($"{Symbol} (pointSize {pointSize})");
            }
        }

        public class CharacterZ : Character
        {
            public CharacterZ()
            {
                Symbol = 'Z';
                Height = 100;
                Width = 100;
                Ascent = 68;
                Descent = 0;
            }

            public override void Display(int pointSize)
            {
                this.PointSize = pointSize;
                Console.WriteLine($"{Symbol} (pointSize {pointSize})");
            }
        }
    }
}
```

:::
::::
