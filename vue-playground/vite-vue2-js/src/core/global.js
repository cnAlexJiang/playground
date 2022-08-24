import Vue from 'vue';

class GuiGlobal {
  constructor(){
    this.state = Vue.observable({
      a: 1, 
      b:2
    })
  }
}

let ins 
if(window.parent !== window && window.parent.guiGlobal) {
  ins=window.parent.guiGlobal
} else {
 ins = new GuiGlobal()
}

window.guiGlobal = ins

export const  global = ins