<template>
  <div class="user-center">
    <div class="user">
      <template v-if="isStatus">
        <img src="/static/images/bg-user.jpg" alt="" class="bg-user">
        <div class="main">
          <img :src="userInfo.avatarUrl" alt="" class="user-pic">
          <div class="nick-name">
            {{userInfo.nickName}}
          </div>

        </div>
        <a href="/pages/setting/main" class="setting">
          <img src="/static/images/icon-setting.png" alt="">
          设置
        </a>
      </template>
      <template v-else>
        <button open-type="getUserInfo" @getuserinfo="getUserInfo">登录</button>
      </template>
    </div>
    <ul>
      <li v-for="(item,index) in Items" :key="index">
        <a :href="item.href">
          <img :src="item.iconPath" alt="" class="icon-item">
          <span>
            {{item.title}}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        nickName: "贺强",
        avatarUrl:
          "http://img.saihuitong.com/10/avatar/3268750/1624689ea56.jpg-cw100h100"
      },
      isStatus: true,
      Items: [
        {
          iconPath: "/static/images/icon-photo2.png",
          title: "我的相片",
          href: "/pages/myPhoto"
        },
        {
          iconPath: "/static/images/icon-act.png",
          title: "活动报名",
          href: "/pages/myAct/main"
        }
      ]
    };
  },
  methods: {
    getUserInfo(e) {
      this.userInfo = e.mp.detail.userInfo;
      this.isStatus = true;
    },
    // 判断对象是否为空
    isEmptyObject(e) {
      var t;
      for (t in e) {
        return true;
      }
      return false;
    },
    // 检测授权状态
    checkSettingStatu(e) {}
  },
  created() {}
};
</script>

<style scoped lang="scss">
.user {
  position: relative;
  .main {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: #fff;
  }

  .bg-user {
    width: 100%;
    height: 200px;
  }
  .user-pic {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
  }
  .nick-name {
    margin: 10px 0;
    font-size: 16px;
  }
}
.user-center {
  ul {
    background: #fff;
    li {
      a {
        display: flex;
        align-items: center;
        line-height: 45px;
        padding-left: 10px;
        border-bottom: 1px solid #e5e5e5;
        color: #505050;
        font-size: 15px;
      }
      .icon-item {
        width: 25px;
        height: 25px;
        margin-right: 10px;
      }
      span {
        flex: 1;
      }
    }
  }
}
.setting{
  position: absolute;
  right: 10px;
  bottom: 15px;
padding:1px 6px;
  background:rgba(255,255,255,.4);
border-radius:8px;
color:#fff;
display:flex;
align-items:center;
  img{
   width: 15px;
   height: 15px; 
   margin-right: 4px;   
  }
}
</style>