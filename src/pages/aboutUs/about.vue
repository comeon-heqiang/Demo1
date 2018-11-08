<template>
    <div class="bcw p10 about">
        <img :src="serverPath+'pic1.jpg'" alt="" mode="widthFix">
        <wxParse :content="aboutContent"></wxParse>
        <img :src="serverPath+'pic3.jpg'" alt="" mode="widthFix">
    </div>
</template>

<script>
import wxParse from "mpvue-wxparse";
export default {
  data() {
    return {
      aboutContent:
        "<p>仙桃是湖北省直管县级市，为武汉城市圈西翼中心城市、亚洲体操之乡，江汉平原中心城市。仙桃原名沔阳，拥有1500多年的建制历史，是荆楚文化的发祥地之一，为冲积平原，西北高而东南低，地势平坦。属于亚热带季风气候区，全年气候温和，雨量充沛。总面积2538平方千米，下辖3街道15镇。2016年总人口156.35万人。</p>"
    };
  },
  computed: {
    serverPath() {
      return this.$serverPath;
    }
  },
  components: {
    wxParse
  }
};
</script>

<style scoped lang="scss">
@import url("~mpvue-wxparse/src/wxParse.css");
.about {
  h2 {
    margin: 30px 0;
    font-size: 18px;
    text-align: center;
  }
  img {
    width: 100%;
  }
}
</style>