<template>
    <div>
      
      <div id="bg">
         <p>打开App,浏览更多</p>
         <div id="rig">
            <a href="#">极速下载</a> 
            <a href="#">打开</a>
         </div>
      </div>


    </div>
</template>
<script>

export default {
    components:{
        
    }  
}
</script>

<style scoped>
    div{
        font-size:0.2rem;
    }
    /*bg  */
    #bg{
        width:100%;
        height:0.8rem;
        background:url(../../static/img/bg.jpg) no-repeat;
        background-size: 100% 0.8rem; 
        display:flex;
    }
    #bg p{
        font-size:0.14rem;
        color:#2ca532;
        line-height:0.8rem;
        text-indent:0.2rem;
    }
    #rig{
        margin-top:0.2rem;
        margin-left:1rem;
    }
    #rig a{
        display:inline-block;
        border:1px solid #2ca532;
        font-size:0.13rem;
        color:#2ca532; 
        height:0.22rem;
        line-height:0.22rem;
        text-decoration: none;
        border-radius:3px;
        padding:0 0.1rem;
       
    }
    #rig a:nth-of-type(1){
        color:white;
        background:#2ca532;
    }
</style>