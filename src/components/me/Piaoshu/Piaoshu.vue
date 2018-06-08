<template>
    <div>
        <div class="title frc">
            <div>时间</div>
            <div>票数</div>
            <div>累计</div>
        </div>
        <!-- 列表 -->
        <div class="list">
            <div class="frc list_odd" v-for="(item,index) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="index" :class="index%2==0?'':'bgc'">
                <div>2018-1-20</div>
                <div>18</div>
                <div>51231</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.title{
    justify-content: space-between;
    height:45px;
    line-height: 45px;
    padding:0 46px;
    background: #fff;
    font-size:16px;
    color:#333333;

}
.list_odd{
      justify-content: space-between;
      padding:0 43px 0 25px;
      font-size:16px;
      color:#333333;
    height:45px;
    line-height: 45px;
    background: #fff;
        
}
.bgc{
    background:#f5f5f5;
}
</style>