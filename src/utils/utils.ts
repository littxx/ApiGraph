import { Server } from "http";

export const normalizePort = (val: number | string): number => {
  return typeof val === "string" ? parseInt(val, 10) : (val as number);
};

export const onError = (server: Server) => {
  return (error: NodeJS.ErrnoException): void => {
    const port: number | string | null = server.address()?.port || null;
    const bind =
      typeof port === "string" ? `pipe ${port}` : `port ${port || ""}`;

    if (error.syscall !== "listen") {
      throw error;
    }

    switch (error.code) {
      case "EACCES":
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  };
};

export const onListening = (server: Server) => {
  return (): void => {
    const addr = server.address();

    if (addr) {
      const bind =
        typeof addr === "string"
          ? `pipe ${addr}`
          : `http://${addr.address}:${addr.port}`;
      console.log(`Listening at ${bind}...`);
    } else {
      console.error("Server address is null or undefined.");
    }
  };
};

export const handleError = (error: Error) => {
  const errorMessage: string = `${error.name}: ${error.message}`;
  const env: string = process.env.NODE_ENV || "";

  if (env !== "test" && env !== "pipelines") {
    console.error(errorMessage);
  }

  return Promise.reject(new Error(errorMessage));
};

export const throwError = (condition: boolean, message: string): void => {
  if (condition) {
    throw new Error(message);
  }
};

export const JWT_SECRET: string | undefined = process.env.JWT_SECRET;
