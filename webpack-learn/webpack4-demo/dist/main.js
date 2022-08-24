;(() => {
  var r = {
      85: (r) => {
        r.exports = 'zz'
      },
    },
    o = {}
  function e(t) {
    var s = o[t]
    if (void 0 !== s) return s.exports
    var n = (o[t] = { exports: {} })
    return r[t](n, n.exports, e), n.exports
  }
  ;(() => {
    let r = e(85)
    console.log(r)
  })()
})()
