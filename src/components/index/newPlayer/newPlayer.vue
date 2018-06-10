<template>
    <div>
        <div class="playBox clearfix">
                <div class="fl item pr" v-for="(item,key) in playerlist" :key="key">
                      <div>
                        <router-link :to="{path:'playDetail',query:{id:item.id}}">                                         
                            <div class="pa playerNum">{{item.number}}</div>
                            <img :src="item.head_image" alt="">
                        </router-link>
                        <div class="play_info pr">
                            <div class="frc info_top">
                                <div class="name">{{item.name}}</div>
                                <div class="piaoshu">{{item.votes}}票</div>
                            </div>
                            <div class="info_place">湖北·{{item.city}}</div>
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
      ending: true,
      playerlist:""
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
          "<p style='text-align:center;font-size:18px;color:#000'>感谢您为其投出的第<span style='color:#f05f2e'>{160}</span>票<p>",
        mes: `<img src="//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg" style="width:100%;height:187px;"> 
              <p style='text-align:center;font-size:16px;color:#ccc;padding-top:20px'>找挖机配件.上掌窝APP<p>`,
        opts:[{
            txt: "取消", //按钮文字
            color: "#000", //按钮颜色            
            // stay: Boolean, //是否保留提示框
            callback: function(){
              console.log( "取消" );
            } //按钮回调函数
          },
          {
            txt: "立即下载", //按钮文字
            color: "#f05b29", //按钮颜色
            // stay: Boolean, //是否保留提示框
            callback: function(){
              console.log( "确定" );
              location.href = "http://www.baidu.com"
            } //按钮回调函数
          },
          
          
          
          ] 
      });
    },
     // 选手列表
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
  created(){
    this.getPlayerlist();
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