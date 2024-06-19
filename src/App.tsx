import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/defaultLayout";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/Global";
import { IssueDetails } from "./pages/IssueDetails";


export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/issue/:id" element={<IssueDetails/>}/>
      </Route>
    </Routes>
    <GlobalStyle/>
   </ThemeProvider>
  )
}

