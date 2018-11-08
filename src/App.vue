<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style lang="scss">

/* this rule will be remove */

page{
  background: #f6f6f6;
  color: #333;
    font-size: 14px;  
}
.mt20{
  margin-top: 20px;
}
.mb20{
  margin-bottom: 20px;
}
.navigator-hover{
  background: none;
  opacity: 1;
}
.data-wrap{
  margin-bottom: 10px;
}
.bcw {
    background-color: #FFF;
}
.p10{
  padding: 10px;
}
.modal-bg {
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  visibility: hidden;
  transition: all 0.3s;
  opacity: 0;
  &.on {
    visibility: visible;
    opacity: 1;
  }
}

.modal {
  position: fixed;
  z-index: 7;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  transform: translateY(100%);
  transition: all 0.5s;
  visibility: hidden;
  &.on {
    transform: translateY(0);
    visibility: visible;
  }
}
</style>
