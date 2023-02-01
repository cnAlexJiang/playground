##  node http 模块 理解

### http和tcp服务器的关系
http服务器是继承自tcp服务器， http协议是应用层协议 是基于TCP的 对请求和响应进行了包装，req是可读流，res是可写流
req, res都是从socket来的，先监听socket的data事件，
然后等事件发生的时候，进行解析 解析出请求头，在创建请求对象，再根据请求对象创建响应对象

## 参考
 - [] https://juejin.cn/post/6844903573709389837#heading-4