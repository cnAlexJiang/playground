// 格式

// 例子
var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(11,2);
assert(expected == 3, '预期1+2等于3');
assert.ok(expected == 3, '预期1+2等于3');
assert.equal(expected, 3, '预期1+2等于3');