<template>
  <view class="nav-bar">
    <view class="back-icon">
      <image src="../../static/detail-png/back.png" class="back" />
    </view>
    <view class="nav-item" v-for="(item, i) in navBarArr" :key="i" @click="navClick(i)">
      <text :class="item.bottomYellow?'':'light-color'" class="title">{{item.text}}</text>
      <text :class="item.bottomYellow?'yellow-color':''"></text>
    </view>
    <view class="to-shopcart">
      <image src="../../static/detail-png/gouwuche.png" class="shop" />
      <image src="../../static/detail-png/list.png" class="list" />
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      navBarArr: [
        {
          text: "商品",
          bottomYellow: 1
        },
        {
          text: "评价",
          bottomYellow: 0
        },
        {
          text: "详情",
          bottomYellow: 0
        }
      ]
    };
  },
  methods: {
    navClick(i: number) {
      this.navBarArr = this.navBarArr.map((item, index) => {
        item.bottomYellow = 0;
        if(index === i) {
          item.bottomYellow = 1;
        }
        return item;
      })
    }
  }
});
</script>
<style scoped>
.nav-bar {
  position: fixed;
  z-index: 66;
  background-color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 90upx;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.nav-bar image {
  display: block;
}
.nav-item {
  height: 100%;
}
.nav-item text{
  font-size: 30upx;
  display: block;
  color: #333;
}
.nav-item .title {
  margin: 27upx 0 4upx;
}
.nav-item .light-color {
  color: #666;
}
.nav-item .yellow-color {
  display: block;
  width: 100%;
  height: 6upx;
  border-radius: 3upx;
  background: #ffd54f;
}
.back-icon {
  width: 80upx;
  height: 90upx;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.back {
  width: 17upx;
  height: 31upx;
}
.to-shopcart {
  width: 140upx;
  height: 90upx;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shop {
  width: 36upx;
  height: 36upx;
  align-items: center;
}
.list {
  width: 44upx;
  height: 44upx;
  align-items: center;
}
</style>