import { Router } from "express";
import { createUserExtend, getEmailId, getUserTypeByEmail, verifyUserExtend } from "../controller/Usuario.js";

const registro = Router()


// registro inicial del usuarios 
registro.post('/', createUserExtend)
registro.post('/id', getEmailId)
registro.post('/verify', verifyUserExtend)
registro.post('/userType', getUserTypeByEmail)

export {registro};