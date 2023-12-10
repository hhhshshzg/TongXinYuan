
<script setup>
import Aside from './components/PersonalHomepage-Aside.vue'

</script>


<template>
	<div class="personal">
		<el-row :gutter="20">
			<el-col :span="4">
				<!-- 空 -->
			</el-col>
			<el-col :span="4">
				<!-- 侧边栏 -->
				<div class="aside">
					<!-- Affix固钉 -->
					<el-affix :offset="60">
						<Aside></Aside>
					</el-affix>
				</div>
			</el-col>
			<el-col :span="12">
				<!-- 主内容 -->
				<div class="main">
					<RouterView />
				</div>
			</el-col>
			<el-col :span="4">
				<!-- 空 -->
			</el-col>
		</el-row>
	</div>
</template>
  

<style scoped>
.personal {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	width: 100%;
	position: relative;
	/* height: 100vh; */
}

.aside {
	height: 100px;
}

.main {
	width: 100%;
	height: 100%;
}
</style>
