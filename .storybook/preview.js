import React from "react"
import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { defaultTheme } from "../src/styled/theme"
import { GlobalStyle } from "../src/styled/GlobalStyle"
import {ThemeProvider} from "styled-components"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const themes = [defaultTheme]
addDecorator(withThemesProvider(themes))
addDecorator(s => <ThemeProvider theme={defaultTheme}><GlobalStyle />{s()}</ThemeProvider>)


