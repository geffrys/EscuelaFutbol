import { Router } from "express";
import { createUserExtend, getEmailId, verifyUserExtend } from "../controller/Usuario.js";

const registro = Router()


// registro inicial del usuarios 
registro.post('/', createUserExtend)
registro.post('/id', getEmailId)
registro.post('/verify', verifyUserExtend)

export {registro};