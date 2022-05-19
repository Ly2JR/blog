# 安装

[Oracle Database 19c](https://www.oracle.com/database/technologies/oracle-database-software-downloads.html)

:::: tip
Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=127.0.0.1) (PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=ORCL)));User Id=C##user_name; Password=user_password;
::::

## 创建用户

1. 使用管理员打开`cmd`;
2. 输入`sqlplus / as sysdba`命令;
3. 使用`CREATE USER c##user_name IDENTIFIED BY user_password;`创建用户,注意用户需要添加`C##`前缀;
4. 使用`grant connect,resource,unlimited tablespace to c##user_name container=all;`添加用户权限;
5. 使用`grant select on table_name to C##user_name;`添加用户查询权限;
6. 使用`grant create any view to C##user_name`添加用户新建视图权限;
