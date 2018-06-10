
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
import router from './router'
import qs from 'qs'
import 'normalize.css'
import YDUI from 'vue-ydui'; 
import 'vue-ydui/dist/ydui.px.css'; 
import api, { domain } from './js/api.js'
import axios from 'axios'
import "../static/css/global.css"
axios.defaults.baseURL = domain; 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true; //允许携带cookie
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
Vue.prototype.$qs = qs;
const querystring = require('querystring');
// # 移动端点击事件300ms延迟
// const FastClick = require('fastclick');
// document.addEventListener('DOMContentLoaded', function () {
//     FastClick.attach(document.body);
// }, false);
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
Vue.use(YDUI);
Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'

})