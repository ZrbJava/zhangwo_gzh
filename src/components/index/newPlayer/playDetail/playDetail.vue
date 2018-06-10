<template>
    <div>
        <!-- 轮播图 -->
       <yd-slider autoplay="3000">
            <yd-slider-item v-for="imgItem in imgs" :key="imgItem.index">
                    <img :src="imgItem">
            </yd-slider-item>
        </yd-slider>
        <!-- 赞助商 -->
        <div class="zzdw pr">
            <img class="zzdw_logo" src="../../../../assets/index/zzdw_logo.png" alt="">
            <!-- 赞助商家 -->
            <router-link to="/Sponsor">
            <img class="zzdw_name" src="../../../../assets/index/zzdw.png" alt="">
            </router-link>
            <div class="line pa"></div>
        </div>
        <!-- 选手信息 -->
        <div class="detail_info mb10">
          <!-- 选手个人信息 -->
          <div class="info_top mb10">
              <div class="frc section_box">
                <div class="avator mr20">
                  <img src="../../../../assets/index/avator.png" alt="">
                </div>
                <div class="fcc">
                  <div class="mb12"><span class="num mr5">0013</span><span class="name">jake</span></div>
                  <div class="city">广东省·广州市</div>
                  <div class="time">16年维修经验</div>
                </div>
              </div>
              <!-- 票数及排名 -->
              <div class="frc info_top_buttom">
                <div class="fcc">
                  <div class="nums">159</div>
                  <div>当前票数</div>
                </div>
                <div class="fcc">
                  <div class="nums">14</div>
                  <div>当前排名</div>
                </div>
                <div class="fcc">
                  <div class="nums">13</div>
                  <div>距上一名还差</div>
                </div>
              </div>
          </div>
          <!-- 参赛信息 -->
          <div class="info_center pl22 pr10 mb10">
            <h3>参赛信息</h3>
            <div><span class="l_section">从业时间</span><span class="r_section">2010-至今</span></div>
            <div><span class="l_section">主修类型</span><span class="r_section">动力系统 液压系统</span></div>
            <div><span class="l_section">维修场地</span><span class="r_section">100平以内</span></div>
            <div><span class="l_section">维修团队</span><span class="r_section">3人</span></div>
          </div>
          <!-- 参赛自述 -->
          <div class="info_bottom pl22 pr10">
             <h3>参赛自述</h3>
            <div class="text">
              宜昌博远新动力是专业维修销售电喷、直喷、PT泵、单体泵、高压共轨、德尔福、特别是卡特中压共轨系统有深入的研究。工程机械油泵油嘴、维修再制造件、各种挖机油泵油嘴替换件为客户节约时间及成本。为中国的天更蓝，水更清，大地更美宜昌博远新动力一直在努力！
            </div>
          </div>   
        </div>
        <!-- 选手图片        -->
        <div class="playImg pl10 pr10 mb10">
            <div class="title">-选手图片-</div>
            <!-- 图片轮播 -->
            <div class="mb35">
              <yd-slider autoplay="3000"  style="z-index:0">
                <yd-slider-item v-for="imgItem in imgs" :key="imgItem.index">
                  <yd-lightbox>
                        <!-- <yd-lightbox-img v-for="(item, key) in imgs" :key="key" :src="item"></yd-lightbox-img> -->
                        <yd-lightbox-img :src="imgItem"></yd-lightbox-img>
                        <yd-lightbox-txt>
                          <div slot="content">选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍选手介绍</div>
                        </yd-lightbox-txt>
                    </yd-lightbox>
                </yd-slider-item>
              </yd-slider>
            </div>
            <div>
              <!-- 修理工印象 -->              
              <div class="xlgyx mb10"><h3 class="fl pl10">修理工印象</h3>大家对选手的印象是</div>
              <!-- 评分按钮 -->
              <div class="commentBox ">
                <div class="item mb15 clearfix" v-for="(item,key) in [1,2,3,4,5,6,7,8,9,10]" :key="key">
                  <div class="pr8" style="box-sizing:border-box">
                    <div class="commentBtn fl uncomment">维修技术好（10）</div>
                  </div>
                  <div class="pl8">
                    <div class="commentBtn fr commentedActive">服务态度好（90）</div>                   
                  </div>
                </div>
              </div>
            </div>
            <!-- 粉丝支持榜TOP5 -->
            <div class="xlgyx mb10 clearfix"><h3 class="fl pl10">粉丝支持榜TOP5</h3>每一票都是 <img class="top_love" src="../../../../assets/playerDetail/love.png" alt="" > </div>            
            <!-- 4-10 -->
           <div class="topList clearfix">
              <div class="itemList frc"  v-for="item in [1,2,3,4,5]" :key="item">
                <div class="frc f14" >
                        <span class="mr32 num">{{item}}</span>
                        <img src="../../../../assets/index/avator.png" alt="" class="avator mr10">
                        <span class="mr10">Summer</span>
                </div>
                <div class="fcc">
                    <div class="mb5 f12">20 <img class="top_love" src="../../../../assets/playerDetail/love.png" alt="" ></div>
                </div>
            </div>
           </div>
        </div>
        <!-- 引导下载 -->
        <!-- <router-link to="/"> -->
        <a href="http://www.baidu.com">
          <div class="download fcc mb10">
             <div class="mb4">引导下载掌窝工程机械APP</div>
            <div>点击可以跳转到下载页</div>
          </div>
        </a>
        <div class="pd_tabBar pf frc">
          <div class="left frc">
                <div class="home fcc" @click="goIndex">
                  <img src="../../../../assets/tabbar/home.png" alt="home" class="tab_icon">
                  <span class="pt3 tab_text" >首页</span>            
                </div>  
                <div class="signup fcc" @click="goSignup">
                  <img src="../../../../assets/tabbar/sign.png" alt="home" class="tab_icon">             
                  <span class="pt3 tab_text">报名</span>        
              </div>
          </div>
          <div class="toupiao">
            投TA一票
          </div>
        </div>
        <!-- </router-link> -->
    </div>

