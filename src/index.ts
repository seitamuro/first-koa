import http from "node:http";

import Koa from "koa";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import session from "koa-session";
import route from "koa-route";
import serve from "koa-static";
import send from "koa-send";
import { rootResolve } from "./root_resolve";

const PORT = Number(process.env.PORT ?? 8080);

const init = async () => {
  const app = new Koa();
  const httpServer = http.createServer(app.callback());

  app.use(logger());
  app.use(bodyParser());
  app.use(session({}, app));

  app.use(serve(rootResolve("public")));
  app.use(serve(rootResolve("dist")));

  app.use(
    route.all("/routetest", async (ctx) => {
      await send(ctx, rootResolve("/public/welcome_to_routetest.webp"));
    })
  );

  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at: http://localhost:${PORT}`);
  });
};

init().catch((err) => {
  console.error(err);
  process.exit(1);
});
