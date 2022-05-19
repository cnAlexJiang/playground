<template>
  <div id="el-test" style="padding:12px">QQ 1846492969</div>
</template>

<script>
let observer
export default {
  created() {
    this.$nextTick(() => {
 // 选择将观察突变的节点
        let targetNode = document.getElementById('el-test');
        console.log(111, targetNode)
        // 观察者的选项(要观察哪些突变)
        let config = { attributes: true, childList: false, subtree: false, };
        // 当观察到突变时执行的回调函数
        let callback = function(mutationsList) {
            mutationsList.forEach(function(item,index){
                if (item.type == 'childList') {
                    console.log('有节点发生改变，当前节点的内容是：');
                    console.log(item.target.innerHTML);
                } else if (item.type == 'attributes') {
                    console.log('修改了'+item.attributeName+'属性');
                }
            });
        };

        // 创建一个链接到回调函数的观察者实例
        observer = new MutationObserver(callback);
        // 开始观察已配置突变的目标节点
        observer.observe(targetNode, config);
    })
 
  },
  destroyed() {
    // 停止观察
    observer.disconnect();
  }
}
</script>

<style>
#el-test{
            line-height: 100px;
            width: 200px;
            border: #e5e5e5 solid 1px;
            text-align: center;
        }

</style>