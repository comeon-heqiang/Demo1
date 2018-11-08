<template>
    <div class="login-main" :style="{background:`url(${bgPic}) no-repeat 0 0 / 100% 100%` }">
        <div class="login">
            登录
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bgPic: ""
    };
  },
  created() {
    this.getBgPic();
  },
  methods: {
    getBgPic() {
      axios({
        method: "GET",
        url: "/apis"
      }).then(res => {
        var reg = /<url>.*<\/url>/;
        var bgPic = res.data.match(reg)[0].replace(/<[^>]+>/g, "");
        this.bgPic = "http://s.cn.bing.net" + bgPic;
        console.log(this.bgPic);
      });
    }
  }
};
</script>

<style scoped lang="scss">
.login-main {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login{
    background: #fff;
    color: #fff;
    border-radius: 5px;
    width: 30%;
    height: 300px;
}
</style>