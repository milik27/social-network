import Enzyme from 'enzyme'
// todo
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import 'jest-styled-components'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

// Fail tests on any warning
console.error = (message: any) => {
  throw new Error(message)
}
