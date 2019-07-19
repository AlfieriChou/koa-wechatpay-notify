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

## MIT

MIT License

Copyright (c) 2019 Alfieri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
