<template>
    <view class="swiper">
                <swiper 
                :indicator-dots="indicatorDots" 
                :autoplay="autoplay" 
                :interval="interval" 
                :duration="duration"
                :style="{height: height}"
                >
                    <swiper-item v-for="(url, index) in imgsUrl" :key="index">
                        <view>
                            <image class="banner-img" :src="url" :mode="mode" :style="{width: width, height: height}"></image>
                        </view>
                    </swiper-item>
                </swiper>
    </view>
</template>

<script lang="ts">
    import Vue from 'vue'
    /* 
    * @param {string} height 根据不同的平台编译成不同的适配样式
    */
    export default Vue.extend({
        props: {
            mode: {
                type: String,
                default: 'scaleToFill'
            },
            indicatorDots: {
                type: Boolean,
                default: true
            },
            autoplay: {
                type: Boolean,
                default: true
            },
            interval: {
                type: Number,
                default: 2000,
            },
            duration: {
                type: Number,
                default: 500,
            },
            width: {
                type: String,
                default: "100%"
            },
            height: String,
            imgsUrl: {
                type: Array,
                default: [
                    "https://game.gtimg.cn/images/daojushop/zb/ad/201912/20191205093816_426048.jpg",
                    "https://game.gtimg.cn/images/daojushop/zb/ad/201911/20191120100537_592411.jpg",
                    "https://game.gtimg.cn/images/daojushop/zb/ad/201911/20191115190059_531554.jpg",
                    "https://game.gtimg.cn/images/daojushop/zb/ad/201911/20191126172030_722198.jpg"
                ]
            }
        }
    })
</script>