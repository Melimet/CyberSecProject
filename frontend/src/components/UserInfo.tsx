import { UserType } from "../types"

interface UserInfoProps {
  user: UserType

  logOutUser: () => void
}

function UserInfo({ user, logOutUser }: UserInfoProps) {
  console.log(user)
  return (
    <div>
      <p>Logged in as: {user.username}</p>
      <p>token: {user.token}</p>
      <h2>credit card info</h2>
      <p>Card number: {user.paymentInfo.cardNumber}</p>
      <p>expiration date: {user.paymentInfo.expirationDate}</p>
      <p>cvc: {user.paymentInfo.cvc}</p>
      <button onClick={() => logOutUser()}>Log out</button>
    </div>
  )
}

export default UserInfo
