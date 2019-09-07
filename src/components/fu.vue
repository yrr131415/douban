<template>
    <div id="box">
        <div>
            
            <lunbo v-for="(v,i) in fuprops" :key="i" :imgs="v.images.small" :title="v.title" :id="v.id" >
            </lunbo>
        </div>
    </div>
</template>
<script>
import lunbo from './lunbo';
export default {
    components:{
        lunbo
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
a{
    text-decoration: none;
}  
</style>