<template>
    <div class="article-list">
        <div class="search">
            <img :src="serverPath+'icon-search.png'" alt="">
            <input type="text" placeholder="请输入搜索内容">
        </div>
        <ul>
            <li v-for="(item,index) in articleData" :key="index" @click="toDetail(item.sasMenuArticle.id)">
                <h2>
                    {{item.sasMenuArticle.title}}
                </h2>
                <p>
                    {{item.summary}}
                </p>
                <div class="info">
                    <span>{{item.sasMenuArticle.userNickname}}</span>
                    <span>2018-11-7</span>
                    <span>
                        <img :src="serverPath+'icon-yuedu.png'" alt="" mode="widthFix">
                        {{item.sasMenuArticleStatistic.totalViewCount}}
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      articleData: [
        {
          summary:
            "行进技巧：下山一定不要跑等1 | 下山一定不要跑不要跳，速度要慢，要小心。下山猛冲对膝盖是最致命的，大部分残废的猛驴都是因为这个。正确的下山方法是：重心偏后并稍降低，前脚站好才把重心移过去，永远要有一只脚...",
          sasMenuArticle: {
            id: 37082,
            menuId: 22324,
            sasId: 2756,
            title: "户外登山技巧，祝你轻松爬山（二）",
            summary: "",
            userId: 2852592,
            userNickname: "大懒虫",
            userAvatar:
              "http://img.saihuitong.com/2756/avatar/2852592/1638bea6d68.jpg-cw100h100",
            content:
              "行进技巧：下山一定不要跑等1 | 下山一定不要跑不要跳，速度要慢，要小心。下山猛冲对膝盖是最致命的，大部分残废的猛驴都是因为这个。正确的下山方法是：重心偏后并稍降低，前脚站好才把重心移过去，永远要有一只脚支撑在地面上。2 | 尽可能减少负重出发之前一定量力而行。即使是去爬座小山，行走的时间超过4个小时也是很正常的。一般情况下负重超过体重的1／4重量，下山就要从保护膝盖的角度控制节奏了，即使是特殊情况，负重也尽量不要超过体重的1／3。3 | 做好充分的准备开始爬山之前，做好充分的准备活动，包括拉伸，让关节、肌肉、韧带等得到良好的预热。也可以用双手手指揉搓膝盖下边缘，促进关节润滑夜的分泌。4 | 尽量使用护膝和登山杖登山杖最好是两根，上臂尽量多的分担腿的负重。很多人鄙视用护具，是觉得太“事儿”了么？不过强烈建议用这两样护具，尤其是登山杖。5 | 穿适合爬山的鞋并且记住一般松软的土地、草地、碎石坡、雪地对膝盖都相对",
            attachmentCount: 0,
            commentPubAuthority: "A",
            recommendState: "R",
            totalCommentCount: 0,
            lastUpdateTime: 1537166534379,
            sort: 4690766534393,
            createTime: 1537166534379,
            articleValid: true
          },
          sasMenuArticleStatistic: {
            articleId: 37082,
            sasId: 2756,
            menuId: 22324,
            totalViewCount: 245,
            totalFavorityCount: 0,
            lastViewerIds: "3268750_;#;_2857257",
            lastViewerAvatars:
              "http://img.saihuitong.com/10/avatar/3268750/1624689ea56.jpg-cw100h100_;#;_http://img.saihuitong.com/10/avatar/2857257/15e4bde16ff.jpg-cw100h100",
            lastViewerNicknames:
              "时光不染 回忆不淡-橘子-蛋蛋很淡淡-1好仔男-下自成蹊、-沈利民-周杨ZHOU Yang-蓬蓬-青火-快樂飛翔",
            lastViewerIPs:
              "111.202.100.116_;#;_220.243.135.159_;#;_180.149.130.150_;#;_112.17.244.229_;#;_124.160.74.194_;#;_60.176.74.213_;#;_220.243.136.209_;#;_112.80.254.52_;#;_203.208.60.56_;#;_54.36.149.23_;#;_101.132.144.145_;#;_112.10.170.171_;#;_112.80.254.186_;#;_112.34.110.149_;#;_61.129.8.203"
          },
          attachments: null,
          firstImgSrc:
            "http://img.saihuitong.com/2756/richtext/2852592/165e643d1ea.jpg-cw160h120",
          categoryNames: ""
        },
        {
          summary:
            "5个基本要领：身体、足部、节奏、呼吸、背部1 |身体身体：行走是全身运动而决不只是脚部运动，注意通过摆臂来平衡身体、调整步态，，背部肩沉背挺，用腹部深呼吸，全脚掌触地。2 |足部足部：全脚掌触地，先是脚跟，...",
          sasMenuArticle: {
            id: 37080,
            menuId: 22324,
            sasId: 2756,
            title: "户外登山技巧，祝你轻松爬山（一）",
            summary: "",
            userId: 2852592,
            userNickname: "大懒虫",
            userAvatar:
              "http://img.saihuitong.com/2756/avatar/2852592/1638bea6d68.jpg-cw100h100",
            content:
              "5个基本要领：身体、足部、节奏、呼吸、背部1 |身体身体：行走是全身运动而决不只是脚部运动，注意通过摆臂来平衡身体、调整步态，，背部肩沉背挺，用腹部深呼吸，全脚掌触地。2 |足部足部：全脚掌触地，先是脚跟，然后到脚尖。3 |节奏节奏：最好的速度是边走边聊而不喘，注意脉搏不要超过90-120/分钟。4 |呼吸呼吸：调匀呼吸，避免岔气，一定要深呼吸。5 |背部背部：沉肩，保持背部挺直，用腹部深呼吸。个和自己速度差不多的同伴同行。8大基本原则：速度控制原则等1 | 速度控制原则不要逞强埋头猛走，这样会大量消耗体力，结果是欲速则不达。如果和好多人一起徒步，最好找一个和自己速度差不多的同伴同行。2 | 体能衡量原则头几次外出徒步的时候最好坚持走若干个小时，而不要计划一定要走多远，通过这样的几次摸底，对自己的能力有所了解之后，再适当增加徒步穿越的强度。3 | 途中休息原则在户外徒步，强身健体只是其中一个目的，不要有过于大强度的",
            attachmentCount: 0,
            commentPubAuthority: "A",
            recommendState: "R",
            totalCommentCount: 0,
            lastUpdateTime: 1537166477411,
            sort: 4690766477425,
            createTime: 1537166477411,
            articleValid: true
          },
          sasMenuArticleStatistic: {
            articleId: 37080,
            sasId: 2756,
            menuId: 22324,
            totalViewCount: 235,
            totalFavorityCount: 0,
            lastViewerIds: "3268750_;#;_3590665",
            lastViewerAvatars:
              "http://img.saihuitong.com/10/avatar/3268750/1624689ea56.jpg-cw100h100_;#;_http://img.saihuitong.com/2756/avatar/3590665/165ff0b9081.jpeg-cw100h100",
            lastViewerNicknames:
              "时光不染 回忆不淡-摩尔-Emily-1好仔男-186****1811-188****6886-安达-沈利民-蓬蓬-青火-快樂飛翔",
            lastViewerIPs:
              "111.202.100.116_;#;_54.36.148.15_;#;_218.0.217.158_;#;_140.205.147.46_;#;_117.85.108.17_;#;_112.17.244.229_;#;_42.90.74.50_;#;_124.160.74.194_;#;_54.36.149.34_;#;_220.181.51.110_;#;_123.125.71.38_;#;_36.110.199.47_;#;_47.100.38.9_;#;_220.181.51.81_;#;_101.132.177.30"
          },
          attachments: null,
          firstImgSrc:
            "http://img.saihuitong.com/2756/richtext/2852592/165e642f768.jpg-cw160h120",
          categoryNames: ""
        },
        {
          summary:
            "其实我早就有写这篇文章的想法了，但考虑到户外风险中，特别是北方，蛇咬是相对罕见的，就一直懒于动笔。直到上周，我在山里做户外培训的时候抓到一只Baby蛇，大家对这只小蛇很感兴趣，我们就简单讨论了一下如何处理...",
          sasMenuArticle: {
            id: 37079,
            menuId: 22324,
            sasId: 2756,
            title: "山野医学 | 处理毒蛇咬伤，弄不好就截肢了！",
            summary: "",
            userId: 2852592,
            userNickname: "大懒虫",
            userAvatar:
              "http://img.saihuitong.com/2756/avatar/2852592/1638bea6d68.jpg-cw100h100",
            content:
              "其实我早就有写这篇文章的想法了，但考虑到户外风险中，特别是北方，蛇咬是相对罕见的，就一直懒于动笔。直到上周，我在山里做户外培训的时候抓到一只Baby蛇，大家对这只小蛇很感兴趣，我们就简单讨论了一下如何处理毒蛇咬伤的问题。当时，有人告诉我要用火烤伤口。。。我发现，大家对如何处理毒蛇咬伤还存在于“找偏方”的认识。过去几年，朋友圈里关于蛇咬处理的传言每年都不变样的刷几次，还有一些专业的户外大号纷纷转发，对于那些内容，我是好笑又好气。在写这篇文章时，我有以下几个题目备选：毒蛇咬伤的紧急处理，你很有可能就是在帮倒忙。关于毒蛇咬伤处理的江湖七大传言。处理毒蛇咬伤，弄不好就截肢了！最后选了一个耸人听闻的。即便这样，我也不是标题党。因为真有不少因处理不当导致截肢的案例。以下是正题，先数落一下这些年关于处理蛇咬的传言：传言1：被毒蛇咬伤，做十字切口放毒被蛇咬了后，你的队友手握明晃晃的匕首，问你要不要切？千万不要。",
            attachmentCount: 0,
            commentPubAuthority: "A",
            recommendState: "R",
            totalCommentCount: 0,
            lastUpdateTime: 1537166273753,
            sort: 4690766273772,
            createTime: 1537166273753,
            articleValid: true
          },
          sasMenuArticleStatistic: {
            articleId: 37079,
            sasId: 2756,
            menuId: 22324,
            totalViewCount: 280,
            totalFavorityCount: 0,
            lastViewerIds: "3736282_;#;_2868676",
            lastViewerAvatars:
              "http://st.saihuitong.com/res/img/avatars/system/7_ava027.jpg_;#;_http://img.saihuitong.com/10/avatar/2868676/15e7a26721e.jpg-cw100h100",
            lastViewerNicknames: "150****2984-胜哥-大懒虫",
            lastViewerIPs:
              "111.202.100.116_;#;_180.149.130.150_;#;_54.36.149.42_;#;_220.181.51.80_;#;_140.205.147.46_;#;_124.160.74.194_;#;_220.181.51.110_;#;_220.181.51.81_;#;_47.100.51.203_;#;_123.125.71.34_;#;_123.125.67.147_;#;_112.80.254.55_;#;_123.125.71.21_;#;_123.125.67.148_;#;_220.181.51.82"
          },
          attachments: null,
          firstImgSrc:
            "http://img.saihuitong.com/2756/img/2852592/large/165e63fede6.jpg-cw160h120",
          categoryNames: ""
        }
      ]
    };
  },
  computed: {
    serverPath() {
      return this.$serverPath;
    }
  },
  methods: {
    //   跳转文章详情
    toDetail(id) {
        wx.navigateTo({
            url: '/pages/newsDetail/main?newsId='+id
         
        })
    }
  }
};
</script>

<style scoped lang="scss">
.article-list {
  background: #fff;
  padding: 10px 0;
}
.search {
  margin: 0 10px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  background: #f9f9f9;
  color: #ccc;
  img {
    width: 20px;
    height: 20px;
  }
  input {
    flex: 1;
    margin-left: 10px;
    height: 35px;
    line-height: 35px;
  }
}
ul {
  li {
    border-bottom: 1px solid #e4e4e4;
    padding: 20px 15px;
    h2 {
      font-size: 15px;
    }
    p {
      color: #8c8c8c;
      margin: 10px 0;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .info {
      font-size: 12px;
      color: #8c8c8c;
      span {
        margin-right: 10px;
      }
      img {
        width: 15px;
      }
    }
  }
}
</style>