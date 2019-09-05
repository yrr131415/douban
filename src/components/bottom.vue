<template>
    <div>
      <div id="bot">
          <img src="../../static/img/dou.png" >
          <div id="word">
              <p id="p1">豆瓣</p>
              <p>我们的精神角落</p>
          </div>
      </div>
       <p id="last">去App Store 免费下载 iOS 客户端</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
   #bot{
       display:flex;
       margin-left:1.2rem;
       margin-top:0.5rem;
   } 
   #bot img{
       width:0.48rem;
       height:0.48rem;
   }
   #word{
       margin-left:0.1rem;
       text-align:left;
       
   }
   #word #p1{
       font-size:0.24rem;
       color:#111111;
       text-align:left;
   }
   #word:nth-child(2){
       font-size:0.14rem;
       color:#111111;
       text-align:center;
   }   
   #last{
       font-size:0.14rem;
       color:#42bd56; 
       text-align:center;
       margin-top:0.1rem;
   }
</style>