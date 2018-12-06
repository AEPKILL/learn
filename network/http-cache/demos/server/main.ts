import Koa from 'koa';
import koaStatic from 'koa-static';
import koaConditionalGet from 'koa-conditional-get';
import koaEtag from 'koa-etag'; 
import { join } from 'path';

const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  // const preCacheControlField = ctx.response.get('Cache-Control');
  // if (preCacheControlField.toLowerCase().indexOf('no-cache') === -1) {
  //   ctx.response.set('Cache-Control', `no-cache, ${preCacheControlField}`);
  // }
  // ctx.response.remove('Last-Modified');
  ctx.response.remove('ETag');
});

app.use(koaConditionalGet());
app.use(koaEtag());


app.use(
  koaStatic(join(__dirname, '../public'), {
    maxAge: 60 * 60 * 1000
  })
);

app.listen(3000, () => {
  console.log('server start on port 3000.');
});
