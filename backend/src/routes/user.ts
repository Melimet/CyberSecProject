import express from "express";
import { getUsers } from "../services/userService";

const userRouter = express.Router()

//TODO: TEST USE ONLY, DONT PUT IN PRODUCTION!!!!!!
userRouter.get('/', async (_request, response) => {
  const users = getUsers()
  return response.json(users)
})

export { userRouter }
