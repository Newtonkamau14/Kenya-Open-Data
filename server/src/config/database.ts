import mysql, { type ConnectionOptions } from "mysql2";

const access: ConnectionOptions = {
  port: process.env.DATABASE_PORT,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: {
    ca: process.env.CA_CERT,
    rejectUnauthorized: true,
  },
};

const connection = mysql.createConnection(access);

export { connection };
