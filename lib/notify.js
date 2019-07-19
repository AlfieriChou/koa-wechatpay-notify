const xmlParser = require('fast-xml-parser')
const he = require('he')

const parse = async (xmlData, options) => {
  const xmlValidate = xmlParser.validate(xmlData)
  if (xmlValidate === true) {
    options = Object.assign(options, {
      ignoreAttributes: false,
      cdataTagName: '__cdata',
      attrValueProcessor: a => he.decode(a, { isAttributeValue: true }),
      tagValueProcessor: a => he.decode(a)
    })
    return xmlParser.parse(xmlData, options)
  }
  throw xmlValidate.err
}

module.exports = async (ctx) => {
  try {
    const xmlData = await new Promise((resolve, reject) => {
      let data = ''
      ctx.req.on('data', chunk => {
        data += chunk
      })
      ctx.req.on('end', async () => {
        const parsedData = await parse(data, { cdataTagName: false })
        resolve(parsedData)
      })
      ctx.req.on('error', error => {
        reject(error)
      })
    })
    ctx.request.weixin = xmlData.xml
  } catch (e) {
    if (ctx.logger) {
      ctx.logger.error('[wechatNotifyErr]: ', e)
    }
    ctx.body = '解析失败'
  }
}
