# [代码块](https://daringfireball.net/projects/markdown/syntax#precode)

Markdown基本语法允许您通过将行缩进四个空格或一个制表符来创建代码块。如果发现不方便，请尝试使用受保护的代码块。根据Markdown处理器或编辑器的不同，您将在代码块之前和之后的行上使用三个反引号(` ``` `)或三个波浪号(`~~~`)。

``` markdown
    ```
    {
    "firstName":"John",
    "lastName":"Smith",
    "age",25
    }
    ```
```

```markdown
{
  "firstName":"John",
  "lastName":"Smith",
  "age",25
}
```

## 语法高亮

许多Markdown处理器都支持受围栏代码块的语法突出显示。要添加语法突出显示，请在受防护的代码块之前的反引号旁边指定一种语言。

``` markdown

    ```json
    {
    "firstName":"John",
    "lastName":"Smith",
    "age",25
    }
    ```

```

```json
{
  "firstName":"John",
  "lastName":"Smith",
  "age",25
}
```
