<template>
    <div>
         <div id="box">
            <img :src="imgs">
            <p>{{title}}</p>
          </div>
    </div>
</template>
<script>
export default {
    props:["imgs","title"],
}
</script>
<style scoped>
    div{
        font-size:0.2rem;
    }
    #box{
        width:100%;
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
        text-align:center;
         /* width:30%; 
         white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;  */
    }
</style>
