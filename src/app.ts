import 'express-async-errors'
import express, { Application } from "express"
import { usersRoutes, loginRoutes, contactsRoutes } from "./routes";
import { handleError } from "./errors";


export const app: Application = express()
let cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/users', usersRoutes)
app.use('/login', loginRoutes)
app.use('/contacts', contactsRoutes)


app.use(handleError)

export default app