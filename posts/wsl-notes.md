# 我的 WSL2 环境搭建踩坑记录

现象：Ubuntu 双击打开报错，磁盘附加失败，错误码 ERROR_PATH_NOT_FOUND
排查：① 发现报错路径 C:\Users\淇\... 的文件夹根本不存在 ② 真实磁盘文件 ext4.vhdx 在 C:\Users\Qi\... 下 ③ 注册表里 WSL 的 BasePath 记的还是旧路径
解决：把 BasePath 改成真实路径 → wsl --shutdown 重启 → Ubuntu 正常启动；顺手配了 .wslconfig 镜像网络，让代理直通
