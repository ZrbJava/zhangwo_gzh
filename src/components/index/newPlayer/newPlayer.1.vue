<template>
    <div id="newPlayer">
         <yd-list theme="3" class="newPlayer">
             <yd-list-item type="link" v-for="(item, key) in list" :key="key" href="#">
            <img slot="img" :src="item.img">
             <yd-list-other slot="other">
                 <div class="play_info pr">
                    <div class="frc info_top">
                        <div class="name">张天帅</div>
                        <div class="piaoshu">1102票</div>
                    </div>
                    <div class="info_place">湖北·天门</div>
                        <yd-button size="large" @click.native="handleClick" type="danger" bgcolor='#f05b29'>投TA一票</yd-button>
                 </div>
            </yd-list-other>
           
        </yd-list-item>
    </yd-list>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
          title: "标题111标题标题标题标题",
          price: 156.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
          title: "标题222标题标题标题标题",
          price: 256.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
          title: "标题333标题标题标题标题",
          price: 356.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
          title: "标题444标题标题标题标题",
          price: 456.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
          title: "标题555标题标题标题标题",
          price: 556.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
          title: "标题666标题标题标题标题",
          price: 656.23,
          w_price: 89.36
        }
      ]
    };
  }
};
</script>

<style scoped>
.play_info {
  background: #f5f5f5;
  width: 100%;
  height: 102px;
  padding: 8px;
}
.play_info .info_top {
  justify-content: space-between;
}
.play_info .info_top .name {
  font-size: 16px;
  color: #1a191e;
  font-weight: 500;
}
.play_info .info_top .piaoshu {
  font-size: 14px;
  color: #f05b29;
}
.play_info .info_place {
  font-size: 10px;
  color: #666666;
  padding-top: 10px;
}
.play_info .yd-btn-block {
  width: 100%;
  display: block;
  font-size: 13px;
  color: #ffffff;
  letter-spacing: 0.59px;
  height: 30px;
  margin-top: 10px;
}
.playerList .yd-list-theme3 .yd-list-item .yd-list-title{
    display:none
}
</style>