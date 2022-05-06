# 单例模式(Singleton)

单例模式是一种用于确保整个应用程序中只有一个类实例且这个实例所占用资源在整个应用程序中是共享时的程序设计方法
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
namespace Design_Pattern.Singleton
{
    var s1 = Structural.Singleton.Instance();
    var s2 = Structural.Singleton.Instance();

    //Test for same instance
    if (s1==s2)
    {
        Console.WriteLine("Objects are the same instance");
    }

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了单例模式，该模式确保只能创建类的单个实例(单例)
    /// </summary>
    public class Structural
    {
        public class Singleton
        {
            private static Singleton _instance;

            protected Singleton(){}

            public static Singleton Instance()
            {
                //Uses lazy initialization
                //Note:this is not thread safe.
                if (_instance == null)
                {
                    _instance=new Singleton();
                }

                return _instance;
            }
        }
    }
}
```

:::
::: code-group-item Real-World code

```cs
namespace Design_Pattern.Singleton
{
    var b1 = RealWorld.LoadBalancer.GetLoadBalancer();
    var b2 = RealWorld.LoadBalancer.GetLoadBalancer();
    var b3= RealWorld.LoadBalancer.GetLoadBalancer();
    var b4= RealWorld.LoadBalancer.GetLoadBalancer();

    //Same instance?
    if (b1 == b2 && b2 == b3 && b3 == b4)
    {
        Console.WriteLine("Same instance\n");
    }

    //Load balance 15 server requests
    var balancer = RealWorld.LoadBalancer.GetLoadBalancer();
    for (var i = 0; i < 15; i++)
    {
        var server = balancer.Server;
        Console.WriteLine($"Dispatch Request to:{server}");
    }

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 将单列模式演示为LoadBalancing对象。只能创建该类的单个实例(单列),
    /// 因为服务器可能回动态地联机或脱机，并且每个请求都必须通过一个了解(网络)农场状态的对象。
    /// </summary>
    public class RealWorld
    {
        public class LoadBalancer
        {
            private static LoadBalancer _instance = null!;
            private readonly List<string> _servers = new();
            readonly Random _random = new();

            //Lock synchronization object
            private static readonly object Locker=new();

            //Constructor (protected)
            protected LoadBalancer()
            {
                _servers.Add("ServerI");
                _servers.Add("ServerII");
                _servers.Add("ServerIII");
                _servers.Add("ServerIV");
                _servers.Add("ServerV");
            }

            public static LoadBalancer GetLoadBalancer()
            {
                // Support multithreaded applications through
                // 'Double checked locking' pattern which (once
                // the instance exists) avoids locking each 
                // time the method is invoked
                if (_instance == null)
                {
                    lock (Locker)
                    {
                        if (_instance == null)
                        {
                            _instance = new LoadBalancer();
                        }
                    }
                }

                return _instance;
            }

            /// <summary>
            /// Simple,but effective random load balancer
            /// </summary>
            public string Server
            {
                get
                {
                    int r = _random.Next(_servers.Count);
                    return _servers[r];
                }
            }
        }
    }
}
```

:::
::::
