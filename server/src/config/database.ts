import mysql, { ConnectionOptions } from "mysql2";

const access: ConnectionOptions = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABSE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
};

const connection = mysql.createConnection(access);

/* connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
}); */

export { connection };
