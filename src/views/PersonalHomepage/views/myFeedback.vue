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
            <textarea placeholder="描述您的问题 (500字以内)" v-model="feedback.description"></textarea>
            <div class="upload-section">
                <label for="file-upload" class="custom-file-upload">
                    <i class="fa fa-cloud-upload"></i> 上传文件
                </label>
                <input id="file-upload" type="file" multiple style="display: none" @change="handleFileUpload" />
            </div>
            <div class="file-list">
                <ul class="selected-files">
                    <li v-for="(file, index) in feedback.files" :key="index" class="file-item">
                        <p>
                            <i :class="getFileIconClass(file.name)"></i>
                            {{ file.name.split('.').pop().toLowerCase() }}
                        </p>
                        <i class="fa fa-times remove-icon" @click="removeFile(index)" style="width: 10px;height: 10px;"></i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="feedback-footer">
            <button class="action-button" @click="cancel">取消</button>
            <button class="action-button" @click="submit">提交</button>
        </div>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue';

const feedback = reactive({
    type: '',
    description: '',
    files: []
});

const handleFileUpload = (event) => {
    feedback.files.push(...Array.from(event.target.files));
};

const removeFile = (index) => {
    feedback.files.splice(index, 1);
};

const getFileIconClass = (fileName) => {
    if (!fileName) {
        return '';
    }
    const fileExtension = fileName.split('.').pop().toLowerCase();
    switch (fileExtension) {
        case 'jpg':
        case 'png':
        case 'gif':
            return 'fa fa-file-image-o';
        case 'pdf':
            return 'fa fa-file-pdf-o';
        default:
            return 'fa fa-file';
    }
};


const submit = () => {
    console.log(feedback);
};

const cancel = () => {
    feedback.type = '';
    feedback.description = '';
    feedback.files = [];
};
</script>
  
<style scoped>
.feedback-component {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    margin: 20px auto;
    width: 100%;
    box-sizing: border-box;
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

.file-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.selected-files {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
}



.file-item {
    width: 342px;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 4px;
    margin-right: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.file-item i.remove-icon {
    text-align: center;
    color: red;
    cursor: pointer;

}

.feedback-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.action-button {
    background-color: #f90;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
}

.action-button:hover {
    background-color: #e80;
}
</style>