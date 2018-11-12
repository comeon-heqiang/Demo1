<template>
  <div>
    <el-row class="event-header">
      <el-col :span="24" type="flex">
        <el-button type="primary" @click="addEventVisible=true">添加活动</el-button>
      </el-col>
    </el-row>
    <!-- 活动列表 -->
    <el-table :data="eventData" :border="true" :stripe="true">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="title" label="活动名称"></el-table-column>
      <el-table-column prop="startAddress" label="活动地点"></el-table-column>
      <el-table-column prop="startTime" label="活动时间"></el-table-column>
      <el-table-column prop="leader" label="领队"></el-table-column>
      <el-table-column prop="register" label="报名"></el-table-column>
      <el-table-column prop="intro" label="活动简介"></el-table-column>
      <el-table-column prop="addTime" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="delUser(scope.row)" type="danger">删除</el-button>
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="page">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="page" :page-size="10" :pager-count="11" layout="total, prev, pager, next" :total="count">
      </el-pagination>
    </div>
    <!-- 添加活动弹窗 -->
    <el-dialog title="添加活动" :visible.sync="addEventVisible">
      <el-form style="width:750px">
        <el-form-item label="活动名称" :label-width="labelWidth">
          <el-input placeholder="请填写活动名称"></el-input>
        </el-form-item>
        <el-form-item label="活动简介" :label-width="labelWidth">
          <el-input placeholder="请填写活动简介"></el-input>
        </el-form-item>
        <el-form-item label="活动日期" :label-width="labelWidth">
          <el-date-picker type="datetimerange" v-model="eventDate" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </el-form-item>
        <el-row>
          <el-col :span="8">
            <el-form-item label="开始地点" :label-width="labelWidth">
              <el-input placeholder="活动开始地点"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="结束地点" :label-width="labelWidth">
              <el-input placeholder="活动结束地点"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="领队" :label-width="labelWidth">
              <!-- <el-input placeholder="领队"></el-input> -->
              <el-select placeholder="请选择" v-model="selLeader">
                <el-option v-for="item in leader" clearable :key="item.value" :label="item.value" :value="item.value" class="leader">
                  <span>{{item.value}}</span>
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
            <el-form-item label="人数" :label-width="labelWidth">
              <el-input placeholder="活动人数"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="是否推荐" :label-width="labelWidth">
          <el-switch v-model="iselite" active-text="是" inactive-text="否"></el-switch>
        </el-form-item>

        <el-form-item label="活动图片" :label-width="labelWidth">
          <el-upload :action="uploadUrl" list-type="picture-card" ref="upload" accept=".jpg,.jpeg,.png,.JPG,.JPEG" name="file" :file-list="fileList" :limit="5" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :auto-upload="false" :multipl="true" :on-success="uploadSuccess" :before-upload="beforeAvatarUpload">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="内容" :label-width="labelWidth">
          <el-input placeholder="内容"></el-input>
        </el-form-item>
        <el-form-item label="" :label-width="labelWidth">
          <el-button type="primary" @click="submitEvent">立即创建</el-button>
          <el-button type="danger" @click="canelEvent">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import url from "../serverConfig.js";
export default {
  data() {
    return {
      eventData: [],
      page: 1,
      sort: 0,
      count: 0,
      addEventVisible: true,
      labelWidth: "80px",
      eventDate: "",
      iselite: true,
      selLeader: "",
      dialogImageUrl: "",
      dialogVisible: false,
      leader: [
        {
          value: "咖啡渣",

          tel: "15826888343"
        },
        {
          value: "大懒虫",

          tel: "123456789"
        }
      ],
      uploadUrl: "http://localhost:3000/events/upload", //图片上传地址
      fileList: [] //上传文件列表
    };
  },
  created() {
    this.getEventsList();
  },
  methods: {
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
            console.log(res);
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
    delUser(id) {
      this.$confirm("确定删除此活动？删除后不可恢复", "提示", {
        confirmButtonText: "确定",
        calcelButtonText: "取消"
      })
        .then(res => {
          axios({
            method: "POST",
            url: url.delAdmin,
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
                this.getAdminList();
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
          this.$message({
            type: "warning",
            message: "操作取消"
          });
        });
    },
    // 取消创建活动
    canelEvent() {
      this.$confirm("确定取消?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(res => {
          this.addEventVisible = false;
        })
        .catch(err => {});
    },
    // 点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview() {
      console.log(1);
    },
    // 文件上传成功时的钩子
    uploadSuccess() {},
    // 图片上传之前
    beforeAvatarUpload() {},
    // 文件列表移除文件时的钩子
    handleRemove() {},
    // 提交事件
    submitEvent() {
      this.$refs.upload.submit();
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/events.scss";
</style>