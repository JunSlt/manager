<template>
  <div>
    <!-- 面包屑 -->
    <mybread nav1="权限管理" nav2="权限列表"></mybread>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "rights",
  data() {
      return {
          tableData:''
      }
  },
};
</script>

<style>
</style>
