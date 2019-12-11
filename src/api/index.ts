const baseUrl = '/daoju/v3/zb/client/';

export function getIndexGoods(): Object{
    // goods/GoodsApp.php
    return {
        url: `${baseUrl}/goods/GoodsApp.php`,
        data: {
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
}