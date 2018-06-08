
<template>
    <div id="app" style="position:relative">3123123
      <!-- <loading v-model="isLoading"></loading>         -->
      <router-view></router-view>
    </div>
</template>

<script type="text/babel">
import Index from "@/components/index/Index.vue";

export default {
  components: {
    appIndex: Index,
  },
  data(){
      return{
          data:''
      }
  },
  methods: {
    getIndex() {
        // const params = new URLSearchParams();
        // console.log(params)
        // params.append('page', 1);
        // var url = "http://bin.dx2.me:7000/zhangwo/api/index.php/api/index/index_more"
        // this.$http.post("/api/index/index", this.$qs.stringify({ page: 1 })).then((res)=>{
        //     console.log(res.data.data.banner);
        //     // this.data = res.
        // });
         this.$http.post("http://192.168.1.138/new_palmar/public/wechat/index.php/", this.$qs.stringify({ page: 1 })).then((res)=>{
            console.log(res);
            // this.data = res.
        });
    },
    
  },
  created(){
        // console.log(1111);
         
        // this.getIndex()
        // console.log(this.$qs);
        // this.$http.all(this.getIndex(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.test(),this.getIndex(),this.getIndex(),this.getIndex(),this.getIndex(),this.getIndex())

     }
};
</script>

np
<style >
</style>
