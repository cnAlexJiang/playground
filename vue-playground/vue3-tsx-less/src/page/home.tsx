
import { ref } from 'vue'
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'
export default defineComponent({
    setup() {
      return () => <div>
         home
         <ElButton  type="primary">123123</ElButton>
      </div>  
    }
})