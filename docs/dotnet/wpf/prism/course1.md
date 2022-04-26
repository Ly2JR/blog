# 反射加载自定义DLL

1. WPF类库项目`UserDll`,新建`Modules`、`Views`、`ViewModels`三个文件夹

2. Modules新建类`ModuleA.cs`继承`IModule`,Views新建用户控件`ViewsA.xaml`,ViewModels新建类`ViewAViewModel.cs`继承`BindableBase`, `INavigationAware`

3. `ModuleA`类`ResiterTypes`方法注册

    ```cs
    public void RegisterTypes(IContainerRegistry containerRegistry)
    {
        //001对应的点击菜单的ID号
        containerRegistry.RegisterForNavigation<ViewsA>("001");
    }
    ```

4. 将UserDll项目编译，生成文件`UserDll.dll`

5. 主页面`MainWindowViewModel`构造函数里加上`IModuleManager`、`IRegionManager`、`IContainerProvider`

    ```cs
    private readonly IModuleManager _moduleManager;
    private readonly IRegionManager _regionManager;
    private readonly IContainerProvider _container;
    public MainWindowViewModel(IContainerProvider container,IRegionManager regionManager,IModuleManager moduleManager){
        _container = container;
        _regionManager = regionManager;
        _moduleManager = moduleManager;
    }
    ```

6. 当点击主页面`MainWindow`上的菜单按钮时(通过菜单ID与注册的ID关联)，加载`UserDll.dll`文件,通过`TabControl`控件`prism:RegionManager.RegionName="TabRegion"`加载显示

 ```cs
    private void LoadModule(string id){
        var hasModule=_moduleManager.ModuleExists(id);
        if(!hasModule){
            LoadComponent(id)
        }else{
            ShowView(id);
        }
    }

    //DLL和类名可以通过数据库配置,加载DLL的文件位置指定，比如统一放在runtime文件夹下
    private void LoadComponent(string id){
        var asm = Assembly.LoadFrom(AppDomain.CurrentDomain.BaseDirectory + "UserDll.dll");
        var type = asm.GetType("UserDll.ModuleA");  
        if (type == null)return;
        var moduleCatalog=_container.Resolve<IModuleCatalog>();
        moduleCatalog.AddModule(new ModuleInfo(){
            ModuleName=id;
            ModuleType=type.AssemblyQualifiedName,
            InitializationMode = InitializationMode.WhenAvailable,
        });
        ShowView(id);
    }

    private void ShowView(string id){
        _moduleManager.LoadModule(id);
        var otherParams=new NavigationParameters{...};
        _regionManager.RequestNavigate("TabRegion"，menuId,NavigationComplete, otherParams);
    }
    ```
