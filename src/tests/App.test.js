import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new Adapter()})

describe('App', () => {
  let mockState
  let wrapper
  let mockEvent

  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have proper default state', () => {
    expect(wrapper.state()).toEqual({
      messages: []
    })
  })

  it('should load messages into state', () => {
    expect(wrapper.state().messages).toHaveLength(0)

    wrapper = mount(<App/>)
    expect(wrapper.state().messages).not.toHaveLength(0)
  })

})
