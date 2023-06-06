import { Router } from "express";
import { getCanchas,postCancha, updateCancha } from "../controller/Canchas.js";

const canchas = Router()

canchas.get('/', getCanchas)

canchas.post('/', postCancha)

canchas.post('/update', updateCancha)

export {canchas}