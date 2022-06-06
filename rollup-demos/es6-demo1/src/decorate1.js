class Model1 {
    getData() {
      // 此处省略获取数据的逻辑
      return [{
        id: 1,
        name: 'Niko'
      }, {
        id: 2,
        name: 'Bellic'
      }]
    }
  }
  
  console.log(new Model1().getData())     // [ { id: 1, name: 'Niko'}, { id: 2, name: 'Bellic' } ]
  console.log(Model1.prototype.getData()) // [ { id: 1, name: 'Niko'}, { id: 2, name: 'Bellic' } ]
  console.log(Model1.prototype) // [ { id: 1, name: 'Niko'}, { id: 2, name: 'Bellic' } ]
  
 