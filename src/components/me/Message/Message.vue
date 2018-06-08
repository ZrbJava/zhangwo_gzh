<template>
    <div>
        <div class="detail_info mb10">
          <!-- 参赛信息 -->
          <div class="info_center pt10 pl22 pr10 mb10">
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
          <!-- 选手图片        -->
        <div class="playImg pl10 pr10 mb10">
            <div class="title">-参赛图片-</div>
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
        ],
        };
  },
};
</script>

<style scoped lang="less">
h3 {
  font-size: 15px;
  color: #000000;
  padding-bottom: 8px;
}
/* 参赛信息 */
.detail_info {
  background: #fff;
}
.info_center {
  font-size: 13px;
  line-height: 25px;
  .l_section {
    color: #666666;
    padding-right: 46px;
  }
  .r_section {
    color: #1a191e;
  }
}
.info_bottom .text {
  font-size: 13px;
  color: #1a191e;
  line-height: 25px;
}
.playImg {
  background: #fff;
  .title {
    font-size: 14px;
    color: #666666;
    text-align: center;
    height: 56px;
    line-height: 56px;
    background: #fff;
  }
}
</style>