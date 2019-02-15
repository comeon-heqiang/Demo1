<template>
  <div>
    <index-swiper :bannerList="bannerList"></index-swiper>
    <title-bar
      iconPath="/static/images/icon-huodong2.png"
      title="推荐活动"
      navTo="/pages/events/main"
    ></title-bar>
    <!-- 推荐活动 -->
    <index-event :eventsList="eventsList"></index-event>
    <title-bar
      iconPath="/static/images/icon-wenzhang.png"
      title="最新文章"
      navTo="/pages/news/main"
    ></title-bar>
    <!-- 最新文章 -->
    <index-news :newsList="newsList"></index-news>
    <title-bar
      iconPath="/static/images/icon-xiangji.png"
      title="最美照片"
      navTo="/pages/photo/main"
    ></title-bar>
    <!-- 最美照片 -->
    <index-photo :photoList="photoList"></index-photo>
   
    <title-bar
      iconPath="/static/images/icon-guanyu.png"
      title="关于我们"
      navTo="/pages/aboutUs/main"
    ></title-bar>
    <!-- 关于我们 -->
    <index-about></index-about>   
  </div>
</template>

<script>
import NavBar from "@/components/navBar.vue";
import TitleBar from "./components/titleBar.vue";
import indexSwiper from "./components/swiper";
import indexEvent from "./components/events";
import indexNews from "./components/news";
import indexPhoto from './components/photo'
import indexAbout from './components/about'
// import Config from "@/config/config";
export default {
  data() {
    return {
      config: "",
      bannerList: [
        {
          imgUrl:
            "http://img.saihuitong.com/2756/img/2852597/15e36ec34dc.jpg?imageView2/1/w/1080/h/380",
          title: "【每周一固定活动】西溪湿地夜走"
        },
        {
          imgUrl:
            "http://img.saihuitong.com/2756/img/2852597/15e3704be1d.jpg?imageView2/1/w/1080/h/380",
          title: "【每周二固定活动】夜爬宝石山"
        },
        {
          imgUrl:
            "http://img.saihuitong.com/2756/img/2852597/15e36d68242.jpg?imageView2/1/w/1080/h/380",
          title: "【每周三固定活动】夜走西湖"
        },
        {
          imgUrl:
            "http://img.saihuitong.com/2756/img/2852597/15e37060039.jpg?imageView2/1/w/1080/h/380",
          title: "【每周四固定活动】夜爬北高峰"
        },
        {
          imgUrl:
            "http://img.saihuitong.com/2756/img/2852597/15e371e042c.jpg?imageView2/1/w/1080/h/380",
          title: "【每周五固定活动】吴山夜爬"
        }
      ],
      eventsList: [
        {
          id: 1,
          imgUrl:
            "http://img.saihuitong.com/2756/img/2843391/15ec15d0502.jpg-cw480h320",
          title: "11月10日 杭州 毅行 自由组队 重在参与 最美杭州体验过程",
          price: "免费"
        },
        {
          id: 2,
          imgUrl:
            "http://img.saihuitong.com/2756/img/2843391/16680cbb854.jpg-cw480h320",
          title: "10月21日 西山公园登高 龙坞 大斗山 小斗山 光明寺水库",
          price: "免费"
        },
        {
          id: 3,
          imgUrl:
            "http://img.saihuitong.com/2756/img/2852592/165ef8d827a.jpg-cw480h320",
          title:
            "2018年10月26日 川藏南线+稻城亚丁古冰川 溪山行+山人行 岁月的诗 走过的足迹 我的世界路过你 ",
          price: "5800"
        },
        {
          id: 4,
          imgUrl:
            "http://img.saihuitong.com/2756/img/2857257/165c6f325bf.jpg-cw480h320",
          title: "2018年10月21日 周日 17:00~19:00 黄龙体育中心羽毛球馆打羽毛球",
          price: "免费"
        }
      ],
      newsList: [
        {
          id: 11,
          title: "户外登山技巧，祝你轻松爬山（二）",
          author: "时光",
          date: "2018-10-18",
          hits: 1,
          thumb:
            "http://img.saihuitong.com/2756/richtext/2852592/165e643d1ea.jpg-cw240h180"
        },
        {
          id: 22,
          title: "户外登山技巧，祝你轻松爬山（一）",
          author: "时光",
          date: "2018-10-18",
          hits: 1,
          thumb:
            "http://img.saihuitong.com/2756/richtext/2852592/165e643d1ea.jpg-cw240h180"
        },
        {
          id: 33,
          title: "山野医学 | 处理毒蛇咬伤，弄不好就截肢了！",
          author: "时光",
          date: "2018-10-18",
          hits: 1,
          thumb:
            "http://img.saihuitong.com/2756/richtext/2852592/165e643d1ea.jpg-cw240h180"
        }
      ],
      photoList: [
        "http://img.saihuitong.com/2756/albumimg/2843391/15e7a01eb48.jpg-cw500h375",
        "http://img.saihuitong.com/2756/albumimg/2843391/15e7a01e528.jpg-cw300h300",
        "http://img.saihuitong.com/2756/albumimg/2843391/15e7a01d1fc.jpg-cw300h300",
        "http://img.saihuitong.com/2756/albumimg/2843391/15e7a01cf0b.jpg-cw300h300",
        "http://img.saihuitong.com/2756/albumimg/2843391/15e7a01c81e.jpg-cw300h300",
        "http://img.saihuitong.com/2756/albumimg/2843391/15e7a01c4ca.jpg-cw300h300",
        "http://img.saihuitong.com/2756/albumimg/2843391/15e7a01be28.jpg-cw300h300"
      ],
      userInfo: {}
    };
  },
  mounted() {
    // this.config = Config.serverPath;
  },
  components: {
    NavBar,
    TitleBar,
    indexSwiper,
    indexEvent,
    indexNews,
    indexPhoto,
    indexAbout
  },

  methods: {}
};
</script>

<style scoped lang="scss">
</style>
