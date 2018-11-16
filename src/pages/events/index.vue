<template>
  <div class="events">
    <ul>
      <li v-for="(item,index) in eventsData" :key="index" @click="toArticle(item.id)">

        <img :src="item.thumb" alt="" class="thumb">
        <template v-if="item.recommend===1">
          <img src="../../assets/images/icon-tuijian.png" alt="" class="icon-tuijian">
        </template>
        <div class="address">
          <img src="../../assets/images/icon-address2.png" alt="">
          {{item.address}}
        </div>
        <div class="main">
          <div class="title">
            {{item.title}}
          </div>
          <div class="date">
            <img src="../../assets/images/icon-date.png" alt="">
            {{item.date}}
          </div>
          <div class=".price">
            <span>
              ￥{{item.price}}
            </span>
            <span>
              <!-- {{item.status | statusFilter}} -->
              {{text[item.status]}}
            </span>
          </div>

        </div>

      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import url from "../../WebServerAPI.js";
export default {
  data() {
    return {
      text: ["未开始", "报名中", "满员", "已结束"],
      page: 1,
      sort: 0,
      eventsData: [
        {
          id: 1,
          thumb:
            "http://img.saihuitong.com/2756/img/2843391/16339d7f800.jpg-cw480h320",
          title:
            "10月20日 休闲游 吴山-万松书院-玉皇山-八卦田-江洋贩公园 杭帮菜博物馆-白塔火车公园-水澄桥地铁",
          date: "10/20-10/20",
          price: "5",
          address: "浙江杭州",
          TotalNumber: 72, //总人数
          enlists: 10, //已报名
          status: 0, //0 未开始 1 报名中 2 满员 3结束
          recommend: 1 //1 推荐
        },
        {
          id: 2,
          thumb:
            "http://img.saihuitong.com/2756/img/2857257/165c6f325bf.jpg-cw480h320",
          title: "2018年10月21日 周日 17:00~19:00 黄龙体育中心羽毛球馆打羽毛球",
          date: "10/21-10/21",
          price: "免费",
          address: "浙江杭州",
          TotalNumber: 10, //总人数
          enlists: 2, //已报名
          status: 1, //0 未开始 1 报名中 2 满员 3结束
          recommend: 0 //1 推荐
        },
        {
          id: 3,
          thumb:
            "http://img.saihuitong.com/2756/img/2843391/16680cbb854.jpg-cw480h320",
          title: "10月21日 西山公园登高 龙坞 大斗山 小斗山 光明寺水库",
          date: "10/21-10/21",
          price: "免费",
          address: "浙江杭州",
          TotalNumber: 98, //总人数
          enlists: 1, //已报名
          status: 2, //0 未开始 1 报名中 2 满员 3结束
          recommend: 1 //1 推荐
        }
      ]
    };
  },
  created() {
    this.getEventsList();
  },
  methods: {
    // 获取活动列表
    getEventsList() {
      axios({
        method: "GET",
        url:url.eventsList,
        data: {
          page: this.page,
          sort: this.sort
        }
      }).then(res => {
        console.log(res);
      });
    },
    // 跳转文章详情

    toArticle(id) {
      wx.navigateTo({
        url: "/pages/eventsDetail/main?eventId=" + id
      });
    }
  }
};
</script>

<style scoped lang="scss">
.events {
  ul {
    li {
      position: relative;
      margin-bottom: 12px;
      background: #fff;
      .thumb {
        display: block;
        width: 100%;
        height: 250px;
      }
      .icon-tuijian {
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
        height: 40px;
      }
      .address {
        position: absolute;
        top: 15px;
        left: 15px;
        background: #999;
        color: #fff;
        border-radius: 10px;
        padding: 2px 6px;

        img {
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
      }
      .main {
        padding: 12px;
        .title {
          font-size: 15px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .date {
          font-size: 12px;
          display: flex;
          align-items: center;
          margin: 5px 0;
          img {
            width: 20px;
            height: 20px;
            vertical-align: middle;
            margin-right: 5px;
          }
        }
        .price {
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            color: #fb7810;
            font-size: 16px;
            &:last-child {
              color: #999;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>