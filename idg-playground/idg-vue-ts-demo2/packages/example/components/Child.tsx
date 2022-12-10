import { Component, Prop,Vue } from 'vue-property-decorator';
import {Button,Modal} from '@idg/iview'
import Base from './Base';
@Component({
  depends: ['api.TaskApi'],
})
export default class Child extends Vue {

  public form : any= {age:1,name:2}
  public add () {
    const res  ={...this.form, age:this.form.age + 1, newkek: {a: 'hahah'}}
    this.form  = JSON.parse(JSON.stringify(res))
    console.log(111,this)
    console.log(222,this.form)
  }
  mounted(){
    console.log('mounted', this)
  }
  public render() {
    console.log('render' ,this)

    const myDiv= ()=>{
      console.log(111)
    return  <div>myDiv</div>
    }
    return (
      <div class='flex justify-center items-center'>
        <p class='mr-6'>test-!</p>
        <myDiv/>
        {myDiv()}
        <div>
        <Button onClick={()=>{this.add()}}>123121</Button>
        <div>
          age =  {this.form.age}
        </div>
        </div>
      </div>
    );
  }
}
