<template>
<div>
	<app-header></app-header>
	<!-- 主体 -->
	<div class="main">
		<!-- 侧边栏 -->
		<app-aside></app-aside>
		<!-- 其它页面自已调整吧 -->
		<div class="container-fluid">
			<!-- 由路由导航过来的 -->
			<router-view></router-view>
		</div>
	</div>
</div>
</template>

<script>
import AppHeader from "../AppHeader/AppHeader";
import AppAside from "../AppAside/AppAside";
import Dashboard from '../Dashboard/Dashboard';
import Userlist from '../Userlist/Userlist';
export default {
  components: {
    AppHeader,
		AppAside,
		Dashboard,
		Userlist
  }
};
</script>

<style>

</style>
