# 迭代器模式(Iterator Pattern)

迭代器模式(Iterator),提供一种方法顺序访问一个聚合对象中的各种元素，而又不暴露该对象的内部表示。

- 简介

在面向对象编程里，迭代器模式是一种设计模式，是一种最简单也最常见的设计模式。它可以让用户透过特定的接口巡防容器中的每一个元素而不用了解底层实现。

此外，也可以实现特定目的版本的迭代器。

- 意图

提供一种方法顺序访问一个聚合对象中各个元素，而又不需暴露该对象的内部表示。

- 适用性

1. 访问一个聚合对象的内容而无需暴露它的内部表示
2. 支持对聚合对象的多种变量
3. 为遍历不同的聚合结构提供一个统一的接口

- 参与者

1. Iterator(迭代器)

    迭代器定义访问和遍历元素的接口

2. ConcreteIterator(具体迭代器)

    具体迭代器实现迭代器接口

    对该聚合遍历时跟踪当前位置

3. Aggregate(聚合)

    聚合定义创建相应迭代器对象的接口

4. ConcreteAggregate(具体聚合)

    具体聚合实现创建相应迭代器的接口，该操作返回ConcreteIterator的一个适当实例

- 协作

ConcreteIterator跟踪聚合中的当前对象，并能够计算除待遍历的后续对象。

- 效果

1. 它支持以不同的方式遍历一个聚合
2. 迭代器简化了聚合的接口
3. 在同一个聚合上可以有多个遍历

- 示例

:::: code-group
::: code-group-item Structural code

```cs
namespace Design_Pattern
{
    var aggregate = new IteratorPattern.ConcreteAggregate
    {
        [0] = "Item A",
        [1] = "Item B",
        [2] = "Item C",
        [3] = "Item D"
    };

    var iterator = aggregate.CreateIterator();
    Console.WriteLine("Iterating over collection:");

    object? item = iterator.First();
    while (item!=null)
    {
        Console.WriteLine(item);
        item=iterator.Next();
    }

    public class IteratorPattern
    {
        public abstract class Aggregate
        {
            public abstract Iterator CreateIterator();
        }

        public class ConcreteAggregate : Aggregate
        {
            private readonly List<object> _items = new();

            public override Iterator CreateIterator()
            {
                return new ConcreteIterator(this);
            }

            public int Count => _items.Count;

            public object this[int index]
            {
                get => _items[index];
                set => _items.Insert(index,value);
            }
        }

        public abstract class Iterator
        {
            public abstract object? First();
            public abstract object? Next();

            public abstract bool IsDone();

            public abstract object CurrentItem();
        }

        public class ConcreteIterator : Iterator
        {
            private readonly ConcreteAggregate _aggregate;
            private int _current;

            public ConcreteIterator(ConcreteAggregate aggregate)
            {
                _aggregate=aggregate;
            }

            public override object? First()
            {
                return _aggregate[0];
            }

            public override object? Next()
            {
                object? ret = null;
                if (_current < _aggregate.Count - 1)
                {
                    ret=_aggregate[++_current];
                }
                return ret;
            }

            public override bool IsDone()
            {
                return _current >= _aggregate.Count;
            }

            public override object CurrentItem()
            {
                return _aggregate[_current];
            }
        }
    }
}
```

:::
::: code-group-item Real-world code

```cs
namespace Design_Pattern
{
    var collection = new IteratorPattern.Collection
    {
        [0] = new("Item 0"),
        [1] = new("Item 1"),
        [2] = new("Item 2"),
        [3] = new("Item 3"),
        [4] = new("Item 4"),
        [5] = new("Item 5"),
        [6] = new("Item 6"),
        [7] = new("Item 7"),
        [8] = new("Item 8"),
    };

    var iterator = collection.CreateIterator();
    iterator.Step = 2;

    Console.WriteLine("Iterating over collection:");

    for (var item=iterator.First();!iterator.IsDone;item=iterator.Next())
    {
        if (item != null) Console.WriteLine(item.Name);
    }

    public class IteratorPattern
    {
        public class Item
        {
            public Item(string name)
            {
                Name=name;
            }

            public string Name { get; }
        }

        public interface IAbstractCollection
        {
            Iterator CreateIterator();
        }

        public class Collection : IAbstractCollection
        {
            readonly List<Item> _items=new();

            public Iterator CreateIterator()
            {
                return new Iterator(this);
            }

            public int Count => _items.Count;

            public Item this[int index]
            {
                get => _items[index];
                set => _items.Add(value);
            }
        }

        public interface IAbstractIterator
        {
            Item First();
            Item? Next();
            bool IsDone { get; }

            Item CurrentItem { get; }
        }

        public class Iterator : IAbstractIterator
        {
            private readonly Collection _collection;

            private int _current;
            private int _step = 1;

            public Iterator(Collection collection)
            {
                _collection=collection;
            }

            public Item First()
            {
                _current = 0;
                return _collection[_current];
            }

            public Item? Next()
            {
                _current += _step;
                if (!IsDone) return _collection[_current];
                return null;
            }
            public int Step
            {
                get => _step;
                set=> _step = value;
            }

            public bool IsDone => _current >= _collection.Count;
            public Item CurrentItem => _collection[_current];
        }
    }
}
```

:::
::::