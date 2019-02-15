<template>
  <div>
    <div class="event-info">
      <h2>
        {{event.title}}
      </h2>
      <event-info :data="data">       
      </event-info>
    </div>
    
  </div>
</template>

<script>
import eventInfo from './components/event'
export default {
  data () {
    return {
      data: [{
        iconName: 'icon-jihe.png',
        title: '集合地',
        text: '浙江 杭州  少年宫旗杆边'
      }, {
        iconName: 'icon-address4.png',
        title: '目的地',
        text: '浙江 杭州  少年宫'
      }, {
        iconName: 'icon-date3.png',
        title: '活动日期',
        text: '2.19-2.19'
      }],
      event: {
        title: '元宵节 闹花灯 提灯笼走西湖 赏第一个圆月',
        startAddress: '浙江 杭州  少年宫旗杆边 ',
        endAddress: '浙江 杭州  少年宫',
        date: '2.19-2.19'
      }
    }
  },
  onLoad (options) {
    this.event.id = options.id
    this.event.price = options.price
    this.event.num = options.num
  },
  components:{
    eventInfo
  }
}
</script>

<style scoped lang="scss">
.event-info{
  background: #fff;
  h2{
    padding: 20rpx;
    border-bottom: 1px solid #e4e4e4;
    font-size: 32rpx;
  }
}
</style>