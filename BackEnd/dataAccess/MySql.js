import { createConnection } from "mysql2";
import dotenv from "dotenv"
dotenv.config()

const USERNAME_BASEDATOS = process.env.USERNAME_BASEDATOS;
const PASSWORD_BASEDATOS = process.env.PASSWORD_BASEDATOS;
const PORT_BASEDATOS = process.env.PORT;
const HOST_BASEDATOS = process.env.HOST;
const NOMBRE_BASEDATOS = process.env.NOMBRE_BASEDATOS;

const connection = createConnection({
    host: HOST_BASEDATOS,
    port: PORT_BASEDATOS,
    user: USERNAME_BASEDATOS,
    password: PASSWORD_BASEDATOS,
    database: NOMBRE_BASEDATOS,
  });

  export { connection }

