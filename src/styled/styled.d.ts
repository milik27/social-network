import 'styled-components'

type Palette = {
  lighter: string
  light: string
  medium: string
  dark: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    fontSize: string
    palette: {
      common: {
        black: string
        white: string
        gray: string
        text: string
        invertText: string
      }
      background: Palette
      primary: Palette
      secondary: Palette
    }
  }
}
