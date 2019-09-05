<template>
    <div>
       <ul id="uls">
           <li><a href="">经典</a><span>&gt;</span></li>
           <li><a href="">冷门佳片</a><span>&gt;</span></li>
           <li><a href="">豆瓣高分</a><span>&gt;</span></li>
           <li><a href="">动作</a><span>&gt;</span></li>
           <li><a href="">喜剧</a><span>&gt;</span></li>
           <li><a href="">爱情</a><span>&gt;</span></li>
           <li><a href="">悬疑</a><span>&gt;</span></li>
           <li><a href="">恐怖</a><span>&gt;</span></li>
           <li><a href="">科幻</a><span>&gt;</span></li>
           <li><a href="">治愈</a><span>&gt;</span></li>
           <li><a href="">文艺</a><span>&gt;</span></li>
           <li><a href="">成长</a><span>&gt;</span></li>
           <li><a href="">动画</a><span>&gt;</span></li>
           <li><a href="">华语</a><span>&gt;</span></li>
           <li><a href="">欧美</a><span>&gt;</span></li>
           <li><a href="">韩国</a><span>&gt;</span></li>
           <li id="last"><a href="">日本</a><span>&gt;</span></li>
       </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #uls{
        width:100%;
        display:flex;
        flex-wrap: wrap;
    }
    #last{
        border-bottom:none;
    }
    li{
        list-style: none;
        width:49%;
        border: 1px solid #eee;
        height: .42rem;
        line-height: .42rem;
        border-left: none;
        text-indent:0.2rem;
    }
    li a{
        color:#42bd56;
        font-size:0.16rem;
        text-decoration: none;
    }
    span{
        float: right;
        margin-right:.2rem;
         color:#eee;
    }
</style>