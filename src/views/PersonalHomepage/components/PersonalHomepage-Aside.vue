<template>
    <el-col :span="8">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1">
                <el-icon>
                    <House />
                </el-icon>
                <span><router-link class="link" to="/PersonalHomepage/myAbout">我的主页</router-link></span>
            </el-menu-item>
            <el-menu-item index="2">
                <el-icon>
                    <CircleCheck />
                </el-icon>
                <span><router-link class="link" to="/PersonalHomepage/myCollection">我的关注</router-link></span>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon>
                    <User />
                </el-icon>
                <span><router-link class="link" to="/PersonalHomepage/myFans">我的粉丝</router-link></span>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <Star />
                </el-icon>
                <span><router-link class="link" to="/PersonalHomepage/myFeedback">我的收藏</router-link></span>
            </el-menu-item>
            <el-menu-item index="5">
                <el-icon>
                    <Pointer />
                </el-icon>
                <span>我的赞</span>
            </el-menu-item>
            <el-menu-item index="6">
                <el-icon>
                    <Setting />
                </el-icon>
                <span>我的设置</span>
            </el-menu-item>
            <el-menu-item index="7">
                <el-icon>
                    <Edit />
                </el-icon>
                <span>发帖</span>
            </el-menu-item>
            <el-menu-item index="8">
                <el-icon>
                    <Link />
                </el-icon>
                <span>关于我们</span>
            </el-menu-item>
            <el-menu-item index="9">
                <el-icon>
                    <EditPen />
                </el-icon>
                <span>意见反馈</span>
            </el-menu-item>
        </el-menu>
    </el-col>
</template>

<script lang="ts" setup>
import {
    House,
    User,
    Star,
    CircleCheck,
    Pointer,
    Link,
    Edit,
    EditPen,
    Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>

<style scoped>
.link {
    text-decoration: none;
}
</style>
