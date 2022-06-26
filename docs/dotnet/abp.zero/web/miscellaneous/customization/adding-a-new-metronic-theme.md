# [添加新的Metronic主题](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Adding-New-Metronic-Theme-Angular)

Metronic主题当前有12种不同的主题并且AspNet Zero包含它们所有。但是，你可能希望将团队设计的新主题选项添加到这些选项种。本文档一步一步地描述添加一个新主题选项到AspNet Zero。请注意，添加的主题必须称为一个Metronic主题或者至少必须兼容Metronic。

文档的其余部分将会使用 **ThemeX** 做为新主题的名称。

## .Net部分

- 进入`*Application.Shared`项目，打开`AppConsts.cs`并添加新文件命名为ThemeX。
- 进入`*.Web.Core`项目。
  - 创建新UICustomizer命名为`ThexeXUiCustomizer.cs`。复制`ThemeDefaultUiCustomizer.cs`到`ThemeXUiCustomizer.cs`并更改必要的设置。(它有设置方法，如果你的新ThemeX主题也有设置就保留它们否则删除掉)
  - 打开`UiThemeCustomerFactory.cs`并在`GetUiCustomizerinternal`函数添加ThemeX代码部分。

    ```cs
    ...
    if (theme.Equals(AppConsts.ThemeX, StringComparison.InvariantCultureIgnoreCase))
    {
        return _serviceProvider.GetService<ThemeXUiCustomizer>();
    }
    ...
    ```

- 进入`*.Core`项目，打开`AppSettingProvider.cs`
  - 添加一个名叫`GetThemeXSettings`的方法，返回ThemeX设置。
  - 在`GetSettingDefinitions`函数里调用它。

    ```cs
    ... 
    return GetHostSettings().Union(GetTenantSettings()).Union(GetSharedSettings())
                    // theme settings
                    .Union(GetDefaultThemeSettings())
                    .Union(GetTheme2Settings())
                    .Union(GetTheme3Settings())
                    .Union(GetTheme4Settings())
                    .Union(GetTheme5Settings())
                    .Union(GetTheme6Settings())
                    .Union(GetTheme7Settings())
                    .Union(GetTheme8Settings())
                    .Union(GetTheme9Settings())
                    .Union(GetTheme10Settings())
                    .Union(GetTheme11Settings())
                    .Union(GetTheme12Settings())
                    .Union(GetThemeXSettings());//add ThemeXSettings
    ...
    ```

## Angular部分

- 进入 **src->app->shared->layout** 文件夹
  - 进入 **themes** 文件夹
    - 创建一个名叫`themeX`的文件夹并进入 **themeX** 文件夹
      - 创建名叫`themeX-brand`和`themeX-layout`的组件
      - 从默认的主题组件拷贝它们的表体部分(从`default-brand`和`default-layout`)并变更需要改变的部分。
      - 创建`ThemeXthemeAssetCountributor`并从`DefaultThemeAssetContributor`拷贝它的内容。这个类返回条件资产所有为你的新主题themeX做需要的改动。
  - 进入 **theme-selection** 文件夹。打开`theme-selection-panel.component.html`并添加themeX到列表里。
- 进入 **src->shared->helpers** 并打开 `ThemeAssetContributorFactory.ts`。添加`ThemeXThemeAssetContributor`到`getCurrent`函数

```cs
...
if (theme === 'themeX') {
    return new ThemeXThemeAssetContributor().getAssetUrls();
}
...
```

- 进入 **src->app->admin** 文件夹
  - 进入 **ui-customization** 文件夹
    - 创建`themex-theme-ui-settings`组件。从`default-theme-ui-settings`组件复制它的内容。挺合适你选择UI设置的地方，如果你的新主题ThemeX也有相同设置就保留它们否则删除它们并添加需要的部分。
    - 打开`ui-customization.component.html`并添加你的组件。

    ```html
    <tab *ngFor="let themeSetting of themeSettings" [active]="themeSetting.theme == currentThemeName">
    <!--...-->
        <themex-theme-ui-settings *ngIf="themeSetting.theme == 'themeX'" [settings]="themeSetting"></themex-theme-ui-settings>
    </tab>
    ```

  - 打开`ui-customization.module.ts`并添加`ThemeXThemeUiSettingsComponent`到声明。
- 进入 **src->app** 。打开`app.module.ts`并添加`ThemeXLayoutComponent`和`ThemeXBrandComponent`到声明。
- 进入 **src->app** 。打开`app.component.html`并添加主题ThemeX的代码部分。

```html
<div [ngClass]="{'subscription-bar-visible': subscriptionStatusBarVisible()}">
    <!--...-->
    <themex-layout *ngIf="theme=='themeX'"></themex-layout>
</div>
```

- 如果你的主题使用动态绑定，打开`bundle.js`并添加你的绑定。

ASP.NET Zero在Angular版本([bs-datepicker.css](https://github.com/aspnetzero/aspnet-zero-core/blob/dev/angular/src/assets/ngx-bootstrap/bs-datepicker.css))上有为datepicker自定义的CSS文件。如果默认的设置不兼容你的主题，你可以改变相关的CSS文件。
