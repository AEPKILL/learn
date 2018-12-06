import baseServerApp, { lanuch, setMainUrl } from './server-base';

baseServerApp.use(async (ctx, next) => {
  await next();
  const preCacheControlField = ctx.response.get('Cache-Control');
  if (preCacheControlField.toLowerCase().indexOf('no-cache') === -1) {
    ctx.response.set('Cache-Control', `no-cache, ${preCacheControlField}`);
  }
  // ctx.response.remove('Last-Modified');
  ctx.response.remove('Cache-Control');
  ctx.response.remove('ETag');
});

setMainUrl('/max-age.html');

lanuch();
