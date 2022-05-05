# 中介者模式(Mediator)

中介者模式(Mediator pattern)是2018年公布的计算机科学技术名词。

- 定义

一种设计模式。用一个中介对象来封装一系列的交互，从而把一批原来可能是交互关系复杂的对象换成一组松散耦合的中间对象，以有利于维护和修改。

- 示例

:::: code-group
::: code-group-item Structural code

```cs
namespace Design_Pattern.Mediator
{
    var m = new Structural.ConcreteMediator();
    var c1 = new Structural.ConcreteColleague1(m);
    var c2=new Structural.ConcreteColleague2(m);
    m.Colleague1 = c1;
    m.Colleague2 = c2;

    c1.Send("How are you?");
    c2.Send("Fine,thanks");

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了促进不同对象和对象类型之间松散耦合通信的中介者模式。
    /// 中介是一个中心枢纽，所有的互动都必须通过它进行。
    /// </summary>
    public class Structural
    {
        public abstract class Mediator
        {
            public abstract void Send(string message, Colleague colleague);
        }

        public class ConcreteMediator:Mediator
        {
            private ConcreteColleague1 _colleague1 = null!;
            private ConcreteColleague2 _colleague2 = null!;

            public ConcreteColleague1 Colleague1
            {
                set => _colleague1 = value;
            }

            public ConcreteColleague2 Colleague2
            {
                set => _colleague2 = value;
            }

            public override void Send(string message, Colleague colleague)
            {
                if (_colleague1 == colleague)
                {
                    _colleague2.Notify(message);
                }
                else
                {
                    _colleague1.Notify(message);
                }
            }
        }

        public abstract class Colleague
        {
            protected Mediator Mediator;

            protected Colleague(Mediator mediator)
            {
                Mediator=mediator;
            }
        }

        public class ConcreteColleague1 : Colleague
        {
            public ConcreteColleague1(Mediator mediator) : base(mediator)
            {
            }

            public void Send(string message)
            {
                Send(message,this);
            }

            public void Notify(string message)
            {
                Console.WriteLine($"Colleague1 gets message:{message}");
            }
        }

        public class ConcreteColleague2 : Colleague
        {
            public ConcreteColleague2(Mediator mediator) : base(mediator)
            {
            }

            public void Send(string message)
            {
                Send(message,this);
            }

            public void Notify(string message)
            {
                Console.WriteLine($"Colleague2 gets message:{message}");
            }
        }
    }
}
```

:::
::: code-group-item RealWorld code

```cs
namespace Design_Pattern.Mediator
{
    var chartRoom = new RealWorld.ChatRoom();

    var george = new RealWorld.Beatle("George");
    var paul = new RealWorld.Beatle("Paul");
    var ringo = new RealWorld.Beatle("Ringo");
    var john = new RealWorld.Beatle("John");
    var yoko = new RealWorld.NonBeatle("Yoko");

    chartRoom.Register(george);
    chartRoom.Register(paul);
    chartRoom.Register(ringo);
    chartRoom.Register(john);
    chartRoom.Register(yoko);

    yoko.Send("John","Hi John!");
    paul.Send("Ringo","All you need is love");
    ringo.Send("George","My sweet Lord");
    paul.Send("John","Can't buy me love");
    john.Send("Yoko","My sweet love");

    // Wait for user
    Console.ReadKey();

    /// <summary>
    /// 演示了中介者模式，促进了在聊天室注册的不同参与者之间的松散耦合通信。聊天室是进行所有交流的中心枢纽。
    /// 此时聊天室中仅实现了一对一的通信，但更改为一对多将是微不足道的。
    /// </summary>
    public class RealWorld
    {
        public abstract class AbstractChatRoom
        {
            public abstract void Register(Participant participant);

            public abstract void Send(string from, string to, string message);
        }

        public class ChatRoom : AbstractChatRoom
        {
            private readonly Dictionary<string,Participant> _participants = new();

            public override void Register(Participant participant)
            {
                if (!_participants.ContainsValue(participant))
                {
                    _participants[participant.Name] = participant;
                }

                participant.ChatRoom = this;
            }

            public override void Send(string from, string to, string message)
            {
                var participant = _participants[to];
                if (participant != null)
                {
                    participant.Receive(from, message);
                }
            }
        }

        public class Participant
        {
            private ChatRoom _chatRoom = null!;
            private readonly string _name;

            public Participant(string name)
            {
                _name=name;
            }

            public string Name => _name;

            public ChatRoom ChatRoom
            {
                get => _chatRoom;
                set => _chatRoom = value;
            }

            public void Send(string to, string message)
            {
                _chatRoom.Send(_name,to,message);
            }


            public virtual void Receive(string from, string message)
            {
                Console.WriteLine($"{from} to {Name}:'{message}'");
            }
        }

        public class Beatle : Participant
        {
            public Beatle(string name) : base(name)
            {
            }

            public override void Receive(string from, string message)
            {
                Console.Write("To a Beatle: ");

                base.Receive(from, message);
            }
        }

        public class NonBeatle : Participant
        {
            public NonBeatle(string name) : base(name)
            {
            }

            public override void Receive(string from, string message)
            {
                Console.Write("To a non-Beatle: ");
                base.Receive(from, message);
            }
        }
    }
}
```

:::
::::
