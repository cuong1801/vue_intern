import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Modal from '@/components/modal'
// import UserDashboard from '@/components/UserDashboard.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/modal',
            name: 'modal',
            component: Modal
        },
    ]
})