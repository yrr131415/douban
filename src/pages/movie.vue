<template>
    <div>
       <pub></pub>
       <div id="midd">
         <p><span>影院热映</span><span>更多</span></p>
          <fu :fuprops="arra"></fu>
         <p><span>免费在线观影</span><span>更多</span></p>
          <fu :fuprops="arrb"></fu>
         <p><span>新片速递</span><span>更多</span></p>
           <fu :fuprops="arrc"></fu>
         <p><span>发现好电影</span><span>更多</span></p>
       </div>
       <div id="box">
          <slider v-for="(v,i) in arr" :key="i" :title="v.title" :href="v.href" :color="v"></slider>
       </div>
       <p id="liulan">分类浏览</p>
       <broswer></broswer>
       <bottom></bottom>
    </div>
</template>
<script>
import pub from '../components/pub';
import slider from '../components/slider';
import broswer from '../components/broswer';
import bottom from '../components/bottom';
import fu from '../components/fu';


export default {
    components:{
        pub,
        fu,
        slider,
        broswer,
        bottom
       
    },
    data(){
      return{
        arr:[],
        arr2:[]
      }
    },
    created(){
      this.axios({
          method:"get",
            url:"/aa"
        }).then((ok)=>{
          console.log(ok.data.faxianhaodianying);
          this.arr=ok.data.faxianhaodianying;
          this.arr2=ok.data.movie;
          console.log(ok.data.movie);
          console.log(ok.data.movie[0].rating.average);
      })
    },
    computed: {
        arra(){
            var demoa=this.arr2.filter((v,i)=>{
                    if(v.rating.average==9.4){
                     return this.arr2[i]
                    }
            });
            return demoa
        },
        arrb(){
            var demob=this.arr2.filter((v,i)=>{
                    if(v.rating.average<8.9){
                     return this.arr2[i]
                    }
            });
            return demob
        },
        arrc(){
            var democ=this.arr2.filter((v,i)=>{
                    if(v.rating.average==9.3){
                     return this.arr2[i]
                    }
            });
            return democ
        }    

    }
}
</script>
<style scoped>
     div{
        font-size:0.2rem;
        color:#494949;
    }
  
    /* midd */
   #midd p{
     line-height:0.5rem;
   }
    #midd>p span:nth-child(1){
      font-size:16.8px;
      color:#111;
      margin-left:0.2rem;
    }
     #midd>p span:nth-child(2){
      font-size:14.4px;
      color:#42bd56;
      margin-right:0.5rem;
      float:right;
    }
    #box{
      width:100%;
      display: flex;
     white-space: nowrap;
     overflow:auto;
    }
    #liulan{
      font-size:16.8px;
      color:#111;
      text-indent:0.1rem;
      margin-top:0.15rem;
      margin-bottom:0.15rem;
    }
    #bigbox{
      display:flex;
      text-align:center;
      overflow:auto;
    }
</style>