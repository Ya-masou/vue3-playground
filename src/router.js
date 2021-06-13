import { createRouter, createWebHashHistory } from "vue-router"
import Sample from "@/components/Sample"

const routes = [
  { path: "/sample", component: Sample },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
