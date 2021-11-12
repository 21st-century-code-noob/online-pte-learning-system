import LandingPage from "pages/landing-page/landing-page"
import Platform from "pages/platform/Platform"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"
import theme from "styles/theme"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/*" element={<LandingPage />} />
          <Route path="/platform/*" element={<Platform />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
