import React, { Component } from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { App } from './App'

const setUp = () => shallow(<App />)

describe('Should render App component', () => {
  let component: ShallowWrapper<any, Component['state'], Component>
  beforeEach(() => {
    component = setUp()
  })
  it('should contain .app', () => {
    const wrapper = component.find('.App')
    expect(wrapper.length).toBe(1)
  })
})
