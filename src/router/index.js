import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Index from '@/components/index/Index'
import RaceArea from '@/components/index/raceArea/raceArea'

var raceArea = [{
    name: "raceArea",
    path: "raceArea",
    component: RaceArea
}, ];
Vue.use(Router)
export default new Router({
    // 注册子路由

    routes: [{
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [...raceArea]

        },

    ]
})