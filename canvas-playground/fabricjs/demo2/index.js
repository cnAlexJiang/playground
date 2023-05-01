// 原生 canvas api
// 有一个id是c的canvas元素
// var canvasEl = document.getElementById('c')
// // 获取2d位图模型
// var ctx = canvasEl.getContext('2d')
// // 设置填充颜色
// ctx.fillStyle = 'red'
// // 创建一个坐标100，190，尺寸是20，20的矩形
// ctx.fillRect(100, 100, 20, 20)



// 使用fabric实现
// 用原生canvas元素创建一个fabric实例
var canvas = new fabric.Canvas('c')

// 创建一个矩形对象
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20,
})

// 将矩形添加到canvas画布上
canvas.add(rect)
