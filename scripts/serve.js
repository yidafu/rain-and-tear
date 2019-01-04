const Koa = require('koa')
const koaStatic = require('koa-static')
const Router = require('koa-router')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const exec = require('shelljs').exec

const port = require('../config').port

const app =  new Koa()
const router = new Router()

// error handler
onerror(app)
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(logger())


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

router.all('/blog-update',async (ctx,next) => {
  let msg = exec('yarn update')
  // TODO return JSON
  ctx.body = 'building'
})

app.use(koaStatic('./static/'))
app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

app.listen(port || 8888)