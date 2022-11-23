interface MessageProps {
  message: string
}

function Message({ message }: MessageProps) {

  if (!message) return <></>

  return (
    <p>🚨🚨🚨NOTIFICATION: {message} 🚨🚨🚨</p>
  )
}

export default Message