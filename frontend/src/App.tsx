import axios from "axios"
import { useEffect, useState } from "react"
import "./App.css"
import LoginForm from "./components/LoginForm"
import Message from "./components/Message"
import UserInfo from "./components/UserInfo"
import { UserType } from "./types"

function App() {
  const [user, setUser] = useState<UserType>()
  const [message, setMessage] = useState("")

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedUser")

    if (loggedUser) {
      setUser(JSON.parse(loggedUser))
    }
  }, [])

  async function loginUser(username: string, password: string) {
    try {
      const content = { username, password }
      const url = "http://localhost:3001/api/login"

      const response = await axios.post(url, content)

      if (!response.data.username) {
        setMessage(response.data?.error)
        return
      }

      const data = response.data
      console.log("DATA", data)
      setUser(data)
      window.localStorage.setItem("loggedUser", JSON.stringify(data))
      setMessage(`Welcome back, ${data.username}!`)
    } catch (error: unknown) {
      setMessage(
        `ERROR: ${error instanceof Error ? error.message : "unknown error"}`
      )
    }
  }

  function logOutUser() {
    setUser(undefined)
    window.localStorage.removeItem('loggedUser')
    setMessage(`Successfully logged out!`)
  }

  return (
    <div>
      <h1>secureApp</h1>
      <Message message={message} />
      {!user ? (
        <LoginForm loginUser={loginUser} />
      ) : (
        <UserInfo user={user} logOutUser={logOutUser} />
      )}
    </div>
  )
}

export default App
