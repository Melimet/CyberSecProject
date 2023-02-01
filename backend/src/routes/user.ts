import express from "express"
import { getUsers } from "../services/userService"

const userRouter = express.Router()

//if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  userRouter.get("/", (_request, response) => {
    const users = getUsers()
    return response.json(users)
  })
//}
export { userRouter }
