# 问题解决清单

## 安装提示"等待数据库引擎恢复句柄失败"

1. 选择下载介质,选择Express Core仅SQL Server引擎。
2. 管理员运行`cmd`录入`fsutil fsinfo sectorinfo D:`确认`PhysicalBytesPerSectorForAtomicity`值是否`512`或`4096`。不是这两个值，请分盘格式化选择`4096`。
3. 安装时`DataBase Engine`账户选择`system`。
4. 下载SSMS即可。
