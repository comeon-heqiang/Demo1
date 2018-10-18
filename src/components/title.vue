<template>
    <div>
        <div class="title">
            <p>
                <image :src="iconPath" mode="widthFix" />
                {{title}}
            </p>
            <a :href="navTo">更多</a>            
        </div>
    </div>
</template>

<script>
export default {
  props: ["iconPath", "title", "navTo"],
  data() {
    return {};
  },
  mounted() {
    
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;  
  padding: 15px 12px;
  background: #fff;
  image {
    width: 20px;
    vertical-align: sub;
  }
  p {
    flex: 1;
   
  }
  a{
      font-size: 12px;
      color: #999;
      &::after{
        content: '';
        display:inline-block;
        vertical-align: middle;
        width: 5px;
        height: 5px;
        border-top: 1px solid #999;
        border-right: 1px solid #999;
        transform: rotate(45deg);
        margin: -2px 0 0 2px;
      }
  }
}
</style>