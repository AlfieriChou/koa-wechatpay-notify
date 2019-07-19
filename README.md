# koa-wechatpay-notify
WeChatPay notify middleware.

## install

```bash
npm install koa-wechatpay-notify --save
```

## how to use

```javascript
const wechatpayNotify = require('koa-wechatpay-notify')

router.post('/wechatpay/notify', wechatpayNotify(), async (ctx) => {
  const notify = ctx.quest.weixin
  console.log(notify)
  // {
    // appid: 'xxx',
    // bank_type: 'CFT',
    // cash_fee: '1',
    // fee_type: 'CNY',
    // is_subscribe: 'N',
    // mch_id: 'xxx',
    // nonce_str: 'xxx',
    // openid: 'xxx',
    // out_trade_no: 'xxx',
    // result_code: 'SUCCESS',
    // return_code: 'SUCCESS',
    // sign: 'xxx',
    // time_end: 'xxx',
    // total_fee: 1,
    // trade_type: 'JSAPI',
    // transaction_id: 'xxx'
  // }
})
```
