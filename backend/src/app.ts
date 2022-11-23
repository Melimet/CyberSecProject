import express from 'express'
import { userRouter } from './routes/user'
import { loginRouter } from './routes/login'
const app = express()

app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

export default app