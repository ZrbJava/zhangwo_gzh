import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Signup from '@/components/Signup/Signup'
import me from '@/components/me/me'
import ActiveRule from '@/components/ActiveRule/Rule' //赞助商
import Index from '@/components/index/Index'
// import RaceArea from '@/components/index/raceArea/raceArea' //比赛区域
import Sponsor from '@/components/Sponsor/Sponsor' //赞助商
import playDetail from '@/components/index/newPlayer/playDetail/playDetail' //选手详情
import Voting from '@/components/index/raceArea/Voting'//投票中
import HistoryArea from '@/components/index/raceArea/HistoryArea/HistoryArea'//历史赛区
import HistoryHome from '@/components/index/raceArea/HistoryArea/Home/Home'//历史赛区home
import Enrolment from '@/components/index/raceArea/Enrolment'
import newPlayer from '@/components/index/newPlayer/newPlayer'
// import searchList from '@/components/searchList/searchList'

// index的子组件
var subpages = [
      {
      name: "Voting",
      path: "Voting",
      component: Voting
    },
      {
      name: "HistoryArea",
      path: "HistoryArea",
      component: HistoryArea,
    },
      {
      name: "Enrolment",
      path: "Enrolment",
      component: Enrolment
    },
      {
      name: "HistoryHome",
      path: "HistoryHome",
      component: HistoryHome
    },
      
     
];
Vue.use(Router)
export default new Router({
  // 注册子路由

  routes: [
    {
      path: '/',
      redirect: '/index'
    },{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [...subpages]
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/me',
      name: 'me',
      component: me,
    },
    {
      path: '/ActiveRule',
      name: 'ActiveRule',
      component: Signup,
    },
    {
      path: '/Sponsor',
      name: 'Sponsor',
      component: Sponsor,
    },
    {
      path: '/playDetail',
      name: 'playDetail',
      component: playDetail,
    },
    {
      path: '/searchList',
      name: 'searchList',
      component: newPlayer,
    },
     

  ]
})
