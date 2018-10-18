<template>
    <div class="user-center">
        <div class="user-bg">
            <template v-if="isStatus">
                <img :src="userInfo.avatarUrl" alt="" class="user-pic">
                <div class="nick-name">
                    {{userInfo.nickName}}
                </div>
            </template>
            <template v-else>
                <button open-type="getUserInfo" @getuserinfo="getUserInfo">登录</button>
            </template>
        </div>
        <ul>
            <li v-for="(item,index) in Items" :key="index">
                <a :href="item.href"></a>
                <img :src="item.iconPath" alt="" class="icon-item">
                <span>
                    {{item.title}}
                </span>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      isStatus: false,
      Items: [
        {
          iconPath: "",
          title: "",
          href: ""
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
.user-center {
  .user-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  ul{
      li{
          a{
              display: flex;
              align-items: center;
              
          }
          .icon-item{
              width: 25px;
              height: 25px;              
          }
          span{
              flex: 1;
          }          
      }
  }
}


</style>