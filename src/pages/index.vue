<template>
    <div>

     <!-- 3.使用 -->
     <top-nav></top-nav>
    </div>
</template>
<script>
// 1.引用
import topNav from '../components/topNav';

export default {
    // 2.调用
    components:{
        topNav
    },
    props:["title","con1","con2","imgurl"]
}

     
    

</script>
<style scoped>
    
</style>