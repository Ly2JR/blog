# 读取

## 示例

:::: code-group
::: code-group-item XML

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<bookstore>
    <book>
        <title lang="eng">Harry Potter</title>
        <price>29.99</price>
    </book>
    <book>
        <title lang="eng">Learning XML</title>
        <price>39.95</price>
    </book>
</bookstore>
```

:::
::::

## 代码

### 方式一

::: tip
引用 using System.Xml.Linq;
:::

:::: code-group
::: code-group-item 控制台

```cs
var filePath = "D:\\books.xml";

XmlDocument xmlDoc = new XmlDocument();
xmlDoc.Load(filePath);

foreach (XmlElement item in xmlDoc.SelectNodes("//book/title"))
{
    Console.WriteLine(item.InnerText);
}

Console.ReadKey();
```

:::
::::

### 方式二

::: tip
引用 using System.Xml;
:::

:::: code-group
::: code-group-item 控制台

```cs
var filePath = "D:\\books.xml";

var xDoc = XElement.Load(filePath);
foreach (var item in xDoc.Elements("book"))
{
    Console.WriteLine(item.Element("title").Value);
}

Console.ReadKey();
```

:::
::::

### 方式三

#### 1、数据建模

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

#### 2、反序列化

::: tip
引用 using System.Xml.Serialization;

引用 using System.Text.Json;
:::

:::: code-group
::: code-group-item 控制台

```cs
var filePath = "D:\\books.xml";

BookStore bookStore = null;

if (File.Exists(filePath))
{
    using (var reader = new StreamReader(filePath))
    {
        var xmlSerializer = new XmlSerializer(typeof(BookStore));
        bookStore = xmlSerializer.Deserialize(reader) as BookStore;
    }
}

JsonSerializerOptions options = new JsonSerializerOptions()
{
    WriteIndented = true,                                   
    AllowTrailingCommas = true,                                                                                 
    IgnoreReadOnlyProperties = true,                        
    PropertyNameCaseInsensitive = true,                   
};

string json = JsonSerializer.Serialize<BookStore>(bookStore, options);  

Console.WriteLine(json);
Console.ReadKey();
```

:::
::::
