<template>
    <div class="index">
        <div class="pf topBox">
          <!-- 搜索框 -->
            <!-- <yd-search  placeholder="搜索选手名称或编号"></yd-search> -->
            <form action="" class="form">
              <div class="frc searchBox ">
                
                <div class="pr" style="width:100%">
                  <!-- 左边的搜索logo -->
                  <img v-show="searchBlur" src="../../assets/index/search.png" alt="" class="fouce_search_icon pa">                  
                  <input type="text"  class=" search_inp" @focus="focus" @blur="blur" style="padding-left:30px" v-model="Searchvalue">
                  <div v-show="!searchBlur" class="pa placeholder" @click="Letfoucus">
                    <img src="../../assets/index/search.png" alt="" class="search_icon">搜索选手名称或编号
                  </div>
                  <!-- 中间定位位置 -->
                </div>
                <button  :class="{'searchBtn':true,'SearchActive':Searchvalue.length!=0}">搜索</button>
                <!-- :class=" -->
                <!-- :class="{'searchBtn' : true, 'SearchActive': true}" -->
              </div>
              
            </form>
          <!-- tab栏目 -->
          <div class="frc navTab" v-if="isHistoryHome">
            <!-- currentNav==0?'navActive':'' -->
            <div @click="NavtabToggle(0)"  :class="currentNav==0?'navActive':''">湖北赛区</div>
            <div @click="NavtabToggle(1)" :class="currentNav==1?'navActive':''">湖南赛区</div>
            <div @click="NavtabToggle(2)" :class="currentNav==2?'navActive':''">历史赛区</div>
          </div>
        </div>
          <component v-if="currentNav==0" is="Voting"></component>
          <component v-if="currentNav==1" is="Enrolment"></component>
          <component v-if="currentNav==2" is="HistoryArea"></component>
        <!-- 底部导航栏 -->
        <div class="pd_tabBar pf frc">
          <!-- <div class="left frc"> -->
                <div class="home fcc" @click="goIndex">
                  <img src="../../assets/tabbar/home.png" alt="home" class="tab_icon">
                  <span class="pt3 tab_text tabBarActive" >首页</span>            
                </div>  
                <div class="signup pr" @click="goSignup" v-show="!isSign">
                  <img src="../../assets/tabbar/sign.png" alt="signup" class="tab_sign pa">             
                  <span class="pt3 tab_text sign_text pa">报名</span>        
              </div>
                <div class="signup pr" @click="goMe" v-show="isSign">
                  <img  src="../../assets/tabbar/me.png" alt="我的" class="tab_sign pa">                         
                  <span class="pt3 tab_text sign_text pa">我的</span>        
              </div>
               <div class="home fcc" @click="goRule">
                  <img src="../../assets/tabbar/rule.png" alt="rule" class="tab_icon">             
                  <span class="pt3 tab_text">活动规则</span>        
              </div>
          <!-- </div> -->
        </div>

      
          
    </div>
</template>

<script>
// // 导入最新选手组件
// import areaRanking from "./areaRanking/areaRanking";
// import newPlayer from "./newPlayer/newPlayer";
// import Voting from "./raceArea/raceArea/Voting";
// import Voting from "./raceArea/Voting";
import HistoryArea from "@/components/index/raceArea/HistoryArea/HistoryArea"
import Enrolment from "@/components/index/raceArea/Enrolment"
import Voting from "@/components/index/raceArea/Voting"
// import Voting from "@/components/index/raceArea/Voting";
export default {
  components: {
    Voting:Voting,
    Enrolment:Enrolment,
    HistoryArea:HistoryArea,
  },
  data() {
    return {
      currentNav:0,
      isHistoryHome:true,
      isSign:false,//判断是否有报名，报名则显示我的入口
      searchBlur:false,//
      Searchvalue:"",
      zoneData:"",
    };
  },
  methods: {
    // 赛区数据切换
    // goVoting
    getIndex() {
        this.$http.post(this.$api.index, this.$qs.stringify({ zone_id: 7 })).then((res)=>{
          if(res.status==200){
            this.zoneData = res.data.data;
          }
          console.log(1111111111)
          console.log(this.zoneData);
      });
   
    },
    focus(){
      if(this.Searchvalue.length==0){
        this.searchBlur = true;
      }
      
    },
    blur(){
      if(this.Searchvalue.length==0){
        this.searchBlur = false;
      }
    },
    Letfoucus(){
    },
    // 赛区数据切换结束符
    goIndex() {
      this.$router.push({ name: "index" });
    },
    goSignup() {
      this.$router.push({ name: "Signup" });
    },
    goRule() {
      // this.$router.push({ name: "ActiveRule" });
      window.location.href = "http://wx.palmar.cn/vote/rule.html"
    },
    NavtabToggle(num){
      this.currentNav = num;      
      console.log(this.currentNav);
    },
    // 已报名去到我的
    goMe(){
        this.$router.push({ name: "me" });
    },
    mounted () {
      this.getIndex();      
    },
    created() {
      this.getIndex();
      
    },
    // 获取首页信息
  
  
  },

};
</script>

<style scoped>
button.SearchActive{
  background:#f05b29;
  color:#fff;
}
.form{
  padding:5px 10px;
}
.index {
  padding-bottom: 50px;
  box-sizing: border-box;
  padding-top: 67px;
}
.topBox {
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  /* height:74px; */
  top: 0;
  background: #fff;
  z-index: 10000;
}
.searchBox {
  justify-content: space-between;
}
input::-ms-input-placeholder {
  text-align: center;
}

input::-webkit-input-placeholder {
  text-align: center;
}
input::input-placeholder{
  text-align: center;
  
}
.placeholder{
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size:14px;
  color:#666666;
}
.search_icon {
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin-right:6px;
}
.fouce_search_icon{
  width: 14px;
  height: 14px;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
}
.search_inp {
  width: 100%;
  background: #ededed;
  border-radius: 4px;
  height: 30px;
  font-size: 13px;
  color: #666666;
  outline: none;
  border: 0;
}
.searchBtn {
  background: #ededed;
  border-radius: 4px;
  width: 40px;
  height: 29px;
  margin-left: 8px;
  font-size: 13px;
  color: #666666;
  border: none;
  outline: 0;
  widht:20%
}
/* 搜索框 */
.navTab {
  padding: 15px 10px 0 10px;
  justify-content: space-around;
  font-size: 14px;
  color: #666666;
}
.navTab div{
  box-sizing: border-box;  
  padding-bottom:6px;
}
.navActive{
  color:#f05b29!important;
  border-bottom: 2px solid #f05b29;
}

.pd_tabBar {
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  background: #fff;
  height: 50px;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
/* tab栏激活 */
.tabBarActive {
  color: #f05b29 !important;
}
.pd_tabBar > div {
  width: 33.333%;
}

.pd_tabBar .tab_icon {
  width: 22px;
  height: 22px;
}
.pd_tabBar .tab_text {
  font-size: 10px;
  color: #333333;
}
.signup {
  text-align: center;
  height: 50px;
}
.pd_tabBar .tab_sign {
  width: 35px;
  height: 35px;
  left: 50%;
  transform: translateX(-50%);
  top: -10px;
}
.pd_tabBar .sign_text {
  left: 50%;
  transform: translateX(-50%);
  bottom: 8px;
}
.pd_tabBar{
  z-index:10000;
}
</style>