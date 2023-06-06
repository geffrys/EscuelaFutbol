import { connection } from "../dataAccess/MySql.js";
import util from "util"

// promisify convierte la respuesta en promesa
// bind trae la instancia al scope local this
const query = util.promisify(connection.query).bind(connection);


const getCanchas = async (req,res) =>{
    let response
    try {
        response = await query(
            `SELECT * FROM canchas;`
        )
    } catch (error) {
        response = error
    }
    res.json(response)
}


const updateCancha = async (req, res) => {
    const {id, nombre, horario, foto, tipocancha, direccion} = req.body
    let response
    try {
        response = await query(
            `UPDATE canchas
            SET nombre = '${nombre}',
                horario = '${horario}',
                foto = '${foto}',
                tipo_cancha = '${tipocancha}',
                direccion = '${direccion}'
            WHERE id = ${id};`
        )
    } catch (error) {
        response = error
    }
    res.json(response)
}

const postCancha = async (req, res) => {
    const {nombre, horario, foto, tipocancha, direccion} = req.body
    let response
    try {
        response = await query(
            `INSERT INTO canchas(nombre, horario, foto, tipo_cancha, direccion) VALUES ('${nombre}','${horario}','${foto}', '${tipocancha}', '${direccion}')`
        )
    } catch (error) {
        response = err
    }
    res.json(response)

}

export {getCanchas, postCancha, updateCancha}