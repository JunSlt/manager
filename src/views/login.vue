<template>
  <div class="login">
    <div class="form-box">
      <h2>用户登录</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="top"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="my-btn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "../api/http";
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 4,
            max: 12,
            message: "长度在 4 到 12 个字符",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 表单验证
          // axios 提交数据
          login(this.ruleForm).then(backData => {
            console.log(backData)
            if (backData.data.meta.status == 200) {
              // 登录成功
              this.$message.success(backData.data.meta.msg);
              // 去首页
              this.$router.push("/index");
              // 保存token
              window.sessionStorage.setItem("token", backData.data.data.token);
            } else if (backData.data.meta.status == 400) {
              // 登录失败
              this.$message.error(backData.data.meta.msg);
              // 啥都不干
            }
          });
        } else {
          //  弹框提示
          this.$message.error("写点啥啊!!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #324152;
  display: flex;
  // 水平方向 对其方式 center居中
  justify-content: center;
  // 垂直方向的对其方式 center 居中
  align-items: center;
  h2 {
    margin-bottom: 20px;
  }
  .form-box {
    width: 580px;
    height: 435px;
    border-radius: 10px;
    background-color: white;
    padding: 60px 40px;
    box-sizing: border-box;
    // 按钮
    .my-btn {
      width: 100%;
    }
  }
}
</style>
