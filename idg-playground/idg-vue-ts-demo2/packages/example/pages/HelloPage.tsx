/*
  example模块是示例代码，请勿直接在上面开发，可以使用yarn run generate pkgname命令来生成package，详见README
*/
import { Vue, Component } from 'vue-property-decorator';
import {Button,Modal} from '@idg/iview'
import svg from './clipboard.svg'
@Component({
  depends: ['component.Base'],
})
export default class Test extends Vue {
  public isShow = true;
  public renderModal(){
    return    <Modal
    v-model={this.isShow}
    title="授权提醒"
    on-on-ok={()=>{}}
    on-on-cancel={()=>{}}>
    <p>请允许零壤低代码平台获取您的剪切板权限，否则您将无法使用剪切、复制等操作。</p>
    <div>
      <img src={svg} alt="" />
    </div>
    </Modal>
  }
  public render() {
    return (
      <div>
        {this.renderModal()}
        <Button>123121</Button>
      </div>
    );
  }
}
