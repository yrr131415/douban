<template>
   <div>
       <div id="diary">
         <img id="dou" src="../../static/img/dou.png">
         <div id="right">
            <p><span id="sp1">豆瓣</span>写了日记</p>
            <p id="date">2017-03-01 19:30:41</p>
            <div id="box">
                <h2>豆瓣App 4.12.0 主要更新</h2>
                <p>- 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
            </div>
            <div id="bot">
                <div id="tu">
                   <span><img src="../../static/img/zan.svg">4</span>
                   <span><img src="../../static/img/talk.svg">0</span>
                   <span><img src="../../static/img/change.svg">1</span>
                </div>
                <img src="../../static/img/dot.svg">
            </div>
         </div>
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
    color:#aaa;
}
   #dou{
     width:0.35rem;
     height:0.35rem;
     border-radius:50%;
   } 
   #diary{
       display: flex;
     justify-content: space-around;
      border-bottom:1px solid #d8d8d8;
       margin-top:0.2rem;
   }
   #sp1 {
        font-size:0.17rem;
       color:#494949;
   }
   h2{
       font-size:0.17rem;
       color:#494949;
       font-weight: normal;
        text-indent: 0.2rem;
        line-height:0.4rem;
   }
   #date{
       font-size:0.14rem;
        margin-bottom:0.1rem;
   }
   #right p:nth-of-type(1){
       font-size:16px;
   }
   #box{
       width:3rem;
       height:1rem;
       border:1px solid #d8d8d8;
     
   }
   #box p{
       margin-left: 0.2rem;
   }
   #bot{
       display:flex;
       justify-content: space-between;
       margin-top:0.15rem;
       margin-bottom:0.15rem;
      
   }
   #tu{
        font-size:0.14rem;
   }
   #tu span{
       margin-right:0.1rem;
   }
   #bot img{
       width:0.2rem;
       height:0.2rem;
    
   }
</style>
