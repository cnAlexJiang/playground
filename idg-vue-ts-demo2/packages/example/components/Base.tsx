import { Vue, Component, Prop } from 'vue-property-decorator';
import { Button } from '@idg/iview';
@Component({
  depends: ['api.TaskApi'],
})
export default class Hello extends Vue {
  @Prop({ type: String, default: 'aaa' })
  public x: string = '123';
  created() {
    console.log('i am parent');
  }
  public render() {
    return (
      <div class='flex justify-center items-center'>
        <p class='mr-6'>test-!</p>
        <div>
          <Button>{this.x}</Button>
        </div>
      </div>
    );
  }
}
