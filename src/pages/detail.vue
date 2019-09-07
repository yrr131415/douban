<template>
    <div>
      <pub></pub>
      <bg></bg>
     <div id="mid">
        <div id="left">
          <img src="../../static/img/6.jpg">
          <a href="http://localhost:8080/#/login">请先登录</a>  
        </div>
        <div id="right">
            <img src="../../static/img/8.svg" >
            <img src="../../static/img/7.svg" >
        </div>
     </div>
     <!-- 显示详情 -->
     <div id="xiang">
        <div id="sli">
            <p class="p1">{{text[0].title}}</p>
            <p class="p2">{{text[0].genres}}</p>
                <a href="" class="p2">用App查看影人资料</a>
        </div>
        <img :src="text[0].images.small">
     </div>
     <div id="btn">
         <span>想看</span><span>看过</span>
     </div>
     <diary></diary>
     <diary></diary>
     <diary></diary>
     <diary></diary>
     <diary></diary>
     <bottom></bottom>
</div>
</template>
<script>
import pub from '../components/pub';
import bg from '../components/bg';
import diary from '../components/diary';
import bottom from '../components/bottom';

export default {
    components:{
        pub,
        bg,
        diary,
        bottom
       
    },
    data(){
        return{
           arr2:[],
           text:[]
        }
    },
    created(){
        console.log(this.$route.query.id)
        this.axios({
          method:"get",
            url:"/aa"
        }).then((ok)=>{
            console.log(ok.data.movie)
            this.arr2=ok.data.movie;
            console.log(this.arr2)
          this.text=this.arr2.filter((v,i)=>{
        if(v.id==this.$route.query.id){
            return this.arr2[i];
        }
     })
        console.log(this.text)
    })
}
      

     
}
</script>

<style scoped>
    div{
        font-size:0.2rem;
    }
  #mid{
      width:100%;
      height:0.5rem;
      border-bottom:1px solid #e8e8e8;
      display:flex;
      justify-content: space-between;
  }
  #left img{
      width:0.4rem;
      height:0.4rem;
      border-radius:50%;
      margin-left:0.1rem;
      vertical-align: middle;
      margin-top:0.03rem;
  }
  #left a{
      display:inline-block;
      font-size:0.15rem;
      color:#aaa;
      text-decoration: none;
      vertical-align: middle;
 }
  #right img{
      width:24px;
      height:24px;
      margin:0.15rem 0.1rem 0;
  } 
   /*xiang  */
   
   #xiang{
       display:flex;
       margin-left:0.2rem;
       margin-top:0.2rem;
       justify-content: space-around;
   }
   .p1{
       font-weight:700;
   }
   .p2{
      font-size:0.16rem;
      line-height:0.4rem;
   }
   #xiang img{
       width:1.4rem;
       height:1.9rem;
   }
   #sli a{
       text-decoration:none;
       color:#2ca532;
   }
   /* btn */
   #btn span{
       display:inline-block;
       width:1.6rem;
       height:0.3rem;
       border:1px solid orangered;
       text-align:center;
       line-height:0.3rem;
       border-radius: 4px;
       margin:0.1rem 0.1rem;
       color:orangered;
       font-size:0.14rem;
   }
   
</style>