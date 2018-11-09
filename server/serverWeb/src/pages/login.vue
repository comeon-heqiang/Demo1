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
        <input type="text" placeholder="密码" @keyup.enter="submit" v-model="password">
      </div>
      <button @click="submit">登录</button>
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
export default {
  data() {
    return {
      bgPic: "",
      username: "",
      password: "",
      identifyCodes: "1234567890",
      identifyCode: ""
    };
  },
  created() {
    // this.getBgPic();
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
    // 登录
    submit() {
      if (!this.username || !this.password) {
        this.$message({
          type: "warning",
          message: "用户名密码不能为空"
        });
        return;
      }
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
          } else {
            this.$message.error("用户名密码错误");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error("未知错误");
        });
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
.code {
  margin: 400px auto;
  width: 114px;
  height: 40px;
  border: 1px solid red;
}
</style>