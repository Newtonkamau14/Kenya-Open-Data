import { createLogger, transports, format, info } from "winston";

/* Logs requests and db queries and it outputs to file called app.log */
const customFormat = format.combine(
  format.timestamp({ format: "DD-MMM-YYYY HH:mm:ss" }),
  format.printf((info) => {
    return `${info.timestamp} [${info.level.toUpperCase().padEnd(7)}]: ${
      info.message
    }`;
  })
);

const logger = createLogger({
  format: customFormat,
  transports: [
    new transports.Console({ level: "silly" }),
    new transports.File({ filename: "app.log", level: "info" }),
  ],
});

// Normalize a port into a number, string, or false.
function normalizePort(val: string | number): number | string | false {
  const port = parseInt(val as string, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

export { logger, normalizePort };
