<template>
    <div class="myFans">
        <div class="title">
            <p>我的粉丝 ({{ myFans }}) </p>
        </div>
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
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const users = computed(() => store.state.users);
const myFans = computed(() => users.value.length);

/**
 * 关注函数
 * @param {Object} user - 用户对象
 */
const focus = (user) => {
    user.focus = false;
    user.visible = false;
};

/**
 * 切换关注状态
 * @param {Object} user - 用户对象
 */
const toggleFollow = (user) => {
    user.visible = !user.visible;
};

/**
 * 取消关注
 * @param {Object} user - 用户对象
 */
const cancelFollow = (user) => {
    user.visible = false;
};

/**
 * 确认关注
 * @param {Object} user - 用户对象
 */
const confirmFollow = (user) => {
    user.visible = false;
    user.focus = !user.focus;
    // 执行关注逻辑
};
</script>

<style scoped>
.myFans {
    padding: 20px;
}

.title {
    font-family: '华文琥珀';
    font-weight: normal;
    font-size: 1.2rem;
    margin-top: 3%;
}

.fans-list {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

.fan-item {
    display: flex;
    align-items: center;
    margin-bottom: 3.0rem;
}

.fan-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
}

.fan-info {
    flex-grow: 1;
}

.fan-name {
    font-size: 1.0rem;
    font-family: '华文行楷';
    margin: 0;
}

.fan-description {
    margin: 5px 0 0 0;
    font-family: '幼圆';
    font-size: 0.8rem;
    color: #666;
}

.button {
    padding: 0.6rem;
    width: 60px;
    border-radius: 30px;
    border: 1px solid #545252;
    color: #545252;
    text-align: center;
    font-size: 10px;
}
</style>