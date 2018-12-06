import baseServerApp, { lanuch, setMainPage } from './server-base';

baseServerApp.use(async (ctx, next) => {
  await next();
  // ctx.response.set('Cache-Control', 'max-age=0');
  // 删除响应头的缓存控制
  ctx.response.remove('Cache-Control');
  // ctx.response.remove('ETag');
});

setMainPage('/max-age.html');

lanuch();
