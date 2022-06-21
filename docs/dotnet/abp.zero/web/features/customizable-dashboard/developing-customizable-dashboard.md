# [开发定制仪表板](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Developing-Angular-Customizable-Dashboard)

你可以为定制化仪表板创建新的部件和部件过滤器。

让我们一步步的创建新部件和部件过滤器。

前言:定制化仪表板配置存储在两个地方。

- 包括权限，多租户端等定义。这些应该被控制，服务位于`*.Core->DashboardCustomization->Definitions->DashboardConfiguration.cs`。因此应用层能够处理权限和其他东西。
- 视图端定义像组件位于angular项目。
- UI应用从服务端获取关于仪表板和使用他们的视图信息的数据来显示它。

## 创建新的部件过滤器

我们的部件过滤器名称将会叫做`FilterHelloWorld`。它将有一个输入和一个按钮并且当输入变更时将会触发一个事件。

### 步骤1. 创建过滤视图

- 打开angular项目
- 转到 **scr\app\shared\common\customizable-dashboard\filters** 并创建一个新组件。

```bash
> ng generate component filter-hello-world
```

- 变更组件项如下所示。

filter-hello-world-component.html

```html
<div class="form-group">
    <div class="input-group">
        <input type="text" class="form-control" #inputFilterHello placeholder="{{'SearchWithThreeDot' | localize}}">
        <div class="input-group-append">
            <button class="btn btn-primary" (click)="publishName(inputFilterHello.value)" type="button">Go!</button>
        </div>
    </div>
</div>
```

filter-hello-world-component.ts

```ts
import { Component, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-filter-hello-world',
  templateUrl: './filter-hello-world.component.html',
  styleUrls: ['./filter-hello-world.component.css']
})
export class FilterHelloWorldComponent extends AppComponentBase {

  constructor(injector: Injector) {
    super(injector)
  }

  publishName(name: string): void {
    abp.event.trigger('app.dashboardFilters.helloFilter.onNameChange', name);
  }
}
```

### 步骤2. 定义部件过滤器

#### 定义部件过滤器视图

部件/部件过滤器的视图常量位于`src\app\shared\common\customizable-dashboard.DashboardCustomizationConsts.ts`。打开`*DashboardCustomizationConsts.ts`为hello world filter创建新的id。(这个id也用于视图页面，因此当选择这个值时需要格外小心。它不应该以数字或特殊字符开头等等)。

```ts
export class DashboardCustomizationConst {
  ...
    static filters = {
        filterDateRangePicker: "Filters_DateRangePicker",
        filterHelloWorld: "Filters_HelloWorld"//add new id
    };
 ...
}
```

转到`dashboard-view-configuration.service.ts`。添加你的新部件过滤器的视图定义.

```ts
export class DashboardViewConfigurationService {
    ...
    let filterHelloWorld = new WidgetFilterViewDefinition(
      DashboardCustomizationConst.filters.filterHelloWorld,
      FilterHelloWorldComponent//the component of filter
    );
    
    this.widgetFilterDefinitions.push(filterHelloWorld);
    ...
}

```

#### 部件过滤器服务端定义

打开服务端项目。

打开`*.Core.Shared->[YourAppName]DashboardCustomizationConsts.cs`并在这里定义相同的id。

```cs
public class [YourAppName]DashboardCustomizationConsts
{
    ...
    public class Filters
    {
      ...
         public const string HelloWorldFilter = "Filters_HelloWorld";
      ...
    }
}
```

转到`*.Core->DashboardCustomization->Definitions->DashboardConfiguration.cs`并添加hello world filter定义。

```cs
public class DashboardConfiguration
{
    public DashboardConfiguration()
      {
        ...
        var helloWorldFilter = new WidgetFilterDefinition(
            AbpZeroTemplateDashboardCustomizationConsts.Filters.HelloWorldFilter, "FilterHelloWorld");//localized string key
        
        WidgetFilterDefinitions.Add(helloWorldFilter);
        ...
      }
}
```

现在你的过滤器对所有部件是可用的。你可用在任意部件定义里使用它并且它会自动加载到页面上。

### 创建新部件

我们的部件名叫`WidgetHelloWorld`

#### 步骤1.创建一个API

