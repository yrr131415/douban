<template>
    <div>
         <div id="box" @click="fun(id)">
            <img :src="imgs">
            <p>{{title}}</p>
           <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
         </div>
    </div>
</template>
<script>
export default {
    props:["imgs","title","id"],
      data() {
      return {
        value:3.7
      }
    },   
    methods: {
        fun(i) {
            console.log(i)
            this.$router.push('/detail?id=' + i)
        }
    }
}
</script>
<style scoped>
    div{
        font-size:0.2rem;
    }
    #box img{
        width:1rem;
        height:1.3rem;
        margin-right: 0.1rem;
        margin-left:0.1rem;
    }
    p{
        font-size:0.16rem;
        color:black;
        margin-top:0.1rem;
    }
    .el-rate_icon{
        font-size:0.16rem;
        margin-right:2px;
    }
    a{
        text-decoration:none;
    }
</style>
<style>
   .el-rate__icon{
       font-size:0.12rem;
       margin-right:3px;
   }  
</style>

