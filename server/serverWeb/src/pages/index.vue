<template>
    <div class="main">
        <div class="container-header">
            <el-row>
                <el-col :span="4" class="logo">
                    假装有Logo
                </el-col>
                <el-col :span="20">
                    后台管理系统
                </el-col>
            </el-row>
        </div>
        <el-row class="container-main">
            <el-col :span="4" class="main-left height100">
                <el-menu :default-active="$router.path" router class="height100">
                    <el-submenu v-for="(item,index) in $router.options.routes" :index="index" :key="index" v-if="!item.hidden">
                        <!-- {{item.name}} -->
                        <el-menu-item v-for="(child,childIndex) in item.children" :index="child.path" :key="childIndex">
                            {{child.navName}}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" class="main-right height100">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/index.scss";
</style>