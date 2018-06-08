<template>
  <div>
        <yd-slider autoplay="3000">
              <yd-slider-item v-for="(imgItem,key) in imgs" :key="key">
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
        <!-- 参赛数据 -->
        <div class="race_data mb10">
          <!-- 总数据 -->
          <div class="all_data pr">
            <!-- title -->
            <div class="phc title">参赛总数据</div>
              <!-- 数据展示 -->
              <div class="frc box">
                <div class="fcc">
                  <div class="num ">2115</div>
                  <div class="drc">参赛选手</div>
                </div>
                <div class="fcc">
                    <div class="num">16.3 <span>万</span> </div>
                    <div class="drc">累计投票</div>
                </div>
                <div class="fcc">
                    <div class="num">89.6 <span>万</span> </div>
                    <div class="drc">访问量</div>
                </div>
              </div>
            </div>   
        </div>
        <!-- 历史记录列表 -->
        <div class="mb10" @click="goHistoryHome">
          <img src="../../../../assets/index/history/one.png" alt="" class="historyImg mb14">
         <div class="pr">
            <div class="frc pl10 pr10">
              <img src="../../../../assets/index/history/location.png" alt="" class="locationImg ">
              <div class="fontColor pr5 area pl8">广东站</div>
              <div class="pl6"><span class="fontColor">161</span>名参赛选手，累计投票<span class="fontColor">8239</span>票，共<span class="fontColor">33226</span>次访问量</div>
            </div>
            <div class="line pa"></div>
         </div>
        </div>
        <div class="mb10">
          <img src="../../../../assets/index/history/one.png" alt="" class="historyImg mb14">
         <div class="pr">
            <div class="frc pl10 pr10">
              <img src="../../../../assets/index/history/location.png" alt="" class="locationImg ">
              <div class="fontColor pr5 area pl8">广东站</div>
              <div class="pl6"><span class="fontColor">161</span>名参赛选手，累计投票<span class="fontColor">8239</span>票，共<span class="fontColor">33226</span>次访问量</div>
            </div>
            <div class="line pa"></div>
         </div>
        </div>
         <div class="mb10">
          <img src="../../../../assets/index/history/one.png" alt="" class="historyImg mb14">
          <div class="pr">
              <div class="frc pl10 pr10">
                <img src="../../../../assets/index/history/location.png" alt="" class="locationImg ">
                <div class="fontColor pr5 area pl8">广西站</div>
                <div class="pl6"><span class="fontColor">161</span>名参赛选手，累计投票<span class="fontColor">8239</span>票，共<span class="fontColor">33226</span>次访问量</div>
              </div>
              <div class="line pa"></div>
          </div>
        </div> 
        <div class="mb10">
          <img src="../../../../assets/index/history/one.png" alt="" class="historyImg mb14">
         <div class="pr">
            <div class="frc pl10 pr10">
              <img src="../../../../assets/index/history/location.png" alt="" class="locationImg ">
              <div class="fontColor pr5 area pl8">湖北站</div>
              <div class="pl10"><span class="fontColor">160123101</span>名参赛选手，累计投票<span class="fontColor">8231231239</span>票，共<span class="fontColor">331231323226</span>次访问量</div>
            </div>
            <div class="line pa"></div>
         </div>
        </div>
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
  methods:{
    goHistoryHome(){
      this.$router.push({ name: 'HistoryHome'})
      // console.log(this.$router);
    },
  }
};
</script>

<style scoped>
.zzdw {
  background: #ffffff;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-bottom: 27px;
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
.race_data {
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  height: 88px;
}

.race_data .num {
  font-size: 20px;
  margin-bottom: 2px;
}
.race_data .drc {
  font-size: 12px;
  color: #999999;
}
.race_data .title {
  width: 121px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  transform: translate(-50%, -50%);
  border-radius: 100px;
}
.race_data .box {
  justify-content: space-around;
  height: 88px;
}
.race_data .box div {
  justify-content: space-between;
}
.all_data .title {
  background: #f05b29;
  box-shadow: 0 1px 5px 0 #ff5000;
}
.area_data .title {
  background: #4a90e2;
  box-shadow: 0 1px 5px 0 #4a90e2;
}
/* 历史赛区图片 */
.historyImg {
  width: 100%;
  height: 188px;
}
.locationImg {
  width: 10px;
  height: 13px;
}
.area {
  /* border-right: 1px solid #d8d8d8; */
  min-width: 36px;
  flex: none;
}
.fontColor {
  color: #f05b29;
}

.line {
  background: #d8d8d8;
  width: 1px;
  height: 18px;
  left: 70px;
  top: 50%;
  transform: translateY(-50%);
  /* margin-right:6px; */
}
.historyAreaBox {
  font-size: 12px;
  /* color:#f05b29; */
}
</style>