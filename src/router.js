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
            meta: {
                title: '豆瓣图书排行榜'
            },
            component: () => import('./views/BookList.vue')
        },
        {
            path: '/book-detail',
            name: 'book-detail',
            component: () => import('./views/BookDetail.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
})

export default router