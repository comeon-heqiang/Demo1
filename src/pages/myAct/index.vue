<template>
    <div class="order">

        <ul>
            <li v-for="(item,index) in orderData" :key="index">
                <div class="id">
                    <a href="#">
                        {{item.id}}
                    </a>
                    {{orderStatus[item.status]}}
                </div>
                <div class="main">
                    <img :src="item.imgThumb" alt="">
                    <div class="details">
                        <h2>
                            {{item.title}}
                        </h2>
                        <p>
                            时间:{{item.date}}
                        </p>
                        <p>
                            数量:{{item.num}}
                            <span>
                                ￥{{item.price}}
                            </span>
                        </p>
                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
  data() {
    return {
      orderStatus: ["待支付", "支付成功"],
      orderData: [
        {
          id: "20181016142455497405",
          status: 0, //0 待支付 1 支付成功
          imgThumb:
            "http://img.saihuitong.com/2756/img/2843391/16339d7f800.jpg-cw240h180",
          title:
            "10月20日 休闲游 吴山-万松书院-玉皇山-八卦田-江洋贩公园 杭帮菜博物馆-白塔火车公园-水澄桥地铁",
          date: "10.20-10.20",
          num: 1,
          price: 5
        },
        {
          id: "20180815110220930137",
          status: 1, //0 待支付 1 支付成功
          imgThumb:
            "http://img.saihuitong.com/2756/img/2852592/16531def86a.jpg-cw240h180",
          title:
            "2018年08月19日 遇见群山遇见你 西湖群山标毅",
          date: "8.19-8.19",
          num: 1,
          price: 0
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.order {
 
  ul {
    li {
      padding: 12px;
      margin-top: 10px;
       background: #fff;
      border-bottom: 1px solid #e4e4e4;

      .id {
        display: flex;
        color: #299fff;
        font-size: 14px;
        line-height: 30px;
        border-bottom: 1px solid #e4e4e4;
        a {
          flex: 1;
        }
      }
      .main {
        display: flex;
        margin-top: 10px;
        img {
          width: 110px;
          height: 82px;
        }
        .details {
          flex: 1;
          margin-left: 10px;
          color: #505050;
          font-size: 13px;
          line-height: 20px;
          h2 {
            font-size: inherit;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          p {
            font-size: 13px;
            margin-top: 2px;
            display: flex;
            justify-content: space-between;
            span {
              color: #fb7810;
            }
          }
        }
      }
    }
  }
}
</style>