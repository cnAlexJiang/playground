# @idg/seed

## 参考文档1

- 框架文档 http://dp-5dd27d044d403.qcloud-prod.oneitfarm.com/specification/standard-idg.html
- 组件库文档 https://iview.qcloud-prod.oneitfarm.com/#/
- css库文档 https://tailwindcss.com/
- [更新日志](./CHANGELOG.md)
- [tslint](https://github.com/palantir/tslint)
- [mock](http://mockjs.com/examples.html)
- [样式规范](http://specification-web.qcloud-prod.oneitfarm.com/specification/code/css.html#%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8)

## 准备
### 1. 安装vscode
推荐版本typescript为3.8.3的版本

点击任一ts文件可以在状态栏看到typescript的[版本](https://code.visualstudio.com/Docs/languages/typescript#_using-newer-typescript-versions)信息

### 2. 安装vscode插件
- [tslint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin&ssr=false#overview)



## 开发
``` bash
// install
yarn

// start dev server
yarn serve
```

## 提交
``` bash
git add .
yarn commit
```

## 生成更新日志
<strong>只有master能够执行</strong>
``` bash
yarn changelog
```

## 打包
注意如果项目依赖了图片，视频等需要参考(yarn run ts命令)
```
cpx packages/**/*.less dist/es/packages
```
将依赖拷贝到dist/es/packages下面

## 如果想连线上解决跨域问题
``` bash
# mac
sudo  open -a "/Applications/Google Chrome.app" --args --disable-web-security  --user-data-dir=/Users/yourname/MyChromeDevUserData/
```
