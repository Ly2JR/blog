# 桥接模式(Bridge Pattern)

桥接模式是将抽象部分与它的实现部分分离，使它们都开元独立地变化。它是一种对象结构型模式，又成为柄体(Handle and Body)模式或接口(Interface)模式。

- 内容简介

在软件系统中，某些类型由于自身的逻辑，它具有两个或多个维度的变化，那么如何应对这种”多维度的变化“？如何利用面向对象的技术来使得该类型能够轻松的沿着多个方向进行变化，而又不引入额外的复杂度？这就要使用Bridge模式。

- 意图

  【GOF95】在提出桥梁模式的时候指出，桥梁模式的用意是”将抽象化(Abstraction)与实现化(Implementation)脱藕，使得二者可以独立地变化“。这句话有三个关键词，也就是抽象化、实现化和脱藕。

  - 抽象化

    存在于多个实体中的共同的概念性联系，就是抽象化。作为一个过程，抽象化就是忽略一些信息，从而把不同的实体当做同样的实体对待。

  - 实现化

    抽象化给出的具体实现，就是实现化。

  - 脱藕

    所谓耦合，就是两个实体的行为的某种强关联。而将它们的强关联去掉，就是耦合的解脱，或称脱藕。在这里，脱藕是指将抽象化和实现化之间的耦合解脱开，或者说是将它们之间的强关联改换成弱关联。

    将两个角色之间的继承关系改为聚合关系，就是将它们之间的强关联改换为弱关联。因此，桥梁模式中的所谓脱藕，就是指在一个软件系统的抽象化和实现化之间使用组合/聚合关系而不是继承关系，从而使两者可以相对独立地变化。这就是桥梁模式的用意。

- 结构

系统含有两个等级结构，也就是:

1. 由抽象化角色和修正抽象化角色组成的抽象化等级结构。
2. 由实现化角色和两个具体实现化角色所组成的实现化等级结构。

桥梁模式所设计的角色有：

抽象化(Abstraction)角色：抽象化给出的定义，病保存一个对实现化对象的引用。

修正抽象化(Refined Abstraction)角色：扩展抽象化角色，改变和修正父类对抽象化的定义。

实现化(Implementor)角色：这给角色给出实现化角色的接口，但不给出具体的实现。必须指出的是，这个接口不一定和抽象化角色的接口定义相同，实际上，这两个接口可以非常不一样。实现化角色应当只给出底层操作，而抽象化角色应当只给出基于底层操作的更高一层的操作。

具体实现化(Concrete Implementor)角色：这个角色给出实现化角色接口的具体实现。

- 示例

```cs
namespace Design_Pattern
{
    var shapes = new BridgePattern.IShape[2];
    shapes[0] = new BridgePattern.CircleShape(1, 2, 3, new BridgePattern.DrawingApi1());
    shapes[1] = new BridgePattern.CircleShape(5, 7, 11, new BridgePattern.DrawingApi2());
    foreach (var shape in shapes)
    {
        shape.ResizeByPercentage(2.5);
        shape.Draw();
    }

    public  class BridgePattern
    {
        /**"Implementor"*/
        public interface IDrawingApi
        {
            void DrawCircle(double x, double y, double radius);
        }

        /**"ConcreteImplementor" 1/2*/
        public class DrawingApi1 : IDrawingApi
        {
            public void DrawCircle(double x, double y, double radius)
            {
                Console.WriteLine($"API1.circle at {x}:{y} radius {radius}");
            }
        }

        /**"ConcreteImplementor" 2/2*/
        public class DrawingApi2 : IDrawingApi
        {
            public void DrawCircle(double x, double y, double radius)
            {
                Console.WriteLine($"API2.circle at {x}:{y} radius {radius}");
            }
        }

        /**“Abstraction“*/
        public interface IShape
        {

            void Draw();
            //low-level(i.e. Implementation-specific)
            void ResizeByPercentage(double pct);
        }

        /**"Refined Abstraction"*/
        public class CircleShape : IShape
        {
            private readonly double _x;
            private readonly double _y;
            private double _radius;
            private readonly IDrawingApi _drawingApi;

            public CircleShape(double x, double y, double radius, IDrawingApi drawingApi)
            {
                this._x = x;
                this._y = y;
                this._radius = radius;
                this._drawingApi = drawingApi;
            }
            //low-level(i.e. Implementation-specific)
            public void Draw()
            {
                _drawingApi.DrawCircle(_x, _y, _radius);
            }

            //high-level (i.e. Abstraction-specific)
            public void ResizeByPercentage(double pct)
            {
                _radius *= pct;
            }
        }
    }
}
```
