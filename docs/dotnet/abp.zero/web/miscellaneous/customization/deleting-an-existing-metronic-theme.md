# [删除Metronic主题](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Deleting-A-Metronic-Theme-Angular)

Metronic主题当前有12种不同的主题并且AspNet Zero包含它们所有。但是，你可能只想使用特别的主题并删除一些其他的主题。这个文件描述了如何从AspNet Zero里删除一个主题选项。在本文档中，将会说明删除主题 **Theme2** 。你可以应用相同的步骤来删除其他主题选项。

## .NET部分

- 进入`*Application.Shared`项目。打开`AppConsts.cs`并删除Theme2字段。
- 进入`*.Web.Core`项目。
  - 删除`Theme2UiCustomizer.cs`
  - 打开`UiThemeCustomizerFacotry.cs`并在`GetUiCustomizerInternal`函数里删除Theme2代码部分。
- 进入`*.Core`项目。打开`AppSettingsProvier.cs`并删除`GetTheme2Settings`函数

## Angular部分

- 进入 **src->app->shared->layout** 文件夹
  - 进入 **themes** 文件夹。删除 **theme2** 文件夹
  - 进入 **theme-selection** 文件夹。打开`theme-selection-panel.component.html`并删除Theme2代码部分。
- 进入 **src->app->shared->helper** 文件夹。打开`DynamicResourceHelpers.ts`并删除Theme2代码部分。
- 进入 **src->app->admin** 文件夹
  - 打开`admin.module.ts`并删除Theme2代码部分。
  - 进入 **ui-customization** 文件夹
    - 删除`theme2-theme-ui-settings.component.ts`
    - 删除`theme2-theme-ui-settings.component.html`
    - 打开`ui-customization.componet.htm`并删除Theme2代码部分。
- 进入 **src->app** 。打开`app.module.ts`并删除Theme2代码部分。
- 进入 **src->app** 。打开`app.component.html`并删除Theme2代码部分。
- 打开`bundles.js`并删除Theme2绑定.

请注意,如果你正在删除已经发布应用的主题，不要忘记在AbpSettings表里删除名称等于" **App.UiManagement.Theme** "和名称以" **Theme2** "开头的记录。
