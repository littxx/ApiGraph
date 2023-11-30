import App from "./App";
import * as http from "http";

const server = http.createServer(App);

const port = process.env.Port || 3000;

server.listen(port);
server.on("listening", () => {
  console.log("funfando o server");
});
