<template>
	<view class="content">
		<view>
            <text class="title">{{title}}</text>
        </view>
	</view>
</template>

<script lang="ts">
    import Vue from 'vue';
	export default Vue.extend({
		data() {
			return {
				title: '我的'
			}
		},
		onLoad() {

		},
		methods: {

		}
	});
</script>

<style>
	.content {
		text-align: center;
	}
   
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
