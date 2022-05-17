/*
  example模块是示例代码，请勿直接在上面开发，可以使用yarn run generate pkgname命令来生成package，详见README
*/
import { Vue, Component } from 'vue-property-decorator';
@Component({
  depends: ['component.Base'],
})
export default class Test extends Vue {
  public render() {
    return (
      <div>
        <hello />
      </div>
    );
  }
}
