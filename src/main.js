import Vue from 'vue'
import VueMeta from 'vue-meta'

import 'normalize.css'

import VueRouter from 'vue-router'
import App from './App.vue'
import ActualPage from '@/components/pages/ActualPage.vue'
import ChoosingCoffeeBarPage from '@/components/pages/ChoosingCoffeeBarPage.vue'
import FAQPage from '@/components/pages/FAQPage.vue'
import CoffeeBarPage from '@/components/pages/CoffeeBarPage.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMeta)

const router = new VueRouter({
    routes: [
        { name: 'ActualPage', path: '/', component: ActualPage },
        { name: 'ChoosingCoffeeBarPage', path: '/choosing-coffee-bar', component: ChoosingCoffeeBarPage },
        { name: 'FAQPage', path: '/FAQ', component: FAQPage },
        { name: 'CoffeeBarPage', path: '/coffeebar', component: CoffeeBarPage }
        // { name: 'Error404Page', path: '/*', component: Error404Page }
    ],
    mode: 'hash'
    // linkActiveClass: 'link-my-active'
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
