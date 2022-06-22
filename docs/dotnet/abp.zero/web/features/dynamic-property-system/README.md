# [动态属性系统](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Feature-Dynamic-Entity-Parameters-Angular)

**动态属性系统** 是一个系统，允许你在不改变任何代码的情况下对运行中的实体对象添加和管理新的属性。用这个系统，你可以在实体对象上定义动态属性并很容易的在这些对象上执行操作。例如，它可以用在城市、县、公园、状态码等等。

查看ApsNet Boilerplate端的[动态属性系统](https://aspnetboilerplate.com/Pages/Documents/Dynamic-Property-System)

## 定义

- 首先，[这里](https://aspnetboilerplate.com/Pages/Documents/Dynamic-Parameter-System#dynamic-property-definition)有所有你需要定义输入的类型和你想要使用的实体动态属性描述。
- 然后转到<http://localhost:4200/app/admin/dynamic-property>
- 分配动态属性到你的实体

![adding-dynamic-properties-to-entity](/images/aspnetzero/adding-dynamic-properties-to-entity.gif)

- 之后你将能够为你的实体项使用动态属性。

你可以使用`DynamicEntityPropertyManagerComponent`来管理实体的动态属性。

\*.html

```html
<!--...-->
<li
    *ngIf="
        dynamicEntityPropertyManager.canShow(
            'MyCompanyName.AbpZeroTemplate.Authorization.Users.User'
        )
    "
    role="menuitem"
>
    <a
        href="javascript:;"
        class="dropdown-item"
        (click)="showDynamicProperties(record)"
    >
        {{ 'DynamicProperties' | localize }}
    </a>
</li>
<!--...-->
<dynamic-entity-property-manager #dynamicEntityPropertyManager></dynamic-entity-property-manager>
```

\*.ts

```ts
import { DynamicEntityPropertyManagerComponent } from '@app/shared/common/dynamic-entity-property-manager/dynamic-entity-property-manager.component';
@Component({
    templateUrl: './users.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./users.component.less'],
    animations: [appModuleAnimation()],
})
export class UsersComponent extends AppComponentBase implements AfterViewInit {
    @ViewChild('dynamicEntityPropertyManager', { static: true }) dynamicEntityPropertyManager: DynamicEntityPropertyManagerComponent;

    showDynamicProperties(user: UserListDto): void {
        this.dynamicEntityPropertyManager
            .getModal()
            .show('MyCompanyName.AbpZeroTemplate.Authorization.Users.User', user.id.toString());
    }
    //...
}
```

![managing-dynamic-property-of-entity](/images/aspnetzero/managing-dynamic-property-of-entity.gif)

|属性|概述|
|:-|:-|
|ParameterName*|动态参数的唯一名称|
|Input Type*|动态参数的输入名称类型|
|Permission|管理有关参数的任何内容所需的权限|
