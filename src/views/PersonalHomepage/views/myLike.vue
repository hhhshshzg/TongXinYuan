<template>
    <!-- 当点赞为空时 -->

    <el-empty v-if="empty" class="empty" description="你可能是一个木得感情的白嫖怪" />
    <div v-else>没有更多内容了</div>
</template>

<script setup>
import { ref } from 'vue';
const empty = ref(true);
</script>

