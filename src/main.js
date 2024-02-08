import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { createApp } from 'vue';
// 引入 Element Plus
import ElementPlus from 'element-plus';
// 引入 Element Plus 样式
import 'element-plus/dist/index.css';
import App from './App.vue';

// 创建应用实例
const app = createApp(App);
// 使用 Element Plus
app.use(ElementPlus);
app.mount('#app');

// 自适应
import 'amfe-flexible'

createApp(App).use(store).use(router).mount('#app')
