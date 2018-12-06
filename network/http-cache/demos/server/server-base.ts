import Koa from 'koa';
import koaStatic from 'koa-static';
import koaConditionalGet from 'koa-conditional-get';
import koaEtag from 'koa-etag';
import { join } from 'path';

const baseServerApp = new Koa();

export function setMainUrl(url: string) {
  baseServerApp.use(async (ctx,next) => {
    await next();
    if (ctx.path === '/') {
      ctx.redirect(url);
    }
  });
}

export function lanuch() {
  // 加入这个中间件让 Koa 响应 304
  baseServerApp.use(koaConditionalGet());
  baseServerApp.use(koaEtag());

  baseServerApp.use(
    koaStatic(join(__dirname, '../public'), {
      // maxAge: 60 * 60 * 1000
    })
  );

  baseServerApp.listen(3000, () => {
    console.log('server start on port 3000.');
  });
}

export default baseServerApp;
