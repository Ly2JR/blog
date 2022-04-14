# 参考

::: tip
[官方传送门](https://git-scm.com/book/zh/v2)
:::

- 查看全局配置

```git
$git> git config --global --list
```

- 查看用户名

``` git
$git> git config user.name
```

- 查看用户邮箱

``` git
$git> git config user.email
```

- 修改用户名

``` git
$git> git config --global user.name 'your_username'
```

- 修改用户邮箱

``` git
$git> git config --global user.email 'your_email'
```

- 修改默认分支

```git
$git> git config --global init.defaultBranch main
```

-- 删除某个配置

```git
$git> git config --global --unset http.version
```