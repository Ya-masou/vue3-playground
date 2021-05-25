import * as Vue from "vue"
import Sample from "./components/Sample"

const app = Vue.createApp({
  components: { Sample },
  template: "<Sample />",
})

app.mount("#app")
