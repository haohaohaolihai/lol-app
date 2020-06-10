<template>
  <view class="content">
    <view v-if="getDataError">
      <text>数据获取失败，可能是接口或者数据出问题了!</text>
    </view>
    <view v-else>
      <!-- 轮播图 -->
      <banner :height="bannerHeight"/>
      <!-- 导航栏 -->
      <view class="nav-list">
        <view v-for="(item, index) in navList" :key="index" class="nav-items">
          <item :mode="mode" :src="item.src" :text="item.text"></item>
        </view>
      </view>
      <!-- 商品列表 -->
      <view v-if="dataList[0].list.length > 0">
        <view v-for="(items, index) in dataList" :key="index">
          <view class="list-title">{{items.name}}</view>
          <view class="shop-item-list">
            <view v-for="(item, i) in items.list" :key="item.iMallId" @click="toDetail(item.iMallId)">
              <shop-item :src="item.sProfileImg" :rightBorder="i%2?true:false" :price="decimalProcess(item.iPriceReal)"/>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
  import Vue from "vue";
  import {
    getIndexGoods,
    baseUrl
  } from '../../api/weixinQueryParams'
  import Banner from '../../components/Banner/index.vue'
  import Item from './NavItem/index.vue'
  import ShopItem from '../../components/ShopItem/index.vue'
  export default Vue.extend({
    data() {
      //类型不声明ts会报错
      function shopList(): Array < Object > {
        const list: Array < Object > = []
        return list;
      }
      return {
        bannerHeight: "368rpx",
        dataList: [{
            name: '- 精品推荐 -',
            list: shopList()
          },
          {
            name: '- 手办专区 -',
            list: shopList()
          },
          {
            name: '- 毛绒专区 -',
            list: shopList()
          },
          {
            name: '- LPL专区 -',
            list: shopList()
          },
          {
            name: '- T恤专区 -',
            list: shopList()
          }
        ],
        getDataError: false,
        navList: [{
            src: 'https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418185711_967521.png',
            text: '全部周边'
          },
          {
            src: 'https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418185735_830332.png',
            text: '新品尝鲜'
          },
          {
            src: 'https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418185749_703907.png',
            text: '人气爆款'
          },
          {
            src: 'https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418185806_972677.png',
            text: '生活用品'
          },
        ],
      };
    },
    components: {
      Banner,
      Item,
      ShopItem
    },
    onLoad() {
      //显示loading
      uni.showLoading({
        title: '加载中'
      });
      //微信小程序做了一个映射，所以不存在跨域，可以直接使用绝对地址
      //发起数据请求
      uni.request({
        url: baseUrl,
        data: {
          // 把查询参数解构一下
          ...getIndexGoods()
        },
        success: (data: any) => {
          // 数据获取有误
          if (!data.data.data.list) {
            uni.hideLoading();
            this.getDataError = true;
            return;
          }
          let list = data.data.data.list;
          //数据获取成功，关闭loading
          uni.hideLoading();
          this.packet(list);
        },
        fail: (error: any) => {
          //获取失败显示失败页面
          this.getDataError = true;
        }
      })
    },
    methods: {
      packet(data: Array < any > ): void {
        // 首页数据分组
        let i = 0;
        do {
          if (data[i].iCatId) {
            switch (data[i].iCatId) {
              case "209":
                this.dataList[1].list.push(data[i]);
                break;
              case "125":
                this.dataList[2].list.push(data[i]);
                break;
              case "434":
                this.dataList[3].list.push(data[i]);
                break;
              case "128":
                this.dataList[4].list.push(data[i]);
                break;
              default:
                this.dataList[0].list.push(data[i]);
            }
          }
          i++;
        } while (i < data.length);
        console.log(this.dataList);
      },
      toDetail(data: String) {
        uni.navigateTo({
          url: `/pages/detail/index?id=${data}`
        })
      },
      decimalProcess(str: string): string{
        //添加小数点
        return str.substring(0, str.length - 2) + '.' + str.substring(str.length - 2)
      }
    }
  });
</script>

<style>
  .content {
    text-align: center;
  }
  .nav-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .nav-items {
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .shop-item-list {
    display: flex;
    padding: 0 20upx;
    flex-wrap: wrap;
  }
  .list-title {
    font-size: 36upx;
    font-weight: 500;
    color: #333;
    margin: 35upx;
  }
</style>
