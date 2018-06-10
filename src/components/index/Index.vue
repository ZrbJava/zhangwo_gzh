<template>
    <div class="index" v-if="loading">
        <div class="pf topBox">
            <div class="form">
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
                <button  :class="{'searchBtn':true,'SearchActive':Searchvalue.length!=0}" @click="goSearchList">搜索</button>
              </div>
              
            </div>
          <!-- tab栏目 -->
          <div class="frc navTab" v-if="isTab" >
            <!-- currentNav==0?'navActive':'' -->
            <div @click="NavtabToggle(index)" :class="{navActive:currentNav==index}" v-for="(item,key,index) in zoneData.zoneList" :key="key" >{{item.name}}</div>
            <div @click="NavtabToggle(2)" :class="{navActive:currentNav==2}">历史赛区</div>
            <!-- 这里接口有问题有问题我暂时先写死 -->
          </div>
        </div>
        <keep-alive>
          <component v-if="currentNav==0" is="Voting" ></component>
          <component v-if="currentNav==1" is="Enrolment"></component>
          <component v-if="currentNav==2" is="HistoryArea"></component>
            <!-- 这里接口有问题有问题我暂时先写死 -->          
        </keep-alive>
          
          <!-- <component  :is="Voting"></component> -->
          
        <!-- 底部导航栏 -->
        <div class="pd_tabBar pf frc">
          <!-- <div class="left frc"> -->
                <div class="home fcc" @click="goIndex">
                  <img src="../../assets/tabbar/home.png" alt="home" class="tab_icon">
                  <span class="pt3 tab_text tabBarActive" >首页</span>            
                </div>  
                <div class="signup pr" @click="goSignup" v-show="!isPlayer">
                  <img src="../../assets/tabbar/sign.png" alt="signup" class="tab_sign pa">             
                  <span class="pt3 tab_text sign_text pa">报名</span>        
              </div>
                <div class="signup pr" @click="goMe" v-show="isPlayer">
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

import HistoryArea from "@/components/index/raceArea/HistoryArea/HistoryArea"
import Enrolment from "@/components/index/raceArea/Enrolment"
import Voting from "@/components/index/raceArea/Voting"
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
      isPlayer:false,
      searchBlur:false,
      Searchvalue:"",
      zoneData:"",
      loading:false,
      isTab:true,
    };
  },
  methods: {
    // 赛区数据切换
    getIndex() {
        this.$http.post(this.$api.index, this.$qs.stringify({ zone_id: 7 })).then((res)=>{
          if(res.data.status==1){
            this.zoneData = res.data.data;
            this.loading = true
          }
          console.log(this.zoneData);
      });
   
    },
    // 是否登陆
   isplayer() {
        this.$http.post(this.$api.isplayer, this.$qs.stringify({ user_id: 22 })).then((res)=>{
          if(res.data.status==1){
            this.isPlayer = true;
          }
      });
   
    },
    // 搜索
    goSearchList(){
      if(this.Searchvalue.length!=0){
        this.$router.push("searchList")
      }
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
   
    // 获取首页信息
  },
  created(){
    this.getIndex();
    this.isplayer();
  
  }

};
</script>

<style scoped lang='less'>
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
  // width:20%
}
/* 搜索框 */
.navTab {
  padding: 15px 10px 0 10px;
  justify-content: space-around;
  font-size: 14px;
  color: #666666;
  div{
    box-sizing: border-box;  
    padding-bottom:6px;
  }
}
.navActive{
  color:#f05b29!important;
  border-bottom: 2px solid #f05b29;
}

/* tab栏激活 */
.tabBarActive {
  color: #f05b29 !important;
}
.pd_tabBar > div {
  width: 33.333%;
}

.pd_tabBar{
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  background: #fff;
  height: 50px;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index:10000;  
  .tab_icon{
      width: 22px;
    height: 22px;
  }
  .tab_text {
    font-size: 10px;
    color: #333333;
  }
  .tab_sign {
    width: 35px;
    height: 35px;
    left: 50%;
    transform: translateX(-50%);
    top: -10px;
  }
  .sign_text {
    left: 50%;
    transform: translateX(-50%);
    bottom: 8px;
  }
}
.signup {
  text-align: center;
  height: 50px;
}

</style>