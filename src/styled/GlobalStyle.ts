import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-size: ${({ theme }) => theme.fontSize};
  }
`
