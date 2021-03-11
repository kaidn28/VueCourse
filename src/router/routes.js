import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Add from '../components/Add'
import Show from '../components/show/Show'
import ListItems from '../components/ListItems'
Vue.use(VueRouter)
export const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/add',
            component: Add
        },
        {
            path: '/filter',
            component: Show
        },
        {
            path: '/listitems',
            component: ListItems
        }

    ]

})

    
    