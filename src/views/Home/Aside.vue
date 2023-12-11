<template>
  <aside class="aside">
    <div class="aside__logo">
      <img src="/assets/logo.png" alt="Logo" />
    </div>
    <nav class="aside__nav">
      <ul>
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/forum">论坛</router-link>
        </li>
        <li>
          <router-link to="/anime">动漫</router-link>
        </li>
        <li>
          <router-link to="/news">新闻</router-link>
        </li>
        <li>
          <router-link to="/about">关于</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.aside {
  width: 200px;
  background-color: #f5f5f5;
  padding: 20px;
}

.aside__logo {
  text-align: center;
  margin-bottom: 20px;
}

.aside__nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.aside__nav li {
  margin-bottom: 10px;
}

.aside__nav a {
  text-decoration: none;
  color: #333;
}

.aside__nav a:hover {
  color: #ff6600;
}
</style>
