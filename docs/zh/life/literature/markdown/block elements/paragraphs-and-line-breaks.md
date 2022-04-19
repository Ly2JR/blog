# [段落和换行符](https://daringfireball.net/projects/markdown/syntax#p)

## 段落

要创建段落，请使用空白行将一行或多行文本进行分割。

不用使用空格(spaces)或制表符(tabs)缩进段落。

|:heavy_check_mark: Do This|:x: Don't Do This|
|:-|:-|
|`Don't put tabs or spaces in front of your paragraphs.`<br><br>`Keep lines left-aligned like this.`|&nbsp;&nbsp;&nbsp;&nbsp;`This can result in unexpected formatting problems.`<br><br>&nbsp;&nbsp;&nbsp;&nbsp;`Don't add tabs or spaces in front of paragraphs.`|

```markdown
I really like using Markdown.

I think I'll use it to format all of my documents from now on.
```

I really like using Markdown.

I think I'll use it to format all of my documents from now on.

## 换行

在一行的末尾添加两个或多个空格，然后按回车键，即可创建一个换行(`<br>`)。

几乎每个Markdown应用程序都支持两个或多个空格进行换行，称为`结尾空格(trailing whitespace)`的方式，但这是由争议的，因为很难在编译器中直接看到空格，并且很多人在每个句子后面都会有意或无意地添加两个空格。由于这个原因，你可能要使用除结尾空格以外的其他方式来换行。幸运的是，几乎每个Markdown应用程序都支持另一种换行方式：HTML的`<br>`标签。

为了兼容性，请在行尾添加"结尾空格"或HTML的`<br>`标签来实现换行。

|:heavy_check_mark: Do This|:x: Don't Do This|
|:-|:-|
|`First line with two spaces after.`<br>`And the next line.`<br>`First line with the HTML tag after.<br>`<br>`And the next line.`|`First line with two spaces after.\`<br>`And the next line.`<br>`First line with the HTML tag after.`<br>`And the next line.`|
