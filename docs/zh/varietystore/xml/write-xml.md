# 写入

## 数据建模

::: tip
引入 using System.Xml.Serialization;
:::

:::: code-group
::: code-group-item BookStore

```cs
[XmlRoot("bookstore")]
[Serializable]
public class BookStore
{
    [XmlElement(elementName: "book")]
    public List<Book> Books { get; set; }
}
```

:::

::: code-group-item Book

```cs
[Serializable]
public class Book
{
    [XmlElement("title")]
    public BookTitle Title { get; set; }

    [XmlElement("price")]
    public string Price { get; set; }
}
```

:::

::: code-group-item BookTitle

```cs
[Serializable]
public class BookTitle
{
    [XmlAttribute("lang")]
    public string Lang { get; set; }

    [XmlText]
    public string Text { get; set; }
}
```

:::
::::

## 序列化

### 方式一

::: tip
引用 using System.Xml.Serialization;

引用 using System.Text.Json;
:::

:::: code-group
::: code-group-item 控制台

```cs
var filePath = "D:\\books.xml";

BookStore bookStore =new BookStore();
bookStore.Books = new List<Book>() {
    new Book()
    {
        Price=29.99M,
        Title=new BookTitle()
        {
            Text="Harry Potter",
            Lang="lng"
        }
    },
      new Book()
    {
        Price=39.95M,
        Title=new BookTitle()
        {
            Text="Learning XML",
            Lang="lng"
        }
    },
};
using (var write = new StreamWriter(filePath))
{
    var xmlSerializer = new XmlSerializer(typeof(BookStore));
    xmlSerializer.Serialize(write, bookStore);
}
Console.ReadKey();
```

:::
::::

结果如下：

:::: code-group
::: code-group-item XML

```xml
<?xml version="1.0" encoding="utf-8"?>
<bookstore xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <book>
    <title lang="lng">Harry Potter</title>
    <price>29.99</price>
  </book>
  <book>
    <title lang="lng">Learning XML</title>
    <price>39.95</price>
  </book>
</bookstore>
```

:::
::::
