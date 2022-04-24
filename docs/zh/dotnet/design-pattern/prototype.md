# 原型模式(Prototype)

用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。

原型模式是一种创建型设计模式，Prototype模式允许一个对象再创建另外一个可定制的对象，根本无需知道任何如何创建的细节，
工作原理是：通过将一个原型对象传给那个要发动创建的对象，这个要发动创建的对象通过请求原型对象拷贝它们自己来实施创建。

- 解决问题

它主要面对的问题是:"某些结构复杂的对象"的创建工作；由于需求的变化，这些对象经常面临着剧烈的变化，但是它们却拥有比较
稳定一致的接口。

:::: code-group
::: code-group-item 浅度复制

```cs
using System;
class Prototype{
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
using System.Text.Json;

namespace Design_Pattern
{
    var redColor = new Prototype.RedColor
    {
        Red = 255,
        F = new Prototype.Factory() { Name = "RedColor" }
    };
    Console.WriteLine($"RedColor - Factory:{redColor.F.Name}; Red - {redColor.Red}");

    var redColorClone = redColor.Clone();
    redColorClone.Red = 234;
    redColorClone.F.Name = "RedColorClone";
    Console.WriteLine($"RedColorClone - Factory {redColorClone.F.Name}; Red - {redColorClone.Red}");

    /// <summary>
    /// 原型模式
    /// </summary>
    public  class Prototype
    {
        public interface IColor
        {
            IColor? Clone();

            int Red { get; set; }

            int Green { get; set; }

            int Blue { get; set; }

            Factory? F { get; set; }
        }

        public class Factory
        {
            public string? Name { get; set; }
        }

        public class RedColor : IColor
        {
            public int Red { get; set; }
            public int Green { get; set; }
            public int Blue { get; set; }
            public Factory? F { get; set; }

            public IColor? Clone()
            {
                var json = JsonSerializer.Serialize(this);
                return JsonSerializer.Deserialize<RedColor>(json);
            }
        }
    }
}

```

:::
::::
