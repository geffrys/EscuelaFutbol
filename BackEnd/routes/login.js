import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";
const SECRETO = process.env.JWTSECRET;

const loginRouter = Router();

loginRouter.get("/google", (req, res) => {
//   res.json(req.user);
//   console.log();
  const { profile } = req.user; // Obtén el perfil del usuario desde req.user
  // Genera el JWT con los datos del perfil
  const token = jwt.sign({ profile: profile }); // Reemplaza 'secreto' con tu clave secreta adecuada
  // Redirige a la URL deseada junto con el JWT en el query string
  res.redirect(`${process.env.CLIENTURL}?token=${token}`);
});

export { loginRouter };
