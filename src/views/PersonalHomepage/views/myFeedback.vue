<template>
    <!-- 当收藏为空时 -->

    <el-empty v-if="empty" class="empty" description="这里什么都没有" />
    <div v-else>没有更多内容了</div>
</template>

<script setup>
import { ref } from 'vue';
const empty = ref(true);
</script>
