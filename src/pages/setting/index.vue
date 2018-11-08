<template>
  <div>
    <div class="user-info">

      <div class="user-pic" @click="chooseImage">
        <img :src="user.pic" alt="">
      </div>
      <ul>
        <li>
          <img :src="serverPath+'icon-smile.png'" alt="">
          <p>
            姓名
          </p>
          <input type="text" placeholder="请输入真实姓名" v-model="user.name">
        </li>
        <li>
          <img :src="serverPath+'icon-gender.png'" alt="">
          <p>
            性别
          </p>
          <picker @change="bindPickerChange" v-model="user.gender" :range="array">
            {{array[user.gender]}}
          </picker>
        </li>
        <li>
          <img :src="serverPath+'icon-age.png'" alt="">
          <p>
            生日
          </p>
          <picker mode="date" :start="startTime" @change="dateChange" :end="endTime" :value="selectTime">
            {{user.birth }}
          </picker>
        </li>
        <li>
          <img :src="serverPath+'icon-address3.png'" alt="">
          <p>
            所在地
          </p>
          <picker mode="region" @change="bindRegionChange" :value="user.region">
            <div>
              {{user.region[0]}}-{{user.region[1]}}-{{user.region[2]}}
            </div>
          </picker>
        </li>
        <li>
          <img :src="serverPath+'icon-flag.png'" alt="">
          <p>
            个人标签
          </p>
          <input type="text" placeholder="未选择" v-model="user.hobby" disabled @click="tagsClick">
        </li>
        <li>
          <img :src="serverPath+'icon-jianjie.png'" alt="">
          <p>
            简介
          </p>
          <input type="text" placeholder="未填写" v-model="user.intro">
        </li>

      </ul>
      <div class="btn-group">
        <button class="btn-submit" @click="infoSubmit">确定</button>
        <button class="btn-cancel">取消</button>
      </div>
    </div>
    <div class="modal-bg" :class="isModalShow?'on':''" @click="tagsClick"></div>
    <!-- 兴趣爱好选择 -->
    <div class="modal" :class="isModalShow?'on':''">
      <div class="model-head">
        <div @click="modelCancel">
          取消
        </div>
        <div @click="modalConfirm">
          确定
        </div>
      </div>

      <checkbox-group class="checkbox-group" @change="checkboxChange">
        <label class="checkbox" v-for="(item,index) in tags" :key="index">
          <checkbox name="hobby" :value="item.value" :checked="item.checked" />
          {{item.name}}
        </label>
      </checkbox-group>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "", //姓名
        pic: "/static/images/user.jpg",
        gender: 0, //性别
        hobby: ["旅行", "跑步"], //爱好
        region: ["", "", ""], //地区
        birth: "未选择", //出生日期
        intro: "" //个人简介
      },
      array: ["男", "女"],
      startTime: "1960-01-01",
      endTime: "2018-10-27",
      isModalShow: false,
      tmpTags: [],
      tags: [
        //爱好标签
        { name: "旅行", value: "旅行" },
        { name: "徒步", value: "徒步" },
        { name: "跑步", value: "跑步" },
        { name: "摄影", value: "摄影" },
        { name: "骑行", value: "骑行" },
        { name: "亲子", value: "亲子" },
        { name: "自驾", value: "自驾" },
        { name: "露营", value: "露营" },
        { name: "垂钓", value: "垂钓" },
        { name: "漂流", value: "漂流" },
        { name: "划船", value: "划船" }
      ]
    };
  },
  created() {},
  mounted() {
    this.endTime = new Date();
    this.tags.forEach(item => {
      if (this.user.hobby.includes(item.name)) {
        item.checked = true;
      }
    });
  },
  computed: {
    serverPath() {
      return this.$serverPath;
    }
  },
  methods: {
    //性别选择
    bindPickerChange(e) {
      this.user.gender = e.mp.detail.value;
    },
    // 时间选择
    dateChange(e) {
      this.user.birth = e.mp.detail.value;
    },
    // 地区选择
    bindRegionChange(e) {
      this.user.region = e.mp.detail.value;
    },
    // 弹出框爱好选择
    checkboxChange(e) {
      let values = e.mp.detail.value;
      this.tmpTags = values;
      this.tags.forEach(item => {
        if (values.includes(item.name)) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    },
    tagsClick() {
      this.isModalShow = !this.isModalShow;
    },
    // 弹出框取消
    modelCancel() {
      this.isModalShow = !this.isModalShow;
      this.tags.forEach(item => {
        if (this.user.hobby.includes(item.name)) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    },
    // 弹出框确认
    modalConfirm() {
      this.isModalShow = !this.isModalShow;
      this.user.hobby = this.tmpTags;
    },
    // 选择头像
    chooseImage(e) {
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认为9
        sizeType: ["original"], // 指定原图或者压缩图
        sourceType: ["album"], // 指定图片来源
        success: function(res) {
          var tempFilePaths = res.tempFilePaths;
          _this.user.pic = tempFilePaths;
        }
      });
    },
    // 信息修改
    infoSubmit(e) {}
  }
};
</script>

<style scoped lang="scss">
.user-pic {
  background: #f6f4f5;
  padding: 15px 0;
  text-align: center;
  border-bottom: 1px solid #ebebeb;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    // border: 4px solid #fff;
  }
}

.user-info {
  background: #fff;
  ul {
    margin: 0 14px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f0f0f0;
      padding: 13px 0;
      color: #8a8a8a;
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
      p {
        font-size: 15px;
        margin-right: 10px;
      }
      input,
      picker {
        flex: 1;
        text-align: right;
        font-size: 15px;
        color: #2e2e2e;
      }
    }
  }
}


.modal {
 
  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 10px;
    .checkbox {
      display: flex;
      align-items: center;
      width: 61px;
      margin: 10px 5px;
    }
  }
  .model-head {
    display: flex;
    justify-content: space-between;
    height: 44px;
    line-height: 44px;
    border: 1px solid #eee;
    div {
      padding: 0 15px;
      color: #38f;
    }
  }
}
.btn-group {
  display: flex;
  justify-content: space-between;
  margin: 30px 15px 0;
  button {
    width: 48%;
    background-color: #4b0;
    color: #fff;
    font-size: 14px;
    border-radius: 2px;
  }
  .btn-cancel {
    background-color: #f44;
  }
}
</style>