<template>
	<view class="p16 form-test">
		<u-loading :show="showLoading" mode="flower"></u-loading>
		<u-form :model="form" ref="uForm">
			<u-form-item label="姓名" prop="name">
				<u-input v-model="form.name" />
			</u-form-item>
			<u-form-item label="密码" prop="password">
				<u-input v-model="form.password" />
			</u-form-item>
			<!-- 使用条件编译修复微信小程序表单嵌套元素flex布局失效文题 -->
			<!-- #ifdef MP-WEIXIN -->
				<u-form-item class="item-code" label="验证码" prop="code" label-width="150">
					<view class="FBH">
						<u-input width="160" class="code" v-model="form.code" />
						<!-- <u-button>验证码</u-button> -->
						<u-toast slot="right" ref="uToast"></u-toast>
						<u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode" 
						@change="codeChange"></u-verification-code>
						<u-button @tap="getCode">{{tips}}</u-button>
					</view>
				</u-form-item>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
				<u-form-item class="item-code" label="验证码" prop="code" label-width="150">
						<u-input width="160" class="code" v-model="form.code" />
						<!-- <u-button>验证码</u-button> -->
						<u-toast slot="right" ref="uToast"></u-toast>
						<u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode" 
						@change="codeChange"></u-verification-code>
						<u-button @tap="getCode">{{tips}}</u-button>
				</u-form-item>
			<!-- #endif -->
		</u-form>
		<u-button type="primary" @click="submit">提交</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				password: '',
				code: '',
			},
			rules: {
				name: [
					{ 
						required: true, 
						message: '请输入姓名', 
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change','blur'],
					}
				],
				password: [
					{
						min: 5, 
						message: '密码不能少于5个字', 
						trigger: 'change'
					},
					{
						required: true,
						message: '请输入密码', 
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change','blur'],
					}
				],
				code: [
					{
						required: true,
						message: '请输入验证码', 
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change','blur'],
					}
				]
			},
			showLoading: true,
			tips: '',
			seconds: 10,
		};
	},
	methods: {
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					console.log(this.form);
				} else {
					console.log('验证失败');
				}
			});
		},
		codeChange(text) {
			this.tips = text;
		},
		getCode() {
			if(this.$refs.uCode.canGetCode) {
				// 模拟向后端请求验证码
				uni.showLoading({
					title: '正在获取验证码'
				})
				setTimeout(() => {
					uni.hideLoading();
					// 这里此提示会被this.start()方法中的提示覆盖
					this.$u.toast('验证码已发送');
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				}, 2000);
			} else {
				this.$u.toast('倒计时结束后再发送');
			}
		},
		end() {
			this.$u.toast('倒计时结束');
		},
		start() {
			this.$u.toast('倒计时开始');
		}
	},
	// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	onLoad() {
		setTimeout(() => {
			this.showLoading = false
			console.log(this.showLoading)
			this.form.name = "张三"
			this.form.password = "123123"
		}, 1000)
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	}
};
</script>

<style lang="stylus">
.form-test
	.item-code
		display flex;
</style>
