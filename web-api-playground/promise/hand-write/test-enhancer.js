//index.js
const MyPromise = require('./enhancer');

let n = new MyPromise((resolve, reject) => {

    setTimeout(() => {
        console.log('lonjin');
        resolve(200)
    }, 1000)
})

n.then((val) => {
    console.log('------', val)
}, (erro) => {
    console.log(erro)
})
    //lonjin
    //200