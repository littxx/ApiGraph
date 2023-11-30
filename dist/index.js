"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const http = require("http");
const server = http.createServer(App_1.default);
const port = process.env.Port || 3000;
server.listen(port);
server.on("listening", () => {
    console.log("funfando o server");
});