- 创建一个部件需要的API。在这个场景，我们将会创建一个名叫`GetHelloWorldData`终端到`TenantDashboardAppService.cs`里。

```cs
public class GetHelloWorldInput
{
    public string Name { get; set; }
}

public class GetHelloWorldOutput
{
    public string OutPutName { get; set; }
}

public interface ITenantDashboardAppService : IApplicationService
{
  ...
  GetHelloWorldOutput GetHelloWorldData(GetHelloWorldInput input);
  ...
}
public class TenantDashboardAppService ...
{
    ...
    [AbpAuthorize(AppPermissions.HelloWorldPermission)]//check permission
    public GetHelloWorldOutput GetHelloWorldData(GetHelloWorldInput input)
    {
        return new GetHelloWorldOutput()
        {
             OutPutName = "Hello " + input.Name + " (" + Clock.Now.Millisecond + ")"
        };
    }
    ...
}
```

尽管Asp.Net Zero通过过滤权限和其他东西来加载部件。这里我们依然不得不检测权限。

- 在你创建API之后，运行`*Web.Host`项目然后转到angular项目的nswag文件夹。打开任意终端并运行reshresh.bat

#### 步骤2.创建部件视图

- 打开angular项目。
- 转到 **src\app\shared\common\customizable-dashboard\widgets** 并传教一个新组件。

```bash
> ng generate component widget-hello-world
```

- 更改组件项如下所示:

widget-hello-world-components.html

```html
<div class="kt-portlet kt-portlet--height-fluid">
    <div class="kt-portlet__head">
        <div class="kt-portlet__head-label">
            <h3 class="kt-portlet__head-title">
                Hello World
            </h3>
        </div>
    </div>
    <div class="kt-portlet__body">
        Hello World Works! <br/>
        Response: {{helloResponse}}
    </div>
</div>
```

widget-hello-world-components.ts

```ts
import { Component, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { TenantDashboardServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-widget-hello-world',
  templateUrl: './widget-hello-world.component.html',
  styleUrls: ['./widget-hello-world.component.css']
})
export class WidgetHelloWorldComponent extends WidgetComponentBase implements OnInit, OnDestroy {
  helloResponse: string;
  constructor(injector: Injector,
    private _tenantDashboardService: TenantDashboardServiceProxy) {
    super(injector);    
  }

  ngOnInit(): void {
    this.subHelloWorldFilter();
    this.runDelayed(()=>{
        this.getHelloWorld("First Attempt");  
    });
  }
  
  getHelloWorld = (name: string) => {
    this._tenantDashboardService
      .getHelloWorldData(name)
      .subscribe((data) => {
        this.helloResponse = data.outPutName;
      });
  }
  
  onNameChange = (name) => {
   this.runDelayed(()=>{
        this.getHelloWorld(name);  
    });
  }
  
  subHelloWorldFilter() {
    abp.event.on('app.dashboardFilters.helloFilter.onNameChange', this.onNameChange);
  }

  unSubHelloWorldFilter() {
    abp.event.off('app.dashboardFilters.helloFilter.onNameChange', this.onNameChange);
  }

  ngOnDestroy(): void {
    this.unSubHelloWorldFilter();
  }
}
```

### 步骤3.定义部件

#### 定义部件视图

部件/部件过滤器的视图常量位于`src\app\shared\common\customizable-dashboard.DashboardCustomizationConsts.ts`。打开`*DashboardCustomizationConsts.ts`为hello world widget创建新的id。(这个id也用于视图页面，因此当选择这个值时需要格外小心。它不应该以数字或特殊字符开头等等)。

```ts
export class DashboardCustomizationConst {
    static widgets = {
        tenant: {
            ...
            helloWorld: "Widgets_Tenant_HelloWorld"
        },
       ...
}
```

转到`src\app\shared\common\customizable-dashboard\dashboard-view-configuration.service.ts`。添加你的hello world widget的视图定义。

```ts
export class DashboardViewConfigurationService {
    ...
    //add your tenant side widgets here
        
    let helloWorld = new WidgetViewDefinition(
      DashboardCustomizationConst.widgets.tenant.helloWorld,
      WidgetHelloWorldComponent,
    )
    this.WidgetViewDefinitions.push(helloWorld);  
    ...
}
```

