var exec = require('child_process').exec;

var ls = exec('ls -l', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
  }
  console.log(' Process STChildDOUT: ' + stdout);
});


console.log(111, ls.stdout)