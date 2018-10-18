<template>
  <div>
    <!-- <nav-bar title="首页"></nav-bar> -->
    <div class="banner">
      <swiper :indicator-dots="true" indicator-color="#fff" indicator-active-color="#aa89bd" :autoplay="true" :interval="5000" :duration="500" :style="{height:bannerSwiperHeight+'px'}">
        <block v-for="(item,index) in bannerList" :key="index">
          <swiper-item>
            <image :src="item.imgUrl" mode="widthFix" @load="imgOnload" />
            <div>
              {{item.title}}
            </div>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <title-bar iconPath="../../assets/images/icon-huodong2.png" title="推荐活动" navTo="/pages/events/main"></title-bar>
    <!-- 推荐活动 -->
    <div class="events pd mb20">
      <ul>
        <li v-for="(item,index) in eventsData" :key="index">
          <image :src="item.imgUrl" mode="widthFix" />
          <p class="title">
            {{item.title}}
          </p>
          <p class="price">
            ￥{{item.price}}
          </p>
        </li>
      </ul>
    </div>
    <title-bar iconPath="../../assets/images/icon-wenzhang.png" title="最新文章" navTo="/pages/news/main"></title-bar>
    <!-- 最新文章 -->
    <div class="news mb20">
      <ul>
        <li v-for="(item,index) in newsData" :key="index">
          <a href="#">
            <div class="main">
              <h2>
                {{item.title}}
              </h2>
              <p>
                <span>
                  {{item.author}}
                </span>
                <span>
                  {{item.date}}
                </span>
                <span>
                  <img src="../../assets/images/icon-yuedu.png" class="icon-yuedu">
                  {{item.hits}}
                </span>
              </p>
            </div>
            <image :src="item.thumb" class="thumb" />
          </a>
        </li>
      </ul>
    </div>
    <title-bar iconPath="../../assets/images/icon-xiangji.png" title="最美照片" navTo="/pages/photo/main"></title-bar>
    <!-- 最美照片 -->
    <div class="photo-list mb20">
      <ul>
        <li v-for="(item,index) in photoData" :key="index">
          <a href="#">
            <img :src="item" alt="">
          </a>
        </li>
        <li>
          <a href="/pages/photo/main">
            <span>查看</span>
            <span>更多</span>
          </a>
        </li>
      </ul>
    </div>
    <title-bar iconPath="../../assets/images/icon-guanyu.png" title="关于我们" navTo="/pages/photo/main"></title-bar>
    <!-- 关于我们 -->
    <div class="about">
      <ul>
        <li><img src="../../assets/images/icon-qq.png" alt="">QQ:3097951776</li>
        <li><img src="../../assets/images/icon-weixin.png" alt="">微信：heqiangV587</li>
        <li><img src="../../assets/images/icon-address.png" alt="">地址：湖北省仙桃市</li>
        <!-- <li><img :src="config+'/img/bd_logo1.png'" alt="">地址：湖北省仙桃市</li> -->
      </ul>
    </div>

  </div>
</template>

<script>
import NavBar from "@/components/navBar.vue";
import TitleBar from "@/components/title.vue";
// import Config from "@/config/config";
export default {
  data() {
    return {
      bannerSwiperHeight: 0,
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
      eventsData: [
        {
          imgUrl:
            "http://img.saihuitong.com/2756/img/2843391/15ec15d0502.jpg-cw480h320",
          title: "11月10日 杭州 毅行 自由组队 重在参与 最美杭州体验过程",
          price: "免费"
        },
        {
          imgUrl:
            "http://img.saihuitong.com/2756/img/2843391/16680cbb854.jpg-cw480h320",
          title: "10月21日 西山公园登高 龙坞 大斗山 小斗山 光明寺水库",
          price: "免费"
        },
        {
          imgUrl:
            "http://img.saihuitong.com/2756/img/2852592/165ef8d827a.jpg-cw480h320",
          title:
            "2018年10月26日 川藏南线+稻城亚丁古冰川 溪山行+山人行 岁月的诗 走过的足迹 我的世界路过你 ",
          price: "5800"
        },
        {
          imgUrl:
            "http://img.saihuitong.com/2756/img/2857257/165c6f325bf.jpg-cw480h320",
          title: "2018年10月21日 周日 17:00~19:00 黄龙体育中心羽毛球馆打羽毛球",
          price: "免费"
        }
      ],
      newsData: [
        {
          title: "户外登山技巧，祝你轻松爬山（二）",
          author: "时光",
          date: "2018-10-18",
          hits: 1,
          thumb:
            "http://img.saihuitong.com/2756/richtext/2852592/165e643d1ea.jpg-cw240h180"
        },
        {
          title: "户外登山技巧，祝你轻松爬山（一）",
          author: "时光",
          date: "2018-10-18",
          hits: 1,
          thumb:
            "http://img.saihuitong.com/2756/richtext/2852592/165e643d1ea.jpg-cw240h180"
        },
        {
          title: "山野医学 | 处理毒蛇咬伤，弄不好就截肢了！",
          author: "时光",
          date: "2018-10-18",
          hits: 1,
          thumb:
            "http://img.saihuitong.com/2756/richtext/2852592/165e643d1ea.jpg-cw240h180"
        }
      ],
      photoData: [
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
    TitleBar
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
.pd {
  padding-left: 12px;
  padding-right: 12px;
}
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
    transform: translateX(-50%);
    width: 80%;
    background: linear-gradient(to right, transparent, #fff, transparent);
    font-size: 12px;
    color: #666;
    text-align: center;
    line-height: 1.7;
  }
}
.events {
  background: #fff;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    li {
      width: 49%;
      margin-bottom: 10px;
      image {
        display: block;
        width: 100%;
      }
      .title {
        padding: 5px 5px 10px;
        line-height: 1.8;
        overflow: hidden;
        word-wrap: break-word;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        font-size: 15px;
        color: #ff7c07;
      }
    }
  }
}
.news {
  background: #fff;
  ul {
    li {
      a {
        display: flex;
        padding: 16px 12px;
        border-bottom: 1px solid #e4e4e4;
      }
      .thumb {
        width: 120px;
        height: 90px;
      }
      .main {
        flex: 1;
        h2 {
          font-size: 15px;
          margin-bottom: 20px;
        }
        p {
          color: #999;
          font-size: 13px;
          span {
            margin-right: 8px;
          }
          .icon-yuedu {
            width: 15px;
            height: 10px;
          }
        }
      }
    }
  }
}
.photo-list {
  background: #fff;
  ul {
    height: 200px;
    overflow-x: auto;
    margin-left: 12px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    li {
      margin-top: 6px;
      margin-left: 5px;
      &:first-child {
        width: 250px;
        height: 187px;
        img {
          width: 250px;
          height: 187px;
        }
      }
      &:last-child {
        background: #f2f2f2;
        width: 96px;
        height: 187px;
        text-align: center;
        a {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          line-height: 1.5;
          color: #999;
        }
      }
      img {
        display: block;
        width: 96px;
        height: 91px;
      }
    }
  }
}
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
