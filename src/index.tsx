import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { rootStore } from '@src/store/rootStore'
import { defaultTheme } from '@src/styled/theme'
import { GlobalStyle } from '@src/styled/GlobalStyle'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Provider store={rootStore}>
          <App />
          <GlobalStyle />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
