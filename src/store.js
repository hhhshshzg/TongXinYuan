// store.js
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            //myCollections
            user: [
                // 占位数据，应替换为来自后端的实际数据
                {
                    id: 1,
                    name: '张三',
                    description: '前端开发工程师',
                    avatarUrl: '/src/views/PersonalHomepage/assets/R-C2.jpg',
                    profileUrl: 'http://...'
                },
                {
                    id: 2,
                    name: '李四',
                    description: '设计师',
                    avatarUrl: 'https://tang-sir.oss-cn-beijing.aliyuncs.com/6ee45cb6-b9fb-4b46-9b89-4e04567658f5.jpg',
                    profileUrl: 'http://...'
                },
                // 其他关注者...
            ],
            //myFans
            users: [
                // 占位数据，应替换为来自后端的实际数据
                {
                    id: 1,
                    name: '张三',
                    description: '前端开发工程师',
                    avatarUrl: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.86459HHDTkhuWGmPB0h8hQHaHa?rs=1&pid=ImgDetMain',
                    profileUrl: 'http://...',
                    group: 'family'
                },
                {
                    id: 2,
                    name: '李四',
                    description: '设计师',
                    avatarUrl: 'https://c-img.18183.com/images/2020/11/23/b7e726199a38e4fb59e6d91ca3abeb07.jpg@!18183',
                    profileUrl: 'http://...'
                },
                // 其他关注者...
            ]
        };
    }
});

export default store;