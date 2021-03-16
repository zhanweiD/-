<template>
	<view class="container">
		<button @click="goDemo(1)">demo1</button>
		<button @click="goDemo(2)">demo2</button>
		<button @click="goDemo(3)">demo3</button>
		<button @click="goDemo(4)">demo4</button>
		<button @click="goDemo(5)">demo5</button>
	</view>
</template>

<script>
	export default {
		methods: {
			goDemo(num) {
				// uni.navigateTo({
				//   url: 'pages/demo2/demo2',
				// })
				this.$u.route({
					url: `pages/demo${num}/demo${num}`
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
