<template>
	<view class="content">
		<view>{{text}}</view>
		<view>时间戳：{{timestamp}}</view>
		<view>当前时间:{{timeString}}</view>
		<u-button type="primary" @click="updateTime">刷新当前时间</u-button>
	</view>
</template>
<script>
	import {
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {}
		},
		// computed: mapState(['text', 'timestamp']),
		computed: {
			...mapState({
				text: state => state.moduleA.text,
				timestamp: state => state.moduleB.timestamp
			}),
			...mapGetters([
				'timeString'
			])
		},
		methods: {
		   ...mapMutations(['updateTime'])
		}
	}
</script>

<style lang="stylus">
	.content
		padding 24px
</style>
