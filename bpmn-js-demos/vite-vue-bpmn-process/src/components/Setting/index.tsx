import { defineComponent, PropType, ref, toRaw, watch } from 'vue'
import {
  NForm,
  NFormItem,
  NInput,
  NRadioGroup,
  NRadio,
  NSwitch,
  NDrawer,
  NDrawerContent,
  NColorPicker,
  NInputNumber
} from 'naive-ui'
import { EditorSettings } from 'types/editor/settings'
import { defaultSettings } from '@/config'
import editor from '@/store/editor'
import LucideIcon from '@/components/common/LucideIcon.vue'

const props = {
  settings: {
    type: Object as PropType<EditorSettings>,
    default: () => defaultSettings
  }
}

const Setting = defineComponent({
  name: 'Setting',
  props: props,
  emits: ['update:settings'],
  setup(props) {
    const modelVisible = ref(false)
    const editorStore = editor()

    const themeColorKeys = [
      'defaultFillColor',
      'defaultStartEventColor',
      'defaultEndEventColor',
      'defaultIntermediateEventColor',
      'defaultIntermediateThrowEventColor',
      'defaultIntermediateCatchEventColor',
      'defaultTaskColor',
      'defaultLabelColor',
      'defaultGatewayColor',
      'defaultSequenceColor'
    ]
    const themeOpacityKeys = [
      'defaultStartEventOpacity',
      'defaultEndEventOpacity',
      'defaultIntermediateThrowEventOpacity',
      'defaultIntermediateCatchEventOpacity',
      'defaultTaskOpacity',
      'defaultLabelOpacity',
      'defaultGatewayOpacity',
      'defaultSequenceOpacity'
    ]
    const editorSettings = ref(props.settings)
    const changeModelVisible = (event) => {
      event.stopPropagation()
      modelVisible.value = !modelVisible.value
    }

    watch(
      () => editorSettings.value,
      () => {
        if (editorSettings.value.penalMode !== 'custom') {
          editorSettings.value.processEngine = 'camunda'
        }
        editorSettings.value && editorStore.updateConfiguration(toRaw(editorSettings.value))
      },
      { deep: true }
    )

    return () => (
      <div class="setting" onClick={(e) => e.stopPropagation()}>
        <div class="toggle-button" onClick={changeModelVisible}>
          <LucideIcon name="Settings" size={40} color="#ffffff"></LucideIcon>
        </div>

        <NDrawer v-model={[modelVisible.value, 'show']} width={560}>
          <NDrawerContent
            title="????????????"
            closable={true}
            v-slots={{
              footer: () => (
                <div class="tips-message">
                  <div class="grip-tips">
                    <p>??????</p>
                    <p>1. ??????????????????????????? activiti ?????? flowable ??????</p>
                    <p>2. ??????????????????????????????????????????????????????????????????</p>
                    <p>3. ????????????MySql???????????????????????????????????????</p>
                    <p>4. ??????????????????????????????????????????????????????????????????</p>
                  </div>
                  <p style="font-weight: bold">????????????</p>
                  <div class="sponsorship-image wechat"></div>
                  <div class="sponsorship-image alipay"></div>
                </div>
              )
            }}
          >
            <NForm labelWidth={120} labelAlign="right" size="small" labelPlacement="left">
              <NFormItem label="???????????????">
                <NInput
                  v-model={[editorSettings.value.processName, 'value']}
                  clearable={true}
                ></NInput>
              </NFormItem>
              <NFormItem label="??????ID???">
                <NInput
                  v-model={[editorSettings.value.processId, 'value']}
                  clearable={true}
                ></NInput>
              </NFormItem>
              <NFormItem label="????????????">
                <NSwitch v-model={[editorSettings.value.toolbar, 'value']}></NSwitch>
              </NFormItem>
              <NFormItem label="????????????">
                <NSwitch v-model={[editorSettings.value.miniMap, 'value']}></NSwitch>
              </NFormItem>
              <NFormItem label="???????????????">
                <NSwitch v-model={[editorSettings.value.useLint, 'value']}></NSwitch>
              </NFormItem>
              <NFormItem label="?????????????????????">
                <NSwitch v-model={[editorSettings.value.templateChooser, 'value']}></NSwitch>
              </NFormItem>
              <NFormItem label="???????????????" feedback="???'????????????'??????????????????">
                <NSwitch v-model={[editorSettings.value.contextmenu, 'value']}></NSwitch>
              </NFormItem>
              <NFormItem label="????????????????????????">
                <NSwitch v-model={[editorSettings.value.customContextmenu, 'value']}></NSwitch>
              </NFormItem>
              <NFormItem label="???????????????">
                <NRadioGroup v-model={[editorSettings.value.processEngine, 'value']}>
                  <NRadio value="camunda">Camunda</NRadio>
                  <NRadio value="activiti">Activiti</NRadio>
                  <NRadio value="flowable">Flowable</NRadio>
                </NRadioGroup>
              </NFormItem>
              <NFormItem label="???????????????">
                <NRadioGroup v-model={[editorSettings.value.bg, 'value']}>
                  <NRadio value="grid-image">???????????????</NRadio>
                  <NRadio value="grid">????????????</NRadio>
                  <NRadio value="image">??????</NRadio>
                  <NRadio value="none">???</NRadio>
                </NRadioGroup>
              </NFormItem>
              <NFormItem label="Penal?????????">
                <NRadioGroup v-model={[editorSettings.value.penalMode, 'value']}>
                  <NRadio value="default">??????</NRadio>
                  <NRadio value="rewrite" disabled={true}>
                    ?????????
                  </NRadio>
                  <NRadio value="custom">?????????</NRadio>
                </NRadioGroup>
              </NFormItem>
              <NFormItem label="Palette?????????">
                <NRadioGroup v-model={[editorSettings.value.paletteMode, 'value']}>
                  <NRadio value="default">??????</NRadio>
                  <NRadio value="rewrite">?????????</NRadio>
                  <NRadio value="enhancement">?????????</NRadio>
                  <NRadio value="custom">?????????</NRadio>
                </NRadioGroup>
              </NFormItem>
              <NFormItem label="ContextPad?????????">
                <NRadioGroup v-model={[editorSettings.value.contextPadMode, 'value']}>
                  <NRadio value="default">??????</NRadio>
                  <NRadio value="rewrite">?????????</NRadio>
                  <NRadio value="enhancement">?????????</NRadio>
                </NRadioGroup>
              </NFormItem>
              <NFormItem label="Renderer?????????">
                <NRadioGroup v-model={[editorSettings.value.rendererMode, 'value']}>
                  <NRadio value="default">??????</NRadio>
                  <NRadio value="rewrite">?????????</NRadio>
                  <NRadio value="enhancement">?????????</NRadio>
                </NRadioGroup>
              </NFormItem>
              <NFormItem label="?????????????????????" feedback="AutoPlace, Rules ???">
                <NSwitch v-model={[editorSettings.value.otherModule, 'value']}></NSwitch>
              </NFormItem>
              {editorSettings.value.rendererMode === 'rewrite' && (
                <NFormItem
                  label="??????????????????"
                  class="theme-list"
                  labelAlign="left"
                  labelPlacement="top"
                >
                  {themeColorKeys.map((key) => {
                    return (
                      <div class="theme-item">
                        <div class="theme-item_label">{key}???</div>
                        <NColorPicker
                          modes={['hex']}
                          showAlpha={false}
                          v-model={[editorSettings.value.customTheme[key], 'value']}
                        ></NColorPicker>
                      </div>
                    )
                  })}
                  {themeOpacityKeys.map((key) => {
                    return (
                      <div class="theme-item">
                        <div class="theme-item_label">{key}???</div>
                        <NInputNumber
                          v-model={[editorSettings.value.customTheme[key], 'value']}
                        ></NInputNumber>
                      </div>
                    )
                  })}
                </NFormItem>
              )}
            </NForm>
          </NDrawerContent>
        </NDrawer>
      </div>
    )
  }
})

export default Setting
