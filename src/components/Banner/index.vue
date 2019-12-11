<template>
    <view class="swiper">
                <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                    <swiper-item>
                        <view>
                            <image class="banner-img" src="https://game.gtimg.cn/images/daojushop/zb/ad/201912/20191205093816_426048.jpg" :mode="mode"></image>
                        </view>
                    </swiper-item>
                    <swiper-item>
                        <view>
                            <image class="banner-img" src="https://game.gtimg.cn/images/daojushop/zb/ad/201911/20191120100537_592411.jpg" :mode="mode"></image>
                        </view>
                    </swiper-item>
                    <swiper-item>
                        <view>
                            <image class="banner-img" src="https://game.gtimg.cn/images/daojushop/zb/ad/201911/20191115190059_531554.jpg":mode="mode" ></image>
                        </view>
                    </swiper-item>
                    <swiper-item>
                        <view>
                            <image class="banner-img" src="https://game.gtimg.cn/images/daojushop/zb/ad/201911/20191126172030_722198.jpg" :mode="mode"></image>
                        </view>
                    </swiper-item>
                </swiper>
    </view>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        props: {
            mode: String,
            indicatorDots: Boolean,
            autoplay: Boolean,
            interval: Number,
            duration: Number
        }
    })
</script>

<style>
    /* .swiper {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 210upx;
    } */
    /* 清除默认样式 */
    /* .swiper>uni-swiper {
        height: 210upx;
    } */
    .swiper swiper {
        height: 368upx;
    }
    .banner-img {
        width: 100%;
        height: 368upx;
    }
</style>