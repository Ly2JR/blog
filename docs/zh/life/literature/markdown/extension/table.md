# 表格

要添加表格，请使用三个或多个连接符(`---`)创建每列的标题，并使用管道(`|`)分隔每列。

```markdown
|Syntax|Description|
|---|---|
|Header|Title|
|Pragraph|Text|
```

|Syntax|Description|
|---|---|
|Header|Title|
|Pragraph|Text|

## 对齐

你可以通过在管道(`|`)中添加冒号(`:`),将列中的文本对齐到左侧，右侧或中心。

```markdown
|Syntax|Description|Test text|
|:--|:--:|--:|
|Header|Title|Here's this|
|Paragraph|Text|And more|
```

|Syntax|Description|Test text|
|:--|:--:|--:|
|Header|Title|Here's this|
|Paragraph|Text|And more|

## 格式化表格中的文字

您可以在表格中设置文本格式。例如，您可以添加链接，代码(仅反引号(```)中的单词或短语，而不是代码块)和强调。

您不能添加标题，块引用，列表，水平规则，图像或HTML标签。

## 在表格中转义管道字符

您可以使用表格的HTML字符代码(`&#123;`)在表格中显示竖线(`|`)字符。
