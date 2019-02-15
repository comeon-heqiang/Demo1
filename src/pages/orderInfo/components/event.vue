<template>
  <div>
    <ul class="bcw info data-wrap">
      <li
        v-for="(item,index) of data"
        :key="index"
      >
        <p>
          <img
            :src="serverPath+item.iconName"
            alt=""
          >
          {{item.title}}：
        </p>
        {{item.text}}
      </li>
      <slot name="li-item"></slot>
      <!-- <li>
        <p>
          <img
            :src="serverPath+'icon-duizhang.png'"
            alt=""
          >
          领队：
        </p>
        {{eventInfo.content}}
        <span class="tel">{{eventInfo.contentTel}}</span>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {

    }
  },
  computed: {
    serverPath () {
      return this.$serverPath;
    }
  },
}
</script>

<style scoped lang="scss">
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