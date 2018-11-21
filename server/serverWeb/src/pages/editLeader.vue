<template>
    <div>
        <!-- 添加领队 -->
        <el-form :model="leaderForm" ref="leaderForm">
            <el-form-item label="姓名" :label-width="labelWidth" prop="name">
                <el-input placeholder="请输入领队名称" v-model="leaderForm.name"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" :label-width="labelWidth" prop="tel">
                <el-input placeholder="请输入领队联系方式" v-model.number="leaderForm.tel"></el-input>
            </el-form-item>
            <el-form-item label="简介" :label-width="labelWidth" prop="intro">
                <el-input placeholder="请输入领队简介" v-model="leaderForm.intro"></el-input>
            </el-form-item>
            <el-form-item label="出生日期" :label-width="labelWidth" prop="birthDate">
                <el-date-picker type="date" v-model="leaderForm.birthDate" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" placeholder="选择领队出生日期" :picker-options="pickerOptions1"></el-date-picker>
            </el-form-item>
            <el-form-item label="地区" :label-width="labelWidth" prop="addressCode">
                <el-cascader :options="areaOptions" v-model="leaderForm.addressCode" @change="areaChange"></el-cascader>
            </el-form-item>
            <el-form-item label="领队图片" :label-width="labelWidth">
                <el-upload action="" :http-request="handleFile" list-type="picture-card" ref="upload" accept=".jpg,.jpeg,.png,.JPG,.JPEG" name="file" :file-list="fileList" :limit="1" :on-preview="handlePictureCardPreview" :auto-upload="false" :multiple="true" :before-upload="beforeAvatarUpload" :before-remove="beforeRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="详细介绍" :label-width="labelWidth" prop="content">
                <!-- <editor-bar></editor-bar> -->
                <div id="editor"></div>
            </el-form-item>
            <el-form-item label="" :label-width="labelWidth">
                <el-button type="primary" @click="submit()" v-if="isCreate">立即创建</el-button>
                <el-button type="primary" @click="submit()" v-else>立即更新</el-button>
                <el-button type="danger" @click="resetForm()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import axios from "axios";
import url from "@/serverConfig.js";
import { regionData, CodeToText } from "element-china-area-data";
// import editorBar from "@/components/editor";
import Editor from "wangeditor";
import "wangeditor/release/wangEditor.min.css";
export default {
  data() {
    return {
      leaderData: [],
      addLeaderVisible: false,
      isCreate: true,
      labelWidth: "80px",
      fileList: [],
      editor: "",
      areaOptions: regionData,
      leaderForm: {
        id: "",
        name: "",
        tel: "",
        intro: "",
        birthDate: "",
        pic: [],
        addressCode: [],
        address: "",
        content: ""
      },
      // 日期选择范围
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    };
  },
  created() {
    let params = this.$route.params;
    if (this.$route.params.id) {
      this.leaderForm.id = params.id;
    }
    this.isCreate = Boolean(params.isCreate);  
    if (!this.isCreate) {
      this.editLeader();
    }
  },
  mounted() {
    this.editor = new Editor("#editor");
    this.editor.customConfig.uploadImgServer =
      "http://localhost:3000/leader/upload";
    this.editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
    this.editor.customConfig.uploadImgHooks = {
      before: function(xhr, editor, files) {
        // 图片上传之前触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
        // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
        // return {
        //     prevent: true,
        //     msg: '放弃上传'
        // }
      },
      success: function(xhr, editor, result) {
        // 图片上传并返回结果，图片插入成功之后触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
      },
      fail: function(xhr, editor, result) {
        // 图片上传并返回结果，但图片插入错误时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
      },
      error: function(xhr, editor) {
        // 图片上传出错时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      },
      timeout: function(xhr, editor) {
        // 图片上传超时时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      },

      // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
      // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
      customInsert: function(insertImg, result, editor) {
        // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
        // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

        // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
        console.log(result);
        for (var i = 0; i < result.data.length; i++) {
          var url = result.data[i].filename;
          insertImg("http://localhost:3000/leader/" + url);
        }
        // result 必须是一个 JSON 格式字符串！！！否则报错
      }
    };
    this.editor.create();
  },
  methods: {
    // 提交
    submit() {
      this.$refs["leaderForm"].validate(valid => {
        if (valid) {
          let form = this.$refs["leaderForm"].$el;
          this.leaderForm.content = this.editor.txt.html();
          let formData = new FormData(form);
          for (var i in this.leaderForm) {
            formData.append(i, this.leaderForm[i]);
          }
          formData.append("file", this.fileList);
          let ajaxUrl = url.addLeader;
          let message = "添加成功";
          if (!this.isCreate) {
            message = "更新成功";
            ajaxUrl = url.updateLeader;
          }
          axios
            .post(ajaxUrl, formData)
            .then(response => {
              let res = response.data;

              if (res.code == 200) {
                this.$message({
                  type: "success",
                  message: message
                });
                this.$router.push("/main/leader");
                this.resetForm();
              }
            })
            .catch(err => {
              console.log(err);
              this.$message.error("错误");
            });
        } else {
          this.$message({
            type: "info",
            message: "请按规则填写"
          });
        }
      });
    },
    // 重置表单
    resetForm() {
      this.fileList = [];
      this.editor.txt.clear();
      this.$refs["leaderForm"].resetFields();
      this.$refs["upload"].clearFiles();
      this.addLeaderVisible = false;
    },
    // 编辑领队
    editLeader() {
      axios({
        method: "POST",
        url: url.editLeader,
        data: {
          id: this.leaderForm.id
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            let message = res.data.message;
            this.addLeaderVisible = true;
            this.leaderForm.name = message.name;
            this.leaderForm.tel = message.tel;
            this.leaderForm.birthDate = message.birthDate;
            this.leaderForm.intro = message.intro;
            this.leaderForm.pic = message.pic;
            this.leaderForm.addressCode = message.addressCode;
            this.leaderForm.content = message.content;
            this.editor.txt.html(this.leaderForm.content);
            this.fileList = [
              {
                name: message.pic,
                url: "http://localhost:3000/leader/" + message.pic
              }
            ];
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err);
        });
    },
    // 地址选择
    areaChange(value) {
      console.log(value);
      this.leaderForm.addressCode = value;
      this.leaderForm.address =
        CodeToText[value[0]] +
        "-" +
        CodeToText[value[1]] +
        "-" +
        CodeToText[value[2]];
    },
    // 添加领队按钮
    addLeaderButton() {
      this.isCreate = true;
      this.addLeaderVisible = true;
    },
    // 图片上传之前
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    // 选择图片
    handleFile(response) {
      this.fileList.push(response.file);
    },
    // 移除文件列表内图片
    beforeRemove(file, fileList) {
      var index = this.fileList.indexOf(file);
      this.fileList.splice(index, 1);
    },
    // 点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview() {}
  },
  components: {
    // editorBar
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/leader.scss";
</style>