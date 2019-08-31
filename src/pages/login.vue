<template>
    <div>
        <div id="top">
          <span @click="fun()">取消</span><span>登录豆瓣</span>
        </div>
       <input type="text" placeholder="邮箱" name="email"><br>
       <div>
           <input type="password" placeholder="Token" id="pwd" name="pwd"><span id="sp"><img src="../../static/img/icon1.jpg"></span>
       </div> 
       <input type="submit" value="登录" id="sub" @click="fun2()">
       <p>使用其他方式登录 & 找回密码</p>
       <div id="bot">
           <a href="http://localhost:8082/#/register">注册豆瓣账号</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">下载豆瓣App</a>
       </div>
    </div>
</template>
<script>
export default {
    methods:{
        fun(){
            this.$router.go(-1);
        },
        fun2(){
             // 得到输入框的内容
            var email=$("input").eq(0).val();
            var pwd=$("input").eq(1).val();
            console.log(email+","+pwd);
            $.ajax({
                url:"http://localhost:3000/login",
                type:"post",
                data:{email,pwd},
                success(data){
                  console.log(data);
                  if(data.linkid==2){
                      alert("登录成功");
                      location.href="http://localhost:8082/#/index";
                  }else if(data.linkid==3){
                      alert("登录失败");
                  }
                }
            })            
        }
    }
}
</script>
<style scoped>
    div{
        font-size:0.2rem;
    }
    #top span:nth-child(1){
        font-size:0.15rem;
        color:#42bd56;
        margin-left:0.15rem;
    }
    #top span:nth-child(2){
        font-size:0.18rem;
        font-weight:bold;
        color:black;
        margin-left:1rem;
    }    
    #top{
        width:100%;
        height:0.5rem;
        border-bottom:1px solid #eee;
        line-height:0.5rem;
        margin-bottom:0.3rem;
    }
    div>input{
        width:3.4rem;
        height:0.4rem;
        margin-left:0.15rem;
        border:1px solid #ccc;
        border-top-left-radius:3px;
        border-top-right-radius:3px;
        outline:0;
        font-size:0.17rem;
        text-indent:0.15rem;
    }
    #sub{
        background:#17aa52;
        border:1px solid #17aa52;
        color:white;
        margin-top:0.15rem;
        border-radius: 3px;
        margin-bottom:0.2rem;
    }
    p{
        font-size:0.15rem;
        color:#aaa;
        text-align:center;
    }
    #bot a{
        width:100%;
        height:1rem;
        font-size:0.15rem;
        color:#42bd56;
        line-height:1rem;
        text-decoration: none;
    }
    #bot a:nth-child(1){
        margin-left:0.78rem;
    }
        #pwd{
        width:3rem;
        height:0.4rem;
        border-right:0;
    }
    #sp{
        display:inline-block;
        width:0.4rem;
        height:0.405rem;
        border:1px solid #ccc;
        vertical-align: middle;
        border-left:0;
    }
    img{
        width:0.3rem;
        height:0.2rem;
        margin:0.1rem  0.1rem 0 0;
    }

</style>