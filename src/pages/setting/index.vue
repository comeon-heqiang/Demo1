<template>
    <div class="user-info">
        <ul>
            <li>
                <p>
                    真实姓名
                </p>
                <input type="text" placeholder="请输入真实姓名">
            </li>
            <li>
                <p>
                    性别
                </p>
                <picker bindchange="bindPickerChange" value="{{index}}" range="{{array}}">
                    <input type="text" placeholder="">
                </picker>
            </li>
            <li>
                <p>
                    真实姓名
                </p>
                <input type="text" placeholder="请输入真实姓名">
            </li>
            <li>
                <p>
                    真实姓名
                </p>
                <input type="text" placeholder="请输入真实姓名">
            </li>

        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  }
};
</script>

<style scoped lang="scss">
.user-info {
  background: #fff;
  ul {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e4e4e4;
      padding: 5px 10px;
      p {
        font-size: 15px;
        color: #333;
      }
      input {
        flex: 1;
        padding: 0 10px;
        text-align: right;
        font-size: 15px;
        color: #999;
      }
    }
  }
}
</style>