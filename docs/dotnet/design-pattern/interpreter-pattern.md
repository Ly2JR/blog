# 解释器模式(Interpreter Pattern)

解释器模式(interpreter pattern)是2018年全国科学技术名称审定委员会公布的计算机科学技术名词。

- 定义

一种设计模式。定义了一个解释器，来接收给定语言和文法的句子。其实质是把语言中的每个符号定义成一个(对象)类，从而把每个程序转换成一个具体的对象树。

- 示例

:::: code-group
::: code-group-item Structural code

```cs
/// <summary>
/// 演示了解释器模式，它使用定义的语法提供处理已解析语句的解释器。
/// </summary>
namespace Design_Pattern.Interpreter
{
    using Interpreter= Design_Pattern.Interpreter;

    var structuralContext = new Interpreter.Structural.Context();
    var list = new List<Interpreter.Structural.AbstractExpression>
    {
        new Interpreter.Structural.TerminalExpression(),
        new Interpreter.Structural.NonterminalExpression(),
        new Interpreter.Structural.TerminalExpression(),
        new Interpreter.Structural.TerminalExpression()
    };

    foreach (var expression in list)
    {
        expression.Interpret(structuralContext);
    }

    public class Structural
    {
        public class Context
        {
        }

        public abstract class AbstractExpression
        {
            public abstract void Interpret(Context context);
        }

        public class TerminalExpression : AbstractExpression
        {
            public override void Interpret(Context context)
            {
                Console.WriteLine("Called Terminal.Interpret()");
            }
        }

        public class NonterminalExpression : AbstractExpression
        {
            public override void Interpret(Context context)
            {
                Console.WriteLine("Called nonterminal.Interpret()");
            }
        }
    }
}
```

:::
::: code-group-item Real-world code

```cs
/// <summary>
/// 演示了用于将罗马数字转为十进制的解释器模式。
/// </summary>
namespace Design_Pattern.Interpreter
{
    using Interpreter= Design_Pattern.Interpreter;

    var roman = "MCMXXVIII";
    var realWorldContext = new Interpreter.RealWorld.Context(roman);

    var tree = new List<Interpreter.RealWorld.Expression>()
    {
        new Interpreter.RealWorld.ThousandExpression(),
        new Interpreter.RealWorld.HundredExpress(),
        new Interpreter.RealWorld.TenExpress(),
        new Interpreter.RealWorld.OneExpress(),
    };

    foreach (var exp in tree)
    {
        exp.Interpret(realWorldContext);
    }

    Console.WriteLine($"{roman} = {realWorldContext.Output}");

    public class RealWorld
    {
        public class Context
        {
            private int _output;

            public Context(string input)
            {
                Input = input;
            }

            public string Input { get; set; }

            public int Output { get => _output; set => _output = value; }
        }

        public abstract class Expression
        {
            public void Interpret(Context context)
            {
                if (context.Input.Length == 0) return;

                if (context.Input.StartsWith(Nine()))
                {
                    context.Output += (9 * Multiplier());
                    context.Input = context.Input.Substring(2);
                }
                else if (context.Input.StartsWith(Four()))
                {
                    context.Output += (4 * Multiplier());
                    context.Input = context.Input.Substring(2);
                }
                else if (context.Input.StartsWith(Five()))
                {
                    context.Output += (5 * Multiplier());
                    context.Input = context.Input.Substring(1);
                }

                while (context.Input.StartsWith(One()))
                {
                    context.Output += (1 * Multiplier());
                    context.Input = context.Input.Substring(1);
                }
            }

            public abstract string One();

            public abstract string Four();

            public abstract string Five();

            public abstract string Nine();

            public abstract int Multiplier();
        }

        public class ThousandExpression : Expression
        {
            public override string Five()
            {
                return " ";
            }

            public override string Four()
            {
                return " ";
            }

            public override int Multiplier()
            {
                return 1000;
            }

            public override string Nine()
            {
                return " ";
            }

            public override string One()
            {
                return "M";
            }
        }

        public class HundredExpress : Expression
        {
            public override string Five()
            {
                return "D";
            }
            public override string Four()
            {
                return "CD";
            }

            public override int Multiplier()
            {
                return 100;
            }

            public override string Nine()
            {
                return "CM";
            }

            public override string One()
            {
                return "C";
            }
        }

        public class TenExpress : Expression
        {
            public override string One()
            {
                return "X";
            }

            public override string Four()
            {
                return "XL";
            }

            public override string Five()
            {
                return "L";
            }

            public override string Nine()
            {
                return "XC";
            }

            public override int Multiplier()
            {
                return 10;
            }
        }

        public class OneExpress : Expression
        {
            public override string One()
            {
                return "I";
            }

            public override string Four()
            {
                return "IV";
            }

            public override string Five()
            {
                return "V";
            }

            public override string Nine()
            {
                return "IX";
            }

            public override int Multiplier()
            {
                return 1;
            }
        }
    }
}
```

:::
::::
