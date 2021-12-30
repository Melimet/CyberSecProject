import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap'
import userinfo from './userinfo.json'


const LoginForm = (user, setUser) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const users = userinfo.users


  const loginUser = (foundUser) => {
    console.log(foundUser.username)
    return(
    setUser(foundUser.username))
  }

  const submit = (event) => {
    event.preventDefault()
    console.log(username,password)

    const foundUser = users.find(user => user.username === username)
    console.log("haku")
    console.log(foundUser)

    if (foundUser.password === password){
     console.log("logging in")
     loginUser(foundUser)
    }else if (foundUser.password != password){
      postMessage(`Oops you must have mistyped your password! Password for ${foundUser.username} is ${foundUser.password}`)
    }else{
      postMessage(`No user found with that name.`)
    }
    ///Sit tolla kattoo jos passu matchaa tai kerro käyttäjän salis
    //Jos ei löydy käyttäjää nii eti salasanalla ja kerro sen käyttäjänimi

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
