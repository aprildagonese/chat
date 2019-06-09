import React from "react";
import Enzyme, { shallow } from 'enzyme'
import MessageList from "../components/MessageList";
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new Adapter()})

describe("MessageList", () => {
  let wrapper
  let mockMessages = [{
        senderId: 'adagonese',
        text: 'Did you hear about the restaurant on the moon?'
    },
    {
        senderId: 'adagonese',
        text: 'Great food, no atmosphere'
    }]

  beforeEach(() => {
    wrapper = shallow(
      <MessageList messages={mockMessages}/>
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
});
