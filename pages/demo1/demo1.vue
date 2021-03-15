<template>
	<view>
		<Count :count="count"></Count>
		<button @click="addCount()">+</button>
		<button @click="redCount()">-</button>
		<button @click="syncCount()">sync -</button>
	</view>
</template>

<script>
	import Count from './count.vue'
	export default {
		components: {
			Count,
		},
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
