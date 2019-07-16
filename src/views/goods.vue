<template>
  <div>
      <!-- 面包屑  -->
    <mybread nav1='商品管理' nav2="商品列表"></mybread>   
    <!-- 输入框 -->
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-col>
    <el-col :span="2" class="my-input">
      <div class="grid-content bg-purple-light">
        <el-button type="success" plain>添加用户</el-button>
      </div>
    </el-col>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="200">
    </el-pagination>

  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      input5:'',
      currentPage4:''
    };
  },
  methods: {
      handleSizeChange(){},
      handleCurrentChange(){}
  },
};
</script>

<style lang="less" scoped>
.my-input {
    margin-left: 5px;
}
</style>
