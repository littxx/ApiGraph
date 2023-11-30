import * as express from "express";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware(); // Chama o método middleware para configurar as rotas.
  }

  private middleware(): void {
    this.express.use("/hello", (req, res, next) => {
      return res.json({ hello: "world" });
    });

    this.express.use("/", (req, res, next) => {
      return res.json({
        entrada: "Seja bem-vindo ao express",
      });
    });
  }
}

export default new App().express;
