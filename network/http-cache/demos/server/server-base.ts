import Koa from 'koa';
import koaStatic from 'koa-static';
import koaConditionalGet from 'koa-conditional-get';
import koaEtag from 'koa-etag';
import { join } from 'path';
import { createInterface } from 'readline';

const baseServerApp = new Koa();

/**
 *设置主页 访问 '/' 的时候直接跳转到相应页面 主要是我懒得在浏览器地址栏复制粘贴 emmm
 *
 * @export
 * @param {string} url
 */
export function setMainPage(url: string) {
  baseServerApp.use(async (ctx, next) => {
    await next();
    if (ctx.path === '/') {
      ctx.redirect(url);
    }
  });
}

/**
 * 启动服务器 几个通用的中间件
 * 1. 静态文件中间件 (只实现了 last-modify )
 * 2. ETag 中间件
 * 3. 判断中间件 ( 静态文件中间件没有实现返回 304 状态码 )
 *
 * @export
 */
export function lanuch() {
  // 加入这个中间件让 Koa 响应 304
  baseServerApp.use(koaConditionalGet());
  // 加入 ETag
  baseServerApp.use(koaEtag());
  // 静态文件中间件
  baseServerApp.use(koaStatic(join(__dirname, '../public'), {}));
  // Listen & Start
  baseServerApp.listen(3000, () => {
    console.log('server start on port 3000.');
  });
}

export default baseServerApp;
