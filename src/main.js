import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'

createApp(App).use(store).use(router).mixin(mixins).mount('#app')
const KAKAO_APP_KEY = process.env.VUE_APP_KAKAO_API;

window.Kakao.init(`${KAKAO_APP_KEY}`)
