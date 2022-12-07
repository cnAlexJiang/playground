import { defineComponent } from 'vue'
import Counter from './components/Counter'
import './global.less'
export default defineComponent({
    setup() {

      const myButton = (props:any)=>{

        console.log(1111 ,props)
        return  <button>myButton</button>
         
      }

      return () => <div>
        <div>hello world</div>
        {myButton({a:123})}
        <br />
        <br />
        <div class="test-less"></div>
        <br />
        <Counter />
      </div>  
    }
})