<template>
    <div class="post-creation-page">
        <h1>创建新帖子</h1>
        <form @submit.prevent="submitPost">
            <div class="form-group">
                <label for="post-title">标题</label>
                <input type="text" id="post-title" v-model="post.title" required />
            </div>
            <div class="form-group">
                <label for="post-category">类别</label>
                <select id="post-category" v-model="post.category">
                    <option disabled value="">请选择类别</option>
                    <option v-for="category in categories" :key="category" :value="category">
                        {{ category }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="post-content">内容</label>
                <textarea id="post-content" v-model="post.content" rows="10" required></textarea>
            </div>
            <button type="submit" class="submit-btn">发布帖子</button>
        </form>
    </div>
</template>
  
<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const post = reactive({
    title: '',
    category: '',
    content: ''
});

const categories = ref(['分享', '讨论', '提问', '公告']);

const submitPost = async () => {
    // 这里应该有一个API调用来提交帖子到服务器
    // 假设submitToServer是一个函数，用来处理帖子数据的提交
    // await submitToServer(post);

    // 发布成功后，导航到论坛主页或帖子列表页面
    router.push('/forum');
};
</script>
  
<style scoped>
.post-creation-page {
    max-width: 800px;
    margin: auto;
    padding: 20px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.submit-btn {
    width: 100%;
    padding: 10px 0;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.submit-btn:hover {
    background-color: #2980b9;
}
</style>