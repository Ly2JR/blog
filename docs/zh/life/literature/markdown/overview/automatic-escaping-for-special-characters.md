# [特殊字符的自动转义](https://daringfireball.net/projects/markdown/syntax#autoescape)

在HTML中，有两个字符需要特殊处理：`<`和`&`。左尖括号用于开始标签；`&`符号用于表示HTML实体。如果要将他们用作文字字符，则必须将它们转义为实体，例如`alt;`和`&amp;`。

Markdown允许您自然地使用这些字符，并为您处理所有必要的转义。如果你使用`&`符号作为HTML实体的一部分，它保持不变；否则会被翻译成`&amp;`。

因此，如果你想在文章中包含版权符号，您可以这样写:

```markdown
&copy;
```

&copy;

Markdown将不会理会它，如果你写

```markdown
AT&T
```

Markdown会将其翻译为:

```markdown
AT$amp;T
```

同样，因为Markdown支持[内联HTML](inline-html.md)，如果你使用尖括号作为HTML标签分隔符，Markdown会这样对待它们。

```markdown
4<5
```

Markdown会将其翻译为:

```markdown
4 &lt; 5
```

需要特别注意的是，在Markdown的块级元素和内联元素中， `<`和`&`两个符号都会被自动转换成HTML实体，这项特性让你可以很容易地用 Markdown 写 HTML。（在 HTML 语法中，你要手动把所有的 < 和 & 都转换为 HTML 实体。）
