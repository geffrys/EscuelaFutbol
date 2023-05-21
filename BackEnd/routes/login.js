import {Router} from 'express'

const loginRouter = Router()

loginRouter.get('/google', (req, res) => {
    res.send('hola')
})

export {loginRouter} ;