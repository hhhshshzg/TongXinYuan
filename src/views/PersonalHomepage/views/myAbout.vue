<template>
    <div class="my-homepage">
        <div class="head">
            <div class="bg">
                <!-- 背景图片 -->
                <img :src="bgimg" alt="背景图片" class="bg-img">
            </div>
            <!-- 头像 -->
            <img :src="img" alt="头像" class="picture">
            <!-- 用户信息 -->
            <div class="user">
                <h4 class="userName">用户名 </h4> <br>
                <p class="userFans">
                    <span><router-link class="link" to="/PersonalHomepage/myFocus">关注: {{ myFocus }}
                        </router-link></span>
                    &nbsp;&nbsp;&nbsp;
                    <span><router-link class="link" to="/PersonalHomepage/myFans">粉丝: {{ myFans }}
                        </router-link></span>
                </p>
            </div>
        </div>
        <!-- 个人简介 -->
        <!-- Tree树形控件 -->
        <div class="mess">
            <el-tree class="my-tree" :data="data" :props="defaultProps" @node-click="handleNodeClick" />
        </div>
        <div class="xiaoxi">
            <p> 我的帖子</p>
            <div>你好</div>
            <!-- 添加更多的帖子内容 -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
//导入 vuex 中的 useStore 方法
import { useStore } from 'vuex';

// 通过 useStore 方法获取 store 实例
const store = useStore();
// 通过 computed 方法获取 users 数据
const users = computed(() => store.state.users);
// 通过 computed 方法获取 myFans 数据
const myFans = computed(() => users.value.length);
// 通过 computed 方法获取 users 数据
const user = computed(() => store.state.user);
//记住要用value来同步更新数据，否则会报错，因为user是一个ref对象，而不是一个数组
const myFocus = computed(() => user.value.length);

const img = '/src/assets/ff59e40377ba56e3b4c43afbde06b9c0_7439197045062071898.jpg';

const bgimg = 'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/3ab5dbe10fbfdc814d4fbe4ce5f1db79.jpg';
interface Tree {
    label: string
    children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
    console.log(data)
}

const data: Tree[] = [
    {
        label: '个人简介:',
        children: [
            {
                label: '他像一阵风吹过,什么也没有留下',

            },
        ],
    },
];
</script>

<style scoped>
.my-homepage {
    width: 100%;
    height: 100%;
    position: relative;
    flex-direction: column;
    align-items: center;
}

.head {
    width: 100%;
    position: relative;
    flex-direction: column;
    align-items: center;
}

.bg {
    /* 大小 */
    position: relative;
    flex-direction: column;
    align-items: center;

}

img {
    width: 100%;
    height: 350px;
    opacity: 0.9;
    z-index: -1;
    border-radius: 5px;
}

/* 头像 */
.picture {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    z-index: 1;
    position: absolute;
    top: 72%;
    left: 8%;
}

.user {
    width: 100%;
    height: 80px;
}

.userName {
    margin-top: 5px;
    margin-left: 200px;
}


.userFans {
    margin-left: 200px;
}

.link {
    text-decoration: none;
    color: black;
}

.my-tree {
    margin-top: 10px;
    margin-left: 70px;
    /* 将元素向右移动 50px */
}
</style>
