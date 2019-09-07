<template>
   <div>
     <count-down v-model="second" @click="start()"></count-down>
   </div>

</template>
<script>
export default {
    data(){
        return{
            second:0
        }
    },
    methods:{
        start(){
            this.second=60
        }
    }
}
</script>
<style scoped>
    
</style>