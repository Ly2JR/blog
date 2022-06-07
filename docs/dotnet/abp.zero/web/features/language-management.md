# [语言管理](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Language-Management)

语言管理页面被用来管理(添加/编辑/删除) **应用语言** 和 更改 **本地文本** :

![language-list-core-3](/images/aspnetzero/language-list-core-3.png)

我们能创建一个新语言，编辑/删除一个存在的语言并且 **设置一种默认语言**. 注意：租户不能创建/编辑/删除默认语言,但是主机用户可以。

当我们为任意语言点击 **更改文本**，我们被重定向到一个新的视图来编辑语言文本：

![language-change-text-modal-core-3](/images/aspnetzero/language-change-text-modal-core-3.png)

我们能选择任意语言做为 **基础** (参考)并且变更 **目标** 语言的文本。基础语言只是帮助翻译进度。由于它们可能有不同的[本地资源来源](https://aspnetboilerplate.com/Pages/Documents/Localization#DocLocalizationSources)，我们选择要翻译的来源。当我们点击编辑图标，我们能看见选择文本编辑模式：

![language-change-text-modal-core-1](/images/aspnetzero/language-change-text-modal-core-1.png)

**主机** 用户(如果允许)能编辑语言和本地文本。这些语言将会默认地成为多租户应用的所有租户的语言。**租户**继承语言和本地文本并能 **覆盖** 本地文本。

更多信息参考[语言管理](https://aspnetboilerplate.com/Pages/Documents/Zero/Language-Management)和[本地化](https://aspnetboilerplate.com/Pages/Documents/Localization)文档。
