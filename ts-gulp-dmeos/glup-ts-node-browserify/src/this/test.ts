class TestThis{
  constructor(){
    this.a = 0
    const change = function(){
      this.a++
      this.test()
    }.bind(this)
    setTimeout(change,500)
    return this
  }
  test(){
    console.log(this)
    debugger
    return new Promise((resolve)=>{
      console.log(this)
      debugger
      const timer = setInterval(()=>{
        debugger
        if(this.a>0){
          console.log('this.a changed',this.a)
          clearInterval(timer)
        }
      })Ç
    })
  }
  change(){
    this.a++
  }
}
window.testThis = new TestThis()