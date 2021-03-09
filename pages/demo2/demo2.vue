<template>
	<view>
		<button @click="addCount()">+</button>
		<Count :count="count"></Count>
	</view>
</template>

<script>
	import Count from './add.vue'
	export default {
		components: {
			Count,
		},
		data() {
			return {
				count: 0
			};
		},
		methods: {
			addCount() {
				this.count += 1
			}
		}
	}
</script>

<style lang="stylus">

</style>
