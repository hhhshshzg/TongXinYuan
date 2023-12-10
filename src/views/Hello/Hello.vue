<template>
    <div class="shell">
        <!-- 第一段 -->
        <!-- 图片和文本均作为一个整体存在 -->
        <!-- 使用 :style 绑定 Vue 数据到样式，使得图片动态加载 -->
        <div class="image" :style="{ backgroundImage: `url(${image1})` }"></div>
        <!-- 标题部分 -->
        <div class="heading">
            <h2 class="title">欢迎来到同心圆动漫论坛</h2>
        </div>
        <!-- 文本部分 -->
        <div class="text">
            <h2 class="content rainbow-text">这里是彼此共鸣的动漫世界，让我们一起分享热爱，共筑梦想之家。</h2>
        </div>

        <!-- 第二段 -->
        <div class="image" :style="{ backgroundImage: `url(${image2})` }"></div>
        <div class="heading">
            <h2 class="title">同心圆动漫论坛 <br> 一个温馨的大家庭</h2>
        </div>
        <div class="text">
            <h2 class="content rainbow-text">欢迎你加入我们的群体，一同探讨、分享和沉浸在动漫的奇妙世界。</h2>
        </div>

        <!-- 第三段 -->
        <div class="image" :style="{ backgroundImage: `url(${image3})` }"></div>
        <div class="heading">
            <h2 class="title">这里汇聚了无数热爱动漫的心灵</h2>
        </div>
        <div class="text">
            <h2 class="content rainbow-text">让我们在这个共同的舞台上创造属于我们自己的精彩故事</h2>
        </div>

        <!-- 第四段 -->
        <div class="image" :style="{ backgroundImage: `url(${image4})` }"></div>
        <div class="heading">
            <h2 class="title">在同心圆动漫论坛<br>每个同好都是一颗发光的星星</h2>
        </div>
        <div class="text">
            <h2 class="content rainbow-text">让我们共同闪耀，点亮属于动漫迷们的独特星空。</h2>
        </div>

        <!-- 第五段 -->
        <div class="image" :style="{ backgroundImage: `url(${image5})` }"></div>
        <div class="heading">
            <h2 class="title">欢迎加入同心圆动漫论坛</h2>
        </div>
        <div class="text">
            <h2 class="content rainbow-text">让我们一同扬帆，航向未知的动漫海域！</h2>
        </div>

        <!-- 第六段 -->
        <!-- 使用 router-link 创建导航链接，点击后会导航到相应的路由 -->
        <div class="image" :style="{ backgroundImage: `url(${image6})` }"></div>
        <div class="heading">
            <router-link class="link" to="/">
                <h5 class="title">点击加入同心圆动漫论坛</h5>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import image1 from './assets/001.jpg';
import image2 from './assets/002.jpg';
import image3 from './assets/003.jpg';
import image4 from './assets/004.jpg';
import image5 from './assets/005.jpg';
import image6 from './assets/006.jpg';

// 创建响应式引用
const screenWidth = ref(window.innerWidth);

// 处理窗口大小变化的函数
const handleResize = () => {
    screenWidth.value = window.innerWidth;
};

// 在组件挂载后添加事件监听器
onMounted(() => {
    window.addEventListener('resize', handleResize);
});

// 在组件卸载前移除事件监听器
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* 根样式 */
/* 清除默认的内边距和外边距 */
* {
    padding: 0;
    margin: 0;
}

/* 容器样式 */
/* 设置容器高度和宽度，以及视角 */
.shell {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    perspective: 3px;
}

/* 图片样式 */
/* 设置图片的位置、大小、变换等样式 */
.shell div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: 30px;
    letter-spacing: 2px;
}

.image {
    transform: translateZ(-1px) scale(1.6);
    background-size: cover;
    height: 100vh;
    width: 100vw;
    z-index: -1;
}

/* 文本样式 */
/* 设置文本的高度、背景颜色、颜色等样式 */
.text {
    height: 50vh;
    /* line-height: 100vh; */
    background-color: #fbfefc;
    color: #fff;
    /* color: red; */
    text-align: center;
    padding: 1rem;
}

.text h2 {
    /* 修改字体为艺术字体 */
    font-family: 'Dancing Script', cursive;
    font-size: 2rem;
    margin-bottom: 1rem;
}

/* 标题样式 */
/* 设置标题的字体大小、粗细、阴影等样式 */
.heading {
    /* z-index 是 CSS 的一个属性，它用于指定一个元素在 Z 轴上的堆叠顺序。
    Z 轴是垂直于屏幕的轴，当多个元素重叠时，Z 轴的值决定了这些元素的堆叠顺序。
    z-index: -1; 表示将元素的堆叠顺序设置为 -1。
    在同一位置有多个元素重叠时，z-index 值较高的元素会覆盖 z-index 值较低的元素。
    因此，z-index: -1; 通常会使元素显示在其他 z-index 值为 0 或正数的元素之下。 */
    z-index: -1;
    /* translateY(-30vh)：这个函数会将元素在垂直方向（Y轴）上移动。
    -30vh 表示元素将向上移动相等于视口高度 30% 的距离。
    vh 是一个相对单位，表示视口的高度。如果值为正，元素会向下移动；如果值为负，元素会向上移动。
    translateZ(1px)：这个函数会将元素在 Z 轴（深度）方向上移动。
    1px 表示元素将向观察者方向移动 1 像素。
    如果值为正，元素会向观察者方向移动，产生一种元素靠近观察者的效果；
    如果值为负，元素会远离观察者方向移动，产生一种元素远离观察者的效果。 */
    transform: translateY(-30vh) translateZ(1px);
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.title {
    /* 修改字体为艺术字体 */
    text-align: center;
    font-family: 'Dancing Script', cursive;
    color: #e2e1e4;
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}

/* 内容样式 */
/* 设置内容的颜色 */
.content {
    color: #333;
}

/* 链接样式 */
/* 设置链接的样式 */
.link {
    text-decoration: none;
}

.link h2 {
    text-decoration: none;
}

/* 响应式样式 */
/* 当屏幕宽度小于 1000px 时，修改容器和图片的样式 */
@media (max-width: 1000px) {
    .shell {
        height: 100vh;
        width: 100vw;
    }

    /* 修改文本样式 */

    .heading {
        padding: 2rem;
        font-size: 1.5rem;
    }



    .heading h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .heading h5 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .text {
        height: 100vh;
        padding: 2rem;
    }

    .text h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
}
</style>
