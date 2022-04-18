# 换行语法

在一行的末尾添加两个或多个空格，然后按回车键，即可创建一个换行(`<br>`)。

## 换行(Line Break)用法的最佳实践

几乎每个Markdown应用程序都支持两个或多个空格进行换行，称为`结尾空格(trailing whitespace)`的方式，但这是由争议的，因为很难在编译器中直接看到空格，并且很多人在每个句子后面都会有意或无意地添加两个空格。由于这个原因，你可能要使用除结尾空格以外的其他方式来换行。幸运的是，几乎每个Markdown应用程序都支持另一种换行方式：HTML的`<br>`标签。

为了兼容性，请在行尾添加"结尾空格"或HTML的`<br>`标签来实现换行。

|:heavy_check_mark: Do This|:x: Don't Do This|
|:-|:-|
|`First line with two spaces after.`<br>`And the next line.`<br>`First line with the HTML tag after.<br>`<br>`And the next line.`|`First line with two spaces after.\`<br>`And the next line.`<br>`First line with the HTML tag after.`<br>`And the next line.`|
