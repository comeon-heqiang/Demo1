<template>
  <div>
    <swiper
      :indicator-dots="true"
      class="banner"
      :autoplay="true"
      :interval="5000"
      :duration="500"
      :style="{height:bannerSwiperHeight+'px'}"
    >
      <block
        v-for="(item,index) in eventInfo.thumb"
        :key="index"
      >
        <swiper-item>
          <image
            class="swiper-image"
            :src="item"
            mode="widthFix"
            @load="imgOnload"
          />
        </swiper-item>
      </block>
    </swiper>
    <div class="events-detail">
      <!-- 活动名称  -->
      <div class="data-wrap bcw p10">
        <h2>
          {{eventInfo.title}}
        </h2>
        <div class="price">
          <p>
            费用: <span class="orange">{{eventInfo.price}}</span>/人
          </p>
          <p>
            余位: <span class="theme">({{eventInfo.TotalNumber-eventInfo.enlists}})</span> / 已报名 <span class="theme">({{eventInfo.enlists}})</span>
          </p>
        </div>
      </div>
      <!-- 活动地址 -->
      <ul class="bcw info data-wrap">
        <li>
          <p>
            <img
              :src="serverPath+'icon-jihe.png'"
              alt=""
            >
            集合地：
          </p>
          {{eventInfo.startAddress}}
        </li>
        <li>
          <p>
            <img
              :src="serverPath+'icon-address4.png'"
              alt=""
            >
            目的地：
          </p>
          {{eventInfo.endAddress}}

        </li>
        <li>
          <p>
            <img
              :src="serverPath+'icon-date3.png'"
              alt=""
            >
            活动日期：
          </p>
          {{eventInfo.date}}
        </li>
        <li>
          <p>
            <img
              :src="serverPath+'icon-duizhang.png'"
              alt=""
            >
            领队：
          </p>
          {{eventInfo.content}}
          <span class="tel">{{eventInfo.contentTel}}</span>
        </li>

      </ul>
      <!-- 最近报名 -->
      <div class="application bcw p10 data-wrap">
        <p>
          最近报名：
        </p>
        <ul>
          <li
            v-for="(item,index) in users"
            :key="index"
          >
            <img
              :src="serverPath+item.pic"
              alt=""
            >
          </li>
        </ul>
      </div>
      <div class="detail p10 bcw">
        <wx-parse :content="eventInfo.detail"></wx-parse>
      </div>
      <!-- 活动推荐 -->
      <div class="recommend p10 bcw">
        <h2 class="recomend-title">
          <span>
            活动推荐
          </span>
        </h2>
        <ul>
          <li
            v-for="(item,index) in recommendData"
            :key="index"
            @click="toArticle(item.id)"
          >
            <img
              :src="item.pic"
              alt=""
              mode="widthFix"
            >
            <div>
              <h2>
                {{item.title}}
              </h2>
              <div class="price">
                <template v-if="item.price==0">
                  免费
                </template>
                <template v-else>
                  ￥{{item.price}}
                </template>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="fixed-buy bcw p10">
        <button @click="isModelShow=true">
          我要报名
        </button>
      </div>
    </div>
    <!-- 报名弹窗 -->
    <div
      class="modal-bg"
      @click="isModelShow=false"
      :class="isModelShow?'on':''"
    ></div>
    <div
      class="events-modal modal bcw"
      :class="isModelShow?'on':''"
    >
      <div class="p10">

        <div class="header">
          <img
            :src="eventInfo.thumb[0]"
            alt=""
          >
          <div>
            <h3>
              {{eventInfo.title}}
            </h3>
            余位:{{eventInfo.TotalNumber-eventInfo.enlists}}
          </div>
        </div>
        <!-- 选择批次 -->
        <h3>选择批次:</h3>
        <div class="date">
          <ul>
            <li class="active">{{eventInfo.date}}</li>
          </ul>
        </div>
        <!-- 选择人数 -->
        <h3>选择人数:</h3>
        <div class="num">
          <p class="price">
            ￥{{eventInfo.price}}/人
          </p>
          <div>
            <span @click="changeNum('minus')"></span>
            <input
              type="number"
              v-model.lazy="num"
            >
            <span @click="changeNum('add')"></span>
          </div>
        </div>
      </div>
      <div class="buy">
        <div class="buy-info">
          {{num}}人
          <p>
            批次：{{eventInfo.date}}
          </p>
        </div>
        <div
          class="btn-buy"
          @click="buy"
        >
          全额付款
          <span>
            ￥{{eventInfo.price*num}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import wxParse from "mpvue-wxparse";
export default {
  data () {
    return {
      isModelShow: false,
      bannerSwiperHeight: "",
      eventId: 0,
      num: 1,
      eventInfo: {
        id: 1,
        thumb: [
          "http://img.saihuitong.com/2756/img/2843391/16339d7f800.jpg-cw480h320",
          "http://img.saihuitong.com/2756/img/2843391/16339d7f800.jpg-cw480h320"
        ],
        title:
          "10月20日 休闲游 吴山-万松书院-玉皇山-八卦田-江洋贩公园 杭帮菜博物馆-白塔火车公园-水澄桥地铁",
        tags: ["羽毛球"], //活动标签
        date: "10/20-10/20", //活动日期
        price: "5", //价格
        address: "浙江杭州", //地址
        startAddress:
          "浙江 杭州 西湖 黄龙路1号黄龙体育中心羽毛球馆（老年体育活动中心） ", //起点
        endAddress:
          "浙江 杭州 西湖 黄龙路1号黄龙体育中心羽毛球馆（老年体育活动中心） ", //终点
        content: "胜哥", //联系人
        contentTel: "13516859939", //联系方式
        TotalNumber: 72, //总人数
        enlists: 10, //已报名
        status: 0, //0 未开始 1 报名中 2 满员 3结束
        recommend: 1, //1 推荐
        detail:
          '<div class="rich-text rdoc" id="act-conent"><div><p style="margin-top: 0pt; margin-bottom: 0pt; background: rgb(255, 255, 255);"><span style="font-size: 10.5pt;"><font face="宋体">山水相逢的是一段往事；蝶恋春天的是一种情怀；而我们相遇的，是一个故事。</font></span></p><p style="margin-top: 0pt; margin-bottom: 0pt; background: rgb(255, 255, 255);"><img src="http://img.saihuitong.com/2756/richtext/2852592/166c2c0c34f.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/166c2c0c34f.jpg-w702"><br><img src="http://img.saihuitong.com/2756/richtext/2852592/166c2c0c47a.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/166c2c0c47a.jpg-w702"><br></p><p style="margin-top: 0pt; margin-bottom: 0pt; background: rgb(255, 255, 255);"><span style="font-size: 10.5pt;"><font face="宋体">有些人在我们的生命里，不期而遇，又在寂静的时光里，渐行渐远；有些人一旦入心，便再也不会忘记。时光易老，不忘来路，不改初心</font>……</span><span style="font-size: 10.5pt;"><o:p></o:p></span></p><img src="http://img.saihuitong.com/2756/richtext/2852592/166c2c1eb8b.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/166c2c1eb8b.jpg-w702"><br><img src="http://img.saihuitong.com/2756/richtext/2852592/166c2c1ecf9.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/166c2c1ecf9.jpg-w702"><br><p style="margin-top: 0pt; margin-bottom: 0pt; background: rgb(255, 255, 255);"><span style="font-size: 10.5pt;">&nbsp;</span></p><p style="margin-top: 0pt; margin-bottom: 0pt; background: rgb(255, 255, 255);"><span style="font-size: 10.5pt;">路与路的距离，总可以跋涉；迟与早的距离，总可以追赶；梦与梦的距离，总可以企望；先与后的距离，总可以弥补；成与败的距离，总可以攀越；生与死的距离，总可以看透。</span><span style="font-size: 10.5pt;"><o:p></o:p></span></p><p style="margin-top: 0pt; margin-bottom: 0pt; background: rgb(255, 255, 255);"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="http://img.saihuitong.com/2756/richtext/2852592/166c2c2ff99.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/166c2c2ff99.jpg-w702"><br><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="http://img.saihuitong.com/2756/richtext/2852592/166c2c30107.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/166c2c30107.jpg-w702"><br></p><p style="margin-top: 0pt; margin-bottom: 0pt; background: rgb(255, 255, 255);"><span style="font-size: 10.5pt;">只有心与心的距离，我们无法估摸。远时咫尺若天涯，近时天涯若咫尺。所以我们熟悉着也陌生着，在相距很近的地方，在相距很远的路上。</span><span style="font-size: 10.5pt;"><o:p></o:p></span></p><p style="margin-top: 0pt; margin-bottom: 0pt; background: rgb(255, 255, 255);"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="http://img.saihuitong.com/2756/richtext/2852592/166c2c36882.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/166c2c36882.jpg-w702"><br><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="http://img.saihuitong.com/2756/richtext/2852592/166c2c3687d.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/166c2c3687d.jpg-w702"><br></p><p style="margin-top: 0pt; margin-bottom: 0pt; background: rgb(255, 255, 255);"><span style="font-size: 10.5pt;">关心，不需要甜言蜜语，真诚就好；友谊，不需要朝朝暮暮，记得就好；问候，不需要语句优美，真心就好；爱护，不需要某种形式，温暖就好。</span><span style="font-size: 10.5pt;"><o:p></o:p></span></p><p style="margin-top: 0pt; margin-bottom: 0pt; background: rgb(255, 255, 255);"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="http://img.saihuitong.com/2756/richtext/2852592/166c2c3b6ec.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/166c2c3b6ec.jpg-w702"><br><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="http://img.saihuitong.com/2756/richtext/2852592/166c2c3b6d2.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/166c2c3b6d2.jpg-w702"><br></p><p style="margin-top: 0pt; margin-bottom: 0pt; background: rgb(255, 255, 255);"><span style="font-size: 10.5pt;">流年无恙，浮世清欢，经过了人生的千回百转，经历了岁月的洗礼，生命宛如一条河流，已变得舒缓平静。那些曾经的伤痕，早已风轻云淡；那些曾经的快乐，也恬静成了唇边的一缕微笑。</span></p><p style="margin-top: 0pt; margin-bottom: 0pt; background: rgb(255, 255, 255);"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="http://img.saihuitong.com/2756/richtext/2852592/166c2c41b75.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/166c2c41b75.jpg-w702"><br><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="http://img.saihuitong.com/2756/richtext/2852592/166c2c41b73.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/166c2c41b73.jpg-w702"><br></p><p style="margin-top: 0pt; margin-bottom: 0pt; background: rgb(255, 255, 255);"><span style="font-size: 10.5pt;">岁月无痕，我心已飞过，当人生的熟季，收获了沉甸甸的质感，那安静与简约，何尝不是生命里一份欣欣然的感悟。</span></p></div><div><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="http://img.saihuitong.com/2756/richtext/2852592/162d266c169.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/162d266c169.jpg-w702"><br><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="http://img.saihuitong.com/2756/richtext/2852592/162d266c18a.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/162d266c18a.jpg-w702"><br><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="http://img.saihuitong.com/2756/richtext/2852592/162d266c4a9.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/162d266c4a9.jpg-w702"><br><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="http://img.saihuitong.com/2756/richtext/2852592/162d266c5fd.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/162d266c5fd.jpg-w702"><br></div><div><span style="color: rgb(68, 68, 68); font-size: medium;"><br></span></div><div><span style="color: rgb(68, 68, 68); font-size: medium;">【年会章程】</span></div><div><span style="color: rgb(68, 68, 68); font-size: medium;">D1.09:00 溪山行工作人员就位；</span></div><div><span style="color: rgb(68, 68, 68); font-size: medium;">D2.11:00 溪山行接送人员武林广场等待队员，确认旅游大巴；</span></div><div><span style="color: rgb(68, 68, 68); font-size: medium;">D3.13点旅游大巴出发年会现场；</span></div><div><span style="color: rgb(68, 68, 68); font-size: medium;">D3.14点溪山行队员签到，入场；</span></div><div><span style="color: rgb(68, 68, 68); font-size: medium;">D4.14:00-17:30，年会活动：装扮会场，烤全羊，爬山，逛茶园，秀茶艺，做甜品，KTV，棋牌，手工插花等等活动；</span></div><div><span style="color: rgb(68, 68, 68); font-size: medium;">D5.17:30-20:00，年会晚宴，节目表演；</span></div><div><span style="color: rgb(68, 68, 68); font-size: medium;">D6.20:00，年会结束；</span></div><div><span style="font-size: medium; color: rgb(68, 68, 68);"><font face="宋体">【年会接送车地点】</font></span><span style="font-size: medium; color: rgb(68, 68, 68);">&nbsp;<font face="宋体">武林广场武林门码头（距离年会地点车程1小时，可选择自驾）</font></span></div><div><p><font size="3"><span style="color: rgb(68, 68, 68);"><font face="宋体">【活动时间】&nbsp;</font> </span><span style="color: rgb(68, 68, 68);">201</span><span style="color: rgb(68, 68, 68);">8</span><span style="color: rgb(68, 68, 68);"><font face="宋体">年</font>12<font face="宋体">月</font></span><span style="color: rgb(68, 68, 68);">23</span><span style="color: rgb(68, 68, 68);"><font face="宋体">日</font></span><span style="color: rgb(68, 68, 68);">&nbsp;&nbsp;13</span><span style="color: rgb(68, 68, 68);">:</span><span style="color: rgb(68, 68, 68);">00-20:00；</span></font></p><p><font size="3"><span style="color: rgb(68, 68, 68);"><font face="宋体">【活动咨询】</font></span><span style="color: rgb(68, 68, 68);">&nbsp;</span><span style="color: rgb(68, 68, 68);">13858017607<font face="宋体">，手机和微信哦，</font></span><span style="color: rgb(68, 68, 68);"><o:p></o:p></span></font></p><p><font size="3"><span style="color: rgb(68, 68, 68);"><font face="宋体">【领队】</font> </span><span style="color: rgb(68, 68, 68);">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: rgb(68, 68, 68);"><font face="宋体">大懒虫</font>&nbsp;&nbsp;13858017607</span><span style="color: rgb(68, 68, 68);"><o:p></o:p></span></font></p><p><font size="3"><span style="color: rgb(68, 68, 68);"><font face="宋体">【活动费用】</font> 240<font face="宋体">元</font></span><span style="color: rgb(68, 68, 68);"><o:p></o:p></span></font></p><p><font size="3"><span style="color: rgb(68, 68, 68);">1.<font face="宋体">年会车辆包车来回费用；</font></span><span style="color: rgb(68, 68, 68);"><o:p></o:p></span></font></p><p><font size="3"><span style="color: rgb(68, 68, 68);">2.<font face="宋体">年会保险，</font></span><span style="color: rgb(68, 68, 68);"><font face="宋体">强制性必须购买；</font></span><span style="color: rgb(68, 68, 68);"><o:p></o:p></span></font></p><p><font size="3"><span style="color: rgb(68, 68, 68);">3.<font face="宋体">年会所有费用；</font></span><span style="color: rgb(68, 68, 68);"><o:p></o:p></span></font></p><p><font size="3"><span style="color: rgb(68, 68, 68);"><font face="宋体">【报名交费】</font></span><span style="color: rgb(68, 68, 68);"><o:p></o:p></span></font></p><p><font size="3"><span style="color: rgb(68, 68, 68);">1.<font face="宋体">论坛报名：点击帖子中的：我要参加，仔细填写</font></span><span style="color: rgb(68, 68, 68);">信息</span><span style="color: rgb(68, 68, 68);"><font face="宋体">，便于购买保险以及联系，</font></span><span style="color: rgb(68, 68, 68);"><o:p></o:p></span></font></p><p><font size="3"><span style="color: rgb(68, 68, 68);"><font face="宋体">报名成功后预交</font>240<font face="宋体">元预付款</font></span><span style="color: rgb(68, 68, 68);">；</span><span style="color: rgb(68, 68, 68);">进入临时微信群；</span></font></p><p><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="http://img.saihuitong.com/2756/richtext/2852592/166c2cdc4e0.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/166c2cdc4e0.jpg-w702"><br></p></div></div>'
      },
      users: [
        {
          name: "时光不染",
          pic: "user.jpg"
        },
        {
          name: "时光不染",
          pic: "icon-usercenter.png"
        },
        {
          name: "时光不染",
          pic: "icon-user.png"
        },
        {
          name: "时光不染",
          pic: "user.jpg"
        }
      ],
      recommendData: [
        {
          id: 1,
          title:
            "2018年11月11日 遇见群山遇见你 光棍节西湖群山休闲游 古荡-茅家埠",
          pic:
            "http://img.saihuitong.com/2756/img/2857257/165c7377500.jpg-cw400h400",
          price: 0
        },
        {
          id: 2,
          title: "2018年11月10日 遇见群山遇见你 古荡-云栖竹径 休闲徒步爬山",
          pic:
            "http://img.saihuitong.com/2756/img/2857257/165a76db71f.jpg-cw400h400",
          price: 0
        },
        {
          id: 3,
          title: "2018年12月14日 银装素裹 梦回萍乡 山高水远 武功山",
          pic:
            "http://img.saihuitong.com/2756/img/2852592/163cdcbbce2.jpg-cw400h400",
          price: 555
        },
        {
          id: 4,
          title: "2019年01月12日 三山五岳 新年朝拜 道教名山 三清山",
          pic:
            "http://img.saihuitong.com/2756/img/2852592/163f2df1c4a.jpg-cw400h400",
          price: 650
        }
      ]
    };
  },
  onLoad (options) {
    this.articleId = options.eventId;
  },
  computed: {
    serverPath () {
      return this.$serverPath;
    }
  },
  created () { },
  methods: {
    imgOnload (e) {
      var res = wx.getSystemInfoSync(),
        imgWidth = e.mp.detail.width,
        imgHeight = e.mp.detail.height,
        radio = imgWidth / imgHeight;
      this.bannerSwiperHeight = res.windowWidth / radio;
    },
    // 跳转文章详情
    toArticle (id) {
      wx.navigateTo({
        url: "/pages/eventsDetail/main?eventId=" + id
      });
    },
    // 数量改变
    changeNum (flag) {
      if (flag == "add") {
        this.num++;
      } else if (flag == "minus") {
        if (this.num <= 1) {
          this.num = 1;
        } else {
          this.num--;
        }
      } else {
        if (this.num <= 1) {
          this.num = 1;
        } else {
          console.log(flag)
        }
      }
    },
    // 去付款
    buy () {
      wx.navigateTo({
        url: '/pages/orderInfo/main?id='+this.eventId+'&num=' + this.num + '&price=' + this.num * this.eventInfo.price
      })
    }
  },
  components: {
    wxParse
  }
};
</script>
<style scoped lang="scss">
@import url("~mpvue-wxparse/src/wxParse.css");
.events-detail {
  margin-bottom: 50px;
}
.banner {
  image {
    display: block;
    width: 100%;
  }
}

h2 {
  font-size: 15px;
  line-height: 1.4;
}
.price {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 12px;
  p {
    .orange {
      color: #ff7c07;
      font-size: 15px;
    }
    .theme {
      color: #aa89bd;
    }
  }
}

// 最近报名
.application {
  display: flex;
  align-items: center;
  font-size: 13px;
  ul {
    display: flex;
    align-items: center;
    li {
      margin-right: 10px;
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }
  }
}
// 活动详情
.detail {
  image,
  img {
    width: 100%;
    height: 30px;
  }
}
.fixed-buy {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #e5e5e5;
  button {
    background: #aa89bd;
    color: #fff;
    line-height: 40px;
    height: 40px;
    font-size: 16px;
  }
}
// 活动推荐
.recommend {
  .recomend-title {
    border-top: 1px solid #d9d9d9;
    text-align: center;
    margin-top: 15px;
    span {
      position: relative;
      top: -10px;
      background: #fff;
      padding: 0 10px;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: calc(50% - 5px);
      box-sizing: border-box;
      margin-bottom: 20px;
      img {
        width: 100%;
      }
      div {
        font-size: 12px;
        h2 {
          font-size: inherit;
          line-height: 1.6;
          height: 35px;
          overflow: hidden;
        }
        .price {
          color: #299fff;
        }
      }
    }
  }
}
//报名弹窗
.events-modal {
  h3 {
    color: #666;
    margin-bottom: 15px;
  }
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    img {
      width: 120px;
      height: 120px;
      margin-top: -40px;
    }
    div {
      flex: 1;
      width: 0;
      margin-left: 10px;
      color: #666;
      font-size: 12px;
      h3 {
        font-size: 15px;
        margin-bottom: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .date {
    ul {
      display: flex;
      align-items: center;
      li {
        border: 1px solid #999;
        color: #333;
        padding: 0 10px;
        height: 36px;
        line-height: 36px;
        margin: 0 15px 15px 0;
        border-radius: 4px;
        font-size: 15px;
        text-align: center;
        &.active {
          background-color: #299fff;
          border-color: #299fff;
          color: #fff;
        }
      }
    }
  }
  .num {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      span {
        width: 28px;
        height: 28px;
        color: #299fff;
        text-align: center;
        border: 1px solid #299fff;
        border-radius: 2px;
        position: relative;
        &::before,
        &::after {
          content: "";
          width: 12px;
          height: 2px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: currentColor;
        }
        &:first-child::after {
          display: none;
        }
        &::after {
          transform: translate(-50%, -50%) rotateZ(90deg);
        }
      }
      input {
        height: auto;
        width: 60px;
        padding: 0 10px;
        border-color: #e4e4e4;
        border-style: solid;
        border-width: 1px 0;
        text-align: center;
      }
    }
  }
  .buy {
    margin-top: 50px;
    display: flex;
    align-items: center;
    border-top: 1px solid #cecece;
    background-color: #f6f6f6;

    .buy-info {
      flex: 1;
      color: #666;
      font-size: 13px;
      padding: 0 10px;
    }
    .btn-buy {
      background: rgba(170, 137, 189, 0.8);
      color: #fff;
      text-align: center;
      padding: 10px 40px;
      font-size: 15px;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}

// 活动地址
ul.info {
  li {
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #e4e4e4;
    padding: 10px;
    line-height: 1.5;
    font-size: 13px;

    p {
      min-width: 100px;
      color: #8c8c8c;
    }
    img {
      width: 25px;
      height: 25px;
      margin-right: 5px;
      vertical-align: middle;
    }
    .tel {
      color: #299fff;
      margin-left: 10px;
    }
  }
}
</style>