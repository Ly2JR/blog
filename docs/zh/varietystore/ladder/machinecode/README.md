# 机器码

 [Stackoverflow](https://stackoverflow.com/questions/99880/generating-a-unique-machine-id)

- 注册表

    `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Cryptography`

- PowerShell

    `get-wmiobject Win32_ComputerSystemProduct |  select-Object -expandProperty UUID`

    - 代码

    :::: code-group
    ::: code-group-item Donet PowerShell

    ``` cs
    string GetUUID()
    {
        var getDiskUUID = "get-wmiobject Win32_ComputerSystemProduct  | Select-Object -ExpandProperty UUID";
        var oProcess = new Process();
        var oStartInfo = new ProcessStartInfo("powershell.exe", getDiskUUID);
        oStartInfo.UseShellExecute = false;
        oStartInfo.RedirectStandardInput = true;
        oStartInfo.RedirectStandardOutput = true;
        oStartInfo.CreateNoWindow = true;
        oProcess.StartInfo= oStartInfo;
        oProcess.Start();
        oProcess.WaitForExit();
        var uuid=oProcess.StandardOutput.ReadToEnd();
        return uuid.Trim();
    }
    ```
    :::

    ::: code-group-item VB PowerShell

    ``` vb
    Private Function GetUUID() As String
        Dim GetDiskUUID As String = "get-wmiobject Win32_ComputerSystemProduct  | Select-Object -ExpandProperty UUID"
        Dim X As String = ""
        Dim oProcess As New Process()
        Dim oStartInfo As New ProcessStartInfo("powershell.exe", GetDiskUUID)
        oStartInfo.UseShellExecute = False
        oStartInfo.RedirectStandardInput = True
        oStartInfo.RedirectStandardOutput = True
        oStartInfo.CreateNoWindow = True
        oProcess.StartInfo = oStartInfo
        oProcess.Start()
        oProcess.WaitForExit()
        X = oProcess.StandardOutput.ReadToEnd
        Return X.Trim()
    End Function
    ```
    :::
    ::::