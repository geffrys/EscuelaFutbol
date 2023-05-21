import Usuario from "../models/Usuario.js";
import { connection } from "../dataAccess/MySql.js";
import util from "util"

// promisify convierte la respuesta en promesa
// bind trae la instancia al scope local this
const query = util.promisify(connection.query).bind(connection);

const getUsuarioByEmail = async (email) => {
  return (
    await query(
      `SELECT email,google_id FROM usuarios WHERE email="${email}"`
    )
  );
}; 

export{ getUsuarioByEmail };
