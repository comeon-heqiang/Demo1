<template>
  <div class="about">
    <ul>
      <li><img
          src="/static/images/icon-qq.png"
          alt=""
        >QQ:3097951776</li>
      <li><img
          src="/static/images/icon-weixin.png"
          alt=""
        >微信：heqiangV587</li>
      <li><img
          src="/static/images/icon-address.png"
          alt=""
        >地址：湖北省仙桃市</li>
      <!-- <li><img :src="config+'/img/bd_logo1.png'" alt="">地址：湖北省仙桃市</li> -->
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.about {
  background: #fff;
  ul {
    margin: 0 12px;
    li {
      margin-bottom: 10px;
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
}
</style>