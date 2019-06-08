import React from 'react'

function Message(props) {
  return (
    <div className="message">
      {props.senderId}: {props.text}
    </div>
  )
}

export default Message