### 部件服务端定义

打开服务端项目。

打开 `*.Core.Shared->[YourAppName]DashboardCustomizationConsts.cs`并也在这里定义相同的id。

```cs
public class [YourAppName]DashboardCustomizationConsts
{
    
    public class Widgets
    {
        public class Tenant
        {
            public const string HelloWorld = "Widgets_Tenant_HelloWorld";

      ...
        }
    }
}
```

转到`*.Core->DashboardCustomization->Definitions->DashboardConfiguration.cs`并添加hello world widget的定义。

```cs
public class DashboardConfiguration
  {
    public DashboardConfiguration()
      {
        ...
    var helloWorld = new WidgetDefinition(
    id:AbpZeroTemplateDashboardCustomizationConsts.Widgets.Tenant.HelloWorld,
    name:"WidgetRecentTenants",//localized string key
    side: MultiTenancySides.Tenant,
    usedWidgetFilters: new List<string>() { helloWorldFilter.Id },// you can use any filter you need
    permissions: tenantWidgetsDefaultPermission);
        
    helloWorld.Permissions.Add(AppPermissions.HelloWorldPermission);
        ...
        
        ...
    var defaultTenantDashboard = new DashboardDefinition(
    AbpZeroTemplateDashboardCustomizationConsts.DashboardNames.DefaultTenantDashboard,
    new List<string>()
    {
        generalStats.Id, dailySales.Id, profitShare.Id, memberActivity.Id, regionalStats.Id, topStats.Id, salesSummary.Id, helloWorld.Id //add your widget to dashboard
    });
        ...
    }
}
```

由于我们创建的组件是用ng命令生成的，它会自动的添加到`app-common.module.ts`声明下。定制化仪表板动态加载组件，这是为什么我们也需要添加我们的组件到entryCompoent。

转到 **app-common-module.ts** 并添加`FilterHelloWorldComponent`和`WidgetHelloWorldComponent`

```ts
@NgModule({
   ...     
    entryComponents: [
       ...
        FilterHelloWorldComponent,//add filter
        WidgetHelloWorldComponent//add widget
    ]
})
export class AppCommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppCommonModule,
            providers: [
                AppAuthService,
                AppRouteGuard
            ]
        };
    }
}
```

之后你将能够使用你的新部件了。

## 用法

由于我们创建租户端的部件，打开租户仪表板。

选择页面上你要用的hello widget。

添加hello widget到页面上如文中描述：[Customizable Dashboard Usage](customizable-dashboard-feature.md)。

之后，你将会看到你的部件位于页面上如期望的那样工作。

![customizable-dashboard-widget-hello-world](/imagesa/aspnetzero/customizable-dashboard-widget-hello-world.png)

由于hello world widget需要hello world filter(我们在DashboardConfiguration定义它)hello world filter将会加载到页面。为了使用它。点击 **Edit Mode** 按钮旁边的filter按钮。它将会打开过滤模态。

你可以在下方找到，你将会能看见你的部件需要的过滤器。改变输入并点击 **GO** 。Hello World Widget 将会根据你的过滤器而改变。

![customizable-dashboard-filter-hello-world-2](/images/aspnetzero/customizable-dashboard-filter-hello-world-2.png)

## 改变默认的仪表板视图

AspNet Zero在仪表板里使用[angular-gridster2](https://tiberiuzuld.github.io/angular-gridster2/)网格系统并在[app settings](https://aspnetboilerplate.com/Pages/Documents/Setting-Management)里存储需要的视图数据。为了改变仪表板的默认视图你应该改变相关部分的设置位于`AppSettingsProvider`。为了改变默认仪表板视图你应该打开仪表板并通过这个[文档](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Customizable-Dashboard)设计仪表板。打开浏览器的开发者控制台。在页面上点击保存按钮并将以下请求命名为`SavePage`。

![customizable-dashboard-angular-savePage](/images/aspnetzero/customizable-dashboard-angular-savePage.png)

打开请求的payload并从这里获取数据

![customizable-dashboard-angular-savepage-request-payload](/images/aspnetzero/customizable-dashboard-angular-savepage-request-payload.png)

然后转到`AppSettingProvider`的`GetDefaultAngularDashboardViews`方法并用你从请求的payload得到的数据更改它。
