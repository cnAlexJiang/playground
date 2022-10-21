import { defineComponent,ref } from 'vue'
export default defineComponent({
    setup() {
        let a = ref('foo')
        let x = ref(0)
        let y = ref(0)
        let b= ref(true)
        let t = ref(0)
        let increase =  ()=>{
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
        const test1 = (e:any)=> {
            console.log('window',  e.path, e.target)
        }
        const test2 = (e:any)=> {
            console.log('document',  e.path, e.target)
        }
         window.addEventListener('mousemove',(e) =>{
            x.value = e.x;
            y.value = e.y;
          });

        window.addEventListener('keydown', test1)
        document.addEventListener('keydown', test2)
        return {
            x,y,
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
            <div>{this.x}-{this.y}</div>
            <button onClick={this.handlerA}>A</button>
            <button onClick={this.handlerB}>B</button>
            <button onClick={this.increase}>increase</button>
            <h3  tabindex="1">
             {this.a === 'a' && <div>
                <p>aaa</p>
                <p>aa</p>
                {this.a}
             </div>}
             {this.b && <h1>bbb</h1>}
            </h3>
            <div tabindex="-1">
                <div tabindex="-1">
                1111111
                </div>
                <div tabindex="-1">
                222222
                </div>
                <div >
                333333
                </div>
            </div>
        </div>
    }
})