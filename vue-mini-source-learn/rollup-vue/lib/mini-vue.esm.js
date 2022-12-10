import { openBlock, createElementBlock } from 'vue';

// 123
  var script = {
    data() {}
  };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, "app"))
}

script.render = render;
script.__file = "App.vue";

export { script as default };
