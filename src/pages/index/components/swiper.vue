<template>
  <div>
    <div class="banner">
      <swiper
        :indicator-dots="true"
        indicator-color="#fff"
        indicator-active-color="#aa89bd"
        :autoplay="true"
        :interval="5000"
        :duration="500"
        :style="{height:bannerSwiperHeight+'px'}"
      >
        <swiper-item
          v-for="(item,index) in bannerList"
          :key="index"
        >
          <image
            :src="item.imgUrl"
            mode="widthFix"
            @load="imgOnload"
          />
          <div>
            {{item.title}}
          </div>
        </swiper-item>

      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bannerList"],
  data() {
    return {
      bannerSwiperHeight: 0
    };
  },
  methods: {
    imgOnload(e) {
      var res = wx.getSystemInfoSync(),
        imgWidth = e.mp.detail.width,
        imgHeight = e.mp.detail.height,
        radio = imgWidth / imgHeight;
      this.bannerSwiperHeight = res.windowWidth / radio;
    }
  }
};
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  image {
    display: block;
    width: 100%;
  }
  div {
    position: absolute;
    bottom: 20px;
    left: 50%;
    width: 80%;
    line-height: 1.7;
    transform: translateX(-50%);
    background: linear-gradient(to right, transparent, #fff, transparent);
    font-size: 12px;
    color: #666;
    text-align: center;
  }
}
</style>