import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Userlist from './components/Userlist/Userlist.vue';


Vue.use(VueRouter);
const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Home,
			children: [
				{
					path: '',
					component: Dashboard
				},
				{
					path: '/user',
					component: Userlist
				}
			]
		},
		{
			path: '/login',
			component: Login
		}
	]
})

// 导出默认
export default router