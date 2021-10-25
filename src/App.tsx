import Footer from "pages/landing-page/components/Footer/Footer"
import Hero from "pages/landing-page/components/Hero/Hero"
import { PracticeArea } from "pages/landing-page/components/PracticeArea/PracticeArea"
import StudyMaterial from "pages/landing-page/components/StudyMaterial/StudyMaterial"
import Testimonial from "pages/landing-page/components/Testimonial/Testimonial"
import Login from "pages/login-and-signup/login-page/Login"
import Signup from "pages/login-and-signup/signup-page/Signup"
import Signedup from "pages/login-and-signup/signup-page/Signedup"
import React from "react"
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"
import theme from "styles/theme"

import Navbar from "./pages/landing-page/components/Navbar/Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
      <Hero />
      <PracticeArea />
      <StudyMaterial />
      <Testimonial />
    </>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/signedup' component={Signedup} />
      </Switch>
      <Footer />
    </Router>
    </ThemeProvider>
  )
}

export default App
