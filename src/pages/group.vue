<template>
    <div>
        <router-link to="/login"></router-link>
        <login></login>
    </div>
</template>
<script>
import login from './login';
export default {
    components:{
        login
    }
}
</script>
<style scoped>
    
</style>