<template>
  <el-container class="my-container">
    <el-header class="my-header">
      <!-- 头部-分栏 -->
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img class="log" src="../assets/logo.jpg" alt />
          </div>
        </el-col>
        <el-col :span="19">
          <div class="grid-content bg-purple-light">
            <h2 class="title">电商后台管理系统</h2>
          </div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <a class="tolog" @click.prevent="tologin" href="#">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="my-asider">
        <!-- 左侧-elm-ui导航 -->
        <el-menu default-active="2" class="el-menu-vertical-demo" unique-opened="false">
          <!-- 用户管理 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                用户列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 权限管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                角色管理
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-menu"></i>
                权限列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 商品管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                商品列表
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-menu"></i>
                分类参数
              </el-menu-item>
              <el-menu-item index="1-3">
                <i class="el-icon-menu"></i>
                商品分类
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 订单管理 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                订单列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 数据统计 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                数据报表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 右侧 -->
      <el-main class="my-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",
  methods: {
      tologin() {
        this.$confirm('此操作将退出账号, 是否继续?', '警示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
          this.$router.push('/login')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      }
    }
};
</script>

<style lang="less" scoped>
.my-container {
  height: 100%;
  .my-header {
    height: 60px;
    background-color: #b3c0d1;
    .log {
      height: 60px;
    }
    .title {
      text-align: center;
      line-height: 60px;
      color: white;
      font-size: 20px;
    }
    .tolog {
      line-height: 60px;
      text-decoration: none;
      color: black;
      padding: 5px;
    }
  }
  .my-main {
    width: 100%;
    background-color: #e9eef3;
  }
}
</style>