</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "http://static.ydcss.com/uploads/ydui/1.jpg",
        "http://static.ydcss.com/uploads/ydui/2.jpg",
        "http://static.ydcss.com/uploads/ydui/3.jpg"
      ]
    };
  },
  methods: {
    goIndex(){
      this.$router.push({ name: 'index'})
    },
    goSignup(){
      this.$router.push({ name: 'Signup'})
    },
     getPlayerlist(){
      this.$http.post(this.$api.playerlist, this.$qs.stringify({ zone_id: 7,page:1 })).then((res)=>{
           if(res.data.status==1){
             this.playerlist = res.data.data.playerlist;           
            // console.log(res)
           }
            console.log(this.playerlist);
        });
    }
  },
  created() {
    console.log("选手id" + this.$route.query.id);
    var id = this.$route.query.id;
  }
};
</script>

<style scoped>
.zzdw {
  background: #ffffff;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
  padding-left: 10px;
}
.zzdw_logo {
  width: 62px;
  height: 14px;
  vertical-align: middle;
  margin-right: 30px;
}
.zzdw_name {
  width: 96px;
  height: 24px;
  vertical-align: middle;
}
.zzdw .line {
  width: 1px;
  background: #eeeeee;
  left: 88px;
  top: 50%;
  height: 20px;
  transform: translateY(-50%);
}
/* 选手信息、 */
.detail_info {
  background: #fff;
  /* border-buttom:1px solid #ccc; */
}
.info_top {
  border-bottom: 1px solid #eee;
}
.info_top .section_box {
  padding: 18px 22px 0 10px;
}
.info_top .avator img {
  width: 70px;
  height: 70px;
  border-radius: 100%;
}
.info_top .num {
  padding: 2px 10px;
  background: #f05b29;
  border-radius: 100px;
  font-size: 13px;
  color: #ffffff;
}
.info_top .name {
  font-size: 18px;
  color: #1a191e;
  font-weight: 500;
}
.info_top .city,
.time {
  font-size: 12px;
  color: #999999;
  line-height: 18px;
}

.info_top .info_top_buttom {
  justify-content: space-around;
  font-size: 12px;
  color: #999999;
  margin-top: 25px;
  padding-bottom: 7px;
}

.info_top .info_top_buttom .nums {
  font-size: 22px;
  color: #333333;
  margin-bottom: 4px;
}
/* 参赛信息 */
.info_center {
  font-size: 13px;
  line-height: 25px;
}
.info_center .l_section {
  color: #666666;
  padding-right: 46px;
}
.info_center .r_section {
  color: #1a191e;
}
h3 {
  font-size: 15px;
  color: #000000;
  padding-bottom: 8px;
}
.info_bottom .text {
  font-size: 13px;
  color: #1a191e;
  line-height: 25px;
}
.playImg {
  background: #fff;
}
.playImg .title {
  font-size: 14px;
  color: #666666;
  text-align: center;
  height: 56px;
  line-height: 56px;
  background: #fff;
}
/* 修理工印象 */
.xlgyx {
  border-left: 2px solid #f05b29;
  font-size: 12px;
  color: #999999;
  text-align: right;
  height: 22px;
  line-height: 22px;
}
/* 评价按钮 */
.commentBtn {
  border: 1px solid #f05b29;
  border-radius: 2px;
  width: 50%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  box-sizing: border-box;
  font-size: 12px;
}
.uncomment {
  background: #fff1ed;
  color: #f05b29;
}
.commentedActive {
  color: #fff;
  background: #f05b29;
}

.top_love {
  width: 16px;
  height: 14px;
  vertical-align: middle;
  padding-left: 2px;
}
/* 增加 */
.topList .itemList {
  vertical-align: middle;
  height: 80px;
  justify-content: space-between;
}
.topList .itemList .avator {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
.topList .itemList .num {
  background: #fff1ed;
  border-radius: 2px;
  width: 22px;
  height: 22px;
  font-size: 14px;
  color: #f05b29;
  line-height: 22px;
  text-align: center;
}
.download {
  background: #666666;
  height: 90px;
  font-size: 15px;
  color: #ffffff;
  justify-content: center;
}
.pd_tabBar {
  width: 100%;
  max-width:600px;
  background: #fff;
  height: 50px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%)
}
.pd_tabBar .toupiao{
  width:60%;
  height:50x;
  line-height: 50px;
  background-image:linear-gradient(-90deg, #fb9a00 0%, #f95200 98%);
  text-align: center;
  color:#fff;
}
.pd_tabBar .left{
  width:40%;
}
.pd_tabBar .left .home,.pd_tabBar .left .signup{
  width:50%;
  box-sizing: border-box;
  z-index: 99999999;
}
.tab_icon{
  width:22px;
  height:22px;
}
.tab_text{
  font-size:10px;
  color:#333333;
}
</style>