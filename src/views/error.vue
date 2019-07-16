<template>
    <div class="my-error">
        <img src="../assets/404.gif" alt="" @click="tologin">
    </div>
</template>

<script>
export default {
name:'error',
created() {
    this.$message.error('哥们你输入的不是正确的地址,点击图片返回登录页')
},
methods: {
    tologin(){
        // 编程式导航
        this.$router.push('/login')
    }
},
}
</script>

<style>
 .my-error{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
</style>
