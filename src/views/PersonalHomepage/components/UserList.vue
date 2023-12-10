<template>
    <div class="follow-list">
        <!-- 用户列表 -->
        <div v-for="user in user" :key="user.id" class="follower-item">
            <!-- 用户头像 -->
            <img :src="user.avatarUrl" :alt="user.name" class="follower-avatar">
            <div class="follower-info">
                <!-- 用户名 -->
                <p class="follower-name">{{ user.name }}</p>
                <!-- 用户描述 -->
                <p class="follower-description">{{ user.description }}</p>
            </div>
            <!-- 关注按钮 -->
            <el-popover :visible="user.visible" placement="top" :width="160">
                <p>你确定要取消关注吗?</p>
                <div style="text-align: right; margin: 15px">
                    <el-button class="button" size="small" text @click="user.visible = false">取消</el-button>
                    <el-button class="button" size="small" type="primary" @click="user.visible = false">确定</el-button>
                </div>
                <template #reference>
                    <el-button class="button" @click="user.visible = true">已关注</el-button>
                </template>
            </el-popover>
        </div>
    </div>
</template>
  
<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    // 用户列表属性
    user: {
        type: Array,
        required: true
    }
});

const visible = ref(false);
</script>
  
<style scoped>
/* 用户列表容器 */
.follow-list {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

/* 用户项 */
.follower-item {
    display: flex;
    align-items: center;
    margin-bottom: 3.0rem;
}

/* 用户头像 */
.follower-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
}

/* 用户信息 */
.follower-info {
    flex-grow: 1;
}

/* 用户名 */
/* 华文琥珀体 取消字体加粗*/
.follower-name {
    font-size: 1.0rem;
    font-family: '华文行楷';
    margin: 0;
}

/* 用户描述 */
/* 幼圆 */
.follower-description {
    margin: 5px 0 0 0;
    font-family: '幼圆';
    font-size: 0.8rem;
    color: #666;
}

/* 关注按钮 */
.button {
    padding: 0.6rem;
    width: 60px;
    /* 背景颜色 */
    /* background-color: #007bff; */
    text-decoration: none;
    border-radius: 30px;
    /* 添加边框线样式 */
    border: 1px solid #545252;
    /* 字体样式 */
    color: #545252;
    text-align: center;
    font-size: 10px;
}
</style>
