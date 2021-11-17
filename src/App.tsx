import DashboardPage from "pages/platform/dashboard/dashboardPage"
import LandingPage from "pages/landing-page/HomePage"
import Login from "pages/landing-page/login-and-signup/login-page/Login"
import Signedup from "pages/landing-page/login-and-signup/signup-page/Signedup"
import Signup from "pages/landing-page/login-and-signup/signup-page/Signup"
import OnlinePractice from "pages/platform/practicing/PracticeHomepage/OnlinePractice"
import RAList from "pages/platform/practicing/QuestionType/RA/QuestionList/RAList"
import React from "react"
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
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signedup" element={<Signedup />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/practice" element={<OnlinePractice />} />
          <Route path="/practice/Speaking/RA" element={<RAList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
