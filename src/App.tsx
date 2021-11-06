import DashboardPage from "pages/dashboard/dashboardPage"
import Hero from "pages/landing-page/components/Hero/Hero"
import { PracticeArea } from "pages/landing-page/components/PracticeArea/PracticeArea"
import StudyMaterial from "pages/landing-page/components/StudyMaterial/StudyMaterial"
import Testimonial from "pages/landing-page/components/Testimonial/Testimonial"
import Login from "pages/login-and-signup/login-page/Login"
import Signedup from "pages/login-and-signup/signup-page/Signedup"
import Signup from "pages/login-and-signup/signup-page/Signup"
import Footer from "pages/public-component/Footer/Footer"
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"
import theme from "styles/theme"

import Navbar from "./pages/public-component/Navbar/Navbar"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PracticeArea />
      <StudyMaterial />
      <Testimonial />
      <Footer />
    </>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signedup" element={<Signedup />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
