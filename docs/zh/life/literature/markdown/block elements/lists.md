# [列表](https://daringfireball.net/projects/markdown/syntax#list)

可以将多个条目组织成有序或无须的列表。

## 有序列表

要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点(`.`)之后保留一个空格(`space`)。数字不必按数学顺序排列，但是列表应当以数字`1`起始。

有序列表的最佳实践

|:heavy_check_mark: Do This|:x: Don't Do This|
|:-|:-|
|`1. First item`<br/>`2. Second item`|`1) First item`<br/>`2) Second item`|

```markdown
1. First item
2. Second item
3. Third item
```

1. First Item
2. Second Item
3. Third Item

```markdown
1. First item
8. Eight item
2. Second item
```

1. First item
8. Eight item
2. Second item

``` markdown
1. First item
2. Second item
    1. Indented item
    2. Indented item
3. Third item
```

1. First item
2. Second item
    1. Indented item
    2. Indented item
3. Third item

## 无序列表

哟啊创建无须列表，请在每个列表项前面添加破折号(`-`)、星号(`*`)或加号(`+`)。缩进(两个空格)一个或多个列表项可创建嵌套列表。

无序列表的最佳实践

|:heavy_check_mark: Do This|:x: Don't Do This|
|:-|:-|
|`- First item`<br>`- Second item`<br>`- Third item`|`- First item`<br>`* Second item`<br>`+ Third item`|

破折号(`-`)Markdown语法:

```markdown
- First item
- Second item
- Third item
```

破折号(`-`)预览效果：

- First item
- Second item
- Third item

星号(`*`)Markdown语法：

```markdown
* First item
* Second item
* Third item
```

星号(`*`)预览效果：

* First item
* Second item
* Third item

加号(`+`)Markdown语法：

```markdown
+ First item
+ Second item
+ Third item
```

加号(`+`)预览效果：

+ First item
+ Second item
+ Third item

多级嵌套Markdown语法：

```markdown
- First item
- Second item

  - Indented item

    - Indented item

      - Indented item

  - Indented item

- Third item
```

多级嵌套预览效果：

- First item
- Second item

  - Indented item

    - Indented item

      - Indented item

  - Indented item

- Third item

## 嵌套其他元素

要在保留列表连续性的同时在列表中添加另外一种元素，请将该元素缩进四个空格(`space`)或一个制表符(`tab`)。

嵌套段落Markdown语法：

```markdown
- This is the first list item.
- Here's the second list item 

    I need to add another paragraph below the second list item.

- And here's the third list item.
```

嵌套段落预览效果：

- This is the first list item.
- Here's the second list item.

    I need to add another paragraph below the second list item.

- And here's the third list item.

嵌套引用块Markdown语法：

```markdown
- This is the first list item.
- Here's the second list item 

    > I need to add another paragraph below the second list item.

- And here's the third list item.
```

嵌套引用块预览效果：

- This is the first list item.
- Here's the second list item.

    > I need to add another paragraph below the second list item.

- And here's the third list item.

嵌套代码块Markdown语法：

```markdown
- This is the first list item.
- Here's the second list item 

    ```html
    <html>
        <head>
            <title>Hello Markdown</title>
        </head>
    </html>
    ```

- And here's the third list item.
```

嵌套代码块预览效果：

- This is the first list item.
- Here's the second list item.

    ```html
    <html>
        <head>
            <title>Hello Markdown</title>
        </head>
    </html>
    ```

- And here's the third list item.

嵌套图片Markdown语法：

```markdown
1. Open the file containing the Markdown mascot.
2. Marvel at its beauty.

  ![logo](/favicon.ico)

3. Close the file.
```

嵌套图片预览效果：

- This is the first list item.
- Here's the second list item.

   ![logo](/favicon.ico)

- And here's the third list item.
