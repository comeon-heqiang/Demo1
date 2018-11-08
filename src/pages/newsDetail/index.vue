<template>
  <div>
    <div class="header p10 bcw">
      <h2 class="title">
        {{article.title}}
      </h2>
      <!-- 文章信息 -->
      <div class="info">
        <span>
          {{article.userNickname}}
        </span>
        <span>
          {{article.lastUpdateTime}}
        </span>
        <span>
          <img :src="serverPath+'icon-yuedu.png'" alt="" mode="widthFix">
          {{article.totalViewCount}}
        </span>
      </div>
    </div>

    <!-- 文章内容 -->
    <div class="article bcw p10">
      <wxParse :content="article.content" />
    </div>

    <!-- 上一篇 下一篇 -->
    <div class="prenext_inner bcw p10">
      <a href="/">
        上一篇：无
      </a>
      <a href="/">
        下一篇：
      </a>
    </div>
    <!-- 推荐文章 -->
    <div class="recommend p10 bcw">
      <h2>
        推荐文章
      </h2>
      <ul>
        <li>
          <a href="/">山野医学 | 处理毒蛇咬伤，弄不好就截肢了！</a>
        </li>
        <li>
          <a href="/">山野知识丨野外防雷完全指南</a>
        </li>
        <li>
          <a href="/">关于求救的信号</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import wxParse from "mpvue-wxparse";
export default {
  data() {
    return {
      article: {
        articleId: 0,
        title: "户外登山技巧，祝你轻松爬山（二）",
        userId: 2852592,
        userNickname: "大懒虫",
        userAvatar:
          "http://img.saihuitong.com/2756/avatar/2852592/1638bea6d68.jpg-cw100h100",
        createTime: "2018-11-1",
        lastUpdateTime: "2018-11-7",
        totalViewCount: 280,
        content:
          '<p style="margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255); margin-top: 0px;"><img src="http://img.saihuitong.com/2756/richtext/2852592/165e643d1ea.jpg-w702" data-lazy="http://img.saihuitong.com/2756/richtext/2852592/165e643d1ea.jpg-w702"><br></p><p style="margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255); margin-top: 0px;">行进技巧：下山一定不要跑等</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">1 | 下山一定不要跑<br data-filtered="filtered" style="margin: 0px; padding: 0px; word-wrap: break-word;">不要跳，速度要慢，要小心。下山猛冲对膝盖是最致命的，大部分残废的猛驴都是因为这个。正确的下山方法是：重心偏后并稍降低，前脚站好才把重心移过去，永远要有一只脚支撑在地面上。</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">2 | 尽可能减少负重<br data-filtered="filtered" style="margin: 0px; padding: 0px; word-wrap: break-word;">出发之前一定量力而行。即使是去爬座小山，行走的时间超过4个小时也是很正常的。一般情况下负重超过体重的1／4重量，下山就要从保护膝盖的角度控制节奏了，即使是特殊情况，负重也尽量不要超过体重的1／3。</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">3 | 做好充分的准备</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">开始爬山之前，做好充分的准备活动，包括拉伸，让关节、肌肉、韧带等得到良好的预热。也可以用双手手指揉搓膝盖下边缘，促进关节润滑夜的分泌。</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">4 | 尽量使用护膝和<a href="http://bbs.8264.com/forum-forumdisplay-fid-7-typeid-1180-filter-typeid.html" target="_blank" style="margin: 0px; padding: 0px; word-wrap: break-word; text-decoration-line: none; border: 0px; outline: none 0px; color: rgb(88, 88, 88);"></a><a href="http://bbs.8264.com/forum-24-1.html" target="_blank" style="margin: 0px; padding: 0px; word-wrap: break-word; text-decoration-line: none; border: 0px; outline: none 0px; color: rgb(88, 88, 88);">登山</a>杖<br data-filtered="filtered" style="margin: 0px; padding: 0px; word-wrap: break-word;">登山杖最好是两根，上臂尽量多的分担腿的负重。很多人鄙视用护具，是觉得太“事儿”了么？不过强烈建议用这两样护具，尤其是登山杖。</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">5 | 穿适合爬山的鞋<br data-filtered="filtered" style="margin: 0px; padding: 0px; word-wrap: break-word;">并且记住一般松软的土地、草地、碎石坡、雪地对膝盖都相对友好，不过要注意防滑，还有走碎石路的时候一定要照顾走在你下面的人，不然就太孙子了。</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">6 | 千万不要“锁关节”</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">当大腿过度劳累的时候，走路时就会不自觉的锁关节，就是把腿部伸的笔直，这样可以减轻大腿肌肉的负担，暂时放松肌肉，但是却很容易造成膝劳损，膝冲击伤，脚踝劳损和脚踝扭伤。</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">7 | 注意辨别方位<br data-filtered="filtered" style="margin: 0px; padding: 0px; word-wrap: break-word;">随时要注意所经过的明显得自然标志。如河、湖、岩壁、形状比较有特点的山头等，这样一旦迷路也可以根据这些明显标识来找回来时路。</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">我们<a href="http://www.8264.com/list/242" target="_blank" style="margin: 0px; padding: 0px; word-wrap: break-word; text-decoration-line: none; border: 0px; outline: none 0px; color: rgb(88, 88, 88);">徒步</a>的地区，大都有当地人活动，也可根据小路的大小或有无经常走动的痕迹来进行判断。</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">如果你徒步的路线曾经是热点路线，可以留意路上是否有一些先行徒步爱好者留下的路标。</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">8 | 学习方位判断<br data-filtered="filtered" style="margin: 0px; padding: 0px; word-wrap: break-word;">如果没有携带指南针，在有太阳的时候，结合时间，可以通过看自己的影子，来知道自己大概的前进方向。</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">9 | 把握时间概念</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">徒步的时候，最好带只手表，这样对时间能有一个清晰的概念，知道自己还有多少路程要走。</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">每个地区太阳下山的时间都是有一定的规律的。可以向当地人咨询一下当地太阳落山的时间，根据时间及时地寻找营地或准备休息，徒步的时候要尽量避免走夜路。</p><p style="margin-top: 18px; margin-bottom: 0px; padding: 0px; word-wrap: break-word; border: 0px; color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">10 | 时刻调整步伐<br data-filtered="filtered" style="margin: 0px; padding: 0px; word-wrap: break-word;">有些人在徒步中大多都不会调整步伐、减低重心导致徒步伤痛疲劳。大步行进时，膝盖得不到有效活动，乳酸积累过多会引起酸痛、疲劳。</p><span style="color: rgb(51, 51, 51); font-family: 微软雅黑, Arial, HELVETICA; background-color: rgb(255, 255, 255);">小步慢走可以有效减少乳酸的积累，多活动膝盖可以让乳酸得到迅速释放。容易疲劳的原因大多是在平地跨大步，加快速度来走路。这破坏了有规律的节奏性。如果是长时间走路，不要慌忙。&nbsp;</span>'
      }
    };
  },
  onLoad(options) {
    this.article.articleId = options.articleId;
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
.header {
  text-align: center;
}
.title {
  font-size: 16px;
  margin: 20px 0;
}
.info {
  color: #636363;
  img {
    width: 20px;
    vertical-align: middle;
  }
  span {
    margin-right: 10px;
  }
}

.article {
  line-height: 1.5;
}
.prenext_inner {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #666666;
  a {
    margin-top: 5px;
  }
}
.recommend {
  border-top: 1px solid #ddd;
  h2{
    font-size: 16px;
    margin-bottom: 10px;
  }
  ul {
    li {
      margin-bottom: 10px;
    }
  }
}
</style>