const notify = require('./lib/notify')

module.exports = () => {
  return async (ctx, next) => {
    await notify(ctx)
    await next()
  }
}
