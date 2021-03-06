import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Stocks from './components/Stocks'
import Market from './components/Market'
Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/portfolio',
            component: Portfolio
        },
        {
            path: '/stocks',
            component: Stocks
        },
        {
            path: '/Market',
            component: Market
        }
    ]
})