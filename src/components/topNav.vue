<template>
    <div>

       <div id="top">
            <a href="#"><img id="img1" src="../../static/img/db.png"></a>
            <router-link to="/movie">电影</router-link>
            <router-link to="/book">图书</router-link>
            <router-link to="/boardcast">广播</router-link>
            <router-link to="/group">小组</router-link>
            <a href="#"><img id="img2" src="../../static/img/search.png" @click="img()"></a>
       </div>
       <div id="midd">
           <router-link to='/'>影院热映</router-link>
           <router-link to='/'>欧美新碟榜</router-link>
           <router-link to='/register'>注册账号</router-link>
           <router-link to='/login'>登录豆瓣</router-link>
       </div>
       <img id="tu3" src="../../static/img/loading.gif" v-if="arr.length<=0">
       <div v-for="(v,i) in arr " :key='i' v-else>
            <div id="artical">
                <div id="left">
                    <h3>{{v.title}}</h3>
                    <p>{{v.tags}}</p>
                    <p>{{v.category_name}}</p>
                </div>
                <img :src="v.image">
            </div>
       </div>

    </div>
</template>
<script>

export default {
     data(){
      return{
        arr:[], 
      }
    },
    created(){
        setTimeout(() => {
            this.axios({
                method:"get",
                    url:"/index"
                }).then((ok)=>{
                console.log(ok.data.shouye);
                this.arr=ok.data.shouye;
            })            
        },1000);
    },
 methods:{
     img(){
         window.location.href="http://localhost:8080/#/change";
     }
 }

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
       display:inline-block;
       width:0.5rem;
       height:0.25rem; 
       margin-left:0.25rem; 
       margin-top:-0.1rem;
    }
    #img2{
      width:0.25rem;
      height:0.2rem;
      margin-top:-0.03rem;
      margin-left:0.35rem;
    }
    a:-webkit-any-link{
        text-decoration: none;
        font-size:0.16rem;
        margin:0 0.05rem;
    }

   #top a:nth-child(1){
        color:rgb(35, 132, 232);
    }
    #top a:nth-child(2){
        color:rgb(159, 120, 96);
    }
    #top a:nth-child(3){
        color:rgb(228, 168, 19);
    }
    #top a:nth-child(4){
        color:rgb(42, 184, 204);
    }
    /* midd */
    #midd{
        display:flex;
        flex-wrap: wrap; 
        margin-top:0.15rem;
    }
    #midd a{
        display:inline-block;
        width:1.5rem;
        height:0.4rem;
        line-height:0.4rem;
        text-align:center;
        background:#f6f6f6;
        text-decoration: none;
        margin-right:0.1rem;
        color:#494949;
        font-size:0.15rem;
        margin-top:0.05rem;
    }
    #midd a:nth-child(1){
        margin-left:0.3rem;
    }
    #midd a:nth-child(3){
        margin-left:0.3rem;
    } 
    
    /* artical */
    #artical{
        width:100%;
        height:1.6rem;
        border-bottom:1px solid #e3e3e3;
        display:flex;
    }

    #left h3{
        font-size:0.17rem;
        font-weight:normal;
        padding-top:0.2rem;
        line-height:0.25rem;
        margin-left:0.2rem;
    }
    #left p{
        font-size:12px;
        color:#aaa;
        line-height:14px;
        margin:12px 0;
        margin-left:0.2rem;
        margin-right:0.1rem;
    }
    img{
        width:1rem;
        height:1.05rem;
        padding-top:0.2rem;
        margin-right:0.2rem;
    }
   #tu3{
       width:0.4rem;
       height:0.4rem;
      margin-left:1.5rem;
   }
</style>