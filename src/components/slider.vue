<template>
    <div>
      <!-- <div id="box"> -->
          <a :style="color" :href="href">{{title}}</a>
      <!-- </div> -->
    </div>
</template>
<script>
export default {
   props:["title","href","color"],
}
</script>
<style scoped>
    div{
        font-size:0.2rem;
    }
    li{
        list-style:none;
    }
    a{  
        display:inline-block;
        height:0.45rem;
        line-height:0.45rem;
        border:1px solid #ffac2d;
        font-size:0.16rem;
        padding:0 0.1rem;
        border-radius:3px;
        text-decoration: none;
        letter-spacing: 1px;
        margin-left:0.1rem;
    }
    #box{
        display:flex;
    }
</style>