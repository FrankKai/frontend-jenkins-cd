var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router
    .post('/payload', (ctx, next) => {
        console.log(ctx);
    })

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(4567);