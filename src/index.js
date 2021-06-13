import * as Vue from "vue"
import App from "./App"
import router from "@/router"

const app = Vue.createApp({
  components: { App },
  template: "<App />",
})

app.use(router)

app.mount("#app")
