// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
import router from './router'
import qs from 'qs'
import 'normalize.css'
import YDUI from 'vue-ydui'; 
import 'vue-ydui/dist/ydui.px.css'; //使用px
import api, { domain } from './js/api.js' //导入api  {}这种导入方法是导入非默认的
import axios from 'axios'
import "../static/css/global.css"
axios.defaults.baseURL = domain; //配置默认域名
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true; //允许携带cookie
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
Vue.prototype.$qs = qs;
const querystring = require('querystring');
// # 移动端点击事件300ms延迟
const FastClick = require('fastclick');
document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
}, false);
Vue.use(YDUI);
// import { Datetime, Group } from "vux"  
// Vue.component(Datetime.name, Datetime);  
// Vue.component(Group.name, Group);  
Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    // render :h => h(App)
    components: { App },
    template: '<App/>'

})