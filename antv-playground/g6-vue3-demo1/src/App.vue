<template>
  <!-- <div id="container" style="width: 800px;height: 600px;"></div> -->
  <div>
    <div>
      <svg width="200" height="200">
        <path
          :d="getPath2(0, 0, 100, 0)"
          stroke="#000000"
          fill="none"
          style="stroke-width: 2px"
        ></path>
      </svg>

      <svg width="200" height="200">
        <path
          :d="getPath2(0, 0, 100, 100)"
          stroke="#000000"
          fill="none"
          style="stroke-width: 2px"
        ></path>
      </svg>

      <svg width="200" height="200">
        <path
          :d="getPath2(0, 0, 0, 100)"
          stroke="#000000"
          fill="none"
          style="stroke-width: 2px"
        ></path>
      </svg>
      <svg width="200" height="200">
        <path
          :d="getPath2(100, 0, 0, 100)"
          stroke="#000000"
          fill="none"
          style="stroke-width: 2px"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { init } from './example/test3'
onMounted(() => {
  // init()
})
function getPath21(x1, y1, x2, y2) {
  var path = 'M' + x1 + ' ' + y1 + ' '
  var cx1 = x1
  var cy1 = (y1 + y2) / 2
  var cx2 = x2
  var cy2 = (y1 + y2) / 2
  var c = 'C' + cx1 + ' ' + cy1 + ',' + cx2 + ' ' + cy2 + ','
  path = path + c + x2 + ' ' + y2
  console.log(path)
  return path
}

function getPath2(x1, y1, x2, y2) {
  console.log(x1 + ' ' + y1 + ' ' + x2 + ' ' + y2 + ' ')
  var path = 'M' + x1 + ' ' + y1 + ' '
  var cx1 = x1 < x2 ? x1 + (x2 - x1) / 2 : x1 + 50
  var cy1 = y1
  var cx2 = x1 < x2 ? x2 - (x2 - x1) / 2 : x2 - 50
  var cy2 = y2

  var c = 'C' + cx1 + ' ' + cy1 + ',' + cx2 + ' ' + cy2 + ','
  path = path + c + x2 + ' ' + y2
  console.log(path)
  return path
}
</script>
<style scoped></style>
