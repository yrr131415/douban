<template>
    <div>
       <div id="top">
            <a href="#"><img id="img1" src="../../static/img/db.png"></a>
            <router-link to="/movie">电影</router-link>
            <router-link to="/book">图书</router-link>
            <router-link to="/boardcast">广播</router-link>
            <router-link to="/group">小组</router-link>
            <router-link to="/change"><img id="img2" src="../../static/img/search.png"></router-link>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    div{
        font-size:0.2rem;
        color:#494949;
    }
    #top{
        width:100%;
        height:0.5rem;
        line-height:0.5rem;
        border-bottom:1px solid #f3f3f3;
        display:flex;
    }
    #img1{
       /* display:inline-block; */
       width:0.5rem;
       height:0.25rem; 
       line-height:0.5rem;
       margin-left:0.25rem; 
       margin-top:0.13rem;
    }
    #img2{
      line-height:0.5rem;
      width:0.25rem;
      height:0.2rem;
      margin-top:0.17rem;
      margin-left:0.35rem;
    }
    a{
        margin-right: .4rem;
    }
    a:-webkit-any-link{
        text-decoration: none;
        font-size:0.16rem;
        margin-right:0.1rem;
    }

   #top a:nth-child(1){
        color:rgb(35, 132, 232);
       
    }
    #top a:nth-child(2){
        color:rgb(159, 120, 96);
        margin-left:0.4rem;
    }
    #top a:nth-child(3){
        color:rgb(228, 168, 19);
    }
    #top a:nth-child(4){
        color:rgb(42, 184, 204);
    }
    
</style>