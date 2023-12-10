<template>
    <div class="user-profile">
      <div class="profile-header">
        <img :src="user.avatar" alt="User Avatar" class="avatar" />
        <h2>{{ user.username }}</h2>
      </div>
      <div class="profile-details">
        <p>Email: {{ user.email }}</p>
        <p>Location: {{ user.location }}</p>
        <!-- 添加更多个人信息 -->
      </div>
      <div class="anime-list">
        <h3>Favorite Anime List</h3>
        <ul>
          <li v-for="anime in user.favoriteAnime" :key="anime.id">
            {{ anime.title }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* 添加样式，使页面看起来更漂亮 */
  .user-profile {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #fff;
  }
  
  .profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
  }
  
  .profile-details {
    margin-bottom: 20px;
  }
  
  .anime-list {
    margin-bottom: 20px;
  }
  
  /* 添加更多样式以美化页面 */
  </style>
  