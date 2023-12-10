<script setup>
import HeaderVue from './Home/header.vue'

defineProps({
  msg: String
})
</script>

<template>
  <!-- Containers布局容器 -->
  <div class="home">
    <el-container>
      <!-- Header -->
      <el-header>
        <HeaderVue> </HeaderVue>
      </el-header>
      <!-- Layout布局 -->
      <el-row :gutter="20">
        <el-col :span="4">
          <!-- 空白 -->
          空白
        </el-col>
        <el-container>
          <el-col :span="4">
            <!-- Aside -->
            <el-aside width="200px">Aside</el-aside>
          </el-col>
          <el-col :span="12">
            <!-- Main -->
            <el-main>Main</el-main>
          </el-col>
        </el-container>
        <el-col :span="4">
          <!-- 空白 -->
          空白
        </el-col>
      </el-row>
      <!-- Footer -->
      <el-container>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
}
</style>
