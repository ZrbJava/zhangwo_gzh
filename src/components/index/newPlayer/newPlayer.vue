<template>
    <div>
        <div class="playBox clearfix">
                <div class="fr item pr" v-for="(items,key) in [1,2,3,4,5,6,7,8,9,10]" :key="key">
                      <div>
                        <router-link :to="{path:'playDetail',query:{id:playerId}}">                                         
                            <div class="pa playerNum">0014</div>
                            <img src="//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg" alt="">
                        </router-link>
                        <div class="play_info pr">
                            <div class="frc info_top">
                                <div class="name">张天帅</div>
                                <div class="piaoshu">1102票</div>
                            </div>
                            <div class="info_place">湖北·天门</div>
                            <yd-button v-if="beging" size="large" @click.native="openConfrim"  bgcolor='#f05b29' @click="toupiao">投TA一票</yd-button>
                            <yd-button v-else size="large" @click.native="openConfrim"  bgcolor='#f3a88f'>已投</yd-button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      beging: true,
      playerId: 1000,
      ending: true
      // isTouPiao:false,
    };
  },
  methods: {
    toupiao(index) {
      console.log(index);
    },
    openConfrim() {
      this.$dialog.confirm({
        title:
          "<p style='text-align:center;font-size:18px;color:#000'>感谢您为其投出的第<span style='color:#f05f2e'>160</span>票<p>",
        mes: `<img src="//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg" style="width:100%;height:187px;"> 
              <p style='text-align:center;font-size:16px;color:#ccc;height:40px;line-height:40px;border-bottom:1px solid #ccc'>找挖机配件.上掌窝APP<p>`,
        opts: () => {
          this.$dialog.toast({ mes: "你点了确定", timeout: 1000 });
          this.beging = false;
        }
      });
    }
  }
};
</script>

<style scoped>
.playBox {
  padding-bottom: 14px;
}
.playBox > div {
  width: 50%;
  padding: 6px;
  box-sizing: border-box;
}
.item > div {
  height: 308px;
  overflow: hidden;
}
.item img {
  width: 100%;
  height: 206px;
  display: block;
}
.item .play_info {
  background: #f5f5f5;
  height: 102px;
  padding: 8px;
}
.item .play_info .info_top {
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
.playerNum {
  background: #f05b29;
  color: #fff;
  border-radius: 0 100px 100px 0;
  width: 54px;
  height: 18px;
  left: 6px;
  top: 6px;
  text-align: center;
  line-height: 18px;
}
</style>