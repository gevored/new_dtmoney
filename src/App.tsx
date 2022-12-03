import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaul"; 


export function App() {

  return (

    <ThemeProvider theme={defaultTheme}>
      oi
      <GlobalStyle/>

    </ThemeProvider>
  )
}
