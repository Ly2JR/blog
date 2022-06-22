# [Azure Key Vault Support](https://docs.aspnetzero.com/en/aspnet-core-angular/latest/Features-Angular-Azure-Key-Vault)

ASP.NET Core提供许多拆箱即用的配置。它们中的一个就是Azure Key Vault配置提供。 **Azure Key Vault** 是一个云服务，它为密码提供一个安全存储。你能安全存储 **密钥** ,密码，凭证和其他秘密。关于Azure Key Vault的更多信息，请参考<https://docs.microsoft.com/en-us/aspnet/core/security/key-vault-configuration>。

ASP.NET Zero提供内置集成的Azure Key Valult。有关Azure Key Vault的两种模式，它们是`Certificate`和`Managed`模式。通过填写你的应用里的`appsettings.json`中显示的配置，你能很容易的为Asp.Net Zero配置Azure Key Valut。其他环境像Production或者Staging，使用正确的配置文件(appsettings.Production.json或appsettings.Staging.json)。

```json
 "Configuration": {
    "AzureKeyVault": {
      "IsEnabled": "false",
      "KeyVaultName": "",
      "AzureADApplicationId": "",
      "AzureADCertThumbprint": "",
      "ClientId": "",
      "ClientSecret": ""
    }
  }
```

- `IsEnabled`:启用或禁用使用Azure Key Vault配置。
- `KeyVaultName`:Key Vault名称。
- `AzureADApplicationId`:Azure AD应用ID。
- `AzureADCertThumbprint`:Azure AD证书指纹。
- `ClientId`:Azure Key Vault客户端ID。
- `ClientSecret`：Azure Key Valult客户端密码。

为了使用`Certificate`模式，`KeyVaultName`，`AzureADApplicationI`和`AzureADCertThumbprint`值必须写入。

为了使用`Managed`模式，`ClientId`和`ClientSecret`值必须写入。
