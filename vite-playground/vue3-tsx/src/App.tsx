import { defineComponent,ref } from 'vue'
export default defineComponent({
    setup() {
        const a = ref('foo')
        const b= ref(true)
        const t = ref(0)
        const increase =  ()=>{
            t.value = t.value +1
        }
        const handlerA = ()=> {
            if(a.value === 'foo'){
                a.value = 'a'
            } else{
                a.value = 'foo'
            }
        }
        const handlerB = ()=> {
           b.value = !b.value
        }
        return {
            a,
            b,
            t,
            handlerA,
            handlerB,
            increase
        }
    },
    render() {
        return <div>
            <h2>{this.t}</h2>
            <button onClick={this.handlerA}>A</button>
            <button onClick={this.handlerB}>B</button>
            <button onClick={this.increase}>increase</button>
            <h3>
             {this.a === 'a' && <div>
                <p>aaa</p>
                <p>aa</p>
                {this.a}
             </div>}
             {this.b && <h1>bbb</h1>}
            </h3>
        </div>
    }
})