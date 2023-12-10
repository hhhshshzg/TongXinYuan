/**
 * @fileoverview
 * 此文件包含个人主页中“我的关注”视图的代码。
 * 它显示当前用户正在关注的用户列表。
 * 用户可以搜索特定用户并管理他们的选择。
 * 视图还提供创建和管理用户组的选项。
 */

<script setup>

// 导入必要的 Vue 组合 API 函数
import { reactive, computed, watch, ref } from 'vue';
//导入 vuex 中的 useStore 方法
import { useStore } from 'vuex';
// 导入 UserList 组件
import UserList from '../components/UserList.vue';
// 通过 useStore 方法获取 store 实例
const store = useStore();
// 通过 computed 方法获取 users 数据
const user = computed(() => store.state.user);
//记住要用value来同步更新数据，否则会报错，因为user是一个ref对象，而不是一个数组
const totalFollows = computed(() => user.value.length);
const showPlaceholder = ref(true);
const groups = reactive([]);
const newGroupName = ref('');
const searchTerm = ref(''); // 设置默认值为空字符串
const searchResults = computed(() => {
    if (Array.isArray(user.value)) {
        return user.value.filter((user) => user.name.includes(searchTerm.value));
    } else {
        return [];
    }
});

const selectedUsers = ref(new Set());
const selectAll = ref(false);



/**
 * 切换所有用户的选择状态。
 * 如果 selectAll 为 true，则选择所有用户。
 * 如果 selectAll 为 false，则取消选择所有用户。
 */
function toggleSelectAll() {
    selectAll.value = !selectAll.value;
    if (selectAll.value) {
        selectedUsers.value = new Set(user.map((user) => user.id));
    } else {
        selectedUsers.value = new Set();
    }

}

/**
 * 添加一个具有提供的名称的新组。
 * 如果 newGroupName 不为空，则将该组添加到 groups 数组中。
 */
function addGroup() {
    if (newGroupName.value) {
        groups.push({
            id: groups.length + 1,
            name: newGroupName.value,
            users: [],
        });
        newGroupName.value = ''; // 重置输入字段
    }
}
</script>


<template>
    <div class="myCollection">
        <div class="header">
            <h3 class="title">我的关注</h3>
            <p class="title2">全部关注: （{{ totalFollows }}）</p>
            <p>
            <h5 class="HeaderFooter" @click="toggleSelectAll">{{ selectAll ? '取消管理' : '批量管理' }}</h5>
            <!-- 搜索输入框 -->
            <input type="text" class="searchFriends" v-model="searchTerm"
                :placeholder="showPlaceholder ? '&#128269;搜索好友' : ''" @focus="showPlaceholder = false"
                @blur="showPlaceholder = true" @input="searchFriends" />
            </p>
        </div>

        <div v-if="searchResults.length">
            <UserList :user="searchResults"></UserList>
        </div>
    </div>
</template>


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
</style>