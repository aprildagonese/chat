import React from "react";
import Enzyme, { shallow, mount } from 'enzyme'
import SendMessageForm from "../components/SendMessageForm";
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new Adapter()})

describe('SendMessageForm', () => {
  let mockState
  let wrapper
  let mockEvent
  let sendMessageProp

  beforeEach(() => {
    sendMessageProp = jest.fn()
    wrapper = shallow(
      <SendMessageForm sendMessage={sendMessageProp}/>
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have proper default state', () => {
    expect(wrapper.state()).toEqual({
      message: ''
    })
  })

  it('should update state with input', () => {
    wrapper.find("input").simulate("change", {
      target: {value: "hello"}
    })
    expect(wrapper.state()).toEqual({
      message: "hello"
    })
  })

  it('should clear state upon submit', () => {
    wrapper = mount(<SendMessageForm sendMessage={sendMessageProp}/>)

    wrapper.find("input").simulate("change", {
      target: {value: "hello"}
    })
    wrapper.find("input").simulate("submit", {})

    expect(wrapper.state()).toEqual({
      message: ''
    })
  })

});
