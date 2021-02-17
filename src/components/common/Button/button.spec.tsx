import { shallow, mount } from 'enzyme'
import React from 'react'
import { Btn, Button, ButtonProps } from '@src/components/common/Button/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@src/styled/theme'

const setUp = (props: ButtonProps) => shallow(<Button {...props} />)
const setMount = (props: ButtonProps) =>
  mount(
    <ThemeProvider theme={defaultTheme}>
      <Button {...props} />
    </ThemeProvider>
  )

describe('Should render Button component', () => {
  it('should render button', () => {
    const component = setUp({})
    const node = component.find(Btn)
    expect(node.length).toBe(1)
  })

  it('should create a medium size', () => {
    const wrapper = setMount({ size: 'medium' })
    const node = wrapper.find(Btn)
    expect(node).toHaveStyleRule('padding', '10px 40px')
  })

  it('should create a default size', () => {
    const wrapper = setMount({})
    const node = wrapper.find(Btn)
    expect(node).toHaveStyleRule('padding', '10px 40px')
  })

  it('should create a small size', () => {
    const wrapper = setMount({ size: 'small' })
    const node = wrapper.find(Btn)
    expect(node).toHaveStyleRule('padding', '5px 20px')
  })

  it('should create a large size', () => {
    const wrapper = setMount({ size: 'large' })
    const node = wrapper.find(Btn)
    expect(node).toHaveStyleRule('padding', '15px 60px')
  })

  it('should create a outline', () => {
    const wrapper = setMount({ outline: true })
    const node = wrapper.find(Btn)
    expect(node).toHaveStyleRule('background-color', 'transparent')
  })
})
