# 说明

[下载](https://git-scm.com/downloads)

## Git基础

### 获取Git仓库

- 将本地未进行版本控制的文件进行版本控制

:::: code-group
::: code-group-item git

``` bash
 $ git init
```

:::
::::

- 克隆远程仓库

:::: code-group
::: code-group-item git

``` bash
 $ git clone <url> <alias>
```

:::
::::

### 查看文件状态

::: tip
-s:可选，简化内容
A 新添加到缓存取的文件
M 修改的文件
?? 新添加未跟踪的文件
:::

:::: code-group
::: code-group-item git

``` bash
 $ git status [-s]
```

:::
::::

### 跟踪新文件

命令理解:精确地将内容添加到下一次提交中

::: tip
git add 命令使用文件或目录的路径作为参数;
:::

:::: code-group
::: code-group-item git

``` bash
 $ git add <files>
```

:::
::::

### 忽略文件

::: tip
.gitigore 文件

GitHub 有一个十分详细的针对数十种项目及语言的 .gitignore 文件列表， 你可以在 <https://github.com/github/gitignore> 找到它。
:::

文件`.gitignore`的格式规范如下:

- 所有空行或者以`#`开头的行都会被Git忽略

- 可以使用标准的glob模式匹配,它会递归地应用在整个工作区中

- 匹配模式可以以`/`开头防止递归

- 匹配模式可以以`/`结尾指定目录

- 要忽略指定模式以外的文件或目录，可以在模式前加叹号`!`取反

::: details blog
glob模式是指shell所使用的简化了的正则表达式。

星号（`*`）匹配零个或多个任意字符;

[`abc`]匹配任何一个列在方括号中的字符(这个例子要么匹配一个a,要么匹配一个b,要么匹配一个c);

问号(`?`)只匹配一个任意字符；

方括号中使用短划线分割两个字符，表示所有在这两个字符范围内的都可以匹配(比如[0-9]表示匹配所有0到9的数字)

使用两个星号(`**`)表示匹配任意中间目录,比如`a/**/z`可以匹配`a/z`、`a/b/z`或`a/b/c/z`等
:::

一个`.gitignore`文件的例子

:::: code-group
::: code-group-item .gitignore

``` txt
# 忽略所有的.a文件
*.a

# 跟踪所有的lib.a,即便在前面忽略了.a文件
！lib.a

# 只忽略当前目录下的TODO文件，而不忽略subidt/TODO
/TODO

# 忽略任何目录下名未build的文件
build/

# 忽略doc/notes.txt,但不忽略doc/server/arch.txt
doc/*.txt

# 忽略doc/目录及其所有子目录下的.pdf文件
doc/**/*.pdf
```

:::
::::

### 查看已暂存和未暂存的修改

::: warning
git diff 本身只显示尚未暂存的改动,而不是自上次提交以来所做的所有改动
:::

:::: code-group
::: code-group-item git

``` bash
 $ git diff
```

:::
::::

### 提交更新

::: tip
`-a`:可选，将所有已经跟踪过的文件暂存起来，从而跳过`git add`步骤

`-m`:可选，将提交信息与命令放置同一行
:::

:::: code-group
::: code-group-item git

``` bash
 $ git commit [-a] [-m] 
```

:::
::::

### 移除文件

::: tip
`-f`:可选，即 force 的首字母,强制删除

`--cached`:可选，从暂存区移除
:::

:::: code-group
::: code-group-item git

``` bash
 $ git rm [-f] [--cached]
```

:::
::::

### 移动文件

:::: code-group
::: code-group-item git

``` bash
 $ git mv file_from file_to
```

:::
::::

::: details git mv
运行`git mv`相当于运行了下面三条命令

``` txt
$ mv README.MD README
$ git rm README.MD
$ git add README
```

:::
