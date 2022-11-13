## 参考
  - 开箱体验Rust，Come on！！！
    https://juejin.cn/post/7065685983248777252


## 认识Cargo：
  在我们使用Rustup安装的时候默认就安装了Cargo，Cargo是用来构建和管理依赖包的一个工具，我们列举一下Cargo的常用命令。
  1 cargo new 创建项目并初始化git仓库
  2 cargo build编译项目（debug），增加--release发布构建
  3 cargo run编译项目（未编译或源码有修改）& 运行项目
  4 cargo check仅检查代码，确保可通过编译，比build速度快
  6 cargo publish发布自定义库

## 使用Cargo创建新项目：
- 通过使用    cargo new hello-rust
  来创建一个新的项目，下面是生成的目录结构；
  hello-rust
  |- Cargo.toml
  |- src
    |- main.rs


- 运行cargo run 
  可以在终端看到经过了编译执行到输出我们熟悉了Hello, world!。

## Rust示例程序：
- 学会如何导入依赖；
- 学会如何输出语句使用；
- 了解什么是可变变量；
- 了解什么是关联函数；
- 认识&取地址符；

## 安装和使用第三方依赖： crates.io +  cargo build 

依赖的查找我们上面有交代，可以通过crates.io搜索；
将需要安装的依赖按照依赖名 = version的格式配置到Cargo.toml文件中的[dependencies]下方；
更改配置文件后运行  cargo build  将执行安装，当然我们安装了VSCode插件就自动安装完成了并会自动更新Cargo.lock文件来锁定依赖的详细版本，切勿手动修改。