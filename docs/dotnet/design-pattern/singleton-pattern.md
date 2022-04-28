# 单件模式(Singleton Pattern)

单件模式是一种用于确保整个应用程序中只有一个类实例且这个实例所占用资源在整个应用程序中是共享时的程序设计方法
  (根据实际情况，可能需要几个类实例)。

Singleton模式的实现基于两个要点:

1. 不能直接用类的构造函数，而另外提供一个Public的静态方法来构造类的实例。通常这个方法取名为Instance。
Public 保证了它的全局可见性，静态方法保证了不会创建出多余的实例。
2. 将类的构造函数设为Private,即将构造函数“隐藏”起来，任何企图使用构造函数创建实例的方法都将报错。
这样就阻止了开发人员绕过上面的Instance方法直接创建类的实例。

- 示例

:::: code-group
::: code-group-item Structurl code

```cs
namespace Design_Pattern
{
    var s1 = SingletonPattern.Instance();
    var s2 = SingletonPattern.Instance();
    if (s1.Equals(s2))
    {
        Console.WriteLine("see,only one instance.");
    }

    public class SingletonPattern
    {
        private static SingletonPattern? _theSingleton;

        private SingletonPattern() { }

        public static SingletonPattern Instance()
        {
            return _theSingleton ??= new SingletonPattern();
        }
    }
}
```

:::
::: code-group-item RealWorld code

```cs
namespace Design_Pattern
{
    var s1 = SingletonPattern.Instance();
    var s2 = SingletonPattern.Instance();
    if (s1.Equals(s2))
    {
        Console.WriteLine("see,only one instance.");
    }

    public class SingletonPattern
    {
        private static readonly SingletonPattern TheSingleton = new SingletonPattern();

        private SingletonPattern() { }

        public static SingletonPattern Instance()
        {
            return TheSingleton;
        }
    }
}
```

:::
::::
