import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button } from 'vant'
// import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import "vant/lib/index.css";

const app = createApp(App);
app.use(Button);
// app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
app.use(store).use(router).mount('#app')
