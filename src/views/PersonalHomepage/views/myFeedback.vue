<template>
    <div class="feedback-component">
        <div class="feedback-header">
            <h2>意见反馈</h2>
            <p>您的意见是我们的产品建议</p>
        </div>
        <div class="feedback-body">
            <select v-model="feedback.type">
                <option disabled value="">请选择问题类型</option>
                <option>建议</option>
                <option>问题</option>
                <option>其他</option>
            </select>
            <textarea placeholder="描述您的问题 (500字以内)" v-model="feedback.description" maxlength="500"></textarea>
            <div class="upload-section">
                <label for="file-upload" class="custom-file-upload">
                    <i class="fa fa-cloud-upload"></i>上传图片
                </label>
                <input id="file-upload" type="file" @change="handleFileUpload" />
            </div>
        </div>
        <div class="feedback-footer">
            <button @click="cancel">取消</button>
            <button @click="submit" class="submit-button">提交</button>
        </div>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue';

const feedback = reactive({
    type: '',
    description: '',
    file: null
});

const handleFileUpload = (event) => {
    feedback.file = event.target.files[0];
};

const submit = () => {
    // 在这里实现提交逻辑
    console.log(feedback);
};

const cancel = () => {
    // 实现取消逻辑
    console.log('Feedback form has been reset');
};
</script>
  
<style scoped>
/* 样式会根据您的设计而有所不同，这里是一个基本的示例 */

.feedback-component {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    margin: 20px;
    width: 300px;
}

.feedback-header h2 {
    margin: 0;
    color: #333;
}

.feedback-header p {
    color: #666;
    font-size: 14px;
}

.feedback-body select,
.feedback-body textarea {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.feedback-body textarea {
    height: 100px;
    resize: vertical;
}

.upload-section {
    text-align: center;
    margin: 10px 0;
}

.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}

.feedback-footer {
    text-align: right;
}

.feedback-footer button {
    margin-left: 10px;
}

.submit-button {
    background-color: #f90;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #e80;
}
</style>