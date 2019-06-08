import React from 'react'

export default class SendMessageForm extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form className="send-message-form"
            onSubmit={this.handleSubmit}>
        <input className="message-input"
               onChange={this.handleChange}
               placeholder="Type your message and hit ENTER"
               value={this.state.message}
               type="text"/>
      </form>
    )
  }
}
