import { Component, Prop } from 'vue-property-decorator';
import Base from './Base';
@Component({
  depends: ['api.TaskApi'],
})
export default class Hello extends Base {
  @Prop({ type: String, default: 'aaa' })
  public x: string = '123';
  created() {
    console.log('i am child');
  }
}
