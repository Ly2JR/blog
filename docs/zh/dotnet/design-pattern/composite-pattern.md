# 组合模式（Composite Pattern）

组合模式，将对象组合秤树形结构以表示"部门-整体"的层次结构。

- 组合模式概述

  组合模式使得用户对单个对象喝组合对象的使用具有一致性。

  有时候又叫做部分-整体模式，它使完美树型结构的问题中，模糊了简单元素喝复杂元素的概念，客户程序可以处理简单元素一样来处理复杂元素，从而使得客户程序与复杂元素的内部结构解耦。

  组合模式让你可以优化处理递归或分级模式结构。有许多关于分级数据结构的例子，使得组合模式非常有用武之地。关于分级数据结构的一个普遍性的例子是你每次使用电脑时所遇到的`文件系统`。文件系统由目录和文件组成。每个目录都可以装内容。目录的内容可以是文件，也可以是目录。按照这种方式，计算机的文件系统就是以递归结构来组织的。如果你想要描述这样的数据结构，那么你可以使用组合模式Composite。

  - 定义

    （GOF《设计模式》）:将对象组合成树形结构以表示“部门整体“的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。

  - 涉及角色

    1. Component是组合中的对象声明接口，在适当的情况下，实现所有类共有接口的默认行为。声明一个接口用于访问和管理Component子部件。
    2. Leaf 在组合中表示叶子节点对象，叶子节点没有子节点。
    3. Composite定义有枝界节点行为，用来存储子部件，在Component接口中实现与子部件有关操作，如增加(`add`)和删除(`remove`)等。

  - 适用性

  以下情况下使用Composite模式：

    1. 你想表达对象的部分-整体层次结构
    2. 你希望用户忽略组合对象与单个对象的不同，用户将统一地使用组合结构中的所有对象。

- 总结

  组合模式解耦了客户程序与复杂元素内部结构，从而使客户程序可以像处理简单元素一样来处理复杂元素。

  如果你想要创建层次结构，并可以在其中以相同的方式对待所有元素，那么组合模式就是最理想的选择。本章使用了一个文件系统的例子来说明了组合模式的用途。在这个例子中，文件和目录都执行相同的接口，这是组合模式的关键。通过执行相同的接口，你就可以用相同的方式对待文件和目录，从而实现将文件或者目录存储为目录的子级元素。

- 示例

比如现实中公司内各部门的层级关系

```cs
using System.Text;

namespace Design_Pattern
{
    CompositePattern.Company root = new CompositePattern.ConcreteCompany();
    root.Name = "北京总公司";
    root.Add(new CompositePattern.HRDepartment("总公司人力资源部"));
    root.Add(new CompositePattern.FinanceDepartment("总公司财务部"));

    CompositePattern.Company shandongCompany=new CompositePattern.ConcreteCompany("山东分公司");
    shandongCompany.Add(new CompositePattern.HRDepartment("山东分公司人力资源部"));
    shandongCompany.Add(new CompositePattern.FinanceDepartment("山东分公司财务部"));

    CompositePattern.Company zaozhuangCompany = new CompositePattern.ConcreteCompany("枣庄办事处");
    zaozhuangCompany.Add(new CompositePattern.FinanceDepartment("枣庄办事处财务部"));
    zaozhuangCompany.Add(new CompositePattern.HRDepartment("枣庄办事处人力资源部"));

    CompositePattern.Company jinanCompany = new CompositePattern.ConcreteCompany("济南办事处");
    jinanCompany.Add(new CompositePattern.FinanceDepartment("济南办事处财务部"));
    jinanCompany.Add(new CompositePattern.HRDepartment("济南办事处人力资源部"));

    shandongCompany.Add(jinanCompany);
    shandongCompany.Add(zaozhuangCompany);

    CompositePattern.Company huadongCompany = new CompositePattern.ConcreteCompany("上海华东分公司");
    huadongCompany.Add(new CompositePattern.FinanceDepartment("上海华东分公司财务部"));
    huadongCompany.Add(new CompositePattern.HRDepartment("上海华东分公司人力资源部"));

    CompositePattern.Company hangzhouCompany = new CompositePattern.ConcreteCompany("杭州办事处");
    hangzhouCompany.Add(new CompositePattern.FinanceDepartment("杭州办事处财务部"));
    hangzhouCompany.Add(new CompositePattern.HRDepartment("杭州办事处人力资源部"));

    CompositePattern.Company nanjingCompany = new CompositePattern.ConcreteCompany("南京办事处");
    nanjingCompany.Add(new CompositePattern.FinanceDepartment("南京办事处财务部"));
    nanjingCompany.Add(new CompositePattern.HRDepartment("南京办事处人力资源部"));

    huadongCompany.Add(hangzhouCompany);
    huadongCompany.Add(nanjingCompany);

    root.Add(shandongCompany);
    root.Add(huadongCompany);
    root.Display(0);

    public class CompositePattern
    {
        /// <summary>
        /// 抽象接口类
        /// </summary>
        public abstract class Company
        {
            private string _name;

            public string Name
            {
                get { return _name; }
                set { _name = value; }
            }

            public Company() { }

            public Company(string name) : this()
            {
                this._name = name;
            }

            public abstract void Add(Company company);

            public abstract void Remove(Company company);

            public abstract void Display(int depth);
        }

        /// <summary>
        /// 枝节点类
        /// </summary>
        public class ConcreteCompany : Company
        {
            private readonly List<Company> _companyList;

            public ConcreteCompany()
            {
                _companyList = new List<Company>();
            }

            public ConcreteCompany(string name) : base(name)
            {
                _companyList = new List<Company>();
            }

            public override void Add(Company company)
            {
                _companyList.Add(company);
            }

            public override void Display(int depth)
            {
                var sb = new StringBuilder("");
                for (var i = 0; i < depth; i++)
                {
                    sb.Append("-");
                }
                Console.WriteLine($"{sb}{base.Name}");
                foreach (var c in _companyList)
                {
                   c.Display(depth+2);
                }
            }

            public override void Remove(Company company)
            {
                _companyList.Remove(company);
            }
        }

        /// <summary>
        /// 两个叶节点类
        /// </summary>
        public class HRDepartment : Company
        {
            public HRDepartment(string name) : base(name){}

            public override void Add(Company company){}

            public override void Remove(Company company){}

            public override void Display(int depth)
            {
                var sb = new StringBuilder();
                for (var i = 0; i < depth; i++)
                {
                    sb.Append("-");
                }
                Console.WriteLine($"{sb}{base.Name}");
            }
        }

        public class FinanceDepartment : Company
        {
            public FinanceDepartment(string name):base(name){}

            public override void Add(Company company){}

            public override void Remove(Company company){}

            public override void Display(int depth)
            {
                var sb = new StringBuilder();
                for (var i = 0; i < depth; i++)
                {
                    sb.Append("-");
                }
                Console.WriteLine($"{sb}{base.Name}");
            }
        }
    }
}
```
