<template>
    <div class="myCollection">
        <div class="header">
            <h3 class="title">我的关注</h3>
            <p class="title2">全部关注: （{{ totalFollows }}）</p>
            <p>
                <button class="HeaderFooter" @click="toggleSelectAll">{{ isBatchMode ? '取消管理' : '批量管理' }}</button>
                <input type="text" class="searchFriends" v-if="!isBatchMode" v-model="searchTerm"
                    :placeholder="showPlaceholder ? '🔍搜索好友' : ''" @focus="showPlaceholder = false"
                    @blur="showPlaceholder = true" />
                <button class="unFollow" v-if="isBatchMode" :disabled="selectedUsers.size === 0">取消关注</button>
            </p>
        </div>

        <div v-if="searchResults.length" class="follow-list">
            <div v-for="u in searchResults" :key="u.id" class="follower-item">
                <img :src="u.avatarUrl" :alt="u.name" class="follower-avatar">
                <div class="follower-info">
                    <p class="follower-name">{{ u.name }}</p>
                    <p class="follower-description">{{ u.description }}</p>
                </div>

                <el-checkbox v-if="isBatchMode" :value="u.id" size="large" @change="updateSelectedUsers(u.id, $event)"
                    style=" width: 18px; height: 16px;background-color: brown; " />
                <el-popover v-else :visible="u.visible" placement="top" :width="160">
                    <p>你确定要取消关注吗?</p>
                    <div style="text-align: right; margin: 15px">
                        <el-button class="button" size="small" text @click="u.visible = false">取消</el-button>
                        <el-button class="button" size="small" type="primary" @click="u.visible = false">确定</el-button>
                    </div>
                    <template #reference>
                        <el-button class="button" @click="u.visible = true">已关注</el-button>
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
const user = computed(() => store.state.user);
const totalFollows = computed(() => user.value.length);
const showPlaceholder = ref(true);
const searchTerm = ref('');
const searchResults = computed(() => {
    return user.value.filter(u => u.name.includes(searchTerm.value));
});
const selectedUsers = ref(new Set());
const isBatchMode = ref(false);
function toggleSelectAll() {
    isBatchMode.value = !isBatchMode.value;
    if (isBatchMode.value) {
        selectedUsers.value = new Set(user.value.map(u => u.id));
    } else {
        selectedUsers.value.clear();
    }
}

function updateSelectedUsers(userId, isSelected) {
    if (isSelected) {
        selectedUsers.value.add(userId);
    } else {
        selectedUsers.value.delete(userId);
    }
}
</script>
  

<style scoped>
/* “我的关注”组件的 CSS 样式 */

.myCollection {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 0 20px;
}

/* 头部容器 */
.header {
    width: 100%;
    height: 150px;
    position: relative;
    flex-direction: column;
    align-items: center;
}

/* 基本 CSS 样式 */

/* 标题：“我的关注” */
.title {
    font-family: '华文琥珀';
    font-weight: normal;
    font-size: 1.4rem;
    margin-top: 3%;
}

/* 全部关注数 */
.title2 {
    font-family: '华文琥珀';
    font-weight: normal;
    font-size: 1.2rem;
    margin-top: 5%;
}

/* 关注管理，垂直居中的文本 */
.HeaderFooter {
    margin-top: 3%;
    font-family: '华文琥珀';
    font-weight: normal;
    font-size: 1.1rem;
    text-align: center;
    width: 80px;
    height: 30px;
    line-height: 30px;
    float: left;
    color: #248fb6;
    border: none;
}

/* 关注搜索输入框 */
.searchFriends {
    /* 宽度：30%，右对齐 */
    margin-top: 3%;
    width: 15%;
    height: 30px;
    float: right;
    border-radius: 20px;
    border: 1px solid #5e5b5b;
    text-align: center;
}

/* 取消关注按钮 */
.unFollow {
    margin-top: 3%;
    font-family: '华文琥珀';
    font-weight: normal;
    font-size: 1.1rem;
    text-align: center;
    width: 80px;
    height: 30px;
    line-height: 30px;
    float: right;
    color: #248fb6;
    border: none;

}

/* 关注列表 */
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

/* 复选框 */
.custom-checkbox {
    --el-checkbox-border-color: red;
    --el-checkbox-background-color: blue;
    --el-checkbox-check-color: yellow;
}
</style>