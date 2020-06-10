<template>
	<view class="content">
		<nav-bar></nav-bar>
		<view class="goods-imgs">
			<banner :imgsUrl="detailImgs" :height="bannerHeight"></banner>
		</view>
		<view class="name">{{name}}</view>
		<view class="price">{{price}}</view>
		<view class="sold">已售：{{soldNumber}}件</view>
		<!-- <view v-html="imgDesc"></view> -->
			<rich-text 
			class="detail-imgs"
			:nodes="imgDesc"></rich-text>
			<view style="height: 100upx; width: 100%;"></view>
		<view class="goods-nav">
			<uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick"></uni-goods-nav>
    </view>
	</view>
</template>
<script lang="ts">
		import Vue from 'vue';
		import uniGoodsNav from '@dcloudio/uni-ui/lib/uni-goods-nav/uni-goods-nav.vue';
		import { getDetailInfoParams, baseUrl } from '../../api/weixinQueryParams';
		import Banner from '../../components/Banner/index.vue';
		import navBar from '../../components/NavBar/index.vue';
	export default Vue.extend({
		data() {
			const imgList: string[] = [];
			const mallDesc: any[] = [];
			return {
				detailImgs: imgList,
				name: "",
				price: "",
				soldNumber: '0',
				mallDesc: mallDesc,
				imgDesc: '',
				bannerHeight: "716rpx",
				options: [{
          icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
          text: '首页'
        }, {
          icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
          text: '客服'
        }, {
          icon: 'https://b-gold-cdn.xitu.io/v3/static/img/collect.1db122b.svg',
          text: '收藏',
          // info: 2
        }],
        buttonGroup: [{
          text: '加入购物车',
          backgroundColor: '#333',
          color: '#fff'
        },
        {
          text: '立即购买',
          backgroundColor: '#ffd54f',
          color: '#333'
        }
        ]
			}
		},
		components: {
			uniGoodsNav,
			Banner,
			navBar
		},
		onLoad(options: {id: string}) {
			const that = this;
			uni.request({
				url: baseUrl,
				data: {
					...getDetailInfoParams(parseInt(options.id))
				},
				success(data: any) {
					let reg = /\<p\>/g
					let list = data.data.data.list;
					that.name = list.sMallName;
					that.price = that.priceTransform(list.iPrice);
					that.soldNumber = list.iTotalSoldNum;
					that.detailImgs = list.sDetailImg;
					that.imgDesc = that.stringReplace(list.sMallDesc);
				}
			})
		},
		methods: {
			stringReplace(str: string): string{
				let regArr = [/\<p\>/g, /\<\/p\>/g, /\<img/g];
				return str.replace(regArr[0], '<p style="width: 100%; height: 359upx">').replace(regArr[2], '<img style="width: 100%; height: 359upx"');
			},
			priceTransform(str: string): string{
				let numberArr = Array.from(str);
				numberArr.splice(-2, 0, '.');
				return numberArr.join('');
			},
			onClick (e: any) {
        uni.showToast({
          title: `点击${e.content.text}`,
          icon: 'none'
        })
      },
      buttonClick (e: any) {
        console.log(e)
			},
			printLeft() {
				console.log('left');
			},
			printRight() {
				console.log('right');
			}
		},
	});
</script>

<style>
	.goods-imgs swiper{
		height: 716upx;
	}
	.goods-nav .uni-tab__right{
		padding: 0upx;
		margin: 0upx!important;
		border-radius: 0upx!important;
	}
	.goods-nav .uni-tab__cart-button-left{
		padding: 5upx 0 5upx 0;
		border-top: 1px solid #eee;
		border-left: 1px solid #eee;
	}
	.goods-nav {
		position: fixed;
		z-index: 100;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	.content {
		display: relative;
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.img-desc {
		width: 100%;
		height: auto;
	}
	.detail-imgs {
		width: 100%;
		height: auto;
	}
</style>
