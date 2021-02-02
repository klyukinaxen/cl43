import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MainPage from '@/components/pages/MainPage.vue'
import AboutPage from '@/components/pages/AboutPage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { name: 'MainPage', path: '/', component: MainPage },
        { name: 'AboutPage', path: '/about', component: AboutPage },
        // { name: 'Error404Page', path: '/*', component: Error404Page }
    ],
    mode: 'history',
    // linkActiveClass: 'link-my-active'
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

