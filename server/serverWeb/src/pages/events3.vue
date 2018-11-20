<template>
  <div>
    <el-row class="event-header">
      <el-col :span="24" type="flex">
        <el-button type="primary" @click="addEventButton">添加活动</el-button>
      </el-col>
    </el-row>
    <!-- 活动列表 -->
    <el-table :data="eventData" :border="true" :stripe="true">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="title" label="活动名称"></el-table-column>
      <el-table-column prop="startAddress" label="活动地点"></el-table-column>
      <el-table-column prop="startTime" label="活动时间"></el-table-column>
      <el-table-column prop="leaderId" label="领队">
        
      </el-table-column>
      <el-table-column prop="register" label="报名"></el-table-column>
      <el-table-column prop="intro" label="活动简介"></el-table-column>
      <el-table-column prop="addTime" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editEvent(scope.row)">编辑</el-button>
          <el-button size="mini" @click="delEvent(scope.row)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="page">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="page" :page-size="10" :pager-count="11" layout="total, prev, pager, next" :total="count">
      </el-pagination>
    </div>
    <!-- 添加活动弹窗 -->
    <el-dialog title="添加活动" :visible.sync="addEventVisible" width="40%" :close-on-click-modal="false">
      <!-- <el-form :model="ruleForm" :rules="rules" ref="ruleForm"> -->
      <el-form :model="ruleForm" ref="ruleForm">
        <el-form-item label="活动名称" :label-width="labelWidth" prop="title">
          <el-input placeholder="请填写活动名称" v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="活动简介" :label-width="labelWidth" prop="intro">
          <el-input placeholder="请填写活动简介" v-model="ruleForm.intro"></el-input>
        </el-form-item>
        <el-form-item label="活动日期" :label-width="labelWidth" prop="time">
          <el-date-picker type="datetimerange" v-model="ruleForm.time" format="yyyy-MM-dd HH:mm:ss" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" @change="dateChange"></el-date-picker>
          <!-- <el-date-picker type="date" v-model="ruleForm.time"  @change="dateChange"></el-date-picker> -->
        </el-form-item>
        <el-row>
          <el-col :span="8">
            <el-form-item label="开始地点" :label-width="labelWidth" prop="startAddress">
              <el-input placeholder="活动开始地点" v-model="ruleForm.startAddress"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="结束地点" :label-width="labelWidth" prop="endAddress">
              <el-input placeholder="活动结束地点" v-model="ruleForm.endAddress"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="领队" :label-width="labelWidth" prop="leaderId">
              <!-- <el-input placeholder="领队"></el-input> -->
              <el-select placeholder="请选择" v-model="ruleForm.leaderId" @change="leaderChange">
                <el-option v-for="item in leaderList" clearable :key="item.name" :label="item.name" :value="item._id" class="leader">
                  <span>{{item.name}}</span>
                  <span>
                    {{item.tel}}
                  </span>
                </el-option>
              </el-select>
            </el-form-item>
            <!-- <el-form-item label="联系方式" :label-width="labelWidth">
          <el-input placeholder="领队联系方式"></el-input>
        </el-form-item> -->
          </el-col>
          <el-col :span="8">
            <el-form-item label="人数" :label-width="labelWidth" prop="places">
              <el-input placeholder="活动人数" v-model.number="ruleForm.places"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="活动价格" :label-width="labelWidth" prop="price">
          <el-input placeholder="活动价格" v-model.number="ruleForm.price"></el-input>
        </el-form-item>
        <el-form-item label="是否推荐" :label-width="labelWidth" prop="iselite">
          <el-switch v-model="ruleForm.iselite" active-text="是" inactive-text="否"></el-switch>
        </el-form-item>

        <el-form-item label="活动图片" :label-width="labelWidth" prop="fileList">
          <!-- <el-upload :action="uploadUrl" 
          list-type="picture-card" 
          ref="upload" 
          accept=".jpg,.jpeg,.png,.JPG,.JPEG"
           name="file" 
           :file-list="fileList" 
           :limit="5" 
           :on-preview="handlePictureCardPreview" 
           :on-remove="handleRemove" 
           :auto-upload="false" 
           :multiple="true" 
           :on-success="uploadSuccess" 
           :before-upload="beforeAvatarUpload">
            <i class="el-icon-plus"></i>
          </el-upload> -->

          <el-upload :action="uploadUrl" list-type="picture-card" ref="upload" accept=".jpg,.jpeg,.png,.JPG,.JPEG" name="file" :file-list="fileList" :limit="5" :on-preview="handlePictureCardPreview" :auto-upload="false" :multiple="true" :before-upload="beforeAvatarUpload" :on-success="uploadSuccess">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="内容" :label-width="labelWidth" prop="content">
          <el-input placeholder="内容" v-model="ruleForm.content"></el-input>
        </el-form-item>
        <el-form-item label="" :label-width="labelWidth">
          <el-button type="primary" @click="submitEvent('ruleForm')" v-if="isCreate">立即创建</el-button>
          <el-button type="primary" @click="updateEvent('ruleForm')" v-else>立即更新</el-button>
          <el-button type="danger" @click="canelEvent('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import url from "../serverConfig.js";
