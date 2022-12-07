import { ref } from 'vue'

 

import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
      const count = ref(0)
      const add = ()=>{
        console.log(1111 )
        count.value = count.value +1
      }
      return () => <div>
        <div>{count.value}</div> 
        <button onClick={add}>add</button>
      </div>  
    }
})