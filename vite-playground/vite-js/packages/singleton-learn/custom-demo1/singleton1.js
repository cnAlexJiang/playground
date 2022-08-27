
class SingletonLoginLayer {
  static getInstance() {
    // 判断是否已经new过1个实例
    if (!SingletonLoginLayer.instance) {
      // 若这个唯一的实例不存在，那么先创建它
      SingletonLoginLayer.instance = new SingletonLoginLayer()
      console.log("首次创建")
    }
    // 如果这个唯一的实例已经存在，则直接返回
    console.log("返回单例")

    return SingletonLoginLayer.instance
  }
  constructor() {
  	this.div = document.createElement( 'div' );
    this.div.innerHTML = '我是登录浮窗';
    document.body.appendChild( this.div );
  }
}
document.getElementById( 'loginBtn' ).onclick = function(){
  var loginLayer = SingletonLoginLayer.getInstance().div;
};