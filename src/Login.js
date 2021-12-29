import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap'


const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const submit = (event) => {
    event.preventDefault()
    console.log(username,password)
  }

  return (
    <div>
      <h3>Login Here!</h3>
        <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            id="username"
            type="text"
            value={username}
            onChange={({target}) => setUsername(target.value)}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            value={password}
            onChange={({target}) => setPassword(target.value)}
          />
          <Button id="login-button" type="submit">Login</Button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default LoginForm
