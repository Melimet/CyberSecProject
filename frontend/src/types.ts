export interface UserType {
  username: string
  password: string
  token: string
  paymentInfo: {
    cardNumber: number
    expirationDate: string
    cvc: string
  }
}