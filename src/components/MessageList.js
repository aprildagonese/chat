import React from 'react'

class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list">
        {this.props.messages.map((message, index) => {
          return (
            <div key={index}>{message.senderId}: {message.text}</div>
          )
        })}
      </div>
    )
  }
}

export default MessageList
