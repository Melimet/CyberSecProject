import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './Login'
import {Button} from "react-bootstrap";
import userinfo from './userinfo.json'

const App = () => {

  const [user, setUser] = useState(undefined)
  const users = userinfo.users

  console.log(users)

  const logOut = () => {
    setUser(undefined)
    console.log("onnas")
    return (
      <div>
      ${LoginForm(user,setUser())}</div>
    )
  }

  const loggedInAs = () => {
    return (
      <div>
        <p>Logged in as {user}</p>
        <Button onClick={logOut}>Log out</Button>
      </div>
    )
  }

  const loginStatus = () => {
    return (
      user === undefined ? LoginForm(user, setUser) : loggedInAs()
    )
  }

  return (
    <div>
      <h1>Welcome to SecureApp!</h1>
      {loginStatus(user, setUser)}

    </div>
  )
}


ReactDOM.render(<App/>,
  document.getElementById('root')
)
