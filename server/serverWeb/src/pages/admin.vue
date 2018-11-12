<template>
  <div>
    <el-table :data="adminData" :border="true" :stripe="true">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="username" label="管理员"></el-table-column>
      <el-table-column prop="createDate" label="创建时间"></el-table-column>
      <el-table-column prop="lastLoginDate" label="最后登录时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="delUser(scope.row)" type="danger">删除</el-button>
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="page" :page-size="10" :pager-count="11" layout="total, prev, pager, next" :total="count">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "../serverConfig.js";
export default {
  data() {
    return {
      adminData: [],
      page: 1,
      sort: 0,
      count: 0
    };
  },
  created() {
    this.getAdminList();
  },
  methods: {
    // 获取管理员列表
    getAdminList() {
      axios({
        method: "POST",
        url: url.adminList,
        data: {
          page: this.page,
          sort: this.sort
        }
      })
        .then(res => {
          if (res.data.code == 200 && res.data.message) {
           
            this.adminData = res.data.message;
            this.count = res.data.count;
          } else if (res.data.code == 200) {
            this.$message({
              type: "warning",
              message: "暂无更多数据"
            });
          } else {
            this.$message.error("获取管理员列表失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err);
        });
    },
    // 箭头点击
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
      this.$confirm("确定删除此用户？删除后不可恢复", "提示", {
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
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/admin.scss";
</style>