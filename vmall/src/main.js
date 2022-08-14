import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/reset.css'

import { Button } from 'vant'
// import { NavBar } from 'vant';
import { Tab, Tabs } from 'vant';
import "vant/lib/index.css";

const app = createApp(App);
app.use(Button).use(Tab).use(Tabs);
// app.use(NavBar);
app.use(store).use(router).mount('#app')
