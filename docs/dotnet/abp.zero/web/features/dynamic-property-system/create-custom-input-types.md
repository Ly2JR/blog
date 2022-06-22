# [新家自定义输入类型](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Feature-Dynamic-Entity-Parameters-Custom-Input-Types-Angular)

在本文档中我们将会一步一步的创建一个自定义输入类型。我们的输入类型是一个多选择的下拉框输入类型。

1. 转到`*.Core`并创建一个文件夹名叫`CustomerInputTypes`。
2. 在新建的文件夹下创建一个名称叫`MultiSelectComboboxInputType`的类。

```cs
/// <summary>
/// Multi Select Combobox value UI type.
/// </summary>
[Serializable]
[InputType("MULTISELECTCOMBOBOX")]
public class MultiSelectComboboxInputType : InputTypeBase
{ 
}
```

3. 转到`AppDynamicEntityParameterDefinitionProvider`并添加新的输入类型。

```cs
 public class AppDynamicEntityParameterDefinitionProvider : DynamicEntityParameterDefinitionProvider
{
    public override void SetDynamicEntityParameters(IDynamicEntityParameterDefinitionContext context)
    {
        ...
        context.Manager.AddAllowedInputType<MultiSelectComboboxInputType>();
        ...
    }
}
```

4. 转到`angular\src\app\shared\common\input-types`文件夹。
5. 创建名叫`MultiSelectComboboxInputTypeComponent`组件，如下所示。

```bash
ng g component multi-select-combobox-input-type
```

multi-select-combobox-input-type.component.html

```html
import { Component, OnInit, Injector } from '@angular/core';
import { InputTypeComponentBase } from '../input-type-component-base';

@Component({
  templateUrl: './multi-select-combobox-input-type.component.html'
})
export class MultiSelectComboboxInputTypeComponent extends InputTypeComponentBase implements OnInit {
  filteredValues: string[];

  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit() {
    this.filteredValues = this.allValues;
  }

  getSelectedValues(): string[] {
    debugger;
    if (!this.selectedValues) {
      return [];
    }
    return this.selectedValues;
  }

  filter(event) {
    this.filteredValues = this.allValues
      .filter(item =>
        item.toLowerCase().includes(event.query.toLowerCase())
      );
  }
}
```

multi-select-combobox-input-type.component.html

```html
<p-autoComplete [(ngModel)]="selectedValues" [suggestions]="filteredValues" (completeMethod)="filter($event)" [minLength]="1" [multiple]="true" inputStyleClass="form-control" styleClass="w-100">
</p-autoComplete>
```

你必须扩展`InputTypeComponentBase`。由于你扩展了`InputTypeComponentBase`你的组件将会有 **selectedValues** (初始化存储选择的值), **allValues** (组件的所有值,如果你的组件需要初始化值)。

6. 然后转到`angular\src\app\shared\common\input-types\input-type-configuration.service.ts`并添加你的输入类型。

```ts
export class InputTypeConfigurationService {
  ...
  private initialize(): void {  
  ...

    let multiselectComboBoxInputType = new InputTypeConfigurationDefinition(
      'MULTISELECTCOMBOBOX',
      MultiSelectComboboxInputTypeComponent,
      true//is that input type need values to work. For example dropdown need initial values to select.
    );

    this.InputTypeConfigurationDefinitions.push(multiselectComboBoxInputType);
  }
  ...
}
```

7. 转到`angular\src\app\shared\common\app-common.module.ts`并添加你的组件到`entryComponents`:

```ts
@NgModule({
    ...
    declarations: [
        ...
        MultipleSelectComboboxInputTypeComponent
    ],
    ...,    
    entryComponents: [
        ...
        MultipleSelectComboboxInputTypeComponent
    ]
})
```

全部完成。你的自定义输入类型已经准备好在动态参数中使用。创建新的动态参数使用自定义输入类型，添加它到实体。然后你可以到管理页面上来使用它。

![custom-input-type-multi-select-combobox-angular](/images/aspnetzero/custom-input-type-multi-select-combobox-angular.png)
