<template>
    <div>
        <div id="top">
            <span @click="fun()">关闭</span>
            <input type="text">
        </div>
        <div id="midd">
           <li><a href="" class="a1">电影</a><p>影院热映</p></li>
           <li><a href="" class="a2">电视</a><p>正在热播</p></li>
           <li><a href="" class="a3">图书</a><p>畅销排行</p></li>
           <li><a href="" class="a4">同城</a><p>周末活动</p></li>
           <li><a href="" class="a5">小组</a><p>志趣相投</p></li>
           <li><a href="" class="a6">音乐</a><p>新碟榜</p></li>
           <li><a href="" class="a7">阅读</a><p>电子书</p></li>
           <li><a href="" class="a8">游戏</a><p>虚拟世界</p></li>
           <li><a href="" class="a9">应用</a><p>玩手机</p></li>
           <li><a href="" class="a10">东西</a><p>心爱之物</p></li>
           <li><a href="" class="a11">FM</a><p>红心歌单</p></li>
           <li><a href="" class="a12">市集</a><p>购买原创</p></li>
        </div>
        <div id="mod">
           <a href="http://localhost:8080/#/register">注册账号</a>
           <a href="http://localhost:8080/#/login">登录豆瓣</a>
           <a href="">使用桌面版</a>
           <a href="">使用豆瓣App</a>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
       fun(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    div{
        font-size:0.2rem;
    }
   #top{
       display:flex;
       width:100%;
       height:0.4rem;
     
       border-bottom:1px solid #f3f3f3;
   }
   #top span{
       font-size:0.16rem;
       color:#42bd56;
       text-indent: 0.1rem;
         line-height:0.4rem;
   }
   input{
       width:2.8rem;
       height:0.3rem;
       border-radius: 4px;
       background:url(../../static/img/s.png)  no-repeat 50% #f3f3f3;
       border:0;
       margin-top:0.05rem;
       margin-left:0.2rem;
       background-size:0.2rem;
       
   }
   /* midd */
   #midd{
       width:100%;
       display:flex;
       flex-wrap: wrap;
       justify-content: space-around;
       
   }
   li{
       list-style:none;
       width:31%;
       margin-top:0.2rem;
       text-align:center;
       
   }
   li a{
       text-decoration: none;
       font-size:0.24rem;
   }
    
   li p{
       color:#999;
       font-size:0.12rem;
   }
   .a1{
       color:rgb(35, 132, 232);
   }
   .a2{
       color:rgb(122, 106, 219);
   }

  .a3{
       color:rgb(159, 120, 96);
   }
   .a4{
       color:rgb(230, 70, 126);
   }
   .a5{
       color:rgb(42, 184, 204);
   }

  .a6{
       color:rgb(244, 143, 46);
   }
   .a7{
       color:rgb(159, 120, 96);
   }
  .a8{
       color:rgb(87, 116, 197);
   }
   .a9{
       color:rgb(89, 108, 221);
   }
   .a10{
       color:rgb(225, 100, 77);
   }
  .a11{
       color:rgb(64, 207, 169);
   }
   .a12{
       color:rgb(66, 189, 86);
   }
   /* mod */
   #mod{
       display:flex;
       width:100%;
       flex-wrap: wrap;
       margin-top:0.2rem;
   }
   #mod a{
       text-decoration: none;
       font-size:0.15rem ;
       color:#42bd56;
       width:49%;
       display:inline-block;
       border:1px solid #f3f3f3;
       height:0.35rem;
       line-height:0.35rem;
       text-align:center;
   }
</style>