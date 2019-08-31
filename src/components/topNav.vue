<template>
    <div>
       <div id="top">
            <a href=""><img id="img1" src="../../static/img/db.png"></a>
            <router-link to="/movie">电影</router-link>
            <router-link to="/book">图书</router-link>
            <router-link to="/boardcast">广播</router-link>
            <router-link to="/group">小组</router-link>
            <a href="#"><img id="img2" src="../../static/img/search.png"></a>
       </div>
       <div id="midd">
           <a href="#">影院热映</a>
           <a href="#">欧美新碟榜</a>
           <a href="http://localhost:8082/#/register">注册账号</a>
           <a href="http://localhost:8082/#/group">登录豆瓣</a>
       </div>
       <div v-for="(v,i) in arr " :key='i'>
            <div id="artical">
                <div id="left">
                    <h3>{{v.title}}</h3>
                    <p>{{v.con1}}</p>
                    <p>{{v.con2}}</p>
                </div>
                <img :src="v.imgurl">
            </div>
       </div>

    </div>
</template>
<script>
export default {
    components:{

    },
    data(){
    return{
        arr:[
            {
                title:"奇妙的不确定性 Intriguing Uncertainties",
                con1:"展览“奇妙的不确定性”旨在强调当代艺术中某些特定叙事的重要性",
                con2:"展览",
                imgurl:"../../static/img/1.jpg"
            },
            {
                title:"毕加索——一位天才的诞生",
                con1:"“毕加索——一位天才的诞生”划分为五个不同时期：毕加索的“手",
                con2:"展览",
                imgurl:"../../static/img/2.jpg"
            },
            {
                title:"2019中国国际VR/AR虚拟现实增强现实展览会",
                con1:"随着世界多极化、经济全球化、文化多样化、社会信息化深入发展，",
                con2:"展览",
                imgurl:"../../static/img/3.jpg"
            },
            {
                title:"有生之年系列《罗小黑战记》北京场·超前免费观影（不散观影团）",
                con1:"【观影信息】观影名额：127人（免费，每人1张）观影时间：9",
                con2:"电影",
                imgurl:"../../static/img/4.jpg"
            },
            {
                title:"黑色幽默动作大片《冷血追击》不散五城观影团【北京场】超前免费观影",
                con1:"【观影信息】观影名额：100人（免费，每人1张）观影时间：8",
                con2:"电影",
                imgurl:"../../static/img/5.jpg"
            }

    ]
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
        /* background:pink; */
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
    #top>a{
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

</style>