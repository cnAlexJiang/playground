var t = require('./test')

console.log(33 ,t)

try {
    process.nextTick(function () {
      throw new Error("error");
    });
  } catch (err) {
    //can not catch it
    console.log(err);
  }
  
  try {
    setTimeout(function(){
      throw new Error("error");
    },1)
  } catch (err) {
    //can not catch it
    console.log(err);
  }