const modules = {
  worker: {
    putSmsAsSent: require('../modules/worker/putSmsAsSent'),
    getSmsToSend: require('../modules/worker/getSmsToSend'),
    addSmsToQueue: require('../modules/worker/addSmsToQueue'),
  },
  middlewares: {
    checkAndVerify: require('../modules/middlewares/checkAndVerify'),
  },
};

const appRouter = function (app) {
  // workers work
  // GET => get the sms to sent with content, and receiver id
  // PUT => SMS has been sent
  app.get("/worker/queue", modules.worker.getSmsToSend);
  app.post("/worker/queue", modules.worker.addSmsToQueue);
  app.post("/sms", modules.middlewares.checkAndVerify, modules.worker.addSmsToQueue);
  app.put("/worker/:workerId/delivered/:id", modules.worker.putSmsAsSent);
};

module.exports = appRouter;
