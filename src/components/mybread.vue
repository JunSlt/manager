<template>
     <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mymb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{nav1}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{nav2}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
name:'mybread',
props:["nav1","nav2"]
}
</script>

<style lang="less" scoped>
.mymb {
    height: 45px;
    line-height: 45px;
    background-color: #d3dce6;
}
</style>
