import app, { lanuch, setMainPage } from './server-base';

app.use(async (ctx, next) => {
  await next();
  ctx.response.set('Cache-Control', 'max-age=5');
  // 删除响应头的缓存控制
  // ctx.response.remove('Cache-Control');
  // ctx.response.remove('ETag');
  // ctx.response.remove('Last-Modified');
});

setMainPage('/max-stale.html');

lanuch();
