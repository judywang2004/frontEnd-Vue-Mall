import '@/assets/rem.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/reset.css'

import { Button } from 'vant'
// import { NavBar } from 'vant';
import { Tab, Tabs ,Swipe,SwipeItem,
        Grid, GridItem,CountDown,Col, Row, Tabbar, TabbarItem,
        Sidebar, SidebarItem,ActionSheet,Stepper} from 'vant';
import "vant/lib/index.css";

const app = createApp(App);
app.use(Button).use(Tab).use(Tabs)
    .use(Swipe).use(SwipeItem)
    .use(Grid).use(GridItem).use(CountDown)
    .use(Col).use(Row)
    .use(Tabbar).use(TabbarItem)
    .use(Sidebar).use(SidebarItem).use(ActionSheet).use(Stepper);
// app.use(NavBar);
app.use(store).use(router).mount('#app')
