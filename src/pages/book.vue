<template>
    <div>
     <pub></pub>
      <div id="midd">
         <p><span>最受关注图书 | 虚构类</span><span>更多</span></p>
         <shufu :fuprops="arr1"></shufu>
         <p><span>最受关注图书 | 非虚构类</span><span>更多</span></p>
         <shufu :fuprops="arr2"></shufu>
         <p><span>豆瓣纸书</span><span>更多</span></p>
         <shufu :fuprops="arr4"></shufu> 
         <p><span>发现好书</span><span>更多</span></p>
          <div id="bookbox">
             <slider v-for="(v,i) in arr5" :key="i" :title="v.title" :href="v.href" :color="v"></slider>
          </div>
      </div>
        <p id="liulan">分类浏览</p>
        <broswer></broswer>
       <bottom></bottom>
      
    </div>
</template>
<script>
import  pub from '../components/pub';
import shufu from '../components/shufu';
import slider from '../components/slider';
import broswer from '../components/broswer';
import bottom from '../components/bottom';
export default {
    components:{
      pub,
      shufu,
      slider,
      broswer,
      bottom
    },
    data(){
      return{
        arr:[],
        arr5:[]
      }
    },
    created(){
      this.axios({
          method:"get",
            url:"/book"
        }).then((ok)=>{
          console.log(ok.data.books);
          this.arr=ok.data.books;
          this.arr5=ok.data.goodBook;
          // console.log(ok.data.books[0].title);
          // console.log(ok.data.books[0].images.small);
      })
    },
    computed: {
        arr1(){
            var demoa=this.arr.filter((v,i)=>{
                    if(v.binding=="精装"){
                     return this.arr[i]
                    }
            });
            return demoa
        },
        arr2(){
            var demob=this.arr.filter((v,i)=>{
                    if(v.binding=="平装"){
                     return this.arr[i]
                    }
            });
            return demob
        },
        arr3(){
            var democ=this.arr.filter((v,i)=>{
                    if(v.binding=="精装"){
                     return this.arr[i]
                    }
            });
            return democ
        },
        arr4(){
            var democ=this.arr.filter((v,i)=>{
                    if(v.rating.average>8){
                     return this.arr[i]
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
    #bookbox{
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
</style>