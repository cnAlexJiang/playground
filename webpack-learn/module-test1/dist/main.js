;(() => {
  var o = {
      907: (o, r) => {
        console.log('add开始引入'),
          (o.exports.add = (o, r) => o + r),
          (r.PI = 3.14)
      },
    },
    r = {}
  function e(t) {
    var n = r[t]
    if (void 0 !== n) return n.exports
    var s = (r[t] = { exports: {} })
    return o[t](s, s.exports, e), s.exports
  }
  ;(() => {
    console.log('commonjs开始执行')
    const { add: o } = e(907)
    document.write('1+1=', o(1, 1))
  })()
})()
