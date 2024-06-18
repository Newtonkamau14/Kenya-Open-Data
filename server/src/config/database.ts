import mysql, { ConnectionOptions } from "mysql2";

const access: ConnectionOptions = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
};

const connection = mysql.createConnection(access);

export { connection };
