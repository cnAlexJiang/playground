## 开发工作流
- https://juejin.cn/post/7098609682519949325#heading-8

### 初始化项目  
```
mkdir husky-test
pnpm init
```

### commitizen 和 cz-conventional-changelog
如果需要在项目中使用 commitizen 生成符合 AngularJS 规范的提交说明，还需要安装 cz-conventional-changelog 适配器。

```
pnpm install -D commitizen cz-conventional-changelog 

// package.json 中添加
 
"scripts": {
  "commit": "cz"
}
// package.json 中添加
"config": {
  "commitizen": {
    "path": "cz-conventional-changelog"
  }
}

//  接下来就可以使用 $ pnpm commit 来代替 $ git commit 进行代码提交了，看到下面的效果就表示已经安装成功了。
```

### commitlint && husky

前面我们提到，通过 commitizen && cz-conventional-changelog 可以规范我们的 commit message，但是同时也存在一个问题，如果用户不通过 pnpm commit 来提交代码，而是直接通过 git commit 命令来提交代码，就能绕开 commit message 检查，这是我们不希望看到的。

```
  pnpm install -D @commitlint/cli @commitlint/config-conventional husky
```
在工程根目录下增加 commitlint.config.js 配置文件，指定 commitlint 的校验配置文件：
```
// commitlint.config.js 
module.exports = { extends: ['@commitlint/config-conventional'] };
```

husky 配置(husky的每个版本配置不一样，具体可以参考官方文档，当前的husky是v8.0.1)。

```
// 工程根目录下的 package.json 中增加一条 script:
"scripts": {
  "postinstall": "husky install"
}
```
