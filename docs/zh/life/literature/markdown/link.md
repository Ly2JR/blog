# 链接语法

不同的Markdown应用程序处理Url中间的空格方式不一样。为了兼容性，请尽量使用`%20`替代空格。

|:heavy_check_mark: Do This|:x: Don't Do This|
|:-|:-|
|`[link](https://example/com/my%20first%20page)`|`[link](https://example/com/my first page)`|

## 超链接

链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。

超链接Markdown语法代码：`[超链接显示名](超链接地址 "超链接title")`

```markdown
[Markdown](https://ilyl.life/zh/life/literature/markdown/)

[Markdown](https://ilyl.life/zh/life/literature/markdown/ "Markdown语法")
```

[Markdown](https://ilyl.life/zh/life/literature/markdown/)

[Markdown](https://ilyl.life/zh/life/literature/markdown/ "Markdown语法")

## 网址和邮箱

使用`<`和`>`包裹需要显示的内容,变成可点击的链接。

可点击链接Markdown语法代码：`<超链接地址>`

```markdown
<https://ilyl.life/zh/life/literature/markdown/>

<markwodn@example.com>
```

<https://ilyl.life/zh/life/literature/markdown/>

<markwodn@example.com>

## 引用类型链接

引用样式链接是一种特殊的链接，它使URL在Markdown中便于显示和阅读。

引用类型链接Markdown语法代码：

`[超链接显示名] [超链接地址标签]`

`[超链接地址标签]:超链接地址`

第一部分格式：

第一组方括号包围应显示为链接的文本。第二组括号显示一个标签，该标签用于指向您存储在文档其他位置的链接。

在第一组和第二组括号之间包含一个空格。第二组括号中的标签不区分大小写，可以包含字母，数字，空格或标点符号。

第二部分格式:

默认第二部分放在文章的最后。

1、放在括号中的标签，其后紧跟一个冒号和至少一个空格(例如:`[lable]:%20`)；

2、链接的URL，可以选择将其括在尖括号中。

3、链接的可选标题，可以将其括在双引号，单引号或者括号中。

```markdown
[Markwon1][1]

[Markwon2][2]

[Markwon3][3]

[Markwon4][4]

[Markwon5][5]

[Markwon6][6]

[Markwon7][7]

[Markwon8][8]

[1]:https://ilyl.life/zh/life/literature/markdown/

[2]:https://ilyl.life/zh/life/literature/markdown/ "Markdown2"

[3]:https://ilyl.life/zh/life/literature/markdown/ 'Markdown3'

[4]:https://ilyl.life/zh/life/literature/markdown/ (Markdown4)

[5]:<https://ilyl.life/zh/life/literature/markdown/>

[6]:<https://ilyl.life/zh/life/literature/markdown/> "Markdown6"

[7]:<https://ilyl.life/zh/life/literature/markdown/> 'Markdown7'

[8]:<https://ilyl.life/zh/life/literature/markdown/> (Markdown8)
```

[Markwon1][1]

[Markwon2][2]

[Markwon3][3]

[Markwon4][4]

[Markwon5][5]

[Markwon6][6]

[Markwon7][7]

[Markwon8][8]

[1]:https://ilyl.life/zh/life/literature/markdown/

[2]:https://ilyl.life/zh/life/literature/markdown/ "Markdown2"

[3]:https://ilyl.life/zh/life/literature/markdown/ 'Markdown3'

[4]:https://ilyl.life/zh/life/literature/markdown/ (Markdown4)

[5]:<https://ilyl.life/zh/life/literature/markdown/>

[6]:<https://ilyl.life/zh/life/literature/markdown/> "Markdown6"

[7]:<https://ilyl.life/zh/life/literature/markdown/> 'Markdown7'

[8]:<https://ilyl.life/zh/life/literature/markdown/> (Markdown8)

## 注脚

在需要添加注脚的文字后面加上注脚名称`[^注脚标签]`,称为加注。

注脚的Markdown语法代码：

`内容[^注脚标签]`

`[^注脚标签]:注脚内容`

```markdown
Markwon1[^1]

Markwon2[^2]

Markwon3[^3]

Markwon4[^4]

Markwon5[^5]

Markwon6[^6]

Markwon7[^7]

Markwon8[^8]

[^1]:https://ilyl.life/zh/life/literature/markdown/

[^2]:https://ilyl.life/zh/life/literature/markdown/ "Markdown2"

[^3]:https://ilyl.life/zh/life/literature/markdown/ 'Markdown3'

[^4]:https://ilyl.life/zh/life/literature/markdown/ (Markdown4)

[^5]:<https://ilyl.life/zh/life/literature/markdown/>

[^6]:<https://ilyl.life/zh/life/literature/markdown/> "Markdown6"

[^7]:<https://ilyl.life/zh/life/literature/markdown/> 'Markdown7'

[^8]:<https://ilyl.life/zh/life/literature/markdown/> (Markdown8)
```

## 锚点(页内链接)

锚点就是页内超链接，链接本文档内部的某些元素，实现当前页面中的跳转。

锚点只吃菜在标题后插入锚点，并且跳转的位置也是标题。

锚点的Markdown代码语法:`[锚点内容](#标题)`

```markdown
[锚点](#链接语法)
```

[锚点](#链接语法)
