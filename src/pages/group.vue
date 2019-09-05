<template>
    <div>
     <pub></pub>
     <div id="mid">
        <div id="left">
          <img src="../../static/img/6.jpg">
          <router-link to="/login">请先登录</router-link>
        </div>
        <div id="right">
            <img src="../../static/img/8.svg" >
            <img src="../../static/img/7.svg" >
        </div>
     </div>
     <p>租房找室友</p> 
     <group v-for="(v,i) in arr1" :key="i" :title="v.title" :imgs="v.images.small" :topic1="v.group_topic.time" :topic2="v.group_topic.title"></group>
     <span>更多关于小组</span>

     <p>来聊五块钱</p> 
     <group v-for="(v,i) in arr2" :key="i" :title="v.title" :imgs="v.images.small" :topic1="v.group_topic.time" :topic2="v.group_topic.title"></group>
     <span>来聊五块钱</span> 

     <p>买买买</p> 
     <group v-for="(v,i) in arr3" :key="i" :title="v.title" :imgs="v.images.small" :topic1="v.group_topic.time" :topic2="v.group_topic.title"></group>
     <span>更多关于小组</span> 

     <bottom></bottom>
    </div>
</template>
<script>
import pub from '../components/pub';
import group from '../components/group';
import bottom from '../components/bottom';
export default {
   components:{
       pub,
       group,
       bottom
   },
   data(){
      return{
        arr1:[],
        arr2:[],
        arr3:[]
      }
    },
    created(){
      this.axios({
          method:"get",
            url:"/group"
        }).then((ok)=>{
          console.log(ok);
          this.arr1=ok.data.xiaozua;
          this.arr2=ok.data.xiaozub;
          this.arr3=ok.data.xiaozuc;
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
  p{
      font-size:16.8px;
      color:#111111;
      margin-top:0.2rem;
      text-indent:0.1rem;
  }
  span{
      font-size:0.15rem;
      color:#42bd56;
      margin-left:1.3rem;
  }
</style>