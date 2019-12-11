<template>
  <view class="nav-item">
    <image :src="src" :mode="mode" class="nav-img"></image>
    <text class="nav-text">{{text}}</text>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: String,
    mode: String,
    text: String
  }
})
</script>

<style scoped>
/* justify-content和align-items都是作用在父盒子上的 */
  .nav-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nav-img {
    display: block;
    width: 88upx;
    height: 88upx;
    margin: 12.5upx 0 12.5upx 0;
  }
  .nav-text {
    font-size: 27.5upx;
    color: #333;
  }
</style>