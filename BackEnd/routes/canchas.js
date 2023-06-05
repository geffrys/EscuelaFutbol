import { Router } from "express";

const canchas = Router()

canchas.get('/', getCanchas)

canchas.post('/', postCancha)