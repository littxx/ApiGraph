"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.express = express();
        this.middleware(); // Chama o método middleware para configurar as rotas.
    }
    middleware() {
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
exports.default = new App().express;
