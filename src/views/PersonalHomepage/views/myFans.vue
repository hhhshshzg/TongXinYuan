<template>
    <div class="myFans">
        <div class="title">
            <p>我的粉丝 ({{ myFans }}) </p>
        </div>
        <div class="fans">
            <FansList :users="users"></FansList>
        </div>
    </div>
</template>


<script setup>
import { computed } from 'vue';
//导入 vuex 中的 useStore 方法
import { useStore } from 'vuex';
// 导入 FansList 组件
import FansList from '../components/FansList.vue';
// 通过 useStore 方法获取 store 实例
const store = useStore();
// 通过 computed 方法获取 users 数据
const users = computed(() => store.state.users);
// 通过 computed 方法获取 myFans 数据
const myFans = computed(() => users.value.length);



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

.fans {
    margin-top: 3%;
}
</style>