import express from 'express'
import { userRouter } from './routes/user'
import { loginRouter } from './routes/login'
import cors from 'cors'
import morgan from 'morgan'
const app = express()
// FIX FLAW 4: app.use(cors({origin: “http://localhost:3000”}))
app.use(cors())
//FIX FLAW 5: app.use(morgan('tiny'))
app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

export default app