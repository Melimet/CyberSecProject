import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import LoginForm from './Login'
import userinfo from './userinfo.json'

const App = () => {

  const [user, setUser] = useState(0)

  return(
    <div>
      <h1>Welcome to SecureApp!</h1>
      {loginStatus(user)}

    </div>
  )
}
const loginStatus = (props) => {
  return (
    props.user === 0 ? "Logged in as " : LoginForm()
  )
}


ReactDOM.render(<App/>,
  document.getElementById('root')
)
