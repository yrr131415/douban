<template>
   
        <div id="box">
            <div>
             <shulunbo v-for="(v,i) in fuprops" :key="i" :imgs="v.images.small" :title="v.title"></shulunbo>
            </div>
        </div>
    
</template>
<script>
import shulunbo from './shulunbo';
export default {
    components:{
        shulunbo
    },
    props:{
       fuprops:{
           type:Array,
           required:true
       }
    } 
}
</script>
<style scoped>
 #box>div{
        display:flex;
        text-align:center;
        overflow:auto;
    }   
</style>