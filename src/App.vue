
<template>
    <div id="app" style="position:relative">
      <!-- <loading v-model="isLoading"></loading>         -->
      <!-- <app-index></app-index> -->
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
      }
  },
  created(){
   

     }
};
</script>

<style >
</style>
