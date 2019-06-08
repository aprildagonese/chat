import Chatkit from '@pusher/chatkit-client'
import React from 'react'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import './App.css';

import { instanceLocator, tokenUrl, key } from './config'

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
      key: key,
      userId: 'adagonese',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager
      .connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
          roomId: "31224900",
          hooks: {
            onMessage: message => {
              console.log('message.text: ', message.text);
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

  render(){
    return (
      <div className="app">
      <RoomList />
      <MessageList messages={this.state.messages}/>
      <SendMessageForm />
      <NewRoomForm />
      </div>
    );
  }
}
