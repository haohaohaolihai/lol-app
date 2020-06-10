export function getIndexGoods(): Object{
  // 首页查询参数
  return {
          output_format: 'json',
          plat: 'h5',
          channel: 1,
          opt_type: 'goods_list_by_ids',
          biz: 'lol',
          page_no: 1,
          page_size: 100,
          platform: '',
          jsonpName: 'goods_app',
          mall_ids: '9919,9917,9578,9449,9276,9149,8740,9030,7986,7993,7992,8709,9187,6736,3391,9586,9581,9591,9596'
      }
}

export function categoryNavParams(params: any): Object {
  return {
    // 参数
  }
}

export function getDetailInfoParams(params: Number): Object {
  //详情页数据
  return {
            output_format: 'json',
            plat: 'h5',
            channel: 1,
            opt_type: 'goods_detail',
            biz: 'lol',
            page_no: 1,
            page_size: 12,
            platform: '',
            jsonpName: 'goods_app',
            mall_id: params,
            version: 2,
}
}

export const baseUrl = "https://capps.game.qq.com/daoju/v3/zb/client/goods/GoodsApp.php";