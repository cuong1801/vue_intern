import Vue from 'vue'
import Router from 'vue-router'
import Employee from '@/components/Employee'

// import Modal from '@/components/modal'
// import UserDashboard from '@/components/UserDashboard.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Employee',
            component: Employee
        },
        // {
        //     path: '/modal',
        //     name: 'modal',
        //     component: Modal
        // },
    ]
})