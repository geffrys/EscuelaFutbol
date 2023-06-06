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
  const {id, nacimiento, genero, tiposangre, contacto, tipousuario, celular, documento, eps, nombre, apellido} = req.body
  let response
  try{
    response = await query(
    `INSERT INTO usuariosextended(id_usuario, fecha_nacimiento, id_genero, id_tiposangre, tel_contacto, id_tipousuario, nombre, apellido, eps, celular, documento) VALUES (${id},'${nacimiento}',${genero},${tiposangre},${contacto}, ${tipousuario}, '${nombre}', '${apellido}', '${eps}', '${celular}', '${documento}')`
  );
  }catch(err){
    response = err
  }
  res.json(response)
}

const verifyUserExtend = async (req,res)=>{
  const { email } = req.body;
  let response
  try {
    response = await query(
      `SELECT * FROM usuarios INNER JOIN usuariosExtend ON usuarios.id = usuariosextended.id_usuario WHERE email = "${email}";`
    )
  } catch (err) {
    response = err
  }
  res.json(response)
}

const getEmailId = async (req,res) => {
  const { email } = req.body
  let response
  try {
    response = await query(
      `SELECT id FROM usuarios WHERE email = "${email}";`
    )
  } catch (error) {
    response = error
  }
  res.json(response)
}

export{ getUsuarioByEmail, createUser, createUserExtend, getEmailId, verifyUserExtend};
