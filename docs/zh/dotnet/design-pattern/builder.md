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
定义组成部件的类，包括将这些部件的类，包括将这些部件装配成最终产品的接口。

- 示例

```cs
namespace Design_Pattern
{
    var pd = new Builder.PersonDirector();
    var person = pd.ConstructPerson(new Builder.ManBuilder());
    Console.WriteLine(person.Body);
    Console.WriteLine(person.Foot);
    Console.WriteLine(person.Head);
    Console.ReadKey();

    public  class Builder
    {
        public interface IPersonBuilder
        {
            void BuildHead();
            void BuildBody();
            void BuildFoot();
            Person BuildPerson();
        }

        /// <summary>
        /// 具体构造工具
        /// </summary>
        public class ManBuilder : IPersonBuilder
        {
            private readonly Person _person;
            public ManBuilder()
            {
                _person = new Person();
            }

            public void BuildBody()
            {
                _person.Body = "建造男人的身体";
            }

            public void BuildFoot()
            {
                _person.Foot = "建造男人的脚";
            }

            public void BuildHead()
            {
                _person.Head = "建造男人的头";
            }

            public Person BuildPerson()
            {
                return _person;
            }
        }
        /// <summary>
        /// 建造者
        /// </summary>
        public class PersonDirector
        {
            public Person ConstructPerson(IPersonBuilder pb)
            {
                pb.BuildHead();
                pb.BuildBody();
                pb.BuildFoot();
                return pb.BuildPerson();
            }
        }
        /// <summary>
        /// Product
        /// </summary>
        public class Person
        {
            public string Head { get; set; }

            public string Body { get; set; }

            public string Foot { get; set; }
        }

        public class Man : Person {}
    }
}

```
