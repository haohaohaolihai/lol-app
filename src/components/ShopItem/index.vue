<template>
  <view class="container" :class="rightBorder?'':'right'">
      <image :src="src" :mode="mode" class="item-img"></image>
    <view class="text-container">
      <text class="title">2019全球总决赛冠军纪念套装</text>
        <text class="tag">￥</text>
        <text class="price">888.00</text>
      <!-- <text class="pre-price">￥1006.00</text> -->
    </view>
  </view>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    props: {
      mode: {
        type: String,
        default: 'aspectFit'
      },
      src: {
        type: String,
        default: 'https://game.gtimg.cn/images/daojushop/zb/ad/201910/20191014160310_155496.jpg'
      },
      price: {
        type: String,
        default: '888.00'
      },
      prePrice: {
        type: String,
        default: undefined
      },
      rightBorder: {
        type: Boolean,
        default: true
      }
    }
  })
</script>

<style scoped>
  .container {
    width: 343upx;
    margin-bottom: 20upx;
    border: 2upx solid #eee;
    text-align: left;
  }
  .right {
    border-right: none;
     margin-right: 10upx;
  }
  .item-img {
    display:block;
    width: 100%;
  }
  .text-container {
    padding: 20upx 38upx;
  }
  .title {
    display: block;
    font-size: 28upx;
    color: #333;
  }
  .tag, .price {
    color: #f7545f;
    font-size: 30upx
  }
  .pre-price {
    text-decoration: line-through;
    color: #999;
    font-size: 30upx;
    margin-left: 8upx
  }
</style>