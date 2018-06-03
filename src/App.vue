
<template>
    <div id="app">
    <app-index></app-index>
        <!-- 公用的底部tabbar -->
    <yd-tabbar active-color="#f05b29" fixed fontsize="10px">
        <yd-tabbar-item title="首页" link="#" active>
            <img slot="icon" src="./assets/tabbar/home.png">
        </yd-tabbar-item>
        <yd-tabbar-item title="立即报名" link="#">
            <img slot="icon" src="./assets/tabbar/sign.png">
        </yd-tabbar-item>
        <yd-tabbar-item title="活动介绍" link="#">
            <img slot="icon" src="./assets/tabbar/rule.png">            
        </yd-tabbar-item>
    </yd-tabbar>
      <!-- 路由视口 -->
      <router-view></router-view>
     
        
    </div>
    
</template>

<script type="text/babel">
import Index from "@/components/index/Index.vue"
    export default{
     components:{
         appIndex:Index
     }
    }
</script>


<style >

</style>
