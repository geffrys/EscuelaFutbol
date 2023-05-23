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

const createUser = async (user) => {
  await query(
    `INSERT INTO usuarios(nombre, email, google_id, access_token, id_tipousuario) VALUES ("${user.nombre}","${user.email}","${user.google_id}","${user.access_token}",${user.id_tipousuario})`
  )
}

export{ getUsuarioByEmail, createUser };
