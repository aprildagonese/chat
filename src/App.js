import './App.css';
import Chatkit from '@pusher/chatkit'
import React from 'react'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

function App() {
  return (
    <div className="app">
      <RoomList />
      <MessageList />
      <SendMessageForm />
      <NewRoomForm />
    </div>
  );
}

export default App;
