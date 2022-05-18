# 部署

1. 安装[.NET 6捆绑包](https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-aspnetcore-6.0.5-windows-hosting-bundle-installer)
2. 打开`IIS`，选中`网站`右击`添加网站`。`网站名称`自定义填写,`物理路径`就是网站发布的位置,`绑定类型`选择`https`,端口默认`443`,`SSL证书`选择`IIS Express Development Certificate`即可。如下图:
3. 打开网站发布的位置,打开`appsettings.Production.json`更改`ConnectionStrings`数据库连接。
