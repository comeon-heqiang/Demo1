<template>
  <div class="login-main">
    <div class="login">
      <h2>
        登录
      </h2>
      <div>
        <input type="text" placeholder="登录名" v-model="username">
      </div>
      <div>
        <input type="password" placeholder="密码" @keyup.enter="loginAction" v-model="password">
      </div>
      <div class="code">
        <input type="text" placeholder="请输入验证码" @keyup.enter="loginAction" v-model="code">
        <div class="refresh-code" @click="refreshCode">
          <s-identify :identifyCode="identifyCode"></s-identify>
        </div>
      </div>
      <button @click="loginAction">登录</button>
    </div>
    <p>
      没有账号名？
      <router-link to="register">前去注册</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import url from "../serverConfig.js";
import sIdentify from "../components/identify";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      bgPic: "",
      username: "",
      password: "",
      identifyCodes: "1234567890",
      identifyCode: "",
      code: ""
    };
  },
  created() {
    // this.getBgPic();
    if (localStorage.getItem("userName")) {
      this.$message({
        type: "success",
        message: "您已登录"
      });
        this.$router.push("/main");      
    }
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  components: {
    sIdentify
  },
  methods: {
    // 必应每日壁纸接口
    getBgPic() {
      axios({
        url: "/apis"
      }).then(res => {
        var reg = /<url>.*<\/url>/;
        var bgPic = res.data.match(reg)[0].replace(/<[^>]+>/g, "");
        this.bgPic = "http://s.cn.bing.net" + bgPic;
        console.log(this.bgPic);
      });
    },
    loginAction() {
      this.checkForm() && this.submit();
    },
    // 登录
    submit() {
      axios({
        url: url.login,
        method: "POST",
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "登录成功"
            });
            localStorage.setItem("userName", this.username);
            setTimeout(() => {
              this.$router.push("/");
            }, 500);
          } else {
            this.$message.error("用户名密码错误");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error("未知错误");
        });
    },
    // 登录前验证
    checkForm() {
      let isOk = true;
      if (!this.username || !this.password) {
        this.$message({
          type: "warning",
          message: "用户名密码不能为空"
        });
        isOk = false;
      }
      console.log(this.identifyCode);
      if (!this.code) {
        this.$message({
          type: "warning",
          message: "验证码不能为空"
        });
        isOk = false;
      } else if (this.code !== this.identifyCode) {
        this.$message.error("验证码输入错误");
        isOk = false;
      }

      return isOk;
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/login.scss";
.refresh-code {
  width: 114px;
  height: 40px;
}
</style>