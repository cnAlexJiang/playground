const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    console.log('catch 3000');
    ctx.body = `hello, hiker! `;
    
});

app.listen(3000, () => {
    console.log('nodejs listening 3000.');
    console.log('start');
});