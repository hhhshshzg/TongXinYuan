<script lang="ts" setup>
import { ref } from 'vue'
// Menu菜单组件ts
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>


<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <!-- Element logo -->
    <img style="width: 100px" src="/images/element-plus-logo.svg" alt="Element logo" />
    <!-- 头选项 -->
    <div class="flex-grow" />
    <el-menu-item index="1"> <router-link class="link" to="/">首页</router-link> </el-menu-item>
    <el-menu-item index="2"> <router-link class="link" to="/hot">热点</router-link> </el-menu-item>
    <el-menu-item index="3"> <router-link class="link" to="/">动漫</router-link> </el-menu-item>
    <el-menu-item index="4"> <router-link class="link" to="/">问答</router-link> </el-menu-item>
    <!-- 登录注册 -->
    <router-link class="link" to="/PersonalHomepage">登录</router-link> |
    <router-link class="link" to="/">欢迎界面</router-link>
  </el-menu>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
  text-decoration: none;
}

.link {
  text-decoration: none;
}
</style>
