import  {effect, reactive} from '../src'
import {describe ,it, expect} from 'vitest'

 

describe('响应式测试',()=>{
  it('测试一下 reactive和effect', ()=>{
    let obj = reactive({name:'alex'})

    let dummy
    effect(()=>{
      dummy =obj.name
    })
    
    expect(dummy).toBe('alex')

    obj.name = 'haha'
    expect(dummy).toBe('haha')

    let temp = {a:1}
    obj.name = temp
    expect(dummy).toBe(temp)   
    
    obj.name = '22'
    expect(dummy).toBe('22')
  })
 

})