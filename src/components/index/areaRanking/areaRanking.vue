<template>
    <div class="areaRanking">
        <!-- 前三 -->
        <div class="title_section frc">
            <div class="fcc pt8">
                <div class="pr">
                    <img src="../../../assets/index/two.png" alt="" class="pa two">                    
                    <img src="../../../assets/index/avator.png" alt="" class="avator2 mb6">
                </div>
                <div class="mb3">阪上油封</div>
                <div class="mb4">茂名市</div>
                <div class="res_num f10">获83938票</div>
            </div>
              <div class="fcc">
                
                  <div class="pr">
                      <img src="../../../assets/index/first.png" alt="" class="pa first">                      
                      <img src="../../../assets/index/avator.png" alt="" class="avator1">
                  </div>
                <div class="mb3">阪上油封</div>
                <div class="mb4">茂名市</div>
                <div class="res_num f10">获83938票</div>
            </div>
             <div class="fcc pt8">
               <div class="pr">
                      <img src="../../../assets/index/three.png" alt="" class="pa three">                                         
                      <img src="../../../assets/index/avator.png" alt="" class="avator3 mb6">
                  </div>
                <div class="mb3">阪上油封</div>
                <div class="mb4">茂名市</div>
                <div class="res_num f10">获83938票</div>
            </div>
        </div>
        <!-- 4-10 -->
         <div class="item frc"  v-for="item in [1,2,3,4,5,6,7]" :key="item">
             <div class="frc f14" >
                    <span class="mr10">{{item + 3}}</span>
                    <img src="../../../assets/index/avator.png" alt="" class="avator mr10">
                    <span class="mr10">Summer</span>
             </div>
            <div class="fcc">
                <div class="mb5 f12">广州市</div>
                <div class="res_num f10">获83938票</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                Ranking:"",
            }
        },
        methods:{
            getRanking(){
                this.$http.post(this.$api.ranking, this.$qs.stringify({ zone_id: 7,page:1 })).then((res)=>{
                    if(res.data.status==1){
                        this.getRanking = res.data.data;           
                    }
                        console.log(this.playerlist);
                    });
            }
        },
        created(){
            this.getRanking()
        }
    }
</script>

<style scoped>

.areaRanking .item:not(:last-child){
    border-bottom:1px solid #dcdcdc;
}
.title_section{
    padding:20px 32px 0  32px;
    justify-content: space-between;
}
.title_section .first{
    left:0;
    top:-10px;
    width:28px;
    height:23px;
  
}
.title_section .two{
     left:0;
    top:-10px;
    width:21px;
    height:17px;
}
.title_section .three{
     left:0;
    top:-10px;
    width:21px;
    height:17px;
}
.title_section>div{
    justify-content: flex-start;
}
.title_section .avator2{
    border:3px solid #a4b7d8;
    width:48px;
    height:48px;
    border-radius:100%;
}
.title_section .avator1{
    border:3px solid #ffd600;
    width:64px;
    height:64px;
    border-radius:100%;
}
.title_section .avator3{
    border:3px solid #dea67e;
    width:48px;
    height:48px;
    border-radius:100%;
}
.areaRanking .item{
    vertical-align: middle;
    height:80px;
    justify-content: space-between;
    padding: 0 32px;
}
.areaRanking .item .avator{
    width:40px;
    height:40px;
    border-radius:100%;
}
.res_num{
    background:#f05b29;
    border-radius:100px;
    padding:2px 20px;
    color:#fff;
}
</style>