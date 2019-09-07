<template>
    <div>
        
        <div id="box">
           <div id="con">
               <p id="p1"><img :src="imgs" id="imgs"><span>{{title}}</span><span id="num">2005人</span></p>
               <p id="p2"><span>{{topic1}}</span><span>{{topic2}}</span></p>
           </div>
        </div>
      

    </div>

</template>
<script>
export default {
   props:["title","imgs","topic1","topic2"]
}
</script>
<style ecoped>
  #box{
      font-size:0.15rem;
      color:#aaa;
      line-height:0.4rem;
  }
  #con{
     border-bottom:1px solid #e8e8e8;
     margin-bottom:0.1rem;
  }
  #imgs{
     width:0.4rem;
     height:0.4rem;
     margin-top:0.1rem;
     margin-right:0.1rem;
  }

  #p1 :nth-child(2){
      font-size:0.16rem;
      color:#111111;
  }

  #con{
      margin-left:0.1rem;
  }
  #p2{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      
  }
  #p2 span{
      margin-bottom:0.1rem;
  }
  #num{
      float:right;
      margin-right:0.2rem;
  }
</style>