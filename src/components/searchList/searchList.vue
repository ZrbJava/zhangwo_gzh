<template>
  <div>
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
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>