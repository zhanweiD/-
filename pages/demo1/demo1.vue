<template>
	<view>
		<text>{{count}}</text>
		<button @click="addCount()">+</button>
		<button @click="redCount()">-</button>
		<button @click="syncCount()">sync -</button>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				count: 1
			};
		},
		
		methods: {
			addCount() {
				this.count += 1
			},
			redCount() {
				this.count -= 1
			},
			syncCount() {
				setTimeout(() => {
					this.count -= 1
				}, 1000)
			}
		}
	}
</script>

<style lang="stylus">

</style>
