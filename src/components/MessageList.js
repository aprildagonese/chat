import React from 'react'
import Message from './Message'

export default class MessageList extends React.Component {

  render() {
    return (
      <div id="message-list">
        {this.props.messages.map((message) => {
          return (
            <Message key={message.text}
                     senderId={message.senderId}
                     text={message.text}/>
          )
        })}
      </div>
    )
  }
}
