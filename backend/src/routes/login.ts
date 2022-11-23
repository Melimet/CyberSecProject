import express from "express"
import { loginUser } from "../services/userService"

const loginRouter = express.Router()

loginRouter.post("/", async (request, response) => {
  console.log("CONTENTS:", request.body)
  const { username, password } = request.body

  if (!username || !password)
    return response.send({ error: "Missing username or password" })

  const user = loginUser(username, password)

  if (!user)
    return response
      
      .send({ error: "Wrong password and/or username" })

  if (typeof user === "string")
    return response.send({ error: user })
  
  return response.status(200).send(user)
})

export { loginRouter }
