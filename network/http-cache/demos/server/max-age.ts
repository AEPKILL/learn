import baseServerApp, { lanuch, setMainPage } from './server-base';

baseServerApp.use(async (ctx, next) => {
  await next();
  ctx.response.set('Cache-Control', 'max-age=50');
  // 删除响应头的缓存控制
  // ctx.response.remove('Cache-Control');
  // ctx.response.remove('ETag');
  // ctx.response.remove('Last-Modified');
});

setMainPage('/max-age.html');

lanuch();
