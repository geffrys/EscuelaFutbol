import { Router } from "express";
import { createUserExtend } from "../controller/Usuario.js";

const registro = Router()


// registro inicial del usuarios 
registro.post('/', createUserExtend)



export {registro};