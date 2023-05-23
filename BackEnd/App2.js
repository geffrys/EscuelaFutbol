import express from "express"
import passport from "passport"
import { loginRouter } from "./routes/login.js"
import "./middlewares/google.js"
import cors from "cors"




const app = express()

// middlewares
app.use(express.json())
app.use(passport.initialize())
app.use(cors())

// Routes

app.use("/auth", passport.authenticate('auth-google',{
    scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile'
    ],
    session: false,
    failureRedirect: '/auth/google'
}), loginRouter)


app.get("/", (req,res)=>{
    res.send('hello')
})

app.listen(3000, ()=>{
})