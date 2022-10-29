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
            console.log('window',   e.target)
        }
        const test2 = (e:any)=> {
            e.stopPropagation()
            console.log('document',   e.target)
        }
         window.addEventListener('mousemove',(e) =>{
            x.value = e.x;
            y.value = e.y;
          });

        window.addEventListener('keydown', test1)
        document.addEventListener('keydown', test2)
        const test = (e:any)=> {
            console.log('document', e)
        }
        return {
            x,y,
            a,
            b,
            t,
            handlerA,
            handlerB,
            increase,
            test
        }
    },
    render(){
        return <div>

            <div   onMouseenter={this.test} style="width:200px;height: 200px; border: 1px solid red" >
                111
                <div style="width:100px;height: 100px; border: 1px solid blue">
                    2222
                </div>
            </div>
        </div>
    },
    render1() {
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
            <h1 tabindex="-1">
                000
                <h2 tabindex="-1">
                1111111
                </h2>
                <h3 tabindex="-1">
                222222
                </h3>
                <h4 >
                333333
                </h4>
            </h1>
        </div>
    }
})