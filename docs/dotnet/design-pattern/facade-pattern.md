# 外观模式(Facade Pattern)

外观模式。亦称"过程模式"。学校课程评价模式之一。美国教育学者斯泰克1967年在所著《教育评价的外观》中提出。主张按照描述和判断资料来评价课程，关键的活动是在课程实施的全过程中进行观察和搜集意见，以了解人民对课程的不同看法。这种模式不限于检测教学的成果，重视描述和判断教学过程中的各种复杂、动态的现象和事务。

- 结构

  1. Facade

    这个外观类为子系统提供一个共同的对外接口
  2. Clients

    这个对象通过一个外观接口读写子系统中各接口的数据资源。

- 适用场景

在以下情况下可以考虑适用外观模式：

  1. 设计初期阶段，应该有意识的将不同层分离，层与层之间建立外观模式。
  2. 开发阶段，子系统越来越复杂，增加外观模式提供一个简单的调用接口。
  3. 维护一个大型遗留系统的时候，可能这个系统已经非常难以维护和扩展，但又包含非常重要的功能，为其开发一个外观类，以便更系统与其交互。

- 优点

  1. 实现了子系统与客户端之间的松耦合关系。
  2. 客户端屏蔽了子系统组件，减少了客户端所需处理的对象数目，并使得子系统适用起来更加容易。

- 示例

:::: code-group
::: code-group-item Structural code

```cs
namespace Design_Pattern
{
    FacadePattern.Facade facade = new FacadePattern.Facade();
    facade.MethodA();
    facade.MethodB();

    public class FacadePattern
    {
        // "Subsystem ClassA" 
        public class SubSystemOne
        {
            public void MethodOne()
            {
                Console.WriteLine(" SubSystemOne Method");
            }
        }

        // Subsystem ClassB"   
        public class SubSystemTwo
        {
            public void MethodTwo()
            {
                Console.WriteLine(" SubSystemTwo Method");
            }
        }
        // Subsystem ClassC"  
        public class SubSystemThree
        {
            public void MethodThree()
            {
                Console.WriteLine(" SubSystemThree Method");
            }
        }
        // Subsystem ClassD"  
        public class SubSystemFour
        {
            public void MethodFour()
            {
                Console.WriteLine(" SubSystemFour Method");
            }
        }
        // "Facade"   
        public class Facade
        {
            readonly SubSystemOne _one;
            readonly SubSystemTwo _two;
            readonly SubSystemThree _three;
            readonly SubSystemFour _four;
            public Facade()
            {
                _one = new SubSystemOne();
                _two = new SubSystemTwo();
                _three = new SubSystemThree();
                _four = new SubSystemFour();
            }
            public void MethodA()
            {
                Console.WriteLine("\nMethodA() ---- ");
                _one.MethodOne();
                _two.MethodTwo();
                _four.MethodFour();
            }
            public void MethodB()
            {
                Console.WriteLine("\nMethodB() ---- ");
                _two.MethodTwo();
                _three.MethodThree();
            }
        }
    }
}
```

:::
::: code-group-item RealWorld code

```cs
```

:::
::::
