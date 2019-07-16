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
        <el-menu default-active="2" class="el-menu-vertical-demo" :unique-opened="true" :router="true">
          <!-- 用户管理 -->
          <el-submenu v-for="(item,index) in menusList" :index="'1'+index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item-group v-for="(it,i) in item.children">
              <el-menu-item :index="'/index/'+it.path">
                <i class="el-icon-menu"></i>
                {{it.authName}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 右侧 -->
      <el-main class="my-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 引入menus
import { menus } from "../api/http";
import { users } from "../api/http";
export default {
  name: "index",
  data() {
    return {
      // 左侧栏
      menusList: []
    };
  },
  created() {
    menus().then(backData => {
      console.log(backData);
      this.menusList = backData.data.data;
    });
    users({
      pagenum: 1,
      pagesize: 5
    }).then(backData => {
      console.log(backData);
    });
  },
  methods: {
    tologin() {
      this.$confirm("此操作将退出账号, 是否继续?", "警示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
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
