# Github

[下载](https://git-scm.com/downloads)

[[toc]]

- 概要

``` shell
$> git [--version] [--help] [-C <path>] [-c <name>=<value>]
  [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
  [-p|--paginate|-P|--no-pager] [--no-replace-objects] [--bare]
  [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
  [--super-prefix=<path>] [--config-env=<name>=<envvar>]
  <command> [<args>]
```

## Git基础

### 获取Git仓库

将本地未进行版本控制的文件进行版本控制

- 概要

``` shell
$> git init [-q | --quiet] [--bare] [--template=<template_directory>]
  [--separate-git-dir <git dir>] [--object-format=<format>]
  [-b <branch-name> | --initial-branch=<branch-name>]
  [--shared[=<permissions>]] [directory]
```

- 克隆远程仓库

::: tip
$> git clone --help 查看详细说明
:::

- 概要

``` shell
$> git clone [--template=<template_directory>]
    [-l] [-s] [--no-hardlinks] [-q] [-n] [--bare] [--mirror]
    [-o <name>] [-b <name>] [-u <upload-pack>] [--reference <repository>]
    [--dissociate] [--separate-git-dir <git dir>]
    [--depth <depth>] [--[no-]single-branch] [--no-tags]
    [--recurse-submodules[=<pathspec>]] [--[no-]shallow-submodules]
    [--[no-]remote-submodules] [--jobs <n>] [--sparse] [--[no-]reject-shallow]
    [--filter=<filter>] [--] <repository>
    [<directory>]
```

### 记录每次更新到仓库

#### 查看文件状态

::: tip
$> git add --help 查看详细说明
:::

- 概要

``` shell
$> git status [<options>...][--][<pathspec>...]
```

- 可选项

`-s`:可选，简化内容

A 新添加到缓存取的文件

M 修改的文件

?? 新添加未跟踪的文件

#### 跟踪新文件

命令理解:精确地将内容添加到下一次提交中

git add 命令使用文件或目录的路径作为参数;

::: tip
$> git add --help 查看详细说明
:::

- 概要

``` shell
$> git add [--verbose | -v] [--dry-run | -n] [--force | -f] [--interactive | -i] [--patch | -p]
    [--edit | -e] [--[no-]all | --[no-]ignore-removal | [--update | -u]]
    [--intent-to-add | -N] [--refresh] [--ignore-errors] [--ignore-missing] [--renormalize]
    [--chmod=(+|-)x] [--pathspec-from-file=<file> [--pathspec-file-nul]]
    [--] [<pathspec>…​]
```

#### 忽略文件

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

#### 查看已暂存和未暂存的修改

git diff 本身只显示尚未暂存的改动,而不是自上次提交以来所做的所有改动

::: warning
$> git diff --help 查看详细说明
:::

- 概要

``` shell
$> git diff [<options>] [<commit>] [--] [<path>…​]
$> git diff [<options>] --cached [--merge-base] [<commit>] [--] [<path>…​]
$> git diff [<options>] [--merge-base] <commit> [<commit>…​] <commit> [--] [<path>…​]
$> git diff [<options>] <commit>…​<commit> [--] [<path>…​]
$> git diff [<options>] <blob> <blob>
$> git diff [<options>] --no-index [--] <path> <path>
```

#### 提交更新

::: tip
$> git commit --help 查看详细说明
:::

- 概要

``` shell
$> git commit [-a | --interactive | --patch] [-s] [-v] [-u<mode>] [--amend]
    [--dry-run] [(-c | -C | --squash) <commit> | --fixup [(amend|reword):]<commit>)]
    [-F <file> | -m <msg>] [--reset-author] [--allow-empty]
    [--allow-empty-message] [--no-verify] [-e] [--author=<author>]
    [--date=<date>] [--cleanup=<mode>] [--[no-]status]
    [-i | -o] [--pathspec-from-file=<file> [--pathspec-file-nul]]
    [(--trailer <token>[(=|:)<value>])…​] [-S[<keyid>]]
    [--] [<pathspec>…​]
```

- 可选项

`-a`:可选，将所有已经跟踪过的文件暂存起来，从而跳过`git add`步骤

`-m`:可选，将提交信息与命令放置同一行

#### 移除文件

::: tip
$> git rm --help 查看详细说明
:::

- 概要

``` shell
$> git rm [-f | --force] [-n] [-r] [--cached] [--ignore-unmatch]
    [--quiet] [--pathspec-from-file=<file> [--pathspec-file-nul]]
    [--] [<pathspec>…​]
```

- 可选项

`-f`:可选，即 force 的首字母,强制删除

`--cached`:可选，从暂存区移除

#### 移动文件

::: tip
$> git mv --help 查看详细说明
:::

``` shell
$> git mv <options>…​ <args>…​
```

::: details git mv
运行`git mv`相当于运行了下面三条命令

``` shell
$> mv README.MD README
$> git rm README.MD
$> git add README
```

:::

### 查看提交历史

::: tip
$> git log --help 查看详细说明
:::

- 概要

``` shell
$> git log [<options>] [<revision range>] [[--] <path>…​]
```

- 可选项

`-patch` 或 `-p` 显示每次提交所引入的差异(按**补丁**的格式输出)

`-number`：number为数字，限制显示的日志条码数量

### 撤销操作

有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。
此时，可以运行带有`--ament`选项的提交命令来重新提交：

``` shell
$> git commit --amend
```

这个命令会将暂存区中的文件提交。如果自上次提交以来你还未做任何修改
(例如，在上次提交后马上执行了次命令),那么快照会保持不变，而你所修改的只是提交信息。

例如，你提交后发现忘记了暂存某些需要的修改，可以像下面这样操作：

``` shell
$> git commit -m 'initial commit'
$> git add forgotten_file
$> git commit --ament
```

最终你只会有一个提交--第二次提交将代替第一次提交的结果

#### 取消暂存的文件

::: tip
$> git reset --help 查看详细说明
:::

例如，你已经修改了两个文件并且想要将它们作为两次独立的修改提交，
但是却意外地输入`git add *`暂存了他们两个。如果只取消暂存两个中的一个呢？
`git status`命令提示了您：在“Changes to be committed”文字正下方，提示
使用`git reset HEAD <file>...`来取消暂存。

- 概要

``` shell
$> git reset [-q] [<tree-ish>] [--] <pathspec>…​
$> git reset [-q] [--pathspec-from-file=<file> [--pathspec-file-nul]] [<tree-ish>]
$> git reset (--patch | -p) [<tree-ish>] [--] [<pathspec>…​]
$> git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]
    DEPRECATED: git reset [-q] [--stdin [-z]] [<tree-ish>]
```

#### 撤销对文件的修改

::: tip
$> git checkout --help 查看详细说明
:::

如果你并不想保留对文件的修改怎么办？你该如何方便地撤销修改--将它还原成
上次提交时的样子(或者刚克隆完的样子，或者刚把它放入工作目录时的样子)？
幸运的是，`git status`也告诉了你应该如何做。

::: warning
请务必记得`git checkout --<file>`是一个危险的命令。你对那个文件在本地的
任何修改都会消失----Git会用最近提交的版本覆盖掉它。除非你确实清楚不想要对
那个文件的本地修改了，否则请不要使用这个命令。
:::

- 概要

``` shell
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```

- 概要

``` shell
$> git checkout [-q] [-f] [-m] [<branch>]
$> git checkout [-q] [-f] [-m] --detach [<branch>]
$> git checkout [-q] [-f] [-m] [--detach] <commit>
$> git checkout [-q] [-f] [-m] [[-b|-B|--orphan] <new_branch>] [<start_point>]
$> git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [<tree-ish>] [--] <pathspec>…​
$> git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [<tree-ish>] --pathspec-from-file=<file> [--pathspec-file-nul]
$> git checkout (-p|--patch) [<tree-ish>] [--] [<pathspec>…​]
```

如果你仍然想保留对那个文件做出的修改，但是现在仍然需要撤销，我们将会在`Git 分支`介绍
保持进度与分支，这通常是更好的做法。

记住，在Git中任何`已提交`的东西几乎总是可以恢复的。设置那些被删除的分支中的提交或使用
`--ament`选项覆盖的提交也可以恢复。然而，任何你未提交的东西丢失后很可能再也找不到了。

### 远程仓库的使用

::: tip
远程仓库可以在你的本地主机上
你完全可以在一个“远程”仓库上工作，而实际上它在你本地的主机上，
词语“远程”未必表示仓库在网络或者互联网上的其他未知，而只是表示它在别处。
在这样的远程仓库上工作，仍然需要和其它远程仓库上一样的标准推送、拉取和抓取操作。
:::

#### 查看远程仓库

如果想查看你已经配置的远程仓库服务器，可以运行`git remote`命令。
它会列出你指定的每一个远程服务器的简写。如果你已经克隆了自己的仓库，
那么至少应该能看到origin----这是Git给你克隆的仓库服务器的默认名字。

- 概要

``` shell
$> git remote [-v | --verbose]
$> git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=(fetch|push)] <name> <url>
$> git remote rename <old> <new>
$> git remote remove <name>
$> git remote set-head <name> (-a | --auto | -d | --delete | <branch>)
$> git remote set-branches [--add] <name> <branch>…​
$> git remote get-url [--push] [--all] <name>
$> git remote set-url [--push] <name> <newurl> [<oldurl>]
$> git remote set-url --add [--push] <name> <newurl>
$> git remote set-url --delete [--push] <name> <url>
$> git remote [-v | --verbose] show [-n] <name>…​
$> git remote prune [-n | --dry-run] <name>…​
$> git remote [-v | --verbose] update [-p | --prune] [(<group> | <remote>)…​]
```

#### 添加远程仓库

之前已经提到并展示了`git clone`命令是如何自行添加远程仓库的，
不过这里将告诉你如何自己来添加它。运行`git remote add <shortname> <url>`
添加一个新的远程Git仓库，同事指定一个方便的使用简写。

例如：

``` shell
$ git remote
origin
$ git remote add blog https://github.com/TgT982474256/blog.git
$ git remote -v
```

现在你可以在命令行中使用字符串`blog`来代替整个URL。例如，如果你想
拉取Blog的仓库中有但你没有的信息，可以运行`git fetch blog`

#### 从远程仓库中抓取与拉取

如刚才所见，从远程仓库中获取数据，可以执行:
`$ git fetch <remote>`
这个命令会访问远程仓库，从中拉取所有你还没有的数据。
执行完成后，你将会用友那个远程仓库中所有的分支的引用，
可以随时合并或查看。

如果你使用`clone`命令克隆了一个仓库，命令会自动将其添加
未远程仓库并默认以“origin”为简写。所以`git fetch origin`
会抓取克隆(或上一次抓取)后新推送的所有工作。必须注意`git fetch`
命令只会将数据下载到你的本地仓库----它并不会自动合并或修改你当前的工作。
当准备好时你必须手动将其合并入你的工作。

如果你的当前分支设置了跟踪远程分支，那么可以用`git pull`命令来自动抓取后
合并该远程分支到当前分支。这或许是个更加简单舒服的工作流程。默认情况下，
`git clone`命令会自动设置本地`main`分支跟踪克隆的远程仓库的`main`分支
(或其他名字的默认分支)。运行`git pull`通常会从最初克隆的服务器上抓取数据
并自动尝试合并到当前所在的分支。

- 概要

``` shell
$> git fetch [<options>] [<repository> [<refspec>…​]]
$> git fetch [<options>] <group>
$> git fetch --multiple [<options>] [(<repository> | <group>)…​]
$> git fetch --all [<options>]
```

``` shell
$> git pull [<options>] [<repository> [<refspec>…​]]
```

#### 推送到远程仓库

::: tip

:::

当你想分享你的项目时，必须将其推送到上游。这个命令很简单:
`git push <remote><branch>`。当你想要将`main`分支推送到
`origin`服务器时(再次说明，克隆时通常会自动设置好那两个名字),
那么运行这个命令就可以将你所做的备份到服务器:

``` shell
$> git pull orgin main
```

只有当你有所克隆服务器的写入权限，并且之前没有人推送过时，这条命令才能生效。
当你和其他人在同一时间克隆，他们先推送到上游然后你再推送到上游，你的推送就会
毫无疑问地被拒绝。你必须先抓取他们的工作并将其合并进你的工作后才能推送。

- 概要

``` shell
$> git push [--all | --mirror | --tags] [--follow-tags] [--atomic] [-n | --dry-run] [--receive-pack=<git-receive-pack>]
  [--repo=<repository>] [-f | --force] [-d | --delete] [--prune] [-v | --verbose]
  [-u | --set-upstream] [-o <string> | --push-option=<string>]
  [--[no-]signed|--signed=(true|false|if-asked)]
  [--force-with-lease[=<refname>[:<expect>]] [--force-if-includes]]
  [--no-verify] [<repository> [<refspec>…​]]
```

#### 查看某个远程仓库

如果想要查看某一个远程仓库的更多信息，可以使用`git remote show <remote>`命令。
如果想以一个特定的缩写运行这个名，例如`origin`，会得到下面类似的信息：

``` shell
git remote show origin
* remote origin
  Fetch URL: https://github.com/TgT982474256/blog.git
  Push  URL: https://github.com/TgT982474256/blog.git
  HEAD branch: main
  Remote branch:
    main tracked
  Local branch configured for 'git pull':
    main merges with remote main
  Local ref configured for 'git push':
    main pushes to main (up to date)
```

它同样会列出远程仓库的URL与跟踪分支的信息。这些信息非常有用，它告诉你正处于
`main`分支，并且如果运行`git pull`，就会抓取所有的远程引用,然后将远程
`main`分支合并到本地`main`分支。它也会列出拉取到的所有远程引用。

这个命令列出了当你在特定的分支上执行`git push`会自动地推送到哪一个远程分支。
它也同样地列出了哪些远程分支不在你的本地，哪些远程分支已经从服务器上移除了，
还有当你执行`git pull`时哪些本地分支可以与它跟踪的远程分支自动合并。

#### 远程仓库的重命名与移除

你可以运行`git remote rename`来修改一个远程仓库的简写名。例如，想要将`blog`
重命名为`Tg-Blog`,可以用`git remote rename`这样做:

``` shell
$> git remote rename blog Tg-Blog
$> git remote
origin
Tg-Blog
```

值得注意的是这同样也会修改你所有远程跟踪的分支名称。哪些过去引用`Blog\main`
的现在会引用`Tg-Blog\main`

如果因为一些原因想要移除一个远程仓库----你已经从服务器上搬走了或不再想使用
某一个特定的镜像了，又或者某一个贡献值不在贡献了----可以使用`git remote remove`
或`git remote rm`:

``` shell
$> git remote remove Tg-Blog
$> git remote
origin
```

一旦你使用这种方式删除了一个远程仓库，那么所有和这个远程仓库相关的远程跟踪分支
以及配置信息也会一起被删除。

## 参考

- 查看全局配置

```bash
$git> git config --global --list
```

- 查看用户名

```bash
$git> git config user.name
```

- 查看用户邮箱

```bash
$git> git config user.email
```

- 修改用户名

```bash
$git> git config --global user.name 'your_username'
```

- 修改用户邮箱

```bash
$git> git config --global user.email 'your_email'
```

- 修改默认分支

```bash
$git> git config --global init.defaultBranch main
```

-- 删除某个配置

```bash
$git> git config --global --unset http.version
```
