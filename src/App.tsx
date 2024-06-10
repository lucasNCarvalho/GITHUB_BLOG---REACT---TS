import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/Global";
import { Header } from "./components/Header";

export function App() {


  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
    <Header/>
   </ThemeProvider>
  )
}

