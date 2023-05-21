import express from "express"
import passport from "passport"
import { loginRouter } from "./routes/login.js"
import { getUsuarioByEmail } from "./controller/Usuario.js"

const app = express()

// middlewares
app.use(express.json())
app.use(passport.initialize())
app.use(express.json())

// Routes

app.use("/auth", loginRouter)

// const ensayo = await getUsuarioByEmail("g")
//     .then(res=>res)
//     .catch(err=>{throw err})

// console.log(ensayo.length);

app.listen(3000, ()=>{
    console.log('escuchando en el puerto 3000');
})