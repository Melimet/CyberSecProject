import express from 'express'
import { userRouter } from './routes/user'
import { loginRouter } from './routes/login'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

export default app