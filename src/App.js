import Chatkit from '@pusher/chatkit-client'
import React from 'react'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import './App.css';

import { instanceLocator, chatkitUrl } from './config'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: 'User 1',
      tokenProvider: new Chatkit.TokenProvider({
        url: chatkitUrl
      })
    })

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.currentUser.subscribeToRoom({
          roomId: "31225048",
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              })
            }
          }
        })
      })
      .catch(error => {
        console.log("Error: ", error)
      })
  }

  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text: text,
      roomId: "31225048"
    })
  }

  render(){
    return (
      <div className="app">
      <MessageList messages={this.state.messages}/>
      <SendMessageForm sendMessage={this.sendMessage}/>
      </div>
    );
  }
}
