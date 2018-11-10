<template>
    <div>
        <el-table :data="adminData">

        </el-table>
    </div>
</template>

<script>
import axios from "axios";
import url from "../serverConfig.js";
export default {
  data() {
    return {
      adminData: ""
    };
  },
  created() {
    this.getAdminList();
  },
  methods: {
    getAdminList() {
      axios({
        url: url.adminList
      })
        .then(res => {
          if (res.data == 200) {
            this.adminData = res.data.result;
          } else {
            this.$message.error("获取管理员列表失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err);
        });
    }
  }
};
</script>

<style scoped>
</style>