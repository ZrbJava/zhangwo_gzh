<template>
    <div class="index">
    <!-- 搜索框 -->
     <!-- <yd-search v-model="value1" :on-submit="submitHandler" fullpage cancel-text='搜索'	 placeholder='搜索选手名称或编号'></yd-search> -->
      <yd-search :result="result" fullpage v-model="value2"  placeholder='搜索选手名称或编号' :item-click="itemClickHandler" :on-submit="submitHandler" cancel-text='搜索'></yd-search>
    <!-- 选项卡 -->
     <yd-tab horizontal-scroll   >
        <yd-tab-panel :label="item.title" v-for="item in tab" :key="item.index" :index="item.index">
             <yd-slider autoplay="3000">
                <yd-slider-item v-for="imgItem in item.imgs" :key="imgItem.index" :index="imgItem.index">
                        <img :src="imgItem">
                </yd-slider-item>
             </yd-slider>
        </yd-tab-panel>
    </yd-tab>
    <!-- 赞助商 -->
    <div class="zzdw pr">
        <img class="zzdw_logo" src="../../assets/index/zzdw_logo.png" alt="">
        <img class="zzdw_name" src="../../assets/index/zzdw.png" alt="">
        <div class="line pa"></div>
    </div>
    <!-- 参赛数据 -->
    <div class="race_data mb20">
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
      <!-- 区域数据 -->
      <div class="area_data pr">
        <!-- title -->
        <div class="phc title">湖北赛区数据</div>
        <!-- 数据展示 -->
        <div class="frc box">
          <div class="fcc">
            <div class="num">2115</div>
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
    <!-- 最新选手 - 赛区排名 -->
    <div class="Player">
      <!-- 头部 -->
      <div class="zzdw pr title">
        <img class="zzdw_logo" src="../../assets/index/time.png" alt="">
        <span class="time">2018年6月5日至6月20日</span>
        <div class="line pa"></div>
      </div>
      <!-- tab栏 -->
      <div class="tab frc">
        <div :class="isNewPlay?'active':''" @click="tabToggle">最新选手</div>
        <div :class="isPaiMin?'active':''" @click="tabToggle">赛区排名</div>
      </div>
      <!-- 选手列表 -->
      <div class="playerList">
        <div class="itme frc">
          <div>
            <img src="../../assets/index/avator.png" alt="">
          </div>
          <div>
            <img src="../../assets/index/avator.png" alt="">
          </div>
        </div>
       
      </div>
    </div>
    <router-view></router-view>
    <ul>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
      <li>10000</li>
    </ul>
    
    </div>
</template>

<script>
export default {
  data() {
    return {
      value2: "",
      result: [],
      tab: [
        {
          title: "湖北赛区",
          imgs: [
            "http://static.ydcss.com/uploads/ydui/1.jpg",
            "http://static.ydcss.com/uploads/ydui/2.jpg",
            "http://static.ydcss.com/uploads/ydui/3.jpg"
          ]
        },
        {
          title: "江西赛区",
          imgs: [
            "œ://static.ydcss.com/uploads/ydui/1.jpg",
            "http://static.ydcss.com/uploads/ydui/2.jpg",
            "http://static.ydcss.com/uploads/ydui/3.jpg"
          ]
        },
        {
          title: "广东赛区",
          imgs: [
            "http://static.ydcss.com/uploads/ydui/1.jpg",
            "http://static.ydcss.com/uploads/ydui/2.jpg",
            "http://static.ydcss.com/uploads/ydui/3.jpg"
          ]
        },
        {
          title: "广西赛区",
          imgs: [
            "http://static.ydcss.com/uploads/ydui/1.jpg",
            "http://static.ydcss.com/uploads/ydui/2.jpg",
            "http://static.ydcss.com/uploads/ydui/3.jpg"
          ]
        },
        {
          title: "四川赛区",
          imgs: [
            "http://static.ydcss.com/uploads/ydui/1.jpg",
            "http://static.ydcss.com/uploads/ydui/2.jpg",
            "http://static.ydcss.com/uploads/ydui/3.jpg"
          ]
        }
      ],
      isNewPlay: true,
      isPaiMin: false
    };
  },
  methods: {
    getResult(val) {
      if (!val) return [];
      return [
        "Apple",
        "Banana",
        "Orange",
        "Durian",
        "Lemon",
        "Peach",
        "Cherry",
        "Berry",
        "Core",
        "Fig",
        "Haw",
        "Melon",
        "Plum",
        "Pear",
        "Peanut",
        "Other"
      ].filter(value => new RegExp(val, "i").test(value));
    },
    itemClickHandler(item) {
      this.$dialog.toast({ mes: `搜索：${item}` });
    },
    submitHandler(value) {
      this.$dialog.toast({ mes: `搜索：${value}` });
    },
    // tab栏切换
    tabToggle() {
      this.isNewPlay = !this.isNewPlay;
      this.isPaiMin = !this.isPaiMin;
    }
  },
  watch: {
    value2(val) {
      this.result = this.getResult(val);
    }
  },
  // 生命周期函数
  created() {
    // console.log(this.$http);
    // this.$http.post(this.$api.index).then(() => {
    //   console.log(111111);
    // });
  }
};
</script>

<style scoped>
.index {
  /* padding:0 10px; */
}
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
  height: 206px;
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
  height: 104px;
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
/* 最新选手 */
.Player {
  background: #fff;
  padding: 0 10px;
}
.Player .title {
  box-sizing: border-box;
  margin-bottom: 0;
  line-height: 40px;
  padding: 0;
}
.Player .time {
  font-size: 15px;
  color: #666666;
  /* padding-top:4px; */
  vertical-align: baseline;
}
.Player .tab {
  height: 40px;
  /* background: red; */
  justify-content: space-between;
  padding: 0 32px;
}
.Player .tab div {
  font-size: 15px;
  color: #666666;
  height: 40px;
  line-height: 40px;
}
.Player .tab div.active {
  border-bottom: 3px solid #f05b29;
  color: #f05b29;
}
/* 选手列表 */
.playerList{
  /* padding:0 5px; */
}
.playerList .itme{
  /* justify-content: space-between; */
}
.playerList .itme img {
  height: 206px;
}
.playerList .itme div{
  width: 45%;

  
}

</style>