

class CreateLoginLayer {
  constructor() {
  	this.div = document.createElement( 'div' );
    this.div.innerHTML = '我是登录浮窗';
    document.body.appendChild( this.div );
  }
}

const proxySingletonCreateLoginLayer = (function() {
	let instance;
  return function() {
    if (!instance) {
      console.log("首次创建")
    	instance = new CreateLoginLayer();
    }
    console.log("返回单例")
  	return instance;
  }
})()



document.getElementById( 'loginBtn' ).onclick = function(){
  let createLoginLayer = new proxySingletonCreateLoginLayer();
  let loginLayer = createLoginLayer.div;
};

 