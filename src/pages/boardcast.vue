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
    <diary></diary>
    <diary></diary>
    <diary></diary>
    <diary></diary>
    <diary></diary>
    <diary></diary>
    <diary></diary>
    <diary></diary>
    <diary></diary>
    <diary></diary>
    <p>显示更多广播</p>
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
      font-size:0.16rem;
      color:#42bd56;
     text-align:center;
     margin:0.2rem 0;
  }
</style>