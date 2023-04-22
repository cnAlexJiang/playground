const net = require('net');
const fs = require('fs');

const server = net.createServer((c) => {
  let stream = fs.createWriteStream('test.txt');
  c.pipe(stream).on('finish', () => {
    console.log('Done');
  });
  c.on('error', (err) => {
    console.log(err);
  });
})

server.listen('4000', () => {
  console.log('服务器已启动');
});