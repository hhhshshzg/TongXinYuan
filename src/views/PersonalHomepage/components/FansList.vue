<template>
    <div class="fans-list">
        <!-- 用户列表 -->
        <div v-for="user in users" :key="user.id" class="fan-item">
            <!-- 用户头像 -->
            <img :src="user.avatarUrl" :alt="user.name" class="fan-avatar">
            <div class="fan-info">
                <!-- 用户名 -->
                <p class="fan-name">{{ user.name }}</p>
                <!-- 用户描述 -->
                <p class="fan-description">{{ user.description }}</p>
            </div>
            <!-- 关注按钮 -->
            <el-popover :visible.sync="user.visible" placement="top" :width="160">
                <p>你确定要取消关注吗?</p>
                <div style="text-align: right; margin: 15px">
                    <el-button class="button" size="small" text @click="cancelFollow(user)">取消</el-button>
                    <el-button class="button" size="small" type="primary" @click="confirmFollow(user)">确定</el-button>
                </div>
                <template #reference>
                    <el-button class="button" v-if="user.focus" @click="focus(user)">关注</el-button>
                    <el-button class="button" v-else @click="toggleFollow(user)">已关注</el-button>
                </template>
            </el-popover>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    // 用户列表属性
    users: {
        type: Array,
        required: true
    }
});

// 关注函数
const focus = (user) => {
    user.focus = false;
    user.visible = false;
};

// 切换关注状态
const toggleFollow = (user) => {
    user.visible = !user.visible;
};

// 取消关注
const cancelFollow = (user) => {
    user.visible = false;
};

// 确认关注
const confirmFollow = (user) => {
    user.visible = false;
    user.focus = true;
    // 执行关注逻辑
};
</script>

<style scoped>
/* 用户列表容器 */
.fans-list {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

/* 用户项 */
.fan-item {
    display: flex;
    align-items: center;
    margin-bottom: 3.0rem;
}

/* 用户头像 */
.fan-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
}

/* 用户信息 */
.fan-info {
    flex-grow: 1;
}

/* 用户名 */
/* 华文琥珀体 取消字体加粗*/
.fan-name {
    font-size: 1.0rem;
    font-family: '华文行楷';
    margin: 0;
}

/* 用户描述 */
/* 幼圆 */
.fan-description {
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