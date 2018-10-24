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

<style>

/* this rule will be remove */
* {  
  font-size: 14px;
}
view{
  font-size: 14px;  
}
page{
  background: #f6f6f6;
  color: #333;
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
</style>
