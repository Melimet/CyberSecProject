import app from './app'
import http from 'http'
import { userRouter } from './routes/user'

const server = http.createServer(app)
const PORT = 3000

app.use('/api/users', userRouter)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
