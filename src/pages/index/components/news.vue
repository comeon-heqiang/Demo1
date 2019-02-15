<template>
  <div class="news mb20">
    <ul>
      <li
        v-for="(item,index) in newsList"
        :key="index"
        @click="toNewsDetail(item.id)"
      >

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
              <img
                src="/static/images/icon-yuedu.png"
                class="icon-yuedu"
              >
              {{item.hits}}
            </span>
          </p>
        </div>
        <image
          :src="item.thumb"
          class="thumb"
        />

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["newsList"],
  data() {
    return {};
  },
  methods: {
    // 跳转文章详情
    toNewsDetail(id) {
      wx.navigateTo({
        url: "/pages/newsDetail/main?newsId=" + id
      });
    }
  }
};
</script>

<style scoped lang="scss">
.news {
  background: #fff;
  ul {
    li {
      display: flex;
      padding: 16px 12px;
      border-bottom: 1px solid #e4e4e4;

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
</style>