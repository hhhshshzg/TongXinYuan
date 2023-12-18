<template>
    <div class="settings-page">
        <h1>论坛设置</h1>
        <form @submit.prevent="updateSettings">
            <div class="form-group">
                <label for="theme-color">主题颜色</label>
                <select id="theme-color" v-model="settings.themeColor">
                    <option value="light">浅色</option>
                    <option value="dark">深色</option>
                </select>
            </div>
            <div class="form-group">
                <label for="notifications">通知</label>
                <input type="checkbox" id="notifications" v-model="settings.notifications" />
                <label for="notifications">启用通知</label>
            </div>
            <div class="form-group">
                <label for="language">语言</label>
                <select id="language" v-model="settings.language">
                    <option value="zh">中文</option>
                    <option value="en">英文</option>
                </select>
            </div>
            <button type="submit" class="save-btn">保存设置</button>
        </form>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue';

const settings = reactive({
    themeColor: 'light', // 默认值
    notifications: true, // 默认值
    language: 'zh' // 默认值
});

const updateSettings = () => {
    // 在这里实现设置更新的逻辑，可能需要调用API或者使用本地存储
    console.log(settings);
};
</script>
  
<style scoped>
.settings-page {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.settings-page h1 {
    text-align: center;
    color: #333;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group select,
.form-group input[type="checkbox"] {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ddd;
}

.save-btn {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.save-btn:hover {
    background-color: #0056b3;
}
</style>