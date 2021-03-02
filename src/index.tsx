import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { configureAppStore } from '@src/store/rootStore'
import { defaultTheme } from '@src/styled/theme'
import { GlobalStyle } from '@src/styled/GlobalStyle'
import { App } from './App'

const store = configureAppStore()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
          <App />
          <GlobalStyle />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
