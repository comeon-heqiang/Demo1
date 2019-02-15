<template>
  <div class="photo-list mb20">
    <ul>
      <li
        v-for="(item,index) in photoList"
        :key="index"
      >
        <a href="#">
          <img
            :src="item"
            alt=""
          >
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
</template>

<script>
export default {
    props:['photoList'],
    data() {
        return {
            
        }
    },
};
</script>

<style scoped lang="scss">
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
</style>