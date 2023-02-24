import Vue from 'vue'
// import App from './App.vue'

// import iview from '@idg/iview'
// import '@idg/iview/dist/styles/custom.css'


// import {router} from './router' 

// Vue.config.productionTip = false
// Vue.use(iview)

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount('#app') 

Vue.config.ignoredElements = [/dwanes-\w*/];
 new Vue({
  el: "#app",
  data: {
    code: "1234",
    image: {
      src:
        "https://cdn.pixabay.com/photo/2020/04/07/15/07/vault-5013752_1280.png",
      alt: "Illustration of a vault door."
    },
    placeholder: "Enter Security Code"
  },
  methods: {
    digitsSent: function (event) {
      const entered = event.detail.digits;
      if (entered) {
        if (entered === this.code) {
          this.$refs.keypad.cancelAction();
          this.placeholder = "SUCCESS!!!";
          this.image = {
            src: "https://media.giphy.com/media/oobNzX5ICcRZC/source.gif",
            alt: "minion giving the thumbs up"
          };
        } else {
          this.$refs.keypad.cancelAction();
          this.placeholder = "Wrong Code. Try again.";
        }
      }
    }
  }
});