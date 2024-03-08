import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './style.css'
import store from './store.js'
import messages from '@intlify/unplugin-vue-i18n/messages'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'ar',
  fallbackLocale: 'fr',
  availableLocales: ['ar', 'fr', 'en'],
  messages: messages
})

const app = createApp(App)

app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
