import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'

const routes = [
    { route: '/', component: () => import("./components/HelloWorld.vue") },
]
const router = createRouter({ history: createWebHistory(), routes })

createApp(App)
    .use(router)
    .mount('#app')
