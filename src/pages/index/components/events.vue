<template>

  <div class="events pd mb20">
    <ul>
      <li
        v-for="(item,index) in eventsList"
        :key="index"
        @click="toEventsDetail(item.id)"
      >
        <image
          :src="item.imgUrl"
          mode="widthFix"
        />
        <p class="title">
          {{item.title}}
        </p>
        <p class="price">
          ￥{{item.price}}
        </p>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
    props:['eventsList'],
    data() {
        return {
            
        }
    },
  methods: {
    // 跳转活动详情
    toEventsDetail(id) {
      wx.navigateTo({
        url: "/pages/eventsDetail/main?eventId=" + id
      });
    }
  }
};
</script>

<style scoped lang="scss">
.events {
  background: #fff;
  padding:0 12px;
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
</style>