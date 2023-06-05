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
  try{
    await query(
      `INSERT INTO usuarios(nombre, email, google_id, access_token) VALUES ("${user.nombre}","${user.email}","${user.google_id}","${user.access_token}");`
    )
  }catch(err){
    response = err
  }
  
}

const createUserExtend = async (req,res) => {
  const {id, nacimiento, genero, tiposangre, contacto, tipousuario} = req.body
  let response
  try{
    response = await query(
    `INSERT INTO usuariosextended(id_usuario, fecha_nacimiento, id_genero, id_tiposangre, tel_contacto, id_tipousuario) VALUES (${id},'${nacimiento}',${genero},${tiposangre},${contacto}, ${tipousuario})`
  );
  }catch(err){
    response = err
  }
  res.json(response)
}

export{ getUsuarioByEmail, createUser, createUserExtend};
