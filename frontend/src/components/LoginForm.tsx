import React, { useState } from "react"

interface UserInfoProps {
  loginUser: (username: string, password: string) => void
}

function LoginForm({ loginUser }: UserInfoProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    loginUser(username, password)

    setUsername("")
    setPassword("")
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        username:{" "}
        <input
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          type="text"
        />
        password:{" "}
        <input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type="text"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default LoginForm
