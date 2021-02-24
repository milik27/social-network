import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-size: ${({ theme }) => theme.fontSize};
    color: ${({ theme }) => theme.palette.common.text};
    background-color: ${({ theme }) => theme.palette.background.dark};
    padding: 0;
    margin: 0;
  }
`
