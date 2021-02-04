import Vue from 'vue'

import 'normalize.css'

import VueRouter from 'vue-router'
import App from './App.vue'
import ActualPage from '@/components/pages/ActualPage.vue'
import ChoosingCoffeeBarPage from '@/components/pages/ChoosingCoffeeBarPage.vue'
import FAQPage from '@/components/pages/FAQPage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { name: 'ActualPage', path: '/', component: ActualPage },
        { name: 'ChoosingCoffeeBarPage', path: '/choosing-coffee-bar', component: ChoosingCoffeeBarPage },
        { name: 'FAQPage', path: '/FAQ', component: FAQPage }
        // { name: 'Error404Page', path: '/*', component: Error404Page }
    ],
    mode: 'history'
    // linkActiveClass: 'link-my-active'
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