import { resolve } from "url";
import { promises } from "fs";
export default {
  data() {
    return {
      eventData: [],
      page: 1,
      sort: 0,
      count: 0,
      addEventVisible: false,
      labelWidth: "80px",
      leaderList: [],
      fileList: [],
      uploadUrl: "http://localhost:3000/events/upload", //图片上传地址
      isCreate: true, //判断添加还是编辑
      ruleForm: {
        id: "",
        title: "",
        intro: "",
        content: "",
        time: "",
        price: 0,
        startAddress: "",
        endAddress: "",
        leaderId: "",
        places: 0,
        iselite: true,
        fileList: []
      },
      rules: {
        title: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        intro: [{ required: true, message: "请输入活动简介", trigger: "blur" }],
        time: [
          {
            required: true,
            message: "请选择活动日期",
            trigger: "change"
          }
        ],
        startAddress: [
          {
            required: true,
            message: "请输入活动开始地点",
            triggertrigger: "blur"
          }
        ],
        endAddress: [
          { required: true, message: "请输入活动结束地点", trigger: "blur" }
        ],
        leaderId: [
          { required: true, message: "请选择领队", trigger: "change" }
        ],
        places: [
          {
            type: "number",
            required: true,
            message: "必须为数字",
            trigger: "blur"
          }
        ],
        price: [
          {
            type: Number,
            required: true,
            message: "请输入价格",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.getEventsList();
    this.getLeaderList();
  },
  methods: {
    // 获取领队列表
    getLeaderList() {
      axios({
        url: url.leaderList
      })
        .then(res => {
          if (res.data.code == 200) {
            this.leaderList = res.data.message;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 获取活动列表
    getEventsList() {
      axios({
        method: "POST",
        url: url.eventsList,
        data: {
          page: this.page,
          sort: this.sort
        }
      })
        .then(res => {
          if (res.data.code == 200 && res.data.message) {
            this.eventData = res.data.message;
            this.count = res.data.count;
          } else if (res.data.code == 200) {
            this.$message({
              type: "warning",
              message: "暂无更多数据"
            });
          } else {
            this.$message.error("获取活动列表失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err);
        });
    },

    // 删除活动
    delEvent(id) {
      this.$confirm("确定删除此活动？删除后不可恢复", "提示", {
        confirmButtonText: "确定",
        calcelButtonText: "取消"
      })
        .then(res => {
          axios({
            method: "POST",
            url: url.delEvent,
            data: {
              id: id
            }
          })
            .then(res => {
              if (res.data.code == 200 && res.data.message == "success") {
                this.$message({
                  type: "success",
                  message: "删除成功"
                });
                this.getEventsList();
              } else {
                this.$message.error("删除失败");
              }
            })
            .catch(err => {
              console.log(err);
              this.$message.error("删除错误");
            });
        })
        .catch(err => {
          // this.$message({
          //   type: "warning",
          //   message: "操作取消"
          // });
        });
    },
    // 编辑活动
    editEvent(item) {
      this.isCreate = false;
      this.addEventVisible = true;
      this.ruleForm.id = item._id;
      axios({
        method: "POST",
        url: url.editEvent,
        data: {
          id: item._id
        }
      })
        .then(response => {
          let res = response.data;
          if (res.code == 200) {
            this.ruleForm = res.message;
            this.ruleForm.time = [res.message.startTime, res.message.endTime];
            let arr = [];
            if (res.message.thumb) {
              res.message.thumb.forEach(item => {
                // item = {
                //   name: item
                //     .match(/(\/upload\/+).+$/)[0]
                //     .replace("/upload/", ""),
                //   url: item
                // };
                item = {
                  name: item.filename,
                  url: "http://localhost:3000/upload/" + item.filename
                };
                arr.push(item);
              });
            }
            this.fileList = arr;
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error("编辑失败");
        });
    },
    // 更新活动
    updateEvent(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$refs.upload.submit();
        } else {
          this.$message.error("请按规则填写");
          return false;
        }
      });
    },

    // 提交事件
    submitEvent(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$refs.upload.submit();        
        } else {
          this.$message.error("请按规则填写");
          return false;
        }
      });
    },
    // 取消创建活动
    canelEvent(formName) {
      this.$confirm("确定取消?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(res => {
          this.$refs[formName].resetFields();
          this.fileList = [];
          this.ruleForm.fileList = [];
          this.addEventVisible = false;
        })
        .catch(err => {});
    },
    // 点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview() {},
    // 文件上传成功时的钩子
    uploadSuccess(response, file, fileList) {   
      this.$message({
        type: "success",
        message: "图片上传成功"
      });       
      if (this.isCreate) {
        fileList.forEach(item=>{
          console.log(item.response.filename)
          // this.ruleForm.fileList.push(item.response.filename)
        })
        console.log(this.ruleForm.fileList)
        return;
        axios({
          method: "POST",
          url: url.addEvent,
          data: {
            event: this.ruleForm
          }
        })
          .then(res => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: "添加成功"
              });
              this.getEventsList();
              this.$refs["ruleForm"].resetFields();
              this.ruleForm.fileList = [];
              this.fileList = [];
              this.addEventVisible = false;
            } else {
              this.$message.error("添加失败");
            }
          })
          .catch(err => {
            console.log(err);
            this.$message.error("添加错误");
          });
      } 
      //else {
      //   this.ruleForm.fileList = [];
      //   fileList.forEach(item => {
      //     if (!item.response.filename) {
      //       this.ruleForm.fileList.push(item.name);
      //     } else {
      //       this.ruleForm.fileList.push(item.response.filename);
      //     }
      //   });
      //   console.log(this.ruleForm.fileList);
      //   axios({
      //     method: "POST",
      //     url: url.updateEvent,
      //     data: {
      //       event: this.ruleForm
      //     }
      //   })
      //     .then(res => {
      //       if (res.data.code == 200) {
      //         this.$message({
      //           type: "success",
      //           message: "更新成功"
      //         });
      //         this.getEventsList();
      //         this.$refs[formName].resetFields();
      //         this.ruleForm.fileList = [];

      //         this.addEventVisible = false;
      //       } else {
      //         this.$message.error("更新失败");
      //       }
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       this.$message.error("更新错误");
      //     });
      // }
    },
    // 图片上传之前
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    // 文件列表移除文件时的钩子
    handleRemove() {},

    // 日期确定
    dateChange(e) {},
    addEventButton() {
      this.isCreate = true;
      this.addEventVisible = true;
    },
    // 分页箭头点击
    handleSizeChange(val) {
      this.page = val;
      this.getAdminList();
    },
    // 页码点击
    handleCurrentChange(val) {
      this.page = val;
      this.getAdminList();
    },
    leaderChange(e) {
      console.log(e);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/events.scss";
</style>