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


const postCancha = async (req, res) => {
    let response
    try {
        response = await query(
            `INSERT INTO canchas()`
        )
    } catch (error) {
        
    }
}