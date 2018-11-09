<template>
    <div class="login-main">
        <div class="login">
            <h2>
                注册
            </h2>
            <div>
                <input type="text" placeholder="登录名" v-model="username">
            </div>
            <div>
                <input type="password" placeholder="密码" @keyup.enter="submit" v-model="password">
            </div>
            <button @click="submit">注册</button>
        </div>
        <p>

        </p>
    </div>
</template>

<script>
import axios from "axios";
import url from "../serverConfig.js";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      bgPic: "",
      username: "",
      password: ""
    };
  },
  created() {
    // this.getBgPic();
  },
  methods: {
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
    // 注册
    submit() {
      if (!this.username || !this.password) {
        this.$message({
          type: "warning",
          message: "用户名密码不能为空"
        });
        return;
      }
      axios({
        url: url.register,
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
              message: "注册成功，跳转登录页"
            });
            setTimeout(() => {
              this.$router.push("/login");
            },1000);
          } else {
            this.$message.error("用户名存在");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error("注册失败！");
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/login.scss";
</style>