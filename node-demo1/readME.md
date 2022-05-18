# 解决node 内存爆栈问题

##  查看当前单个 node 进程内存占用上限

```
// 可以通过这条命令查看Node默认的内存限制大小
  node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'
```
##  修改单个node 任务 内存占用上限
  - 设置限制使用的内存为5 GB
  export NODE_OPTIONS="--max-old-space-size=5120"
  - 设置限制使用的内存为6 GB
  export NODE_OPTIONS="--max-old-space-size=6144"
  - 设置限制使用的内存为7 GB
  export NODE_OPTIONS="--max-old-space-size=7168"
  - 设置限制使用的内存为8 GB
  export NODE_OPTIONS="--max-old-space-size=8192"
  - 注意： 上面的export xxx命令只会生效一次，关闭了终端后就不再生效了。

## 持久化效果
```
  // 0 查看  当前环境node允许使用内存情况
  node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'
  // 1
  cd
  // 2
  vi .bash_profile 
  // 3 add 到 .bash_profile
  export NODE_OPTIONS="--max-old-space-size=5120"
  // 4
  source .bash_profile   
  //  重启terminal  查看效果
  node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'
```