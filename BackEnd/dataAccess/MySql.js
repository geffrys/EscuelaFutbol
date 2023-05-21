import { createConnection } from "mysql2";
import dotenv from "dotenv"
dotenv.config()

const USERNAME_BASEDATOS = process.env.USERNAME_BASEDATOS;
const PASSWORD_BASEDATOS = process.env.PASSWORD_BASEDATOS;

const connection = createConnection({
    host: "localhost",
    port: "3306",
    user: USERNAME_BASEDATOS,
    password: PASSWORD_BASEDATOS,
    database: "escuelafutbol",
  });

  export { connection }

