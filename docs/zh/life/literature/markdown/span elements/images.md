# [图片](https://daringfireball.net/projects/markdown/syntax#img)

要添加图像，请使用感叹号(`!`),然后在方括号`[]`中添加文本,图片连接放在后面的圆括号里`()`,括号里的链接后可以增加一个可选的图片标题文本。

插入图片Markdown语法代码1:`![图片Alt](图片链接 '图片title')`

```markdown
![logo](/favicon.ico)
```

![logo](/favicon.ico)

插入图片Markdown语法代码2:`![图片Alt][id]`。

```markdown
![logo][1]

[1]:/favicon.ico
```

![logo][1]

[1]:/favicon.ico

另外还可以将图片转换成Base64字符串,需要自己检测是否支持。

```markdown
![logo][logo]

[logo]:data:image/x-png;base64,...
```

图片链接

``` markdown
[![logo](/favicon.ico)](https://ilyl.life/zh/life/literature/markdown)
```

[![logo](/favicon.ico)](https://ilyl.life//zh/life/literature/markdown)
