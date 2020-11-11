import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/book-list'
        },
        {
            path: '/book-list',
            component: () => import('./views/BookList.vue')
        },
        {
            path: '/book-detail',
            component: () => import('./views/BookDetail.vue')
        }
    ]
})

export default router