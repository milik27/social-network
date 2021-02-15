import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { rootStore } from '@src/store/rootStore'
import { defaultTheme } from '@src/styled/theme'
import { GlobalStyle } from '@src/styled/GlobalStyle'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Provider store={rootStore}>
        <App />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
